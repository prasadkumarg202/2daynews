import React from 'react';
import { CategoryChip } from '../core/CategoryChip.jsx';
import { Badge } from '../core/Badge.jsx';
import { SourceStamp } from './SourceStamp.jsx';

/** The workhorse feed card. Layouts: 'row' (thumb right), 'hero' (image top), 'compact' (text only). */
export function NewsCard({
  headline = 'Headline goes here', summary, category = 'politics', source = 'tap2news',
  time = 'now', location, image, layout = 'row', breaking = false, verified = false,
  aiRewritten = false, onClick = () => {}, style = {},
}) {
  const isHero = layout === 'hero';
  const isCompact = layout === 'compact';
  const Thumb = image ? (
    <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', flex: '0 0 auto' }} />
  ) : (
    <div style={{ background: 'linear-gradient(135deg,var(--ink-100),var(--paper-sunk))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-300)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, flex: '0 0 auto' }}>T2</div>
  );

  const meta = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      {breaking ? <Badge tone="breaking" live>Breaking</Badge> : <CategoryChip category={category} size="sm" />}
    </div>
  );

  return (
    <article onClick={onClick} style={{ display: 'flex', flexDirection: isHero ? 'column' : 'row', gap: isHero ? 0 : 12, background: 'var(--surface-card)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--border-hairline)', ...style }}>
      {isHero && React.cloneElement(Thumb, { style: { ...Thumb.props.style, width: '100%', height: 190 } })}
      <div style={{ padding: 'var(--card-pad)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 0 }}>
        {meta}
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: isHero ? 'var(--fs-headline)' : 'var(--fs-headline-sm)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>{headline}</h3>
        {summary && !isCompact && <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{summary}</p>}
        <SourceStamp source={source} time={time} location={location} verified={verified} aiRewritten={aiRewritten} style={{ marginTop: 2 }} />
      </div>
      {!isHero && React.cloneElement(Thumb, { style: { ...Thumb.props.style, width: 104, alignSelf: 'stretch', minHeight: 96, borderTopRightRadius: 0, borderBottomRightRadius: 0 } })}
    </article>
  );
}
