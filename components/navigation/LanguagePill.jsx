import React from 'react';

/** Language selector pill — shows script glyph + native name. Core to tap2news geo-fencing. */
export function LanguagePill({ code = 'te', native, glyph, active = false, style = {}, ...rest }) {
  const LANGS = {
    te: { native: 'తెలుగు', glyph: 'తె' }, ta: { native: 'தமிழ்', glyph: 'த' },
    kn: { native: 'ಕನ್ನಡ', glyph: 'ಕ' }, ml: { native: 'മലയാളം', glyph: 'മ' },
    hi: { native: 'हिन्दी', glyph: 'हि' }, en: { native: 'English', glyph: 'En' },
  };
  const l = LANGS[code] || {};
  const nm = native || l.native || code;
  const gl = glyph || l.glyph || code;
  return (
    <button
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 14px 7px 8px',
        borderRadius: 'var(--r-pill)', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
        background: active ? 'var(--ink-900)' : 'var(--white)',
        color: active ? '#fff' : 'var(--ink-800)',
        border: '1px solid ' + (active ? 'transparent' : 'var(--border-strong)'),
        transition: 'all var(--dur-fast) var(--ease-standard)', ...style,
      }}
      {...rest}
    >
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 26, height: 26, borderRadius: '50%', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
        background: active ? 'var(--brand)' : 'var(--red-50)', color: active ? '#fff' : 'var(--brand-strong)',
      }}>{gl}</span>
      {nm}
    </button>
  );
}
