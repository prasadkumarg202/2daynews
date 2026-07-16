import React from 'react';
import { CATEGORY_COLORS } from '../core/CategoryChip.jsx';

/** Swipeable featured-stories gallery. Full-bleed hero per slide with region tag,
 *  counter, prev/next arrows, headline overlay and dot pagination. */
export function FeaturedCarousel({ items = [], height = 230, autoPlay = false, interval = 5000, onOpen = () => {}, style = {} }) {
  const [i, setI] = React.useState(0);
  const n = items.length || 1;
  const go = (d) => setI((x) => (x + d + n) % n);
  React.useEffect(() => {
    if (!autoPlay || n < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, n]);

  const s = items[i] || {};
  const color = CATEGORY_COLORS[s.category] || 'var(--brand)';
  const bg = s.image
    ? `url(${s.image})`
    : `linear-gradient(135deg, color-mix(in srgb, ${color} 42%, var(--ink-800)), var(--ink-900))`;

  const arrow = (dir) => (
    <button onClick={(e) => { e.stopPropagation(); go(dir === 'left' ? -1 : 1); }}
      style={{ position: 'absolute', top: '50%', [dir]: 10, transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'rgba(12,20,36,.45)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', fontSize: 18, lineHeight: 1 }}>
      {dir === 'left' ? '‹' : '›'}
    </button>
  );

  return (
    <div style={{ ...style }}>
      <div onClick={() => onOpen(s, i)} style={{ position: 'relative', height, borderRadius: 'var(--r-card)', overflow: 'hidden', backgroundImage: bg, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-card)' }}>
        {!s.image && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.16)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64 }}>T2</div>}
        {/* region tag */}
        {s.region && <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'rgba(12,20,36,.5)', backdropFilter: 'blur(4px)', padding: '5px 10px', borderRadius: 'var(--r-pill)' }}>{s.region}</span>}
        {/* counter */}
        <span style={{ position: 'absolute', top: 12, right: 12, width: 34, height: 34, borderRadius: '50%', background: 'rgba(12,20,36,.5)', border: '2px solid ' + color, backdropFilter: 'blur(4px)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600 }}>{i + 1}/{n}</span>
        {n > 1 && arrow('left')}
        {n > 1 && arrow('right')}
        {/* scrim + headline */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '48px 16px 16px', background: 'linear-gradient(to top, rgba(8,12,22,.92), rgba(8,12,22,.55) 55%, transparent)' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, lineHeight: 1.18, letterSpacing: '-0.01em', color: '#fff', textWrap: 'balance' }}>{s.headline}</h3>
          <div style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,.82)' }}>{s.time}{s.read ? ' · ' + s.read : ''}</div>
        </div>
      </div>
      {/* dots */}
      {n > 1 && (
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12 }}>
          {items.map((_, k) => (
            <button key={k} onClick={() => setI(k)} style={{ width: k === i ? 22 : 7, height: 7, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0, background: k === i ? 'var(--brand)' : 'var(--ink-200)', transition: 'width var(--dur-base) var(--ease-standard)' }} />
          ))}
        </div>
      )}
    </div>
  );
}
