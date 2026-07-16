// Full-screen swipe reader — 60-word story cards, swipe/scroll vertically for next.
function SwipeReader({ stories = [], onClose, onOpenFull }) {
  const [i, setI] = React.useState(0);
  const n = stories.length;
  const touch = React.useRef(0);
  const busy = React.useRef(false);
  const go = (d) => {
    if (busy.current) return;
    busy.current = true;
    setI((x) => Math.max(0, Math.min(n - 1, x + d)));
    setTimeout(() => { busy.current = false; }, 350);
  };
  const s = stories[i] || {};
  const color = DS.CATEGORY_COLORS[s.category] || 'var(--brand)';
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, background: 'var(--ink-950)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      onWheel={(e) => go(e.deltaY > 0 ? 1 : -1)}
      onTouchStart={(e) => { touch.current = e.touches[0].clientY; }}
      onTouchEnd={(e) => { const dy = touch.current - e.changedTouches[0].clientY; if (Math.abs(dy) > 40) go(dy > 0 ? 1 : -1); }}>
      {/* top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', color: '#fff', flex: '0 0 auto' }}>
        <button onClick={onClose} style={{ display: 'flex', width: 34, height: 34, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,.12)', color: '#fff', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={18} color="#fff" /></button>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}><span style={{ color: 'var(--red-400)' }}>క్విక్</span> రీడ్</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,.6)' }}>{i + 1}/{n}</span>
      </div>
      {/* progress */}
      <div style={{ display: 'flex', gap: 4, padding: '0 16px 12px', flex: '0 0 auto' }}>
        {stories.map((_, k) => <span key={k} style={{ flex: 1, height: 3, borderRadius: 999, background: k <= i ? 'var(--brand)' : 'rgba(255,255,255,.18)', transition: 'background var(--dur-base)' }} />)}
      </div>
      {/* card */}
      <div style={{ flex: 1, minHeight: 0, padding: '0 14px 14px', display: 'flex' }}>
        <div key={i} style={{ flex: 1, background: 'var(--surface-card)', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', animation: 'qr-in .32s var(--ease-out)' }}>
          <div style={{ height: 150, flex: '0 0 auto', background: `linear-gradient(135deg, color-mix(in srgb, ${color} 40%, var(--ink-800)), var(--ink-900))`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.18)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44 }}>T2</div>
          <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, minHeight: 0, overflowY: 'auto' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {s.breaking ? <DS.Badge tone="breaking" live>Breaking</DS.Badge> : <DS.CategoryChip category={s.category} size="sm" />}
            </div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, lineHeight: 1.22, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{s.headline}</h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{s.summary || (s.body || [])[0]}</p>
            <div style={{ flex: 1 }} />
            <DS.SourceStamp source={s.source} location={s.location} time={s.time} verified={s.verified} aiRewritten={s.aiRewritten} />
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', paddingTop: 4, borderTop: '1px solid var(--border-hairline)' }}>
              <DS.Button variant="soft" size="sm" onClick={() => onOpenFull(s)}>పూర్తి కథనం</DS.Button>
              <div style={{ flex: 1 }} />
              <button style={{ display: 'flex', width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border-strong)', background: 'var(--white)', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-600)' }}><Icon name="bookmark" size={16} /></button>
              <button style={{ display: 'flex', width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border-strong)', background: 'var(--white)', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-600)' }}><Icon name="share-2" size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      {/* swipe hint */}
      <div style={{ textAlign: 'center', paddingBottom: 12, color: 'rgba(255,255,255,.55)', fontFamily: 'var(--font-body)', fontSize: 11.5, flex: '0 0 auto' }}>
        {i < n - 1 ? '↑ స్వైప్ చేయండి — తదుపరి వార్త' : 'అన్నీ చదివేశారు'}
      </div>
      <style>{'@keyframes qr-in{from{transform:translateY(26px);opacity:.4}to{transform:translateY(0);opacity:1}}'}</style>
    </div>
  );
}
window.SwipeReader = SwipeReader;
