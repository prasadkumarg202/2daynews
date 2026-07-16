// Analytics dashboard.
function AnalyticsScreen({ data }) {
  const a = data.analytics;
  const max = Math.max(...a.traffic.map((t) => t.app + t.web));
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {a.kpis.map((k) => <Kpi key={k.label} {...k} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 18 }}>
        <Panel title="Traffic · app vs web" right={<div style={{ display: 'flex', gap: 14, fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}><span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 9, height: 9, borderRadius: 2, background: 'var(--brand)' }} />App</span><span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 9, height: 9, borderRadius: 2, background: 'var(--cat-jobs)' }} />Web</span></div>}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 170 }}>
            {a.traffic.map((t) => (
              <div key={t.d} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 30, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 140 }}>
                  <div style={{ height: `${(t.web / max) * 140}px`, background: 'var(--cat-jobs)', borderRadius: '0 0 3px 3px' }} />
                  <div style={{ height: `${(t.app / max) * 140}px`, background: 'var(--brand)', borderRadius: '3px 3px 0 0' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-faint)' }}>{t.d}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Devices">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
            {a.devices.map((d) => (
              <div key={d.k}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontFamily: 'var(--font-body)', fontSize: 13 }}><span style={{ color: 'var(--text-body)' }}>{d.k}</span><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)' }}>{d.pct}%</span></div>
                <div style={{ height: 10, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: `${d.pct}%`, height: '100%', background: d.color, borderRadius: 999 }} /></div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="Top stories today" pad={0}>
        {a.topStories.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 18px', borderTop: i ? '1px solid var(--border-hairline)' : 'none' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--ink-300)', width: 22 }}>{i + 1}</span>
            <DS.CategoryChip category={s.category} size="sm" />
            <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.headline}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--text-body)', width: 60, textAlign: 'right' }}>{s.views}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--success)', width: 44, textAlign: 'right' }}>{s.ctr}</span>
          </div>
        ))}
      </Panel>
    </div>
  );
}
window.AnalyticsScreen = AnalyticsScreen;
