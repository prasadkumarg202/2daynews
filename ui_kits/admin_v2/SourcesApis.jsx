// Sources & APIs console — toggle every feed/API with live monthly-cost meter. Low-cost AI-first.
function SourcesApis() {
  const GROUPS = [
    { name: 'News — free backbone', items: [
      { id: 'pubrss', n: 'Publisher RSS (Eenadu, Sakshi, TV9, ABN, NTV…)', d: 'P1 backbone · 1–2 min polls, faster than Google', cost: 0, on: true },
      { id: 'gnews', n: 'Google News RSS', d: 'Per-category topic feeds', cost: 0, on: true },
      { id: 'pib', n: 'PIB + state govt press releases', d: 'Official announcements first', cost: 0, on: true },
      { id: 'gdelt', n: 'GDELT 2.0', d: '15-min event dumps · syndication counts', cost: 0, on: true },
      { id: 'tg', n: 'Telegram channel listeners', d: 'Police/collector/publisher channels · push', cost: 0, on: true },
      { id: 'yt', n: 'YouTube Data API (TV channels)', d: 'Breaking-banner title stream', cost: 0, on: true },
      { id: 'rsshub', n: 'RSSHub (self-hosted)', d: 'RSS for feedless sites/X', cost: 0, on: false },
      { id: 'newsdata', n: 'NewsData.io free tier', d: 'Backfill + coverage checks', cost: 0, on: false },
    ]},
    { name: 'News — paid (enable only on proven gaps)', items: [
      { id: 'serpnews', n: 'SerpAPI google_news', d: 'Breaking-desk one-line lookups', cost: 4200, on: false },
      { id: 'mediastack', n: 'MediaStack paid', d: 'SLA volume backfill', cost: 2100, on: false },
      { id: 'newsapi', n: 'NewsAPI.org business', d: 'High-volume REST', cost: 37000, on: false },
      { id: 'wire', n: 'PTI / ANI wire subscription', d: 'Wire-speed + licensed rewrite rights', cost: 50000, on: false },
    ]},
    { name: 'Cricket', items: [
      { id: 'cricfree', n: 'CricketData.org free (100 hits/day)', d: 'Dev + off-season', cost: 0, on: true },
      { id: 'cricpaid', n: 'CricketData.org $12.99 tier', d: 'Covers full IPL day at 8s cache', cost: 1100, on: false },
      { id: 'cricbuzz', n: 'Cricbuzz API (API.market)', d: 'Commentary + match pages', cost: 1700, on: false },
      { id: 'entity', n: 'EntitySport / Roanuz', d: 'Official push feeds — scale-up only', cost: 13000, on: false },
    ]},
    { name: 'Jobs', items: [
      { id: 'govjobs', n: 'Govt notifications (UPSC/SSC/RRB/APPSC/TSPSC)', d: 'PDF → Gemini structured rows', cost: 0, on: true },
      { id: 'adzuna', n: 'Adzuna + Jooble + Careerjet APIs', d: 'Private jobs, free keys', cost: 0, on: true },
      { id: 'remote', n: 'Remotive · RemoteOK · WWR', d: 'Remote tab', cost: 0, on: true },
      { id: 'freelancer', n: 'Freelancer.com API', d: 'Gig section · OAuth', cost: 0, on: true },
      { id: 'jobposting', n: 'JobPosting schema crawler', d: 'Top AP/TS employer career pages', cost: 0, on: true },
      { id: 'serpjobs', n: 'SerpAPI google_jobs', d: 'Gap filler · cached per district', cost: 4200, on: false },
      { id: 'jsearch', n: 'JSearch aggregator (Naukri/LinkedIn)', d: 'Top-N per category/day, metered', cost: 2100, on: false },
    ]},
    { name: 'Utilities (all free · cron + Redis)', items: [
      { id: 'meteo', n: 'Open-Meteo + IMD weather/AQI', d: '30-min per district centroid', cost: 0, on: true },
      { id: 'gold', n: 'Gold/silver rate scraper', d: 'Hourly + district markup table', cost: 0, on: true },
      { id: 'mkt', n: 'Exchange delayed feeds (Sensex/Nifty)', d: '1–5 min', cost: 0, on: true },
      { id: 'panchang', n: 'Local ephemeris panchang engine', d: 'Computed — zero API', cost: 0, on: true },
      { id: 'petrol', n: 'Petrol/diesel daily rates', d: 'State-wise public data', cost: 0, on: true },
    ]},
    { name: 'AI models', items: [
      { id: 'flashlite', n: 'gemini-2.5-flash-lite', d: '<1,200-word rewrites · ₹0.05/story', cost: 0, on: true, ai: true },
      { id: 'flash', n: 'gemini-2.5-flash', d: '≥1,200-word rewrites · ₹0.09/story', cost: 0, on: true, ai: true },
      { id: 'fallback', n: 'Fallback chain (deepseek → gpt-4o-mini → haiku)', d: 'Only on 429/quota', cost: 0, on: true, ai: true },
    ]},
  ];
  const [state, setState] = React.useState(() => {
    const s = {}; GROUPS.forEach((g) => g.items.forEach((i) => { s[i.id] = i.on; })); return s;
  });
  const paid = GROUPS.flatMap((g) => g.items).filter((i) => state[i.id] && i.cost > 0);
  const total = paid.reduce((a, i) => a + i.cost, 0);
  return (
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', height: '100%', boxSizing: 'border-box' }}>
      {/* cost meter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', background: 'var(--ink-950)', borderRadius: 'var(--r-md)', color: '#fff' }}>
        <Icon name="wallet" size={18} color="var(--red-400)" />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18 }}>₹{total.toLocaleString('en-IN')}<span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-400)' }}> /month fixed API spend</span></div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--ink-400)' }}>{paid.length ? paid.map((p) => p.n.split(' ')[0]).join(' · ') : 'Fully free stack — only per-story Gemini cost'}</div>
        </div>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: total === 0 ? 'var(--success)' : 'var(--gold-300)' }}>{total === 0 ? '✓ Low-cost AI-first' : 'Paid gap-fillers active'}</span>
      </div>
      {GROUPS.map((g) => (
        <Panel key={g.name} title={g.name} icon="rss" pad={0}>
          {g.items.map((i, ix) => (
            <div key={i.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', borderTop: ix ? '1px solid var(--border-hairline)' : 'none' }}>
              <Dot ok={state[i.id]} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, color: 'var(--text-strong)' }}>{i.n}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>{i.d}</span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, padding: '2px 8px', borderRadius: 999, background: i.cost === 0 ? 'var(--success-soft)' : 'var(--warning-soft)', color: i.cost === 0 ? 'var(--success)' : 'var(--gold-700)' }}>{i.ai ? 'per-story' : i.cost === 0 ? 'FREE' : '₹' + i.cost.toLocaleString('en-IN') + '/mo'}</span>
              <button onClick={() => setState((s) => ({ ...s, [i.id]: !s[i.id] }))} style={{ width: 40, height: 22, borderRadius: 999, border: 'none', cursor: 'pointer', position: 'relative', background: state[i.id] ? 'var(--brand)' : 'var(--ink-200)', transition: 'background var(--dur-fast)', flex: '0 0 auto' }}>
                <span style={{ position: 'absolute', top: 2, left: state[i.id] ? 20 : 2, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left var(--dur-fast) var(--ease-standard)', boxShadow: '0 1px 2px rgba(0,0,0,.2)' }} />
              </button>
            </div>
          ))}
        </Panel>
      ))}
    </div>
  );
}
window.SourcesApis = SourcesApis;
