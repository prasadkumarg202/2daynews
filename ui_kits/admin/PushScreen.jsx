// Push & alerts: composer + campaigns.
function PushScreen({ data }) {
  const p = data.push;
  const [msg, setMsg] = React.useState('Heavy rain alert for coastal AP this weekend — stay updated');
  const SBADGE = { live: { t: 'live', txt: 'Live' }, scheduled: { t: 'gold', txt: 'Scheduled' }, sent: { t: 'success', txt: 'Sent' } };
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {p.kpis.map(([v, l], i) => <Kpi key={l} label={l} value={v} color={['var(--brand)','var(--cat-politics)','var(--cat-sports)','var(--cat-cinema)'][i]} icon={['bell','users','mouse-pointer-click','send'][i]} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 18 }}>
        <Panel title="New push">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div><label style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Message</label>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} style={{ width: '100%', marginTop: 6, boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-body)', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-md)', padding: '10px 12px', resize: 'none' }} /></div>
            <div><label style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Segment</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>{['All','Telugu','Tamil','Hindi','Sports','Jobs'].map((s, i) => <DS.CategoryChip key={s} category={['breaking','politics','sports','jobs','cinema','gold'][i]} label={s} active={i === 1} size="sm" />)}</div></div>
            <div style={{ background: 'var(--surface-sunk)', borderRadius: 'var(--r-md)', padding: 14, display: 'flex', gap: 10 }}>
              <span style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 12 }}>2N</span>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, color: 'var(--text-strong)' }}>tap2news</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.4, marginTop: 1 }}>{msg || 'Your message preview…'}</div></div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}><DS.Button variant="primary" icon={<Icon name="send" size={16} />}>Send now</DS.Button><DS.Button variant="secondary" icon={<Icon name="clock" size={16} />}>Schedule</DS.Button></div>
          </div>
        </Panel>
        <Panel title="Campaigns" pad={0}>
          {p.campaigns.map((c, i) => {
            const b = SBADGE[c.status];
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderTop: i ? '1px solid var(--border-hairline)' : 'none' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' }}>{c.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{c.seg}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-body)', width: 56, textAlign: 'right' }}>{c.sent}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--success)', width: 40, textAlign: 'right' }}>{c.ctr}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', width: 56, textAlign: 'right' }}>{c.when}</span>
                <DS.Badge tone={b.t} live={c.status === 'live'}>{b.txt}</DS.Badge>
              </div>
            );
          })}
        </Panel>
      </div>
    </div>
  );
}
window.PushScreen = PushScreen;
