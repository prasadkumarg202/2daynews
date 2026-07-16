// Engagement modules interleaved into the feed: poll, health quiz, viral card, follow suggestions.

// One-tap poll with animated results.
function PollCard({ poll }) {
  const [voted, setVoted] = React.useState(null);
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: 'var(--red-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="bar-chart-3" size={14} color="var(--brand)" /></span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--brand-strong)' }}>పోల్</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-faint)' }}>{poll.votes} ఓట్లు</span>
      </div>
      <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: 'var(--text-strong)' }}>{poll.q}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {poll.options.map((o, i) => (
          <button key={i} onClick={() => setVoted(i)} style={{ position: 'relative', overflow: 'hidden', textAlign: 'left', padding: '10px 13px', borderRadius: 'var(--r-md)', border: '1px solid ' + (voted === i ? 'var(--brand)' : 'var(--border-strong)'), background: 'var(--white)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-strong)' }}>
            {voted != null && <span style={{ position: 'absolute', inset: 0, width: o.v + '%', background: voted === i ? 'var(--red-50)' : 'var(--ink-50)', transition: 'width .5s var(--ease-out)' }} />}
            <span style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <span style={{ fontWeight: voted === i ? 700 : 500 }}>{o.t}</span>
              {voted != null && <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 12.5, color: voted === i ? 'var(--brand-strong)' : 'var(--text-muted)' }}>{o.v}%</span>}
            </span>
          </button>
        ))}
      </div>
      {voted != null && <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-faint)' }}>మీ ఓటు నమోదైంది · ఫలితాలు లైవ్</p>}
    </div>
  );
}

// Health question with tap-to-reveal answer.
function QuizCard({ quiz }) {
  const [pick, setPick] = React.useState(null);
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: 'color-mix(in srgb, var(--cat-health) 14%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="heart-pulse" size={14} color="var(--cat-health)" /></span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--cat-health)' }}>{quiz.tag} ప్రశ్న</span>
      </div>
      <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: 'var(--text-strong)' }}>{quiz.q}</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {quiz.options.map((o, i) => {
          const state = pick == null ? null : i === quiz.answer ? 'right' : i === pick ? 'wrong' : null;
          return (
            <button key={i} onClick={() => setPick(i)} style={{ padding: '9px 14px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, border: '1px solid ' + (state === 'right' ? 'var(--success)' : state === 'wrong' ? 'var(--danger)' : 'var(--border-strong)'), background: state === 'right' ? 'var(--success-soft)' : state === 'wrong' ? 'var(--danger-soft)' : 'var(--white)', color: state === 'right' ? 'var(--success)' : state === 'wrong' ? 'var(--danger)' : 'var(--text-strong)' }}>{o}</button>
          );
        })}
      </div>
      {pick != null && (
        <div style={{ display: 'flex', gap: 8, marginTop: 12, padding: '10px 12px', background: 'var(--success-soft)', borderRadius: 'var(--r-md)' }}>
          <Icon name="check-circle-2" size={15} color="var(--success)" style={{ flex: '0 0 auto', marginTop: 1 }} />
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 12.5, lineHeight: 1.5, color: 'var(--ink-800)' }}>{quiz.fact}</p>
        </div>
      )}
    </div>
  );
}

// Viral trending card — dark, view counter, share CTA.
function ViralCard({ viral, onOpen = () => {} }) {
  return (
    <div onClick={onOpen} style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-card)', cursor: 'pointer', background: 'linear-gradient(135deg, color-mix(in srgb, var(--cat-shorts) 38%, var(--ink-900)), var(--ink-950))', padding: 16, color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--cat-shorts)', padding: '4px 9px', borderRadius: 999 }}><Icon name="flame" size={12} color="#fff" />వైరల్</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'rgba(255,255,255,.7)' }}>{viral.time}</span>
      </div>
      <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, lineHeight: 1.28, letterSpacing: '-0.01em' }}>{viral.headline}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="eye" size={14} color="rgba(255,255,255,.8)" />{viral.views}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="share-2" size={13} color="rgba(255,255,255,.8)" />{viral.shares}</span>
        <div style={{ flex: 1 }} />
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, background: 'rgba(255,255,255,.14)', padding: '7px 12px', borderRadius: 999 }}>చూడండి <Icon name="arrow-right" size={13} color="#fff" /></span>
      </div>
    </div>
  );
}

// Follow-topic suggestions.
function SuggestCard({ cats }) {
  const [on, setOn] = React.useState({});
  return (
    <div style={{ background: 'var(--surface-sunk)', border: '1px dashed var(--border-strong)', borderRadius: 'var(--r-card)', padding: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <Icon name="sparkles" size={14} color="var(--cat-tech)" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text-strong)' }}>మీకోసం సూచనలు</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-faint)' }}>· ఫాలో అవ్వండి</span>
      </div>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
        {cats.map((c) => <DS.CategoryChip key={c} category={c} active={!!on[c]} onClick={() => setOn((x) => ({ ...x, [c]: !x[c] }))} />)}
      </div>
    </div>
  );
}

// Reaction bar attached beneath every story card — like, comment, share, save.
function ActionBar({ likes = 128, comments = 12 }) {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const btn = { display: 'inline-flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600, padding: '4px 6px' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: -10, padding: '8px 10px', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderTop: 'none', borderRadius: '0 0 var(--r-card) var(--r-card)' }}>
      <button onClick={() => setLiked(!liked)} style={{ ...btn, color: liked ? 'var(--brand)' : 'var(--text-muted)' }}><Icon name="thumbs-up" size={15} color={liked ? 'var(--brand)' : 'var(--ink-400)'} />{likes + (liked ? 1 : 0)}</button>
      <button style={{ ...btn, color: 'var(--text-muted)' }}><Icon name="message-circle" size={15} color="var(--ink-400)" />{comments}</button>
      <button style={{ ...btn, color: 'var(--text-muted)' }}><Icon name="share-2" size={14} color="var(--ink-400)" />షేర్</button>
      <div style={{ flex: 1 }} />
      <button onClick={() => setSaved(!saved)} style={{ ...btn, color: saved ? 'var(--gold-600)' : 'var(--text-muted)' }}><Icon name="bookmark" size={15} color={saved ? 'var(--gold-600)' : 'var(--ink-400)'} />{saved ? 'సేవ్ అయింది' : 'సేవ్'}</button>
    </div>
  );
}

Object.assign(window, { PollCard, QuizCard, ViralCard, SuggestCard, ActionBar });
