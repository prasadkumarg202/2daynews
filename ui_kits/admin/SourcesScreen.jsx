// Sources: RSS / API / ingest management table.
function SourcesScreen({ data }) {
  const [rows, setRows] = React.useState(data.sources);
  const toggle = (name) => setRows((xs) => xs.map((r) => r.name === name ? { ...r, status: r.status === 'active' ? 'paused' : 'active', today: r.status === 'active' ? 0 : r.today } : r));
  const th = { textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '10px 14px' };
  const td = { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', padding: '13px 14px', borderTop: '1px solid var(--border-hairline)' };
  return (
    <div style={{ padding: 24 }}>
      <Panel title="News sources" pad={0} right={<DS.Button variant="primary" size="sm" icon={<Icon name="plus" size={15} />}>Add source</DS.Button>}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ background: 'var(--surface-sunk)' }}>
            <th style={th}>Source</th><th style={th}>Type</th><th style={th}>Language</th><th style={th}>Pull</th><th style={{ ...th, textAlign: 'right' }}>Today</th><th style={th}>Status</th><th style={th}></th>
          </tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name}>
                <td style={{ ...td, fontWeight: 600, color: 'var(--text-strong)' }}>{r.name}</td>
                <td style={td}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--ink-100)', padding: '2px 8px', borderRadius: 5, color: 'var(--ink-700)' }}>{r.type}</span></td>
                <td style={td}>{r.lang}</td>
                <td style={{ ...td, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{r.pull}</td>
                <td style={{ ...td, textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 600, color: r.today ? 'var(--text-strong)' : 'var(--text-faint)' }}>{r.today}</td>
                <td style={td}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: r.status === 'active' ? 'var(--success)' : 'var(--text-faint)' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: r.status === 'active' ? 'var(--success)' : 'var(--ink-300)' }} />{r.status}
                  </span>
                </td>
                <td style={{ ...td, textAlign: 'right' }}>
                  <button onClick={() => toggle(r.name)} style={{ background: 'none', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-pill)', padding: '5px 12px', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-700)' }}>{r.status === 'active' ? 'Pause' : 'Resume'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
window.SourcesScreen = SourcesScreen;
