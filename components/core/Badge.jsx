import React from 'react';

/** Small status badge — Breaking, Live, Exclusive, or a numeric count. */
export function Badge({ tone = 'breaking', children, live = false, style = {}, ...rest }) {
  const TONES = {
    breaking: { bg: 'var(--danger)', fg: '#fff' },
    live: { bg: 'var(--live)', fg: '#fff' },
    exclusive: { bg: 'var(--ink-900)', fg: '#fff' },
    gold: { bg: 'var(--gold-500)', fg: '#3a2708' },
    count: { bg: 'var(--red-50)', fg: 'var(--brand-strong)' },
    success: { bg: 'var(--success-soft)', fg: 'var(--success)' },
  };
  const t = TONES[tone] || TONES.breaking;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 8px',
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10.5, lineHeight: 1,
        letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        borderRadius: 'var(--r-sm)', background: t.bg, color: t.fg, ...style,
      }}
      {...rest}
    >
      {live && (
        <span style={{ position: 'relative', display: 'inline-flex', width: 7, height: 7 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#fff', opacity: 0.85, animation: 'dn-ping 1.4s var(--ease-out) infinite' }} />
          <span style={{ position: 'absolute', inset: 1.5, borderRadius: '50%', background: '#fff' }} />
        </span>
      )}
      {children}
      <style>{'@keyframes dn-ping{0%{transform:scale(.7);opacity:.9}70%,100%{transform:scale(2.2);opacity:0}}'}</style>
    </span>
  );
}
