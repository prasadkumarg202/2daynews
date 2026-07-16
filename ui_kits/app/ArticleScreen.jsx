// Article reading screen.
function ArticleScreen({ story, onBack }) {
  const s = story;
  return (
    <div>
      <div style={{ position: 'sticky', top: 0, zIndex: 5, display: 'flex', alignItems: 'center', gap: 12, padding: '12px var(--gutter)', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-hairline)' }}>
        <button onClick={onBack} style={{ display: 'inline-flex', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-800)' }}><Icon name="arrow-left" size={22} /></button>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-800)' }}>Story</span>
        <div style={{ flex: 1 }} />
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-500)' }}><Icon name="bookmark" size={20} /></button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-500)' }}><Icon name="share-2" size={20} /></button>
      </div>
      <div style={{ height: 200, background: 'linear-gradient(135deg,var(--ink-100),var(--paper-sunk))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-300)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34 }}>T2</div>
      <div style={{ padding: 'var(--gutter)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {s.breaking ? <DS.Badge tone="breaking" live>Breaking</DS.Badge> : <DS.CategoryChip category={s.category} size="sm" />}
        </div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-title)', lineHeight: 1.18, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{s.headline}</h1>
        <DS.SourceStamp source={s.source} location={s.location} time={s.time} verified={s.verified} aiRewritten={s.aiRewritten} />
        <div style={{ height: 1, background: 'var(--border-hairline)' }} />
        {(s.body || []).map((p, i) => (
          <p key={i} style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)' }}>{p}</p>
        ))}
        <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
          <DS.Button variant="soft" size="sm" icon={<Icon name="volume-2" size={16} />}>వాయిస్ సారాంశం</DS.Button>
          <DS.Button variant="secondary" size="sm" icon={<Icon name="languages" size={16} />}>English</DS.Button>
        </div>
      </div>
    </div>
  );
}
window.ArticleScreen = ArticleScreen;
