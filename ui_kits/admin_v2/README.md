# tap2news — Ops Command Center (Admin v2)

Redesigned admin: **single command-center home with drill-in hubs**, compact density, live animated tickers/sparklines (random-walk simulation, 2.5s ticks).

## Structure
- **Command** (`CommandCenter.jsx`) — 6 live KPIs (readers, stories/hr, feed p95, cache hit, AI cost, push CTR) + snapshot panels that drill into their hub.
- **Newsroom** (`Newsroom.jsx`) — 3-pane: moderation queue (AI-confidence sorted) · AI publish composer (all SEO/push fields) · live feed + push preview.
- **Infra & AI** (`Infra.jsx`) — AI model routing (Gemini/Claude/GPT/DeepSeek share, cost, p95), **MCP servers** (Context7, Filesystem, GitHub, Playwright, Supabase, Fetch, PostgreSQL, Brave Search), **Redis cache** (keys, TTL, hits — `feed:<lang>:<region>:<section>`), **BullMQ queues** (waiting/active/failed + retry), **Postgres health** (replication, connections, slow queries), **CDN purge** controls.
- **Growth** (`Growth.jsx`) — analytics (DAU, RPM, subs, CTR + hourly reads, language split, top stories) and monetization (revenue mix, Plus plans).

v1 (12-screen sidebar admin) is preserved at `ui_kits/admin/`.
