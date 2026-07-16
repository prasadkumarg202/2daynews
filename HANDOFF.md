# Handoff: tap2news — Multilingual Hyperlocal News Platform

## Overview
This is the complete **tap2news design system** plus three high-fidelity product surfaces: a **mobile news app**, an **admin/newsroom console** (12 screens), and a **marketing landing site**. tap2news is an AI-powered, multilingual, hyperlocal Indian news platform with language-based geo-fencing (Telugu → AP/Telangana, Tamil → TN, Hindi → GPS location, national news shared across all), plus daily utilities (gold rates, markets, weather/AQI, cricket, jobs, astrology).

## About the design files
Everything in this bundle is a **design reference built in HTML/React-via-Babel** — prototypes that show the intended look, tokens, and behavior. They are **not production code to ship directly.** The task is to **recreate these designs in the target codebase's environment** using its established patterns. The stated stack for tap2news is **Next.js + React + Tailwind (PWA) / NestJS + FastAPI backend** — implement there. If no codebase exists yet, scaffold Next.js + Tailwind and port the tokens below into `tailwind.config` + CSS variables.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, shadows, and interactions are all specified in real CSS custom properties. Recreate pixel-faithfully, mapping the design tokens (below) onto the codebase's styling layer.

## The design system (source of truth)
- `styles.css` — single entry point; `@import`s all tokens + fonts. Link this (or port it) first.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `fonts.css`. **All values live here — read these files for exact numbers.**
- `readme.md` (root) — full brand guide: CONTENT FUNDAMENTALS (voice, casing, transparency rules), VISUAL FOUNDATIONS (color, type, cards, motion, hover/press), ICONOGRAPHY. **Read this before implementing.**
- `components/` — 9 reusable React primitives with `.d.ts` prop contracts and `.prompt.md` usage notes:
  - `core/` — **Button**, **CategoryChip** (+`CATEGORY_COLORS`), **Badge**
  - `navigation/` — **LanguagePill**, **SectionTabs**
  - `content/` — **NewsCard**, **SourceStamp**
  - `widgets/` — **DataTile**
  - `feedback/` — **BreakingTicker**
  - Each `.d.ts` is the props interface to reimplement; each `.jsx` shows exact inline styling (all via CSS vars).

## Screens / views

### Mobile app — `ui_kits/app/`
- **Language select** — top-level control; choosing a language geo-fences the whole app. Full-width `LanguagePill` list + primary Continue button.
- **Feed** (`FeedScreen.jsx`) — sticky header (wordmark + location + language) → `BreakingTicker` → horizontally-scrolling `DataTile` rail (gold/Nifty/weather/cricket) → sticky `SectionTabs` → vertical stack of `NewsCard`s (layouts: `hero` image-top, `row` thumb-right, `compact` text-only), 10px gaps, 16px gutters.
- **Article** (`ArticleScreen.jsx`) — back/bookmark/share bar, 200px image area, category/breaking badge, 32px `--fs-title` headline, `SourceStamp` (source · location · time + verified check + "AI rewrite" mark), body paragraphs at `--fs-body-lg`/1.65, voice-summary + translate buttons.
- **Explore** (`ExploreScreen.jsx`) — 3-col category grid + following chips.
- **Utility** (`UtilityScreen.jsx`) — gold/markets `DataTile` rail, weather panel, panchang/astrology rows.
- Bottom tab bar: Feed / Explore / Utility / Saved (active = `--brand`).

### Admin console — `ui_kits/admin/` (desktop, 1280w)
Layout: 244px dark ink sidebar (`--ink-950`) + topbar + scrollable content. All 12 screens built:
- **Overview** — 4 KPI stat cards, 12h ingest bar chart, readers-by-language bars, AI pipeline funnel.
- **Moderation** — split queue/detail; stories sorted by AI confidence; Approve/Reject removes from queue.
- **Publish** — AI-assembled draft (headline, short headline, summary, SEO title, slug, meta description, tags, push) + live feed/push preview + Publish/Schedule.
- **Sources** — RSS/API/ingest table with live Pause/Resume.
- **Ingestion flow** — 8-stage pipeline cards (Collect→Publish), throughput funnel, pipeline toggles.
- **API & Models** — Claude/Gemini/GPT/DeepSeek health cards (calls/cost/latency), feed-API quota bars, API keys.
- **Backend health** — service status grid + load meters, infra KPIs, tech-stack chips.
- **Analytics** — sparkline KPIs, app-vs-web stacked bars, device split, top stories.
- **Push & Alerts** — composer with live preview + campaign list.
- **SEO** — ranking KPIs, keyword table, technical-health checks.
- **Monetization** — revenue-stream breakdown bar, RPM/subscriber KPIs, subscription plans.
- **Users & Roles** — team table with avatars + role/permission list.
- Shell primitives: `Sidebar`, `Topbar`, `Panel`, `StatCard`, `Kpi`, `Spark` (SVG sparkline), `Icon` (in `AdminShell.jsx`). Data in `data.js`.

### Marketing site — `ui_kits/web/` (1120px content max-width)
`NavBar` (blur sticky) → `Hero` (headline + CTAs + KPI stats + live component-built phone mock) → `LangStrip` (dark band, 6 language worlds) → `Features` (3×2 grid) → `CategoryBand` (color-coded chips) → `Publishers` (vermillion CTA block) → `Footer`.

## Interactions & behavior
- **Geo-fencing** is the core logic: language selection drives the entire feed/section/utility content set; national news is the only cross-language content.
- Chips/buttons press with `transform: scale(0.97)`; cards lift shadow on hover; no opacity-dim hovers.
- `BreakingTicker`: seamless right-to-left marquee, `--ticker-speed` (26s). Live/Breaking badges pulse (expanding-ring dot).
- Admin: sidebar switches views; Moderation approve/reject and Sources pause/resume mutate local state.
- Motion durations 120/200/320ms, ease `cubic-bezier(.2,0,0,1)`. Respect `prefers-reduced-motion`.

## State management
- App: `language`, `activeSection`, `openArticle`, `bottomTab`. (Production: geo/lang in global store; feed data fetched per language+location.)
- Admin: per-screen local state (queue items, source status, push composer). Production wires to the NestJS/FastAPI APIs and BullMQ pipeline described in the spec.

## Design tokens (port these exactly — see `tokens/` for the full set)
- **Brand vermillion**: `--brand #E11B22`, strong `#C4141C`, deep `#9E0F17`; red-50 `#FEF1F0`.
- **Ink neutrals**: `--ink-950 #0C1424` … `--ink-900 #14203A` … `--ink-50 #F4F6FA` (text is ink, not black).
- **Paper surfaces**: `--paper #FAF7F2`, `--paper-sunk #F1ECE3`, white cards.
- **Gold**: `--gold-500 #E8A020`.
- **Category colors** (fixed per section): politics `#3A4CB5`, crime `#3F4756`, cinema `#D6338A`, sports `#1E9E62`, business `#0E8F8A`, jobs `#2477C9`, weather `#2E9BD6`, astrology `#EE7A1E`, gold `#E8A020`, education `#7A4FD0`, health `#22A06B`, tech `#5A5FD6`, national `#C4141C`.
- **Semantic**: success `#1E9E62`, warning `#E8A020`, danger `#D5231F`, info `#2477C9` (each with a soft tint).
- **Type**: display = Anek (Latin + all Indic scripts), body = Noto Sans (+ per-script Noto), data = IBM Plex Mono. Scale: eyebrow 11 · caption 12 · body 15 · headline-sm 18 · headline 22 · title 32 · display 40+. Weights 400–800.
- **Radii**: card 12 · thumb 8 · chip/pill 999 · md 10 · lg 14 · xl 20.
- **Shadows**: card `0 1px 2px rgba(12,20,36,.06), 0 1px 3px rgba(12,20,36,.05)`; raised, pop, and brand `0 4px 14px rgba(225,27,34,.28)` — see `shadows.css`.
- **Spacing**: 4px base (`--sp-*`); app gutter 16, card padding 14, feed stack gap 10.

## Assets & substitutions (IMPORTANT)
- **No logo** — a type-only wordmark is used everywhere ("tap2" in `--brand` + "news" in `--ink-900`). Replace with the real mark when available.
- **Fonts are Google Fonts substitutions** (Anek, Noto Sans, IBM Plex Mono) — no brand fonts were supplied. Loaded via CDN `@import` in `tokens/fonts.css`.
- **Icons: Lucide** (line, 2px stroke) via CDN — substitution; no brand icon set was supplied. Swap for a real set if one exists.
- **No imagery** — `NewsCard` shows a "T2" monogram/gradient placeholder; wire real image URLs into its `image` prop.
- The source GitHub repo (`github.com/prasadkumarg202/tap2news`) was **empty** — all visual decisions are an original, defensible starting point, not the real brand.

## Files
- Design system: `styles.css`, `tokens/*.css`, `components/**`, `readme.md`, `SKILL.md`.
- App kit: `ui_kits/app/{index.html, AppShell.jsx, FeedScreen.jsx, ArticleScreen.jsx, ExploreScreen.jsx, UtilityScreen.jsx, data.js, README.md}`.
- Admin kit: `ui_kits/admin/{index.html, AdminShell.jsx, *Screen.jsx, data.js, README.md}`.
- Web kit: `ui_kits/web/{index.html, WebShell.jsx, Sections.jsx, data.js, README.md}`.
- `_ds_bundle.js` is the compiled component library the HTML previews load (generated — regenerate in your build; do not hand-edit).

## How to run the references
Open any `ui_kits/*/index.html` in a browser (they load React + Babel + Lucide + the compiled bundle from CDN/relative paths). Use them as the visual spec while reimplementing in Next.js + Tailwind.

> This `HANDOFF.md` lives at the project root; every path referenced above is relative to it. The whole project folder IS the handoff bundle.
