// Infra & AI hub: model routing, MCP servers, Redis, BullMQ, Postgres, CDN purge.
function Infra({ d }) {
  const [purged, setPurged] = React.useState({});
  const [reqs] = useLive(212000, 0.03);
  const th = { fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-faint)', textAlign: 'left', padding: '4px 8px' };
  const td = { fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-700)', padding: '6px 8px', borderTop: '1px solid var(--border-hairline)' };
  return (
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12 }}>
        {/* model routing */}
        <Panel title="AI model routing" icon="cpu" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)' }}>blended ₹0.11/story</span>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {d.models.map((m) => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: 'var(--surface-sunk)', borderRadius: 8 }}>
                <Dot ok={m.ok} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, color: 'var(--text-strong)' }}>{m.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)' }}>{m.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600, color: 'var(--ink-900)' }}>{m.share}% · {m.cost}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: m.p95 > 4 ? 'var(--warning)' : 'var(--text-faint)' }}>p95 {m.p95}s</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        {/* MCP servers */}
        <Panel title="MCP servers · Claude Code cowork" icon="plug-zap" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--success)', fontWeight: 600 }}>{d.mcps.filter((m) => m.on).length}/{d.mcps.length} connected</span>}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {d.mcps.map((m) => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: '1px solid var(--border-hairline)' }}>
                <Dot ok={m.on} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11.5, color: 'var(--text-strong)', width: 86, flex: '0 0 auto' }}>{m.name}</span>
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.use}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--gold-600)' }}>{'★'.repeat(m.stars)}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {/* Redis */}
        <Panel title="Redis cache" icon="database-zap" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--success)', fontWeight: 600 }}>hit 94.2% · 41MB</span>}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>key</th><th style={th}>ttl</th><th style={{ ...th, textAlign: 'right' }}>hits</th><th style={{ ...th, textAlign: 'right' }}>size</th></tr></thead>
            <tbody>{d.redisKeys.map((k) => (
              <tr key={k.key}><td style={{ ...td, fontWeight: 600, color: 'var(--ink-900)' }}>{k.key}</td><td style={{ ...td, color: 'var(--gold-700)' }}>{k.ttl}</td><td style={{ ...td, textAlign: 'right' }}>{k.hits}</td><td style={{ ...td, textAlign: 'right', color: 'var(--text-faint)' }}>{k.size}</td></tr>
            ))}</tbody>
          </table>
          <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-faint)' }}>Feed keys: <code style={{ fontFamily: 'var(--font-mono)' }}>feed:&lt;lang&gt;:&lt;region&gt;:&lt;section&gt;</code> · 30–60s TTL · live cricket 8s</p>
        </Panel>
        {/* BullMQ */}
        <Panel title="Job queues · BullMQ on Redis" icon="layers">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>queue</th><th style={{ ...th, textAlign: 'right' }}>waiting</th><th style={{ ...th, textAlign: 'right' }}>active</th><th style={{ ...th, textAlign: 'right' }}>failed</th><th style={{ ...th, textAlign: 'right' }}>done 24h</th><th style={th}></th></tr></thead>
            <tbody>{d.queues.map((q) => (
              <tr key={q.name}>
                <td style={{ ...td, fontWeight: 600, color: 'var(--ink-900)' }}>{q.name}</td>
                <td style={{ ...td, textAlign: 'right' }}>{q.waiting}</td>
                <td style={{ ...td, textAlign: 'right', color: 'var(--info)' }}>{q.active}</td>
                <td style={{ ...td, textAlign: 'right', color: q.failed ? 'var(--danger)' : 'var(--text-faint)', fontWeight: q.failed ? 700 : 400 }}>{q.failed}</td>
                <td style={{ ...td, textAlign: 'right', color: 'var(--text-muted)' }}>{q.done}</td>
                <td style={{ ...td, textAlign: 'right' }}>{q.failed > 0 && <button style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 600, color: 'var(--brand-strong)', background: 'var(--red-50)', border: 'none', borderRadius: 999, padding: '3px 9px', cursor: 'pointer' }}>Retry</button>}</td>
              </tr>
            ))}</tbody>
          </table>
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {/* Postgres */}
        <Panel title="Postgres · Supabase" icon="database" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)' }}>primary + 2 replicas</span>}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
            {d.pg.map((p) => (
              <div key={p.k} style={{ padding: '8px 10px', background: 'var(--surface-sunk)', borderRadius: 8, display: 'flex', gap: 7, alignItems: 'center' }}>
                <Dot ok={p.ok} />
                <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600, color: 'var(--ink-900)' }}>{p.v}</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, color: 'var(--text-faint)' }}>{p.k}</div></div>
              </div>
            ))}
          </div>
        </Panel>
        {/* CDN */}
        <Panel title="CDN / edge cache" icon="globe" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)' }}>{fmt(reqs, 'k')} req/m</span>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.cdn.map((z) => (
              <div key={z.zone} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: 'var(--text-strong)' }}>{z.zone}</span>
                <div style={{ width: 90, height: 6, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: z.hit + '%', height: '100%', background: z.hit > 90 ? 'var(--success)' : 'var(--warning)', borderRadius: 999 }} /></div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)', width: 70, textAlign: 'right' }}>{z.hit}% · {z.reqs}</span>
                <button onClick={() => setPurged((x) => ({ ...x, [z.zone]: true }))} style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 600, color: purged[z.zone] ? 'var(--success)' : 'var(--brand-strong)', background: purged[z.zone] ? 'var(--success-soft)' : 'var(--red-50)', border: 'none', borderRadius: 999, padding: '4px 10px', cursor: 'pointer' }}>{purged[z.zone] ? 'Purged ✓' : 'Purge'}</button>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.Infra = Infra;
