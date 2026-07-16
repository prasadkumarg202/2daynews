// Content for the tap2news marketing site.
window.WEB_DATA = {
  nav: ['Product', 'Languages', 'For Publishers', 'Advertise', 'About'],
  hero: {
    kicker: 'Multilingual · Hyperlocal · AI-powered',
    title: 'The news of your district, in your language.',
    sub: 'One app for every Indian language — geo-fenced to where you live. Breaking alerts, cinema, jobs, cricket, gold rates, weather and astrology, curated and rewritten by AI, verified by editors.',
    stat: [['12', 'Languages'], ['50M+', 'Readers'], ['600+', 'Districts'], ['1.2K', 'Sources']],
  },
  langs: [
    { native: 'తెలుగు', name: 'Telugu', region: 'AP · Telangana', color: 'var(--cat-politics)' },
    { native: 'தமிழ்', name: 'Tamil', region: 'Tamil Nadu', color: 'var(--cat-sports)' },
    { native: 'ಕನ್ನಡ', name: 'Kannada', region: 'Karnataka', color: 'var(--cat-cinema)' },
    { native: 'മലയാളം', name: 'Malayalam', region: 'Kerala', color: 'var(--cat-jobs)' },
    { native: 'हिन्दी', name: 'Hindi', region: 'GPS-based', color: 'var(--brand)' },
    { native: 'English', name: 'English', region: 'National', color: 'var(--cat-business)' },
  ],
  features: [
    { icon: 'map-pin', title: 'Geo-fenced feed', body: 'Pick a language and the whole app follows — politics, districts, cinema, jobs, weather. No noise from other states.' },
    { icon: 'zap', title: 'Breaking in seconds', body: 'Real-time ingestion from 1,200+ sources, deduped and ranked so the story reaches you before anyone else.' },
    { icon: 'sparkles', title: 'AI rewritten, editor verified', body: 'Every story is rewritten for clarity, fact-checked, and labelled — never copied, never hallucinated.' },
    { icon: 'gem', title: 'Daily utilities built in', body: 'Gold & silver rates, Sensex/Nifty, live cricket, weather & AQI, panchang and horoscope — in one tab.' },
    { icon: 'volume-2', title: 'Listen & translate', body: 'Voice summaries for every article and one-tap translation across all supported languages.' },
    { icon: 'users', title: 'Citizen journalism', body: 'District correspondents and reader reports, moderated by AI, bring true hyperlocal coverage.' },
  ],
  categories: ['breaking', 'politics', 'cinema', 'sports', 'jobs', 'business', 'crime', 'weather', 'gold', 'health', 'education', 'astrology'],
  headlines: [
    { category: 'breaking', breaking: true, layout: 'hero', headline: 'Heavy rain alert for coastal districts through the weekend', summary: 'IMD warns of squally winds and localized flooding; fishermen advised not to venture into the sea.', source: 'TV9', location: 'Vijayawada', time: '8 min', verified: true },
    { category: 'jobs', layout: 'row', headline: 'APPSC releases 1,200 Group-II vacancies; apply by month end', source: 'tap2news', location: 'AP', time: '2 hr', aiRewritten: true },
    { category: 'cinema', layout: 'row', headline: "Tollywood star's next locked for Sankranti release", source: 'Sakshi', location: 'Hyderabad', time: '1 hr' },
    { category: 'sports', layout: 'compact', headline: 'India name squad for the home Test series', source: 'Cricbuzz', time: '4 hr', verified: true },
  ],
  publisherStats: [['+38%', 'avg. reach uplift'], ['0', 'setup cost'], ['24hr', 'onboarding']],
};
