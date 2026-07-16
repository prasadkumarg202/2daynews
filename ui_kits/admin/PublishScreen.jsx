// Publish composer: AI-generated fields + live preview.
function Field({ label, value, mono, area, chip, sub }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <label style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</label>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 600, color: 'var(--cat-tech)' }}><Icon name="sparkles" size={12} color="var(--cat-tech)" />AI</span>
        {sub && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>{sub}</span>}
      </div>
      {chip ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{value.map((t) => <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 13, background: 'var(--ink-100)', color: 'var(--ink-700)', padding: '4px 10px', borderRadius: 999 }}>{t}</span>)}</div>
      ) : (
        <div style={{ fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)', fontSize: mono ? 13 : 15, lineHeight: area ? 1.55 : 1.35, color: 'var(--text-body)', background: 'var(--white)', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-md)', padding: area ? '12px 14px' : '10px 14px' }}>{value}</div>
      )}
    </div>
  );
}

function PublishScreen({ data }) {
  const d = data.draft;
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <DS.Badge tone="breaking" live>Breaking</DS.Badge>
          <DS.CategoryChip category={d.category} size="sm" />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{d.lang} · source {d.source}</span>
          <div style={{ flex: 1 }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--success)', fontWeight: 600 }}><Icon name="shield-check" size={15} color="var(--success)" />Fact-check passed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
          <Field label="Headline" value={d.headline} />
          <Field label="Short headline" value={d.shortHeadline} sub={d.shortHeadline.length + ' chars'} />
          <Field label="Summary" value={d.summary} area />
          <div style={{ height: 1, background: 'var(--border-hairline)', margin: '2px 0' }} />
          <Field label="SEO title" value={d.seoTitle} sub={d.seoTitle.length + '/60'} />
          <Field label="Slug" value={d.slug} mono />
          <Field label="Meta description" value={d.metaDescription} area sub={d.metaDescription.length + '/160'} />
          <Field label="Tags" value={d.tags} chip />
          <Field label="Push notification" value={d.push} area />
        </div>
      </div>
      <div style={{ width: 360, flex: '0 0 auto', borderLeft: '1px solid var(--border-hairline)', background: 'var(--surface-sunk)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="smartphone" size={16} color="var(--text-muted)" /><span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text-strong)' }}>Feed preview</span>
        </div>
        <div style={{ padding: 18, flex: 1, overflowY: 'auto' }}>
          <DS.NewsCard layout="hero" breaking headline={d.headline} summary={d.summary} source={d.source} location="Vijayawada" time="now" verified />
          <div style={{ marginTop: 16, background: 'var(--white)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)', padding: 14, display: 'flex', gap: 10 }}>
            <span style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13 }}>T2</span>
            <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text-strong)' }}>tap2news</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.4, marginTop: 2 }}>{d.push}</div></div>
          </div>
        </div>
        <div style={{ padding: 16, borderTop: '1px solid var(--border-hairline)', display: 'flex', gap: 8, background: 'var(--surface-card)' }}>
          <DS.Button variant="primary" block icon={<Icon name="send" size={16} />}>Publish now</DS.Button>
          <DS.Button variant="secondary" icon={<Icon name="clock" size={16} />}>Schedule</DS.Button>
        </div>
      </div>
    </div>
  );
}
window.PublishScreen = PublishScreen;
