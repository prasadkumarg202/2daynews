// Backend health.
function BackendScreen({ data }) {
  const b = data.backend;
  const SB = { healthy: 'var(--success)', busy: 'var(--warning)', degraded: 'var(--warning)', down: 'var(--danger)' };
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {b.infra.map(([l, v], i) => <Kpi key={l} label={l} value={v} color={['var(--cat-health)','var(--cat-jobs)','var(--brand)','var(--cat-sports)'][i]} icon={['activity','boxes','gauge','shield-check'][i]} />)}
      </div>
      <Panel title="Services" right={<DS.Badge tone="success">Ops nominal</DS.Badge>}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {b.services.map((s) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)' }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: SB[s.status], flex: '0 0 auto', boxShadow: `0 0 0 4px color-mix(in srgb, ${SB[s.status]} 20%, transparent)` }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-strong)' }}>{s.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{s.metric}</div>
              </div>
              <div style={{ width: 90 }}>
                <div style={{ height: 6, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: `${s.load}%`, height: '100%', background: s.load > 80 ? 'var(--warning)' : 'var(--cat-health)', borderRadius: 999 }} /></div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-faint)', marginTop: 3, textAlign: 'right' }}>{s.load}% load</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <Panel title="Stack">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['Next.js','React','Tailwind','NestJS','FastAPI','PostgreSQL','Supabase','Redis','BullMQ','Cloudflare R2','Meilisearch','Docker','Kubernetes','Claude','Gemini','GPT'].map((t) => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-700)', background: 'var(--surface-sunk)', border: '1px solid var(--border-hairline)', padding: '5px 11px', borderRadius: 'var(--r-pill)' }}>{t}</span>
          ))}
        </div>
      </Panel>
    </div>
  );
}
window.BackendScreen = BackendScreen;
