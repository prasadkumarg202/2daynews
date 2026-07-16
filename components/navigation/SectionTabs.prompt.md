One-line: The horizontally-scrolling category strip under the header; composes CategoryChip and manages the selected section.

```jsx
<SectionTabs value={sec} onChange={setSec}
  items={['breaking','politics','cinema','sports','jobs','gold']} />
```

Pass `items` as category keys or `{category,label}` objects for localized labels. Controlled via `value`/`onChange`.
