# Vaarta — Backend / Ingestion Starter

Deployable server-side pipeline for the `newsapp` Supabase project
(`https://cihlffrigzzgzchzdbvg.supabase.co`).

It does the part the browser prototype **cannot** do safely: poll RSS
sources, call **Gemini** to rewrite each story, run the fake-news /
geo / category checks, and insert finished rows into `articles`.

```
RSS / Google News  ──►  ingest fn  ──►  Gemini rewrite  ──►  articles (status=published)
                         │                                    ▲
                         └── dedup + fake_score + geo/category ┘
```

The Gemini key lives ONLY in Supabase secrets — never in the app.

---

## 0. Prereqs

```bash
npm i -g supabase        # Supabase CLI
supabase login
supabase link --project-ref cihlffrigzzgzchzdbvg
```

## 1. Schema

Supabase Dashboard → **SQL Editor** → paste `../supabase-schema.sql` → **Run**.
Then seed sources + regions:

```bash
# SQL Editor → paste sources.seed.sql → Run
```

## 2. Secrets

```bash
supabase secrets set GEMINI_API_KEY=your_gemini_pro_key_here
# SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically
```

## 3. Deploy the function

```bash
supabase functions deploy ingest --no-verify-jwt
```

Test once by hand:

```bash
curl -X POST https://cihlffrigzzgzchzdbvg.supabase.co/functions/v1/ingest \
  -H "Authorization: Bearer <SERVICE_ROLE_KEY>"
```

Check the `articles` table — you should see rewritten, geo-tagged rows.

## 4. Schedule it (every 5 min) with pg_cron

SQL Editor:

```sql
create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.schedule('vaarta-ingest', '*/5 * * * *', $$
  select net.http_post(
    url     := 'https://cihlffrigzzgzchzdbvg.supabase.co/functions/v1/ingest',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || current_setting('app.service_role_key', true),
      'Content-Type',  'application/json')
  );
$$);
```

## 5. Point the app at it

In the `Vaarta News` app the feed comes from:

```
GET  https://cihlffrigzzgzchzdbvg.supabase.co/rest/v1/rpc/get_feed
       ?p_language=<uuid>&p_region=<uuid>
     apikey: <ANON_KEY>
```

`get_feed()` (defined in the schema) already enforces geo-fencing:
local language+region news **plus** national, hiding other states.

---

## Files

| File | Purpose |
|---|---|
| `supabase/functions/ingest/index.ts` | Orchestrates the pipeline for every active source |
| `supabase/functions/_shared/rss.ts` | Dependency-free RSS/Atom parser |
| `supabase/functions/_shared/gemini.ts` | Gemini rewrite + classify (structured JSON) |
| `sources.seed.sql` | Google-News RSS sources + regions for te/ta/hi/kn |

## Cost note
Google News RSS + RSSHub + GDELT are **free**. Gemini is your only
per-article cost (Pro license covers dev volume). Add paid connectors
(MediaStack / NewsAPI) later only for latency-critical breaking desks.
