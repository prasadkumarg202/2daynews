# tap2news — Admin Console UI Kit

Desktop newsroom console for the tap2news platform. Built from the design system's tokens + components, with a dark ink sidebar for focus and a warm-paper workspace.

## Screens (fully built)
- **Overview** — KPI stat cards, 12h ingest bar chart, readers-by-language bars, AI pipeline funnel.
- **Moderation** — split queue/detail; approve/reject with AI-confidence sorting.
- **Publish** — AI-assembled draft with all generated SEO/push fields + live preview.
- **Sources** — RSS / API / citizen-ingest table with live pause/resume.
- **Ingestion flow** — the live AI pipeline as vibrant stage cards (Collect → Publish), throughput funnel, and pipeline toggles.
- **API & Models** — Claude/Gemini/GPT/DeepSeek health cards, feed-API quota bars, API keys.
- **Backend health** — service status grid with load meters, infra KPIs, full stack chips.
- **Analytics** — sparkline KPIs, app-vs-web traffic, device split, top stories.
- **Push & Alerts** — notification composer with live preview + campaign list.
- **SEO** — ranking KPIs, keyword table, technical-health checks.
- **Monetization** — revenue-stream breakdown, RPM/subscriber KPIs, subscription plans.
- **Users & Roles** — team table with avatars + role/permission list.

Every sidebar surface is now implemented.

## Interactions
Sidebar switches screens. Moderation: click a queue item to inspect, Approve/Reject to remove it. Sources: Pause/Resume toggles status live.

## Components used
`Button`, `Badge`, `CategoryChip`, `SourceStamp`, `NewsCard` from `window.Ds2daynewsDesignSystem_0b44f3`; plus local shell primitives (`Sidebar`, `Topbar`, `Panel`, `StatCard`, `Kpi`, `Spark`, `Icon`).

## Notes
- Icons: **Lucide** via CDN (substitution — no brand icon set).
- Charts are lightweight CSS bars/funnels (no charting lib).
- Copy mixes English (chrome) with Telugu/Tamil/Kannada sample stories to show multilingual moderation.
