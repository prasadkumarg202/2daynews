// Breaking desk: manual breaking-news entry → Gemini rewrite → publish. Mirrors the RSS pipeline.
function BreakingDesk({ d }) {
  const [raw, setRaw] = React.useState('');
  const [lang, setLang] = React.useState('te');
  const [stage, setStage] = React.useState('idle'); // idle | ai | ready | published
  const [ai, setAi] = React.useState(null);
  const rewrite = () => {
    setStage('ai');
    setTimeout(() => {
      setAi({
        headline: 'విజయవాడలో భారీ అగ్నిప్రమాదం — ఆటోనగర్ గోదాములు దగ్ధం',
        short: 'విజయవాడ ఆటోనగర్‌లో అగ్నిప్రమాదం',
        summary: 'ఆటోనగర్ పారిశ్రామిక వాడలో తెల్లవారుజామున అగ్నిప్రమాదం; 12 గోదాములు దగ్ధం. ప్రాణనష్టం లేదు. 8 ఫైర్ ఇంజన్లు ఘటనా స్థలంలో.',
        seoTitle: 'Vijayawada Autonagar fire: 12 godowns gutted, no casualties | tap2news',
        slug: 'vijayawada-autonagar-fire-godowns',
        push: 'విజయవాడ ఆటోనగర్‌లో భారీ అగ్నిప్రమాదం — ప్రాణనష్టం లేదు. తాజా వివరాలు tap2news లో.',
        tags: ['Vijayawada', 'Fire', 'Autonagar', 'AP'],
        fake: 0.04, conf: 97, national: false,
      });
      setStage('ready');
    }, 1800);
  };
  const inp = { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-body)', background: 'var(--white)', border: '1px solid var(--border-strong)', borderRadius: 8, padding: '9px 11px', width: '100%', boxSizing: 'border-box', outline: 'none', resize: 'vertical' };
  const lbl = { fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'block', marginBottom: 4 };
  const out = (label, value, mono) => (
    <div>
      <span style={lbl}>{label} <Icon name="sparkles" size={10} color="var(--cat-tech)" style={{ verticalAlign: '-1px' }} /></span>
      <div style={{ fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)', fontSize: mono ? 11.5 : 13, lineHeight: 1.5, color: 'var(--text-body)', background: 'var(--surface-sunk)', borderRadius: 8, padding: '8px 10px' }}>{value}</div>
    </div>
  );
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px,1fr) minmax(340px,1fr)', gap: 14, padding: 16, height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
      {/* input side */}
      <Panel title="Breaking desk — manual entry" icon="zap" right={<DS.Badge tone="breaking" live>Live desk</DS.Badge>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div>
            <span style={lbl}>Raw report — text, correspondent WhatsApp, or URL</span>
            <textarea rows={7} value={raw} onChange={(e) => setRaw(e.target.value)} placeholder="Paste the raw tip / wire copy / URL here…" style={inp} />
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <span style={lbl}>Language</span>
              <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ ...inp, padding: '8px 10px' }}>
                <option value="te">తెలుగు</option><option value="ta">தமிழ்</option><option value="hi">हिन्दी</option><option value="kn">ಕನ್ನಡ</option><option value="en">English</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <span style={lbl}>Region</span>
              <select style={{ ...inp, padding: '8px 10px' }}><option>Vijayawada · AP</option><option>Hyderabad · TS</option><option>State-wide</option><option>National</option></select>
            </div>
          </div>
          <DS.Button variant="primary" block disabled={stage === 'ai' || !raw.trim()} onClick={rewrite}
            icon={stage === 'ai' ? <Icon name="loader-2" size={15} color="#fff" style={{ animation: 'spin 1s linear infinite' }} /> : <Icon name="sparkles" size={15} color="#fff" />}>
            {stage === 'ai' ? 'Gemini rewriting…' : 'Rewrite with Gemini'}
          </DS.Button>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-faint)', lineHeight: 1.5 }}>Same pipeline as RSS ingest: dedup → fact-check → fake-score gate → rewrite → SEO → push copy. fake_score &gt; 0.5 routes to review, never auto-publishes.</p>
          <style>{'@keyframes spin{to{transform:rotate(360deg)}}'}</style>
        </div>
      </Panel>
      {/* AI output side */}
      <Panel title="Gemini draft" icon="sparkles" right={ai && <span style={{ display: 'inline-flex', gap: 6 }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--success)' }}>conf {ai.conf}%</span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: ai.fake < 0.5 ? 'var(--success)' : 'var(--danger)' }}>fake {ai.fake}</span></span>}>
        {!ai && stage !== 'ai' && <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-faint)', fontFamily: 'var(--font-body)', fontSize: 12.5 }}>Paste a raw report and hit <b>Rewrite with Gemini</b> — the structured draft (headline, summary, SEO, push) appears here.</div>}
        {stage === 'ai' && <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 12.5 }}>Rewriting · classifying · fact-checking…</div>}
        {ai && stage !== 'ai' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {out('Headline', ai.headline)}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>{out('Short headline', ai.short)}{out('Slug', ai.slug, true)}</div>
            {out('Summary', ai.summary)}
            {out('SEO title', ai.seoTitle)}
            {out('Push notification', ai.push)}
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>{ai.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 11, background: 'var(--ink-100)', color: 'var(--ink-700)', padding: '3px 9px', borderRadius: 999 }}>{t}</span>)}</div>
            {stage === 'published' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: 'var(--success-soft)', borderRadius: 8, color: 'var(--success)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13 }}>
                <Icon name="check-circle-2" size={16} color="var(--success)" />Published as BREAKING · push fan-out queued · ticker updated
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 8 }}>
                <DS.Button variant="primary" size="sm" icon={<Icon name="zap" size={14} color="#fff" />} onClick={() => setStage('published')}>Publish breaking</DS.Button>
                <DS.Button variant="secondary" size="sm" icon={<Icon name="pen-line" size={14} />}>Edit draft</DS.Button>
                <DS.Button variant="ghost" size="sm">Discard</DS.Button>
              </div>
            )}
          </div>
        )}
      </Panel>
    </div>
  );
}
window.BreakingDesk = BreakingDesk;
