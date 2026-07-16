// Shared bits for the app kit: DS namespace alias, Lucide icon helper, phone chrome.
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

// Sticky app header: wordmark + location + language pill.
function AppHeader({ lang, onLangTap, onLocTap }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 5, background: 'var(--surface-card)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg, var(--brand), var(--red-400), var(--gold-500))' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px var(--gutter)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: 'var(--ink-900)' }}>
          <span style={{ color: 'var(--brand)' }}>tap2</span>news
        </span>
        <div style={{ flex: 1 }} />
        <button style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border-strong)', background: 'var(--white)', cursor: 'pointer', color: 'var(--ink-700)' }}><Icon name="search" size={17} /></button>
        <button style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border-strong)', background: 'var(--white)', cursor: 'pointer', color: 'var(--ink-700)' }}>
          <Icon name="bell" size={17} />
          <span style={{ position: 'absolute', top: 6, right: 7, width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)', border: '2px solid var(--white)' }} />
        </button>
        <button onClick={onLangTap} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border-strong)', background: 'var(--white)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--ink-800)', cursor: 'pointer' }}>
          <span style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-strong)', fontWeight: 700 }}>తె</span>{lang.native}
          <Icon name="chevron-down" size={14} color="var(--ink-400)" />
        </button>
      </div>
      <div onClick={onLocTap} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 var(--gutter) 10px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 12.5, cursor: onLocTap ? 'pointer' : 'default' }}>
        <Icon name="map-pin" size={13} color="var(--brand)" />
        <span style={{ fontWeight: 600, color: 'var(--ink-700)' }}>{lang.location}</span>
        <span style={{ color: 'var(--ink-300)' }}>·</span>
        <span>Hyperlocal feed</span>
      </div>
    </header>
  );
}

// Horizontally-scrolling data rail (gold / markets / weather / cricket).
function DataRail({ rail }) {
  const ICONS = { gold: 'coins', market: 'indian-rupee', weather: 'cloud-sun', cricket: 'trophy' };
  return (
    <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '12px var(--gutter)', scrollbarWidth: 'none', background: 'var(--surface-sunk)' }}>
      {rail.map((d, i) => <DS.DataTile key={i} {...d} icon={<Icon name={ICONS[d.kind] || 'activity'} size={17} color="currentColor" />} style={{ flex: '0 0 auto' }} />)}
    </div>
  );
}

// Bottom tab bar.
function BottomNav({ tab, onTab, onQuickRead = () => {} }) {
  const items = [
    { id: 'feed', icon: 'newspaper', label: 'Feed' },
    { id: 'explore', icon: 'layout-grid', label: 'Explore' },
    { id: 'utility', icon: 'gem', label: 'Utility' },
    { id: 'saved', icon: 'bookmark', label: 'Saved' },
  ];
  const Btn = ({ it }) => {
    const on = tab === it.id;
    return (
      <button onClick={() => onTab(it.id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '8px 0 10px', background: 'none', border: 'none', cursor: 'pointer', color: on ? 'var(--brand)' : 'var(--ink-400)' }}>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 30, borderRadius: 999, background: on ? 'var(--red-50)' : 'transparent', transition: 'background var(--dur-fast)' }}>
          <Icon name={it.icon} size={21} color={on ? 'var(--brand)' : 'var(--ink-400)'} />
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: on ? 700 : 500, fontSize: 10.5 }}>{it.label}</span>
      </button>
    );
  };
  return (
    <nav style={{ display: 'flex', alignItems: 'flex-end', borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-card)', paddingBottom: 6, position: 'relative' }}>
      <Btn it={items[0]} /><Btn it={items[1]} />
      <div style={{ flex: '0 0 74px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, paddingBottom: 10 }}>
        <button onClick={onQuickRead} style={{ width: 54, height: 54, marginTop: -26, borderRadius: '50%', border: '4px solid var(--surface-card)', cursor: 'pointer', background: 'linear-gradient(160deg, var(--red-400), var(--brand-deep))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-brand)', transition: 'transform var(--dur-fast) var(--ease-standard)' }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(.92)'; }} onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
          <Icon name="zap" size={24} color="#fff" />
        </button>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, color: 'var(--brand-strong)' }}>క్విక్ రీడ్</span>
      </div>
      <Btn it={items[2]} /><Btn it={items[3]} />
    </nav>
  );
}

Object.assign(window, { DS, Icon, AppHeader, DataRail, BottomNav });
