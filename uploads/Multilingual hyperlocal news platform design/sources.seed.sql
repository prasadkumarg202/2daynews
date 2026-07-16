-- ============================================================
--  Vaarta — source & region seeds for te / ta / hi / kn
--  Run AFTER supabase-schema.sql (languages are already seeded there).
--  All sources here are FREE (Google News RSS). Geo-search feeds give
--  district-level hyperlocal content; the main feeds give state/language.
-- ============================================================

-- ---------- regions (centroids only; add PostGIS polygons later) ----------
insert into regions (language_id, state, district, centroid, is_metro)
select l.id, r.state, r.district,
       st_setsrid(st_makepoint(r.lng, r.lat), 4326)::geography, r.metro
from languages l
join (values
  -- Telugu
  ('te','Telangana','Hyderabad',      78.4867, 17.3850, true),
  ('te','Andhra Pradesh','Vijayawada', 80.6480, 16.5062, false),
  ('te','Andhra Pradesh','Visakhapatnam',83.2185,17.6868, true),
  ('te','Telangana','Warangal',        79.5941, 17.9689, false),
  -- Tamil
  ('ta','Tamil Nadu','Chennai',        80.2707, 13.0827, true),
  ('ta','Tamil Nadu','Coimbatore',     76.9558, 11.0168, false),
  ('ta','Tamil Nadu','Madurai',        78.1198,  9.9252, false),
  -- Hindi (GPS-driven)
  ('hi','Uttar Pradesh','Lucknow',     80.9462, 26.8467, true),
  ('hi','Madhya Pradesh','Bhopal',     77.4126, 23.2599, true),
  ('hi','Delhi','New Delhi',           77.2090, 28.6139, true),
  -- Kannada
  ('kn','Karnataka','Bengaluru',       77.5946, 12.9716, true),
  ('kn','Karnataka','Mysuru',          76.6394, 12.2958, false),
  ('kn','Karnataka','Mangaluru',       74.8560, 12.9141, false)
) as r(code,state,district,lng,lat,metro) on r.code = l.code
on conflict do nothing;

-- ---------- helper to grab ids ----------
-- language main feeds (state/language level, region_id null)
insert into sources (name, type, url, language_id, is_paid, trust_score, poll_seconds)
select s.name, 'rss', s.url, l.id, false, 0.7, 300
from languages l
join (values
  ('te','Google News Telugu','https://news.google.com/rss?hl=te&gl=IN&ceid=IN:te'),
  ('ta','Google News Tamil',  'https://news.google.com/rss?hl=ta&gl=IN&ceid=IN:ta'),
  ('hi','Google News Hindi',  'https://news.google.com/rss?hl=hi&gl=IN&ceid=IN:hi'),
  ('kn','Google News Kannada','https://news.google.com/rss?hl=kn&gl=IN&ceid=IN:kn')
) as s(code,name,url) on s.code = l.code
on conflict do nothing;

-- national feed (shared across all languages; language_id null)
insert into sources (name, type, url, language_id, is_paid, trust_score, poll_seconds)
values ('Google News India (National)','rss',
        'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en', null, false, 0.8, 300)
on conflict do nothing;

-- district hyperlocal feeds (region_id set → geo-fenced to that district)
insert into sources (name, type, url, language_id, region_id, is_paid, trust_score, poll_seconds)
select 'GNews '||reg.district, 'rss',
       'https://news.google.com/rss/search?q='||replace(reg.district,' ','%20')||
         '&hl='||l.code||'&gl=IN&ceid=IN:'||l.code,
       l.id, reg.id, false, 0.6, 300
from regions reg
join languages l on l.id = reg.language_id
on conflict do nothing;
