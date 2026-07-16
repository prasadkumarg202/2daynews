// News ingestion flow — the visual AI pipeline.
function IngestionScreen({ data }) {
  const steps = data.ingestion;
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <Panel title="Live pipeline" right={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, color: 'var(--success)' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)' }} />Running · 82 stories/min</span>}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {steps.map((s, i) => (
            <div key={s.stage} style={{ position: 'relative', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', padding: 16, background: 'var(--surface-card)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, color-mix(in srgb, ${s.color} 8%, transparent), transparent 60%)`, pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={18} color="#fff" /></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--ink-300)' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{s.stage}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: s.color, margin: '6px 0 2px' }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>{s.sub}</div>
                {s.rate && <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--success)' }}>▲ {s.rate}</div>}
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <Panel title="Throughput funnel">
          {steps.map((s, i) => {
            const val = parseInt(s.n.replace(/,/g, ''));
            const pct = (val / parseInt(steps[0].n.replace(/,/g, ''))) * 100;
            return (
              <div key={s.stage} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 9 }}>
                <span style={{ width: 118, fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-body)' }}>{s.stage}</span>
                <div style={{ flex: 1, height: 22, background: 'var(--ink-100)', borderRadius: 6, overflow: 'hidden' }}><div style={{ width: `${pct}%`, height: '100%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: '#fff' }}>{s.n}</div></div>
              </div>
            );
          })}
        </Panel>
        <Panel title="Pipeline controls">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['Auto-publish high confidence (>95%)', true], ['Hold breaking news for editor', true], ['Fake-news detection', true], ['Auto-translate to all languages', false], ['Generate voice summaries', true]].map(([label, on]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)' }}>{label}</span>
                <span style={{ width: 38, height: 22, borderRadius: 999, background: on ? 'var(--brand)' : 'var(--ink-200)', position: 'relative', transition: 'background .2s' }}><span style={{ position: 'absolute', top: 2, left: on ? 18 : 2, width: 18, height: 18, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-card)' }} /></span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.IngestionScreen = IngestionScreen;
