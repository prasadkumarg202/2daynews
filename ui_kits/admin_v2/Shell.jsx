// Admin v2 shell: Icon, live-data hooks, Spark, Panel, Sidebar, Topbar. Compact density.
const DS = window.Ds2daynewsDesignSystem_0b44f3;

function Icon({ name, size = 16, color = 'currentColor', style = {} }) {
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
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, flex: '0 0 auto', ...style }} />;
}

// Live random-walk number. returns [value, series]
function useLive(base, vol = 0.03, ms = 2500, len = 24) {
  const [series, setSeries] = React.useState(() => {
    let v = base; const out = [];
    for (let i = 0; i < len; i++) { v = v * (1 + (Math.random() - 0.5) * vol * 2); out.push(v); }
    return out;
  });
  React.useEffect(() => {
    const t = setInterval(() => setSeries((s) => {
      const nv = s[s.length - 1] * (1 + (Math.random() - 0.48) * vol);
      return [...s.slice(1), nv];
    }), ms + Math.random() * 800);
    return () => clearInterval(t);
  }, []);
  return [series[series.length - 1], series];
}

function fmt(v, kind) {
  if (kind === 'k') return (v / 1000).toFixed(1) + 'K';
  if (kind === 'pct') return v.toFixed(1) + '%';
  if (kind === 'ms') return Math.round(v) + 'ms';
  if (kind === 'int') return Math.round(v).toLocaleString('en-IN');
  if (kind === 'inr') return '₹' + (v / 100000).toFixed(2) + 'L';
  return Math.round(v);
}

function Spark({ series, color = 'var(--brand)', w = 96, h = 26, fill = true }) {
  const min = Math.min(...series), max = Math.max(...series), span = max - min || 1;
  const pts = series.map((v, i) => `${(i / (series.length - 1)) * w},${h - 2 - ((v - min) / span) * (h - 6)}`);
  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      {fill && <polygon points={`0,${h} ${pts.join(' ')} ${w},${h}`} fill={color} opacity="0.10" />}
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx={w} cy={pts[pts.length - 1].split(',')[1]} r="2.4" fill={color} />
    </svg>
  );
}

function Panel({ title, icon, right, children, pad = 12, style = {}, onDrill }) {
  return (
    <section style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', minWidth: 0, ...style }}>
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 12px', borderBottom: '1px solid var(--border-hairline)', flex: '0 0 auto' }}>
          {icon && <Icon name={icon} size={14} color="var(--ink-500)" />}
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, color: 'var(--text-strong)' }}>{title}</h3>
          <div style={{ flex: 1 }} />
          {right}
          {onDrill && <button onClick={onDrill} style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--text-link)' }}>Open<Icon name="arrow-up-right" size={12} color="var(--text-link)" /></button>}
        </div>
      )}
      <div style={{ padding: pad, flex: 1, minHeight: 0 }}>{children}</div>
    </section>
  );
}

function Dot({ ok }) {
  return <span style={{ width: 7, height: 7, borderRadius: '50%', flex: '0 0 auto', background: ok ? 'var(--success)' : 'var(--warning)', boxShadow: ok ? '0 0 0 3px var(--success-soft)' : '0 0 0 3px var(--warning-soft)' }} />;
}

function Sidebar({ hubs, hub, onHub, user }) {
  return (
    <aside style={{ width: 190, flex: '0 0 auto', background: 'var(--ink-950)', color: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '16px 16px 12px', display: 'flex', alignItems: 'center', gap: 7 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em' }}><span style={{ color: 'var(--red-400)' }}>tap2</span>news</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-400)', border: '1px solid var(--ink-700)', borderRadius: 4, padding: '1px 4px' }}>Ops</span>
      </div>
      <nav style={{ flex: 1, padding: '4px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {hubs.map((h) => {
          const on = hub === h.id;
          return (
            <button key={h.id} onClick={() => onHub(h.id)} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 10px', borderRadius: 8, border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)', fontWeight: on ? 700 : 500, fontSize: 13, color: on ? '#fff' : 'var(--ink-300)', background: on ? 'var(--brand)' : 'transparent' }}>
              <Icon name={h.icon} size={16} color={on ? '#fff' : 'var(--ink-400)'} />
              <span style={{ flex: 1 }}>{h.label}</span>
              {h.badge != null && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, background: on ? 'rgba(255,255,255,.22)' : 'var(--brand)', color: '#fff', borderRadius: 999, padding: '1px 6px' }}>{h.badge}</span>}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: '10px 12px', borderTop: '1px solid var(--ink-800)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--gold-500)', color: 'var(--ink-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11 }}>{user.initials}</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11.5 }}>{user.name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--ink-400)' }}>{user.role}</div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ title, crumbs, onBack, actions }) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', borderBottom: '1px solid var(--border-hairline)', background: 'var(--surface-card)', flex: '0 0 auto' }}>
      {onBack && <button onClick={onBack} style={{ display: 'inline-flex', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-700)' }}><Icon name="arrow-left" size={17} /></button>}
      <div style={{ minWidth: 0 }}>
        {crumbs && <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-faint)' }}>{crumbs}</div>}
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{title}</h1>
      </div>
      <div style={{ flex: 1 }} />
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 600, color: 'var(--success)' }}><Dot ok /> All systems live</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>{now.toLocaleTimeString('en-IN', { hour12: false })} IST</span>
      {actions}
    </header>
  );
}

Object.assign(window, { DS, Icon, useLive, fmt, Spark, Panel, Dot, Sidebar, Topbar });
