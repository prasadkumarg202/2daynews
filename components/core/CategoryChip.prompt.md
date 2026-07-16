One-line: Color-coded category pill — every story and section tab carries one; the dot + tint color is the feed's primary wayfinding cue.

```jsx
<CategoryChip category="cinema" />
<CategoryChip category="politics" label="రాజకీయాలు" />
<CategoryChip category="sports" active />
```

Each category has a fixed color (see `CATEGORY_COLORS`). Default = soft tinted; `active`/`solid` = filled. Pass `label` for localized text. Sizes `sm|md`.
