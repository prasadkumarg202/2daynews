# CLAUDE.md — tap2news

Multilingual, hyperlocal, AI-powered news platform for India. This file is the system design and the working agreement for anyone (human or agent) building in this repo.

---

## 0. Read this first: three things that will trip you up

**1. The brand has four names in this folder.** `tap2news` (this directory, `readme.md`, `SKILL.md`), `2daynews` (the zips, `push.ps1`, the GitHub remote), `Vaarta` / `vaartanow` (the SQL schema, the ingest function, the backend README). They are all the same product at different moments. **`tap2news` is the name of record** — the design system, the wordmark, and the component namespace all use it. When you touch a file carrying an older name, rename it to tap2news; do not introduce a fifth.

**2. Nothing here is production code.** The `ui_kits/` are HTML + React-via-Babel prototypes loaded from CDN. They are the *visual spec*. The target implementation is Next.js + Tailwind and does not exist yet. Do not ship `_ds_bundle.js` to users.

**3. There is real backend code, and it contradicts the stated stack.** `uploads/Multilingual hyperlocal news platform design/` holds a working Postgres schema, a deployed-shape ingest Edge Function, and source seeds — pointing at a live Supabase project (`cihlffrigzzgzchzdbvg`). Meanwhile `HANDOFF.md` says the backend is NestJS + FastAPI. See §5 for how to resolve this. **The schema is the most valuable artifact in this repo** — it is the only thing here that has been thought through in executable form.

---

## 1. What we are building

A news platform where **language selects a whole world**, not a translation. Pick Telugu and the entire app — feed, categories, politics, cinema, jobs, weather, astrology, trends, push — becomes Andhra Pradesh and Telangana. Pick Tamil and it becomes Tamil Nadu and Kollywood, with zero Telugu local content. Pick Hindi and the app follows your GPS: Lucknow gives you UP politics and Lucknow crime; Bhopal gives you MP.

National news (PM, Supreme Court, Parliament, ISRO, RBI, NEET/UPSC, Budget, cyclones) is the **only** content that crosses language boundaries.

Around the news sit the daily-utility surfaces Indian readers actually open the app for: gold rates, Sensex/Nifty, weather and AQI, live cricket, jobs, and astrology/panchang.

Competitive set: Dailyhunt, Way2News, PublicVibe, Inshorts, Google News, News18, OneIndia, Eenadu, Sakshi, TV9, ABP Live. Design target: **50M users**.

### The one rule that defines the product

> Language + region determines every byte in the feed. National is the sole exception. Every architectural decision below exists to enforce this cheaply and correctly.

Get this wrong and the product is just another aggregator. Get it right and it is the reason someone uninstalls Dailyhunt.

---

## 2. Repo map

| Path | What it is | Status |
|---|---|---|
| `styles.css` | Single entry point — imports all tokens + fonts | Ready to port |
| `tokens/*.css` | colors, typography, spacing, radii, shadows, motion, fonts. **Exact values live here** | Source of truth |
| `components/` | 9 React primitives + `.d.ts` prop contracts + `.prompt.md` usage notes | Reimplement, don't import |
| `guidelines/` | Foundation specimen cards | Reference |
| `ui_kits/app/` | Mobile app: Feed, Article, Explore, Utility, SwipeReader, EngageCards | Visual spec |
| `ui_kits/admin/` | Newsroom console, 12 screens | Visual spec |
| `ui_kits/admin_v2/` | Newer console: CommandCenter, Newsroom, BreakingDesk, SourcesApis, Growth, Infra, Polls | Visual spec — **prefer over `admin/`** |
| `ui_kits/web/` | Marketing site | Visual spec |
| `uploads/Multilingual hyperlocal news platform design/` | **Real schema + ingest function + source seeds** | Build on this |
| `readme.md` | Brand guide: voice, casing, transparency, visual foundations | Read before any UI work |
| `HANDOFF.md` | Implementation brief + full token dump | Read before any UI work |
| `_ds_bundle.js` | Compiled bundle the prototypes load | Generated — never hand-edit |
| `*.zip` (8 files, ~21 MB) | Historical design-system snapshots | Consider excluding from git |

**Not in this repo:** the Next.js app. There is no `package.json`, no build, no test suite. This folder is not currently a git repo.

**GitHub:** `github.com/prasadkumarg202/2daynews` — public, 2 commits, last pushed 13 Jul 2026. It holds only the nine root files; every directory (`components/`, `tokens/`, `ui_kits/`, `uploads/`) is missing, and its `_ds_bundle.js` is stale (169 KB vs 303 KB here). **Local is ahead of origin.** The `tap2news` repo referenced in `readme.md` is a different, empty repo.

---

## 3. System architecture

```
SOURCES                INGESTION              AI PIPELINE            SERVING
─────────              ─────────              ───────────            ───────
RSS / Google News  ┐                      ┌ dedup (simhash)      ┌ get_feed() RPC
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

The pipeline stages are **already enumerated as a Postgres enum** (`pipeline_stage`) and traced per-article in `ingest_jobs`. That table is what feeds the admin console's live queue. Keep it.

### Component boundaries

- **Ingestion** — stateless workers, one job per (source, poll tick). Idempotent: re-running a source must not duplicate stories. Dedup happens *before* the LLM call, because the LLM call is the only thing that costs money.
- **AI pipeline** — one structured LLM call per *new* story does rewrite + classify + safety together (see `_shared/gemini.ts`). Do not split these into separate calls; it triples cost for no quality gain.
- **Serving** — reads never touch the pipeline. The feed is a single indexed query (`articles_feed_ix`) behind a cache.
- **Admin** — writes go through the service role, never the anon key.

---

## 4. Database schema

**Canonical file: `uploads/Multilingual hyperlocal news platform design/supabase-schema.sql`.** It is complete and correct in shape. Port it as the first migration; do not redesign it from the prose in `HANDOFF.md`.

Extensions: `uuid-ossp`, `postgis` (district geo-fencing), `pg_trgm` (fuzzy dedup/search).

**Core tables**

- `languages` — code, native name, english, `default_geo`. Seeded with te/ta/hi/kn.
- `regions` — language, state, district, PostGIS `geom` (multipolygon) + `centroid`, `is_metro`. GiST-indexed.
- `sources` — name, `source_type` enum, url, language (null = national), `is_paid`, `trust_score` (0..1, weights fact-verify), `poll_seconds`, `last_polled`.
- `articles` — **the core.** language, region (null = pure national), category, `is_national`, `is_breaking`, `priority`, all AI-generated fields (headline, short_headline, summary, body, seo_title, meta_desc, slug, faq, tags, image_prompt, voice_url), pipeline signals (`fake_score`, `dedup_hash`, `confidence`), `article_status` enum.
- `article_sources` — many raw items → one story. The dedup join table.
- `ingest_jobs` — per-stage trace with model + confidence + timings. Powers the admin live queue.
- `users`, `follows`, `bookmarks`, `engagement` (with `dwell_ms` — the signal that matters for ranking), `subscriptions`, `ad_placements`, `push_tokens`.

**The two functions that are the product**

```sql
region_for_point(lng, lat) -> uuid   -- GPS → region, point-in-polygon, metro wins ties
get_feed(p_language, p_region, p_category) -> setof articles
```

`get_feed` *is* the geo-fence:

```sql
where status = 'published'
  and ( is_national = true                       -- crosses all languages
        or (language_id = p_language             -- or matches this language...
            and (region_id = p_region            -- ...and this region
                 or region_id is null)) )        -- ...or is language-wide
order by is_breaking desc, priority desc, published_at desc
```

**RLS is on** for users, bookmarks, follows, engagement, subscriptions (`auth.uid() = user_id`). Articles are world-readable when published; writes are service-role only.

### Known gaps in the schema — fix these before scale

1. **`get_feed` has `limit 60` and no cursor.** No pagination. Add keyset pagination on `(published_at, id)` before the app ships an infinite feed.
2. **Dedup is title-based, not simhash.** `dedupHash()` in `index.ts` lowercases, strips punctuation, takes the first 8 words, and sorts them. That merges reworded headlines poorly and will false-merge short headlines. The column is named `dedup_hash` and the comment says simhash — implement actual simhash/minhash over the body, keep `pg_trgm` for the fuzzy pass.
3. **`regions.geom` is unpopulated.** The seed inserts centroids only, so `region_for_point` returns null for every GPS lookup today — meaning **Hindi geo-routing does not work yet**. Load real district polygons (Survey of India / Datameet district GeoJSON) or fall back to nearest-centroid until you do.
4. **No `article_embeddings`.** Recommendations and semantic dedup both want pgvector. Add it when you add reco.
5. **No partitioning.** `articles` at 50M users wants monthly range partitions on `published_at`.

---

## 5. Backend: resolve the stack contradiction

`HANDOFF.md` says NestJS + FastAPI. The only code that exists is Supabase Edge Functions (Deno). Pick one, and pick it explicitly:

**Recommendation — start Supabase, extract later.** The schema, RLS, auth, realtime, cron (`pg_cron` + `pg_net`), and a working ingest function already exist. Rewriting into NestJS buys nothing today and costs weeks. Ship on Supabase; extract the ingest pipeline into a dedicated worker service (NestJS + BullMQ) at the point where Edge Function limits actually bite — long-running LLM calls, retry semantics, and per-source concurrency are the three that will bite first.

If you go the other way, delete or clearly quarantine the Supabase code so the next reader isn't misled.

**What the current ingest function does well:** dedup before the paid call; fake-news gate routes to `review` rather than publishing (`fake_score > 0.5`); `last_polled` bookkeeping; source→article mapping on dup hits.

**What it does not do yet — the honest list:** no retries or backoff; sequential over sources (`for` loop, no concurrency); `slice(0, 12)` silently drops the rest of every feed; no per-source error budget; only handles `type = 'rss'` (the enum declares ten types); no `ingest_jobs` rows are written, so the admin live queue has nothing to read; no fact-verification stage despite `trust_score` existing to weight it.

---

## 6. Sources strategy — free first

Free tier carries the product. `sources.seed.sql` already seeds Google News RSS per language (`hl=te&gl=IN&ceid=IN:te`) plus district-level geo-search feeds.

- **Free, use now:** Google News RSS, publisher RSS, state government RSS, GDELT, RSSHub, Google Trends, free cricket RSS, OpenWeather free tier, free gold/market APIs, YouTube/X public feeds.
- **Paid, only where latency or coverage is worth money:** MediaStack / NewsAPI for a latency-critical breaking desk, astrology API (there is no credible free panchang source), premium jobs feeds.
- **The real cost is the LLM, not the feeds.** One rewrite call per new story. Dedup aggressively, cache by `dedup_hash`, batch where possible, and route by difficulty — cheap model for classify, stronger model for rewrite. Track spend per model in the admin API screen.

`trust_score` on `sources` exists to weight fact-verification. Use it: a story that appears in three sources with trust > 0.7 needs less scrutiny than a lone Telegram post.

---

## 7. Frontend

**Stack:** Next.js + React + Tailwind, PWA-first, then Android/iOS. Server-render article pages for SEO; the feed can be client-fetched behind the cache.

**Port the tokens into `tailwind.config` + CSS variables. Read `tokens/*.css` for exact values.** Abridged:

- Brand vermillion `--brand #E11B22` (strong `#C4141C`, deep `#9E0F17`). Reserved for breaking news, primary actions, the `tap2` in the wordmark, live cues. Sparingly — that's what keeps it loud.
- Ink neutrals `--ink-950 #0C1424` → `--ink-50 #F4F6FA`. **Text is ink, never pure black.**
- Paper `--paper #FAF7F2`, `--paper-sunk #F1ECE3`, white cards.
- Category hues, fixed per section: politics `#3A4CB5`, crime `#3F4756`, cinema `#D6338A`, sports `#1E9E62`, business `#0E8F8A`, jobs `#2477C9`, weather `#2E9BD6`, astrology `#EE7A1E`, gold `#E8A020`, education `#7A4FD0`, health `#22A06B`, tech `#5A5FD6`, national `#C4141C`. **This is the feed's primary wayfinding cue.**
- Type: display = **Anek** (Latin + all Indic scripts, 400–800), body = **Noto Sans** (+ per-script Noto), data = **IBM Plex Mono** (tabular digits). Scale: eyebrow 11 · caption 12 · body 15 · headline-sm 18 · headline 22 · title 32 · display 40+.
- Radii: card 12 · thumb 8 · chip/pill 999 · md 10 · lg 14 · xl 20.
- Motion: 120/200/320ms, `cubic-bezier(.2,0,0,1)`. Ticker ~26s. Respect `prefers-reduced-motion`.

**Components to reimplement** (contracts in each `.d.ts`): Button, CategoryChip (+`CATEGORY_COLORS`), Badge, LanguagePill, SectionTabs, NewsCard (`hero` / `row` / `compact`), SourceStamp, FeaturedCarousel, DataTile, BreakingTicker.

**Non-negotiable brand rules** (from `readme.md`):
- Sentence case headlines. Never Title Case, never ALL CAPS. Uppercase only for eyebrow labels and `BREAKING` / `LIVE` badges.
- **No emoji, anywhere.** Category meaning is a colored dot. Icons are Lucide, line, 2px.
- **Every story shows its source. Every AI-rewritten story carries the "AI rewrite" mark.** This is a trust product; provenance is not optional chrome.
- Indian numbering and currency: `₹71,240`, `24,318`. Relative timestamps. District always named on hyperlocal stories.
- Copy is authored per-language, not machine-translated at render.
- Third person in editorial; second person only in product chrome.

**Substitutions to replace when real assets arrive:** no logo (type wordmark stands in), Google Fonts standing in for brand fonts, Lucide standing in for a brand icon set, `T2` monogram placeholders standing in for imagery.

---

## 8. Serving at 50M

**Caching** — the feed is the same for everyone sharing (language, region, category). That is a *small* key space and it is why this product scales cheaply.

- Feed pages: Redis, keyed `feed:{lang}:{region}:{category}:{cursor}`, TTL 60–120s, bust on breaking publish.
- Article bodies: immutable once published — cache hard, CDN at the edge (Cloudflare).
- Utility data (gold, markets, weather, scores): separate TTLs by volatility — scores 30s, gold 5min, weather 15min. Never let these share a cache key with news.
- Push fan-out and breaking bust are the two write paths that touch every cache. Everything else is read-only.

**Scale path:** read replicas for feed queries → monthly partitions on `articles` → Meilisearch for search (not `ILIKE`) → pgvector + ANN for reco.

**Ranking:** `is_breaking desc, priority desc, published_at desc` today. Add engagement (`dwell_ms`, not clicks — clicks reward clickbait, which the brand voice explicitly rejects), locality distance, and source trust. Keep recency dominant; this is news.

**Personalization:** Trending Near Me, My District, saved topics, bookmarks, history, following, AI digest, morning briefing, evening roundup, breaking alerts. All of it reads `engagement` + `follows`.

---

## 9. Security

- **Secrets live in Supabase secrets / env, never in the app.** The Gemini key is server-side only — the browser prototype cannot and must not call the LLM.
- Anon key gets RLS-scoped reads. Service role gets pipeline writes. Never ship the service role to a client.
- **The live project ref `cihlffrigzzgzchzdbvg` is committed in this repo's README.** A project ref is not a secret, but audit that no key ever joins it. Rotate if one has.
- Citizen journalism and photo/video uploads are an untrusted input path into a trust product — AI moderation *plus* human review before publish, always.
- Rate-limit by user and by IP on ingest-adjacent and upload endpoints.

---

## 10. SEO

Server-render articles. `slug`, `seo_title`, `meta_desc`, `faq` are already schema columns and already generated by the pipeline — wire them, don't regenerate them.

NewsArticle + FAQPage JSON-LD. Per-language sitemaps with `hreflang`. Google News publisher submission per language. Indic-script URLs: transliterate slugs to Latin, don't percent-encode Telugu.

---

## 11. Monetization

AdSense / Ad Manager, affiliate, sponsored news, Premium subscription, e-paper, paid astrology, premium jobs, premium alerts, business listings, local ads. `subscriptions` (`plus_monthly` / `plus_yearly` / `epaper_monthly`) and `ad_placements` (slot, language, region, `is_native`, `rpm`, flight dates) are already modeled.

Ad slots are geo-fenced too — a Hyderabad reader gets a Hyderabad advertiser. That local-ad inventory is the actual business; national display is the floor, not the ceiling.

---

## 12. Working agreement

- **Read `readme.md` before UI work, `supabase-schema.sql` before backend work.** Both are more specific than this file.
- Reimplement components from `.d.ts` contracts; do not import `_ds_bundle.js` into production.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated. Regenerate; never hand-edit.
- New name is `tap2news`. Rename older names when you touch their files.
- Every visual decision in this repo is an **original proposal**, made against an empty brand repo. Treat it as defensible, not sacred. Real logo, fonts, and icons supersede it.
- Prototypes run by opening `ui_kits/*/index.html` — they load React + Babel + Lucide from CDN.

## 13. Roadmap

**Now:** pick the stack (§5). Port schema as migration 1. Scaffold Next.js + Tailwind + tokens. Load district polygons so Hindi geo-routing actually works. Add pagination to `get_feed`.

**Next:** real simhash dedup. `ingest_jobs` writes so the admin queue is live. Retries + concurrency in ingestion. Non-RSS source types. Meilisearch. FCM push.

**Then:** pgvector reco. Fact-verification stage weighted by `trust_score`. Partitioning + read replicas. Citizen journalism with moderation. Voice summaries. E-paper.

**Later:** on-device ranking, AI anchor video, regional TTS per script, publisher self-serve portal.
