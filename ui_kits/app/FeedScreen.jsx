// Main feed screen: breaking ticker → data rail → section tabs → story feed.
function FeedScreen({ data, onOpen, onQuickRead = () => {}, loc = { on: false, place: '' } }) {
  const [sec, setSec] = React.useState('mynews');
  const pick = (c) => { if (c === 'shorts') { onQuickRead(); return; } setSec(c); };
  const stories = sec === 'mynews' ? data.stories : (
    data.stories.filter((s) => s.category === sec).length ? data.stories.filter((s) => s.category === sec) : data.stories
  );
  return (
    <div>
      <DS.BreakingTicker label="Breaking" items={data.breaking} />
      <DataRail rail={data.rail} />
      <DS.SectionTabs value={sec} onChange={pick} items={data.sections} />
      {sec === 'mynews' && data.featured && (
        <div style={{ padding: 'var(--gutter) var(--gutter) 4px' }}>
          <DS.FeaturedCarousel items={data.featured} autoPlay onOpen={(s) => onOpen({ ...s, source: 'tap2news', location: s.region, breaking: s.category === 'breaking', body: ['ఈ కథనం పూర్తి వివరాలు యాప్‌లో అందుబాటులో ఉన్నాయి. వాస్తవాలు మూలం నుండి ధృవీకరించబడ్డాయి.'] })} />
        </div>
      )}
      {sec === 'mynews' && loc.on && (
        <div style={{ margin: '4px var(--gutter) 0', padding: 12, background: 'var(--surface-sunk)', borderRadius: 'var(--r-card)', border: '1px solid var(--border-hairline)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <Icon name="map-pin" size={14} color="var(--brand)" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: 'var(--text-strong)' }}>మీ దగ్గర · {loc.place}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginLeft: 'auto', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--success)' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }} />GPS ఆన్</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {data.local.map((s) => (
              <DS.NewsCard key={s.id} layout="compact" category={s.category} headline={s.headline} source={s.source} time={s.time} verified={s.verified} location={loc.place} onClick={() => onOpen({ ...s, location: loc.place, body: ['పూర్తి వివరాలు త్వరలో అందుబాటులో ఉంటాయి.'] })} />
            ))}
          </div>
        </div>
      )}
      <div key={sec} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stack-gap)', padding: 'var(--gutter)' }}>
        {sec !== 'mynews' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 2px 6px' }}>
            <span style={{ width: 4, height: 18, borderRadius: 999, background: DS.CATEGORY_COLORS[sec] || 'var(--brand)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{(data.sections.find((x) => x.category === sec) || {}).label || sec}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-faint)' }}>· తాజా కథనాలు</span>
          </div>
        )}
        {stories.map((s, idx) => {
          const eng = idx === 0 && sec !== 'mynews' && data.engage[sec];
          return (
          <React.Fragment key={s.id}>
            <div className="fx-card" style={{ animationDelay: Math.min(idx * 45, 300) + 'ms' }}>
              <DS.NewsCard layout={s.layout} category={s.category} breaking={s.breaking}
                headline={s.headline} summary={s.summary} source={s.source} location={s.location}
                time={s.time} verified={s.verified} aiRewritten={s.aiRewritten} onClick={() => onOpen(s)}
                style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
              <ActionBar likes={80 + (s.id * 37) % 400} comments={4 + (s.id * 13) % 60} />
            </div>
            {eng && eng.type === 'poll' && <PollCard poll={eng.poll} />}
            {eng && eng.type === 'quiz' && <QuizCard quiz={eng.quiz} />}
            {sec === 'mynews' && idx === 1 && <PollCard poll={data.poll} />}
            {sec === 'mynews' && idx === 2 && <ViralCard viral={data.viral} onOpen={onQuickRead} />}
            {sec === 'mynews' && idx === 3 && <QuizCard quiz={data.quiz} />}
            {sec === 'mynews' && idx === 4 && <SuggestCard cats={data.suggest} />}
          </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
window.FeedScreen = FeedScreen;
