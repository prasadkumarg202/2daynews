// Marketing site body sections: languages, features, categories, publishers, footer.
function LangStrip({ data }) {
  return (
    <section style={{ background: 'var(--ink-950)', padding: '56px 0' }}>
      <div style={{ ...wrap }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 26, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, letterSpacing: '-0.01em', color: '#fff' }}>One app. Every language.</h2>
            <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-300)' }}>Each language is its own geo-fenced world. National news is shared; everything local stays local.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
          {data.langs.map((l) => (
            <div key={l.name} style={{ background: 'var(--ink-900)', border: '1px solid var(--ink-800)', borderRadius: 'var(--r-card)', padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: '#fff', lineHeight: 1 }}>{l.native}</span>
              <div><div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#fff' }}>{l.name}</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-400)' }}>{l.region}</div></div>
              <div style={{ height: 3, width: 32, background: l.color, borderRadius: 999 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ data }) {
  return (
    <section style={{ ...wrap, padding: '72px 32px' }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand-strong)' }}>Why tap2news</span>
        <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.02em', color: 'var(--ink-900)' }}>Built for how India actually reads news</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        {data.features.map((f) => (
          <div key={f.title} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', padding: 24 }}>
            <span style={{ display: 'flex', width: 44, height: 44, borderRadius: 12, background: 'var(--red-50)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={f.icon} size={22} color="var(--brand)" /></span>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)' }}>{f.title}</h3>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryBand({ data }) {
  return (
    <section style={{ background: 'var(--surface-sunk)', padding: '52px 0', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ ...wrap, textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 24px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.01em', color: 'var(--ink-900)' }}>Everything, colour-coded</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 760, margin: '0 auto' }}>
          {data.categories.map((c) => <DS.CategoryChip key={c} category={c} />)}
        </div>
      </div>
    </section>
  );
}

function Publishers({ data }) {
  return (
    <section style={{ ...wrap, padding: '72px 32px' }}>
      <div style={{ background: 'var(--brand)', borderRadius: 'var(--r-xl)', padding: '48px 44px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center', boxShadow: 'var(--shadow-brand)' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.8)' }}>For publishers & advertisers</span>
          <h2 style={{ margin: '10px 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, letterSpacing: '-0.01em', color: '#fff' }}>Reach 50 million readers in their own language.</h2>
          <p style={{ margin: '0 0 24px', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.9)' }}>Syndicate your RSS, run sponsored stories, or target hyperlocal ads by district and language. Free onboarding, transparent analytics.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <DS.Button variant="inverse" size="lg">Become a publisher</DS.Button>
            <DS.Button variant="soft" size="lg">Advertise</DS.Button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          {data.publisherStats.map(([n, l]) => (
            <div key={l} style={{ flex: 1, background: 'rgba(255,255,255,.12)', borderRadius: 'var(--r-md)', padding: '18px 14px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#fff' }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.82)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ data }) {
  const cols = [['Product', ['Feed', 'Languages', 'Utilities', 'Voice & translate']], ['Company', ['About', 'Careers', 'Press', 'Contact']], ['Publishers', ['Syndicate RSS', 'Advertise', 'Analytics', 'Guidelines']], ['Legal', ['Privacy', 'Terms', 'Editorial policy', 'AI transparency']]];
  return (
    <footer style={{ background: 'var(--ink-950)', color: '#fff', padding: '52px 0 32px' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 32 }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}><span style={{ color: 'var(--red-400)' }}>tap2</span>news</span>
          <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-400)', maxWidth: 240 }}>Multilingual, hyperlocal, AI-powered news for India. The news of your district, in your language.</p>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 12 }}>{h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>{links.map((l) => <a key={l} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--ink-300)', textDecoration: 'none' }}>{l}</a>)}</div>
          </div>
        ))}
      </div>
      <div style={{ ...wrap, marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--ink-800)', display: 'flex', justifyContent: 'space-between', color: 'var(--ink-400)', fontFamily: 'var(--font-body)', fontSize: 12.5 }}>
        <span>© 2026 tap2news. All rights reserved.</span>
        <span>Made in India · 12 languages</span>
      </div>
    </footer>
  );
}

Object.assign(window, { LangStrip, Features, CategoryBand, Publishers, Footer });
