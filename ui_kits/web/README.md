# tap2news — Marketing Site UI Kit

Public landing site for tap2news, built from the design system's tokens + components.

## Sections (`WebShell.jsx` + `Sections.jsx`)
- **NavBar** — blurred sticky header, nav links, sign-in, "Get the app" CTA.
- **Hero** — headline, sub, dual CTAs, KPI stats, and a live phone mock (`PhoneMock`) rendering real `NewsCard`s + `BreakingTicker`.
- **LangStrip** — dark band showing the 6 language worlds, each with its native script and region.
- **Features** — 3×2 grid of the platform's differentiators (geo-fencing, breaking speed, AI + editor, utilities, voice/translate, citizen journalism).
- **CategoryBand** — the colour-coded category chips.
- **Publishers** — vermillion CTA block for publishers & advertisers with stats.
- **Footer** — link columns + brand line.

## Components used
`Button`, `NewsCard`, `BreakingTicker`, `CategoryChip` from `window.Ds2daynewsDesignSystem_0b44f3`; local layout in `WebShell.jsx`/`Sections.jsx`.

## Notes
- Icons: **Lucide** via CDN (substitution — no brand icon set).
- Marketing copy is English (national landing page); the app itself is language-first.
- No real screenshots/photos — the hero uses a live component-built phone mock instead of an image.
