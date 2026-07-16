// Polls & engagement manager: create polls/quizzes, monitor live votes, close/feature.
function PollsAdmin() {
  const [polls, setPolls] = React.useState([
    { id: 1, q: 'కొత్త ఐటీ పాలసీతో మీ జిల్లాకు ఉద్యోగాలు వస్తాయా?', cat: 'politics', lang: 'తెలుగు', votes: 12400, status: 'live', opts: [{ t: 'ఖచ్చితంగా వస్తాయి', v: 46 }, { t: 'చూడాలి', v: 38 }, { t: 'రావు', v: 16 }] },
    { id: 2, q: 'హోం టెస్ట్ సిరీస్ ఎవరు గెలుస్తారు?', cat: 'cricket', lang: 'తెలుగు', votes: 31200, status: 'live', opts: [{ t: 'ఇండియా', v: 78 }, { t: 'ఆస్ట్రేలియా', v: 14 }, { t: 'డ్రా', v: 8 }] },
    { id: 3, q: 'Should metro timings extend past 11pm?', cat: 'district', lang: 'English', votes: 5600, status: 'closed', opts: [{ t: 'Yes', v: 71 }, { t: 'No', v: 29 }] },
  ]);
  const [q, setQ] = React.useState('');
  const [opts, setOpts] = React.useState(['', '']);
  const [kind, setKind] = React.useState('poll');
  const create = () => {
    if (!q.trim() || opts.filter((o) => o.trim()).length < 2) return;
    setPolls((ps) => [{ id: Date.now(), q, cat: 'politics', lang: 'తెలుగు', votes: 0, status: 'live', opts: opts.filter((o) => o.trim()).map((t) => ({ t, v: 0 })) }, ...ps]);
    setQ(''); setOpts(['', '']);
  };
  const toggle = (id) => setPolls((ps) => ps.map((p) => p.id === id ? { ...p, status: p.status === 'live' ? 'closed' : 'live' } : p));
  const inp = { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-body)', background: 'var(--white)', border: '1px solid var(--border-strong)', borderRadius: 8, padding: '9px 11px', width: '100%', boxSizing: 'border-box', outline: 'none' };
  const lbl = { fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'block', marginBottom: 4 };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px,380px) 1fr', gap: 14, padding: 16, height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
      {/* create */}
      <Panel title="Create engagement" icon="plus-circle">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[['poll', 'Poll'], ['quiz', 'Quiz'], ['survey', 'Survey']].map(([k, l]) => (
              <button key={k} onClick={() => setKind(k)} style={{ flex: 1, padding: '7px 0', borderRadius: 999, border: '1px solid ' + (kind === k ? 'var(--brand)' : 'var(--border-strong)'), background: kind === k ? 'var(--red-50)' : 'var(--white)', color: kind === k ? 'var(--brand-strong)' : 'var(--ink-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>{l}</button>
            ))}
          </div>
          <div><span style={lbl}>Question</span><textarea rows={2} value={q} onChange={(e) => setQ(e.target.value)} placeholder="మీ ప్రశ్న…" style={{ ...inp, resize: 'vertical' }} /></div>
          <div>
            <span style={lbl}>Options</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {opts.map((o, i) => (
                <div key={i} style={{ display: 'flex', gap: 6 }}>
                  <input value={o} onChange={(e) => setOpts((xs) => xs.map((x, j) => j === i ? e.target.value : x))} placeholder={'Option ' + (i + 1) + (kind === 'quiz' && i === 0 ? ' (correct)' : '')} style={inp} />
                  {opts.length > 2 && <button onClick={() => setOpts((xs) => xs.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-400)' }}><Icon name="x" size={14} /></button>}
                </div>
              ))}
              {opts.length < 4 && <button onClick={() => setOpts((xs) => [...xs, ''])} style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: 'var(--text-link)' }}><Icon name="plus" size={12} color="var(--text-link)" />Add option</button>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}><span style={lbl}>Category</span><select style={{ ...inp, padding: '8px 10px' }}><option>Politics</option><option>Cricket</option><option>Cinema</option><option>Health</option><option>District</option></select></div>
            <div style={{ flex: 1 }}><span style={lbl}>Language</span><select style={{ ...inp, padding: '8px 10px' }}><option>తెలుగు</option><option>தமிழ்</option><option>हिन्दी</option><option>ಕನ್ನಡ</option><option>English</option></select></div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}><span style={lbl}>Placement</span><select style={{ ...inp, padding: '8px 10px' }}><option>Feed · after story 2</option><option>Category tab · top</option><option>Article end</option></select></div>
            <div style={{ flex: 1 }}><span style={lbl}>Duration</span><select style={{ ...inp, padding: '8px 10px' }}><option>24 hours</option><option>3 days</option><option>1 week</option></select></div>
          </div>
          <DS.Button variant="primary" block onClick={create} icon={<Icon name="send" size={14} color="#fff" />}>Publish {kind}</DS.Button>
        </div>
      </Panel>
      {/* live list */}
      <Panel title="Live & recent" icon="bar-chart-3" right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)' }}>{polls.filter((p) => p.status === 'live').length} live</span>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {polls.map((p) => (
            <div key={p.id} style={{ padding: '10px 12px', background: 'var(--surface-sunk)', borderRadius: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                <DS.CategoryChip category={p.cat} size="sm" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-faint)' }}>{p.lang} · {p.votes.toLocaleString('en-IN')} votes</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 700, color: p.status === 'live' ? 'var(--success)' : 'var(--text-faint)' }}><Dot ok={p.status === 'live'} />{p.status}</span>
                <button onClick={() => toggle(p.id)} style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 600, color: 'var(--brand-strong)', background: 'var(--red-50)', border: 'none', borderRadius: 999, padding: '3px 9px', cursor: 'pointer' }}>{p.status === 'live' ? 'Close' : 'Reopen'}</button>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text-strong)', marginBottom: 7 }}>{p.q}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {p.opts.map((o) => (
                  <div key={o.t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 130, fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.t}</span>
                    <div style={{ flex: 1, height: 6, background: 'var(--ink-100)', borderRadius: 999 }}><div style={{ width: o.v + '%', height: '100%', background: 'var(--brand)', borderRadius: 999 }} /></div>
                    <span style={{ width: 32, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, color: 'var(--ink-800)' }}>{o.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
window.PollsAdmin = PollsAdmin;
