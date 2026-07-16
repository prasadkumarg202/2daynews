# tap2news — App UI Kit

High-fidelity, click-through recreation of the **tap2news** mobile news app: a Telugu-first, geo-fenced hyperlocal feed. Built entirely from this design system's components + tokens.

## Screens
- **Language select** — the top-level control. Picking a language re-geo-fences the entire app.
- **Feed** (`FeedScreen.jsx`) — breaking ticker → gold/markets/weather rail → scrollable section tabs → story feed (hero / row / compact cards).
- **Article** (`ArticleScreen.jsx`) — headline, source stamp with verified + AI-rewrite marks, body, voice-summary & translate actions.
- **Explore** (`ExploreScreen.jsx`) — category grid + following chips.
- **Utility** (`UtilityScreen.jsx`) — gold & markets, weather panel, panchang / astrology.

## Interactions
Language select → Continue → Feed. Tap any story → Article → back. Bottom nav switches Feed / Explore / Utility / Saved. Tapping the language pill in the header returns to language select.

## Components used
`BreakingTicker`, `DataTile`, `SectionTabs`, `NewsCard`, `CategoryChip`, `Badge`, `SourceStamp`, `LanguagePill`, `Button` — all from `window.Ds2daynewsDesignSystem_0b44f3`.

## Notes
- Icons: **Lucide** via CDN (substitution — no brand icon set was supplied).
- Story imagery uses the T2 monogram/gradient placeholder — no images were provided; drop real images into `NewsCard`'s `image` prop.
- Sample copy is Telugu to demonstrate multilingual rendering (Anek + Noto Sans).
