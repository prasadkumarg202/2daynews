import React from 'react';
import { CategoryChip } from '../core/CategoryChip.jsx';

/** Horizontally-scrollable category tab strip below the app header. */
export function SectionTabs({ items = [], value, onChange = () => {}, style = {} }) {
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '10px var(--gutter)', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-hairline)', ...style }}>
      {items.map((it) => {
        const cat = typeof it === 'string' ? it : it.category;
        const label = typeof it === 'string' ? undefined : it.label;
        return (
          <CategoryChip key={cat + (label || '')} category={cat} label={label} active={value === cat} onClick={() => onChange(cat)} style={{ flex: '0 0 auto' }} />
        );
      })}
    </div>
  );
}
