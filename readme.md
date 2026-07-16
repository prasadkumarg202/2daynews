# tap2news — Design System

A design system for **tap2news**, an AI-powered, multilingual, hyperlocal news platform for India. The product aggregates, verifies, rewrites, localizes, ranks, and publishes news across many Indian languages — with each language a fully isolated, geo-fenced ecosystem (Telugu shows AP/Telangana + Tollywood; Tamil shows Tamil Nadu + Kollywood; Hindi follows the user's GPS location; national news is shared across all). It also carries the daily-utility surfaces Indian readers expect: gold rates, stock markets, weather/AQI, live cricket, jobs, and astrology/panchang.

This system gives design agents a coherent, credible news-brand toolkit: color, type (built for Indian scripts), reusable UI primitives, and a full interactive app recreation.

## Sources
- GitHub: **https://github.com/prasadkumarg202/tap2news** — the repo attached as the brand source. **It is currently empty (no commits/files).** No code, logo, brand colors, or existing UI could be read from it. Explore it if it is later populated to ground future work in the real product.
- Product spec: a detailed "master prompt" describing the platform's behavior (language geo-fencing, news sources, AI pipeline, categories, personalization, monetization, tech stack). This design system is an **original** interpretation of that spec — no competitor app (Dailyhunt, Inshorts, WayT2ews, etc.) was copied.

> Because no visual brand was supplied, the palette, type choices, and wordmark here are an original, defensible starting point. Treat them as a proposal to refine, not gospel — see the ASK at the bottom.

---

## CONTENT FUNDAMENTALS

**Voice.** Fast, factual, local. tap2news sounds like a trustworthy regional desk editor, not a national broadcaster and not a blogger. Headlines lead with the concrete fact ("తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక" / "Heavy rain alert for coastal districts"), never with hype or clickbait teasing.

**Person.** Third-person and impersonal in editorial copy (the news speaks for itself). Second-person ("your feed", "near you") only in product/UI chrome and personalization. Never first-person "we" in news content.

**Casing.** Headlines are sentence case in Latin scripts (only the first word + proper nouns capitalized) — never Title Case, never ALL CAPS. The only uppercase is the small eyebrow/kicker (category labels like `POLITICS`) and status badges (`BREAKING`, `LIVE`). Indic scripts have no case; weight and size carry the hierarchy.

**Tone by surface:**
- *Breaking / alerts* — urgent, terse, verb-forward. "Cabinet clears new IT policy."
- *Explainers / editorial* — measured, complete sentences, neutral.
- *Utility (gold, weather, scores)* — pure data, minimal words, mono numerals.
- *Product chrome* — plain, helpful, warm. "Pick your language. Your entire feed follows it."

**Numbers & data.** Indian numbering and currency conventions: `₹71,240`, `1,200 posts`, `24,318` (Nifty). Relative timestamps ("8 min", "1 hr", "now"). District/city always named for hyperlocal stories.

**Transparency rules (non-negotiable, from the spec).** Content is aggregated and AI-rewritten, never copied. So the UI is honest about provenance: every story shows its **source**, and AI-rewritten stories carry an **"AI rewrite"** mark. Verified sources get a check. Facts are never invented.

**Emoji.** Not used. Category meaning is carried by color + a small colored dot, not emoji. Iconography is a clean line set (Lucide) — see ICONOGRAPHY.

**Multilingual first.** Copy is authored per-language, not machine-translated at render. The sample data ships Telugu to prove the type stack renders Indic scripts at full quality.

---

## VISUAL FOUNDATIONS

**Overall feel.** Crisp warm-paper cards on a soft off-white canvas — an editorial, high-trust newspaper feel, modernized for a fast mobile feed. Energetic where it matters (vermillion breaking-news accents, live pulses, a scrolling ticker), calm everywhere else so dense multilingual text stays readable.

**Color.**
- *Brand:* **Vermillion red** (`--brand #E11B22`, kumkum-warm) — reserved for breaking news, primary actions, the "tap2" in the wordmark, and live/urgency cues. Used sparingly so it stays loud.
- *Ink:* cool navy-gray neutral ramp (`--ink-900 #14203A` → `--ink-50`) for all text and structure. Text is ink, not pure black.
- *Paper:* warm off-white surfaces (`--paper #FAF7F2`, `--paper-sunk`, white cards).
- *Gold/amber* (`--gold-500 #E8A020`) for gold rates, premium, and highlights.
- *Category coding:* every section has a **fixed hue** (politics indigo, cinema magenta, sports green, jobs blue, crime slate, weather sky, astrology saffron, gold amber, …). This color is the feed's primary wayfinding cue — it appears as a soft-tinted chip with a solid dot, and filled when selected.
- *Semantic:* success green, warning amber, danger red, info blue, each with a soft tint.

**Type.**
- *Display / headlines:* **Anek** superfamily (Anek Latin + Anek Telugu/Tamil/Kannada/Malayalam/Devanagari) — one coherent voice across every Indian script, weights 400–800. Headlines are bold (700) to black (800), tight tracking (`-0.01em`), snug leading.
- *Body:* **Noto Sans** + per-script Noto — maximum legibility for long articles and summaries, 15px / 1.5.
- *Data:* **IBM Plex Mono** for gold rates, scores, indices — tabular, so digits align.
- *Scale:* eyebrow 11 · caption 12 · body 15 · headline-sm 18 · headline 22 · title 32 · display 40+.

**Backgrounds.** Flat warm paper — **no gradients** as decoration (the only gradients are neutral image-placeholder fills). No textures, no patterns, no full-bleed hero photography in chrome. Imagery, when present, sits inside card thumbnails; absent, a neutral `T2` monogram placeholder holds the space (no invented images).

**Corner radii.** Feed cards `12px`, thumbnails `8px`, chips & pills fully rounded (`999px`), data tiles `10px`. Friendly but not bubbly.

**Cards.** White surface, `1px` hairline border (`--ink-100`), and a very soft two-layer shadow (`--shadow-card`) — they read as physical paper clippings, not floating glass. Elevation is restrained; `pop`/`brand` shadows are reserved for menus and primary buttons.

**Shadows.** A short ramp: `hairline` (border only) → `card` (resting) → `raised` (hover/menus) → `pop` (overlays) → `brand` (the red CTA glow). Shadows are low-opacity and cool-tinted (navy, not black).

**Borders.** Hairline `--ink-100` for card edges and dividers; `--ink-200` for stronger separators (secondary buttons). No heavy rules.

**Motion.** Fast and functional — news scanning rewards snappy feedback. Durations 120/200/320ms on a standard `cubic-bezier(.2,0,0,1)` ease. Two signature motions: the **breaking-news ticker** (seamless right-to-left marquee, ~26s loop) and the **live pulse** (an expanding ring dot on Breaking/Live badges). No decorative infinite loops on content, no bounce on layout.

**Hover / press.** Hover lifts a card's shadow slightly; chips and buttons **press** with a subtle scale-down (`--press-scale .97`) for tactile tap feedback. Category chips fill with their hue when active. No opacity-dimming for hover.

**Transparency & blur.** Used lightly: category chips use a `color-mix` tint (~12%) of their hue over paper; no glassmorphism/backdrop-blur in the core UI.

**Layout.** Mobile-first, single column, `16px` side gutters. Sticky app header (wordmark + location + language). Sticky section tabs. A horizontally-scrolling data rail. Fixed bottom tab bar. `10px` gaps between feed cards.

**Imagery vibe.** When real photos are added they should read as documentary news imagery — natural, warm, unfiltered; no heavy duotones or moody grading. Category color does the emotional signaling, not photo treatment.

---

## ICONOGRAPHY
- **Icon set: Lucide** (line icons, 2px stroke), loaded from CDN. This is a **substitution** — no brand icon set was supplied in the (empty) source repo. Swap for the real set when available.
- Style: outline / stroke, ~2px weight, rounded joins — matches the clean editorial tone. Icons render in `--ink` neutrals by default, `--brand` when active (e.g. selected bottom-nav tab, location pin).
- Usage is functional, not decorative: navigation (feed, explore, utility, saved), actions (bookmark, share, translate, voice), and status (map-pin, wifi, alert-triangle).
- **No emoji** anywhere. Category identity is a colored dot, not an emoji. Unicode glyphs are used only for the native script letter inside the language pill (తె, த, ಕ, മ, हि).
- No custom/hand-drawn SVG icons were authored for this system.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports all tokens + fonts).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill wrapper for downloadable use.

**`tokens/`** — `fonts.css` (Anek / Noto / IBM Plex Mono via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`.

**`components/`** — reusable primitives (namespace `window.Ds2daynewsDesignSystem_0b44f3`):
- `core/` — **Button**, **CategoryChip** (+ `CATEGORY_COLORS`), **Badge**
- `navigation/` — **LanguagePill**, **SectionTabs**
- `content/` — **NewsCard**, **SourceStamp**, **FeaturedCarousel**
- `widgets/` — **DataTile**
- `feedback/` — **BreakingTicker**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown on the Design System tab.

**`ui_kits/app/`** — the interactive **tap2news mobile app** recreation (Feed, Article, Explore, Utility) — see its own `README.md`.

**Intentional additions.** `DataTile` and `BreakingTicker` are news-domain primitives not present in any source (there was none) but essential to the product spec (gold/markets/weather/scores, and breaking-news ticker). Listed here for transparency.

---

## Known gaps / caveats
- **Empty source repo** — everything visual here is original, inferred from the product spec, not the real tap2news brand.
- **Fonts are Google Fonts substitutions** (Anek, Noto Sans, IBM Plex Mono). No brand fonts were provided.
- **Icons are Lucide** (CDN substitution). No brand icon set provided.
- **No logo** — a type-only wordmark is used everywhere a mark would go.
- **No imagery** — monogram/gradient placeholders stand in for photos.
