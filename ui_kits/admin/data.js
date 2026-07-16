// Sample data for the tap2news Admin Console.
window.ADMIN_DATA = {
  user: { name: 'Priya Rao', role: 'Editor · Telugu desk', initials: 'PR' },
  nav: [
    { id: 'overview', icon: 'layout-dashboard', label: 'Overview' },
    { id: 'moderation', icon: 'shield-check', label: 'Moderation', badge: 8 },
    { id: 'publish', icon: 'pen-line', label: 'Publish' },
    { id: 'sources', icon: 'rss', label: 'Sources' },
    { id: 'lbl-pipeline', label: 'Pipeline' },
    { id: 'ingestion', icon: 'workflow', label: 'Ingestion flow' },
    { id: 'api', icon: 'plug', label: 'API & Models' },
    { id: 'backend', icon: 'server', label: 'Backend health' },
    { id: 'lbl-grow', label: 'Grow' },
    { id: 'analytics', icon: 'bar-chart-3', label: 'Analytics' },
    { id: 'push', icon: 'bell', label: 'Push & Alerts', badge: 3 },
    { id: 'seo', icon: 'search', label: 'SEO' },
    { id: 'ads', icon: 'megaphone', label: 'Monetization' },
    { id: 'users', icon: 'users', label: 'Users & Roles' },
  ],
  stats: [
    { label: 'Published today', value: '1,284', delta: 12.4, icon: 'file-check', tone: 'brand' },
    { label: 'Awaiting review', value: '86', delta: -4.1, icon: 'clock', tone: 'warning' },
    { label: 'Live readers', value: '48.2K', delta: 8.7, icon: 'activity', tone: 'success' },
    { label: 'Sources active', value: '132', delta: 2.0, icon: 'rss', tone: 'info' },
  ],
  ingestBars: [ // stories ingested per hour (last 12h)
    42, 58, 61, 47, 73, 90, 120, 138, 96, 84, 112, 130,
  ],
  langSplit: [
    { lang: 'Telugu', pct: 38, color: 'var(--cat-politics)' },
    { lang: 'Hindi', pct: 27, color: 'var(--brand)' },
    { lang: 'Tamil', pct: 16, color: 'var(--cat-sports)' },
    { lang: 'Kannada', pct: 11, color: 'var(--cat-cinema)' },
    { lang: 'Malayalam', pct: 8, color: 'var(--cat-jobs)' },
  ],
  pipeline: [
    { stage: 'Collected', n: 4820 }, { stage: 'Deduped', n: 3110 },
    { stage: 'Fact-checked', n: 2740 }, { stage: 'AI rewritten', n: 2610 },
    { stage: 'Published', n: 1284 },
  ],
  queue: [
    { id: 1, headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు', category: 'breaking', lang: 'Telugu', source: 'TV9', time: '2 min', confidence: 96, flags: ['Geo: AP'], ai: true },
    { id: 2, headline: 'Cabinet clears new IT policy; targets 200,000 jobs over five years', category: 'politics', lang: 'English', source: 'PTI', time: '6 min', confidence: 91, flags: ['National'], ai: true },
    { id: 3, headline: 'டாலிவுட் நடிகரின் அடுத்த படம் பொங்கலுக்கு வெளியாகிறது', category: 'cinema', lang: 'Tamil', source: 'Dinamalar', time: '9 min', confidence: 88, flags: [], ai: true },
    { id: 4, headline: 'APPSC Group-II notification: 1,200 vacancies, apply by month end', category: 'jobs', lang: 'English', source: 'tap2news desk', time: '14 min', confidence: 99, flags: ['Verified'], ai: false },
    { id: 5, headline: 'ನಗರದಲ್ಲಿ ಸೈಬರ್ ವಂಚನೆ ಜಾಲ ಬಂಧನ; ₹2 ಕೋಟಿ ವಶ', category: 'crime', lang: 'Kannada', source: 'Prajavani', time: '20 min', confidence: 74, flags: ['Low confidence'], ai: true },
  ],
  sources: [
    { name: 'PTI — National wire', type: 'RSS', lang: 'Multi', status: 'active', pull: '30s', today: 412 },
    { name: 'Eenadu — AP/TS', type: 'RSS', lang: 'Telugu', status: 'active', pull: '2m', today: 288 },
    { name: 'Google News — TN', type: 'API', lang: 'Tamil', status: 'active', pull: '1m', today: 196 },
    { name: 'GDELT global', type: 'API', lang: 'Multi', status: 'active', pull: '5m', today: 174 },
    { name: 'IMD weather feed', type: 'API', lang: '—', status: 'active', pull: '10m', today: 48 },
    { name: 'MediaStack — Kerala', type: 'API', lang: 'Malayalam', status: 'paused', pull: '2m', today: 0 },
    { name: 'District correspondents', type: 'Ingest', lang: 'Multi', status: 'active', pull: 'live', today: 63 },
  ],
  draft: {
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    shortHeadline: 'తీర జిల్లాలకు వర్ష హెచ్చరిక',
    summary: 'IMD ప్రకారం రాబోయే 48 గంటల్లో బలమైన గాలులు, స్థానిక వరదల ముప్పు. మత్స్యకారులు సముద్రంలోకి వెళ్లవద్దని సూచన.',
    seoTitle: 'AP coastal districts rain alert — IMD warning, weekend forecast | tap2news',
    slug: 'ap-coastal-rain-alert-weekend-imd',
    metaDescription: 'IMD issues heavy rain alert for Andhra Pradesh coastal districts. Squally winds, local flooding likely. Fishermen advised not to venture into the sea.',
    tags: ['Weather', 'IMD', 'Andhra Pradesh', 'Rain alert', 'Coastal'],
    push: 'Heavy rain alert for coastal AP this weekend — stay updated on tap2news',
    source: 'TV9', category: 'breaking', lang: 'Telugu',
  },

  analytics: {
    kpis: [
      { label: 'Page views', value: '18.4M', delta: 14.2, spark: [30,42,38,55,60,72,68,84], color: 'var(--brand)' },
      { label: 'Unique readers', value: '6.1M', delta: 9.3, spark: [20,28,26,35,40,44,52,58], color: 'var(--cat-politics)' },
      { label: 'Avg. session', value: '7m 12s', delta: 3.4, spark: [40,44,42,50,48,55,60,62], color: 'var(--cat-sports)' },
      { label: 'Push CTR', value: '11.8%', delta: -1.6, spark: [60,55,58,52,50,48,46,44], color: 'var(--cat-cinema)' },
    ],
    traffic: [ // 7-day, two series
      { d: 'Mon', app: 2.1, web: 1.2 }, { d: 'Tue', app: 2.4, web: 1.4 }, { d: 'Wed', app: 2.2, web: 1.3 },
      { d: 'Thu', app: 2.8, web: 1.6 }, { d: 'Fri', app: 3.1, web: 1.8 }, { d: 'Sat', app: 2.6, web: 1.5 }, { d: 'Sun', app: 2.3, web: 1.3 },
    ],
    topStories: [
      { headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక', category: 'breaking', views: '412K', ctr: '18%' },
      { headline: 'APPSC Group-II 1,200 vacancies notification', category: 'jobs', views: '308K', ctr: '22%' },
      { headline: "Tollywood star's Sankranti release locked", category: 'cinema', views: '265K', ctr: '15%' },
      { headline: 'India name squad for home Test series', category: 'sports', views: '198K', ctr: '12%' },
      { headline: 'Gold rate today: 22K climbs ₹180', category: 'gold', views: '154K', ctr: '9%' },
    ],
    devices: [ { k: 'Android', pct: 71, color: 'var(--cat-sports)' }, { k: 'iOS', pct: 18, color: 'var(--ink-700)' }, { k: 'Web', pct: 11, color: 'var(--cat-jobs)' } ],
  },

  push: {
    kpis: [ ['3', 'Scheduled'], ['48.2K', 'Reach / min'], ['11.8%', 'Avg CTR'], ['2.1M', 'Sent today'] ],
    campaigns: [
      { title: 'Heavy rain alert — coastal AP', seg: 'Telugu · AP districts', status: 'live', sent: '820K', ctr: '19%', when: 'Now' },
      { title: 'APPSC Group-II notification', seg: 'Telugu · Jobs followers', status: 'scheduled', sent: '—', ctr: '—', when: '6:00 PM' },
      { title: 'Evening roundup digest', seg: 'All languages', status: 'scheduled', sent: '—', ctr: '—', when: '8:30 PM' },
      { title: 'Morning briefing digest', seg: 'All languages', status: 'sent', sent: '1.9M', ctr: '13%', when: '7:00 AM' },
      { title: 'IND vs AUS live score', seg: 'Sports followers', status: 'sent', sent: '640K', ctr: '24%', when: '2:10 PM' },
    ],
  },

  api: {
    models: [
      { name: 'Claude', use: 'Rewrite · headlines · FAQ', status: 'operational', calls: '284K', cost: '$412', latency: '1.2s', color: 'var(--brand)' },
      { name: 'Gemini', use: 'Translation · summaries', status: 'operational', calls: '196K', cost: '$188', latency: '0.9s', color: 'var(--cat-politics)' },
      { name: 'GPT', use: 'Fallback rewrite', status: 'degraded', calls: '41K', cost: '$96', latency: '2.4s', color: 'var(--cat-sports)' },
      { name: 'DeepSeek', use: 'Classification · geo/category', status: 'operational', calls: '512K', cost: '$54', latency: '0.4s', color: 'var(--cat-cinema)' },
    ],
    feeds: [
      { name: 'NewsAPI', quota: 74, plan: 'Paid', color: 'var(--cat-business)' },
      { name: 'GDELT', quota: 22, plan: 'Free', color: 'var(--cat-jobs)' },
      { name: 'OpenWeather', quota: 48, plan: 'Free', color: 'var(--cat-weather)' },
      { name: 'Cricbuzz RSS', quota: 12, plan: 'Free', color: 'var(--cat-sports)' },
      { name: 'MCX Gold', quota: 61, plan: 'Paid', color: 'var(--cat-gold)' },
      { name: 'Astrology API', quota: 35, plan: 'Paid', color: 'var(--cat-astrology)' },
    ],
    keys: [
      { label: 'Production · Claude', masked: 'sk-ant-••••••••4f2a', scope: 'rewrite, headlines', last: '12s ago' },
      { label: 'Production · Gemini', masked: 'AIza••••••••9c1d', scope: 'translate', last: '1m ago' },
      { label: 'Ingest webhook', masked: 'whk_••••••••7b30', scope: 'citizen uploads', last: '3m ago' },
    ],
  },

  ingestion: [
    { stage: 'Collect', icon: 'download-cloud', n: '4,820', sub: '1,200+ sources', color: 'var(--cat-jobs)', rate: '82/min' },
    { stage: 'Deduplicate', icon: 'copy', n: '3,110', sub: '−35% duplicates', color: 'var(--cat-business)', rate: '' },
    { stage: 'Fact verify', icon: 'badge-check', n: '2,910', sub: '6% held for review', color: 'var(--cat-health)', rate: '' },
    { stage: 'Fake detection', icon: 'shield-alert', n: '2,880', sub: '30 flagged', color: 'var(--cat-crime)', rate: '' },
    { stage: 'Language + Geo', icon: 'languages', n: '2,880', sub: '12 languages routed', color: 'var(--cat-politics)', rate: '' },
    { stage: 'Category + Priority', icon: 'tags', n: '2,880', sub: '34 categories', color: 'var(--cat-cinema)', rate: '' },
    { stage: 'AI rewrite + SEO', icon: 'sparkles', n: '2,610', sub: 'Claude · Gemini', color: 'var(--brand)', rate: '' },
    { stage: 'Publish + Push', icon: 'send', n: '1,284', sub: 'to feed + social', color: 'var(--cat-sports)', rate: '' },
  ],

  backend: {
    services: [
      { name: 'API Gateway (NestJS)', status: 'healthy', metric: '38ms p95', load: 42 },
      { name: 'AI Worker (FastAPI)', status: 'healthy', metric: '1.2s p95', load: 68 },
      { name: 'PostgreSQL / Supabase', status: 'healthy', metric: '112 conns', load: 55 },
      { name: 'Redis cache', status: 'healthy', metric: '99.2% hit', load: 33 },
      { name: 'BullMQ queue', status: 'busy', metric: '2,140 jobs', load: 88 },
      { name: 'Meilisearch', status: 'healthy', metric: '9ms query', load: 24 },
      { name: 'Cloudflare R2', status: 'healthy', metric: '4.2TB', load: 30 },
      { name: 'Supabase Realtime', status: 'degraded', metric: '1.1s lag', load: 76 },
    ],
    infra: [ ['Uptime 30d', '99.98%'], ['K8s pods', '46 / 60'], ['Requests/min', '124K'], ['Error rate', '0.03%'] ],
  },

  seo: {
    kpis: [ { label: 'Indexed pages', value: '1.42M', delta: 6.1, color: 'var(--cat-jobs)' }, { label: 'Avg. position', value: '4.8', delta: 2.3, color: 'var(--cat-sports)' }, { label: 'Organic clicks', value: '9.2M', delta: 11.4, color: 'var(--brand)' }, { label: 'Core Web Vitals', value: '96', delta: 1.0, color: 'var(--cat-health)' } ],
    keywords: [
      { kw: 'gold rate today hyderabad', pos: 1, vol: '210K', trend: 'up' },
      { kw: 'appsc group 2 notification', pos: 2, vol: '148K', trend: 'up' },
      { kw: 'ap weather alert', pos: 3, vol: '96K', trend: 'flat' },
      { kw: 'sensex today', pos: 5, vol: '320K', trend: 'down' },
      { kw: 'telugu cinema news', pos: 4, vol: '132K', trend: 'up' },
    ],
    health: [ ['Sitemaps', 'OK · 42 files'], ['Meta coverage', '98.4%'], ['Broken links', '12'], ['Structured data', 'Valid'] ],
  },

  monet: {
    kpis: [ { label: 'Revenue MTD', value: '₹2.84Cr', delta: 18.2, color: 'var(--cat-sports)' }, { label: 'AdSense RPM', value: '₹214', delta: 4.6, color: 'var(--brand)' }, { label: 'Subscribers', value: '184K', delta: 12.1, color: 'var(--cat-gold)' }, { label: 'Fill rate', value: '92%', delta: 1.8, color: 'var(--cat-jobs)' } ],
    streams: [
      { k: 'Google AdSense', v: 41, amt: '₹1.16Cr', color: 'var(--brand)' },
      { k: 'Ad Manager (direct)', v: 24, amt: '₹68L', color: 'var(--cat-politics)' },
      { k: 'Premium subscriptions', v: 16, amt: '₹45L', color: 'var(--cat-gold)' },
      { k: 'Sponsored news', v: 11, amt: '₹31L', color: 'var(--cat-cinema)' },
      { k: 'Local & business ads', v: 8, amt: '₹24L', color: 'var(--cat-jobs)' },
    ],
    plans: [ { name: 'Free', price: '₹0', users: '5.9M', color: 'var(--ink-500)' }, { name: 'Plus (ad-free)', price: '₹49/mo', users: '142K', color: 'var(--cat-jobs)' }, { name: 'Premium (e-paper)', price: '₹99/mo', users: '42K', color: 'var(--gold-500)' } ],
  },

  users: {
    kpis: [ ['312', 'Team members'], ['6', 'Roles'], ['48', 'Correspondents'], ['9', 'Pending invites'] ],
    rows: [
      { name: 'Priya Rao', email: 'priya@tap2news.in', role: 'Editor', desk: 'Telugu', status: 'active', init: 'PR', color: 'var(--brand)' },
      { name: 'Arun Kumar', email: 'arun@tap2news.in', role: 'Admin', desk: 'All', status: 'active', init: 'AK', color: 'var(--cat-politics)' },
      { name: 'Meera Nair', email: 'meera@tap2news.in', role: 'Moderator', desk: 'Malayalam', status: 'active', init: 'MN', color: 'var(--cat-sports)' },
      { name: 'Ravi Teja', email: 'ravi@tap2news.in', role: 'Correspondent', desk: 'Guntur dist.', status: 'active', init: 'RT', color: 'var(--cat-jobs)' },
      { name: 'Suresh B', email: 'suresh@tap2news.in', role: 'SEO', desk: 'Growth', status: 'invited', init: 'SB', color: 'var(--cat-cinema)' },
      { name: 'Kavya S', email: 'kavya@tap2news.in', role: 'Ad ops', desk: 'Monetization', status: 'active', init: 'KS', color: 'var(--cat-gold)' },
    ],
    roles: [ ['Admin', 'Full access'], ['Editor', 'Publish + moderate'], ['Moderator', 'Review queue'], ['Correspondent', 'Submit stories'], ['SEO', 'SEO dashboard'], ['Ad ops', 'Monetization'] ],
  },
};
