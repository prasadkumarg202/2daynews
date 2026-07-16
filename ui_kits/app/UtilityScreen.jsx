// Utility screen: gold/markets, weather, panchang/astrology.
function UtilityScreen({ data }) {
  const p = data.panchang;
  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{title}</h3>
      {children}
    </div>
  );
  const Row = ({ k, v }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--border-hairline)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
      <span style={{ color: 'var(--text-muted)' }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, color: 'var(--text-strong)' }}>{v}</span>
    </div>
  );
  return (
    <div style={{ padding: 'var(--gutter)' }}>
      <Section title="Gold & Markets">
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {data.rail.map((d, i) => <DS.DataTile key={i} {...d} style={{ flex: '0 0 auto' }} />)}
        </div>
      </Section>
      <Section title="Weather · Vijayawada">
        <div style={{ padding: 14, borderRadius: 'var(--r-card)', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}>
          <Row k="Temperature" v="34° / 27°" />
          <Row k="Humidity" v="68%" />
          <Row k="Air quality" v="AQI 82 · Moderate" />
          <Row k="Sunrise · Sunset" v="6:04 · 18:12" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, color: 'var(--warning)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600 }}>
            <Icon name="triangle-alert" size={16} color="var(--warning)" /> Heavy rain alert this weekend
          </div>
        </div>
      </Section>
      <Section title="Panchang · Astrology">
        <div style={{ padding: 14, borderRadius: 'var(--r-card)', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <DS.Badge tone="gold">Today</DS.Badge>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>Daily horoscope · Panchang</span>
          </div>
          <Row k="Tithi" v={p.tithi} />
          <Row k="Nakshatra" v={p.nakshatra} />
          <Row k="Rahu Kalam" v={p.rahu} />
          <Row k="Lucky number · color" v={p.lucky} />
        </div>
      </Section>
    </div>
  );
}
window.UtilityScreen = UtilityScreen;
