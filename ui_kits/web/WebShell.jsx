// Marketing site sections. Composes DS components + local layout.
const DS = window.Ds2daynewsDesignSystem_0b44f3;

function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, 'stroke-width': 2 }, nameAttr: 'data-lucide' });
    }
  }, [name, size, color]);
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, ...style }} />;
}

const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 32px' };

function NavBar({ data }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'color-mix(in srgb, var(--paper) 86%, transparent)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 28, height: 64 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 23, letterSpacing: '-0.02em', color: 'var(--ink-900)' }}><span style={{ color: 'var(--brand)' }}>tap2</span>news</span>
        <nav style={{ display: 'flex', gap: 22 }}>
          {data.nav.map((n) => <a key={n} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 500, color: 'var(--ink-700)', textDecoration: 'none' }}>{n}</a>)}
        </nav>
        <div style={{ flex: 1 }} />
        <a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 600, color: 'var(--ink-800)', textDecoration: 'none' }}>Sign in</a>
        <DS.Button variant="primary" size="sm" icon={<Icon name="download" size={15} />}>Get the app</DS.Button>
      </div>
    </header>
  );
}

function Hero({ data }) {
  const h = data.hero;
  return (
    <section style={{ ...wrap, paddingTop: 72, paddingBottom: 56, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>
      <div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--brand-strong)', background: 'var(--red-50)', padding: '6px 12px', borderRadius: 999 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)' }} />{h.kicker}</span>
        <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--ink-900)', textWrap: 'balance' }}>{h.title}</h1>
        <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 520 }}>{h.sub}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
          <DS.Button variant="primary" size="lg" icon={<Icon name="smartphone" size={18} />}>Download free</DS.Button>
          <DS.Button variant="secondary" size="lg" icon={<Icon name="play" size={18} />}>Watch demo</DS.Button>
        </div>
        <div style={{ display: 'flex', gap: 34, marginTop: 40 }}>
          {h.stat.map(([n, l]) => (
            <div key={l}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>{n}</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-faint)' }}>{l}</div></div>
          ))}
        </div>
      </div>
      <PhoneMock data={data} />
    </section>
  );
}

// Simplified phone showing a live feed built from DS NewsCards.
function PhoneMock({ data }) {
  return (
    <div style={{ justifySelf: 'center', width: 300, height: 600, background: 'var(--white)', borderRadius: 40, boxShadow: '0 30px 70px rgba(12,20,36,.22), 0 0 0 10px #11151c', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
        <DS.BreakingTicker label="Live" items={['Cabinet clears new IT policy', 'Rain alert for coastal districts', 'Sensex up 400 pts']} />
      </div>
      <div style={{ paddingTop: 44, height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 10, padding: '44px 12px 0' }}>
        {data.headlines.map((s, i) => (
          <DS.NewsCard key={i} layout={s.layout} category={s.category} breaking={s.breaking} headline={s.headline} summary={s.summary} source={s.source} location={s.location} time={s.time} verified={s.verified} aiRewritten={s.aiRewritten} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { DS, Icon, wrap, NavBar, Hero, PhoneMock });
