/* @ds-bundle: {"format":4,"namespace":"Ds2daynewsDesignSystem_0b44f3","components":[{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"SourceStamp","sourcePath":"components/content/SourceStamp.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CATEGORY_COLORS","sourcePath":"components/core/CategoryChip.jsx"},{"name":"CategoryChip","sourcePath":"components/core/CategoryChip.jsx"},{"name":"BreakingTicker","sourcePath":"components/feedback/BreakingTicker.jsx"},{"name":"LanguagePill","sourcePath":"components/navigation/LanguagePill.jsx"},{"name":"SectionTabs","sourcePath":"components/navigation/SectionTabs.jsx"},{"name":"DataTile","sourcePath":"components/widgets/DataTile.jsx"}],"sourceHashes":{"components/content/NewsCard.jsx":"68e842503326","components/content/SourceStamp.jsx":"dad8c47bed52","components/core/Badge.jsx":"93fd875aa7fa","components/core/Button.jsx":"cf2be1ade1c0","components/core/CategoryChip.jsx":"eee6d91756b4","components/feedback/BreakingTicker.jsx":"2e220a6fec15","components/navigation/LanguagePill.jsx":"8ea6e8ae54cc","components/navigation/SectionTabs.jsx":"6900be02aabd","components/widgets/DataTile.jsx":"58d05be4a14b","ui_kits/admin/AdminShell.jsx":"a5b81b7325cb","ui_kits/admin/AnalyticsScreen.jsx":"e35d4f0caa48","ui_kits/admin/ApiScreen.jsx":"9fb80eb25ab2","ui_kits/admin/BackendScreen.jsx":"080d7d9d61b9","ui_kits/admin/IngestionScreen.jsx":"32633871341a","ui_kits/admin/ModerationScreen.jsx":"ab1b648c69ac","ui_kits/admin/MonetizationScreen.jsx":"25636b088b96","ui_kits/admin/OverviewScreen.jsx":"e6c4535b25f5","ui_kits/admin/PublishScreen.jsx":"4cd88f3db6fd","ui_kits/admin/PushScreen.jsx":"aa1453f84b73","ui_kits/admin/SeoScreen.jsx":"53127b5324d9","ui_kits/admin/SourcesScreen.jsx":"e2a1781f4fd5","ui_kits/admin/UsersScreen.jsx":"a0bfae97eb46","ui_kits/admin/data.js":"da1715a79dfa","ui_kits/app/AppShell.jsx":"2baaff6bb9a4","ui_kits/app/ArticleScreen.jsx":"7f3231857f6d","ui_kits/app/ExploreScreen.jsx":"27053e8920ea","ui_kits/app/FeedScreen.jsx":"60b7f4ecc241","ui_kits/app/UtilityScreen.jsx":"e41e34d15010","ui_kits/app/data.js":"a4ee14eaf73d","ui_kits/web/Sections.jsx":"8a1f4c42e0d7","ui_kits/web/WebShell.jsx":"03505d350482","ui_kits/web/data.js":"85f389537ab4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds2daynewsDesignSystem_0b44f3 = window.Ds2daynewsDesignSystem_0b44f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/SourceStamp.jsx
try { (() => {
/** Source attribution + timestamp line under a headline. Reinforces trust & aggregation transparency. */
function SourceStamp({
  source = '2daynews',
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
  tech: 'var(--cat-tech)'
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

// components/content/NewsCard.jsx
try { (() => {
/** The workhorse feed card. Layouts: 'row' (thumb right), 'hero' (image top), 'compact' (text only). */
function NewsCard({
  headline = 'Headline goes here',
  summary,
  category = 'politics',
  source = '2daynews',
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
  }, "2N");
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
/** Language selector pill — shows script glyph + native name. Core to 2daynews geo-fencing. */
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
/** Utility data tile — gold rate, market index, weather, cricket score. Mono numerals, delta arrow. */
function DataTile({
  kind = 'gold',
  label,
  value,
  unit,
  sub,
  delta,
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
      flexDirection: 'column',
      gap: 6,
      padding: 12,
      minWidth: 130,
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-md)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: k.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, unit)), (sub || delta != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12
    }
  }, delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: up ? 'var(--success)' : 'var(--danger)'
    }
  }, up ? '▲' : '▼', " ", Math.abs(delta)), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, sub)));
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
  }, "2day"), "news"), /*#__PURE__*/React.createElement("span", {
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
  }, "2N"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "2daynews"), /*#__PURE__*/React.createElement("div", {
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
  }, "2daynews"), /*#__PURE__*/React.createElement("div", {
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
// Sample data for the 2daynews Admin Console.
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
    source: '2daynews desk',
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
    seoTitle: 'AP coastal districts rain alert — IMD warning, weekend forecast | 2daynews',
    slug: 'ap-coastal-rain-alert-weekend-imd',
    metaDescription: 'IMD issues heavy rain alert for Andhra Pradesh coastal districts. Squally winds, local flooding likely. Fishermen advised not to venture into the sea.',
    tags: ['Weather', 'IMD', 'Andhra Pradesh', 'Rain alert', 'Coastal'],
    push: 'Heavy rain alert for coastal AP this weekend — stay updated on 2daynews',
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
      email: 'priya@2daynews.in',
      role: 'Editor',
      desk: 'Telugu',
      status: 'active',
      init: 'PR',
      color: 'var(--brand)'
    }, {
      name: 'Arun Kumar',
      email: 'arun@2daynews.in',
      role: 'Admin',
      desk: 'All',
      status: 'active',
      init: 'AK',
      color: 'var(--cat-politics)'
    }, {
      name: 'Meera Nair',
      email: 'meera@2daynews.in',
      role: 'Moderator',
      desk: 'Malayalam',
      status: 'active',
      init: 'MN',
      color: 'var(--cat-sports)'
    }, {
      name: 'Ravi Teja',
      email: 'ravi@2daynews.in',
      role: 'Correspondent',
      desk: 'Guntur dist.',
      status: 'active',
      init: 'RT',
      color: 'var(--cat-jobs)'
    }, {
      name: 'Suresh B',
      email: 'suresh@2daynews.in',
      role: 'SEO',
      desk: 'Growth',
      status: 'invited',
      init: 'SB',
      color: 'var(--cat-cinema)'
    }, {
      name: 'Kavya S',
      email: 'kavya@2daynews.in',
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
  onLangTap
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
  }, "2day"), "news"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
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
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '0 var(--gutter) 10px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5
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
    style: {
      flex: '0 0 auto'
    }
  }))));
}

// Bottom tab bar.
function BottomNav({
  tab,
  onTab
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
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      paddingBottom: 6
    }
  }, items.map(it => {
    const on = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onTab(it.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '10px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: on ? 'var(--brand)' : 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 22,
      color: on ? 'var(--brand)' : 'var(--ink-400)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: on ? 700 : 500,
        fontSize: 10.5
      }
    }, it.label));
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
  }, "2N"), /*#__PURE__*/React.createElement("div", {
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
  onOpen
}) {
  const [sec, setSec] = React.useState('breaking');
  const stories = sec === 'breaking' ? data.stories : data.stories.filter(s => s.category === sec).length ? data.stories.filter(s => s.category === sec) : data.stories;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.BreakingTicker, {
    label: "Breaking",
    items: data.breaking
  }), /*#__PURE__*/React.createElement(DataRail, {
    rail: data.rail
  }), /*#__PURE__*/React.createElement(DS.SectionTabs, {
    value: sec,
    onChange: setSec,
    items: data.sections
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--stack-gap)',
      padding: 'var(--gutter)'
    }
  }, stories.map(s => /*#__PURE__*/React.createElement(DS.NewsCard, {
    key: s.id,
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
    onClick: () => onOpen(s)
  }))));
}
window.FeedScreen = FeedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FeedScreen.jsx", error: String((e && e.message) || e) }); }

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
// Sample content for the 2daynews app UI kit. Telugu-first hyperlocal feed (geo-fenced to AP/Telangana).
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
  sections: ['breaking', 'politics', 'cinema', 'sports', 'jobs', 'crime', 'business', 'weather', 'gold'],
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
    source: '2daynews',
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
  }
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
  }, "Why 2daynews"), /*#__PURE__*/React.createElement("h2", {
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
  }, "2day"), "news"), /*#__PURE__*/React.createElement("p", {
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
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 2daynews. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Made in India \xB7 12 languages")));
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
  }, "2day"), "news"), /*#__PURE__*/React.createElement("nav", {
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
// Content for the 2daynews marketing site.
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
    source: '2daynews',
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
