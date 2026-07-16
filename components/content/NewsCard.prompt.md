One-line: The workhorse feed story card — composes CategoryChip/Badge + SourceStamp; three layouts give the feed its scannable rhythm.

```jsx
<NewsCard layout="hero" breaking image="/x.jpg"
  headline="…" summary="…" source="TV9" location="Hyderabad" time="8 min" />
<NewsCard layout="row" category="cinema" headline="…" summary="…" source="Sakshi" time="1 hr" />
<NewsCard layout="compact" category="jobs" headline="…" source="tap2news" time="now" />
```

Layouts: `row` (default, thumb right), `hero` (image top), `compact` (text only). No `image` → T2 monogram placeholder. Set `breaking` for the live badge.
