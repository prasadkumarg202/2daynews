// API & Models: AI providers, news feeds, keys.
function ApiScreen({ data }) {
  const a = data.api;
  const SB = { operational: { c: 'var(--success)', t: 'Live' }, degraded: { c: 'var(--warning)', t: 'Slow' }, down: { c: 'var(--danger)', t: 'Down' } };
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <Panel title="AI models" right={<DS.Badge tone="success">3 / 4 healthy</DS.Badge>}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {a.models.map((m) => {
            const s = SB[m.status];
            return (
              <div key={m.name} style={{ position: 'relative', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', padding: 16, overflow: 'hidden', background: 'var(--surface-card)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: m.color }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</span>
                  <div style={{ flex: 1 }} />
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, flex: '0 0 auto', fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: s.c }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: s.c }} />{s.t}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 12, minHeight: 34 }}>{m.use}</div>
                {[['Calls', m.calls], ['Cost', m.cost], ['Latency', m.latency]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontFamily: 'var(--font-body)', fontSize: 12.5 }}><span style={{ color: 'var(--text-faint)' }}>{k}</span><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)' }}>{v}</span></div>
                ))}
              </div>
            );
          })}
        </div>
      </Panel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <Panel title="Feed APIs · quota used">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            {a.feeds.map((f) => (
              <div key={f.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontFamily: 'var(--font-body)', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-body)' }}>{f.name} <span style={{ fontSize: 10.5, fontWeight: 600, color: f.plan === 'Paid' ? 'var(--gold-700)' : 'var(--success)', background: f.plan === 'Paid' ? 'var(--gold-100)' : 'var(--success-soft)', padding: '1px 6px', borderRadius: 999, marginLeft: 4 }}>{f.plan}</span></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)' }}>{f.quota}%</span>
                </div>
                <div style={{ height: 8, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: `${f.quota}%`, height: '100%', background: f.quota > 70 ? 'var(--warning)' : f.color, borderRadius: 999 }} /></div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="API keys" right={<DS.Button variant="soft" size="sm" icon={<Icon name="plus" size={14} />}>New key</DS.Button>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {a.keys.map((k) => (
              <div key={k.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 13px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)' }}>
                <Icon name="key-round" size={16} color="var(--text-faint)" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--text-strong)' }}>{k.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{k.masked} · {k.scope}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-faint)' }}>{k.last}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.ApiScreen = ApiScreen;
