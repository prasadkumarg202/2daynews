// SEO dashboard.
function SeoScreen({ data }) {
  const s = data.seo;
  const TR = { up: { i: 'trending-up', c: 'var(--success)' }, down: { i: 'trending-down', c: 'var(--danger)' }, flat: { i: 'minus', c: 'var(--text-faint)' } };
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {s.kpis.map((k, i) => <Kpi key={k.label} {...k} icon={['file-search','arrow-up-narrow-wide','mouse-pointer-click','gauge'][i]} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18 }}>
        <Panel title="Top keywords" pad={0}>
          <div style={{ display: 'flex', padding: '9px 18px', background: 'var(--surface-sunk)', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <span style={{ flex: 1 }}>Keyword</span><span style={{ width: 60, textAlign: 'center' }}>Position</span><span style={{ width: 80, textAlign: 'right' }}>Volume</span><span style={{ width: 50, textAlign: 'right' }}>Trend</span>
          </div>
          {s.keywords.map((k, i) => {
            const t = TR[k.trend];
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '12px 18px', borderTop: '1px solid var(--border-hairline)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                <span style={{ flex: 1, color: 'var(--text-strong)' }}>{k.kw}</span>
                <span style={{ width: 60, textAlign: 'center' }}><span style={{ display: 'inline-flex', width: 26, height: 26, borderRadius: 7, alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, color: '#fff', background: k.pos <= 3 ? 'var(--success)' : 'var(--cat-jobs)' }}>{k.pos}</span></span>
                <span style={{ width: 80, textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text-body)' }}>{k.vol}</span>
                <span style={{ width: 50, textAlign: 'right' }}><Icon name={t.i} size={16} color={t.c} /></span>
              </div>
            );
          })}
        </Panel>
        <Panel title="Technical SEO">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.health.map(([k, v], i) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 13px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)' }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: k === 'Broken links' ? 'var(--warning-soft)' : 'var(--success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={k === 'Broken links' ? 'triangle-alert' : 'check'} size={16} color={k === 'Broken links' ? 'var(--warning)' : 'var(--success)'} /></span>
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</span>
              </div>
            ))}
            <DS.Button variant="secondary" size="sm" block icon={<Icon name="refresh-cw" size={15} />} style={{ marginTop: 4 }}>Re-crawl sitemaps</DS.Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.SeoScreen = SeoScreen;
