// Growth hub: analytics + monetization (priority screens).
function Growth({ d }) {
  const [dau, dauS] = useLive(4200000, 0.01);
  const [rpm, rpmS] = useLive(38.4, 0.02);
  const [subs, subsS] = useLive(212000, 0.008);
  const [ctr, ctrS] = useLive(6.8, 0.03);
  const hours = ['6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'];
  const bars = [42, 61, 78, 84, 70, 66, 88, 100, 74];
  return (
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', height: '100%', boxSizing: 'border-box' }}>
      {/* analytics KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
        {[['DAU', fmt(dau / 1000, 'int') + 'K', dauS, 'var(--brand)'], ['Ad RPM', '₹' + rpm.toFixed(1), rpmS, 'var(--gold-600)'], ['Plus subscribers', fmt(subs, 'k'), subsS, 'var(--cat-jobs)'], ['Push CTR', ctr.toFixed(1) + '%', ctrS, 'var(--cat-cinema)']].map(([l, v, s, c]) => (
          <div key={l} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-card)', padding: '10px 12px' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>{l}</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginTop: 3 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1 }}>{v}</span>
              <Spark series={s} color={c} w={84} h={24} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 12 }}>
        {/* engagement by hour */}
        <Panel title="Reads by hour · today" icon="bar-chart-3" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)' }}>peak 8p</span>}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, height: 110 }}>
            {bars.map((v, i) => (
              <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                <div style={{ width: '100%', height: v * 0.9 + 'px', background: i === 7 ? 'var(--brand)' : 'var(--red-200)', borderRadius: '3px 3px 0 0', transition: 'height .4s var(--ease-out)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: 'var(--text-faint)' }}>{hours[i]}</span>
              </div>
            ))}
          </div>
        </Panel>
        {/* language split */}
        <Panel title="Readers by language" icon="languages">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.langSplit.map((l) => (
              <div key={l.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 52, fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-body)' }}>{l.l}</span>
                <div style={{ flex: 1, height: 6, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: l.pct + '%', height: '100%', background: l.c, borderRadius: 999 }} /></div>
                <span style={{ width: 30, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--text-strong)' }}>{l.pct}%</span>
              </div>
            ))}
          </div>
        </Panel>
        {/* top stories */}
        <Panel title="Top stories · 24h" icon="flame">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {d.topStories.map((s, i) => (
              <div key={s.t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)', width: 12 }}>{i + 1}</span>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: DS.CATEGORY_COLORS[s.cat], flex: '0 0 auto' }} />
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.t}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--ink-700)' }}>{s.v}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* monetization */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
        <Panel title="Revenue mix · today" icon="indian-rupee" right={<span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: 'var(--text-strong)' }}>₹10.03L</span>}>
          <div style={{ display: 'flex', height: 12, borderRadius: 999, overflow: 'hidden', marginBottom: 10 }}>
            {d.revenue.map((r, i) => <span key={r.src} style={{ width: r.v + '%', background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i] }} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {d.revenue.map((r, i) => (
              <div key={r.src} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i] }} />
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-body)' }}>{r.src}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{r.v}%</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600, color: 'var(--ink-900)', width: 56, textAlign: 'right' }}>{r.amt}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Plus plans" icon="gem">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[['Plus monthly', '₹49/mo', '148K subs', true], ['Plus yearly', '₹399/yr', '52K subs', true], ['E-paper', '₹99/mo', '12K subs', false]].map(([n, p, s, hot]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 11px', background: 'var(--surface-sunk)', borderRadius: 8 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}><span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, color: 'var(--text-strong)' }}>{n}</span>{hot && <DS.Badge tone="gold">Popular</DS.Badge>}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)' }}>{s}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 12.5, color: 'var(--ink-900)' }}>{p}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.Growth = Growth;
