// Newsroom hub: moderation queue + publish composer (drill-in).
function Newsroom({ d }) {
  const [items, setItems] = React.useState(d.queue);
  const [sel, setSel] = React.useState(d.queue[0].id);
  const cur = items.find((x) => x.id === sel) || items[0];
  const act = (id) => { setItems((xs) => xs.filter((x) => x.id !== id)); };
  const dr = d.draft;
  const F = ({ label, value, mono, sub }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>{label}</label>
        <Icon name="sparkles" size={10} color="var(--cat-tech)" />
        {sub && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--text-faint)' }}>{sub}</span>}
      </div>
      <div style={{ fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)', fontSize: mono ? 11.5 : 13, lineHeight: 1.45, color: 'var(--text-body)', background: 'var(--white)', border: '1px solid var(--border-strong)', borderRadius: 8, padding: '8px 10px' }}>{value}</div>
    </div>
  );
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px,320px) minmax(380px,1fr) minmax(220px,280px)', height: '100%', minHeight: 0 }}>
      {/* queue */}
      <div style={{ borderRight: '1px solid var(--border-hairline)', overflowY: 'auto', background: 'var(--surface-card)' }}>
        <div style={{ padding: '9px 14px', borderBottom: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'var(--text-strong)' }}>Queue</span>
          <DS.Badge tone="count">{items.length}</DS.Badge>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-faint)' }}>by AI confidence</span>
        </div>
        {items.map((q) => {
          const on = cur && cur.id === q.id;
          return (
            <button key={q.id} onClick={() => setSel(q.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px', border: 'none', borderBottom: '1px solid var(--border-hairline)', borderLeft: on ? '3px solid var(--brand)' : '3px solid transparent', background: on ? 'var(--red-50)' : 'transparent', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <DS.CategoryChip category={q.category} size="sm" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--text-faint)' }}>{q.lang} · {q.source}</span>
                <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: q.conf < 80 ? 'var(--danger)' : 'var(--success)' }}>{q.conf}%</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12.5, lineHeight: 1.3, color: 'var(--text-strong)' }}>{q.headline}</div>
            </button>
          );
        })}
        {!items.length && <div style={{ padding: 30, textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 12.5 }}>Queue cleared</div>}
      </div>
      {/* composer */}
      <div style={{ overflowY: 'auto', padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
          <DS.Badge tone="breaking" live>Breaking</DS.Badge>
          <DS.Badge tone="exclusive">AI draft</DS.Badge>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-muted)' }}>{dr.lang} · {dr.source} · conf {dr.conf}%</span>
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--success)' }}><Icon name="shield-check" size={13} color="var(--success)" />Fact-check passed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 660 }}>
          <F label="Headline" value={dr.headline} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <F label="Short headline" value={dr.short} sub={dr.short.length + ' ch'} />
            <F label="Slug" value={dr.slug} mono />
          </div>
          <F label="Summary" value={dr.summary} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <F label="SEO title" value={dr.seoTitle} sub={dr.seoTitle.length + '/60'} />
            <F label="Meta description" value={dr.meta} sub={dr.meta.length + '/160'} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Tags</label>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>{dr.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, background: 'var(--ink-100)', color: 'var(--ink-700)', padding: '3px 9px', borderRadius: 999 }}>{t}</span>)}</div>
          </div>
          <F label="Push notification" value={dr.push} />
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            <DS.Button variant="primary" size="sm" icon={<Icon name="send" size={14} />} onClick={() => act(cur && cur.id)}>Publish now</DS.Button>
            <DS.Button variant="secondary" size="sm" icon={<Icon name="clock" size={14} />}>Schedule</DS.Button>
            <DS.Button variant="ghost" size="sm" icon={<Icon name="x" size={14} />} onClick={() => act(cur && cur.id)}>Reject</DS.Button>
          </div>
        </div>
      </div>
      {/* live preview */}
      <div style={{ borderLeft: '1px solid var(--border-hairline)', background: 'var(--surface-sunk)', padding: 14, overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <Icon name="smartphone" size={13} color="var(--text-muted)" /><span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11.5, color: 'var(--text-strong)' }}>Live preview</span>
        </div>
        <DS.NewsCard layout="hero" breaking headline={dr.headline} summary={dr.summary} source={dr.source} location="Vijayawada" time="now" verified />
        <div style={{ marginTop: 10, background: 'var(--white)', border: '1px solid var(--border-hairline)', borderRadius: 8, padding: 10, display: 'flex', gap: 8 }}>
          <span style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10 }}>t2</span>
          <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: 'var(--text-strong)' }}>tap2news</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)', lineHeight: 1.4 }}>{dr.push}</div></div>
        </div>
      </div>
    </div>
  );
}
window.Newsroom = Newsroom;
