import React from 'react';

/** Source attribution + timestamp line under a headline. Reinforces trust & aggregation transparency. */
export function SourceStamp({ source = 'tap2news', time = 'now', location, verified = false, aiRewritten = false, style = {} }) {
  const dot = <span style={{ color: 'var(--ink-300)' }}>·</span>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', lineHeight: 1, ...style }}>
      <span style={{ fontWeight: 600, color: 'var(--ink-700)' }}>{source}</span>
      {verified && (
        <span title="Verified source" style={{ display: 'inline-flex', width: 13, height: 13, borderRadius: '50%', background: 'var(--info)', color: '#fff', fontSize: 9, alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>✓</span>
      )}
      {location && <>{dot}<span>{location}</span></>}
      {dot}<span>{time}</span>
      {aiRewritten && <>{dot}<span style={{ fontWeight: 600, color: 'var(--cat-tech)' }}>AI rewrite</span></>}
    </div>
  );
}
