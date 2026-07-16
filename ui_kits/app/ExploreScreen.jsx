// Explore screen: category grid.
function ExploreScreen({ data }) {
  return (
    <div style={{ padding: 'var(--gutter)' }}>
      <h2 style={{ margin: '4px 0 14px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text-strong)' }}>Explore sections</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {data.explore.map((c) => (
          <div key={c.category} style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 14, borderRadius: 'var(--r-card)', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-card)', cursor: 'pointer' }}>
            <span style={{ width: 30, height: 30, borderRadius: '50%', background: `color-mix(in srgb, ${DS.CATEGORY_COLORS[c.category]} 16%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: DS.CATEGORY_COLORS[c.category] }} />
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-strong)' }}>{c.label}</span>
          </div>
        ))}
      </div>
      <h2 style={{ margin: '22px 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text-strong)' }}>Following</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['politics', 'cinema', 'jobs', 'sports'].map((c) => <DS.CategoryChip key={c} category={c} active />)}
        <DS.CategoryChip category="tech" label="+ Add" />
      </div>
    </div>
  );
}
window.ExploreScreen = ExploreScreen;
