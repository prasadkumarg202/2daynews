import React from 'react';

/** Map of category → CSS var color. Mirrors tokens/colors.css --cat-* */
export const CATEGORY_COLORS = {
  breaking: 'var(--cat-breaking)', national: 'var(--cat-national)', politics: 'var(--cat-politics)',
  crime: 'var(--cat-crime)', cinema: 'var(--cat-cinema)', sports: 'var(--cat-sports)',
  business: 'var(--cat-business)', jobs: 'var(--cat-jobs)', weather: 'var(--cat-weather)',
  astrology: 'var(--cat-astrology)', gold: 'var(--cat-gold)', education: 'var(--cat-education)',
  health: 'var(--cat-health)', tech: 'var(--cat-tech)',
  mynews: 'var(--cat-mynews)', finance: 'var(--cat-finance)', cooking: 'var(--cat-cooking)', shorts: 'var(--cat-shorts)',
  district: 'var(--cat-district)', state: 'var(--cat-state)', international: 'var(--cat-international)', technology: 'var(--cat-technology)',
  ott: 'var(--cat-ott)', celebrity: 'var(--cat-celebrity)', cricket: 'var(--cat-cricket)', religion: 'var(--cat-religion)',
  lifestyle: 'var(--cat-lifestyle)', automobile: 'var(--cat-automobile)', travel: 'var(--cat-travel)', agriculture: 'var(--cat-agriculture)',
  factcheck: 'var(--cat-factcheck)', opinion: 'var(--cat-opinion)',
};

/** Colored category chip used across feed & section tabs. */
export function CategoryChip({ category = 'politics', label, active = false, solid = false, size = 'md', style = {}, ...rest }) {
  const color = CATEGORY_COLORS[category] || 'var(--ink-500)';
  const text = label || category.charAt(0).toUpperCase() + category.slice(1);
  const pad = size === 'sm' ? '3px 9px' : '5px 12px';
  const fs = size === 'sm' ? 11 : 12.5;
  const filled = solid || active;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: pad,
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: fs, lineHeight: 1,
        letterSpacing: '0.01em', borderRadius: 'var(--r-chip)', cursor: 'pointer', whiteSpace: 'nowrap',
        color: filled ? '#fff' : color,
        background: filled ? color : 'color-mix(in srgb, ' + color + ' 12%, transparent)',
        border: '1px solid ' + (filled ? 'transparent' : 'color-mix(in srgb, ' + color + ' 26%, transparent)'),
        transition: 'all var(--dur-fast) var(--ease-standard)', ...style,
      }}
      {...rest}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: filled ? 'rgba(255,255,255,.85)' : color, flex: '0 0 auto' }} />
      {text}
    </span>
  );
}
