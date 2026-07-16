One-line: A swipeable featured-stories gallery for the top of the feed — full-bleed hero per slide with a region tag, x/n counter, prev/next arrows, headline overlay, and dot pagination.

```jsx
<FeaturedCarousel autoPlay onOpen={(s) => openArticle(s)} items={[
  { region: 'Telangana', category: 'crime', headline: 'Gooty: సైబర్ క్రైమ్స్‌పై స్టూడెంట్స్‌కు పోలీస్ క్లాస్!', time: '11:37 PM', read: '1 min read' },
  { region: 'AP', category: 'politics', headline: '…', time: '10:20 PM', read: '2 min read' },
]} />
```

No `image` → a category-tinted T2 placeholder. Controls hide when there's a single item. `height` defaults to 230; set `autoPlay` for a timed loop.
