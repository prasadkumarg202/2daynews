import React from 'react';

/** Utility data tile — gold rate, market index, weather, cricket score. Mono numerals, delta arrow.
 *  Pass `icon` (any node) to show a tinted icon disc like the reference design. */
export function DataTile({ kind = 'gold', label, value, unit, sub, delta, icon, style = {} }) {
  const KINDS = {
    gold: { color: 'var(--cat-gold)', icon: '⬤' },
    market: { color: 'var(--cat-business)', icon: '⬤' },
    weather: { color: 'var(--cat-weather)', icon: '⬤' },
    cricket: { color: 'var(--cat-sports)', icon: '⬤' },
  };
  const k = KINDS[kind] || KINDS.gold;
  const up = typeof delta === 'number' ? delta >= 0 : null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', minWidth: 108, background: 'var(--surface-card)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-card)', ...style }}>
      {icon && <span style={{ width: 34, height: 34, borderRadius: '50%', flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${k.color} 14%, transparent)`, color: k.color }}>{icon}</span>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {!icon && <span style={{ width: 6, height: 6, borderRadius: '50%', background: k.color }} />}
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 9.5, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16, color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>{value}</span>
        {unit && <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>{unit}</span>}
      </div>
      {(sub || delta != null) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 10.5 }}>
          {delta != null && (
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: up ? 'var(--success)' : 'var(--danger)' }}>{up ? '▲' : '▼'} {Math.abs(delta)}</span>
          )}
          {sub && <span style={{ color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>{sub}</span>}
        </div>
      )}
      </div>
    </div>
  );
}
