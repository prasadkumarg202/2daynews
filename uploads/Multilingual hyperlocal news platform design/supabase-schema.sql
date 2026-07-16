-- ============================================================
--  VAARTA — Multilingual Hyperlocal News Platform
--  Supabase / PostgreSQL schema  (paste into SQL Editor)
--  Enables geo-fencing, AI pipeline tracking, personalization,
--  subscriptions & monetization.
-- ============================================================

create extension if not exists "uuid-ossp";
create extension if not exists postgis;        -- district-level geo-fencing
create extension if not exists pg_trgm;         -- fuzzy dedup / search

-- ---------- enums ----------
create type article_status as enum ('ingested','processing','review','published','rejected','archived');
create type source_type    as enum ('rss','google_news','gdelt','mediastack','newsapi','telegram','twitter','youtube','govt_rss','citizen');
create type user_tier       as enum ('free','plus','epaper');
create type sub_plan        as enum ('plus_monthly','plus_yearly','epaper_monthly');
create type engage_type     as enum ('view','read','bookmark','share','follow','like');
create type pipeline_stage  as enum
  ('collect','dedup','fact_verify','fake_detect','lang_detect','geo_detect',
   'category','priority','seo','rewrite','headline','thumbnail','push','publish','social','archive');

-- ---------- reference / geo ----------
create table languages (
  id          uuid primary key default uuid_generate_v4(),
  code        text unique not null,           -- 'te','ta','hi','kn'
  native      text not null,                  -- 'తెలుగు'
  english     text not null,
  is_active   boolean default true,
  default_geo text,                           -- fallback region for the language
  created_at  timestamptz default now()
);

create table regions (
  id          uuid primary key default uuid_generate_v4(),
  language_id uuid references languages(id),
  country     text default 'IN',
  state       text not null,                  -- 'Telangana'
  district    text,                           -- 'Hyderabad'  (null = state-level)
  geom        geography(multipolygon,4326),   -- polygon for GPS point-in-region
  centroid    geography(point,4326),
  is_metro    boolean default false
);
create index regions_geom_gix on regions using gist (geom);

-- ---------- sources ----------
create table sources (
  id           uuid primary key default uuid_generate_v4(),
  name         text not null,
  type         source_type not null,
  url          text,
  language_id  uuid references languages(id),  -- null = language-agnostic (national)
  is_paid      boolean default false,
  trust_score  real default 0.5,              -- 0..1 feeds fact-verify weighting
  poll_seconds int default 120,
  is_active    boolean default true,
  last_polled  timestamptz
);

-- ---------- articles (the core) ----------
create table articles (
  id             uuid primary key default uuid_generate_v4(),
  language_id    uuid references languages(id) not null,
  region_id      uuid references regions(id),          -- null for pure national
  primary_source uuid references sources(id),
  category       text not null,                        -- politics, cinema, crime, jobs...
  is_national    boolean default false,                -- shown across ALL languages
  is_breaking    boolean default false,
  priority       smallint default 0,                   -- ranking boost

  -- AI-generated fields (100% rewrite, facts preserved)
  headline       text,
  short_headline text,
  summary        text,
  body           text,
  seo_title      text,
  meta_desc      text,
  slug           text unique,
  faq            jsonb,
  tags           text[],
  image_prompt   text,
  voice_url      text,

  -- pipeline signals
  fake_score     real,        -- 0..1  (>0.5 => hold for review)
  dedup_hash     text,        -- simhash cluster key
  confidence     real,
  status         article_status default 'ingested',

  published_at   timestamptz,
  created_at     timestamptz default now()
);
create index articles_feed_ix on articles (language_id, region_id, category, published_at desc)
  where status = 'published';
create index articles_national_ix on articles (is_national, published_at desc)
  where status = 'published';
create index articles_dedup_ix on articles (dedup_hash);
create index articles_slug_ix  on articles (slug);

-- dedup source map (many raw items -> one story)
create table article_sources (
  article_id uuid references articles(id) on delete cascade,
  source_id  uuid references sources(id),
  raw_url    text,
  primary key (article_id, source_id)
);

-- pipeline job trace (feeds the admin "live queue")
create table ingest_jobs (
  id          uuid primary key default uuid_generate_v4(),
  article_id  uuid references articles(id) on delete cascade,
  source_id   uuid references sources(id),
  stage       pipeline_stage not null,
  status      text default 'queued',      -- queued|running|done|failed
  confidence  real,
  model       text,                       -- 'gemini-2.0','claude',...
  started_at  timestamptz default now(),
  finished_at timestamptz
);
create index ingest_jobs_live_ix on ingest_jobs (stage, started_at desc);

-- ---------- users & personalization ----------
create table users (
  id          uuid primary key default uuid_generate_v4(),
  phone       text unique,
  language_id uuid references languages(id),
  location    geography(point,4326),       -- GPS => region_id via point-in-poly
  region_id   uuid references regions(id),
  tier        user_tier default 'free',
  created_at  timestamptz default now()
);

create table follows (
  user_id  uuid references users(id) on delete cascade,
  topic    text not null,                  -- category or tag
  primary key (user_id, topic)
);

create table bookmarks (
  user_id    uuid references users(id) on delete cascade,
  article_id uuid references articles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, article_id)
);

create table engagement (
  id         uuid primary key default uuid_generate_v4(),
  user_id    uuid references users(id) on delete cascade,
  article_id uuid references articles(id) on delete cascade,
  type       engage_type not null,
  dwell_ms   int,
  created_at timestamptz default now()
);
create index engagement_reco_ix on engagement (user_id, created_at desc);

-- ---------- monetization ----------
create table subscriptions (
  id         uuid primary key default uuid_generate_v4(),
  user_id    uuid references users(id) on delete cascade,
  plan       sub_plan not null,
  status     text default 'active',
  renews_at  timestamptz,
  created_at timestamptz default now()
);

create table ad_placements (
  id          uuid primary key default uuid_generate_v4(),
  slot        text not null,               -- feed_inline, article_top, splash...
  language_id uuid references languages(id),
  region_id   uuid references regions(id),
  advertiser  text,
  is_native   boolean default false,
  rpm         numeric,
  active_from timestamptz,
  active_to   timestamptz
);

-- ---------- notifications ----------
create table push_tokens (
  user_id uuid references users(id) on delete cascade,
  token   text primary key,
  platform text                            -- android|ios|web
);

-- ============================================================
--  GEO-FENCING HELPER  — resolve a GPS point to its region
-- ============================================================
create or replace function region_for_point(lng double precision, lat double precision)
returns uuid language sql stable as $$
  select id from regions
  where st_covers(geom, st_setsrid(st_makepoint(lng,lat),4326)::geography)
  order by is_metro desc limit 1;
$$;

-- ============================================================
--  FEED QUERY  — the heart of geo-fencing.
--  Returns local (language + region) news + national, hides
--  other states' local content.
-- ============================================================
create or replace function get_feed(p_language uuid, p_region uuid, p_category text default null)
returns setof articles language sql stable as $$
  select * from articles a
  where a.status = 'published'
    and (
      -- national is shared across every language
      a.is_national = true
      -- OR local content that matches this language AND region/state
      or (a.language_id = p_language
          and (a.region_id = p_region or a.region_id is null))
    )
    and (p_category is null or a.category = p_category)
  order by a.is_breaking desc, a.priority desc, a.published_at desc
  limit 60;
$$;

-- ============================================================
--  ROW-LEVEL SECURITY (Supabase Auth)
-- ============================================================
alter table users        enable row level security;
alter table bookmarks    enable row level security;
alter table follows      enable row level security;
alter table engagement   enable row level security;
alter table subscriptions enable row level security;

create policy "own_user"   on users        for all using (auth.uid() = id);
create policy "own_marks"  on bookmarks     for all using (auth.uid() = user_id);
create policy "own_follow" on follows       for all using (auth.uid() = user_id);
create policy "own_engage" on engagement    for all using (auth.uid() = user_id);
create policy "own_subs"   on subscriptions for all using (auth.uid() = user_id);

-- published articles are world-readable; writes are service-role only (pipeline)
alter table articles enable row level security;
create policy "read_published" on articles for select using (status = 'published');

-- ============================================================
--  SEED  — the 4 launch languages
-- ============================================================
insert into languages (code, native, english, default_geo) values
  ('te','తెలుగు','Telugu','Hyderabad'),
  ('ta','தமிழ்','Tamil','Chennai'),
  ('hi','हिंदी','Hindi','Lucknow'),
  ('kn','ಕನ್ನಡ','Kannada','Bengaluru')
on conflict (code) do nothing;
