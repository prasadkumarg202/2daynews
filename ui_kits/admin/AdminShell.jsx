// Admin console shell: DS alias, Icon, sidebar, topbar, shared primitives.
const DS = window.Ds2daynewsDesignSystem_0b44f3;

function Icon({ name, size = 18, color = 'currentColor', style = {} }) {
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

function Sidebar({ data, view, onView }) {
  return (
    <aside style={{ width: 244, flex: '0 0 auto', background: 'var(--ink-950)', color: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '20px 18px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>
          <span style={{ color: 'var(--red-400)' }}>tap2</span>news
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-400)', border: '1px solid var(--ink-700)', borderRadius: 4, padding: '2px 5px' }}>Admin</span>
      </div>
      <nav style={{ flex: 1, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto' }}>
        {data.nav.map((it, i) => {
          if (!it.icon) return <div key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-500)', padding: '14px 12px 6px' }}>{it.label}</div>;
          const on = view === it.id;
          return (
            <button key={it.id} onClick={() => onView(it.id)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 'var(--r-md)', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)', fontWeight: on ? 600 : 500, fontSize: 14, color: on ? '#fff' : 'var(--ink-300)', background: on ? 'var(--brand)' : 'transparent' }}>
              <Icon name={it.icon} size={18} color={on ? '#fff' : 'var(--ink-400)'} />
              <span style={{ flex: 1 }}>{it.label}</span>
              {it.badge != null && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, background: on ? 'rgba(255,255,255,.22)' : 'var(--brand)', color: '#fff', borderRadius: 999, padding: '1px 7px' }}>{it.badge}</span>}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: 12, borderTop: '1px solid var(--ink-800)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--gold-500)', color: 'var(--ink-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13 }}>{data.user.initials}</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13 }}>{data.user.name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--ink-400)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.user.role}</div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ title, subtitle, actions }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 28px', borderBottom: '1px solid var(--border-hairline)', background: 'var(--surface-card)', flex: '0 0 auto' }}>
      <div style={{ minWidth: 0 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{title}</h1>
        {subtitle && <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border-strong)', color: 'var(--text-faint)', fontFamily: 'var(--font-body)', fontSize: 13, minWidth: 180 }}>
          <Icon name="search" size={15} color="var(--ink-400)" /> Search stories…
        </div>
        {actions}
      </div>
    </header>
  );
}

// Reusable card + section label
function Panel({ title, right, children, style = {}, pad = 18 }) {
  return (
    <section style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', ...style }}>
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', padding: '13px 18px', borderBottom: '1px solid var(--border-hairline)' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{title}</h3>
          <div style={{ flex: 1 }} />{right}
        </div>
      )}
      <div style={{ padding: pad }}>{children}</div>
    </section>
  );
}

// Sparkline (SVG polyline) for KPI cards.
function Spark({ points, color = 'var(--brand)', w = 96, h = 30 }) {
  const max = Math.max(...points), min = Math.min(...points);
  const rng = max - min || 1;
  const pts = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - ((p - min) / rng) * (h - 4) - 2}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Vibrant KPI tile with colored top accent + optional spark.
function Kpi({ label, value, delta, color = 'var(--brand)', spark, icon }) {
  const up = delta == null ? null : delta >= 0;
  return (
    <div style={{ position: 'relative', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', padding: 16, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{label}</span>
        {icon && <span style={{ width: 28, height: 28, borderRadius: 8, background: `color-mix(in srgb, ${color} 14%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={15} color={color} /></span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginTop: 8 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1 }}>{value}</div>
        {spark && <Spark points={spark} color={color} />}
      </div>
      {delta != null && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: up ? 'var(--success)' : 'var(--danger)' }}>
          <Icon name={up ? 'trending-up' : 'trending-down'} size={13} color={up ? 'var(--success)' : 'var(--danger)'} />{Math.abs(delta)}%<span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>vs prev.</span>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { DS, Icon, Sidebar, Topbar, Panel, Spark, Kpi });
