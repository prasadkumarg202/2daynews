// Moderation queue: review AI-rewritten stories before publish.
function ModerationScreen({ data }) {
  const [items, setItems] = React.useState(data.queue);
  const [sel, setSel] = React.useState(data.queue[0].id);
  const act = (id) => setItems((xs) => xs.filter((x) => x.id !== id));
  const current = items.find((x) => x.id === sel) || items[0];

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: 400, flex: '0 0 auto', borderRight: '1px solid var(--border-hairline)', overflowY: 'auto', background: 'var(--surface-card)' }}>
        <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text-strong)' }}>Queue</span>
          <DS.Badge tone="count">{items.length}</DS.Badge>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>AI confidence sorted</span>
        </div>
        {items.map((q) => {
          const on = current && current.id === q.id;
          const low = q.confidence < 80;
          return (
            <button key={q.id} onClick={() => setSel(q.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '13px 18px', border: 'none', borderBottom: '1px solid var(--border-hairline)', borderLeft: on ? '3px solid var(--brand)' : '3px solid transparent', background: on ? 'var(--red-50)' : 'transparent', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <DS.CategoryChip category={q.category} size="sm" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-faint)' }}>{q.lang} · {q.time}</span>
                <div style={{ flex: 1 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: low ? 'var(--danger)' : 'var(--success)' }}>{q.confidence}%</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, lineHeight: 1.3, color: 'var(--text-strong)' }}>{q.headline}</div>
            </button>
          );
        })}
        {!items.length && <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 14 }}>Queue cleared 🎉</div>}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 28 }}>
        {current && (
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              {current.category === 'breaking' ? <DS.Badge tone="breaking" live>Breaking</DS.Badge> : <DS.CategoryChip category={current.category} size="sm" />}
              {current.ai && <DS.Badge tone="exclusive">AI rewritten</DS.Badge>}
              {current.flags.map((f) => <span key={f} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--info)', background: 'var(--info-soft)', padding: '3px 9px', borderRadius: 999 }}>{f}</span>)}
            </div>
            <h2 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{current.headline}</h2>
            <DS.SourceStamp source={current.source} time={current.time} aiRewritten={current.ai} verified={current.confidence > 95} />
            <div style={{ display: 'flex', gap: 20, margin: '18px 0', padding: '14px 16px', background: 'var(--surface-sunk)', borderRadius: 'var(--r-md)' }}>
              {[['AI confidence', current.confidence + '%'], ['Language', current.lang], ['Source', current.source], ['Fact-check', current.confidence > 80 ? 'Passed' : 'Review']].map(([k, v]) => (
                <div key={k}><div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{k}</div><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14, color: 'var(--text-strong)', marginTop: 3 }}>{v}</div></div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)' }}>ఈ కథనం AI ద్వారా తిరిగి రాయబడింది. వాస్తవాలు మూలం నుండి ధృవీకరించబడ్డాయి. ప్రచురణకు ముందు ఎడిటర్ సమీక్ష అవసరం. తీర ప్రాంత జిల్లాలకు వాతావరణ శాఖ భారీ వర్ష హెచ్చరిక జారీ చేసింది.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22, position: 'sticky', bottom: 0, paddingTop: 8 }}>
              <DS.Button variant="primary" icon={<Icon name="check" size={16} />} onClick={() => act(current.id)}>Approve & publish</DS.Button>
              <DS.Button variant="secondary" icon={<Icon name="pen-line" size={16} />}>Edit</DS.Button>
              <DS.Button variant="ghost" icon={<Icon name="x" size={16} />} onClick={() => act(current.id)}>Reject</DS.Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
window.ModerationScreen = ModerationScreen;
