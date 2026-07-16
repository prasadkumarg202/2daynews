import React from 'react';

/** Breaking-news ticker — a full-width scrolling marquee anchored under the header. */
export function BreakingTicker({ label = 'Breaking', items = [], style = {} }) {
  const list = items.length ? items : ['Live updates appear here'];
  const run = [...list, ...list];
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', background: 'var(--ink-900)', color: '#fff', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: 'var(--brand)', flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11.5, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', clipPath: 'polygon(0 0,100% 0,calc(100% - 8px) 100%,0 100%)' }}>
        <span style={{ position: 'relative', display: 'inline-flex', width: 7, height: 7 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#fff', animation: 'dn-tick-ping 1.4s ease-out infinite' }} />
          <span style={{ position: 'absolute', inset: 1.5, borderRadius: '50%', background: '#fff' }} />
        </span>
        {label}
      </div>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 40, whiteSpace: 'nowrap', animation: 'dn-ticker var(--ticker-speed) linear infinite', fontFamily: 'var(--font-body)', fontSize: 13.5, paddingLeft: 24 }}>
          {run.map((t, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'var(--red-300)' }}>●</span>{t}
            </span>
          ))}
        </div>
      </div>
      <style>{'@keyframes dn-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes dn-tick-ping{0%{transform:scale(.7);opacity:.9}70%,100%{transform:scale(2.4);opacity:0}}'}</style>
    </div>
  );
}
