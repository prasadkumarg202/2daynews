// Overview / analytics dashboard.
function StatCard({ s }) {
  const toneColor = { brand: 'var(--brand)', warning: 'var(--warning)', success: 'var(--success)', info: 'var(--info)' }[s.tone];
  const up = s.delta >= 0;
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{s.label}</span>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: `color-mix(in srgb, ${toneColor} 14%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={16} color={toneColor} /></span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1 }}>{s.value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: up ? 'var(--success)' : 'var(--danger)' }}>
        <Icon name={up ? 'trending-up' : 'trending-down'} size={14} color={up ? 'var(--success)' : 'var(--danger)'} />{Math.abs(s.delta)}%
        <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>vs yesterday</span>
      </div>
    </div>
  );
}

function OverviewScreen({ data }) {
  const max = Math.max(...data.ingestBars);
  const maxPipe = data.pipeline[0].n;
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {data.stats.map((s) => <StatCard key={s.label} s={s} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18 }}>
        <Panel title="Stories ingested · last 12h" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>peak 138/hr</span>}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 150 }}>
            {data.ingestBars.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: '100%', height: `${(v / max) * 130}px`, background: i === data.ingestBars.length - 1 ? 'var(--brand)' : 'var(--red-200)', borderRadius: '4px 4px 0 0' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--text-faint)' }}>{i - 11}h</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Readers by language">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.langSplit.map((l) => (
              <div key={l.lang} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 74, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-body)' }}>{l.lang}</span>
                <div style={{ flex: 1, height: 8, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: `${l.pct}%`, height: '100%', background: l.color, borderRadius: 999 }} /></div>
                <span style={{ width: 34, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--text-strong)' }}>{l.pct}%</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="AI pipeline · today" right={<DS.Badge tone="success">Healthy</DS.Badge>}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
          {data.pipeline.map((p, i) => (
            <React.Fragment key={p.stage}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--text-strong)' }}>{p.n.toLocaleString()}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{p.stage}</div>
                <div style={{ height: 5, marginTop: 8, background: 'var(--brand)', opacity: p.n / maxPipe, borderRadius: 999 }} />
              </div>
              {i < data.pipeline.length - 1 && <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px', color: 'var(--ink-300)' }}><Icon name="chevron-right" size={18} color="var(--ink-300)" /></div>}
            </React.Fragment>
          ))}
        </div>
      </Panel>
    </div>
  );
}
Object.assign(window, { OverviewScreen, StatCard });
