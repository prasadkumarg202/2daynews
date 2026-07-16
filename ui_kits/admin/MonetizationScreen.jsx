// Monetization dashboard.
function MonetizationScreen({ data }) {
  const m = data.monet;
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {m.kpis.map((k, i) => <Kpi key={k.label} {...k} icon={['indian-rupee','bar-chart-2','crown','target'][i]} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
        <Panel title="Revenue by stream">
          <div style={{ display: 'flex', height: 20, borderRadius: 999, overflow: 'hidden', marginBottom: 18 }}>
            {m.streams.map((s) => <div key={s.k} style={{ width: `${s.v}%`, background: s.color }} title={s.k} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {m.streams.map((s) => (
              <div key={s.k} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 11, height: 11, borderRadius: 3, background: s.color, flex: '0 0 auto' }} />
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)' }}>{s.k}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)' }}>{s.v}%</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)', width: 72, textAlign: 'right' }}>{s.amt}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Subscription plans">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {m.plans.map((p) => (
              <div key={p.name} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 15px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: p.color }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{p.users} users</div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: p.color }}>{p.price}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.MonetizationScreen = MonetizationScreen;
