// Users & Roles.
function UsersScreen({ data }) {
  const u = data.users;
  const th = { textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '10px 16px' };
  const td = { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', padding: '12px 16px', borderTop: '1px solid var(--border-hairline)' };
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {u.kpis.map(([v, l], i) => <Kpi key={l} label={l} value={v} color={['var(--brand)','var(--cat-politics)','var(--cat-jobs)','var(--cat-cinema)'][i]} icon={['users','shield','radio','mail'][i]} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 18 }}>
        <Panel title="Team" pad={0} right={<DS.Button variant="primary" size="sm" icon={<Icon name="user-plus" size={14} />}>Invite</DS.Button>}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr style={{ background: 'var(--surface-sunk)' }}><th style={th}>Member</th><th style={th}>Role</th><th style={th}>Desk</th><th style={th}>Status</th></tr></thead>
            <tbody>
              {u.rows.map((r) => (
                <tr key={r.email}>
                  <td style={td}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 34, height: 34, borderRadius: '50%', background: r.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 12.5 }}>{r.init}</span>
                      <div><div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{r.name}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>{r.email}</div></div>
                    </div>
                  </td>
                  <td style={td}><span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-700)', background: 'var(--ink-100)', padding: '3px 10px', borderRadius: 999 }}>{r.role}</span></td>
                  <td style={{ ...td, color: 'var(--text-muted)' }}>{r.desk}</td>
                  <td style={td}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: r.status === 'active' ? 'var(--success)' : 'var(--warning)' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: r.status === 'active' ? 'var(--success)' : 'var(--warning)' }} />{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel title="Roles">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {u.roles.map(([r, d]) => (
              <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)' }}>
                <Icon name="shield-check" size={16} color="var(--brand)" />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-strong)', width: 108 }}>{r}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)' }}>{d}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
window.UsersScreen = UsersScreen;
