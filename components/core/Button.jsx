import React from 'react';

const SIZES = {
  sm: { padding: '6px 12px', fontSize: 13, height: 32 },
  md: { padding: '9px 16px', fontSize: 14, height: 40 },
  lg: { padding: '12px 22px', fontSize: 16, height: 48 },
};

const VARIANTS = {
  primary: { background: 'var(--brand)', color: 'var(--text-on-brand)', border: '1px solid transparent', boxShadow: 'var(--shadow-brand)' },
  secondary: { background: 'var(--white)', color: 'var(--ink-900)', border: '1px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--ink-800)', border: '1px solid transparent' },
  soft: { background: 'var(--red-50)', color: 'var(--brand-strong)', border: '1px solid transparent' },
  inverse: { background: 'var(--ink-900)', color: 'var(--white)', border: '1px solid transparent' },
};

/** Primary call-to-action button. Uses the vermillion brand color by default. */
export function Button({ variant = 'primary', size = 'md', icon = null, iconRight = null, block = false, disabled = false, children, style = {}, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      disabled={disabled}
      style={{
        display: block ? 'flex' : 'inline-flex', width: block ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)',
        borderRadius: 'var(--r-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, lineHeight: 1, whiteSpace: 'nowrap',
        transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast)',
        ...s, ...v, ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </button>
  );
}
