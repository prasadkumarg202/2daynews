// Command Center — the single home. Every panel drills into its hub.
function LiveKpi({ label, base, kind, color = 'var(--brand)', vol, sub }) {
  const [v, series] = useLive(base, vol || 0.02);
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-card)', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1 }}>{fmt(v, kind)}</span>
        <Spark series={series} color={color} w={78} h={24} />
      </div>
      {sub && <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--text-faint)' }}>{sub}</span>}
    </div>
  );
}

function CommandCenter({ d, drill }) {
  const th = { fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-faint)', textAlign: 'left', padding: '2px 6px' };
  const td = { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-700)', padding: '4px 6px' };
  return (
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* live KPI strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 10 }}>
        <LiveKpi label="Live readers" base={48200} kind="k" color="var(--success)" sub="app + web" />
        <LiveKpi label="Stories/hr" base={128} kind="int" color="var(--brand)" vol={0.05} sub="ingest → publish" />
        <LiveKpi label="Feed p95" base={96} kind="ms" color="var(--info)" vol={0.06} sub="get_feed RPC" />
        <LiveKpi label="Cache hit" base={94.2} kind="pct" color="var(--cat-business)" vol={0.004} sub="Redis + CDN" />
        <LiveKpi label="AI cost/hr" base={31400} kind="inr" color="var(--gold-600)" vol={0.04} sub="4-model blend" />
        <LiveKpi label="Push CTR" base={6.8} kind="pct" color="var(--cat-cinema)" vol={0.03} sub="last campaign" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr 1fr', gap: 12 }}>
        {/* moderation snapshot */}
        <Panel title="Moderation queue" icon="shield-check" onDrill={() => drill('newsroom')} right={<DS.Badge tone="count">{d.queue.length}</DS.Badge>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {d.queue.slice(0, 4).map((q) => (
              <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <DS.CategoryChip category={q.category} size="sm" />
                <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-strong)' }}>{q.headline}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: q.conf < 80 ? 'var(--danger)' : 'var(--success)' }}>{q.conf}%</span>
              </div>
            ))}
          </div>
        </Panel>
        {/* model routing snapshot */}
        <Panel title="AI model routing" icon="cpu" onDrill={() => drill('infra')}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {d.models.map((m) => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <Dot ok={m.ok} />
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>{m.name}</span>
                <div style={{ width: 52, height: 5, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: m.share + '%', height: '100%', background: 'var(--brand)', borderRadius: 999 }} /></div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)', width: 30, textAlign: 'right' }}>{m.share}%</span>
              </div>
            ))}
          </div>
        </Panel>
        {/* queues snapshot */}
        <Panel title="Job queues · BullMQ" icon="layers" onDrill={() => drill('infra')}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>queue</th><th style={{ ...th, textAlign: 'right' }}>wait</th><th style={{ ...th, textAlign: 'right' }}>act</th><th style={{ ...th, textAlign: 'right' }}>fail</th></tr></thead>
            <tbody>{d.queues.slice(0, 4).map((q) => (
              <tr key={q.name}><td style={{ ...td, fontWeight: 600, color: 'var(--ink-900)' }}>{q.name}</td><td style={{ ...td, textAlign: 'right' }}>{q.waiting}</td><td style={{ ...td, textAlign: 'right', color: 'var(--info)' }}>{q.active}</td><td style={{ ...td, textAlign: 'right', color: q.failed ? 'var(--danger)' : 'var(--text-faint)' }}>{q.failed}</td></tr>
            ))}</tbody>
          </table>
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.25fr', gap: 12 }}>
        {/* redis */}
        <Panel title="Redis cache" icon="database-zap" onDrill={() => drill('infra')} right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--success)', fontWeight: 600 }}>94.2% hit</span>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {d.redisKeys.slice(0, 4).map((k) => (
              <div key={k.key} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10.5 }}>
                <span style={{ flex: 1, color: 'var(--ink-800)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{k.key}</span>
                <span style={{ color: 'var(--gold-700)' }}>{k.ttl}</span>
                <span style={{ color: 'var(--text-muted)', width: 52, textAlign: 'right' }}>{k.hits}</span>
              </div>
            ))}
          </div>
        </Panel>
        {/* postgres */}
        <Panel title="Postgres · Supabase" icon="database" onDrill={() => drill('infra')}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {d.pg.slice(0, 6).map((p) => (
              <div key={p.k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Dot ok={p.ok} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--ink-900)' }}>{p.v}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>{p.k}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        {/* revenue snapshot */}
        <Panel title="Revenue today" icon="indian-rupee" onDrill={() => drill('growth')} right={<span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: 'var(--text-strong)' }}>₹10.03L</span>}>
          <div style={{ display: 'flex', height: 10, borderRadius: 999, overflow: 'hidden', marginBottom: 8 }}>
            {d.revenue.map((r, i) => <span key={r.src} style={{ width: r.v + '%', background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i] }} />)}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px' }}>
            {d.revenue.map((r, i) => (
              <span key={r.src} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)' }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i] }} />{r.src} <b style={{ color: 'var(--ink-800)', fontFamily: 'var(--font-mono)', fontSize: 10 }}>{r.amt}</b>
              </span>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
Object.assign(window, { CommandCenter, LiveKpi });
