---
name: tap2news-design
description: Use this skill to generate well-branded interfaces and assets for tap2news (an AI-powered multilingual hyperlocal Indian news platform), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick map:
- `styles.css` — link this one file to get all tokens + fonts (vermillion brand, ink neutrals, warm paper, category color coding; Anek + Noto Sans + IBM Plex Mono).
- `readme.md` — brand voice, visual foundations, iconography, and the full component/token index. Read this first.
- `components/` — React primitives on `window.Ds2daynewsDesignSystem_0b44f3`: Button, CategoryChip (+CATEGORY_COLORS), Badge, LanguagePill, SectionTabs, NewsCard, SourceStamp, DataTile, BreakingTicker.
- `guidelines/` — foundation specimen cards.
- `ui_kits/app/` — interactive mobile-app recreation to crib layouts from.

Key brand rules: sentence-case headlines, no emoji, colored-dot category coding, always show source + AI-rewrite transparency marks, Indian numbering/currency, multilingual (Indic-script) type. Icons = Lucide (line, 2px). No real logo — use the type wordmark (`tap2` in vermillion + `news` in ink).
