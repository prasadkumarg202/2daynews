/* @ds-bundle: {"format":4,"namespace":"Ds2daynewsDesignSystem_0b44f3","components":[{"name":"FeaturedCarousel","sourcePath":"components/content/FeaturedCarousel.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"SourceStamp","sourcePath":"components/content/SourceStamp.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CATEGORY_COLORS","sourcePath":"components/core/CategoryChip.jsx"},{"name":"CategoryChip","sourcePath":"components/core/CategoryChip.jsx"},{"name":"BreakingTicker","sourcePath":"components/feedback/BreakingTicker.jsx"},{"name":"LanguagePill","sourcePath":"components/navigation/LanguagePill.jsx"},{"name":"SectionTabs","sourcePath":"components/navigation/SectionTabs.jsx"},{"name":"DataTile","sourcePath":"components/widgets/DataTile.jsx"}],"sourceHashes":{"components/content/FeaturedCarousel.jsx":"e4ca8527e92b","components/content/NewsCard.jsx":"b0efeaeb6081","components/content/SourceStamp.jsx":"23bdbdb25b20","components/core/Badge.jsx":"93fd875aa7fa","components/core/Button.jsx":"cf2be1ade1c0","components/core/CategoryChip.jsx":"e55da882903a","components/feedback/BreakingTicker.jsx":"2e220a6fec15","components/navigation/LanguagePill.jsx":"f52855eebf43","components/navigation/SectionTabs.jsx":"6900be02aabd","components/widgets/DataTile.jsx":"88bdd13564be","ui_kits/admin/AdminShell.jsx":"08647ce78530","ui_kits/admin/AnalyticsScreen.jsx":"e35d4f0caa48","ui_kits/admin/ApiScreen.jsx":"9fb80eb25ab2","ui_kits/admin/BackendScreen.jsx":"080d7d9d61b9","ui_kits/admin/IngestionScreen.jsx":"32633871341a","ui_kits/admin/ModerationScreen.jsx":"ab1b648c69ac","ui_kits/admin/MonetizationScreen.jsx":"25636b088b96","ui_kits/admin/OverviewScreen.jsx":"e6c4535b25f5","ui_kits/admin/PublishScreen.jsx":"c54e0b58596f","ui_kits/admin/PushScreen.jsx":"177d07980ce8","ui_kits/admin/SeoScreen.jsx":"53127b5324d9","ui_kits/admin/SourcesScreen.jsx":"e2a1781f4fd5","ui_kits/admin/UsersScreen.jsx":"a0bfae97eb46","ui_kits/admin/data.js":"7f4fec5f53d0","ui_kits/admin_v2/BreakingDesk.jsx":"d6c9bf288425","ui_kits/admin_v2/CommandCenter.jsx":"43a3b6d45ca7","ui_kits/admin_v2/Growth.jsx":"8b88840e59d9","ui_kits/admin_v2/Infra.jsx":"adc6bed25718","ui_kits/admin_v2/Newsroom.jsx":"9d56725b4feb","ui_kits/admin_v2/PollsAdmin.jsx":"6cd76dc975e5","ui_kits/admin_v2/Shell.jsx":"6cac438e32cd","ui_kits/admin_v2/SourcesApis.jsx":"67e94fbfcf19","ui_kits/admin_v2/data.js":"3f0c0c5f0b03","ui_kits/app/AppShell.jsx":"721dc9d2aaa5","ui_kits/app/ArticleScreen.jsx":"c3bb65958f4d","ui_kits/app/EngageCards.jsx":"361c9ceebce6","ui_kits/app/ExploreScreen.jsx":"27053e8920ea","ui_kits/app/FeedScreen.jsx":"2bcdf9b75910","ui_kits/app/SwipeReader.jsx":"b539b73945a2","ui_kits/app/UtilityScreen.jsx":"e41e34d15010","ui_kits/app/data.js":"6e3f99db607d","ui_kits/web/Sections.jsx":"3840cd684669","ui_kits/web/WebShell.jsx":"aa5aadf45f24","ui_kits/web/data.js":"4bff78e4a50a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds2daynewsDesignSystem_0b44f3 = window.Ds2daynewsDesignSystem_0b44f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/SourceStamp.jsx
try { (() => {
/** Source attribution + timestamp line under a headline. Reinforces trust & aggregation transparency. */
function SourceStamp({
  source = 'tap2news',
  time = 'now',
  location,
  verified = false,
  aiRewritten = false,
  style = {}
}) {
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "\xB7");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, source), verified && /*#__PURE__*/React.createElement("span", {
    title: "Verified source",
    style: {
      display: 'inline-flex',
      width: 13,
      height: 13,
      borderRadius: '50%',
      background: 'var(--info)',
      color: '#fff',
      fontSize: 9,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700
    }
  }, "\u2713"), location && /*#__PURE__*/React.createElement(React.Fragment, null, dot, /*#__PURE__*/React.createElement("span", null, location)), dot, /*#__PURE__*/React.createElement("span", null, time), aiRewritten && /*#__PURE__*/React.createElement(React.Fragment, null, dot, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--cat-tech)'
    }
  }, "AI rewrite")));
}
Object.assign(__ds_scope, { SourceStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SourceStamp.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status badge — Breaking, Live, Exclusive, or a numeric count. */
function Badge({
  tone = 'breaking',
  children,
  live = false,
  style = {},
  ...rest
}) {
  const TONES = {
    breaking: {
      bg: 'var(--danger)',
      fg: '#fff'
    },
    live: {
      bg: 'var(--live)',
      fg: '#fff'
    },
    exclusive: {
      bg: 'var(--ink-900)',
      fg: '#fff'
    },
    gold: {
      bg: 'var(--gold-500)',
      fg: '#3a2708'
    },
    count: {
      bg: 'var(--red-50)',
      fg: 'var(--brand-strong)'
    },
    success: {
      bg: 'var(--success-soft)',
      fg: 'var(--success)'
    }
  };
  const t = TONES[tone] || TONES.breaking;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 10.5,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      borderRadius: 'var(--r-sm)',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), live && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: '#fff',
      opacity: 0.85,
      animation: 'dn-ping 1.4s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      borderRadius: '50%',
      background: '#fff'
    }
  })), children, /*#__PURE__*/React.createElement("style", null, '@keyframes dn-ping{0%{transform:scale(.7);opacity:.9}70%,100%{transform:scale(2.2);opacity:0}}'));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '6px 12px',
    fontSize: 13,
    height: 32
  },
  md: {
    padding: '9px 16px',
    fontSize: 14,
    height: 40
  },
  lg: {
    padding: '12px 22px',
    fontSize: 16,
    height: 48
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--ink-900)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-800)',
    border: '1px solid transparent'
  },
  soft: {
    background: 'var(--red-50)',
    color: 'var(--brand-strong)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--ink-900)',
    color: 'var(--white)',
    border: '1px solid transparent'
  }
};

/** Primary call-to-action button. Uses the vermillion brand color by default. */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  block = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      borderRadius: 'var(--r-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast)',
      ...s,
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CategoryChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Map of category → CSS var color. Mirrors tokens/colors.css --cat-* */
const CATEGORY_COLORS = {
  breaking: 'var(--cat-breaking)',
  national: 'var(--cat-national)',
  politics: 'var(--cat-politics)',
  crime: 'var(--cat-crime)',
  cinema: 'var(--cat-cinema)',
  sports: 'var(--cat-sports)',
  business: 'var(--cat-business)',
  jobs: 'var(--cat-jobs)',
  weather: 'var(--cat-weather)',
  astrology: 'var(--cat-astrology)',
  gold: 'var(--cat-gold)',
  education: 'var(--cat-education)',
  health: 'var(--cat-health)',
  tech: 'var(--cat-tech)',
  mynews: 'var(--cat-mynews)',
  finance: 'var(--cat-finance)',
  cooking: 'var(--cat-cooking)',
  shorts: 'var(--cat-shorts)',
  district: 'var(--cat-district)',
  state: 'var(--cat-state)',
  international: 'var(--cat-international)',
  technology: 'var(--cat-technology)',
  ott: 'var(--cat-ott)',
  celebrity: 'var(--cat-celebrity)',
  cricket: 'var(--cat-cricket)',
  religion: 'var(--cat-religion)',
  lifestyle: 'var(--cat-lifestyle)',
  automobile: 'var(--cat-automobile)',
  travel: 'var(--cat-travel)',
  agriculture: 'var(--cat-agriculture)',
  factcheck: 'var(--cat-factcheck)',
  opinion: 'var(--cat-opinion)'
};

/** Colored category chip used across feed & section tabs. */
function CategoryChip({
  category = 'politics',
  label,
  active = false,
  solid = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const color = CATEGORY_COLORS[category] || 'var(--ink-500)';
  const text = label || category.charAt(0).toUpperCase() + category.slice(1);
  const pad = size === 'sm' ? '3px 9px' : '5px 12px';
  const fs = size === 'sm' ? 11 : 12.5;
  const filled = solid || active;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: 'var(--r-chip)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      color: filled ? '#fff' : color,
      background: filled ? color : 'color-mix(in srgb, ' + color + ' 12%, transparent)',
      border: '1px solid ' + (filled ? 'transparent' : 'color-mix(in srgb, ' + color + ' 26%, transparent)'),
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: filled ? 'rgba(255,255,255,.85)' : color,
      flex: '0 0 auto'
    }
  }), text);
}
Object.assign(__ds_scope, { CATEGORY_COLORS, CategoryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CategoryChip.jsx", error: String((e && e.message) || e) }); }

// components/content/FeaturedCarousel.jsx
try { (() => {
/** Swipeable featured-stories gallery. Full-bleed hero per slide with region tag,
 *  counter, prev/next arrows, headline overlay and dot pagination. */
function FeaturedCarousel({
  items = [],
  height = 230,
  autoPlay = false,
  interval = 5000,
  onOpen = () => {},
  style = {}
}) {
  const [i, setI] = React.useState(0);
  const n = items.length || 1;
  const go = d => setI(x => (x + d + n) % n);
  React.useEffect(() => {
    if (!autoPlay || n < 2) return;
    const t = setInterval(() => setI(x => (x + 1) % n), interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, n]);
  const s = items[i] || {};
  const color = __ds_scope.CATEGORY_COLORS[s.category] || 'var(--brand)';
  const bg = s.image ? `url(${s.image})` : `linear-gradient(135deg, color-mix(in srgb, ${color} 42%, var(--ink-800)), var(--ink-900))`;
  const arrow = dir => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      go(dir === 'left' ? -1 : 1);
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 10,
      transform: 'translateY(-50%)',
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(12,20,36,.45)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(4px)',
      fontSize: 18,
      lineHeight: 1
    }
  }, dir === 'left' ? '‹' : '›');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(s, i),
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--r-card)',
      overflow: 'hidden',
      backgroundImage: bg,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-card)'
    }
  }, !s.image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,.16)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 64
    }
  }, "T2"), s.region && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(12,20,36,.5)',
      backdropFilter: 'blur(4px)',
      padding: '5px 10px',
      borderRadius: 'var(--r-pill)'
    }
  }, s.region), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(12,20,36,.5)',
      border: '2px solid ' + color,
      backdropFilter: 'blur(4px)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600
    }
  }, i + 1, "/", n), n > 1 && arrow('left'), n > 1 && arrow('right'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '48px 16px 16px',
      background: 'linear-gradient(to top, rgba(8,12,22,.92), rgba(8,12,22,.55) 55%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      lineHeight: 1.18,
      letterSpacing: '-0.01em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, s.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.82)'
    }
  }, s.time, s.read ? ' · ' + s.read : ''))), n > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      marginTop: 12
    }
  }, items.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    style: {
      width: k === i ? 22 : 7,
      height: 7,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: k === i ? 'var(--brand)' : 'var(--ink-200)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  }))));
}
Object.assign(__ds_scope, { FeaturedCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeaturedCarousel.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
/** The workhorse feed card. Layouts: 'row' (thumb right), 'hero' (image top), 'compact' (text only). */
function NewsCard({
  headline = 'Headline goes here',
  summary,
  category = 'politics',
  source = 'tap2news',
  time = 'now',
  location,
  image,
  layout = 'row',
  breaking = false,
  verified = false,
  aiRewritten = false,
  onClick = () => {},
  style = {}
}) {
  const isHero = layout === 'hero';
  const isCompact = layout === 'compact';
  const Thumb = image ? /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,var(--ink-100),var(--paper-sunk))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-300)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      flex: '0 0 auto'
    }
  }, "T2");
  const meta = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, breaking ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "breaking",
    live: true
  }, "Breaking") : /*#__PURE__*/React.createElement(__ds_scope.CategoryChip, {
    category: category,
    size: "sm"
  }));
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: isHero ? 'column' : 'row',
      gap: isHero ? 0 : 12,
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      cursor: 'pointer',
      border: '1px solid var(--border-hairline)',
      ...style
    }
  }, isHero && React.cloneElement(Thumb, {
    style: {
      ...Thumb.props.style,
      width: '100%',
      height: 190
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, meta, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: isHero ? 'var(--fs-headline)' : 'var(--fs-headline-sm)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, headline), summary && !isCompact && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, summary), /*#__PURE__*/React.createElement(__ds_scope.SourceStamp, {
    source: source,
    time: time,
    location: location,
    verified: verified,
    aiRewritten: aiRewritten,
    style: {
      marginTop: 2
    }
  })), !isHero && React.cloneElement(Thumb, {
    style: {
      ...Thumb.props.style,
      width: 104,
      alignSelf: 'stretch',
      minHeight: 96,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  }));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/BreakingTicker.jsx
try { (() => {
/** Breaking-news ticker — a full-width scrolling marquee anchored under the header. */
function BreakingTicker({
  label = 'Breaking',
  items = [],
  style = {}
}) {
  const list = items.length ? items : ['Live updates appear here'];
  const run = [...list, ...list];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--ink-900)',
      color: '#fff',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 14px',
      background: 'var(--brand)',
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 11.5,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      clipPath: 'polygon(0 0,100% 0,calc(100% - 8px) 100%,0 100%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: '#fff',
      animation: 'dn-tick-ping 1.4s ease-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1.5,
      borderRadius: '50%',
      background: '#fff'
    }
  })), label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      whiteSpace: 'nowrap',
      animation: 'dn-ticker var(--ticker-speed) linear infinite',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      paddingLeft: 24
    }
  }, run.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-300)'
    }
  }, "\u25CF"), t)))), /*#__PURE__*/React.createElement("style", null, '@keyframes dn-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes dn-tick-ping{0%{transform:scale(.7);opacity:.9}70%,100%{transform:scale(2.4);opacity:0}}'));
}
Object.assign(__ds_scope, { BreakingTicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BreakingTicker.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LanguagePill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Language selector pill — shows script glyph + native name. Core to tap2news geo-fencing. */
function LanguagePill({
  code = 'te',
  native,
  glyph,
  active = false,
  style = {},
  ...rest
}) {
  const LANGS = {
    te: {
      native: 'తెలుగు',
      glyph: 'తె'
    },
    ta: {
      native: 'தமிழ்',
      glyph: 'த'
    },
    kn: {
      native: 'ಕನ್ನಡ',
      glyph: 'ಕ'
    },
    ml: {
      native: 'മലയാളം',
      glyph: 'മ'
    },
    hi: {
      native: 'हिन्दी',
      glyph: 'हि'
    },
    en: {
      native: 'English',
      glyph: 'En'
    }
  };
  const l = LANGS[code] || {};
  const nm = native || l.native || code;
  const gl = glyph || l.glyph || code;
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 14px 7px 8px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      background: active ? 'var(--ink-900)' : 'var(--white)',
      color: active ? '#fff' : 'var(--ink-800)',
      border: '1px solid ' + (active ? 'transparent' : 'var(--border-strong)'),
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 26,
      borderRadius: '50%',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      background: active ? 'var(--brand)' : 'var(--red-50)',
      color: active ? '#fff' : 'var(--brand-strong)'
    }
  }, gl), nm);
}
Object.assign(__ds_scope, { LanguagePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguagePill.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionTabs.jsx
try { (() => {
/** Horizontally-scrollable category tab strip below the app header. */
function SectionTabs({
  items = [],
  value,
  onChange = () => {},
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '10px var(--gutter)',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, items.map(it => {
    const cat = typeof it === 'string' ? it : it.category;
    const label = typeof it === 'string' ? undefined : it.label;
    return /*#__PURE__*/React.createElement(__ds_scope.CategoryChip, {
      key: cat + (label || ''),
      category: cat,
      label: label,
      active: value === cat,
      onClick: () => onChange(cat),
      style: {
        flex: '0 0 auto'
      }
    });
  }));
}
Object.assign(__ds_scope, { SectionTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionTabs.jsx", error: String((e && e.message) || e) }); }

// components/widgets/DataTile.jsx
try { (() => {
/** Utility data tile — gold rate, market index, weather, cricket score. Mono numerals, delta arrow.
 *  Pass `icon` (any node) to show a tinted icon disc like the reference design. */
function DataTile({
  kind = 'gold',
  label,
  value,
  unit,
  sub,
  delta,
  icon,
  style = {}
}) {
  const KINDS = {
    gold: {
      color: 'var(--cat-gold)',
      icon: '⬤'
    },
    market: {
      color: 'var(--cat-business)',
      icon: '⬤'
    },
    weather: {
      color: 'var(--cat-weather)',
      icon: '⬤'
    },
    cricket: {
      color: 'var(--cat-sports)',
      icon: '⬤'
    }
  };
  const k = KINDS[kind] || KINDS.gold;
  const up = typeof delta === 'number' ? delta >= 0 : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '9px 12px',
      minWidth: 108,
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `color-mix(in srgb, ${k.color} 14%, transparent)`,
      color: k.color
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, !icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: k.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 9.5,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, unit)), (sub || delta != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5
    }
  }, delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: up ? 'var(--success)' : 'var(--danger)'
    }
  }, up ? '▲' : '▼', " ", Math.abs(delta)), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, sub))));
}
Object.assign(__ds_scope, { DataTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/DataTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminShell.jsx
try { (() => {
// Admin console shell: DS alias, Icon, sidebar, topbar, shared primitives.
const DS = window.Ds2daynewsDesignSystem_0b44f3;
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': 2
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
function Sidebar({
  data,
  view,
  onView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flex: '0 0 auto',
      background: 'var(--ink-950)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-400)'
    }
  }, "tap2"), "news"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      border: '1px solid var(--ink-700)',
      borderRadius: 4,
      padding: '2px 5px'
    }
  }, "Admin")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      overflowY: 'auto'
    }
  }, data.nav.map((it, i) => {
    if (!it.icon) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 10.5,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--ink-500)',
        padding: '14px 12px 6px'
      }
    }, it.label);
    const on = view === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onView(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '9px 12px',
        borderRadius: 'var(--r-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontWeight: on ? 600 : 500,
        fontSize: 14,
        color: on ? '#fff' : 'var(--ink-300)',
        background: on ? 'var(--brand)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 18,
      color: on ? '#fff' : 'var(--ink-400)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        background: on ? 'rgba(255,255,255,.22)' : 'var(--brand)',
        color: '#fff',
        borderRadius: 999,
        padding: '1px 7px'
      }
    }, it.badge));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid var(--ink-800)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      color: 'var(--ink-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 13
    }
  }, data.user.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13
    }
  }, data.user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--ink-400)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, data.user.role))));
}
function Topbar({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 12px',
      borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15,
    color: "var(--ink-400)"
  }), " Search stories\u2026"), actions));
}

// Reusable card + section label
function Panel({
  title,
  right,
  children,
  style = {},
  pad = 18
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '13px 18px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), right), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
}

// Sparkline (SVG polyline) for KPI cards.
function Spark({
  points,
  color = 'var(--brand)',
  w = 96,
  h = 30
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const rng = max - min || 1;
  const pts = points.map((p, i) => `${i / (points.length - 1) * w},${h - (p - min) / rng * (h - 4) - 2}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// Vibrant KPI tile with colored top accent + optional spark.
function Kpi({
  label,
  value,
  delta,
  color = 'var(--brand)',
  spark,
  icon
}) {
  const up = delta == null ? null : delta >= 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: `color-mix(in srgb, ${color} 14%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15,
    color: color
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value), spark && /*#__PURE__*/React.createElement(Spark, {
    points: spark,
    color: color
  })), delta != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: up ? 'var(--success)' : 'var(--danger)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: up ? 'trending-up' : 'trending-down',
    size: 13,
    color: up ? 'var(--success)' : 'var(--danger)'
  }), Math.abs(delta), "%", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-body)',
      fontWeight: 400
    }
  }, "vs prev.")));
}
Object.assign(window, {
  DS,
  Icon,
  Sidebar,
  Topbar,
  Panel,
  Spark,
  Kpi
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AnalyticsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Analytics dashboard.
function AnalyticsScreen({
  data
}) {
  const a = data.analytics;
  const max = Math.max(...a.traffic.map(t => t.app + t.web));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, a.kpis.map(k => /*#__PURE__*/React.createElement(Kpi, _extends({
    key: k.label
  }, k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Traffic \xB7 app vs web",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 2,
        background: 'var(--brand)'
      }
    }), "App"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 2,
        background: 'var(--cat-jobs)'
      }
    }), "Web"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height: 170
    }
  }, a.traffic.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.d,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${t.web / max * 140}px`,
      background: 'var(--cat-jobs)',
      borderRadius: '0 0 3px 3px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${t.app / max * 140}px`,
      background: 'var(--brand)',
      borderRadius: '3px 3px 0 0'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, t.d))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Devices"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 4
    }
  }, a.devices.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, d.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, d.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${d.pct}%`,
      height: '100%',
      background: d.color,
      borderRadius: 999
    }
  }))))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Top stories today",
    pad: 0
  }, a.topStories.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 18px',
      borderTop: i ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--ink-300)',
      width: 22
    }
  }, i + 1), /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: s.category,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, s.headline), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-body)',
      width: 60,
      textAlign: 'right'
    }
  }, s.views), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--success)',
      width: 44,
      textAlign: 'right'
    }
  }, s.ctr)))));
}
window.AnalyticsScreen = AnalyticsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AnalyticsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/ApiScreen.jsx
try { (() => {
// API & Models: AI providers, news feeds, keys.
function ApiScreen({
  data
}) {
  const a = data.api;
  const SB = {
    operational: {
      c: 'var(--success)',
      t: 'Live'
    },
    degraded: {
      c: 'var(--warning)',
      t: 'Slow'
    },
    down: {
      c: 'var(--danger)',
      t: 'Down'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "AI models",
    right: /*#__PURE__*/React.createElement(DS.Badge, {
      tone: "success"
    }, "3 / 4 healthy")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, a.models.map(m => {
    const s = SB[m.status];
    return /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        position: 'relative',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--r-card)',
        padding: 16,
        overflow: 'hidden',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 4,
        background: m.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 16,
        color: 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        flex: '0 0 auto',
        fontFamily: 'var(--font-body)',
        fontSize: 11.5,
        fontWeight: 600,
        color: s.c
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: s.c
      }
    }), s.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginBottom: 12,
        minHeight: 34
      }
    }, m.use), [['Calls', m.calls], ['Cost', m.cost], ['Latency', m.latency]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, v))));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Feed APIs \xB7 quota used"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, a.feeds.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, f.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: f.plan === 'Paid' ? 'var(--gold-700)' : 'var(--success)',
      background: f.plan === 'Paid' ? 'var(--gold-100)' : 'var(--success-soft)',
      padding: '1px 6px',
      borderRadius: 999,
      marginLeft: 4
    }
  }, f.plan)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, f.quota, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${f.quota}%`,
      height: '100%',
      background: f.quota > 70 ? 'var(--warning)' : f.color,
      borderRadius: 999
    }
  })))))), /*#__PURE__*/React.createElement(Panel, {
    title: "API keys",
    right: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "soft",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "New key")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, a.keys.map(k => /*#__PURE__*/React.createElement("div", {
    key: k.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 13px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key-round",
    size: 16,
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, k.masked, " \xB7 ", k.scope)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-faint)'
    }
  }, k.last)))))));
}
window.ApiScreen = ApiScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/ApiScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/BackendScreen.jsx
try { (() => {
// Backend health.
function BackendScreen({
  data
}) {
  const b = data.backend;
  const SB = {
    healthy: 'var(--success)',
    busy: 'var(--warning)',
    degraded: 'var(--warning)',
    down: 'var(--danger)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, b.infra.map(([l, v], i) => /*#__PURE__*/React.createElement(Kpi, {
    key: l,
    label: l,
    value: v,
    color: ['var(--cat-health)', 'var(--cat-jobs)', 'var(--brand)', 'var(--cat-sports)'][i],
    icon: ['activity', 'boxes', 'gauge', 'shield-check'][i]
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Services",
    right: /*#__PURE__*/React.createElement(DS.Badge, {
      tone: "success"
    }, "Ops nominal")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, b.services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: SB[s.status],
      flex: '0 0 auto',
      boxShadow: `0 0 0 4px color-mix(in srgb, ${SB[s.status]} 20%, transparent)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, s.metric)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${s.load}%`,
      height: '100%',
      background: s.load > 80 ? 'var(--warning)' : 'var(--cat-health)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--text-faint)',
      marginTop: 3,
      textAlign: 'right'
    }
  }, s.load, "% load")))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Stack"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['Next.js', 'React', 'Tailwind', 'NestJS', 'FastAPI', 'PostgreSQL', 'Supabase', 'Redis', 'BullMQ', 'Cloudflare R2', 'Meilisearch', 'Docker', 'Kubernetes', 'Claude', 'Gemini', 'GPT'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--ink-700)',
      background: 'var(--surface-sunk)',
      border: '1px solid var(--border-hairline)',
      padding: '5px 11px',
      borderRadius: 'var(--r-pill)'
    }
  }, t)))));
}
window.BackendScreen = BackendScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/BackendScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/IngestionScreen.jsx
try { (() => {
// News ingestion flow — the visual AI pipeline.
function IngestionScreen({
  data
}) {
  const steps = data.ingestion;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Live pipeline",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        fontWeight: 600,
        color: 'var(--success)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--success)'
      }
    }), "Running \xB7 82 stories/min")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.stage,
    style: {
      position: 'relative',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      padding: 16,
      background: 'var(--surface-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(180deg, color-mix(in srgb, ${s.color} 8%, transparent), transparent 60%)`,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: s.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-300)'
    }
  }, String(i + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, s.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: s.color,
      margin: '6px 0 2px'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, s.sub), s.rate && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--success)'
    }
  }, "\u25B2 ", s.rate)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Throughput funnel"
  }, steps.map((s, i) => {
    const val = parseInt(s.n.replace(/,/g, ''));
    const pct = val / parseInt(steps[0].n.replace(/,/g, '')) * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: s.stage,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 118,
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-body)'
      }
    }, s.stage), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 22,
        background: 'var(--ink-100)',
        borderRadius: 6,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: '100%',
        background: s.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 8,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        color: '#fff'
      }
    }, s.n)));
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Pipeline controls"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Auto-publish high confidence (>95%)', true], ['Hold breaking news for editor', true], ['Fake-news detection', true], ['Auto-translate to all languages', false], ['Generate voice summaries', true]].map(([label, on]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 12px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 22,
      borderRadius: 999,
      background: on ? 'var(--brand)' : 'var(--ink-200)',
      position: 'relative',
      transition: 'background .2s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-card)'
    }
  }))))))));
}
window.IngestionScreen = IngestionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/IngestionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/ModerationScreen.jsx
try { (() => {
// Moderation queue: review AI-rewritten stories before publish.
function ModerationScreen({
  data
}) {
  const [items, setItems] = React.useState(data.queue);
  const [sel, setSel] = React.useState(data.queue[0].id);
  const act = id => setItems(xs => xs.filter(x => x.id !== id));
  const current = items.find(x => x.id === sel) || items[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      flex: '0 0 auto',
      borderRight: '1px solid var(--border-hairline)',
      overflowY: 'auto',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "Queue"), /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "count"
  }, items.length), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "AI confidence sorted")), items.map(q => {
    const on = current && current.id === q.id;
    const low = q.confidence < 80;
    return /*#__PURE__*/React.createElement("button", {
      key: q.id,
      onClick: () => setSel(q.id),
      style: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '13px 18px',
        border: 'none',
        borderBottom: '1px solid var(--border-hairline)',
        borderLeft: on ? '3px solid var(--brand)' : '3px solid transparent',
        background: on ? 'var(--red-50)' : 'transparent',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(DS.CategoryChip, {
      category: q.category,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11.5,
        color: 'var(--text-faint)'
      }
    }, q.lang, " \xB7 ", q.time), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        color: low ? 'var(--danger)' : 'var(--success)'
      }
    }, q.confidence, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1.3,
        color: 'var(--text-strong)'
      }
    }, q.headline));
  }), !items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, "Queue cleared \uD83C\uDF89")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28
    }
  }, current && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, current.category === 'breaking' ? /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "breaking",
    live: true
  }, "Breaking") : /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: current.category,
    size: "sm"
  }), current.ai && /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "exclusive"
  }, "AI rewritten"), current.flags.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--info)',
      background: 'var(--info-soft)',
      padding: '3px 9px',
      borderRadius: 999
    }
  }, f))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, current.headline), /*#__PURE__*/React.createElement(DS.SourceStamp, {
    source: current.source,
    time: current.time,
    aiRewritten: current.ai,
    verified: current.confidence > 95
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      margin: '18px 0',
      padding: '14px 16px',
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--r-md)'
    }
  }, [['AI confidence', current.confidence + '%'], ['Language', current.lang], ['Source', current.source], ['Fact-check', current.confidence > 80 ? 'Passed' : 'Review']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginTop: 3
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, "\u0C08 \u0C15\u0C25\u0C28\u0C02 AI \u0C26\u0C4D\u0C35\u0C3E\u0C30\u0C3E \u0C24\u0C3F\u0C30\u0C3F\u0C17\u0C3F \u0C30\u0C3E\u0C2F\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F. \u0C35\u0C3E\u0C38\u0C4D\u0C24\u0C35\u0C3E\u0C32\u0C41 \u0C2E\u0C42\u0C32\u0C02 \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C4D\u0C21\u0C3E\u0C2F\u0C3F. \u0C2A\u0C4D\u0C30\u0C1A\u0C41\u0C30\u0C23\u0C15\u0C41 \u0C2E\u0C41\u0C02\u0C26\u0C41 \u0C0E\u0C21\u0C3F\u0C1F\u0C30\u0C4D \u0C38\u0C2E\u0C40\u0C15\u0C4D\u0C37 \u0C05\u0C35\u0C38\u0C30\u0C02. \u0C24\u0C40\u0C30 \u0C2A\u0C4D\u0C30\u0C3E\u0C02\u0C24 \u0C1C\u0C3F\u0C32\u0C4D\u0C32\u0C3E\u0C32\u0C15\u0C41 \u0C35\u0C3E\u0C24\u0C3E\u0C35\u0C30\u0C23 \u0C36\u0C3E\u0C16 \u0C2D\u0C3E\u0C30\u0C40 \u0C35\u0C30\u0C4D\u0C37 \u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15 \u0C1C\u0C3E\u0C30\u0C40 \u0C1A\u0C47\u0C38\u0C3F\u0C02\u0C26\u0C3F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      position: 'sticky',
      bottom: 0,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    }),
    onClick: () => act(current.id)
  }, "Approve & publish"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "pen-line",
      size: 16
    })
  }, "Edit"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    }),
    onClick: () => act(current.id)
  }, "Reject")))));
}
window.ModerationScreen = ModerationScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/ModerationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/MonetizationScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Monetization dashboard.
function MonetizationScreen({
  data
}) {
  const m = data.monet;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, m.kpis.map((k, i) => /*#__PURE__*/React.createElement(Kpi, _extends({
    key: k.label
  }, k, {
    icon: ['indian-rupee', 'bar-chart-2', 'crown', 'target'][i]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Revenue by stream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 20,
      borderRadius: 999,
      overflow: 'hidden',
      marginBottom: 18
    }
  }, m.streams.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      width: `${s.v}%`,
      background: s.color
    },
    title: s.k
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, m.streams.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 3,
      background: s.color,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, s.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, s.v, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      width: 72,
      textAlign: 'right'
    }
  }, s.amt))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Subscription plans"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, m.plans.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 15px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: 4,
      background: p.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, p.users, " users")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: p.color
    }
  }, p.price)))))));
}
window.MonetizationScreen = MonetizationScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/MonetizationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/OverviewScreen.jsx
try { (() => {
// Overview / analytics dashboard.
function StatCard({
  s
}) {
  const toneColor = {
    brand: 'var(--brand)',
    warning: 'var(--warning)',
    success: 'var(--success)',
    info: 'var(--info)'
  }[s.tone];
  const up = s.delta >= 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: `color-mix(in srgb, ${toneColor} 14%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 16,
    color: toneColor
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: up ? 'var(--success)' : 'var(--danger)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: up ? 'trending-up' : 'trending-down',
    size: 14,
    color: up ? 'var(--success)' : 'var(--danger)'
  }), Math.abs(s.delta), "%", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-body)',
      fontWeight: 400
    }
  }, "vs yesterday")));
}
function OverviewScreen({
  data
}) {
  const max = Math.max(...data.ingestBars);
  const maxPipe = data.pipeline[0].n;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, data.stats.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    s: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Stories ingested \xB7 last 12h",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "peak 138/hr")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      height: 150
    }
  }, data.ingestBars.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${v / max * 130}px`,
      background: i === data.ingestBars.length - 1 ? 'var(--brand)' : 'var(--red-200)',
      borderRadius: '4px 4px 0 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      color: 'var(--text-faint)'
    }
  }, i - 11, "h"))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Readers by language"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, data.langSplit.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.lang,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 74,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, l.lang), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${l.pct}%`,
      height: '100%',
      background: l.color,
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, l.pct, "%")))))), /*#__PURE__*/React.createElement(Panel, {
    title: "AI pipeline \xB7 today",
    right: /*#__PURE__*/React.createElement(DS.Badge, {
      tone: "success"
    }, "Healthy")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 0
    }
  }, data.pipeline.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.stage
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--text-strong)'
    }
  }, p.n.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, p.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      marginTop: 8,
      background: 'var(--brand)',
      opacity: p.n / maxPipe,
      borderRadius: 999
    }
  })), i < data.pipeline.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px',
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-300)"
  })))))));
}
Object.assign(window, {
  OverviewScreen,
  StatCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/PublishScreen.jsx
try { (() => {
// Publish composer: AI-generated fields + live preview.
function Field({
  label,
  value,
  mono,
  area,
  chip,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--cat-tech)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 12,
    color: "var(--cat-tech)"
  }), "AI"), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, sub)), chip ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, value.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      background: 'var(--ink-100)',
      color: 'var(--ink-700)',
      padding: '4px 10px',
      borderRadius: 999
    }
  }, t))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: mono ? 13 : 15,
      lineHeight: area ? 1.55 : 1.35,
      color: 'var(--text-body)',
      background: 'var(--white)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--r-md)',
      padding: area ? '12px 14px' : '10px 14px'
    }
  }, value));
}
function PublishScreen({
  data
}) {
  const d = data.draft;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "breaking",
    live: true
  }, "Breaking"), /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: d.category,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, d.lang, " \xB7 source ", d.source), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--success)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 15,
    color: "var(--success)"
  }), "Fact-check passed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Headline",
    value: d.headline
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Short headline",
    value: d.shortHeadline,
    sub: d.shortHeadline.length + ' chars'
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Summary",
    value: d.summary,
    area: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      margin: '2px 0'
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "SEO title",
    value: d.seoTitle,
    sub: d.seoTitle.length + '/60'
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Slug",
    value: d.slug,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Meta description",
    value: d.metaDescription,
    area: true,
    sub: d.metaDescription.length + '/160'
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Tags",
    value: d.tags,
    chip: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Push notification",
    value: d.push,
    area: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      flex: '0 0 auto',
      borderLeft: '1px solid var(--border-hairline)',
      background: 'var(--surface-sunk)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 16,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "Feed preview")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(DS.NewsCard, {
    layout: "hero",
    breaking: true,
    headline: d.headline,
    summary: d.summary,
    source: d.source,
    location: "Vijayawada",
    time: "now",
    verified: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: 'var(--white)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)',
      padding: 14,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: 'var(--brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 13
    }
  }, "T2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "tap2news"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.4,
      marginTop: 2
    }
  }, d.push)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      gap: 8,
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    block: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    })
  }, "Publish now"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    })
  }, "Schedule"))));
}
window.PublishScreen = PublishScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/PublishScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/PushScreen.jsx
try { (() => {
// Push & alerts: composer + campaigns.
function PushScreen({
  data
}) {
  const p = data.push;
  const [msg, setMsg] = React.useState('Heavy rain alert for coastal AP this weekend — stay updated');
  const SBADGE = {
    live: {
      t: 'live',
      txt: 'Live'
    },
    scheduled: {
      t: 'gold',
      txt: 'Scheduled'
    },
    sent: {
      t: 'success',
      txt: 'Sent'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, p.kpis.map(([v, l], i) => /*#__PURE__*/React.createElement(Kpi, {
    key: l,
    label: l,
    value: v,
    color: ['var(--brand)', 'var(--cat-politics)', 'var(--cat-sports)', 'var(--cat-cinema)'][i],
    icon: ['bell', 'users', 'mouse-pointer-click', 'send'][i]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "New push"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    value: msg,
    onChange: e => setMsg(e.target.value),
    rows: 3,
    style: {
      width: '100%',
      marginTop: 6,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--r-md)',
      padding: '10px 12px',
      resize: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "Segment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 8
    }
  }, ['All', 'Telugu', 'Tamil', 'Hindi', 'Sports', 'Jobs'].map((s, i) => /*#__PURE__*/React.createElement(DS.CategoryChip, {
    key: s,
    category: ['breaking', 'politics', 'sports', 'jobs', 'cinema', 'gold'][i],
    label: s,
    active: i === 1,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--r-md)',
      padding: 14,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: 'var(--brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 12
    }
  }, "2N"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--text-strong)'
    }
  }, "tap2news"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.4,
      marginTop: 1
    }
  }, msg || 'Your message preview…'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    })
  }, "Send now"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    })
  }, "Schedule")))), /*#__PURE__*/React.createElement(Panel, {
    title: "Campaigns",
    pad: 0
  }, p.campaigns.map((c, i) => {
    const b = SBADGE[c.status];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 18px',
        borderTop: i ? '1px solid var(--border-hairline)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 14,
        color: 'var(--text-strong)'
      }
    }, c.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, c.seg)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        color: 'var(--text-body)',
        width: 56,
        textAlign: 'right'
      }
    }, c.sent), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--success)',
        width: 40,
        textAlign: 'right'
      }
    }, c.ctr), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-faint)',
        width: 56,
        textAlign: 'right'
      }
    }, c.when), /*#__PURE__*/React.createElement(DS.Badge, {
      tone: b.t,
      live: c.status === 'live'
    }, b.txt));
  }))));
}
window.PushScreen = PushScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/PushScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/SeoScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SEO dashboard.
function SeoScreen({
  data
}) {
  const s = data.seo;
  const TR = {
    up: {
      i: 'trending-up',
      c: 'var(--success)'
    },
    down: {
      i: 'trending-down',
      c: 'var(--danger)'
    },
    flat: {
      i: 'minus',
      c: 'var(--text-faint)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, s.kpis.map((k, i) => /*#__PURE__*/React.createElement(Kpi, _extends({
    key: k.label
  }, k, {
    icon: ['file-search', 'arrow-up-narrow-wide', 'mouse-pointer-click', 'gauge'][i]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Top keywords",
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      padding: '9px 18px',
      background: 'var(--surface-sunk)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Keyword"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      textAlign: 'center'
    }
  }, "Position"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 80,
      textAlign: 'right'
    }
  }, "Volume"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      textAlign: 'right'
    }
  }, "Trend")), s.keywords.map((k, i) => {
    const t = TR[k.trend];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 18px',
        borderTop: '1px solid var(--border-hairline)',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: 'var(--text-strong)'
      }
    }, k.kw), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 60,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 26,
        height: 26,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 13,
        color: '#fff',
        background: k.pos <= 3 ? 'var(--success)' : 'var(--cat-jobs)'
      }
    }, k.pos)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 80,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-body)'
      }
    }, k.vol), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 50,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.i,
      size: 16,
      color: t.c
    })));
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Technical SEO"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, s.health.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 13px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: k === 'Broken links' ? 'var(--warning-soft)' : 'var(--success-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k === 'Broken links' ? 'triangle-alert' : 'check',
    size: 16,
    color: k === 'Broken links' ? 'var(--warning)' : 'var(--success)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "sm",
    block: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 15
    }),
    style: {
      marginTop: 4
    }
  }, "Re-crawl sitemaps")))));
}
window.SeoScreen = SeoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/SeoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/SourcesScreen.jsx
try { (() => {
// Sources: RSS / API / ingest management table.
function SourcesScreen({
  data
}) {
  const [rows, setRows] = React.useState(data.sources);
  const toggle = name => setRows(xs => xs.map(r => r.name === name ? {
    ...r,
    status: r.status === 'active' ? 'paused' : 'active',
    today: r.status === 'active' ? 0 : r.today
  } : r));
  const th = {
    textAlign: 'left',
    fontFamily: 'var(--font-body)',
    fontSize: 11.5,
    fontWeight: 600,
    color: 'var(--text-faint)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '10px 14px'
  };
  const td = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-body)',
    padding: '13px 14px',
    borderTop: '1px solid var(--border-hairline)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "News sources",
    pad: 0,
    right: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      })
    }, "Add source")
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunk)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Source"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Type"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Language"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Pull"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "Today"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.name
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      background: 'var(--ink-100)',
      padding: '2px 8px',
      borderRadius: 5,
      color: 'var(--ink-700)'
    }
  }, r.type)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.lang), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, r.pull), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: r.today ? 'var(--text-strong)' : 'var(--text-faint)'
    }
  }, r.today), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 600,
      color: r.status === 'active' ? 'var(--success)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: r.status === 'active' ? 'var(--success)' : 'var(--ink-300)'
    }
  }), r.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(r.name),
    style: {
      background: 'none',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--r-pill)',
      padding: '5px 12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, r.status === 'active' ? 'Pause' : 'Resume'))))))));
}
window.SourcesScreen = SourcesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/SourcesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/UsersScreen.jsx
try { (() => {
// Users & Roles.
function UsersScreen({
  data
}) {
  const u = data.users;
  const th = {
    textAlign: 'left',
    fontFamily: 'var(--font-body)',
    fontSize: 11.5,
    fontWeight: 600,
    color: 'var(--text-faint)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '10px 16px'
  };
  const td = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-body)',
    padding: '12px 16px',
    borderTop: '1px solid var(--border-hairline)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, u.kpis.map(([v, l], i) => /*#__PURE__*/React.createElement(Kpi, {
    key: l,
    label: l,
    value: v,
    color: ['var(--brand)', 'var(--cat-politics)', 'var(--cat-jobs)', 'var(--cat-cinema)'][i],
    icon: ['users', 'shield', 'radio', 'mail'][i]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Team",
    pad: 0,
    right: /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "user-plus",
        size: 14
      })
    }, "Invite")
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunk)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Member"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Role"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Desk"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, u.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.email
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: r.color,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 12.5
    }
  }, r.init), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-faint)'
    }
  }, r.email)))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-700)',
      background: 'var(--ink-100)',
      padding: '3px 10px',
      borderRadius: 999
    }
  }, r.role)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--text-muted)'
    }
  }, r.desk), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 600,
      color: r.status === 'active' ? 'var(--success)' : 'var(--warning)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: r.status === 'active' ? 'var(--success)' : 'var(--warning)'
    }
  }), r.status))))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Roles"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, u.roles.map(([r, d]) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 13px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 16,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-strong)',
      width: 108
    }
  }, r), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, d)))))));
}
window.UsersScreen = UsersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/UsersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/data.js
try { (() => {
// Sample data for the tap2news Admin Console.
window.ADMIN_DATA = {
  user: {
    name: 'Priya Rao',
    role: 'Editor · Telugu desk',
    initials: 'PR'
  },
  nav: [{
    id: 'overview',
    icon: 'layout-dashboard',
    label: 'Overview'
  }, {
    id: 'moderation',
    icon: 'shield-check',
    label: 'Moderation',
    badge: 8
  }, {
    id: 'publish',
    icon: 'pen-line',
    label: 'Publish'
  }, {
    id: 'sources',
    icon: 'rss',
    label: 'Sources'
  }, {
    id: 'lbl-pipeline',
    label: 'Pipeline'
  }, {
    id: 'ingestion',
    icon: 'workflow',
    label: 'Ingestion flow'
  }, {
    id: 'api',
    icon: 'plug',
    label: 'API & Models'
  }, {
    id: 'backend',
    icon: 'server',
    label: 'Backend health'
  }, {
    id: 'lbl-grow',
    label: 'Grow'
  }, {
    id: 'analytics',
    icon: 'bar-chart-3',
    label: 'Analytics'
  }, {
    id: 'push',
    icon: 'bell',
    label: 'Push & Alerts',
    badge: 3
  }, {
    id: 'seo',
    icon: 'search',
    label: 'SEO'
  }, {
    id: 'ads',
    icon: 'megaphone',
    label: 'Monetization'
  }, {
    id: 'users',
    icon: 'users',
    label: 'Users & Roles'
  }],
  stats: [{
    label: 'Published today',
    value: '1,284',
    delta: 12.4,
    icon: 'file-check',
    tone: 'brand'
  }, {
    label: 'Awaiting review',
    value: '86',
    delta: -4.1,
    icon: 'clock',
    tone: 'warning'
  }, {
    label: 'Live readers',
    value: '48.2K',
    delta: 8.7,
    icon: 'activity',
    tone: 'success'
  }, {
    label: 'Sources active',
    value: '132',
    delta: 2.0,
    icon: 'rss',
    tone: 'info'
  }],
  ingestBars: [
  // stories ingested per hour (last 12h)
  42, 58, 61, 47, 73, 90, 120, 138, 96, 84, 112, 130],
  langSplit: [{
    lang: 'Telugu',
    pct: 38,
    color: 'var(--cat-politics)'
  }, {
    lang: 'Hindi',
    pct: 27,
    color: 'var(--brand)'
  }, {
    lang: 'Tamil',
    pct: 16,
    color: 'var(--cat-sports)'
  }, {
    lang: 'Kannada',
    pct: 11,
    color: 'var(--cat-cinema)'
  }, {
    lang: 'Malayalam',
    pct: 8,
    color: 'var(--cat-jobs)'
  }],
  pipeline: [{
    stage: 'Collected',
    n: 4820
  }, {
    stage: 'Deduped',
    n: 3110
  }, {
    stage: 'Fact-checked',
    n: 2740
  }, {
    stage: 'AI rewritten',
    n: 2610
  }, {
    stage: 'Published',
    n: 1284
  }],
  queue: [{
    id: 1,
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    category: 'breaking',
    lang: 'Telugu',
    source: 'TV9',
    time: '2 min',
    confidence: 96,
    flags: ['Geo: AP'],
    ai: true
  }, {
    id: 2,
    headline: 'Cabinet clears new IT policy; targets 200,000 jobs over five years',
    category: 'politics',
    lang: 'English',
    source: 'PTI',
    time: '6 min',
    confidence: 91,
    flags: ['National'],
    ai: true
  }, {
    id: 3,
    headline: 'டாலிவுட் நடிகரின் அடுத்த படம் பொங்கலுக்கு வெளியாகிறது',
    category: 'cinema',
    lang: 'Tamil',
    source: 'Dinamalar',
    time: '9 min',
    confidence: 88,
    flags: [],
    ai: true
  }, {
    id: 4,
    headline: 'APPSC Group-II notification: 1,200 vacancies, apply by month end',
    category: 'jobs',
    lang: 'English',
    source: 'tap2news desk',
    time: '14 min',
    confidence: 99,
    flags: ['Verified'],
    ai: false
  }, {
    id: 5,
    headline: 'ನಗರದಲ್ಲಿ ಸೈಬರ್ ವಂಚನೆ ಜಾಲ ಬಂಧನ; ₹2 ಕೋಟಿ ವಶ',
    category: 'crime',
    lang: 'Kannada',
    source: 'Prajavani',
    time: '20 min',
    confidence: 74,
    flags: ['Low confidence'],
    ai: true
  }],
  sources: [{
    name: 'PTI — National wire',
    type: 'RSS',
    lang: 'Multi',
    status: 'active',
    pull: '30s',
    today: 412
  }, {
    name: 'Eenadu — AP/TS',
    type: 'RSS',
    lang: 'Telugu',
    status: 'active',
    pull: '2m',
    today: 288
  }, {
    name: 'Google News — TN',
    type: 'API',
    lang: 'Tamil',
    status: 'active',
    pull: '1m',
    today: 196
  }, {
    name: 'GDELT global',
    type: 'API',
    lang: 'Multi',
    status: 'active',
    pull: '5m',
    today: 174
  }, {
    name: 'IMD weather feed',
    type: 'API',
    lang: '—',
    status: 'active',
    pull: '10m',
    today: 48
  }, {
    name: 'MediaStack — Kerala',
    type: 'API',
    lang: 'Malayalam',
    status: 'paused',
    pull: '2m',
    today: 0
  }, {
    name: 'District correspondents',
    type: 'Ingest',
    lang: 'Multi',
    status: 'active',
    pull: 'live',
    today: 63
  }],
  draft: {
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    shortHeadline: 'తీర జిల్లాలకు వర్ష హెచ్చరిక',
    summary: 'IMD ప్రకారం రాబోయే 48 గంటల్లో బలమైన గాలులు, స్థానిక వరదల ముప్పు. మత్స్యకారులు సముద్రంలోకి వెళ్లవద్దని సూచన.',
    seoTitle: 'AP coastal districts rain alert — IMD warning, weekend forecast | tap2news',
    slug: 'ap-coastal-rain-alert-weekend-imd',
    metaDescription: 'IMD issues heavy rain alert for Andhra Pradesh coastal districts. Squally winds, local flooding likely. Fishermen advised not to venture into the sea.',
    tags: ['Weather', 'IMD', 'Andhra Pradesh', 'Rain alert', 'Coastal'],
    push: 'Heavy rain alert for coastal AP this weekend — stay updated on tap2news',
    source: 'TV9',
    category: 'breaking',
    lang: 'Telugu'
  },
  analytics: {
    kpis: [{
      label: 'Page views',
      value: '18.4M',
      delta: 14.2,
      spark: [30, 42, 38, 55, 60, 72, 68, 84],
      color: 'var(--brand)'
    }, {
      label: 'Unique readers',
      value: '6.1M',
      delta: 9.3,
      spark: [20, 28, 26, 35, 40, 44, 52, 58],
      color: 'var(--cat-politics)'
    }, {
      label: 'Avg. session',
      value: '7m 12s',
      delta: 3.4,
      spark: [40, 44, 42, 50, 48, 55, 60, 62],
      color: 'var(--cat-sports)'
    }, {
      label: 'Push CTR',
      value: '11.8%',
      delta: -1.6,
      spark: [60, 55, 58, 52, 50, 48, 46, 44],
      color: 'var(--cat-cinema)'
    }],
    traffic: [
    // 7-day, two series
    {
      d: 'Mon',
      app: 2.1,
      web: 1.2
    }, {
      d: 'Tue',
      app: 2.4,
      web: 1.4
    }, {
      d: 'Wed',
      app: 2.2,
      web: 1.3
    }, {
      d: 'Thu',
      app: 2.8,
      web: 1.6
    }, {
      d: 'Fri',
      app: 3.1,
      web: 1.8
    }, {
      d: 'Sat',
      app: 2.6,
      web: 1.5
    }, {
      d: 'Sun',
      app: 2.3,
      web: 1.3
    }],
    topStories: [{
      headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక',
      category: 'breaking',
      views: '412K',
      ctr: '18%'
    }, {
      headline: 'APPSC Group-II 1,200 vacancies notification',
      category: 'jobs',
      views: '308K',
      ctr: '22%'
    }, {
      headline: "Tollywood star's Sankranti release locked",
      category: 'cinema',
      views: '265K',
      ctr: '15%'
    }, {
      headline: 'India name squad for home Test series',
      category: 'sports',
      views: '198K',
      ctr: '12%'
    }, {
      headline: 'Gold rate today: 22K climbs ₹180',
      category: 'gold',
      views: '154K',
      ctr: '9%'
    }],
    devices: [{
      k: 'Android',
      pct: 71,
      color: 'var(--cat-sports)'
    }, {
      k: 'iOS',
      pct: 18,
      color: 'var(--ink-700)'
    }, {
      k: 'Web',
      pct: 11,
      color: 'var(--cat-jobs)'
    }]
  },
  push: {
    kpis: [['3', 'Scheduled'], ['48.2K', 'Reach / min'], ['11.8%', 'Avg CTR'], ['2.1M', 'Sent today']],
    campaigns: [{
      title: 'Heavy rain alert — coastal AP',
      seg: 'Telugu · AP districts',
      status: 'live',
      sent: '820K',
      ctr: '19%',
      when: 'Now'
    }, {
      title: 'APPSC Group-II notification',
      seg: 'Telugu · Jobs followers',
      status: 'scheduled',
      sent: '—',
      ctr: '—',
      when: '6:00 PM'
    }, {
      title: 'Evening roundup digest',
      seg: 'All languages',
      status: 'scheduled',
      sent: '—',
      ctr: '—',
      when: '8:30 PM'
    }, {
      title: 'Morning briefing digest',
      seg: 'All languages',
      status: 'sent',
      sent: '1.9M',
      ctr: '13%',
      when: '7:00 AM'
    }, {
      title: 'IND vs AUS live score',
      seg: 'Sports followers',
      status: 'sent',
      sent: '640K',
      ctr: '24%',
      when: '2:10 PM'
    }]
  },
  api: {
    models: [{
      name: 'Claude',
      use: 'Rewrite · headlines · FAQ',
      status: 'operational',
      calls: '284K',
      cost: '$412',
      latency: '1.2s',
      color: 'var(--brand)'
    }, {
      name: 'Gemini',
      use: 'Translation · summaries',
      status: 'operational',
      calls: '196K',
      cost: '$188',
      latency: '0.9s',
      color: 'var(--cat-politics)'
    }, {
      name: 'GPT',
      use: 'Fallback rewrite',
      status: 'degraded',
      calls: '41K',
      cost: '$96',
      latency: '2.4s',
      color: 'var(--cat-sports)'
    }, {
      name: 'DeepSeek',
      use: 'Classification · geo/category',
      status: 'operational',
      calls: '512K',
      cost: '$54',
      latency: '0.4s',
      color: 'var(--cat-cinema)'
    }],
    feeds: [{
      name: 'NewsAPI',
      quota: 74,
      plan: 'Paid',
      color: 'var(--cat-business)'
    }, {
      name: 'GDELT',
      quota: 22,
      plan: 'Free',
      color: 'var(--cat-jobs)'
    }, {
      name: 'OpenWeather',
      quota: 48,
      plan: 'Free',
      color: 'var(--cat-weather)'
    }, {
      name: 'Cricbuzz RSS',
      quota: 12,
      plan: 'Free',
      color: 'var(--cat-sports)'
    }, {
      name: 'MCX Gold',
      quota: 61,
      plan: 'Paid',
      color: 'var(--cat-gold)'
    }, {
      name: 'Astrology API',
      quota: 35,
      plan: 'Paid',
      color: 'var(--cat-astrology)'
    }],
    keys: [{
      label: 'Production · Claude',
      masked: 'sk-ant-••••••••4f2a',
      scope: 'rewrite, headlines',
      last: '12s ago'
    }, {
      label: 'Production · Gemini',
      masked: 'AIza••••••••9c1d',
      scope: 'translate',
      last: '1m ago'
    }, {
      label: 'Ingest webhook',
      masked: 'whk_••••••••7b30',
      scope: 'citizen uploads',
      last: '3m ago'
    }]
  },
  ingestion: [{
    stage: 'Collect',
    icon: 'download-cloud',
    n: '4,820',
    sub: '1,200+ sources',
    color: 'var(--cat-jobs)',
    rate: '82/min'
  }, {
    stage: 'Deduplicate',
    icon: 'copy',
    n: '3,110',
    sub: '−35% duplicates',
    color: 'var(--cat-business)',
    rate: ''
  }, {
    stage: 'Fact verify',
    icon: 'badge-check',
    n: '2,910',
    sub: '6% held for review',
    color: 'var(--cat-health)',
    rate: ''
  }, {
    stage: 'Fake detection',
    icon: 'shield-alert',
    n: '2,880',
    sub: '30 flagged',
    color: 'var(--cat-crime)',
    rate: ''
  }, {
    stage: 'Language + Geo',
    icon: 'languages',
    n: '2,880',
    sub: '12 languages routed',
    color: 'var(--cat-politics)',
    rate: ''
  }, {
    stage: 'Category + Priority',
    icon: 'tags',
    n: '2,880',
    sub: '34 categories',
    color: 'var(--cat-cinema)',
    rate: ''
  }, {
    stage: 'AI rewrite + SEO',
    icon: 'sparkles',
    n: '2,610',
    sub: 'Claude · Gemini',
    color: 'var(--brand)',
    rate: ''
  }, {
    stage: 'Publish + Push',
    icon: 'send',
    n: '1,284',
    sub: 'to feed + social',
    color: 'var(--cat-sports)',
    rate: ''
  }],
  backend: {
    services: [{
      name: 'API Gateway (NestJS)',
      status: 'healthy',
      metric: '38ms p95',
      load: 42
    }, {
      name: 'AI Worker (FastAPI)',
      status: 'healthy',
      metric: '1.2s p95',
      load: 68
    }, {
      name: 'PostgreSQL / Supabase',
      status: 'healthy',
      metric: '112 conns',
      load: 55
    }, {
      name: 'Redis cache',
      status: 'healthy',
      metric: '99.2% hit',
      load: 33
    }, {
      name: 'BullMQ queue',
      status: 'busy',
      metric: '2,140 jobs',
      load: 88
    }, {
      name: 'Meilisearch',
      status: 'healthy',
      metric: '9ms query',
      load: 24
    }, {
      name: 'Cloudflare R2',
      status: 'healthy',
      metric: '4.2TB',
      load: 30
    }, {
      name: 'Supabase Realtime',
      status: 'degraded',
      metric: '1.1s lag',
      load: 76
    }],
    infra: [['Uptime 30d', '99.98%'], ['K8s pods', '46 / 60'], ['Requests/min', '124K'], ['Error rate', '0.03%']]
  },
  seo: {
    kpis: [{
      label: 'Indexed pages',
      value: '1.42M',
      delta: 6.1,
      color: 'var(--cat-jobs)'
    }, {
      label: 'Avg. position',
      value: '4.8',
      delta: 2.3,
      color: 'var(--cat-sports)'
    }, {
      label: 'Organic clicks',
      value: '9.2M',
      delta: 11.4,
      color: 'var(--brand)'
    }, {
      label: 'Core Web Vitals',
      value: '96',
      delta: 1.0,
      color: 'var(--cat-health)'
    }],
    keywords: [{
      kw: 'gold rate today hyderabad',
      pos: 1,
      vol: '210K',
      trend: 'up'
    }, {
      kw: 'appsc group 2 notification',
      pos: 2,
      vol: '148K',
      trend: 'up'
    }, {
      kw: 'ap weather alert',
      pos: 3,
      vol: '96K',
      trend: 'flat'
    }, {
      kw: 'sensex today',
      pos: 5,
      vol: '320K',
      trend: 'down'
    }, {
      kw: 'telugu cinema news',
      pos: 4,
      vol: '132K',
      trend: 'up'
    }],
    health: [['Sitemaps', 'OK · 42 files'], ['Meta coverage', '98.4%'], ['Broken links', '12'], ['Structured data', 'Valid']]
  },
  monet: {
    kpis: [{
      label: 'Revenue MTD',
      value: '₹2.84Cr',
      delta: 18.2,
      color: 'var(--cat-sports)'
    }, {
      label: 'AdSense RPM',
      value: '₹214',
      delta: 4.6,
      color: 'var(--brand)'
    }, {
      label: 'Subscribers',
      value: '184K',
      delta: 12.1,
      color: 'var(--cat-gold)'
    }, {
      label: 'Fill rate',
      value: '92%',
      delta: 1.8,
      color: 'var(--cat-jobs)'
    }],
    streams: [{
      k: 'Google AdSense',
      v: 41,
      amt: '₹1.16Cr',
      color: 'var(--brand)'
    }, {
      k: 'Ad Manager (direct)',
      v: 24,
      amt: '₹68L',
      color: 'var(--cat-politics)'
    }, {
      k: 'Premium subscriptions',
      v: 16,
      amt: '₹45L',
      color: 'var(--cat-gold)'
    }, {
      k: 'Sponsored news',
      v: 11,
      amt: '₹31L',
      color: 'var(--cat-cinema)'
    }, {
      k: 'Local & business ads',
      v: 8,
      amt: '₹24L',
      color: 'var(--cat-jobs)'
    }],
    plans: [{
      name: 'Free',
      price: '₹0',
      users: '5.9M',
      color: 'var(--ink-500)'
    }, {
      name: 'Plus (ad-free)',
      price: '₹49/mo',
      users: '142K',
      color: 'var(--cat-jobs)'
    }, {
      name: 'Premium (e-paper)',
      price: '₹99/mo',
      users: '42K',
      color: 'var(--gold-500)'
    }]
  },
  users: {
    kpis: [['312', 'Team members'], ['6', 'Roles'], ['48', 'Correspondents'], ['9', 'Pending invites']],
    rows: [{
      name: 'Priya Rao',
      email: 'priya@tap2news.in',
      role: 'Editor',
      desk: 'Telugu',
      status: 'active',
      init: 'PR',
      color: 'var(--brand)'
    }, {
      name: 'Arun Kumar',
      email: 'arun@tap2news.in',
      role: 'Admin',
      desk: 'All',
      status: 'active',
      init: 'AK',
      color: 'var(--cat-politics)'
    }, {
      name: 'Meera Nair',
      email: 'meera@tap2news.in',
      role: 'Moderator',
      desk: 'Malayalam',
      status: 'active',
      init: 'MN',
      color: 'var(--cat-sports)'
    }, {
      name: 'Ravi Teja',
      email: 'ravi@tap2news.in',
      role: 'Correspondent',
      desk: 'Guntur dist.',
      status: 'active',
      init: 'RT',
      color: 'var(--cat-jobs)'
    }, {
      name: 'Suresh B',
      email: 'suresh@tap2news.in',
      role: 'SEO',
      desk: 'Growth',
      status: 'invited',
      init: 'SB',
      color: 'var(--cat-cinema)'
    }, {
      name: 'Kavya S',
      email: 'kavya@tap2news.in',
      role: 'Ad ops',
      desk: 'Monetization',
      status: 'active',
      init: 'KS',
      color: 'var(--cat-gold)'
    }],
    roles: [['Admin', 'Full access'], ['Editor', 'Publish + moderate'], ['Moderator', 'Review queue'], ['Correspondent', 'Submit stories'], ['SEO', 'SEO dashboard'], ['Ad ops', 'Monetization']]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/data.js", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/BreakingDesk.jsx
try { (() => {
// Breaking desk: manual breaking-news entry → Gemini rewrite → publish. Mirrors the RSS pipeline.
function BreakingDesk({
  d
}) {
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
        fake: 0.04,
        conf: 97,
        national: false
      });
      setStage('ready');
    }, 1800);
  };
  const inp = {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    color: 'var(--text-body)',
    background: 'var(--white)',
    border: '1px solid var(--border-strong)',
    borderRadius: 8,
    padding: '9px 11px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'vertical'
  };
  const lbl = {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: 4
  };
  const out = (label, value, mono) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 10,
    color: "var(--cat-tech)",
    style: {
      verticalAlign: '-1px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: mono ? 11.5 : 13,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      background: 'var(--surface-sunk)',
      borderRadius: 8,
      padding: '8px 10px'
    }
  }, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(340px,1fr) minmax(340px,1fr)',
      gap: 14,
      padding: 16,
      height: '100%',
      boxSizing: 'border-box',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Breaking desk \u2014 manual entry",
    icon: "zap",
    right: /*#__PURE__*/React.createElement(DS.Badge, {
      tone: "breaking",
      live: true
    }, "Live desk")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Raw report \u2014 text, correspondent WhatsApp, or URL"), /*#__PURE__*/React.createElement("textarea", {
    rows: 7,
    value: raw,
    onChange: e => setRaw(e.target.value),
    placeholder: "Paste the raw tip / wire copy / URL here\u2026",
    style: inp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Language"), /*#__PURE__*/React.createElement("select", {
    value: lang,
    onChange: e => setLang(e.target.value),
    style: {
      ...inp,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "te"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"), /*#__PURE__*/React.createElement("option", {
    value: "ta"
  }, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"), /*#__PURE__*/React.createElement("option", {
    value: "hi"
  }, "\u0939\u093F\u0928\u094D\u0926\u0940"), /*#__PURE__*/React.createElement("option", {
    value: "kn"
  }, "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"), /*#__PURE__*/React.createElement("option", {
    value: "en"
  }, "English"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Region"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inp,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Vijayawada \xB7 AP"), /*#__PURE__*/React.createElement("option", null, "Hyderabad \xB7 TS"), /*#__PURE__*/React.createElement("option", null, "State-wide"), /*#__PURE__*/React.createElement("option", null, "National")))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    block: true,
    disabled: stage === 'ai' || !raw.trim(),
    onClick: rewrite,
    icon: stage === 'ai' ? /*#__PURE__*/React.createElement(Icon, {
      name: "loader-2",
      size: 15,
      color: "#fff",
      style: {
        animation: 'spin 1s linear infinite'
      }
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 15,
      color: "#fff"
    })
  }, stage === 'ai' ? 'Gemini rewriting…' : 'Rewrite with Gemini'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-faint)',
      lineHeight: 1.5
    }
  }, "Same pipeline as RSS ingest: dedup \u2192 fact-check \u2192 fake-score gate \u2192 rewrite \u2192 SEO \u2192 push copy. fake_score > 0.5 routes to review, never auto-publishes."), /*#__PURE__*/React.createElement("style", null, '@keyframes spin{to{transform:rotate(360deg)}}'))), /*#__PURE__*/React.createElement(Panel, {
    title: "Gemini draft",
    icon: "sparkles",
    right: ai && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        fontWeight: 600,
        color: 'var(--success)'
      }
    }, "conf ", ai.conf, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        fontWeight: 600,
        color: ai.fake < 0.5 ? 'var(--success)' : 'var(--danger)'
      }
    }, "fake ", ai.fake))
  }, !ai && stage !== 'ai' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 20px',
      textAlign: 'center',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5
    }
  }, "Paste a raw report and hit ", /*#__PURE__*/React.createElement("b", null, "Rewrite with Gemini"), " \u2014 the structured draft (headline, summary, SEO, push) appears here."), stage === 'ai' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 20px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5
    }
  }, "Rewriting \xB7 classifying \xB7 fact-checking\u2026"), ai && stage !== 'ai' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, out('Headline', ai.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 9
    }
  }, out('Short headline', ai.short), out('Slug', ai.slug, true)), out('Summary', ai.summary), out('SEO title', ai.seoTitle), out('Push notification', ai.push), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, ai.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      background: 'var(--ink-100)',
      color: 'var(--ink-700)',
      padding: '3px 9px',
      borderRadius: 999
    }
  }, t))), stage === 'published' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 12px',
      background: 'var(--success-soft)',
      borderRadius: 8,
      color: 'var(--success)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 16,
    color: "var(--success)"
  }), "Published as BREAKING \xB7 push fan-out queued \xB7 ticker updated") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 14,
      color: "#fff"
    }),
    onClick: () => setStage('published')
  }, "Publish breaking"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "pen-line",
      size: 14
    })
  }, "Edit draft"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "sm"
  }, "Discard")))));
}
window.BreakingDesk = BreakingDesk;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/BreakingDesk.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/CommandCenter.jsx
try { (() => {
// Command Center — the single home. Every panel drills into its hub.
function LiveKpi({
  label,
  base,
  kind,
  color = 'var(--brand)',
  vol,
  sub
}) {
  const [v, series] = useLive(base, vol || 0.02);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)',
      boxShadow: 'var(--shadow-card)',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, fmt(v, kind)), /*#__PURE__*/React.createElement(Spark, {
    series: series,
    color: color,
    w: 78,
    h: 24
  })), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      color: 'var(--text-faint)'
    }
  }, sub));
}
function CommandCenter({
  d,
  drill
}) {
  const th = {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-faint)',
    textAlign: 'left',
    padding: '2px 6px'
  };
  const td = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'var(--ink-700)',
    padding: '4px 6px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LiveKpi, {
    label: "Live readers",
    base: 48200,
    kind: "k",
    color: "var(--success)",
    sub: "app + web"
  }), /*#__PURE__*/React.createElement(LiveKpi, {
    label: "Stories/hr",
    base: 128,
    kind: "int",
    color: "var(--brand)",
    vol: 0.05,
    sub: "ingest \u2192 publish"
  }), /*#__PURE__*/React.createElement(LiveKpi, {
    label: "Feed p95",
    base: 96,
    kind: "ms",
    color: "var(--info)",
    vol: 0.06,
    sub: "get_feed RPC"
  }), /*#__PURE__*/React.createElement(LiveKpi, {
    label: "Cache hit",
    base: 94.2,
    kind: "pct",
    color: "var(--cat-business)",
    vol: 0.004,
    sub: "Redis + CDN"
  }), /*#__PURE__*/React.createElement(LiveKpi, {
    label: "AI cost/hr",
    base: 31400,
    kind: "inr",
    color: "var(--gold-600)",
    vol: 0.04,
    sub: "4-model blend"
  }), /*#__PURE__*/React.createElement(LiveKpi, {
    label: "Push CTR",
    base: 6.8,
    kind: "pct",
    color: "var(--cat-cinema)",
    vol: 0.03,
    sub: "last campaign"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Moderation queue",
    icon: "shield-check",
    onDrill: () => drill('newsroom'),
    right: /*#__PURE__*/React.createElement(DS.Badge, {
      tone: "count"
    }, d.queue.length)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, d.queue.slice(0, 4).map(q => /*#__PURE__*/React.createElement("div", {
    key: q.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: q.category,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-strong)'
    }
  }, q.headline), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      color: q.conf < 80 ? 'var(--danger)' : 'var(--success)'
    }
  }, q.conf, "%"))))), /*#__PURE__*/React.createElement(Panel, {
    title: "AI model routing",
    icon: "cpu",
    onDrill: () => drill('infra')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, d.models.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: m.ok
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 5,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: m.share + '%',
      height: '100%',
      background: 'var(--brand)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--text-muted)',
      width: 30,
      textAlign: 'right'
    }
  }, m.share, "%"))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Job queues \xB7 BullMQ",
    icon: "layers",
    onDrill: () => drill('infra')
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "queue"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "wait"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "act"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "fail"))), /*#__PURE__*/React.createElement("tbody", null, d.queues.slice(0, 4).map(q => /*#__PURE__*/React.createElement("tr", {
    key: q.name
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, q.name), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, q.waiting), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      color: 'var(--info)'
    }
  }, q.active), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      color: q.failed ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, q.failed))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1.25fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Redis cache",
    icon: "database-zap",
    onDrill: () => drill('infra'),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--success)',
        fontWeight: 600
      }
    }, "94.2% hit")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, d.redisKeys.slice(0, 4).map(k => /*#__PURE__*/React.createElement("div", {
    key: k.key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--ink-800)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, k.key), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-700)'
    }
  }, k.ttl), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      width: 52,
      textAlign: 'right'
    }
  }, k.hits))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Postgres \xB7 Supabase",
    icon: "database",
    onDrill: () => drill('infra')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 6
    }
  }, d.pg.slice(0, 6).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: p.ok
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, p.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, p.k)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Revenue today",
    icon: "indian-rupee",
    onDrill: () => drill('growth'),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, "\u20B910.03L")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 10,
      borderRadius: 999,
      overflow: 'hidden',
      marginBottom: 8
    }
  }, d.revenue.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: r.src,
    style: {
      width: r.v + '%',
      background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i]
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 12px'
    }
  }, d.revenue.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: r.src,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 2,
      background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i]
    }
  }), r.src, " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-800)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10
    }
  }, r.amt)))))));
}
Object.assign(window, {
  CommandCenter,
  LiveKpi
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/CommandCenter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/Growth.jsx
try { (() => {
// Growth hub: analytics + monetization (priority screens).
function Growth({
  d
}) {
  const [dau, dauS] = useLive(4200000, 0.01);
  const [rpm, rpmS] = useLive(38.4, 0.02);
  const [subs, subsS] = useLive(212000, 0.008);
  const [ctr, ctrS] = useLive(6.8, 0.03);
  const hours = ['6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'];
  const bars = [42, 61, 78, 84, 70, 66, 88, 100, 74];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      overflowY: 'auto',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10
    }
  }, [['DAU', fmt(dau / 1000, 'int') + 'K', dauS, 'var(--brand)'], ['Ad RPM', '₹' + rpm.toFixed(1), rpmS, 'var(--gold-600)'], ['Plus subscribers', fmt(subs, 'k'), subsS, 'var(--cat-jobs)'], ['Push CTR', ctr.toFixed(1) + '%', ctrS, 'var(--cat-cinema)']].map(([l, v, s, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)',
      boxShadow: 'var(--shadow-card)',
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement(Spark, {
    series: s,
    color: c,
    w: 84,
    h: 24
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Reads by hour \xB7 today",
    icon: "bar-chart-3",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--text-muted)'
      }
    }, "peak 8p")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 7,
      height: 110
    }
  }, bars.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: v * 0.9 + 'px',
      background: i === 7 ? 'var(--brand)' : 'var(--red-200)',
      borderRadius: '3px 3px 0 0',
      transition: 'height .4s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 8.5,
      color: 'var(--text-faint)'
    }
  }, hours[i]))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Readers by language",
    icon: "languages"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.langSplit.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-body)'
    }
  }, l.l), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: l.pct + '%',
      height: '100%',
      background: l.c,
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, l.pct, "%"))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Top stories \xB7 24h",
    icon: "flame"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, d.topStories.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-faint)',
      width: 12
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: DS.CATEGORY_COLORS[s.cat],
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, s.v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Revenue mix \xB7 today",
    icon: "indian-rupee",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, "\u20B910.03L")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 12,
      borderRadius: 999,
      overflow: 'hidden',
      marginBottom: 10
    }
  }, d.revenue.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: r.src,
    style: {
      width: r.v + '%',
      background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i]
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, d.revenue.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.src,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: ['var(--brand)', 'var(--cat-cinema)', 'var(--gold-500)', 'var(--cat-jobs)', 'var(--cat-business)'][i]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-body)'
    }
  }, r.src), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, r.v, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink-900)',
      width: 56,
      textAlign: 'right'
    }
  }, r.amt))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Plus plans",
    icon: "gem"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['Plus monthly', '₹49/mo', '148K subs', true], ['Plus yearly', '₹399/yr', '52K subs', true], ['E-paper', '₹99/mo', '12K subs', false]].map(([n, p, s, hot]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '9px 11px',
      background: 'var(--surface-sunk)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--text-strong)'
    }
  }, n), hot && /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "gold"
  }, "Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-muted)'
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'var(--ink-900)'
    }
  }, p)))))));
}
window.Growth = Growth;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/Growth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/Infra.jsx
try { (() => {
// Infra & AI hub: model routing, MCP servers, Redis, BullMQ, Postgres, CDN purge.
function Infra({
  d
}) {
  const [purged, setPurged] = React.useState({});
  const [reqs] = useLive(212000, 0.03);
  const th = {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-faint)',
    textAlign: 'left',
    padding: '4px 8px'
  };
  const td = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11.5,
    color: 'var(--ink-700)',
    padding: '6px 8px',
    borderTop: '1px solid var(--border-hairline)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      overflowY: 'auto',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "AI model routing",
    icon: "cpu",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--text-muted)'
      }
    }, "blended \u20B90.11/story")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, d.models.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      background: 'var(--surface-sunk)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: m.ok
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--text-strong)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-muted)'
    }
  }, m.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, m.share, "% \xB7 ", m.cost), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: m.p95 > 4 ? 'var(--warning)' : 'var(--text-faint)'
    }
  }, "p95 ", m.p95, "s")))))), /*#__PURE__*/React.createElement(Panel, {
    title: "MCP servers \xB7 Claude Code cowork",
    icon: "plug-zap",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--success)',
        fontWeight: 600
      }
    }, d.mcps.filter(m => m.on).length, "/", d.mcps.length, " connected")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, d.mcps.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: m.on
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11.5,
      color: 'var(--text-strong)',
      width: 86,
      flex: '0 0 auto'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, m.use), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      color: 'var(--gold-600)'
    }
  }, '★'.repeat(m.stars))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Redis cache",
    icon: "database-zap",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--success)',
        fontWeight: 600
      }
    }, "hit 94.2% \xB7 41MB")
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "key"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "ttl"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "hits"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "size"))), /*#__PURE__*/React.createElement("tbody", null, d.redisKeys.map(k => /*#__PURE__*/React.createElement("tr", {
    key: k.key
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, k.key), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--gold-700)'
    }
  }, k.ttl), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, k.hits), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      color: 'var(--text-faint)'
    }
  }, k.size))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, "Feed keys: ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "feed:<lang>:<region>:<section>"), " \xB7 30\u201360s TTL \xB7 live cricket 8s")), /*#__PURE__*/React.createElement(Panel, {
    title: "Job queues \xB7 BullMQ on Redis",
    icon: "layers"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "queue"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "waiting"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "active"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "failed"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "done 24h"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, d.queues.map(q => /*#__PURE__*/React.createElement("tr", {
    key: q.name
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, q.name), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, q.waiting), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      color: 'var(--info)'
    }
  }, q.active), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      color: q.failed ? 'var(--danger)' : 'var(--text-faint)',
      fontWeight: q.failed ? 700 : 400
    }
  }, q.failed), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      color: 'var(--text-muted)'
    }
  }, q.done), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, q.failed > 0 && /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--brand-strong)',
      background: 'var(--red-50)',
      border: 'none',
      borderRadius: 999,
      padding: '3px 9px',
      cursor: 'pointer'
    }
  }, "Retry")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Postgres \xB7 Supabase",
    icon: "database",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--text-muted)'
      }
    }, "primary + 2 replicas")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, d.pg.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.k,
    style: {
      padding: '8px 10px',
      background: 'var(--surface-sunk)',
      borderRadius: 8,
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: p.ok
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, p.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      color: 'var(--text-faint)'
    }
  }, p.k)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "CDN / edge cache",
    icon: "globe",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--text-muted)'
      }
    }, fmt(reqs, 'k'), " req/m")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.cdn.map(z => /*#__PURE__*/React.createElement("div", {
    key: z.zone,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, z.zone), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 6,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: z.hit + '%',
      height: '100%',
      background: z.hit > 90 ? 'var(--success)' : 'var(--warning)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--text-muted)',
      width: 70,
      textAlign: 'right'
    }
  }, z.hit, "% \xB7 ", z.reqs), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPurged(x => ({
      ...x,
      [z.zone]: true
    })),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 600,
      color: purged[z.zone] ? 'var(--success)' : 'var(--brand-strong)',
      background: purged[z.zone] ? 'var(--success-soft)' : 'var(--red-50)',
      border: 'none',
      borderRadius: 999,
      padding: '4px 10px',
      cursor: 'pointer'
    }
  }, purged[z.zone] ? 'Purged ✓' : 'Purge')))))));
}
window.Infra = Infra;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/Infra.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/Newsroom.jsx
try { (() => {
// Newsroom hub: moderation queue + publish composer (drill-in).
function Newsroom({
  d
}) {
  const [items, setItems] = React.useState(d.queue);
  const [sel, setSel] = React.useState(d.queue[0].id);
  const cur = items.find(x => x.id === sel) || items[0];
  const act = id => {
    setItems(xs => xs.filter(x => x.id !== id));
  };
  const dr = d.draft;
  const F = ({
    label,
    value,
    mono,
    sub
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 10,
    color: "var(--cat-tech)"
  }), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      color: 'var(--text-faint)'
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: mono ? 11.5 : 13,
      lineHeight: 1.45,
      color: 'var(--text-body)',
      background: 'var(--white)',
      border: '1px solid var(--border-strong)',
      borderRadius: 8,
      padding: '8px 10px'
    }
  }, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(240px,320px) minmax(380px,1fr) minmax(220px,280px)',
      height: '100%',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border-hairline)',
      overflowY: 'auto',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 14px',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--text-strong)'
    }
  }, "Queue"), /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "count"
  }, items.length), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, "by AI confidence")), items.map(q => {
    const on = cur && cur.id === q.id;
    return /*#__PURE__*/React.createElement("button", {
      key: q.id,
      onClick: () => setSel(q.id),
      style: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '10px 14px',
        border: 'none',
        borderBottom: '1px solid var(--border-hairline)',
        borderLeft: on ? '3px solid var(--brand)' : '3px solid transparent',
        background: on ? 'var(--red-50)' : 'transparent',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(DS.CategoryChip, {
      category: q.category,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 9.5,
        color: 'var(--text-faint)'
      }
    }, q.lang, " \xB7 ", q.source), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        fontWeight: 600,
        color: q.conf < 80 ? 'var(--danger)' : 'var(--success)'
      }
    }, q.conf, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 12.5,
        lineHeight: 1.3,
        color: 'var(--text-strong)'
      }
    }, q.headline));
  }), !items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5
    }
  }, "Queue cleared")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "breaking",
    live: true
  }, "Breaking"), /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "exclusive"
  }, "AI draft"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, dr.lang, " \xB7 ", dr.source, " \xB7 conf ", dr.conf, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 13,
    color: "var(--success)"
  }), "Fact-check passed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "Headline",
    value: dr.headline
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "Short headline",
    value: dr.short,
    sub: dr.short.length + ' ch'
  }), /*#__PURE__*/React.createElement(F, {
    label: "Slug",
    value: dr.slug,
    mono: true
  })), /*#__PURE__*/React.createElement(F, {
    label: "Summary",
    value: dr.summary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(F, {
    label: "SEO title",
    value: dr.seoTitle,
    sub: dr.seoTitle.length + '/60'
  }), /*#__PURE__*/React.createElement(F, {
    label: "Meta description",
    value: dr.meta,
    sub: dr.meta.length + '/160'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--text-muted)'
    }
  }, "Tags"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, dr.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      background: 'var(--ink-100)',
      color: 'var(--ink-700)',
      padding: '3px 9px',
      borderRadius: 999
    }
  }, t)))), /*#__PURE__*/React.createElement(F, {
    label: "Push notification",
    value: dr.push
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 14
    }),
    onClick: () => act(cur && cur.id)
  }, "Publish now"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 14
    })
  }, "Schedule"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 14
    }),
    onClick: () => act(cur && cur.id)
  }, "Reject")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-hairline)',
      background: 'var(--surface-sunk)',
      padding: 14,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 13,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11.5,
      color: 'var(--text-strong)'
    }
  }, "Live preview")), /*#__PURE__*/React.createElement(DS.NewsCard, {
    layout: "hero",
    breaking: true,
    headline: dr.headline,
    summary: dr.summary,
    source: dr.source,
    location: "Vijayawada",
    time: "now",
    verified: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      background: 'var(--white)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 8,
      padding: 10,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: 'var(--brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 10
    }
  }, "t2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--text-strong)'
    }
  }, "tap2news"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, dr.push)))));
}
window.Newsroom = Newsroom;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/Newsroom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/PollsAdmin.jsx
try { (() => {
// Polls & engagement manager: create polls/quizzes, monitor live votes, close/feature.
function PollsAdmin() {
  const [polls, setPolls] = React.useState([{
    id: 1,
    q: 'కొత్త ఐటీ పాలసీతో మీ జిల్లాకు ఉద్యోగాలు వస్తాయా?',
    cat: 'politics',
    lang: 'తెలుగు',
    votes: 12400,
    status: 'live',
    opts: [{
      t: 'ఖచ్చితంగా వస్తాయి',
      v: 46
    }, {
      t: 'చూడాలి',
      v: 38
    }, {
      t: 'రావు',
      v: 16
    }]
  }, {
    id: 2,
    q: 'హోం టెస్ట్ సిరీస్ ఎవరు గెలుస్తారు?',
    cat: 'cricket',
    lang: 'తెలుగు',
    votes: 31200,
    status: 'live',
    opts: [{
      t: 'ఇండియా',
      v: 78
    }, {
      t: 'ఆస్ట్రేలియా',
      v: 14
    }, {
      t: 'డ్రా',
      v: 8
    }]
  }, {
    id: 3,
    q: 'Should metro timings extend past 11pm?',
    cat: 'district',
    lang: 'English',
    votes: 5600,
    status: 'closed',
    opts: [{
      t: 'Yes',
      v: 71
    }, {
      t: 'No',
      v: 29
    }]
  }]);
  const [q, setQ] = React.useState('');
  const [opts, setOpts] = React.useState(['', '']);
  const [kind, setKind] = React.useState('poll');
  const create = () => {
    if (!q.trim() || opts.filter(o => o.trim()).length < 2) return;
    setPolls(ps => [{
      id: Date.now(),
      q,
      cat: 'politics',
      lang: 'తెలుగు',
      votes: 0,
      status: 'live',
      opts: opts.filter(o => o.trim()).map(t => ({
        t,
        v: 0
      }))
    }, ...ps]);
    setQ('');
    setOpts(['', '']);
  };
  const toggle = id => setPolls(ps => ps.map(p => p.id === id ? {
    ...p,
    status: p.status === 'live' ? 'closed' : 'live'
  } : p));
  const inp = {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    color: 'var(--text-body)',
    background: 'var(--white)',
    border: '1px solid var(--border-strong)',
    borderRadius: 8,
    padding: '9px 11px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none'
  };
  const lbl = {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(300px,380px) 1fr',
      gap: 14,
      padding: 16,
      height: '100%',
      boxSizing: 'border-box',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Create engagement",
    icon: "plus-circle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, [['poll', 'Poll'], ['quiz', 'Quiz'], ['survey', 'Survey']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setKind(k),
    style: {
      flex: 1,
      padding: '7px 0',
      borderRadius: 999,
      border: '1px solid ' + (kind === k ? 'var(--brand)' : 'var(--border-strong)'),
      background: kind === k ? 'var(--red-50)' : 'var(--white)',
      color: kind === k ? 'var(--brand-strong)' : 'var(--ink-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Question"), /*#__PURE__*/React.createElement("textarea", {
    rows: 2,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u0C2E\u0C40 \u0C2A\u0C4D\u0C30\u0C36\u0C4D\u0C28\u2026",
    style: {
      ...inp,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Options"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, opts.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: o,
    onChange: e => setOpts(xs => xs.map((x, j) => j === i ? e.target.value : x)),
    placeholder: 'Option ' + (i + 1) + (kind === 'quiz' && i === 0 ? ' (correct)' : ''),
    style: inp
  }), opts.length > 2 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpts(xs => xs.filter((_, j) => j !== i)),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  })))), opts.length < 4 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpts(xs => [...xs, '']),
    style: {
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--text-link)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 12,
    color: "var(--text-link)"
  }), "Add option"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Category"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inp,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Politics"), /*#__PURE__*/React.createElement("option", null, "Cricket"), /*#__PURE__*/React.createElement("option", null, "Cinema"), /*#__PURE__*/React.createElement("option", null, "Health"), /*#__PURE__*/React.createElement("option", null, "District"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Language"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inp,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"), /*#__PURE__*/React.createElement("option", null, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"), /*#__PURE__*/React.createElement("option", null, "\u0939\u093F\u0928\u094D\u0926\u0940"), /*#__PURE__*/React.createElement("option", null, "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"), /*#__PURE__*/React.createElement("option", null, "English")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Placement"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inp,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Feed \xB7 after story 2"), /*#__PURE__*/React.createElement("option", null, "Category tab \xB7 top"), /*#__PURE__*/React.createElement("option", null, "Article end"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Duration"), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inp,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "24 hours"), /*#__PURE__*/React.createElement("option", null, "3 days"), /*#__PURE__*/React.createElement("option", null, "1 week")))), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    block: true,
    onClick: create,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 14,
      color: "#fff"
    })
  }, "Publish ", kind))), /*#__PURE__*/React.createElement(Panel, {
    title: "Live & recent",
    icon: "bar-chart-3",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        color: 'var(--text-muted)'
      }
    }, polls.filter(p => p.status === 'live').length, " live")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, polls.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      padding: '10px 12px',
      background: 'var(--surface-sunk)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: p.cat,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, p.lang, " \xB7 ", p.votes.toLocaleString('en-IN'), " votes"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 700,
      color: p.status === 'live' ? 'var(--success)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: p.status === 'live'
  }), p.status), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(p.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--brand-strong)',
      background: 'var(--red-50)',
      border: 'none',
      borderRadius: 999,
      padding: '3px 9px',
      cursor: 'pointer'
    }
  }, p.status === 'live' ? 'Close' : 'Reopen')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-strong)',
      marginBottom: 7
    }
  }, p.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, p.opts.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, o.t), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: 'var(--ink-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: o.v + '%',
      height: '100%',
      background: 'var(--brand)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--ink-800)'
    }
  }, o.v, "%")))))))));
}
window.PollsAdmin = PollsAdmin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/PollsAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/Shell.jsx
try { (() => {
// Admin v2 shell: Icon, live-data hooks, Spark, Panel, Sidebar, Topbar. Compact density.
const DS = window.Ds2daynewsDesignSystem_0b44f3;
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': 2
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  });
}

// Live random-walk number. returns [value, series]
function useLive(base, vol = 0.03, ms = 2500, len = 24) {
  const [series, setSeries] = React.useState(() => {
    let v = base;
    const out = [];
    for (let i = 0; i < len; i++) {
      v = v * (1 + (Math.random() - 0.5) * vol * 2);
      out.push(v);
    }
    return out;
  });
  React.useEffect(() => {
    const t = setInterval(() => setSeries(s => {
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
function Spark({
  series,
  color = 'var(--brand)',
  w = 96,
  h = 26,
  fill = true
}) {
  const min = Math.min(...series),
    max = Math.max(...series),
    span = max - min || 1;
  const pts = series.map((v, i) => `${i / (series.length - 1) * w},${h - 2 - (v - min) / span * (h - 6)}`);
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, fill && /*#__PURE__*/React.createElement("polygon", {
    points: `0,${h} ${pts.join(' ')} ${w},${h}`,
    fill: color,
    opacity: "0.10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts.join(' '),
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: w,
    cy: pts[pts.length - 1].split(',')[1],
    r: "2.4",
    fill: color
  }));
}
function Panel({
  title,
  icon,
  right,
  children,
  pad = 12,
  style = {},
  onDrill
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-md)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      padding: '9px 12px',
      borderBottom: '1px solid var(--border-hairline)',
      flex: '0 0 auto'
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), right, onDrill && /*#__PURE__*/React.createElement("button", {
    onClick: onDrill,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-link)'
    }
  }, "Open", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 12,
    color: "var(--text-link)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      flex: 1,
      minHeight: 0
    }
  }, children));
}
function Dot({
  ok
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      flex: '0 0 auto',
      background: ok ? 'var(--success)' : 'var(--warning)',
      boxShadow: ok ? '0 0 0 3px var(--success-soft)' : '0 0 0 3px var(--warning-soft)'
    }
  });
}
function Sidebar({
  hubs,
  hub,
  onHub,
  user
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 190,
      flex: '0 0 auto',
      background: 'var(--ink-950)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-400)'
    }
  }, "tap2"), "news"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 9,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      border: '1px solid var(--ink-700)',
      borderRadius: 4,
      padding: '1px 4px'
    }
  }, "Ops")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '4px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, hubs.map(h => {
    const on = hub === h.id;
    return /*#__PURE__*/React.createElement("button", {
      key: h.id,
      onClick: () => onHub(h.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '8px 10px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 13,
        color: on ? '#fff' : 'var(--ink-300)',
        background: on ? 'var(--brand)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: h.icon,
      size: 16,
      color: on ? '#fff' : 'var(--ink-400)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, h.label), h.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        background: on ? 'rgba(255,255,255,.22)' : 'var(--brand)',
        color: '#fff',
        borderRadius: 999,
        padding: '1px 6px'
      }
    }, h.badge));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      borderTop: '1px solid var(--ink-800)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      color: 'var(--ink-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 11
    }
  }, user.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11.5
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      color: 'var(--ink-400)'
    }
  }, user.role))));
}
function Topbar({
  title,
  crumbs,
  onBack,
  actions
}) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 20px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      flex: '0 0 auto'
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, crumbs && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, crumbs), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: true
  }), " All systems live"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, now.toLocaleTimeString('en-IN', {
    hour12: false
  }), " IST"), actions);
}
Object.assign(window, {
  DS,
  Icon,
  useLive,
  fmt,
  Spark,
  Panel,
  Dot,
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/SourcesApis.jsx
try { (() => {
// Sources & APIs console — toggle every feed/API with live monthly-cost meter. Low-cost AI-first.
function SourcesApis() {
  const GROUPS = [{
    name: 'News — free backbone',
    items: [{
      id: 'pubrss',
      n: 'Publisher RSS (Eenadu, Sakshi, TV9, ABN, NTV…)',
      d: 'P1 backbone · 1–2 min polls, faster than Google',
      cost: 0,
      on: true
    }, {
      id: 'gnews',
      n: 'Google News RSS',
      d: 'Per-category topic feeds',
      cost: 0,
      on: true
    }, {
      id: 'pib',
      n: 'PIB + state govt press releases',
      d: 'Official announcements first',
      cost: 0,
      on: true
    }, {
      id: 'gdelt',
      n: 'GDELT 2.0',
      d: '15-min event dumps · syndication counts',
      cost: 0,
      on: true
    }, {
      id: 'tg',
      n: 'Telegram channel listeners',
      d: 'Police/collector/publisher channels · push',
      cost: 0,
      on: true
    }, {
      id: 'yt',
      n: 'YouTube Data API (TV channels)',
      d: 'Breaking-banner title stream',
      cost: 0,
      on: true
    }, {
      id: 'rsshub',
      n: 'RSSHub (self-hosted)',
      d: 'RSS for feedless sites/X',
      cost: 0,
      on: false
    }, {
      id: 'newsdata',
      n: 'NewsData.io free tier',
      d: 'Backfill + coverage checks',
      cost: 0,
      on: false
    }]
  }, {
    name: 'News — paid (enable only on proven gaps)',
    items: [{
      id: 'serpnews',
      n: 'SerpAPI google_news',
      d: 'Breaking-desk one-line lookups',
      cost: 4200,
      on: false
    }, {
      id: 'mediastack',
      n: 'MediaStack paid',
      d: 'SLA volume backfill',
      cost: 2100,
      on: false
    }, {
      id: 'newsapi',
      n: 'NewsAPI.org business',
      d: 'High-volume REST',
      cost: 37000,
      on: false
    }, {
      id: 'wire',
      n: 'PTI / ANI wire subscription',
      d: 'Wire-speed + licensed rewrite rights',
      cost: 50000,
      on: false
    }]
  }, {
    name: 'Cricket',
    items: [{
      id: 'cricfree',
      n: 'CricketData.org free (100 hits/day)',
      d: 'Dev + off-season',
      cost: 0,
      on: true
    }, {
      id: 'cricpaid',
      n: 'CricketData.org $12.99 tier',
      d: 'Covers full IPL day at 8s cache',
      cost: 1100,
      on: false
    }, {
      id: 'cricbuzz',
      n: 'Cricbuzz API (API.market)',
      d: 'Commentary + match pages',
      cost: 1700,
      on: false
    }, {
      id: 'entity',
      n: 'EntitySport / Roanuz',
      d: 'Official push feeds — scale-up only',
      cost: 13000,
      on: false
    }]
  }, {
    name: 'Jobs',
    items: [{
      id: 'govjobs',
      n: 'Govt notifications (UPSC/SSC/RRB/APPSC/TSPSC)',
      d: 'PDF → Gemini structured rows',
      cost: 0,
      on: true
    }, {
      id: 'adzuna',
      n: 'Adzuna + Jooble + Careerjet APIs',
      d: 'Private jobs, free keys',
      cost: 0,
      on: true
    }, {
      id: 'remote',
      n: 'Remotive · RemoteOK · WWR',
      d: 'Remote tab',
      cost: 0,
      on: true
    }, {
      id: 'freelancer',
      n: 'Freelancer.com API',
      d: 'Gig section · OAuth',
      cost: 0,
      on: true
    }, {
      id: 'jobposting',
      n: 'JobPosting schema crawler',
      d: 'Top AP/TS employer career pages',
      cost: 0,
      on: true
    }, {
      id: 'serpjobs',
      n: 'SerpAPI google_jobs',
      d: 'Gap filler · cached per district',
      cost: 4200,
      on: false
    }, {
      id: 'jsearch',
      n: 'JSearch aggregator (Naukri/LinkedIn)',
      d: 'Top-N per category/day, metered',
      cost: 2100,
      on: false
    }]
  }, {
    name: 'Utilities (all free · cron + Redis)',
    items: [{
      id: 'meteo',
      n: 'Open-Meteo + IMD weather/AQI',
      d: '30-min per district centroid',
      cost: 0,
      on: true
    }, {
      id: 'gold',
      n: 'Gold/silver rate scraper',
      d: 'Hourly + district markup table',
      cost: 0,
      on: true
    }, {
      id: 'mkt',
      n: 'Exchange delayed feeds (Sensex/Nifty)',
      d: '1–5 min',
      cost: 0,
      on: true
    }, {
      id: 'panchang',
      n: 'Local ephemeris panchang engine',
      d: 'Computed — zero API',
      cost: 0,
      on: true
    }, {
      id: 'petrol',
      n: 'Petrol/diesel daily rates',
      d: 'State-wise public data',
      cost: 0,
      on: true
    }]
  }, {
    name: 'AI models',
    items: [{
      id: 'flashlite',
      n: 'gemini-2.5-flash-lite',
      d: '<1,200-word rewrites · ₹0.05/story',
      cost: 0,
      on: true,
      ai: true
    }, {
      id: 'flash',
      n: 'gemini-2.5-flash',
      d: '≥1,200-word rewrites · ₹0.09/story',
      cost: 0,
      on: true,
      ai: true
    }, {
      id: 'fallback',
      n: 'Fallback chain (deepseek → gpt-4o-mini → haiku)',
      d: 'Only on 429/quota',
      cost: 0,
      on: true,
      ai: true
    }]
  }];
  const [state, setState] = React.useState(() => {
    const s = {};
    GROUPS.forEach(g => g.items.forEach(i => {
      s[i.id] = i.on;
    }));
    return s;
  });
  const paid = GROUPS.flatMap(g => g.items).filter(i => state[i.id] && i.cost > 0);
  const total = paid.reduce((a, i) => a + i.cost, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      overflowY: 'auto',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px',
      background: 'var(--ink-950)',
      borderRadius: 'var(--r-md)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet",
    size: 18,
    color: "var(--red-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18
    }
  }, "\u20B9", total.toLocaleString('en-IN'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--ink-400)'
    }
  }, " /month fixed API spend")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, paid.length ? paid.map(p => p.n.split(' ')[0]).join(' · ') : 'Fully free stack — only per-story Gemini cost')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 600,
      color: total === 0 ? 'var(--success)' : 'var(--gold-300)'
    }
  }, total === 0 ? '✓ Low-cost AI-first' : 'Paid gap-fillers active')), GROUPS.map(g => /*#__PURE__*/React.createElement(Panel, {
    key: g.name,
    title: g.name,
    icon: "rss",
    pad: 0
  }, g.items.map((i, ix) => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 14px',
      borderTop: ix ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    ok: state[i.id]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'var(--text-strong)'
    }
  }, i.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginLeft: 8
    }
  }, i.d)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      padding: '2px 8px',
      borderRadius: 999,
      background: i.cost === 0 ? 'var(--success-soft)' : 'var(--warning-soft)',
      color: i.cost === 0 ? 'var(--success)' : 'var(--gold-700)'
    }
  }, i.ai ? 'per-story' : i.cost === 0 ? 'FREE' : '₹' + i.cost.toLocaleString('en-IN') + '/mo'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setState(s => ({
      ...s,
      [i.id]: !s[i.id]
    })),
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      background: state[i.id] ? 'var(--brand)' : 'var(--ink-200)',
      transition: 'background var(--dur-fast)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: state[i.id] ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--dur-fast) var(--ease-standard)',
      boxShadow: '0 1px 2px rgba(0,0,0,.2)'
    }
  })))))));
}
window.SourcesApis = SourcesApis;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/SourcesApis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin_v2/data.js
try { (() => {
// tap2news Admin v2 — command center seed data.
window.AD2 = {
  user: {
    name: 'Priya Rao',
    role: 'Managing Editor',
    initials: 'PR'
  },
  hubs: [{
    id: 'command',
    icon: 'gauge',
    label: 'Command'
  }, {
    id: 'newsroom',
    icon: 'pen-line',
    label: 'Newsroom',
    badge: 8
  }, {
    id: 'infra',
    icon: 'server',
    label: 'Infra & AI'
  }, {
    id: 'sources',
    icon: 'rss',
    label: 'Sources & APIs'
  }, {
    id: 'growth',
    icon: 'trending-up',
    label: 'Growth'
  }],
  queue: [{
    id: 1,
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    category: 'breaking',
    lang: 'te',
    source: 'TV9',
    conf: 96
  }, {
    id: 2,
    headline: 'Cabinet clears new IT policy; targets 200,000 jobs',
    category: 'politics',
    lang: 'en',
    source: 'PTI',
    conf: 91
  }, {
    id: 3,
    headline: 'டாலிவுட் நடிகரின் அடுத்த படம் பொங்கலுக்கு',
    category: 'cinema',
    lang: 'ta',
    source: 'Dinamalar',
    conf: 88
  }, {
    id: 4,
    headline: 'APPSC Group-II: 1,200 vacancies, apply by month end',
    category: 'jobs',
    lang: 'en',
    source: 'Desk',
    conf: 99
  }, {
    id: 5,
    headline: 'ನಗರದಲ್ಲಿ ಸೈಬರ್ ವಂಚನೆ ಜಾಲ ಬಂಧನ; ₹2 ಕೋಟಿ ವಶ',
    category: 'crime',
    lang: 'kn',
    source: 'Prajavani',
    conf: 74
  }],
  draft: {
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    short: 'తీర జిల్లాలకు వర్ష హెచ్చరిక',
    summary: 'IMD ప్రకారం రాబోయే 48 గంటల్లో బలమైన గాలులు, స్థానిక వరదల ముప్పు. మత్స్యకారులు సముద్రంలోకి వెళ్లవద్దని సూచన.',
    seoTitle: 'AP coastal districts rain alert — IMD warning | tap2news',
    slug: 'ap-coastal-rain-alert-weekend-imd',
    meta: 'IMD issues heavy rain alert for Andhra Pradesh coastal districts. Squally winds, local flooding likely.',
    tags: ['Weather', 'IMD', 'Andhra Pradesh', 'Rain alert'],
    push: 'Heavy rain alert for coastal AP this weekend — stay safe. Updates on tap2news.',
    source: 'TV9',
    category: 'breaking',
    lang: 'Telugu',
    conf: 96
  },
  models: [{
    name: 'Gemini 2.0 Flash',
    role: 'Rewrite + classify',
    share: 62,
    cost: '₹0.09/story',
    p95: 1.9,
    ok: true
  }, {
    name: 'Claude Sonnet',
    role: 'Fact-check · long-form',
    share: 22,
    cost: '₹0.31/story',
    p95: 3.2,
    ok: true
  }, {
    name: 'GPT-4o mini',
    role: 'Headlines · push copy',
    share: 11,
    cost: '₹0.05/story',
    p95: 1.1,
    ok: true
  }, {
    name: 'DeepSeek V3',
    role: 'Fallback · batch archive',
    share: 5,
    cost: '₹0.02/story',
    p95: 4.8,
    ok: false
  }],
  mcps: [{
    name: 'Context7',
    use: 'Live docs — Next.js, Supabase, Tailwind',
    stars: 5,
    on: true
  }, {
    name: 'Filesystem',
    use: 'Read/write project code',
    stars: 5,
    on: true
  }, {
    name: 'GitHub',
    use: 'Commits, PRs, issues on tap2news repo',
    stars: 5,
    on: true
  }, {
    name: 'Playwright',
    use: 'E2E: login, search, UI screenshots',
    stars: 5,
    on: true
  }, {
    name: 'Supabase',
    use: 'Tables, SQL, RLS, storage, auth',
    stars: 5,
    on: true
  }, {
    name: 'Fetch',
    use: 'Read article URLs → markdown',
    stars: 4,
    on: true
  }, {
    name: 'PostgreSQL',
    use: 'Query tuning, indexes, debugging',
    stars: 4,
    on: true
  }, {
    name: 'Brave Search',
    use: 'Breaking verification, fact sources',
    stars: 4,
    on: false
  }],
  redisKeys: [{
    key: 'feed:te:hyd:mynews',
    ttl: '42s',
    hits: '18.2K/m',
    size: '214KB'
  }, {
    key: 'feed:hi:lko:politics',
    ttl: '31s',
    hits: '9.8K/m',
    size: '186KB'
  }, {
    key: 'gold:rates:in',
    ttl: '9m',
    hits: '6.1K/m',
    size: '2KB'
  }, {
    key: 'cricket:live:ind-aus',
    ttl: '8s',
    hits: '22.4K/m',
    size: '11KB'
  }, {
    key: 'trends:ta:chennai',
    ttl: '4m',
    hits: '3.2K/m',
    size: '96KB'
  }],
  queues: [{
    name: 'ingest-rss',
    waiting: 34,
    active: 6,
    failed: 2,
    done: '48.2K'
  }, {
    name: 'ai-rewrite',
    waiting: 12,
    active: 8,
    failed: 1,
    done: '31.7K'
  }, {
    name: 'push-fanout',
    waiting: 0,
    active: 2,
    failed: 0,
    done: '1.4M'
  }, {
    name: 'thumb-gen',
    waiting: 7,
    active: 3,
    failed: 4,
    done: '29.9K'
  }, {
    name: 'social-syndicate',
    waiting: 3,
    active: 1,
    failed: 0,
    done: '12.3K'
  }],
  pg: [{
    k: 'Replication lag',
    v: '0.4s',
    ok: true
  }, {
    k: 'Connections',
    v: '212 / 500',
    ok: true
  }, {
    k: 'Cache hit ratio',
    v: '99.1%',
    ok: true
  }, {
    k: 'Slowest query',
    v: 'get_feed 84ms',
    ok: true
  }, {
    k: 'Table bloat (articles)',
    v: '6%',
    ok: true
  }, {
    k: 'WAL size',
    v: '1.2GB',
    ok: false
  }],
  cdn: [{
    zone: 'feed-api (in-south)',
    hit: 94,
    reqs: '212K/m'
  }, {
    zone: 'images (r2)',
    hit: 98,
    reqs: '480K/m'
  }, {
    zone: 'article pages',
    hit: 88,
    reqs: '96K/m'
  }],
  revenue: [{
    src: 'AdSense / Ad Manager',
    v: 46,
    amt: '₹4.61L'
  }, {
    src: 'Sponsored stories',
    v: 22,
    amt: '₹2.20L'
  }, {
    src: 'tap2news Plus',
    v: 17,
    amt: '₹1.71L'
  }, {
    src: 'E-paper',
    v: 9,
    amt: '₹0.90L'
  }, {
    src: 'Local ads',
    v: 6,
    amt: '₹0.61L'
  }],
  topStories: [{
    t: 'వర్ష హెచ్చరిక — తీర జిల్లాలు',
    v: '412K',
    cat: 'breaking'
  }, {
    t: 'IT policy: 2L jobs',
    v: '284K',
    cat: 'politics'
  }, {
    t: 'సంక్రాంతి సినిమా వార్',
    v: '221K',
    cat: 'cinema'
  }, {
    t: 'APPSC 1,200 posts',
    v: '198K',
    cat: 'jobs'
  }],
  langSplit: [{
    l: 'తెలుగు',
    pct: 38,
    c: 'var(--cat-politics)'
  }, {
    l: 'हिन्दी',
    pct: 27,
    c: 'var(--brand)'
  }, {
    l: 'தமிழ்',
    pct: 16,
    c: 'var(--cat-sports)'
  }, {
    l: 'ಕನ್ನಡ',
    pct: 11,
    c: 'var(--cat-cinema)'
  }, {
    l: 'Other',
    pct: 8,
    c: 'var(--cat-jobs)'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin_v2/data.js", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared bits for the app kit: DS namespace alias, Lucide icon helper, phone chrome.
const DS = window.Ds2daynewsDesignSystem_0b44f3;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': 2
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}

// Sticky app header: wordmark + location + language pill.
function AppHeader({
  lang,
  onLangTap,
  onLocTap
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'linear-gradient(90deg, var(--brand), var(--red-400), var(--gold-500))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "tap2"), "news"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: 'var(--white)',
      cursor: 'pointer',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: 'var(--white)',
      cursor: 'pointer',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 7,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--brand)',
      border: '2px solid var(--white)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onLangTap,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border-strong)',
      background: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--ink-800)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--brand-strong)',
      fontWeight: 700
    }
  }, "\u0C24\u0C46"), lang.native, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--ink-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: onLocTap,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '0 var(--gutter) 10px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      cursor: onLocTap ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, lang.location), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Hyperlocal feed")));
}

// Horizontally-scrolling data rail (gold / markets / weather / cricket).
function DataRail({
  rail
}) {
  const ICONS = {
    gold: 'coins',
    market: 'indian-rupee',
    weather: 'cloud-sun',
    cricket: 'trophy'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      padding: '12px var(--gutter)',
      scrollbarWidth: 'none',
      background: 'var(--surface-sunk)'
    }
  }, rail.map((d, i) => /*#__PURE__*/React.createElement(DS.DataTile, _extends({
    key: i
  }, d, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ICONS[d.kind] || 'activity',
      size: 17,
      color: "currentColor"
    }),
    style: {
      flex: '0 0 auto'
    }
  }))));
}

// Bottom tab bar.
function BottomNav({
  tab,
  onTab,
  onQuickRead = () => {}
}) {
  const items = [{
    id: 'feed',
    icon: 'newspaper',
    label: 'Feed'
  }, {
    id: 'explore',
    icon: 'layout-grid',
    label: 'Explore'
  }, {
    id: 'utility',
    icon: 'gem',
    label: 'Utility'
  }, {
    id: 'saved',
    icon: 'bookmark',
    label: 'Saved'
  }];
  const Btn = ({
    it
  }) => {
    const on = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onTab(it.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '8px 0 10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: on ? 'var(--brand)' : 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 30,
        borderRadius: 999,
        background: on ? 'var(--red-50)' : 'transparent',
        transition: 'background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 21,
      color: on ? 'var(--brand)' : 'var(--ink-400)'
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: on ? 700 : 500,
        fontSize: 10.5
      }
    }, it.label));
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      paddingBottom: 6,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    it: items[0]
  }), /*#__PURE__*/React.createElement(Btn, {
    it: items[1]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 74px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onQuickRead,
    style: {
      width: 54,
      height: 54,
      marginTop: -26,
      borderRadius: '50%',
      border: '4px solid var(--surface-card)',
      cursor: 'pointer',
      background: 'linear-gradient(160deg, var(--red-400), var(--brand-deep))',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-brand)',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 10,
      color: 'var(--brand-strong)'
    }
  }, "\u0C15\u0C4D\u0C35\u0C3F\u0C15\u0C4D \u0C30\u0C40\u0C21\u0C4D")), /*#__PURE__*/React.createElement(Btn, {
    it: items[2]
  }), /*#__PURE__*/React.createElement(Btn, {
    it: items[3]
  }));
}
Object.assign(window, {
  DS,
  Icon,
  AppHeader,
  DataRail,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ArticleScreen.jsx
try { (() => {
// Article reading screen.
function ArticleScreen({
  story,
  onBack
}) {
  const s = story;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px var(--gutter)',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink-800)'
    }
  }, "Story"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: 'linear-gradient(135deg,var(--ink-100),var(--paper-sunk))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-300)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34
    }
  }, "T2"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, s.breaking ? /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "breaking",
    live: true
  }, "Breaking") : /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: s.category,
    size: "sm"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-title)',
      lineHeight: 1.18,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, s.headline), /*#__PURE__*/React.createElement(DS.SourceStamp, {
    source: s.source,
    location: s.location,
    time: s.time,
    verified: s.verified,
    aiRewritten: s.aiRewritten
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)'
    }
  }), (s.body || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-body)'
    }
  }, p)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "soft",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "volume-2",
      size: 16
    })
  }, "\u0C35\u0C3E\u0C2F\u0C3F\u0C38\u0C4D \u0C38\u0C3E\u0C30\u0C3E\u0C02\u0C36\u0C02"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "languages",
      size: 16
    })
  }, "English"))));
}
window.ArticleScreen = ArticleScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EngageCards.jsx
try { (() => {
// Engagement modules interleaved into the feed: poll, health quiz, viral card, follow suggestions.

// One-tap poll with animated results.
function PollCard({
  poll
}) {
  const [voted, setVoted] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: 'var(--red-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bar-chart-3",
    size: 14,
    color: "var(--brand)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--brand-strong)'
    }
  }, "\u0C2A\u0C4B\u0C32\u0C4D"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-faint)'
    }
  }, poll.votes, " \u0C13\u0C1F\u0C4D\u0C32\u0C41")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.3,
      color: 'var(--text-strong)'
    }
  }, poll.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, poll.options.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setVoted(i),
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'left',
      padding: '10px 13px',
      borderRadius: 'var(--r-md)',
      border: '1px solid ' + (voted === i ? 'var(--brand)' : 'var(--border-strong)'),
      background: 'var(--white)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, voted != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      width: o.v + '%',
      background: voted === i ? 'var(--red-50)' : 'var(--ink-50)',
      transition: 'width .5s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: voted === i ? 700 : 500
    }
  }, o.t), voted != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 12.5,
      color: voted === i ? 'var(--brand-strong)' : 'var(--text-muted)'
    }
  }, o.v, "%"))))), voted != null && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "\u0C2E\u0C40 \u0C13\u0C1F\u0C41 \u0C28\u0C2E\u0C4B\u0C26\u0C48\u0C02\u0C26\u0C3F \xB7 \u0C2B\u0C32\u0C3F\u0C24\u0C3E\u0C32\u0C41 \u0C32\u0C48\u0C35\u0C4D"));
}

// Health question with tap-to-reveal answer.
function QuizCard({
  quiz
}) {
  const [pick, setPick] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: 'color-mix(in srgb, var(--cat-health) 14%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 14,
    color: "var(--cat-health)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--cat-health)'
    }
  }, quiz.tag, " \u0C2A\u0C4D\u0C30\u0C36\u0C4D\u0C28")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.3,
      color: 'var(--text-strong)'
    }
  }, quiz.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, quiz.options.map((o, i) => {
    const state = pick == null ? null : i === quiz.answer ? 'right' : i === pick ? 'wrong' : null;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setPick(i),
      style: {
        padding: '9px 14px',
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 13,
        border: '1px solid ' + (state === 'right' ? 'var(--success)' : state === 'wrong' ? 'var(--danger)' : 'var(--border-strong)'),
        background: state === 'right' ? 'var(--success-soft)' : state === 'wrong' ? 'var(--danger-soft)' : 'var(--white)',
        color: state === 'right' ? 'var(--success)' : state === 'wrong' ? 'var(--danger)' : 'var(--text-strong)'
      }
    }, o);
  })), pick != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12,
      padding: '10px 12px',
      background: 'var(--success-soft)',
      borderRadius: 'var(--r-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 15,
    color: "var(--success)",
    style: {
      flex: '0 0 auto',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-800)'
    }
  }, quiz.fact)));
}

// Viral trending card — dark, view counter, share CTA.
function ViralCard({
  viral,
  onOpen = () => {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-card)',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, color-mix(in srgb, var(--cat-shorts) 38%, var(--ink-900)), var(--ink-950))',
      padding: 16,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 10.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'var(--cat-shorts)',
      padding: '4px 9px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 12,
    color: "#fff"
  }), "\u0C35\u0C48\u0C30\u0C32\u0C4D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'rgba(255,255,255,.7)'
    }
  }, viral.time)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      lineHeight: 1.28,
      letterSpacing: '-0.01em'
    }
  }, viral.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 14,
    color: "rgba(255,255,255,.8)"
  }), viral.views), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 13,
    color: "rgba(255,255,255,.8)"
  }), viral.shares), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      background: 'rgba(255,255,255,.14)',
      padding: '7px 12px',
      borderRadius: 999
    }
  }, "\u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13,
    color: "#fff"
  }))));
}

// Follow-topic suggestions.
function SuggestCard({
  cats
}) {
  const [on, setOn] = React.useState({});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunk)',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--r-card)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    color: "var(--cat-tech)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "\u0C2E\u0C40\u0C15\u0C4B\u0C38\u0C02 \u0C38\u0C42\u0C1A\u0C28\u0C32\u0C41"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-faint)'
    }
  }, "\xB7 \u0C2B\u0C3E\u0C32\u0C4B \u0C05\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(DS.CategoryChip, {
    key: c,
    category: c,
    active: !!on[c],
    onClick: () => setOn(x => ({
      ...x,
      [c]: !x[c]
    }))
  }))));
}

// Reaction bar attached beneath every story card — like, comment, share, save.
function ActionBar({
  likes = 128,
  comments = 12
}) {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const btn = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
    fontSize: 11.5,
    fontWeight: 600,
    padding: '4px 6px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: -10,
      padding: '8px 10px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderTop: 'none',
      borderRadius: '0 0 var(--r-card) var(--r-card)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked),
    style: {
      ...btn,
      color: liked ? 'var(--brand)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "thumbs-up",
    size: 15,
    color: liked ? 'var(--brand)' : 'var(--ink-400)'
  }), likes + (liked ? 1 : 0)), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 15,
    color: "var(--ink-400)"
  }), comments), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 14,
    color: "var(--ink-400)"
  }), "\u0C37\u0C47\u0C30\u0C4D"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSaved(!saved),
    style: {
      ...btn,
      color: saved ? 'var(--gold-600)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 15,
    color: saved ? 'var(--gold-600)' : 'var(--ink-400)'
  }), saved ? 'సేవ్ అయింది' : 'సేవ్'));
}
Object.assign(window, {
  PollCard,
  QuizCard,
  ViralCard,
  SuggestCard,
  ActionBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EngageCards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ExploreScreen.jsx
try { (() => {
// Explore screen: category grid.
function ExploreScreen({
  data
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '4px 0 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, "Explore sections"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, data.explore.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.category,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 14,
      borderRadius: 'var(--r-card)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: `color-mix(in srgb, ${DS.CATEGORY_COLORS[c.category]} 16%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: DS.CATEGORY_COLORS[c.category]
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '22px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, "Following"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['politics', 'cinema', 'jobs', 'sports'].map(c => /*#__PURE__*/React.createElement(DS.CategoryChip, {
    key: c,
    category: c,
    active: true
  })), /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: "tech",
    label: "+ Add"
  })));
}
window.ExploreScreen = ExploreScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ExploreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FeedScreen.jsx
try { (() => {
// Main feed screen: breaking ticker → data rail → section tabs → story feed.
function FeedScreen({
  data,
  onOpen,
  onQuickRead = () => {},
  loc = {
    on: false,
    place: ''
  }
}) {
  const [sec, setSec] = React.useState('mynews');
  const pick = c => {
    if (c === 'shorts') {
      onQuickRead();
      return;
    }
    setSec(c);
  };
  const stories = sec === 'mynews' ? data.stories : data.stories.filter(s => s.category === sec).length ? data.stories.filter(s => s.category === sec) : data.stories;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.BreakingTicker, {
    label: "Breaking",
    items: data.breaking
  }), /*#__PURE__*/React.createElement(DataRail, {
    rail: data.rail
  }), /*#__PURE__*/React.createElement(DS.SectionTabs, {
    value: sec,
    onChange: pick,
    items: data.sections
  }), sec === 'mynews' && data.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter) var(--gutter) 4px'
    }
  }, /*#__PURE__*/React.createElement(DS.FeaturedCarousel, {
    items: data.featured,
    autoPlay: true,
    onOpen: s => onOpen({
      ...s,
      source: 'tap2news',
      location: s.region,
      breaking: s.category === 'breaking',
      body: ['ఈ కథనం పూర్తి వివరాలు యాప్‌లో అందుబాటులో ఉన్నాయి. వాస్తవాలు మూలం నుండి ధృవీకరించబడ్డాయి.']
    })
  })), sec === 'mynews' && loc.on && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px var(--gutter) 0',
      padding: 12,
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--r-card)',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, "\u0C2E\u0C40 \u0C26\u0C17\u0C4D\u0C17\u0C30 \xB7 ", loc.place), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--success)'
    }
  }), "GPS \u0C06\u0C28\u0C4D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, data.local.map(s => /*#__PURE__*/React.createElement(DS.NewsCard, {
    key: s.id,
    layout: "compact",
    category: s.category,
    headline: s.headline,
    source: s.source,
    time: s.time,
    verified: s.verified,
    location: loc.place,
    onClick: () => onOpen({
      ...s,
      location: loc.place,
      body: ['పూర్తి వివరాలు త్వరలో అందుబాటులో ఉంటాయి.']
    })
  })))), /*#__PURE__*/React.createElement("div", {
    key: sec,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--stack-gap)',
      padding: 'var(--gutter)'
    }
  }, sec !== 'mynews' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '2px 2px 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 18,
      borderRadius: 999,
      background: DS.CATEGORY_COLORS[sec] || 'var(--brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, (data.sections.find(x => x.category === sec) || {}).label || sec), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "\xB7 \u0C24\u0C3E\u0C1C\u0C3E \u0C15\u0C25\u0C28\u0C3E\u0C32\u0C41")), stories.map((s, idx) => {
    const eng = idx === 0 && sec !== 'mynews' && data.engage[sec];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "fx-card",
      style: {
        animationDelay: Math.min(idx * 45, 300) + 'ms'
      }
    }, /*#__PURE__*/React.createElement(DS.NewsCard, {
      layout: s.layout,
      category: s.category,
      breaking: s.breaking,
      headline: s.headline,
      summary: s.summary,
      source: s.source,
      location: s.location,
      time: s.time,
      verified: s.verified,
      aiRewritten: s.aiRewritten,
      onClick: () => onOpen(s),
      style: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }), /*#__PURE__*/React.createElement(ActionBar, {
      likes: 80 + s.id * 37 % 400,
      comments: 4 + s.id * 13 % 60
    })), eng && eng.type === 'poll' && /*#__PURE__*/React.createElement(PollCard, {
      poll: eng.poll
    }), eng && eng.type === 'quiz' && /*#__PURE__*/React.createElement(QuizCard, {
      quiz: eng.quiz
    }), sec === 'mynews' && idx === 1 && /*#__PURE__*/React.createElement(PollCard, {
      poll: data.poll
    }), sec === 'mynews' && idx === 2 && /*#__PURE__*/React.createElement(ViralCard, {
      viral: data.viral,
      onOpen: onQuickRead
    }), sec === 'mynews' && idx === 3 && /*#__PURE__*/React.createElement(QuizCard, {
      quiz: data.quiz
    }), sec === 'mynews' && idx === 4 && /*#__PURE__*/React.createElement(SuggestCard, {
      cats: data.suggest
    }));
  })));
}
window.FeedScreen = FeedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FeedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SwipeReader.jsx
try { (() => {
// Full-screen swipe reader — 60-word story cards, swipe/scroll vertically for next.
function SwipeReader({
  stories = [],
  onClose,
  onOpenFull
}) {
  const [i, setI] = React.useState(0);
  const n = stories.length;
  const touch = React.useRef(0);
  const busy = React.useRef(false);
  const go = d => {
    if (busy.current) return;
    busy.current = true;
    setI(x => Math.max(0, Math.min(n - 1, x + d)));
    setTimeout(() => {
      busy.current = false;
    }, 350);
  };
  const s = stories[i] || {};
  const color = DS.CATEGORY_COLORS[s.category] || 'var(--brand)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      background: 'var(--ink-950)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    onWheel: e => go(e.deltaY > 0 ? 1 : -1),
    onTouchStart: e => {
      touch.current = e.touches[0].clientY;
    },
    onTouchEnd: e => {
      const dy = touch.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) go(dy > 0 ? 1 : -1);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px',
      color: '#fff',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      display: 'flex',
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(255,255,255,.12)',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-400)'
    }
  }, "\u0C15\u0C4D\u0C35\u0C3F\u0C15\u0C4D"), " \u0C30\u0C40\u0C21\u0C4D"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(255,255,255,.6)'
    }
  }, i + 1, "/", n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: '0 16px 12px',
      flex: '0 0 auto'
    }
  }, stories.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 999,
      background: k <= i ? 'var(--brand)' : 'rgba(255,255,255,.18)',
      transition: 'background var(--dur-base)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      padding: '0 14px 14px',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      borderRadius: 18,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      animation: 'qr-in .32s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      flex: '0 0 auto',
      background: `linear-gradient(135deg, color-mix(in srgb, ${color} 40%, var(--ink-800)), var(--ink-900))`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,.18)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44
    }
  }, "T2"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, s.breaking ? /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "breaking",
    live: true
  }, "Breaking") : /*#__PURE__*/React.createElement(DS.CategoryChip, {
    category: s.category,
    size: "sm"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      lineHeight: 1.22,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, s.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, s.summary || (s.body || [])[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(DS.SourceStamp, {
    source: s.source,
    location: s.location,
    time: s.time,
    verified: s.verified,
    aiRewritten: s.aiRewritten
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      paddingTop: 4,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "soft",
    size: "sm",
    onClick: () => onOpenFull(s)
  }, "\u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C15\u0C25\u0C28\u0C02"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: 'var(--white)',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: 'var(--white)',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingBottom: 12,
      color: 'rgba(255,255,255,.55)',
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      flex: '0 0 auto'
    }
  }, i < n - 1 ? '↑ స్వైప్ చేయండి — తదుపరి వార్త' : 'అన్నీ చదివేశారు'), /*#__PURE__*/React.createElement("style", null, '@keyframes qr-in{from{transform:translateY(26px);opacity:.4}to{transform:translateY(0);opacity:1}}'));
}
window.SwipeReader = SwipeReader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SwipeReader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/UtilityScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Utility screen: gold/markets, weather, panchang/astrology.
function UtilityScreen({
  data
}) {
  const p = data.panchang;
  const Section = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, title), children);
  const Row = ({
    k,
    v
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Gold & Markets"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, data.rail.map((d, i) => /*#__PURE__*/React.createElement(DS.DataTile, _extends({
    key: i
  }, d, {
    style: {
      flex: '0 0 auto'
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    title: "Weather \xB7 Vijayawada"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderRadius: 'var(--r-card)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Temperature",
    v: "34\xB0 / 27\xB0"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Humidity",
    v: "68%"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Air quality",
    v: "AQI 82 \xB7 Moderate"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Sunrise \xB7 Sunset",
    v: "6:04 \xB7 18:12"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 10,
      color: 'var(--warning)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle-alert",
    size: 16,
    color: "var(--warning)"
  }), " Heavy rain alert this weekend"))), /*#__PURE__*/React.createElement(Section, {
    title: "Panchang \xB7 Astrology"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderRadius: 'var(--r-card)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(DS.Badge, {
    tone: "gold"
  }, "Today"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Daily horoscope \xB7 Panchang")), /*#__PURE__*/React.createElement(Row, {
    k: "Tithi",
    v: p.tithi
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Nakshatra",
    v: p.nakshatra
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Rahu Kalam",
    v: p.rahu
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Lucky number \xB7 color",
    v: p.lucky
  }))));
}
window.UtilityScreen = UtilityScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/UtilityScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
// Sample content for the tap2news app UI kit. Telugu-first hyperlocal feed (geo-fenced to AP/Telangana).
window.DN_DATA = {
  language: {
    code: 'te',
    native: 'తెలుగు',
    location: 'Vijayawada, AP'
  },
  breaking: ['కేబినెట్‌లో కొత్త ఐటీ పాలసీకి ఆమోదం — 2 లక్షల ఉద్యోగాల లక్ష్యం', 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; మత్స్యకారులకు అలర్ట్', 'సెన్సెక్స్ 400 పాయింట్లు లాభంతో ముగింపు'],
  rail: [{
    kind: 'gold',
    label: 'Gold 22K',
    value: '₹71,240',
    sub: 'per 10g · Hyd',
    delta: 180
  }, {
    kind: 'market',
    label: 'Nifty 50',
    value: '24,318',
    delta: -96
  }, {
    kind: 'weather',
    label: 'Vijayawada',
    value: '34°',
    sub: 'AQI 82 · Haze'
  }, {
    kind: 'cricket',
    label: 'IND vs AUS',
    value: '286/4',
    sub: '48.2 ov'
  }],
  sections: [{
    category: 'mynews',
    label: 'మీ వార్తలు'
  }, {
    category: 'politics',
    label: 'రాజకీయాలు'
  }, {
    category: 'cinema',
    label: 'సినిమా'
  }, {
    category: 'shorts',
    label: 'వైరల్ షార్ట్స్'
  }, {
    category: 'sports',
    label: 'క్రికెట్'
  }, {
    category: 'jobs',
    label: 'ఉద్యోగాలు'
  }, {
    category: 'finance',
    label: 'ఫైనాన్స్'
  }, {
    category: 'astrology',
    label: 'జాతకం'
  }, {
    category: 'health',
    label: 'ఆరోగ్యం'
  }, {
    category: 'business',
    label: 'బిజినెస్'
  }, {
    category: 'cooking',
    label: 'వంటలు'
  }],
  featured: [{
    region: 'Telangana',
    category: 'crime',
    headline: 'Gooty: సైబర్ క్రైమ్స్, పోక్సో చట్టాలపై స్టూడెంట్స్‌కు పోలీస్ క్లాస్!',
    time: '11:37 PM',
    read: '1 min read'
  }, {
    region: 'Andhra Pradesh',
    category: 'politics',
    headline: 'పోలవరం ప్రాజెక్టును సందర్శించిన సీఎం చంద్రబాబు',
    time: '9:50 PM',
    read: '2 min read'
  }, {
    region: 'National',
    category: 'breaking',
    headline: 'కేబినెట్‌లో కొత్త ఐటీ పాలసీకి ఆమోదం — 2 లక్షల ఉద్యోగాల లక్ష్యం',
    time: '8:20 PM',
    read: '3 min read'
  }, {
    region: 'Hyderabad',
    category: 'business',
    headline: 'హైదరాబాద్‌లో కొత్త ఐటీ పార్క్‌కు శంకుస్థాపన',
    time: '7:05 PM',
    read: '2 min read'
  }, {
    region: 'Tollywood',
    category: 'cinema',
    headline: 'సంక్రాంతికి భారీ పోటీ — మూడు పెద్ద సినిమాలు రిలీజ్',
    time: '6:40 PM',
    read: '1 min read'
  }, {
    region: 'Sports',
    category: 'sports',
    headline: 'హోం టెస్ట్ సిరీస్‌కు భారత జట్టు ప్రకటన; కొత్త ఆటగాడికి చోటు',
    time: '5:15 PM',
    read: '2 min read'
  }, {
    region: 'Andhra Pradesh',
    category: 'jobs',
    headline: 'APPSC గ్రూప్-II నోటిఫికేషన్ విడుదల — 1,200 ఖాళీలు',
    time: '4:00 PM',
    read: '1 min read'
  }, {
    region: 'Weather',
    category: 'weather',
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    time: '2:30 PM',
    read: '2 min read'
  }],
  stories: [{
    id: 1,
    category: 'breaking',
    breaking: true,
    layout: 'hero',
    headline: 'తీర జిల్లాలకు భారీ వర్ష హెచ్చరిక; వారాంతంలో గాలివానలు',
    summary: 'IMD ప్రకారం రాబోయే 48 గంటల్లో బలమైన గాలులు, స్థానిక వరదల ముప్పు. మత్స్యకారులు సముద్రంలోకి వెళ్లవద్దని సూచన.',
    source: 'TV9',
    location: 'Vijayawada',
    time: '8 min',
    verified: true,
    body: ['భారత వాతావరణ శాఖ (IMD) ఆంధ్రప్రదేశ్ తీర జిల్లాలకు వారాంతం వరకు భారీ వర్ష హెచ్చరిక జారీ చేసింది.', 'బంగాళాఖాతంలో ఏర్పడిన అల్పపీడనం కారణంగా గాలివానలు, స్థానిక వరదల ముప్పు ఉందని అధికారులు తెలిపారు.', 'మత్స్యకారులు సముద్రంలోకి వెళ్లవద్దని, ప్రజలు అప్రమత్తంగా ఉండాలని ప్రభుత్వం విజ్ఞప్తి చేసింది.']
  }, {
    id: 2,
    category: 'cinema',
    layout: 'row',
    headline: 'టాలీవుడ్ హీరో తదుపరి చిత్రం సంక్రాంతికి — ఫస్ట్ లుక్ విడుదల',
    summary: 'ఫెస్టివల్ సీజన్‌లో భారీ పోటీకి రంగం సిద్ధం; హైదరాబాద్‌లో చివరి షెడ్యూల్ పూర్తి.',
    source: 'Sakshi',
    location: 'Hyderabad',
    time: '1 hr',
    aiRewritten: true,
    body: ['ప్రముఖ టాలీవుడ్ హీరో నటిస్తున్న చిత్రం వచ్చే సంక్రాంతికి విడుదల కానుందని నిర్మాతలు ప్రకటించారు.', 'చిత్రం చివరి షెడ్యూల్ హైదరాబాద్‌లో పూర్తయిందని, పోస్ట్ ప్రొడక్షన్ పనులు వేగంగా జరుగుతున్నాయని తెలిపారు.']
  }, {
    id: 3,
    category: 'jobs',
    layout: 'row',
    headline: 'APPSC గ్రూప్-II నోటిఫికేషన్ విడుదల — 1,200 ఖాళీలు',
    summary: 'ఆన్‌లైన్ దరఖాస్తులు ఈ నెలాఖరు వరకు; పరీక్ష మార్చిలో నిర్వహణ.',
    source: 'tap2news',
    location: 'AP',
    time: '2 hr',
    verified: true,
    body: ['ఆంధ్రప్రదేశ్ పబ్లిక్ సర్వీస్ కమిషన్ (APPSC) గ్రూప్-II పోస్టులకు 1,200 ఖాళీలతో నోటిఫికేషన్ విడుదల చేసింది.', 'అర్హులైన అభ్యర్థులు ఈ నెలాఖరులోగా ఆన్‌లైన్‌లో దరఖాస్తు చేసుకోవాలని కమిషన్ సూచించింది.']
  }, {
    id: 4,
    category: 'politics',
    layout: 'row',
    headline: 'రాష్ట్ర కేబినెట్‌లో కొత్త ఐటీ పాలసీకి ఆమోదం',
    summary: 'రానున్న ఐదేళ్లలో 2 లక్షల ఉద్యోగాల కల్పనే లక్ష్యంగా విధానం.',
    source: 'Eenadu',
    location: 'Amaravati',
    time: '3 hr',
    verified: true,
    body: ['రాష్ట్ర మంత్రివర్గం సమావేశంలో కొత్త ఐటీ పాలసీకి ఆమోదం లభించింది.']
  }, {
    id: 5,
    category: 'sports',
    layout: 'compact',
    headline: 'హోం టెస్ట్ సిరీస్‌కు భారత జట్టు ప్రకటన',
    source: 'Cricbuzz',
    time: '4 hr',
    verified: true,
    body: ['రాబోయే హోం టెస్ట్ సిరీస్‌కు భారత జట్టును బీసీసీఐ ప్రకటించింది.']
  }, {
    id: 6,
    category: 'crime',
    layout: 'compact',
    headline: 'నగరంలో సైబర్ మోసం ముఠా అరెస్ట్; రూ.2 కోట్లు స్వాధీనం',
    source: 'ABN',
    location: 'Guntur',
    time: '5 hr',
    body: ['పోలీసులు సైబర్ మోసాలకు పాల్పడుతున్న ముఠాను అరెస్ట్ చేశారు.']
  }],
  explore: [{
    category: 'politics',
    label: 'Politics'
  }, {
    category: 'crime',
    label: 'Crime'
  }, {
    category: 'cinema',
    label: 'Cinema'
  }, {
    category: 'sports',
    label: 'Sports'
  }, {
    category: 'jobs',
    label: 'Jobs'
  }, {
    category: 'business',
    label: 'Business'
  }, {
    category: 'education',
    label: 'Education'
  }, {
    category: 'health',
    label: 'Health'
  }, {
    category: 'weather',
    label: 'Weather'
  }, {
    category: 'astrology',
    label: 'Astrology'
  }, {
    category: 'gold',
    label: 'Gold'
  }, {
    category: 'tech',
    label: 'Tech'
  }],
  panchang: {
    tithi: 'Dashami',
    nakshatra: 'Uttara',
    rahu: '1:30–3:00 PM',
    lucky: '7 · Red'
  },
  poll: {
    q: 'కొత్త ఐటీ పాలసీతో మీ జిల్లాకు ఉద్యోగాలు వస్తాయా?',
    options: [{
      t: 'ఖచ్చితంగా వస్తాయి',
      v: 46
    }, {
      t: 'చూడాలి',
      v: 38
    }, {
      t: 'రావు',
      v: 16
    }],
    votes: '12.4K'
  },
  quiz: {
    tag: 'ఆరోగ్యం',
    q: 'రోజుకు ఎంత నీరు తాగాలి?',
    options: ['1 లీటర్', '2–3 లీటర్లు', '5 లీటర్లు'],
    answer: 1,
    fact: 'వైద్యుల ప్రకారం పెద్దలు రోజుకు 2–3 లీటర్ల నీరు తాగాలి — వేసవిలో ఇంకా ఎక్కువ.'
  },
  viral: {
    headline: 'వైరల్: గోదావరి వరదలో యువకుడి సాహసం — 3 గంటల్లో 2M వ్యూస్',
    views: '2.1M',
    shares: '48K',
    time: '3 hr'
  },
  suggest: ['cinema', 'jobs', 'astrology', 'health', 'sports'],
  engage: {
    politics: {
      type: 'poll',
      poll: {
        q: 'కొత్త ఐటీ పాలసీతో మీ జిల్లాకు ఉద్యోగాలు వస్తాయా?',
        options: [{
          t: 'ఖచ్చితంగా వస్తాయి',
          v: 46
        }, {
          t: 'చూడాలి',
          v: 38
        }, {
          t: 'రావు',
          v: 16
        }],
        votes: '12.4K'
      }
    },
    sports: {
      type: 'poll',
      poll: {
        q: 'హోం టెస్ట్ సిరీస్ ఎవరు గెలుస్తారు?',
        options: [{
          t: 'ఇండియా',
          v: 78
        }, {
          t: 'ఆస్ట్రేలియా',
          v: 14
        }, {
          t: 'డ్రా',
          v: 8
        }],
        votes: '31.2K'
      }
    },
    jobs: {
      type: 'poll',
      poll: {
        q: 'మీరు ఏ ఉద్యోగాలకు ప్రాధాన్యం ఇస్తారు?',
        options: [{
          t: 'ప్రభుత్వ',
          v: 64
        }, {
          t: 'ప్రైవేట్',
          v: 22
        }, {
          t: 'సొంత వ్యాపారం',
          v: 14
        }],
        votes: '8.9K'
      }
    },
    cinema: {
      type: 'quiz',
      quiz: {
        tag: 'సినిమా',
        q: 'తొలి తెలుగు టాకీ చిత్రం ఏది?',
        options: ['భక్త ప్రహ్లాద', 'మాయాబజార్', 'పాతాళ భైరవి'],
        answer: 0,
        fact: '1932లో విడుదలైన "భక్త ప్రహ్లాద" తొలి తెలుగు టాకీ చిత్రం.'
      }
    },
    health: {
      type: 'quiz',
      quiz: {
        tag: 'ఆరోగ్యం',
        q: 'రోజుకు ఎంత నీరు తాగాలి?',
        options: ['1 లీటర్', '2–3 లీటర్లు', '5 లీటర్లు'],
        answer: 1,
        fact: 'వైద్యుల ప్రకారం పెద్దలు రోజుకు 2–3 లీటర్ల నీరు తాగాలి — వేసవిలో ఇంకా ఎక్కువ.'
      }
    },
    crime: {
      type: 'poll',
      poll: {
        q: 'మీ ప్రాంతంలో రాత్రి భద్రత ఎలా ఉంది?',
        options: [{
          t: 'బాగుంది',
          v: 41
        }, {
          t: 'పర్వాలేదు',
          v: 35
        }, {
          t: 'బాగోలేదు',
          v: 24
        }],
        votes: '5.6K'
      }
    }
  },
  local: [{
    id: 'l1',
    category: 'crime',
    headline: 'బెంజ్ సర్కిల్ వద్ద ట్రాఫిక్ మళ్లింపు — ఫ్లైఓవర్ పనులు',
    source: 'City desk',
    time: '25 min'
  }, {
    id: 'l2',
    category: 'weather',
    headline: 'నగరంలో సాయంత్రం భారీ వర్షం అవకాశం; AQI 82',
    source: 'IMD',
    time: '40 min',
    verified: true
  }, {
    id: 'l3',
    category: 'jobs',
    headline: 'ఆటోనగర్‌లో ఉద్యోగ మేళా — 600 పోస్టులు, రేపు ఉదయం 10కి',
    source: 'tap2news',
    time: '1 hr'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/web/Sections.jsx
try { (() => {
// Marketing site body sections: languages, features, categories, publishers, footer.
function LangStrip({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-950)',
      padding: '56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 26,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, "One app. Every language."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink-300)'
    }
  }, "Each language is its own geo-fenced world. National news is shared; everything local stays local."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 14
    }
  }, data.langs.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    style: {
      background: 'var(--ink-900)',
      border: '1px solid var(--ink-800)',
      borderRadius: 'var(--r-card)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: '#fff',
      lineHeight: 1
    }
  }, l.native), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: '#fff'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-400)'
    }
  }, l.region)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: 32,
      background: l.color,
      borderRadius: 999
    }
  }))))));
}
function Features({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 44px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--brand-strong)'
    }
  }, "Why tap2news"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, "Built for how India actually reads news")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, data.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--red-50)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22,
    color: "var(--brand)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, f.body)))));
}
function CategoryBand({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunk)',
      padding: '52px 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)'
    }
  }, "Everything, colour-coded"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, data.categories.map(c => /*#__PURE__*/React.createElement(DS.CategoryChip, {
    key: c,
    category: c
  })))));
}
function Publishers({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand)',
      borderRadius: 'var(--r-xl)',
      padding: '48px 44px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 40,
      alignItems: 'center',
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.8)'
    }
  }, "For publishers & advertisers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, "Reach 50 million readers in their own language."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.9)'
    }
  }, "Syndicate your RSS, run sponsored stories, or target hyperlocal ads by district and language. Free onboarding, transparent analytics."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "inverse",
    size: "lg"
  }, "Become a publisher"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "soft",
    size: "lg"
  }, "Advertise"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, data.publisherStats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      background: 'rgba(255,255,255,.12)',
      borderRadius: 'var(--r-md)',
      padding: '18px 14px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: '#fff'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,.82)',
      marginTop: 4
    }
  }, l))))));
}
function Footer({
  data
}) {
  const cols = [['Product', ['Feed', 'Languages', 'Utilities', 'Voice & translate']], ['Company', ['About', 'Careers', 'Press', 'Contact']], ['Publishers', ['Syndicate RSS', 'Advertise', 'Analytics', 'Guidelines']], ['Legal', ['Privacy', 'Terms', 'Editorial policy', 'AI transparency']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-950)',
      color: '#fff',
      padding: '52px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-400)'
    }
  }, "tap2"), "news"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-400)',
      maxWidth: 240
    }
  }, "Multilingual, hyperlocal, AI-powered news for India. The news of your district, in your language.")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: '#fff',
      marginBottom: 12
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--ink-300)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid var(--ink-800)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--ink-400)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 tap2news. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Made in India \xB7 12 languages")));
}
Object.assign(window, {
  LangStrip,
  Features,
  CategoryBand,
  Publishers,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebShell.jsx
try { (() => {
// Marketing site sections. Composes DS components + local layout.
const DS = window.Ds2daynewsDesignSystem_0b44f3;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': 2
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
const wrap = {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 32px'
};
function NavBar({
  data
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'color-mix(in srgb, var(--paper) 86%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 23,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "tap2"), "news"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, data.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 500,
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--ink-800)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "Get the app")));
}
function Hero({
  data
}) {
  const h = data.hero;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 72,
      paddingBottom: 56,
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--brand-strong)',
      background: 'var(--red-50)',
      padding: '6px 12px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--brand)'
    }
  }), h.kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      textWrap: 'balance'
    }
  }, h.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, h.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "smartphone",
      size: 18
    })
  }, "Download free"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18
    })
  }, "Watch demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 34,
      marginTop: 40
    }
  }, h.stat.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, l))))), /*#__PURE__*/React.createElement(PhoneMock, {
    data: data
  }));
}

// Simplified phone showing a live feed built from DS NewsCards.
function PhoneMock({
  data
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center',
      width: 300,
      height: 600,
      background: 'var(--white)',
      borderRadius: 40,
      boxShadow: '0 30px 70px rgba(12,20,36,.22), 0 0 0 10px #11151c',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(DS.BreakingTicker, {
    label: "Live",
    items: ['Cabinet clears new IT policy', 'Rain alert for coastal districts', 'Sensex up 400 pts']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 44,
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '44px 12px 0'
    }
  }, data.headlines.map((s, i) => /*#__PURE__*/React.createElement(DS.NewsCard, {
    key: i,
    layout: s.layout,
    category: s.category,
    breaking: s.breaking,
    headline: s.headline,
    summary: s.summary,
    source: s.source,
    location: s.location,
    time: s.time,
    verified: s.verified,
    aiRewritten: s.aiRewritten
  }))));
}
Object.assign(window, {
  DS,
  Icon,
  wrap,
  NavBar,
  Hero,
  PhoneMock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
// Content for the tap2news marketing site.
window.WEB_DATA = {
  nav: ['Product', 'Languages', 'For Publishers', 'Advertise', 'About'],
  hero: {
    kicker: 'Multilingual · Hyperlocal · AI-powered',
    title: 'The news of your district, in your language.',
    sub: 'One app for every Indian language — geo-fenced to where you live. Breaking alerts, cinema, jobs, cricket, gold rates, weather and astrology, curated and rewritten by AI, verified by editors.',
    stat: [['12', 'Languages'], ['50M+', 'Readers'], ['600+', 'Districts'], ['1.2K', 'Sources']]
  },
  langs: [{
    native: 'తెలుగు',
    name: 'Telugu',
    region: 'AP · Telangana',
    color: 'var(--cat-politics)'
  }, {
    native: 'தமிழ்',
    name: 'Tamil',
    region: 'Tamil Nadu',
    color: 'var(--cat-sports)'
  }, {
    native: 'ಕನ್ನಡ',
    name: 'Kannada',
    region: 'Karnataka',
    color: 'var(--cat-cinema)'
  }, {
    native: 'മലയാളം',
    name: 'Malayalam',
    region: 'Kerala',
    color: 'var(--cat-jobs)'
  }, {
    native: 'हिन्दी',
    name: 'Hindi',
    region: 'GPS-based',
    color: 'var(--brand)'
  }, {
    native: 'English',
    name: 'English',
    region: 'National',
    color: 'var(--cat-business)'
  }],
  features: [{
    icon: 'map-pin',
    title: 'Geo-fenced feed',
    body: 'Pick a language and the whole app follows — politics, districts, cinema, jobs, weather. No noise from other states.'
  }, {
    icon: 'zap',
    title: 'Breaking in seconds',
    body: 'Real-time ingestion from 1,200+ sources, deduped and ranked so the story reaches you before anyone else.'
  }, {
    icon: 'sparkles',
    title: 'AI rewritten, editor verified',
    body: 'Every story is rewritten for clarity, fact-checked, and labelled — never copied, never hallucinated.'
  }, {
    icon: 'gem',
    title: 'Daily utilities built in',
    body: 'Gold & silver rates, Sensex/Nifty, live cricket, weather & AQI, panchang and horoscope — in one tab.'
  }, {
    icon: 'volume-2',
    title: 'Listen & translate',
    body: 'Voice summaries for every article and one-tap translation across all supported languages.'
  }, {
    icon: 'users',
    title: 'Citizen journalism',
    body: 'District correspondents and reader reports, moderated by AI, bring true hyperlocal coverage.'
  }],
  categories: ['breaking', 'politics', 'cinema', 'sports', 'jobs', 'business', 'crime', 'weather', 'gold', 'health', 'education', 'astrology'],
  headlines: [{
    category: 'breaking',
    breaking: true,
    layout: 'hero',
    headline: 'Heavy rain alert for coastal districts through the weekend',
    summary: 'IMD warns of squally winds and localized flooding; fishermen advised not to venture into the sea.',
    source: 'TV9',
    location: 'Vijayawada',
    time: '8 min',
    verified: true
  }, {
    category: 'jobs',
    layout: 'row',
    headline: 'APPSC releases 1,200 Group-II vacancies; apply by month end',
    source: 'tap2news',
    location: 'AP',
    time: '2 hr',
    aiRewritten: true
  }, {
    category: 'cinema',
    layout: 'row',
    headline: "Tollywood star's next locked for Sankranti release",
    source: 'Sakshi',
    location: 'Hyderabad',
    time: '1 hr'
  }, {
    category: 'sports',
    layout: 'compact',
    headline: 'India name squad for the home Test series',
    source: 'Cricbuzz',
    time: '4 hr',
    verified: true
  }],
  publisherStats: [['+38%', 'avg. reach uplift'], ['0', 'setup cost'], ['24hr', 'onboarding']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FeaturedCarousel = __ds_scope.FeaturedCarousel;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.SourceStamp = __ds_scope.SourceStamp;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CATEGORY_COLORS = __ds_scope.CATEGORY_COLORS;

__ds_ns.CategoryChip = __ds_scope.CategoryChip;

__ds_ns.BreakingTicker = __ds_scope.BreakingTicker;

__ds_ns.LanguagePill = __ds_scope.LanguagePill;

__ds_ns.SectionTabs = __ds_scope.SectionTabs;

__ds_ns.DataTile = __ds_scope.DataTile;

})();
