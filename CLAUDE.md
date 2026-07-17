# CLAUDE.md — tap2news

**Build spec for a multilingual, hyperlocal, AI-powered news platform for India.**
Self-contained: everything needed to build the platform is in this file. Design target 50M users.

---

## 0. Ground truth before you start

**Four names, one product.** `tap2news` (design system, this folder), `2daynews` (the GitHub remote, the zips), `Vaarta` / `vaartanow` (the SQL schema, the running app's `package.json`). **`tap2news` is the name of record.** Rename older names when you touch their files; do not introduce a fifth.

**What already exists on disk — verified, not assumed:**

| Location | What it is | State |
|---|---|---|
| `d:/websites/tap2news` | Design system: tokens, 9 component contracts, 4 UI-kit prototypes, brand guide | Visual spec. No app. |
| `d:/websites/newsapp` | **A working Next.js 14 app** (`package.json` name: `vaarta`) — geo-fence feed engine, ingestion, classifier, `[lang]` routes, admin, sitemap | **Runs.** tsc clean, build passes, 19 pages. Design system applied. Git: local only, no remote. |
| `d:/websites/tap2news/uploads/Multilingual hyperlocal news platform design/` | Postgres schema + Supabase ingest Edge Function + source seeds | Schema is complete and correct in shape. |
| `d:/websites/VarthaNow` | A separate Next.js app, remote `enirchibs/VarthaNow` | Unrelated lineage. Do not merge blindly. |

**Do not rebuild what runs.** The app in `newsapp` already implements §4, §5, §6 and §8 of this spec. This document is the specification *it should conform to* — when spec and code disagree, fix the smaller of the two, and say which you changed.

**Generated files — regenerate, never hand-edit:** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

---

## 1. The product

A news platform where **language selects a whole world**, not a translation. Pick Telugu and the entire app — feed, categories, politics, cinema, jobs, weather, astrology, trends, push — becomes Andhra Pradesh and Telangana. Pick Tamil and it becomes Tamil Nadu and Kollywood, with zero Telugu local content. Pick Hindi and the app follows GPS: Lucknow gives UP politics and Lucknow crime; Bhopal gives MP.

Around the news sit the daily-utility surfaces Indian readers actually open an app for: gold rates, Sensex/Nifty, weather and AQI, live cricket, jobs, astrology/panchang.

Competitive set: Dailyhunt, Way2News, PublicVibe, Inshorts, Google News, News18, OneIndia, Eenadu, Sakshi, TV9, ABP Live.

### The rule that defines the product

> **Language + region determines every byte in the feed. National is the sole exception.**

Every decision below exists to enforce this cheaply and correctly. Get it wrong and this is just another aggregator.

---

## 2. Language ecosystems

Each language is a **closed world**. Local content never crosses a language boundary.

| Code | Native | Cinema | States (local news allowed) | Default | GPS-driven |
|---|---|---|---|---|---|
| `te` | తెలుగు | Tollywood | Telangana, Andhra Pradesh | hyderabad | no |
| `ta` | தமிழ் | Kollywood | Tamil Nadu, Puducherry | chennai | no |
| `kn` | ಕನ್ನಡ | Sandalwood | Karnataka | bengaluru | no |
| `ml` | മലയാളം | Mollywood | Kerala | thiruvananthapuram | no |
| `hi` | हिंदी | Bollywood | UP, MP, Delhi, Bihar, Rajasthan, Haryana, Jharkhand, Chhattisgarh, Uttarakhand, HP | lucknow | **yes** |

**Telugu shows:** AP + Telangana news, Tollywood, AP/TS politics, district news, Telugu crime/business/education/jobs/sports/festivals.
**Telugu hides:** Tamil politics, Karnataka politics, Kerala politics, Mumbai local, Delhi local — *unless national*.
**Hindi is different:** it spans many states, so the feed follows the user's location. Lucknow → UP politics + Lucknow crime + UP jobs. Bhopal → MP. Delhi → Delhi/NCR.

Each language config carries: `code`, `native`, `english`, `locale` (Google News `hl`), `cinema`, `states[]`, `defaultRegion`, `locationDriven`, `regions[]` (slug, district, state, lat, lng, isMetro), and `localHints[]` — keyword signals (English + native script) that keep a state-relevant story inside its ecosystem.

Adding a language = adding one config entry + label translations + source seeds. Nothing else. **Unlimited languages is a data property, not a code change.**

### National news — the only content that crosses

PM, President, Supreme Court, Parliament (Lok Sabha / Rajya Sabha), Union Budget, ISRO, Indian Army/Navy/IAF, Election Commission, NEET, UPSC, CBSE, Railways, RBI, Income Tax, SEBI, GST Council, monsoon, cyclones, World Cup / Team India / Olympics, international events affecting India.

**National detection must weigh signals, not match them.** A story is promoted to national only when national signals outweigh `localHints`. "RBI repo rate" → national. "RBI branch opens in Hyderabad" → Telugu-local. Getting this backwards floods every language with another state's news, which is the one failure the product cannot survive.

---

## 3. Architecture

```
SOURCES                INGESTION              AI PIPELINE            SERVING
─────────              ─────────              ───────────            ───────
RSS / Google News  ┐                      ┌ dedup (simhash)      ┌ get_feed(lang,region)
GDELT / RSSHub     ├─► poller (cron) ─────┤ fact verify          ├─► Redis (feed cache)
Publisher RSS      │   per-source          │ fake detect          │   Meilisearch
Govt PRs           │   poll_seconds        │ lang detect          │   Next.js PWA / RN
Telegram / X       │                       │ geo detect           │   Push (FCM)
YouTube            │                       │ category             │
Citizen uploads ───┘                       │ priority             │
                                           │ SEO                  │
                                           │ rewrite (LLM)        │
                                           │ headline             │
                                           │ thumbnail prompt     │
                                           └ publish ─────────────┘
                                                  │
                                          review queue (fake_score > 0.5)
                                                  └─► human moderator → publish/reject
```

**Boundaries, and why:**

- **Ingestion** — stateless workers, one job per (source, poll tick). Idempotent: re-running a source must never duplicate a story. **Dedup runs before the LLM call**, because the LLM call is the only step that costs real money.
- **AI pipeline** — *one* structured LLM call per new story does rewrite + classify + safety together. Do not split into separate calls; it triples cost for no quality gain.
- **Serving** — reads never touch the pipeline. The feed is one indexed query behind a cache.
- **Admin** — writes go through the service role, never the anon key.

**Stack.** Next.js 14 (App Router) + React + Tailwind, PWA-first, then Android/iOS (RN). Postgres via Supabase (schema, RLS, auth, realtime, `pg_cron` + `pg_net`). Redis for feed cache. Meilisearch for search. Cloudflare R2 for storage, Cloudflare CDN at the edge. FCM for push.

**On the backend contradiction:** older notes say NestJS + FastAPI. The code that exists is Supabase + Next.js API routes. **Start Supabase; extract later.** Rewriting into NestJS buys nothing today. Extract the ingest pipeline into a worker service (NestJS + BullMQ) when Edge Function limits actually bite — long-running LLM calls, retry semantics, and per-source concurrency are the three that will bite first. If you go the other way, delete the Supabase code so the next reader isn't misled.

**Storage must be swappable.** Put every read/write behind one `store` interface with two implementations: JSON file (zero external services, for dev) and Postgres. Feed logic depends only on the interface. This is how the app runs today and it is worth keeping.

---

## 4. Data model

Canonical: `uploads/Multilingual hyperlocal news platform design/supabase-schema.sql`. Port it as migration 1 — do not redesign it from prose.

Extensions: `uuid-ossp`, `postgis` (district geo-fencing), `pg_trgm` (fuzzy dedup/search).

**Enums**

```sql
article_status : ingested | processing | review | published | rejected | archived
source_type    : rss | google_news | gdelt | mediastack | newsapi | telegram | twitter | youtube | govt_rss | citizen
user_tier      : free | plus | epaper
sub_plan       : plus_monthly | plus_yearly | epaper_monthly
engage_type    : view | read | bookmark | share | follow | like
pipeline_stage : collect | dedup | fact_verify | fake_detect | lang_detect | geo_detect
                 | category | priority | seo | rewrite | headline | thumbnail | push | publish | social | archive
```

**Tables**

- `languages` — code, native, english, `default_geo`. Seed: te, ta, hi, kn (+ ml).
- `regions` — language_id, state, district, `geom geography(multipolygon,4326)`, `centroid geography(point,4326)`, `is_metro`. **GiST index on geom.**
- `sources` — name, `type source_type`, url, language_id (**null = national**), `is_paid`, `trust_score real 0..1`, `poll_seconds`, `is_active`, `last_polled`.
- `articles` — **the core.** language_id, region_id (**null = pure national**), primary_source, category, `is_national`, `is_breaking`, `priority smallint`; AI fields: headline, short_headline, summary, body, seo_title, meta_desc, `slug unique`, `faq jsonb`, `tags text[]`, image_prompt, voice_url; pipeline signals: `fake_score real`, `dedup_hash text`, `confidence real`, `status article_status`; `published_at`, `created_at`.
- `article_sources` — (article_id, source_id, raw_url). Many raw items → one story.
- `ingest_jobs` — article_id, source_id, `stage pipeline_stage`, status, confidence, `model text`, started_at, finished_at. **Powers the admin live queue.**
- `users` — phone, language_id, `location geography(point,4326)`, region_id, `tier user_tier`.
- `follows` (user_id, topic) · `bookmarks` (user_id, article_id) · `engagement` (user_id, article_id, `type engage_type`, **`dwell_ms`**) · `subscriptions` (plan, status, renews_at) · `ad_placements` (slot, language_id, region_id, advertiser, is_native, rpm, flight dates) · `push_tokens` (user_id, token pk, platform).

**Indexes that matter**

```sql
articles_feed_ix     on articles (language_id, region_id, category, published_at desc) where status='published'
articles_national_ix on articles (is_national, published_at desc)                      where status='published'
articles_dedup_ix    on articles (dedup_hash)
articles_slug_ix     on articles (slug)
regions_geom_gix     on regions using gist (geom)
engagement_reco_ix   on engagement (user_id, created_at desc)
ingest_jobs_live_ix  on ingest_jobs (stage, started_at desc)
```

**RLS.** On for users, bookmarks, follows, engagement, subscriptions (`auth.uid() = user_id`). Articles world-readable when `status='published'`; **writes service-role only.**

**TypeScript mirror** (1:1 with `articles`, so swapping JSON → Postgres changes nothing downstream):

```ts
interface Article {
  id: string; lang: string; region?: string; state?: string;
  category: string; isNational: boolean; isBreaking: boolean; priority: number;
  headline: string; shortHeadline: string; summary: string; body: string;
  seoTitle: string; metaDesc: string; slug: string; tags: string[];
  imagePrompt?: string; image?: string;
  publisher?: string; sourceId: string; sourceUrl: string;   // provenance — never optional in the UI
  fakeScore: number; dedupHash: string; confidence: number;
  aiRewritten: boolean;                                       // drives the "AI rewrite" mark
  status: "published" | "review";
  publishedAt: string; createdAt: string;                     // ISO
}
```

---

## 5. The geo-fence engine

This is the product. Two functions.

```sql
region_for_point(lng, lat) -> uuid    -- GPS → region, point-in-polygon, metro wins ties
get_feed(p_language, p_region, p_category) -> setof articles
```

```sql
-- get_feed IS the geo-fence
where status = 'published'
  and ( is_national = true                     -- crosses all languages
        or (language_id = p_language           -- or matches this language...
            and (region_id = p_region          -- ...and this region
                 or region_id is null)) )      -- ...or is language-wide
order by is_breaking desc, priority desc, published_at desc
```

**Application-side equivalent** (keep the two in sync — divergence here is a product bug, not a refactor):

```
visible(article, L, R) =
     article.isNational                                  # shared across ALL languages
  OR (article.lang == L AND region ∈ {R, state(R), language-level})

"Near Me" tightens local content to R's state only.
```

**Ranking.** `isBreaking` +100 · `priority × 10` · freshness `max(0, 48 - ageHours)` · hyperlocal match +25 · has image +3. Recency stays dominant — this is news.

Add later: `dwell_ms` engagement (**not clicks** — clicks reward clickbait, which the brand voice rejects), locality distance, source `trust_score`.

**GPS → region.** Two implementations, and they are not equivalent:
- **Polygon** (`region_for_point`, PostGIS `st_covers`) — correct, needs `regions.geom` populated.
- **Nearest-centroid** (squared euclidean over `regions[]`) — always resolves, approximate, no polygons needed.

Ship nearest-centroid as the fallback; load real district polygons (Datameet / Survey of India district GeoJSON) for the polygon path. **Without polygons `region_for_point` returns null for every lookup** — so the SQL path silently fails while the app path works. Do not assume one implies the other.

---

## 6. Ingestion + AI pipeline

**Order is load-bearing:**

```
collect → dedup → fact_verify → fake_detect → lang_detect → geo_detect
        → category → priority → seo → rewrite → headline → thumbnail
        → push → publish → social → archive
```

Trace every stage into `ingest_jobs` with model + confidence + timings. That table *is* the admin live queue; if nothing writes it, the console has nothing to show.

**Dedup.** Cluster key on `dedup_hash`. Real simhash/minhash over the **body**, with `pg_trgm` for the fuzzy pass. A naive "lowercase, strip punctuation, first 8 words, sort" title hash false-merges short headlines and misses reworded ones — and every dedup miss is a wasted paid LLM call. On a dup hit, do not insert: map the new source into `article_sources` so the story shows all publishers that carried it.

**Fact verification, weighted by trust.** `sources.trust_score` exists for this. A story carried by three sources with trust > 0.7 needs less scrutiny than a lone Telegram post. Use it or delete the column.

**Fake-news gate.** `fake_score > 0.5` → `status='review'`, never published. Human moderator approves or rejects. Citizen uploads are an untrusted path into a trust product: **AI moderation *plus* human review before publish, always.**

**The rewrite call.** One structured LLM call per *new* story, returning strict JSON:

```
headline · short_headline · summary · body · seo_title · meta_desc · slug
faq · tags[] · image_prompt · category · is_national · is_breaking
language_code · fake_score · confidence
```

**Rewrite rules — non-negotiable:** never copy; rewrite 100%; preserve every fact; invent nothing; no hallucination. If the model is unavailable, fall back to **extractive** summary and set `aiRewritten = false` — never fabricate, and never mark un-rewritten content as rewritten.

**Cost control — the LLM is the only real cost.** Feeds are free. So: dedup aggressively before the call; cache by `dedup_hash`; batch where possible; route by difficulty (cheap model for classify, stronger for rewrite). Track spend per model in the admin API screen.

**Robustness the first implementation always misses:** retries with backoff; per-source concurrency (not a sequential `for` loop); a per-source error budget; no silent truncation (`slice(0, 12)` quietly drops the rest of every feed — if you cap, **log what you dropped**); handle every `source_type`, not just `rss`.

---

## 7. Sources — free first

Free tier carries the product. Seed Google News RSS per language (`hl=te&gl=IN&ceid=IN:te`) plus district-level geo-search feeds.

- **Free, use now:** Google News RSS, publisher RSS, state government RSS, GDELT, RSSHub, Google Trends, free cricket RSS, OpenWeather free tier, free gold/market APIs, YouTube/X public feeds.
- **Paid, only where latency or coverage justifies it:** MediaStack / NewsAPI for a latency-critical breaking desk; astrology API (no credible free panchang source exists); premium jobs feeds.

**Utility surfaces:** gold (MCX, 22K/24K, silver, district prices) · markets (Sensex, Nifty, Bank Nifty, USD-INR, crypto, commodities) · weather (OpenWeather/IMD, AQI, cyclone alerts, rainfall, humidity, sunrise/sunset) · cricket (live scores, commentary, scorecards, points table) · jobs (govt, private, freshers, internships, remote) · astrology (daily/weekly/monthly horoscope, panchang, muhurtham, rahu kalam, nakshatram, lucky number/color).

---

## 8. Categories

`breaking · politics · state · district · crime · cinema · sports · business · jobs · technology · health · education · weather · religion · national · international · agriculture · lifestyle · automobile · factcheck` (+ ott, celebrity, cricket, travel, opinion, editorial, explainers, finance as they earn a slot).

Each category needs **three things or it breaks**: a config entry with its fixed hue, a localized label in every language, and classifier keywords. Miss the config entry and the classifier will still emit the key — the UI then renders an untranslated English string and a fallback gray dot. (This exact failure hit `state` on 46% of a real corpus.)

Categories are language-agnostic keys; labels are localized per language.

---

## 9. Frontend & design system

**Read `readme.md` before any UI work.** `tokens/*.css` holds exact values and is the source of truth — port into `tailwind.config` + CSS variables.

**Color**
- Brand vermillion `--brand #E11B22` (strong `#C4141C`, deep `#9E0F17`, red-50 `#FEF1F0`). Reserved for breaking, primary actions, the `tap2` in the wordmark, live cues. **Sparingly — that's what keeps it loud.**
- Ink neutrals `--ink-950 #0C1424` · `900 #14203A` · `800 #1E2C49` · `700 #334155` · `600 #4A566B` · `500 #64708A` · `400 #8C97AC` · `300 #B4BCCB` · `200 #D6DBE4` · `100 #E9ECF2` · `50 #F4F6FA`. **Text is ink, never pure black.**
- Paper `--paper #FAF7F2`, `--paper-sunk #F1ECE3`, white cards.
- Gold `--gold-500 #E8A020`.
- **Category hues (fixed per section — the feed's primary wayfinding cue):** politics `#3A4CB5` · crime `#3F4756` · cinema `#D6338A` · sports `#1E9E62` · business `#0E8F8A` · jobs `#2477C9` · weather `#2E9BD6` · astrology `#EE7A1E` · gold `#E8A020` · education `#7A4FD0` · health `#22A06B` · tech `#5A5FD6` · national `#C4141C` · district `#6B7280` · state `#475569` · international `#0E7490` · religion `#B45309` · agriculture `#4D7C0F` · lifestyle `#C026D3` · automobile `#0F766E` · factcheck `#1D4ED8`.
- Semantic: success `#1E9E62` · warning `#E8A020` · danger `#D5231F` · info `#2477C9`, each with a soft tint.

**Type.** Display = **Anek** (Anek Latin + Telugu/Tamil/Kannada/Malayalam/Devanagari — one voice across every Indian script), 400–800. Body = **Noto Sans** + per-script Noto, 15px/1.5. Data = **IBM Plex Mono**, tabular numerals so digits align.
Scale: eyebrow 11 · caption 12 · body-sm 14 · body 15 · body-lg 17 · headline-sm 18 · headline 22 · headline-lg 26 · title 32 · display 40+.
Leading: tight 1.12 · snug 1.28 · normal 1.5 · relaxed 1.65. Tracking: eyebrow `.08em`, tight `-0.01em`.

**Radii** card 12 · thumb 8 · chip/pill 999 · md 10 · lg 14 · xl 20.
**Shadows** card `0 1px 2px rgba(12,20,36,.06), 0 1px 3px rgba(12,20,36,.05)` → raised → pop → brand `0 4px 14px rgba(225,27,34,.28)`. Low-opacity, navy-tinted, never black.
**Spacing** 4px base. Gutter 16 · card padding 14 · feed stack gap 10 · article measure 680px.
**Motion** 120/200/320ms, `cubic-bezier(.2,0,0,1)`. Ticker 26s. Press scale `.97`. Two signature motions: the breaking ticker (seamless RTL marquee) and the live pulse (expanding ring). **Respect `prefers-reduced-motion`.**

**Components** (contracts in each `.d.ts`): Button · CategoryChip (+`CATEGORY_COLORS`) · Badge · LanguagePill · SectionTabs · NewsCard (`hero` / `row` / `compact`) · SourceStamp · FeaturedCarousel · DataTile · BreakingTicker. **Reimplement from the contracts — never import `_ds_bundle.js` into production.**

### Brand rules — non-negotiable

- **Sentence case headlines.** Never Title Case, never ALL CAPS. Uppercase only for eyebrow labels and `BREAKING` / `LIVE` badges.
- **No emoji, anywhere.** Category meaning is a **colored dot**. Icons are **Lucide**, line, 2px stroke.
- **Every story shows its source. Every AI-rewritten story carries the "AI rewrite" mark.** This is a trust product; provenance is not optional chrome. The data model carries `publisher`, `sourceUrl`, `aiRewritten` — render them.
- Indian numbering and currency: `₹71,240`, `24,318`. Relative timestamps ("8 min", "1 hr"). **District always named on hyperlocal stories.**
- Copy is authored **per-language**, not machine-translated at render.
- Third person in editorial; second person only in product chrome.
- No gradients as decoration, no glassmorphism, no full-bleed hero photography in chrome. No invented imagery — a neutral `T2` monogram holds the space.
- Category chips: ~12% hue tint over paper with a solid dot at rest; filled solid when active.

**Screens.** Language select → Feed (sticky header · BreakingTicker · DataTile rail · SectionTabs · NewsCard stack) → Article (back/bookmark/share · image · badges · 32px title · SourceStamp · body 17/1.65 · voice + translate) → Explore (category grid + following) → Utility (gold/markets rail · weather · panchang). Bottom tabs: Feed / Explore / Utility / Saved.

**Substitutions to replace when real assets arrive:** no logo (type wordmark `tap2` vermillion + `news` ink), Google Fonts standing in for brand fonts, Lucide standing in for a brand icon set, `T2` monogram standing in for imagery. Every visual decision here is an **original proposal** made against an empty brand repo — defensible, not sacred.

---

## 10. API surface

```
GET  /api/feed?lang=te&region=hyderabad&category=politics&near=1&cursor=…
GET  /api/geo?lat=&lng=&lang=hi        → resolved region
POST /api/ingest                        → run pipeline (service role / cron only)
GET  /[lang]                            → SSR feed
GET  /[lang]/c/[category]               → SSR category feed
GET  /[lang]/a/[slug]                   → SSR article (SEO-critical)
GET  /[lang]/search?q=
GET  /admin                             → console
GET  /sitemap.xml · /robots.txt
```

Server-render article pages (SEO). The feed may be client-fetched behind the cache.

**Auth.** Supabase Auth, phone-first (India). Anon key → RLS-scoped reads. Service role → pipeline writes, **never shipped to a client**.

---

## 11. Admin console

Prefer the `admin_v2` kit: CommandCenter · Newsroom · BreakingDesk · SourcesApis · Growth · Infra · Polls.
Full surface: news moderation (queue sorted by AI confidence; approve/reject) · RSS/source management (pause/resume, poll intervals) · API & model health (calls, **cost**, latency per model) · user & role management · analytics · ad management · SEO dashboard · push composer · breaking ticker control · manual + AI publishing · ingestion pipeline view (8 stages, throughput funnel).

Reads `ingest_jobs` for the live queue. Writes via service role.

---

## 12. Serving at 50M

**Caching — the feed is identical for everyone sharing (language, region, category). That key space is small, and it is why this scales cheaply.**

- Feed pages: Redis, key `feed:{lang}:{region}:{category}:{cursor}`, TTL 60–120s, **bust on breaking publish**.
- Article bodies: immutable once published — cache hard, CDN at edge.
- Utility data: separate TTLs by volatility — scores 30s, gold 5min, weather 15min. **Never share a cache key with news.**
- Push fan-out and breaking-bust are the only write paths touching every cache. Everything else is read-only.

**Scale path:** read replicas for feed queries → monthly range partitions on `articles(published_at)` → Meilisearch for search (not `ILIKE`) → pgvector + ANN for reco.

**Pagination.** Keyset on `(published_at, id)`. A bare `limit 60` with no cursor makes an infinite feed impossible — fix before the app ships one.

**Personalization.** Trending Near Me · My District · saved topics · bookmarks · reading history · following · recommended · AI digest · morning briefing · evening roundup · breaking alerts. All read `engagement` + `follows`.

**Offline / PWA.** Cache the last feed page + read articles; queue bookmarks and engagement for replay.

---

## 13. Security

- **Secrets live in Supabase secrets / env, never in the app.** LLM keys are server-side only — a browser prototype must never call the LLM.
- Anon key = RLS-scoped reads. Service role = pipeline writes. **Never ship the service role to a client.**
- A Supabase project ref is not a secret; a key is. Audit that no key ever lands in the repo. Rotate if one has.
- Citizen journalism / photo / video uploads: untrusted input into a trust product → AI moderation **plus** human review before publish.
- Rate-limit by user and by IP on ingest-adjacent and upload endpoints.

---

## 14. SEO

Server-render articles. `slug`, `seo_title`, `meta_desc`, `faq` are schema columns already generated by the pipeline — **wire them, don't regenerate them**.

NewsArticle + FAQPage JSON-LD. Per-language sitemaps with `hreflang`. Google News publisher submission per language. **Indic-script URLs: transliterate slugs to Latin — do not percent-encode Telugu.**

---

## 15. Monetization

AdSense / Ad Manager · affiliate · sponsored news · Premium subscription · e-paper · paid astrology · premium jobs · premium alerts · business listings · local ads.
`subscriptions` (`plus_monthly` / `plus_yearly` / `epaper_monthly`) and `ad_placements` (slot, language, region, `is_native`, `rpm`, flight dates) are already modeled.

**Ad slots are geo-fenced too** — a Hyderabad reader gets a Hyderabad advertiser. That local inventory is the actual business; national display is the floor, not the ceiling.

---

## 16. Known gaps — verified, in priority order

1. **`regions.geom` is unpopulated.** Seeds insert centroids only → `region_for_point` returns null for every GPS lookup. The SQL geo path is dead until district polygons load. (App-side nearest-centroid works, which masks this.)
2. **`get_feed` has `limit 60`, no cursor.** No pagination.
3. **Dedup is title-based, not simhash**, despite the column name and comment.
4. **Nothing writes `ingest_jobs`** → the admin live queue has no data source.
5. **Ingestion has no retries, no concurrency, and silently truncates** each feed; only `rss` of ten `source_type`s is handled; no fact-verification stage despite `trust_score` existing to weight it.
6. **No `article_embeddings`** — reco and semantic dedup both want pgvector.
7. **No partitioning** — `articles` at 50M wants monthly range partitions.
8. **Env can point the app at an empty Postgres** while ingested content sits in the JSON store, producing a silently blank feed. Make the active store visible in the admin.

---

## 17. Roadmap

**Now:** load district polygons (Hindi geo-routing is the differentiator). Keyset pagination. Real simhash. `ingest_jobs` writes. Retries + concurrency.

**Next:** non-RSS source types. Meilisearch. FCM push. Fact-verification weighted by `trust_score`. Redis feed cache.

**Then:** pgvector reco. Partitioning + read replicas. Citizen journalism with moderation. Voice summaries. E-paper.

**Later:** on-device ranking, AI anchor video, regional TTS per script, publisher self-serve portal.

---

## 18. Working agreement

- **`readme.md` before UI work. `supabase-schema.sql` before backend work.** Both are more specific than this file.
- Keep `feed.ts` and `get_feed()` in sync. Divergence is a product bug.
- Every new category needs config hue + labels in every language + classifier keywords.
- Never mark un-rewritten content as AI-rewritten. Never render a story without its source.
- If you cap, truncate, or sample anything in the pipeline — **log what you dropped.** Silent truncation reads as "we covered it all."
- Prototypes run by opening `ui_kits/*/index.html` (React + Babel + Lucide from CDN).
- New name is `tap2news`. Rename older names when you touch their files.
