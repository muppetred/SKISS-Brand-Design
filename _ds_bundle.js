/* @ds-bundle: {"format":4,"namespace":"SKISSDesignSystem_e0846a","components":[{"name":"Capsule","sourcePath":"components/blocks/Capsule.jsx"},{"name":"KeyFigure","sourcePath":"components/blocks/KeyFigure.jsx"},{"name":"NumberedCard","sourcePath":"components/blocks/NumberedCard.jsx"},{"name":"PostFrame","sourcePath":"components/blocks/PostFrame.jsx"},{"name":"PriceTable","sourcePath":"components/blocks/PriceTable.jsx"},{"name":"ProcessSteps","sourcePath":"components/blocks/ProcessSteps.jsx"},{"name":"Quote","sourcePath":"components/blocks/Quote.jsx"},{"name":"SectionTitle","sourcePath":"components/blocks/SectionTitle.jsx"},{"name":"SlideFrame","sourcePath":"components/blocks/SlideFrame.jsx"},{"name":"StepChevrons","sourcePath":"components/blocks/StepChevrons.jsx"},{"name":"AccentWord","sourcePath":"components/brand/AccentWord.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Signature","sourcePath":"components/brand/Signature.jsx"},{"name":"ThemeSection","sourcePath":"components/brand/ThemeSection.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/blocks/Capsule.jsx":"1d34419410a3","components/blocks/KeyFigure.jsx":"3e486b6d8ec2","components/blocks/NumberedCard.jsx":"4519d1b2a43f","components/blocks/PostFrame.jsx":"18a92eaf7cc7","components/blocks/PriceTable.jsx":"53654c162589","components/blocks/ProcessSteps.jsx":"38ab05f26c77","components/blocks/Quote.jsx":"fcaa73ced7d3","components/blocks/SectionTitle.jsx":"208d5990b6d0","components/blocks/SlideFrame.jsx":"f97d6f8d45d2","components/blocks/StepChevrons.jsx":"27dd9a5a7952","components/brand/AccentWord.jsx":"5eeac34c5fb8","components/brand/Logo.jsx":"4bd5087e10ae","components/brand/Signature.jsx":"ed2cab5c8520","components/brand/ThemeSection.jsx":"57b31e30393c","components/core/Badge.jsx":"4cf717f9a8bb","components/core/Button.jsx":"454e4311b87c","components/core/Card.jsx":"dbe5a1c3b2bd","components/core/Eyebrow.jsx":"e9d229fadbad","components/core/Input.jsx":"05b3ad6fef2b","export/ds-base.js":"c6db80d89673","ui_kits/deck/Deck.jsx":"e83af29d5cb4","ui_kits/deck/DeckParts.jsx":"6b5e4b8cd4ba","ui_kits/deck/SlideCapsules.jsx":"3db16515077f","ui_kits/deck/SlideChevrons.jsx":"388164451dab","ui_kits/deck/SlideCover.jsx":"725554336ca3","ui_kits/deck/SlideEnd.jsx":"363377969067","ui_kits/deck/SlideFigures.jsx":"97f9bbcef35c","ui_kits/deck/SlidePricing.jsx":"692cef575dda","ui_kits/deck/SlideQuote.jsx":"d23eb3184e66","ui_kits/deck/SlideSection.jsx":"388548921dc2","ui_kits/deck/SlideSteps.jsx":"9bb0f5c15ee9","ui_kits/deck/SlideTeam.jsx":"9487a288ca7b","ui_kits/documents/DocOnePager.jsx":"27504dd046c3","ui_kits/social/SocialPostCover.jsx":"dbb037a55c6f","ui_kits/social/SocialPostInside.jsx":"ce0d83917ec3","ui_kits/social/SocialPostQuote.jsx":"0c38b00e7565","ui_kits/social/SocialReelCover.jsx":"2ec5dd109ba2","ui_kits/website/Commun.jsx":"c4340a59370f","ui_kits/website/Contact.jsx":"93d28393d5f9","ui_kits/website/Equipe.jsx":"89fe39607469","ui_kits/website/Footer.jsx":"e442b5b8e358","ui_kits/website/Hero.jsx":"12e18567719f","ui_kits/website/Nav.jsx":"d956470f1cd7","ui_kits/website/Pages.jsx":"e80ebbb3ea9a","ui_kits/website/Realisations.jsx":"e3f5a98f81f0","ui_kits/website/Services.jsx":"055c9911da54"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SKISSDesignSystem_e0846a = window.SKISSDesignSystem_e0846a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/Capsule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS Capsule : bande pleine largeur en pilule (1720 x 169 dans le deck), texte Hind Bold 56 px centré.
 * Fond blanc à 62 % et texte encre sur couleur ; le cadre (SlideFrame, PostFrame) fournit la surface adaptée
 * sur fond clair (crème opaque) ou sombre via --sk-card-bg et --sk-card-text.
 */
function Capsule({
  children,
  className = "",
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-capsule ${className}`.trim(),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: 169,
      padding: "24px 96px",
      borderRadius: "var(--radius-pill)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      border: "1px solid var(--sk-card-border, transparent)",
      color: "var(--sk-card-text, var(--ink))",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-capsule)",
      lineHeight: "var(--leading-deck)",
      textAlign: "center",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Capsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Capsule.jsx", error: String((e && e.message) || e) }); }

// components/blocks/KeyFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS KeyFigure : chiffre clé en Khand 144 px et légende en Hind 36 px.
 * Couleur du thème englobant (--text) : encre sur le dégradé deck, blanc sur l'aplat brûlé ou le fond sombre.
 */
function KeyFigure({
  value,
  caption,
  align = "left",
  className = "",
  style = {},
  ...props
}) {
  const center = align === "center";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-key-figure ${className}`.trim(),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: center ? "center" : "flex-start",
      gap: 12,
      textAlign: center ? "center" : "left",
      color: "var(--text)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--slide-figure)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, value), caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 480,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { KeyFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/KeyFigure.jsx", error: String((e && e.message) || e) }); }

// components/blocks/NumberedCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Les quatre nuances, du foncé au clair, dans l'ordre de numérotation du brief.
const SHADES = {
  1: "var(--orange-burnt)",
  2: "var(--orange-deep)",
  3: "var(--orange-light)",
  4: "var(--peach)"
};

// Pictogrammes Lucide (le jeu du site, licence ISC), tracés en 24 x 24, trait par défaut de 2.
const ICONS = {
  search: [["circle", {
    cx: 11,
    cy: 11,
    r: 8
  }], ["path", {
    d: "m21 21-4.3-4.3"
  }]],
  compass: [["path", {
    d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
  }], ["circle", {
    cx: 12,
    cy: 12,
    r: 10
  }]],
  wrench: [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }]],
  "trending-up": [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17"
  }], ["polyline", {
    points: "16 7 22 7 22 13"
  }]],
  camera: [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }], ["circle", {
    cx: 12,
    cy: 13,
    r: 3
  }]],
  video: [["path", {
    d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
  }], ["rect", {
    x: 2,
    y: 6,
    width: 14,
    height: 12,
    rx: 2
  }]],
  target: [["circle", {
    cx: 12,
    cy: 12,
    r: 10
  }], ["circle", {
    cx: 12,
    cy: 12,
    r: 6
  }], ["circle", {
    cx: 12,
    cy: 12,
    r: 2
  }]],
  "calendar-check": [["path", {
    d: "M8 2v4"
  }], ["path", {
    d: "M16 2v4"
  }], ["rect", {
    width: 18,
    height: 18,
    x: 3,
    y: 4,
    rx: 2
  }], ["path", {
    d: "M3 10h18"
  }], ["path", {
    d: "m9 16 2 2 4-4"
  }]]
};
function LineIcon({
  name,
  size
}) {
  const shapes = ICONS[name];
  if (!shapes) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, shapes.map(([Tag, attrs], i) => /*#__PURE__*/React.createElement(Tag, _extends({
    key: i
  }, attrs))));
}

/**
 * SKISS NumberedCard : pilule verticale (17,4 % de la largeur d'une slide dans le deck), disque plein en haut,
 * chiffre Khand 132 px en encre, libellé Khand 56 px en capitales, pictogramme au trait en bas.
 * Le disque prend la nuance shade (1 à 4, du foncé au clair) ; par défaut, celle qui suit le numéro.
 */
function NumberedCard({
  number,
  label,
  shade,
  icon,
  className = "",
  style = {},
  ...props
}) {
  const n = Number(number);
  const s = SHADES[shade] ? shade : Number.isFinite(n) && n > 0 ? (n - 1) % 4 + 1 : 1;
  const iconEl = typeof icon === "string" ? /*#__PURE__*/React.createElement(LineIcon, {
    name: icon,
    size: 120
  }) : icon;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-numbered-card ${className}`.trim(),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
      minHeight: 640,
      padding: 28,
      borderRadius: "var(--radius-pill)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      border: "1px solid var(--sk-card-border, transparent)",
      color: "var(--sk-card-text, var(--ink))",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: "100%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      background: SHADES[s],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--slide-number)",
      lineHeight: 1
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 8px",
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--slide-label)",
      lineHeight: "var(--leading-deck)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase"
    }
  }, label), iconEl ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      paddingBottom: 56,
      lineHeight: 0
    }
  }, iconEl) : null);
}
Object.assign(__ds_scope, { NumberedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/NumberedCard.jsx", error: String((e && e.message) || e) }); }

// components/blocks/PostFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Racine des assets, calculée depuis l'emplacement du bundle compilé.
const SK_ROOT = document.currentScript && document.currentScript.src ? new URL(".", document.currentScript.src).href : window.SKISS_ASSET_BASE || "";

// Formats Instagram. Marges du post mesurées sur canva-wilmeyer-01 (108 px sur les côtés, 110 px en bas).
// Zone sûre du reel (proposition) : 14 % en haut, 35 % en bas, hors interface Instagram.
const FORMATS = {
  post: {
    w: 1080,
    h: 1350,
    top: 108,
    bottom: 110
  },
  reel: {
    w: 1080,
    h: 1920,
    top: 270,
    bottom: 672
  }
};

// Signature de post (proposition) : 200 px de large, proportions du deck (spirale 55, wordmark 45, écart 8).
const SIG_W = 200;
const SIG = {
  spiralH: 55 * SIG_W / 225,
  wordH: 45 * SIG_W / 225,
  gap: 8 * SIG_W / 225
};
const SPIRAL_RATIO = 334 / 349;
const WORDMARK_RATIO = 3000 / 822;
const CARDS_ON_COLOR = {
  "--sk-card-bg": "var(--capsule-bg)",
  "--sk-card-solid": "var(--cream)",
  "--sk-card-text": "var(--ink)",
  "--sk-card-border": "transparent",
  "--sk-card-logo-black": "block",
  "--sk-card-logo-white": "none"
};
const CARDS_ON_DARK = {
  "--sk-card-bg": "var(--dark-800)",
  "--sk-card-solid": "var(--dark-800)",
  "--sk-card-text": "var(--dark-text)",
  "--sk-card-border": "var(--dark-600)",
  "--sk-card-logo-black": "none",
  "--sk-card-logo-white": "block"
};
const LIGHT_TOKENS = {
  "--background": "var(--white)",
  "--surface": "var(--white)",
  "--surface-soft": "var(--cream)",
  "--text": "var(--ink)",
  "--text-muted": "var(--ink-o72)",
  "--heading-accent": "var(--orange-burnt)",
  "--border": "var(--ink-o14)",
  "--logo-tone": "black"
};

// Signature noire dans la moitié claire du dégradé social (15,72:1 en bas à droite).
const THEMES = {
  social: {
    className: "theme-social",
    tone: "black",
    vars: CARDS_ON_COLOR
  },
  light: {
    className: "",
    tone: "black",
    vars: {
      ...LIGHT_TOKENS,
      ...CARDS_ON_COLOR,
      "--sk-card-bg": "var(--cream)"
    }
  },
  cream: {
    className: "theme-cream",
    tone: "black",
    vars: {
      ...CARDS_ON_COLOR,
      "--sk-card-bg": "var(--white)",
      "--sk-card-solid": "var(--white)"
    }
  },
  dark: {
    className: "theme-dark",
    tone: "white",
    vars: CARDS_ON_DARK
  },
  burnt: {
    className: "theme-burnt",
    tone: "white",
    vars: CARDS_ON_COLOR
  }
};

// Formes organiques en S, plus claires que le fond, relevées sur skiss-visuel-instagram-2026.png.
// Tracées sur 1080 x 1350 ; en reel, les ordonnées suivent la hauteur.
function SocialShapes({
  w,
  h
}) {
  const k = h / 1350;
  const y = v => Math.round(v * k);
  const shapes = [{
    fill: "var(--shape-1)",
    opacity: 0.6,
    d: `M640 0C560 ${y(130)} 500 ${y(270)} 530 ${y(410)}C570 ${y(600)} 720 ${y(720)} 880 ${y(800)}C990 ${y(855)} 1050 ${y(930)} 1080 ${y(1000)}L1080 0Z`
  }, {
    fill: "var(--shape-2)",
    opacity: 0.65,
    d: `M0 ${y(1085)}C170 ${y(1035)} 330 ${y(1060)} 480 ${y(1120)}C640 ${y(1185)} 770 ${y(1250)} 890 ${y(1235)}C990 ${y(1222)} 1050 ${y(1160)} 1080 ${y(1110)}L1080 ${h}L0 ${h}Z`
  }, {
    fill: "var(--shape-3)",
    opacity: 0.75,
    d: `M0 ${y(1290)}C130 ${y(1235)} 270 ${y(1250)} 390 ${y(1300)}C430 ${y(1318)} 470 ${y(1336)} 505 ${h}L0 ${h}Z`
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: w,
    height: h,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: -1,
      display: "block",
      pointerEvents: "none"
    }
  }, shapes.map((s, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: s.d,
    style: {
      fill: s.fill,
      opacity: s.opacity
    }
  })));
}
function FrameSignature({
  tone,
  src,
  inset,
  bottom
}) {
  const t = tone === "black" ? "black" : "white";
  const spiralSrc = src && src.spiral || `${SK_ROOT}assets/logos/spiral-${t}.png`;
  const wordmarkSrc = src && src.wordmark || `${SK_ROOT}assets/logos/wordmark-${t}.png`;
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "SKISS",
    style: {
      position: "absolute",
      zIndex: 2,
      right: inset,
      bottom,
      display: "flex",
      alignItems: "center",
      gap: SIG.gap,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: spiralSrc,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      height: SIG.spiralH,
      width: SIG.spiralH * SPIRAL_RATIO,
      maxWidth: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: wordmarkSrc,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      height: SIG.wordH,
      width: SIG.wordH * WORDMARK_RATIO,
      maxWidth: "none"
    }
  }));
}

/**
 * SKISS PostFrame : cadre Instagram 1080 x 1350 (post) ou 1080 x 1920 (reel).
 * Thème social par défaut : dégradé social et formes en S translucides, signature noire en bas à droite.
 * Le contenu se pose en bas de la zone utile ; scale réduit l'affichage par transform (nombre ou "fit").
 */
function PostFrame({
  format = "post",
  theme = "social",
  shapes = true,
  signature = true,
  signatureTone = "auto",
  signatureSrc,
  scale = 1,
  children,
  className = "",
  style = {},
  ...props
}) {
  const f = FORMATS[format] || FORMATS.post;
  const t = THEMES[theme] || THEMES.social;
  const tone = signatureTone === "auto" ? t.tone : signatureTone;
  const fit = scale === "fit";
  const boxRef = React.useRef(null);
  const [fitScale, setFitScale] = React.useState(0);
  React.useLayoutEffect(() => {
    if (!fit || !boxRef.current) return undefined;
    const el = boxRef.current;
    const update = () => setFitScale(el.clientWidth / f.w);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [fit, f.w]);
  const bottomPad = signature ? f.bottom + SIG.spiralH + 48 : f.bottom;
  const frame = /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-post ${t.className} ${className}`.trim(),
    style: {
      position: "relative",
      isolation: "isolate",
      width: f.w,
      height: f.h,
      overflow: "hidden",
      background: "var(--background)",
      color: "var(--text)",
      fontFamily: "var(--font-sans)",
      ...t.vars,
      ...style
    }
  }, props), theme === "social" && shapes ? /*#__PURE__*/React.createElement(SocialShapes, {
    w: f.w,
    h: f.h
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%",
      padding: `${f.top}px var(--post-margin-x) ${bottomPad}px`
    }
  }, children), signature ? /*#__PURE__*/React.createElement(FrameSignature, {
    tone: tone,
    src: signatureSrc,
    inset: "var(--post-margin-x)",
    bottom: f.bottom
  }) : null);
  const s = fit ? fitScale : Number(scale) || 1;
  if (!fit && s === 1) return frame;
  return /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    className: "sk-post-scaler",
    style: {
      position: "relative",
      width: fit ? "100%" : f.w * s,
      height: f.h * s
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: f.w,
      height: f.h,
      transform: `scale(${s})`,
      transformOrigin: "0 0"
    }
  }, frame));
}
Object.assign(__ds_scope, { PostFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/PostFrame.jsx", error: String((e && e.message) || e) }); }

// components/blocks/PriceTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Espaces insécables entre les tranches de milliers, avant € et %, et devant « / mois » (« 1 400 € »).
function nb(v) {
  if (typeof v !== "string") return v;
  return v.replace(/(\d) (?=\d{3}(?!\d))/g, "$1\u00A0").replace(/ (€|%)/g, "\u00A0$1").replace(/ \/ /g, "\u00A0/ ");
}
const COLS = "minmax(0, 1.5fr) minmax(0, 1fr) minmax(0, 0.9fr)";

/**
 * SKISS PriceTable : tableau prestation, durée, prix pour une slide sur fond clair.
 * Chaque ligne est une carte crème opaque (--sk-card-solid) ; montants en gras, alignés à droite, insécables.
 */
function PriceTable({
  rows = [],
  headers = ["Prestation", "Durée", "Prix"],
  note,
  className = "",
  style = {},
  ...props
}) {
  const cell = {
    padding: "0 8px"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-price-table ${className}`.trim(),
    style: {
      width: "100%",
      color: "var(--text)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    role: "table",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "row",
    style: {
      display: "grid",
      gridTemplateColumns: COLS,
      alignItems: "end",
      padding: "0 48px 4px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-min)",
      lineHeight: "var(--leading-deck)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase"
    }
  }, headers.map((h, i) => /*#__PURE__*/React.createElement("span", {
    role: "columnheader",
    key: i,
    style: {
      ...cell,
      textAlign: i === 2 ? "right" : "left"
    }
  }, h))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    role: "row",
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: COLS,
      alignItems: "center",
      minHeight: 68,
      padding: "12px 48px",
      borderRadius: "var(--radius-card-slide)",
      background: "var(--sk-card-solid, var(--cream))",
      color: "var(--sk-card-text, var(--ink))",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "cell",
    style: cell
  }, r.service), /*#__PURE__*/React.createElement("span", {
    role: "cell",
    style: cell
  }, nb(r.duration)), /*#__PURE__*/React.createElement("span", {
    role: "cell",
    style: {
      ...cell,
      textAlign: "right",
      fontWeight: "var(--fw-bold)",
      whiteSpace: "nowrap"
    }
  }, nb(r.price))))), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      padding: "0 56px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-min)",
      lineHeight: "var(--leading-deck)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { PriceTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/PriceTable.jsx", error: String((e && e.message) || e) }); }

// components/blocks/ProcessSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Arrow() {
  // Flèche pleine : couleur du thème (encre sur le dégradé deck, où le blanc tombe à 2,69:1 au centre).
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "84",
    height: "84",
    viewBox: "0 0 24 24",
    style: {
      display: "block",
      fill: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 9h11V4l9 8-9 8v-5H2z"
  })));
}

/**
 * SKISS ProcessSteps : trois cartes claires reliées par des flèches pleines (deck p29).
 * Titre de carte en Khand Bold 40 px, texte en Hind 36 px ; rayon des cartes de slide (46 px).
 */
function ProcessSteps({
  steps = [],
  className = "",
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: `sk-process-steps ${className}`.trim(),
    style: {
      display: "flex",
      alignItems: "stretch",
      width: "100%",
      margin: 0,
      padding: 0,
      listStyle: "none",
      ...style
    }
  }, props), steps.map((step, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement(Arrow, null) : null, /*#__PURE__*/React.createElement("li", {
    style: {
      flex: "1 1 0",
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "48px 44px",
      textAlign: "center",
      borderRadius: "var(--radius-card-slide)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      border: "1px solid var(--sk-card-border, transparent)",
      color: "var(--sk-card-text, var(--ink))"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-card-title)",
      lineHeight: "var(--leading-deck)"
    }
  }, step.title), step.text ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)"
    }
  }, step.text) : null))));
}
Object.assign(__ds_scope, { ProcessSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Racine des assets, calculée depuis l'emplacement du bundle compilé.
const SK_ROOT = document.currentScript && document.currentScript.src ? new URL(".", document.currentScript.src).href : window.SKISS_ASSET_BASE || "";
const SPIRAL_H = 228; // hauteur de la spirale dans la citation du deck (p3), sous le plafond de 350 px
const SPIRAL_RATIO = 334 / 349;
function Spiral({
  tone,
  src
}) {
  const size = {
    height: SPIRAL_H,
    width: SPIRAL_H * SPIRAL_RATIO,
    maxWidth: "none"
  };
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      ...size
    }
  });
  const black = `${SK_ROOT}assets/logos/spiral-black.png`;
  const white = `${SK_ROOT}assets/logos/spiral-white.png`;
  if (tone === "black" || tone === "white") {
    return /*#__PURE__*/React.createElement("img", {
      src: tone === "black" ? black : white,
      alt: "",
      draggable: false,
      style: {
        display: "block",
        ...size
      }
    });
  }
  // auto : noire sur carte claire, blanche sur carte sombre, selon la surface fournie par le cadre.
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: black,
    alt: "",
    draggable: false,
    style: {
      display: "var(--sk-card-logo-black, block)",
      ...size
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: white,
    alt: "",
    draggable: false,
    style: {
      display: "var(--sk-card-logo-white, none)",
      ...size
    }
  }));
}

/**
 * SKISS Quote : grande carte claire (1722 x 870 dans le deck), spirale à gauche, citation en Khand Regular 108 px
 * entre guillemets français (ajoutés par le composant, espace fine insécable à l'intérieur), auteur en Hind Bold 36 px.
 */
function Quote({
  children,
  author,
  spiral = true,
  spiralTone = "auto",
  src,
  className = "",
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: `sk-quote ${className}`.trim(),
    style: {
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      gap: 64,
      width: "100%",
      minHeight: 560,
      margin: 0,
      padding: "80px 120px 80px 96px",
      borderRadius: "var(--radius-card-slide)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      border: "1px solid var(--sk-card-border, transparent)",
      color: "var(--sk-card-text, var(--ink))",
      ...style
    }
  }, props), spiral ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 300px",
      display: "flex",
      justifyContent: "center",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Spiral, {
    tone: spiralTone,
    src: src
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--slide-quote)",
      lineHeight: "var(--leading-deck)",
      textWrap: "balance"
    }
  }, "\xAB", "\u202F", children, "\u202F", "\xBB"), author ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 40,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)"
    }
  }, author) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Quote.jsx", error: String((e && e.message) || e) }); }

// components/blocks/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS SectionTitle : mot d'intercalaire en Khand Regular 230 px, en capitales, centré.
 * tone "auto" : couleur du thème (encre sur le dégradé deck). tone "white" : blanc sur un voile encre à 41 %
 * (4,5:1 au bord le plus clair du dégradé), posé sur tout le cadre positionné le plus proche (SlideFrame, PostFrame).
 */
function SectionTitle({
  children,
  tone = "auto",
  className = "",
  style = {},
  ...props
}) {
  const white = tone === "white";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-section-title ${className}`.trim(),
    style: {
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      ...style
    }
  }, props), white ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      background: "var(--veil-ink-41)"
    }
  }) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      position: "relative",
      zIndex: 1,
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--slide-section)",
      lineHeight: "var(--leading-tight)",
      textTransform: "uppercase",
      color: white ? "var(--white)" : "var(--text)"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/blocks/SlideFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Racine des assets, calculée depuis l'emplacement du bundle compilé.
const SK_ROOT = document.currentScript && document.currentScript.src ? new URL(".", document.currentScript.src).href : window.SKISS_ASSET_BASE || "";
const SLIDE_W = 1920;
const SLIDE_H = 1080;

// Signature de page mesurée dans le deck 2024 : spirale 55 px, wordmark 45 px, écart 8 px, soit 225 px de large
// (--slide-signature-w), à 48 px du bord droit et du bord bas (--slide-signature-inset).
const SIG = {
  spiralH: 55,
  wordH: 45,
  gap: 8
};
const SPIRAL_RATIO = 334 / 349;
const WORDMARK_RATIO = 3000 / 822;

// Surfaces lues par les blocs posés dans le cadre (Capsule, NumberedCard, Quote, ProcessSteps, PriceTable).
// --sk-card-bg : carte (blanc à 62 % sur couleur) ; --sk-card-solid : carte opaque ; --sk-card-logo-* : spirale noire ou blanche.
const CARDS_ON_COLOR = {
  "--sk-card-bg": "var(--capsule-bg)",
  "--sk-card-solid": "var(--cream)",
  "--sk-card-text": "var(--ink)",
  "--sk-card-border": "transparent",
  "--sk-card-logo-black": "block",
  "--sk-card-logo-white": "none"
};
const CARDS_ON_WHITE = {
  ...CARDS_ON_COLOR,
  "--sk-card-bg": "var(--cream)"
};
const CARDS_ON_CREAM = {
  ...CARDS_ON_COLOR,
  "--sk-card-bg": "var(--white)",
  "--sk-card-solid": "var(--white)"
};
const CARDS_ON_DARK = {
  "--sk-card-bg": "var(--dark-800)",
  "--sk-card-solid": "var(--dark-800)",
  "--sk-card-text": "var(--dark-text)",
  "--sk-card-border": "var(--dark-600)",
  "--sk-card-logo-black": "none",
  "--sk-card-logo-white": "block"
};
// Thème clair : on repose les jetons sémantiques du :root, au cas où le cadre est posé dans un conteneur thémé.
const LIGHT_TOKENS = {
  "--background": "var(--white)",
  "--surface": "var(--white)",
  "--surface-soft": "var(--cream)",
  "--text": "var(--ink)",
  "--text-muted": "var(--ink-o72)",
  "--heading-accent": "var(--orange-burnt)",
  "--border": "var(--ink-o14)",
  "--logo-tone": "black"
};
const THEMES = {
  gradient: {
    className: "theme-gradient",
    tone: "white",
    vars: CARDS_ON_COLOR
  },
  burnt: {
    className: "theme-burnt",
    tone: "white",
    vars: CARDS_ON_COLOR
  },
  dark: {
    className: "theme-dark",
    tone: "white",
    vars: CARDS_ON_DARK
  },
  light: {
    className: "",
    tone: "black",
    vars: {
      ...LIGHT_TOKENS,
      ...CARDS_ON_WHITE
    }
  },
  cream: {
    className: "theme-cream",
    tone: "black",
    vars: CARDS_ON_CREAM
  }
};
function FrameSignature({
  tone,
  src
}) {
  const t = tone === "black" ? "black" : "white";
  const spiralSrc = src && src.spiral || `${SK_ROOT}assets/logos/spiral-${t}.png`;
  const wordmarkSrc = src && src.wordmark || `${SK_ROOT}assets/logos/wordmark-${t}.png`;
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "SKISS",
    style: {
      position: "absolute",
      zIndex: 2,
      right: "var(--slide-signature-inset)",
      bottom: "var(--slide-signature-inset)",
      display: "flex",
      alignItems: "center",
      gap: SIG.gap,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: spiralSrc,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      height: SIG.spiralH,
      width: SIG.spiralH * SPIRAL_RATIO,
      maxWidth: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: wordmarkSrc,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      height: SIG.wordH,
      width: SIG.wordH * WORDMARK_RATIO,
      maxWidth: "none"
    }
  }));
}

/**
 * SKISS SlideFrame : cadre 16:9 de 1920 x 1080 sur la grille du deck 2024.
 * Marges latérales 100 px, haut des blocs à 104 px (228 px sous un titre), signature spirale + wordmark en bas à droite.
 * Bas des blocs à 104 px du bord, 128 px avec la signature (24 px d'air au-dessus d'elle).
 * scale réduit l'affichage par transform (nombre, ou "fit" pour suivre la largeur du parent).
 */
function SlideFrame({
  theme = "gradient",
  title,
  signature = true,
  signatureTone = "auto",
  signatureSrc,
  scale = 1,
  children,
  className = "",
  style = {},
  ...props
}) {
  const t = THEMES[theme] || THEMES.gradient;
  const tone = signatureTone === "auto" ? t.tone : signatureTone;
  const fit = scale === "fit";
  const boxRef = React.useRef(null);
  const [fitScale, setFitScale] = React.useState(0);
  React.useLayoutEffect(() => {
    if (!fit || !boxRef.current) return undefined;
    const el = boxRef.current;
    const update = () => setFitScale(el.clientWidth / SLIDE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [fit]);
  const frame = /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-slide ${t.className} ${className}`.trim(),
    style: {
      position: "relative",
      isolation: "isolate",
      width: SLIDE_W,
      height: SLIDE_H,
      overflow: "hidden",
      background: "var(--background)",
      color: "var(--text)",
      fontFamily: "var(--font-sans)",
      ...t.vars,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: `${title ? "40px" : "var(--slide-top)"} var(--slide-margin-x) ${signature ? "128px" : "var(--slide-top)"}`
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      position: "relative",
      zIndex: 1,
      flex: "none",
      margin: 0,
      minHeight: 188,
      paddingBottom: 24,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-title)",
      lineHeight: "var(--leading-deck)",
      color: "var(--text)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      minHeight: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, children)), signature ? /*#__PURE__*/React.createElement(FrameSignature, {
    tone: tone,
    src: signatureSrc
  }) : null);
  const s = fit ? fitScale : Number(scale) || 1;
  if (!fit && s === 1) return frame;
  return /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    className: "sk-slide-scaler",
    style: {
      position: "relative",
      width: fit ? "100%" : SLIDE_W * s,
      height: SLIDE_H * s
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: SLIDE_W,
      height: SLIDE_H,
      transform: `scale(${s})`,
      transformOrigin: "0 0"
    }
  }, frame));
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/blocks/StepChevrons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Les cinq pas des chevrons du deck (p32), du foncé au clair, pour cinq étapes. Blanc sur les trois premiers
// (5,02 à 3,50:1, grand texte), encre sur les deux derniers (le blanc y tombe sous 2,6:1).
const STEPS = [{
  bg: "var(--orange-burnt)",
  text: "var(--white)"
}, {
  bg: "var(--orange-burnt-2)",
  text: "var(--white)"
}, {
  bg: "var(--orange-deep)",
  text: "var(--white)"
}, {
  bg: "var(--orange-light-2)",
  text: "var(--ink)"
}, {
  bg: "var(--peach)",
  text: "var(--ink)"
}];
// Les quatre nuances officielles, toujours dans cet ordre (brief, « Couleurs »), pour quatre étapes ou moins :
// blanc sur #B45311 (5,02:1) et #D56C25 (3,50:1, admis pour du Hind Bold 36 px), encre sur #F18E4B et #F3AA77.
const FOUR = [{
  bg: "var(--orange-burnt)",
  text: "var(--white)"
}, {
  bg: "var(--orange-deep)",
  text: "var(--white)"
}, {
  bg: "var(--orange-light)",
  text: "var(--ink)"
}, {
  bg: "var(--peach)",
  text: "var(--ink)"
}];
// Nuances selon le nombre d'étapes : 5 = les cinq pas du deck ; 4 = les quatre nuances ; 3 = brûlé, #D56C25, pêche ; 2 = brûlé, pêche.
function palette(n) {
  if (n >= 5) return Array.from({
    length: n
  }, (_, i) => STEPS[Math.round(i * 4 / (n - 1))]);
  if (n === 4) return FOUR;
  if (n === 3) return [FOUR[0], FOUR[1], FOUR[3]];
  if (n === 2) return [FOUR[0], FOUR[3]];
  return [FOUR[0]];
}
const DEPTH = 0.2; // profondeur de la pointe, en part de la largeur d'un chevron
const GAP = 0.035; // jour entre deux chevrons emboîtés

/**
 * SKISS StepChevrons : deux à cinq chevrons emboîtés, du foncé au clair, contour blanc de 2 px,
 * texte en Hind Bold 36 px. Occupe toute la largeur du parent.
 */
function StepChevrons({
  steps = [],
  height = 180,
  className = "",
  style = {},
  ...props
}) {
  const n = steps.length;
  const overlap = DEPTH - GAP;
  const w = 100 / (n - (n - 1) * overlap);
  const tip = 100 - DEPTH * 100;
  const colors = palette(n);
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: `sk-step-chevrons ${className}`.trim(),
    style: {
      position: "relative",
      width: "100%",
      height,
      margin: 0,
      padding: 0,
      listStyle: "none",
      ...style
    }
  }, props), steps.map((label, i) => {
    const c = colors[i];
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        position: "absolute",
        top: 0,
        height: "100%",
        left: `${i * (1 - overlap) * w}%`,
        width: `${w}%`
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "visible"
      }
    }, /*#__PURE__*/React.createElement("polygon", {
      points: `0,0 ${tip},0 100,50 ${tip},100 0,100 ${DEPTH * 100},50`,
      vectorEffect: "non-scaling-stroke",
      style: {
        fill: c.bg,
        stroke: "var(--white)",
        strokeWidth: 2,
        strokeLinejoin: "miter"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: `${DEPTH * 100 + 2}%`,
        right: `${DEPTH * 100 - 6}%`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: c.text,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        fontSize: "var(--slide-body)",
        lineHeight: "var(--leading-deck)"
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { StepChevrons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/StepChevrons.jsx", error: String((e && e.message) || e) }); }

// components/brand/AccentWord.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS AccentWord : mot accent d'un titre, en Khand Bold rempli du premier segment du dégradé deck
 * (#F4B081 vers #ED7F36), sans italique. Remplace le mot en italique et en dégradé du site.
 * Sur fond sombre (#12100C : 6,9 à 10,3:1). Pas sur fond blanc, crème ni sur les dégradés orange (contraste insuffisant).
 */
function AccentWord({
  as = "span",
  children,
  style = {},
  ...props
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontStyle: "normal",
      background: "var(--gradient-deck-start)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      WebkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { AccentWord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AccentWord.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Racine du design system, déduite de l'emplacement du bundle compilé (ds/_ds_bundle.js).
const SK_ROOT = document.currentScript && document.currentScript.src ? new URL(".", document.currentScript.src).href : window.SKISS_ASSET_BASE || "";

// Fichiers officiels de assets/logos. Pour le logo complet, le PNG fait foi sur le SVG (recomposition).
// ratio = largeur / hauteur du fichier ; h = hauteur par défaut, au minimum d'usage à l'écran.
const LOGO_FILES = {
  vertical: {
    file: "logo-vertical",
    ext: "png",
    ratio: 771 / 860,
    h: 258
  },
  // 230 px de large au moins
  horizontal: {
    file: "logo-horizontal",
    ext: "png",
    ratio: 1099 / 524,
    h: 156
  },
  // 325 px de large au moins
  bulb: {
    file: "bulb",
    ext: "svg",
    ratio: 150.196 / 250.763,
    h: 155
  },
  // 155 px de haut au moins
  spiral: {
    file: "spiral",
    ext: "png",
    ratio: 334 / 349,
    h: 55
  },
  // 350 px au plus
  wordmark: {
    file: "wordmark",
    ext: "png",
    ratio: 3000 / 822,
    h: 45
  },
  // 16 px de haut au moins
  baseline: {
    file: "baseline",
    ext: "svg",
    ratio: 244.15 / 11.1,
    h: 11
  }
};

/**
 * SKISS Logo : affiche un fichier officiel tel quel, sans recoloration, déformation ni effet.
 * tone black sur fond clair ; white sur dégradé deck, aplat orange, fond sombre ou photo voilée.
 * Le wordmark n'est jamais retapé dans une police : c'est toujours l'image.
 */
function Logo({
  variant = "vertical",
  tone = "black",
  height,
  src,
  alt,
  style = {},
  ...props
}) {
  const v = LOGO_FILES[variant] || LOGO_FILES.vertical;
  const h = height != null ? height : v.h;
  const numeric = typeof h === "number";
  const url = src || `${SK_ROOT}assets/logos/${v.file}-${tone === "white" ? "white" : "black"}.${v.ext}`;
  const label = alt != null ? alt : variant === "baseline" ? "Dream it, design it, do it" : "SKISS";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: url,
    alt: label,
    draggable: false,
    style: {
      display: "block",
      flexShrink: 0,
      height: numeric ? `${h}px` : h,
      width: numeric && !src ? `${Math.round(h * v.ratio * 100) / 100}px` : "auto",
      maxWidth: "none",
      objectFit: "contain",
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Signature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SK_ROOT = document.currentScript && document.currentScript.src ? new URL(".", document.currentScript.src).href : window.SKISS_ASSET_BASE || "";

// Proportions mesurées : deck 2024 sur 1920 x 1080 (spirale 55, wordmark 45, écart 8, soit 225 px de large)
// et barre de navigation du site (spirale 36, wordmark 20, écart 12).
const LAYOUTS = {
  page: {
    h: 55,
    word: 45 / 55,
    gap: 8 / 55
  },
  nav: {
    h: 36,
    word: 20 / 36,
    gap: 12 / 36
  }
};
const SPIRAL_RATIO = 334 / 349;
const WORDMARK_RATIO = 3000 / 822;

/**
 * SKISS Signature : spirale + wordmark côte à côte, centrés verticalement, composés avec les deux PNG officiels.
 * height = hauteur de la spirale ; wordmark et écart suivent la proportion choisie.
 */
function Signature({
  height,
  tone = "black",
  layout = "page",
  src,
  alt = "SKISS",
  style = {},
  ...props
}) {
  const p = LAYOUTS[layout] || LAYOUTS.page;
  const h = height != null ? height : p.h;
  const wordH = h * p.word;
  const t = tone === "white" ? "white" : "black";
  const spiralSrc = src && src.spiral || `${SK_ROOT}assets/logos/spiral-${t}.png`;
  const wordmarkSrc = src && src.wordmark || `${SK_ROOT}assets/logos/wordmark-${t}.png`;
  const px = n => `${Math.round(n * 100) / 100}px`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": alt,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: px(h * p.gap),
      lineHeight: 0,
      flexShrink: 0,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("img", {
    src: spiralSrc,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      height: px(h),
      width: px(h * SPIRAL_RATIO),
      maxWidth: "none",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: wordmarkSrc,
    alt: "",
    draggable: false,
    style: {
      display: "block",
      height: px(wordH),
      width: px(wordH * WORDMARK_RATIO),
      maxWidth: "none",
      objectFit: "contain"
    }
  }));
}
Object.assign(__ds_scope, { Signature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Signature.jsx", error: String((e && e.message) || e) }); }

// components/brand/ThemeSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Chaque thème, clair compris (.theme-light), redéfinit tous ses tokens dans colors.css : une section claire ou crème
// reste juste à l'intérieur d'un parent sombre ou en dégradé.
const THEMES = ["light", "dark", "gradient", "burnt", "social", "cream"];

/**
 * SKISS ThemeSection : bloc qui applique un thème (classe .theme-*) et pose son fond et sa couleur de texte.
 * light (défaut, blanc), dark (sombre chaud #12100C), gradient (dégradé deck, texte encre),
 * burnt (aplat #B45311, texte blanc), social (dégradé Instagram, texte encre dans la moitié claire),
 * cream (#F6D9C7, texte encre).
 */
function ThemeSection({
  theme = "light",
  as = "section",
  className = "",
  children,
  style = {},
  ...props
}) {
  const Tag = as;
  const t = THEMES.includes(theme) ? theme : "light";
  const cls = [`theme-${t}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: {
      background: "var(--background)",
      color: "var(--text)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { ThemeSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ThemeSection.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS Badge : étiquette en pilule, Hind Bold 14 px.
 * soft    = var(--surface-soft) et var(--text) : crème #F6D9C7 et encre en clair, #272520 et #EFECE7 en sombre,
 *           blanc à 62 % et encre sur les dégradés, #BD5713 et blanc sur .theme-burnt (4,63:1).
 * solid   = aplat principal du thème (var(--btn-primary-bg) / var(--btn-primary-text)).
 * outline = contour et texte en var(--heading-accent) : #B45311 sur blanc (5,02:1), #ED7D31 sur sombre (6,86:1).
 */
function Badge({
  tone = "soft",
  as = "span",
  children,
  style = {},
  ...props
}) {
  const Tag = as;
  const tones = {
    soft: {
      background: "var(--surface-soft)",
      color: "var(--text)",
      borderColor: "transparent"
    },
    solid: {
      background: "var(--btn-primary-bg)",
      color: "var(--btn-primary-text)",
      borderColor: "transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--heading-accent)",
      borderColor: "currentColor"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      boxSizing: "border-box",
      margin: 0,
      padding: "var(--space-1) var(--space-3)",
      borderRadius: "var(--radius-pill)",
      borderWidth: "1px",
      borderStyle: "solid",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-small)",
      lineHeight: 1.3,
      whiteSpace: "nowrap",
      ...(tones[tone] || tones.soft),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS Button : pilule.
 * primary   = aplat du thème (var(--btn-primary-bg) / var(--btn-primary-text)) : orange #ED7D31 et texte encre (6,86:1)
 *             en clair et en sombre, encre et texte blanc sur les dégradés, blanc et texte brûlé sur .theme-burnt.
 * secondary = contour 1 px (var(--btn-secondary-border)), rempli de var(--btn-secondary-bg-hover) au survol.
 * gradient  = premier segment du dégradé deck (#F4B081 vers #ED7F36), texte encre #12100C (6,96:1 au minimum).
 *             Jamais le dégradé deck complet sous un texte. Sur .theme-gradient, il se confond avec le fond : utiliser primary.
 * États : survol (bouton plein à 90 % d'opacité), focus clavier 2 px en var(--ring) (règle :focus-visible de base.css,
 * reproduite ici quand state="focus"), désactivé à 60 % d'opacité.
 */
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  state,
  disabled = false,
  type,
  children,
  style = {},
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = as;
  const isHover = !disabled && (state === "hover" || hovered);
  const isFocus = state === "focus";
  const sizes = {
    sm: {
      padding: "var(--space-2) var(--space-4)",
      fontSize: "var(--text-small)"
    },
    md: {
      padding: "var(--space-3) var(--space-5)",
      fontSize: "var(--text-main)"
    },
    lg: {
      padding: "var(--space-4) var(--space-6)",
      fontSize: "var(--text-lead)"
    }
  };
  const variants = {
    primary: {
      background: "var(--btn-primary-bg)",
      color: "var(--btn-primary-text)",
      borderColor: "transparent"
    },
    secondary: {
      background: isHover ? "var(--btn-secondary-bg-hover)" : "var(--btn-secondary-bg)",
      color: "var(--btn-secondary-text)",
      borderColor: "var(--btn-secondary-border)"
    },
    gradient: {
      background: "var(--gradient-deck-start)",
      color: "var(--ink)",
      borderColor: "transparent"
    }
  };
  const filled = variant !== "secondary";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === "button" ? type || "button" : type,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: e => {
      setHovered(true);
      if (onMouseEnter) onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHovered(false);
      if (onMouseLeave) onMouseLeave(e);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5em",
      boxSizing: "border-box",
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      textDecoration: "none",
      borderRadius: "var(--radius-pill)",
      borderWidth: "1px",
      borderStyle: "solid",
      cursor: disabled ? "not-allowed" : "pointer",
      pointerEvents: disabled && Tag !== "button" ? "none" : undefined,
      opacity: disabled ? 0.6 : filled && isHover ? 0.9 : 1,
      transition: "opacity var(--duration-fast) var(--ease-out), background-color var(--duration-fast) var(--ease-out)",
      ...(isFocus ? {
        outline: "2px solid var(--ring)",
        outlineOffset: "2px"
      } : null),
      ...(sizes[size] || sizes.md),
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS Card : carte web (rayon 16 px, bordure 1 px var(--border), fond var(--surface)).
 * Clair : blanc et bordure encre à 14 %. Sombre : #1C1A17 et bordure #322F2A. Dégradés : blanc à 62 % (capsule).
 * elevated    = ombre très douce, en encre à 14 %.
 * interactive = bordure orange à 30 % au survol (état du site), curseur main.
 */
function Card({
  elevated = false,
  interactive = false,
  as = "div",
  children,
  style = {},
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = as;
  const isHover = interactive && hovered;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: e => {
      setHovered(true);
      if (onMouseEnter) onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHovered(false);
      if (onMouseLeave) onMouseLeave(e);
    },
    style: {
      display: "block",
      boxSizing: "border-box",
      margin: 0,
      padding: "var(--space-5)",
      background: "var(--surface)",
      color: "var(--text)",
      border: "1px solid",
      borderColor: isHover ? "var(--orange-o30)" : "var(--border)",
      borderRadius: "var(--radius-card)",
      boxShadow: elevated ? "0 2px 6px -2px var(--ink-o14), 0 16px 32px -20px var(--ink-o14)" : "none",
      cursor: interactive ? "pointer" : undefined,
      textDecoration: "none",
      transition: "border-color var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SKISS Eyebrow : surtitre en capitales espacées (Hind Bold, 12 à 16 px, interlettrage 0,3 em),
 * en var(--heading-accent) : #B45311 sur blanc, #ED7D31 sur sombre, encre sur crème et sur les dégradés,
 * blanc sur .theme-burnt. Écrire le texte en casse de phrase, avec ses accents : la capitalisation est faite en CSS.
 */
function Eyebrow({
  as = "p",
  children,
  style = {},
  ...props
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-eyebrow)",
      lineHeight: 1.3,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--heading-accent)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Couleur du texte indicatif : seule règle qui ne peut pas s'écrire en style en ligne.
if (typeof document !== "undefined" && !document.getElementById("sk-input-placeholder")) {
  const css = document.createElement("style");
  css.id = "sk-input-placeholder";
  css.textContent = ".sk-input::placeholder{color:var(--text-muted);opacity:1}";
  document.head.appendChild(css);
}

/**
 * SKISS Input : champ web (rayon 12 px, bordure 1 px var(--border), fond var(--surface)).
 * Focus : bordure et anneau de 2 px au total en var(--ring) (orange #B45311 en clair, #ED7D31 en sombre,
 * encre sur les dégradés, blanc sur .theme-burnt). Désactivé à 60 %.
 * Avec label, le champ est enveloppé dans un <label> (libellé Hind Bold 14 px au-dessus).
 */
function Input({
  label,
  state,
  disabled = false,
  className = "",
  style = {},
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const isFocus = !disabled && (state === "focus" || focused);
  const field = /*#__PURE__*/React.createElement("input", _extends({
    className: `sk-input ${className}`.trim(),
    disabled: disabled,
    onFocus: e => {
      setFocused(true);
      if (onFocus) onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      if (onBlur) onBlur(e);
    },
    style: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      margin: 0,
      padding: "var(--space-3) var(--space-4)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-main)",
      lineHeight: 1.5,
      color: "var(--text)",
      background: "var(--surface)",
      border: "1px solid",
      borderColor: isFocus ? "var(--ring)" : "var(--border)",
      borderRadius: "var(--radius-field)",
      boxShadow: isFocus ? "0 0 0 1px var(--ring)" : "none",
      outline: "none",
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "text",
      transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, props));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-small)",
      lineHeight: 1.3,
      color: "var(--text)",
      opacity: disabled ? 0.6 : 1
    }
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// export/ds-base.js
try { (() => {
// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '../..';
  for (const p of ["tokens/fonts.css", "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/base.css", "styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ds-base.js", error: String((e && e.message) || e) }); }

// ui_kits/deck/Deck.jsx
try { (() => {
// SKISS, kit deck : ordre des slides. Chargé après DeckParts.jsx et les fichiers Slide*.jsx.
// Chaque entrée : id (stable, pour ?slide=), libellé affiché par la visionneuse, composant (prop scale transmise à SlideFrame).
window.SKISS_DECK_SLIDES = [{
  id: "couverture",
  label: "Couverture",
  Component: DeckSlideCover
}, {
  id: "section",
  label: "Section",
  Component: DeckSlideSection
}, {
  id: "capsules",
  label: "Contenu en capsules",
  Component: DeckSlideCapsules
}, {
  id: "cartes",
  label: "Cartes numérotées",
  Component: DeckSlideSteps
}, {
  id: "chevrons",
  label: "Chevrons d’étapes",
  Component: DeckSlideChevrons
}, {
  id: "chiffres",
  label: "Chiffres clés",
  Component: DeckSlideFigures
}, {
  id: "tarifs",
  label: "Offre tarifaire",
  Component: DeckSlidePricing
}, {
  id: "equipe",
  label: "Équipe",
  Component: DeckSlideTeam
}, {
  id: "citation",
  label: "Citation",
  Component: DeckSlideQuote
}, {
  id: "fin",
  label: "Fin",
  Component: DeckSlideEnd
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/Deck.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/DeckParts.jsx
try { (() => {
// SKISS, kit deck : pièces communes aux slides.
// Règle du kit : chaque fichier .jsx est chargé en text/babel dans la même page. On n'y déclare donc que des fonctions
// à noms uniques (préfixe Deck), jamais de const de premier niveau. L'espace de noms du design system est posé une
// seule fois par la page dans window.SKDS (script classique après _ds_bundle.js) et déstructuré dans chaque fonction.

/** Ligne de contact des slides de couverture et de fin (brief, écrans 1 et 7), dans une capsule blanche à 62 %. */
function DeckContactLine() {
  // Espaces insécables dans le numéro : il ne se coupe jamais.
  const text = "Martin Elegeert · elegeertmartin.skiss@gmail.com · +32 499 05 66 43";
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: "inline-flex",
      alignItems: "center",
      padding: "18px 56px 14px",
      borderRadius: "var(--radius-pill)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      color: "var(--sk-card-text, var(--ink))",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)",
      whiteSpace: "nowrap"
    }
  }, text);
}

/**
 * Cadre photo rond et neutre, légendé : aucune photo réelle n'est fournie (brief, « Imagerie »).
 * Fond crème opaque, pictogramme Lucide « camera » au trait en encre, légende Hind 28 px.
 */
function DeckPhotoFrame({
  name,
  size = 280
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": `Photo\u00A0: ${name}`,
    style: {
      flex: "none",
      width: size,
      height: size,
      borderRadius: "50%",
      background: "var(--cream)",
      border: "2px solid var(--ink-o14)",
      color: "var(--ink)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-min)",
      lineHeight: "var(--leading-deck)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3"
  })), /*#__PURE__*/React.createElement("span", null, "Photo :", /*#__PURE__*/React.createElement("br", null), name));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/DeckParts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideCapsules.jsx
try { (() => {
/**
 * Slide 3 : contenu en capsules (brief, écran 3).
 * Titre de page Khand Bold 88 px, trois capsules pleine largeur (blanc à 62 %, texte encre Hind Bold 56 px).
 */
function DeckSlideCapsules({
  scale = 1
}) {
  const {
    SlideFrame,
    Capsule
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    title: "Un compte publicitaire se pilote dans cet ordre",
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Capsule, null, "On regarde ce qui existe"), /*#__PURE__*/React.createElement(Capsule, null, "On construit ce qui manque"), /*#__PURE__*/React.createElement(Capsule, null, "On pilote dans la dur\xE9e")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideCapsules.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideChevrons.jsx
try { (() => {
/**
 * Slide 5 : chevrons d'étapes et rangée de cartes claires (gabarit du deck p32), même méthode que la slide 4 :
 * Audit, Cadrage, Set-up, Gestion. Quatre chevrons, donc les quatre nuances officielles du brûlé au pêche.
 * Les textes des cartes sont ceux des blocs A, B et C de l'écran 12 du brief ; le brief ne décrit pas l'étape de
 * cadrage et ne donne pas de titre pour cette slide : intitulés neutres entre crochets.
 */
function DeckSlideChevrons({
  scale = 1
}) {
  const {
    SlideFrame,
    StepChevrons
  } = window.SKDS;
  const steps = [{
    label: "Audit",
    text: "Ce qui tourne, ce qui brûle du budget, ce qu’on répare en premier."
  }, {
    label: "Cadrage",
    text: "[Détail de l’étape]"
  }, {
    label: "Set-up",
    text: "Tracking, structure de compte, audiences, première campagne en ligne."
  }, {
    label: "Gestion",
    text: "Pilotage mensuel, itérations créatives, arbitrage budgétaire, reporting."
  }];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    title: "[Titre de la slide]",
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(StepChevrons, {
    steps: steps.map(s => s.label),
    height: 220
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: 40,
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 260,
      padding: "36px 40px",
      textAlign: "center",
      borderRadius: "var(--radius-card-slide)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      border: "1px solid var(--sk-card-border, transparent)",
      color: "var(--sk-card-text, var(--ink))",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)"
    }
  }, s.text)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideChevrons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideCover.jsx
try { (() => {
/**
 * Slide 1 : couverture de proposition (brief, écran 1).
 * Dégradé deck, cercle blanc à 51 % de 1 240 px centré en (-218 ; 130) comme la couverture de 2024, logo complet
 * vertical blanc. Le nom du client est plus large que le wordmark : à 400 px de haut, le wordmark du logo mesure
 * environ 330 px, le titre « [Nom du client] » en Khand Bold 132 px environ 800 px. Titre et textes en encre.
 * Pas de signature de page : la slide porte déjà le logo complet.
 */
function DeckSlideCover({
  scale = 1
}) {
  const {
    SlideFrame,
    Logo
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    signature: false,
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      zIndex: 0,
      left: -218 - 620,
      top: 130 - 620,
      width: 1240,
      height: 1240,
      borderRadius: "50%",
      background: "var(--cover-circle)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "vertical",
    tone: "white",
    height: 400
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "36px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-statement)",
      lineHeight: "var(--leading-deck)"
    }
  }, "[Nom du client]"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-large)",
      lineHeight: "var(--leading-deck)"
    }
  }, "Proposition \xB7 [mois ann\xE9e]"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(DeckContactLine, null))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideCover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideEnd.jsx
try { (() => {
/**
 * Slide 10 : fin (brief, écran 7). Logo complet vertical blanc, « On en parle ? » en Khand Regular 132 px et en encre,
 * ligne de contact dans une capsule blanche à 62 %. Pas de signature de page : la slide porte déjà le logo complet.
 */
function DeckSlideEnd({
  scale = 1
}) {
  const {
    SlideFrame,
    Logo
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    signature: false,
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "vertical",
    tone: "white",
    height: 360
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "40px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--slide-statement)",
      lineHeight: "var(--leading-deck)"
    }
  }, "On en parle ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(DeckContactLine, null))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideEnd.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideFigures.jsx
try { (() => {
/**
 * Slide 6 : chiffres clés (brief, écran 4). Trois chiffres en encre sur le dégradé deck, Khand 144 px,
 * légendes Hind 36 px. Espaces insécables avant € et :.
 * « 10 ans » est à confirmer avant diffusion (brief, points ouverts, n° 8).
 */
function DeckSlideFigures({
  scale = 1
}) {
  const {
    SlideFrame,
    KeyFigure
  } = window.SKDS;
  const figures = [{
    value: "10 ans",
    caption: "à piloter des budgets média"
  }, {
    value: "500 €",
    caption: "En dessous de 500 € par mois, aucune campagne ne sort de la phase d’apprentissage."
  }, {
    value: "3 mois",
    caption: "minimum sur la gestion : le temps nécessaire pour lire un résultat"
  }];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    title: "[Titre de la slide]",
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 64,
      alignItems: "start"
    }
  }, figures.map(f => /*#__PURE__*/React.createElement(KeyFigure, {
    key: f.value,
    align: "center",
    value: f.value,
    caption: f.caption
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideFigures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlidePricing.jsx
try { (() => {
/**
 * Slide 7 : offre tarifaire (brief, écran 5). Fond clair, lignes en cartes crème #F6D9C7 opaques, signature noire.
 * Montants HTVA de la grille 2026 ; le budget média reste distinct des honoraires (note de bas de tableau).
 */
function DeckSlidePricing({
  scale = 1
}) {
  const {
    SlideFrame,
    PriceTable
  } = window.SKDS;
  const rows = [{
    service: "Audit express",
    duration: "0,5 jour",
    price: "300 €"
  }, {
    service: "Audit complet",
    duration: "1 jour",
    price: "600 €"
  }, {
    service: "Cadrage & roadmap",
    duration: "0,75 jour",
    price: "450 €"
  }, {
    service: "Set-up essentiel",
    duration: "1,5 jour · 1 canal",
    price: "850 €"
  }, {
    service: "Set-up complet",
    duration: "2,5 jours · 2 canaux",
    price: "1 400 €"
  }, {
    service: "Gestion essentielle",
    duration: "0,75 jour / mois",
    price: "450 € / mois"
  }, {
    service: "Gestion standard",
    duration: "1,5 jour / mois",
    price: "850 € / mois"
  }];
  const note = "Le budget média est payé directement par l’annonceur, sur son propre moyen de paiement. Il n’est jamais avancé ni refacturé.";
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "light",
    title: "Grille tarifaire",
    scale: scale
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)",
      color: "var(--text)"
    }
  }, "Montants hors TVA."), /*#__PURE__*/React.createElement(PriceTable, {
    rows: rows,
    note: note
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlidePricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideQuote.jsx
try { (() => {
/**
 * Slide 9 : citation (gabarit du deck p3). Phrase réelle du brief (« Ton et écriture »), attribuée à son auteur.
 * Les guillemets français et leurs espaces fines sont ajoutés par le composant Quote.
 */
function DeckSlideQuote({
  scale = 1
}) {
  const {
    SlideFrame,
    Quote
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    scale: scale
  }, /*#__PURE__*/React.createElement(Quote, {
    author: "Martin Elegeert \xB7 SKISS"
  }, "L\u2019IA comme m\xE9thode, pas comme gadget."));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideQuote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideSection.jsx
try { (() => {
/**
 * Slide 2 : intercalaire de section (brief, écran 2).
 * Un mot en Khand Regular 230 px, capitales, centré, en encre sur le dégradé deck. Signature blanche.
 * Variante possible : <SectionTitle tone="white"> (blanc sur voile encre à 41 %).
 */
function DeckSlideSection({
  scale = 1
}) {
  const {
    SlideFrame,
    SectionTitle
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    scale: scale
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "STRAT\xC9GIE"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideSteps.jsx
try { (() => {
/**
 * Slide 4 : cartes numérotées (gabarit du deck p5), les quatre étapes de la grille fixe : Audit, Cadrage, Set-up,
 * Gestion. Pilules de 334 px (17,4 % de la largeur), disques du brûlé au pêche, chiffres et pictogrammes Lucide en encre.
 * Pas de titre : le brief n'en donne pas pour cette slide (comme p5 en 2024).
 */
function DeckSlideSteps({
  scale = 1
}) {
  const {
    SlideFrame,
    NumberedCard
  } = window.SKDS;
  const steps = [{
    number: 1,
    label: "Audit",
    icon: "search"
  }, {
    number: 2,
    label: "Cadrage",
    icon: "compass"
  }, {
    number: 3,
    label: "Set-up",
    icon: "wrench"
  }, {
    number: 4,
    label: "Gestion",
    icon: "trending-up"
  }];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      justifyContent: "space-between"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.number,
    style: {
      width: 334
    }
  }, /*#__PURE__*/React.createElement(NumberedCard, s)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideSteps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/SlideTeam.jsx
try { (() => {
/**
 * Slide 8 : équipe (brief, écran 6). Trois cartes blanches à 62 % (rayon 46 px) sur le dégradé deck,
 * cadre photo rond neutre et légendé, nom en Khand Bold 40 px, rôle en Hind 36 px. Registre nominal :
 * aucun fondateur à la troisième personne. Le rôle d'Antoine Kahn reste à confirmer.
 */
function DeckSlideTeam({
  scale = 1
}) {
  const {
    SlideFrame
  } = window.SKDS;
  const founders = [{
    name: "Martin Elegeert",
    role: "Media buying, IA et contenu"
  }, {
    name: "Adam Elegeert",
    role: "Expert média, graphiste, vidéaste, motion designer et IA"
  }, {
    name: "Antoine Kahn",
    role: "[Rôle à confirmer]"
  }];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    theme: "gradient",
    title: "Les fondateurs",
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 56,
      alignItems: "stretch"
    }
  }, founders.map(f => /*#__PURE__*/React.createElement("article", {
    key: f.name,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "48px 40px 56px",
      borderRadius: "var(--radius-card-slide)",
      background: "var(--sk-card-bg, var(--capsule-bg))",
      border: "1px solid var(--sk-card-border, transparent)",
      color: "var(--sk-card-text, var(--ink))"
    }
  }, /*#__PURE__*/React.createElement(DeckPhotoFrame, {
    name: f.name
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "36px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--slide-card-title)",
      lineHeight: "var(--leading-deck)"
    }
  }, f.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)"
    }
  }, f.role)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/SlideTeam.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/DocOnePager.jsx
try { (() => {
// SKISS, kit documents : one-pager de proposition A4 portrait (brief, écran 12). Styles dans documents.css.
// Règle du kit : fichiers chargés en text/babel ; uniquement des fonctions à noms uniques (préfixe Doc), aucune const
// de premier niveau. L'espace de noms du design system est posé une seule fois par la page dans window.SKDS.

/**
 * One-pager A4 : en-tête au logo horizontal noir (325 px de large au moins à l'écran), surtitre, titre, introduction,
 * trois blocs en lignes sur un bandeau en dégradé deck (cartes blanches à 62 %, texte encre), pied de page avec la
 * ligne de contact.
 * Textes mot pour mot du brief. Montants HTVA, espaces insécables avant € et dans « / mois ».
 */
function DocOnePager() {
  const {
    Logo,
    Eyebrow,
    ThemeSection,
    Card
  } = window.SKDS;
  const nb = "\u00A0";
  // Disques dans les nuances d'orange, du foncé au clair, comme les cartes numérotées ; lettre en encre
  // (3,79:1 au minimum sur #B45311, admis pour une lettre de 22 pt).
  const blocks = [{
    letter: "A",
    shade: "var(--orange-burnt)",
    label: "Bloc A · Audit",
    text: "Ce qui tourne, ce qui brûle du budget, ce qu’on répare en premier.",
    price: `Dès 300${nb}€`
  }, {
    letter: "B",
    shade: "var(--orange-deep)",
    label: "Bloc B · Set-up",
    text: "Tracking, structure de compte, audiences, première campagne en ligne.",
    price: `Dès 850${nb}€`
  }, {
    letter: "C",
    shade: "var(--orange-light)",
    label: "Bloc C · Gestion",
    text: "Pilotage mensuel, itérations créatives, arbitrage budgétaire, reporting.",
    price: `Dès 450${nb}€${nb}/${nb}mois`
  }];
  return /*#__PURE__*/React.createElement("article", {
    className: "doc-page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "doc-head"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "black"
  })), /*#__PURE__*/React.createElement("section", {
    className: "doc-intro"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: "var(--doc-eyebrow)"
    }
  }, "Publicit\xE9 payante \xB7 Meta & Google"), /*#__PURE__*/React.createElement("h1", {
    className: "doc-title"
  }, "Trois blocs, trois prix, z\xE9ro surprise."), /*#__PURE__*/React.createElement("p", {
    className: "doc-lead"
  }, `Un compte publicitaire se pilote dans cet ordre${nb}: on regarde ce qui existe, on construit ce qui manque, puis on pilote dans la durée. Chaque bloc se vend seul. Aucun n’oblige à prendre le suivant.`)), /*#__PURE__*/React.createElement(ThemeSection, {
    theme: "gradient",
    className: "doc-band"
  }, blocks.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.label,
    className: "doc-block",
    style: {
      display: "grid",
      padding: "18pt 20pt 18pt 16pt"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "doc-block-disc",
    "aria-hidden": "true",
    style: {
      background: b.shade
    }
  }, b.letter), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "doc-block-title"
  }, b.label), /*#__PURE__*/React.createElement("p", {
    className: "doc-block-text"
  }, b.text)), /*#__PURE__*/React.createElement("p", {
    className: "doc-block-price"
  }, b.price)))), /*#__PURE__*/React.createElement("footer", {
    className: "doc-foot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "doc-note"
  }, "Tarifs HTVA, valables en 2026. Le budget m\xE9dia est pay\xE9 directement par l\u2019annonceur."), /*#__PURE__*/React.createElement("p", {
    className: "doc-contact"
  }, "Martin Elegeert \xB7 elegeertmartin.skiss@gmail.com \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "doc-nowrap"
  }, `+32${nb}499${nb}05${nb}66${nb}43`))));
}
window.DocOnePager = DocOnePager;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/DocOnePager.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialPostCover.jsx
try { (() => {
// SKISS, kit réseaux sociaux : couverture de carrousel Instagram (brief, écran 8).
// Règle du kit : les fichiers .jsx sont chargés en text/babel dans la même page. On n'y déclare que des fonctions à
// noms uniques (préfixe Social), jamais de const de premier niveau. L'espace de noms du design system est posé une
// seule fois par la page dans window.SKDS (script classique après _ds_bundle.js) et déstructuré dans chaque fonction.

/**
 * Couverture de carrousel, 1080 x 1350 : dégradé social et formes en S (PostFrame, thème social).
 * Titre Khand Bold en encre #12100C, calé en bas à gauche, donc dans la moitié claire du dégradé (x + y ≥ 853 px).
 * Signature spirale + wordmark noire en bas à droite (15,72:1).
 * scale : réduction d'affichage transmise à PostFrame (nombre ou "fit").
 */
function SocialPostCover({
  scale = 1,
  title = "Rien ne se lance sans tracking."
}) {
  const {
    PostFrame
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(PostFrame, {
    format: "post",
    theme: "social",
    scale: scale
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: 760,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--post-title)",
      lineHeight: "var(--leading-tight)",
      color: "var(--ink)",
      textWrap: "balance"
    }
  }, title));
}
window.SocialPostCover = SocialPostCover;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialPostCover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialPostInside.jsx
try { (() => {
// SKISS, kit réseaux sociaux : page intérieure de carrousel Instagram (brief, écran 9).
// Fonctions à noms uniques seulement (préfixe Social) ; window.SKDS est posé par la page.

/**
 * Page intérieure de carrousel, 1080 x 1350, fond blanc (PostFrame, thème clair).
 * Grand numéro en haut à droite en Khand Regular, couleur var(--heading-accent) : #B45311 sur blanc (5,02:1).
 * Texte en Khand Regular 84 px (sous-titre de l'échelle Instagram), encre. Signature noire en bas à droite.
 */
function SocialPostInside({
  scale = 1,
  number = "02",
  text = "Pas de campagne tant que le pixel, GA4 et le consentement ne sont pas validés."
}) {
  const {
    PostFrame
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(PostFrame, {
    format: "post",
    theme: "light",
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      alignSelf: "flex-end",
      margin: "-24px -12px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: 360,
      lineHeight: 0.8,
      color: "var(--heading-accent)",
      fontVariantNumeric: "tabular-nums"
    }
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      width: 120,
      height: 6,
      marginBottom: 44,
      borderRadius: "var(--radius-pill)",
      background: "var(--heading-accent)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--post-subtitle)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text)",
      textWrap: "pretty"
    }
  }, text))));
}
window.SocialPostInside = SocialPostInside;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialPostInside.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialPostQuote.jsx
try { (() => {
// SKISS, kit réseaux sociaux : post citation Instagram (brief, écran 10).
// Fonctions à noms uniques seulement (préfixe Social) ; window.SKDS est posé par la page.

/**
 * Post citation, 1080 x 1350, aplat #B45311 (PostFrame, thème burnt) : signature blanche en bas à droite (5,02:1).
 * Le bloc Quote du design system y est posé en colonne : spirale noire en haut, citation Khand Regular, auteur
 * Hind Bold. Carte blanche à 62 % (la seule transparence de la marque), texte encre.
 * Les tailles du deck (108 et 36 px) sont ramenées au format post par --slide-quote (112 px) et --slide-body (39 px).
 * Phrase réelle de SKISS (brief, « Ton et écriture ») : aucune citation inventée.
 */
function SocialPostQuote({
  scale = 1,
  theme = "burnt",
  quote = "L’IA comme méthode, pas comme gadget.",
  author = "Martin Elegeert · SKISS"
}) {
  const {
    PostFrame,
    Quote
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(PostFrame, {
    format: "post",
    theme: theme,
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    author: author,
    style: {
      flex: "none",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 0,
      minHeight: 0,
      padding: "88px 80px 96px",
      "--slide-quote": "112px",
      "--slide-body": "var(--post-eyebrow)"
    }
  }, quote)));
}
window.SocialPostQuote = SocialPostQuote;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialPostQuote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialReelCover.jsx
try { (() => {
// SKISS, kit réseaux sociaux : couverture de reel Instagram (brief, écran 11).
// Fonctions à noms uniques seulement (préfixe Social) ; window.SKDS est posé par la page.

/**
 * Couverture de reel, 1080 x 1920 (PostFrame, format reel, sans signature : le logo complet est déjà là).
 * Cadre photo neutre plein écran et légendé (aucune photo réelle fournie), voile #12100C à 45 % plein cadre sous le logo
 * et le grand titre. Logo complet vertical blanc, titre Khand Bold, sous-titre Hind.
 * Sous tout autre texte, le brief exige 58 % au moins (calcul sur un blanc pur) : la légende est posée sur un voile local
 * à 58 % ; le sous-titre, Hind 50 px, sur un dégradé localisé à 25 % qui s'ajoute au voile plein cadre (58,75 % cumulés,
 * environ 4,8:1 sur un blanc pur). Le voile à 45 % seul ne lui donnerait que 3,05:1, le seuil du grand texte WCAG.
 * Tout le texte tient dans la zone sûre (proposition) : 270 px en haut, 672 px en bas, hors interface Instagram.
 */
function SocialReelCover({
  scale = 1,
  title = "Aftermovie",
  subtitle = "Wilmeyer · tournoi de padel 2024",
  photo = "tournoi de padel Wilmeyer"
}) {
  const {
    PostFrame,
    Logo
  } = window.SKDS;
  const photoLabel = "Photo\u00A0: " + photo;
  return /*#__PURE__*/React.createElement(PostFrame, {
    format: "reel",
    theme: "dark",
    signature: false,
    scale: scale
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": photoLabel,
    style: {
      position: "absolute",
      inset: 0,
      zIndex: -1,
      backgroundColor: "var(--dark-cream)",
      backgroundImage: "repeating-linear-gradient(135deg, var(--ink-o14) 0 2px, transparent 2px 32px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--veil-ink-45)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      zIndex: 1,
      top: 270,
      left: "var(--post-margin-x)",
      margin: 0,
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 28px 10px 22px",
      borderRadius: "var(--radius-pill)",
      background: "var(--veil-ink-58)",
      color: "var(--white)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--post-min)",
      lineHeight: 1.2,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3"
  })), photoLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "vertical",
    tone: "white",
    height: 360
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch",
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      zIndex: -1,
      top: -90,
      bottom: -90,
      left: "calc(-1 * var(--post-margin-x))",
      right: "calc(-1 * var(--post-margin-x))",
      background: "linear-gradient(180deg, transparent 0, var(--veil-ink-25) 90px, var(--veil-ink-25) calc(100% - 90px), transparent 100%)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--post-title)",
      lineHeight: "var(--leading-tight)",
      color: "var(--white)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--post-body)",
      lineHeight: "var(--leading-deck)",
      color: "var(--white)"
    }
  }, subtitle))));
}
window.SocialReelCover = SocialReelCover;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialReelCover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Commun.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Kit site web SKISS : éléments partagés entre les sections.
// Chargé en text/babel avant les autres fichiers : les fonctions de premier niveau sont globales,
// chaque constante de premier niveau porte un nom unique (préfixe SK_). Les composants du design system
// sont lus dans window.SKDS, à l'intérieur des fonctions.

// Pictogrammes Lucide (le jeu du site, licence ISC), tracés en 24 x 24, trait par défaut de 2.
const SK_ICONES = {
  "trending-up": [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17"
  }], ["polyline", {
    points: "16 7 22 7 22 13"
  }]],
  camera: [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }], ["circle", {
    cx: 12,
    cy: 13,
    r: 3
  }]],
  video: [["path", {
    d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
  }], ["rect", {
    x: 2,
    y: 6,
    width: 14,
    height: 12,
    rx: 2
  }]],
  image: [["rect", {
    width: 18,
    height: 18,
    x: 3,
    y: 3,
    rx: 2,
    ry: 2
  }], ["circle", {
    cx: 9,
    cy: 9,
    r: 2
  }], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
  }]],
  workflow: [["rect", {
    width: 8,
    height: 8,
    x: 3,
    y: 3,
    rx: 2
  }], ["path", {
    d: "M7 11v4a2 2 0 0 0 2 2h4"
  }], ["rect", {
    width: 8,
    height: 8,
    x: 13,
    y: 13,
    rx: 2
  }]],
  "arrow-right": [["path", {
    d: "M5 12h14"
  }], ["path", {
    d: "m12 5 7 7-7 7"
  }]],
  send: [["path", {
    d: "m22 2-7 20-4-9-9-4Z"
  }], ["path", {
    d: "M22 2 11 13"
  }]],
  mail: [["rect", {
    width: 20,
    height: 16,
    x: 2,
    y: 4,
    rx: 2
  }], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  }]],
  check: [["path", {
    d: "M20 6 9 17l-5-5"
  }]]
};
function SiteIcon({
  name,
  size = 24,
  style = {}
}) {
  const shapes = SK_ICONES[name];
  if (!shapes) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, shapes.map(([Tag, attrs], i) => /*#__PURE__*/React.createElement(Tag, _extends({
    key: i
  }, attrs))));
}

// Apparition au défilement (site) : fondu et montée de 30 px en 0,7 s (tokens --reveal-distance, --duration-reveal).
// La racine d'observation est le conteneur qui défile (.sk-site). Sans mouvement si l'utilisateur le demande (base.css).
function Reveal({
  as = "div",
  delay = 0,
  className = "",
  style = {},
  children,
  ...props
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setShown(true);
        io.disconnect();
      }
    }, {
      root: el.closest(".sk-site"),
      rootMargin: "0px 0px -6% 0px",
      threshold: 0
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: `sk-reveal ${shown ? "is-in" : ""} ${className}`.trim(),
    style: {
      transitionDelay: `${delay}s`,
      ...style
    }
  }, props), children);
}

// Halos flous en fond de section : nuances d'orange, opacité 5 à 20 %, flou 100 à 150 px (brief, « Web »).
function Halos({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sk-halos",
    "aria-hidden": "true"
  }, items.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "sk-halo",
    style: {
      background: h.color,
      opacity: h.opacity,
      filter: `blur(${h.blur}px)`,
      width: h.size,
      height: h.size,
      ...h.pos
    }
  })));
}

// En-tête de section centré : surtitre (Eyebrow) puis titre H2 en Khand Bold.
function SectionHead({
  eyebrow,
  title,
  as = "h2",
  titleClass = "sk-section__title",
  children
}) {
  const {
    Eyebrow
  } = window.SKDS;
  const Title = as;
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "sk-section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(Title, {
    className: titleClass
  }, title), children);
}

// Cadre neutre légendé à la place d'une photo ou d'une vidéo : aucune image de banque, aucun visage généré.
function NeutralFrame({
  caption,
  icon = "image",
  round = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `sk-frame ${round ? "sk-frame--round" : ""} ${className}`.trim(),
    role: "img",
    "aria-label": caption
  }, /*#__PURE__*/React.createElement(SiteIcon, {
    name: icon,
    size: round ? 20 : 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "sk-frame__caption",
    "aria-hidden": "true"
  }, round ? "Photo" : caption));
}

// Coordonnées (brief, écrans 1, 7 et 12) et fondateurs (brief, écran 6). Espaces insécables dans le numéro.
const SK_CONTACT = {
  nom: "Martin Elegeert",
  email: "elegeertmartin.skiss@gmail.com",
  telephone: "+32 499 05 66 43"
};
const SK_FONDATEURS = [{
  nom: "Martin Elegeert",
  role: "Media buying, IA et contenu"
}, {
  nom: "Adam Elegeert",
  role: "Expert média, graphiste, vidéaste, motion designer et IA"
}, {
  nom: "Antoine Kahn",
  role: "[Rôle à confirmer]"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Commun.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// Contact : formulaire (Input et Button du design system), canaux directs et « qui contacter ».
// Libellés repris du site ; « Votre besoin » propose les trois offres 2026 du brief au lieu des cinq options du site.
// Coordonnées : ligne de contact du brief (écrans 1, 7, 12). Ce que les sources ne donnent pas reste entre crochets.
// Maquette : l'envoi n'appelle aucun service, il affiche le message de confirmation du site.

const SK_BESOINS = ["Publicité payante Meta et Google", "Contenu produit en interne", "IA dans les process des équipes"];
function SiteContactForm() {
  const {
    Input,
    Button,
    Badge
  } = window.SKDS;
  const [besoin, setBesoin] = React.useState("");
  const [envoye, setEnvoye] = React.useState(false);
  const onSubmit = e => {
    e.preventDefault();
    setEnvoye(true);
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "sk-form",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom",
    name: "nom",
    type: "text",
    required: true,
    placeholder: "Votre nom",
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    name: "email",
    type: "email",
    required: true,
    placeholder: "votre@email.com",
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sk-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Entreprise",
    name: "entreprise",
    type: "text",
    placeholder: "Nom de votre entreprise",
    autoComplete: "organization"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "T\xE9l\xE9phone",
    name: "telephone",
    type: "tel",
    placeholder: "+32 470 00 00 00",
    autoComplete: "tel"
  })), /*#__PURE__*/React.createElement("fieldset", {
    className: "sk-fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "sk-field__label"
  }, "Votre besoin"), /*#__PURE__*/React.createElement("div", {
    className: "sk-chips"
  }, SK_BESOINS.map(b => /*#__PURE__*/React.createElement(Badge, {
    key: b,
    as: "button",
    type: "button",
    className: "sk-chip",
    tone: besoin === b ? "solid" : "soft",
    "aria-pressed": besoin === b,
    onClick: () => setBesoin(b),
    style: {
      padding: "var(--space-2) var(--space-4)"
    }
  }, b)))), /*#__PURE__*/React.createElement("label", {
    className: "sk-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sk-field__label"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    className: "sk-textarea",
    name: "message",
    rows: 5,
    required: true,
    placeholder: "Parlez-nous de votre projet\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sk-form__submit"
  }, envoye ? /*#__PURE__*/React.createElement("p", {
    className: "sk-form__status",
    role: "status"
  }, /*#__PURE__*/React.createElement(SiteIcon, {
    name: "check",
    size: 20
  }), "Message envoyé ! Nous vous répondons rapidement.") : /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Envoyer le message", /*#__PURE__*/React.createElement(SiteIcon, {
    name: "send",
    size: 16
  }))));
}

// Section de l'accueil.
function SiteContact() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-section",
    id: "contact"
  }, /*#__PURE__*/React.createElement(Halos, {
    items: [{
      color: "var(--orange-deep)",
      opacity: 0.1,
      blur: 120,
      size: 384,
      pos: {
        top: "50%",
        right: -160,
        transform: "translateY(-50%)"
      }
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-narrow"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Parlons-en",
    title: "Lancez votre projet"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sk-section__lead"
  }, SK_CONTACT.nom, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${SK_CONTACT.email}`
  }, SK_CONTACT.email), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "sk-nowrap"
  }, SK_CONTACT.telephone))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.2
  }, /*#__PURE__*/React.createElement(SiteContactForm, null))));
}

// Page Contact : canaux directs et fondateurs à contacter.
const SK_CANAUX = [{
  label: "E-mail",
  valeur: SK_CONTACT.email,
  href: `mailto:${SK_CONTACT.email}`
}, {
  label: "Téléphone",
  valeur: SK_CONTACT.telephone
}, {
  label: "LinkedIn",
  valeur: "[Profil LinkedIn]"
}, {
  label: "Instagram",
  valeur: "[Compte Instagram]"
}];
function SiteContactCanaux({
  onNavigate
}) {
  const {
    Card
  } = window.SKDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-narrow sk-canaux"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "section",
    className: "sk-block"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sk-block__title"
  }, "Nous \xE9crire directement"), /*#__PURE__*/React.createElement("div", {
    className: "sk-grid-2"
  }, SK_CANAUX.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.label,
    style: {
      padding: "var(--space-4) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sk-mini-label"
  }, c.label), /*#__PURE__*/React.createElement("p", {
    className: "sk-mini-value"
  }, c.href ? /*#__PURE__*/React.createElement("a", {
    href: c.href
  }, c.valeur) : /*#__PURE__*/React.createElement("span", {
    className: "sk-nowrap"
  }, c.valeur)))))), /*#__PURE__*/React.createElement(Reveal, {
    as: "section",
    delay: 0.1,
    className: "sk-block"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sk-block__title"
  }, "Qui contacter selon votre besoin"), /*#__PURE__*/React.createElement("div", {
    className: "sk-grid-3"
  }, SK_FONDATEURS.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.nom,
    as: "a",
    href: "#nous",
    interactive: true,
    onClick: e => {
      e.preventDefault();
      onNavigate("nous");
    },
    style: {
      padding: "var(--space-4) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sk-mini-name"
  }, f.nom), /*#__PURE__*/React.createElement("p", {
    className: "sk-mini-role"
  }, f.role))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Equipe.jsx
try { (() => {
// Équipe : les trois fondateurs, cadre photo rond neutre (aucune photo, aucun visage généré).
// Rôles : brief, écran 6. Textes de la page Nous : premier paragraphe de chaque fiche du site (registre nominal) ;
// les paragraphes 2 et 3 de la fiche d'Adam sont à la troisième personne (« il ») et ne sont pas repris.

const SK_FICHES = {
  "Martin Elegeert": "Dix ans à piloter des budgets média. Des campagnes d'acquisition et de lead generation pour des marques en pharmaceutique et en événementiel, sur des objectifs de vente comme de collecte de contacts. Le coût par résultat se gagne dans le détail : structure de compte, ciblage, arbitrage des budgets, itération sur la créa.",
  "Adam Elegeert": "Six ans dans les médias, à développer la notoriété et la visibilité de marques, y compris sur des sites à forte audience. Achat d'espace, choix des formats selon la cible et l'objectif : awareness, trafic ou conversion. Une diffusion pensée pour être vue par les bonnes personnes, au bon moment, avec un suivi de performance à chaque étape.",
  "Antoine Kahn": "[Description à confirmer]"
};
function FounderHead({
  f
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NeutralFrame, {
    round: true,
    caption: `Photo : ${f.nom}`,
    icon: "camera"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "sk-founder__name"
  }, f.nom), /*#__PURE__*/React.createElement("p", {
    className: "sk-founder__role"
  }, f.role));
}

// Aperçu sur l'accueil : cartes cliquables qui mènent à la page Nous.
function SiteEquipe({
  onNavigate
}) {
  const {
    Card
  } = window.SKDS;
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-section",
    id: "equipe"
  }, /*#__PURE__*/React.createElement(Halos, {
    items: [{
      color: "var(--orange)",
      opacity: 0.08,
      blur: 140,
      size: 360,
      pos: {
        bottom: 0,
        left: "10%"
      }
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Qui sommes-nous",
    title: "Les fondateurs"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-grid-3"
  }, SK_FONDATEURS.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.nom,
    delay: i * 0.15,
    className: "sk-stretch"
  }, /*#__PURE__*/React.createElement(Card, {
    as: "a",
    href: "#nous",
    interactive: true,
    "aria-label": `${f.nom}, ${f.role}`,
    onClick: e => {
      e.preventDefault();
      onNavigate("nous");
    },
    style: {
      height: "100%",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(FounderHead, {
    f: f
  })))))));
}

// Page Nous : fiche complète de chaque fondateur.
function SiteFondateurs() {
  const {
    Card
  } = window.SKDS;
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-section sk-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-grid-3 sk-grid-3--start"
  }, SK_FONDATEURS.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.nom,
    delay: i * 0.15
  }, /*#__PURE__*/React.createElement(Card, {
    as: "article",
    interactive: true,
    style: {
      padding: "var(--space-7) var(--space-6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement(FounderHead, {
    f: f
  }), /*#__PURE__*/React.createElement("p", {
    className: "sk-founder__label"
  }, "Le contacter pour"), /*#__PURE__*/React.createElement("p", {
    className: "sk-founder__text"
  }, SK_FICHES[f.nom])))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Equipe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Pied de page : signature blanche (wordmark à 17,8 px, au-dessus du minimum de 16 px), baseline dessinée à sa taille par défaut,
// liens du site, mention de droits du site.

const SK_LIENS_PIED = [{
  label: "Services",
  page: "accueil",
  ancre: "services"
}, {
  label: "Portfolio",
  page: "accueil",
  ancre: "realisations"
}, {
  label: "Nous",
  page: "nous"
}, {
  label: "Contact",
  page: "contact"
}];
function SiteFooter({
  onNavigate
}) {
  const {
    Signature,
    Logo
  } = window.SKDS;
  const go = (e, page, ancre) => {
    e.preventDefault();
    onNavigate(page, ancre);
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "sk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-footer__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#accueil",
    className: "sk-footer__brand",
    "aria-label": "SKISS, accueil",
    onClick: e => go(e, "accueil")
  }, /*#__PURE__*/React.createElement(Signature, {
    layout: "nav",
    tone: "white",
    height: 32
  }), /*#__PURE__*/React.createElement(Logo, {
    variant: "baseline",
    tone: "white"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "sk-footer__links",
    "aria-label": "Pied de page"
  }, SK_LIENS_PIED.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: `#${l.ancre || l.page}`,
    className: "sk-nav__link",
    onClick: e => go(e, l.page, l.ancre)
  }, l.label))), /*#__PURE__*/React.createElement("p", {
    className: "sk-footer__copy"
  }, "\xA9 ", new Date().getFullYear(), " SKISS. Tous droits r\xE9serv\xE9s.")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero de l'accueil (brief, écran 14) : variante sombre chaude, halos orange flous, textes mot pour mot.
// Le mot « convertissent » est rempli du dégradé deck (AccentWord), sans italique.

const SK_HALOS_HERO = [{
  color: "var(--orange)",
  opacity: 0.2,
  blur: 100,
  size: 384,
  pos: {
    top: "25%",
    left: -128
  }
}, {
  color: "var(--orange-deep)",
  opacity: 0.15,
  blur: 100,
  size: 384,
  pos: {
    bottom: "25%",
    right: -128
  }
}, {
  color: "var(--peach)",
  opacity: 0.1,
  blur: 120,
  size: 384,
  pos: {
    top: "33%",
    right: "25%"
  }
}];
function SiteHero({
  onNavigate
}) {
  const {
    Eyebrow,
    AccentWord,
    Button
  } = window.SKDS;
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-hero",
    id: "accueil-hero"
  }, /*#__PURE__*/React.createElement(Halos, {
    items: SK_HALOS_HERO
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-hero__content"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 0
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "R\xEAvez-le, dessinez-le, r\xE9alisez-le")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h1",
    delay: 0.1,
    className: "sk-hero__title"
  }, "On cr\xE9e des histoires", /*#__PURE__*/React.createElement("br", null), "qui ", /*#__PURE__*/React.createElement(AccentWord, null, "convertissent")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    delay: 0.2,
    className: "sk-hero__text"
  }, "Photo, vidéo, montage : les contenus sont produits en interne, jamais sous-traités."), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.3,
    className: "sk-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    onClick: () => onNavigate("contact", "formulaire")
  }, "Lancer votre projet"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("accueil", "realisations")
  }, "Voir nos r\xE9alisations"))), /*#__PURE__*/React.createElement("div", {
    className: "sk-scroll-cue",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null)));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Barre de navigation : spirale + wordmark blancs (proportions du site : 36, 20, écart 12),
// liens Services, Nous, Portfolio, Contact, bouton pilule « Commencer », « FR | EN ».
// Transparente en haut de page, voile sombre flouté après 50 px de défilement (comme le site).

const SK_LIENS_NAV = [{
  label: "Services",
  page: "accueil",
  ancre: "services"
}, {
  label: "Nous",
  page: "nous"
}, {
  label: "Portfolio",
  page: "accueil",
  ancre: "realisations"
}, {
  label: "Contact",
  page: "contact"
}];
function SiteNav({
  page,
  scrolled,
  onNavigate
}) {
  const {
    Signature,
    Button
  } = window.SKDS;
  const go = (e, cible, ancre) => {
    e.preventDefault();
    onNavigate(cible, ancre);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `sk-nav ${scrolled ? "is-scrolled" : ""}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#accueil",
    className: "sk-nav__brand",
    "aria-label": "SKISS, accueil",
    onClick: e => go(e, "accueil")
  }, /*#__PURE__*/React.createElement(Signature, {
    layout: "nav",
    tone: "white"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "sk-nav__links",
    "aria-label": "Navigation principale"
  }, SK_LIENS_NAV.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: `#${l.ancre || l.page}`,
    className: "sk-nav__link",
    "aria-current": !l.ancre && page === l.page ? "page" : undefined,
    onClick: e => go(e, l.page, l.ancre)
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate("contact", "formulaire")
  }, "Commencer"), /*#__PURE__*/React.createElement("span", {
    className: "sk-lang",
    "aria-label": "Langue\u00A0: français"
  }, /*#__PURE__*/React.createElement("b", null, "FR"), /*#__PURE__*/React.createElement("span", {
    className: "sk-lang__sep",
    "aria-hidden": "true"
  }, "|"), /*#__PURE__*/React.createElement("span", null, "EN")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
// Les trois pages du kit : accueil, nous, contact. Textes de page repris du site (titres, surtitres, introduction de
// la page Nous) ; la fin de la page Nous reprend « On en parle ? » (brief, écran 7).

function PageHero({
  eyebrow,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-page-hero"
  }, /*#__PURE__*/React.createElement(Halos, {
    items: [{
      color: "var(--orange)",
      opacity: 0.16,
      blur: 110,
      size: 384,
      pos: {
        top: "10%",
        left: -140
      }
    }, {
      color: "var(--orange-deep)",
      opacity: 0.12,
      blur: 120,
      size: 384,
      pos: {
        top: "30%",
        right: -140
      }
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-narrow"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    as: "h1",
    titleClass: "sk-page-title",
    eyebrow: eyebrow,
    title: title
  }, children ? /*#__PURE__*/React.createElement("p", {
    className: "sk-section__lead"
  }, children) : null)));
}
function PageAccueil({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(SiteServices, null), /*#__PURE__*/React.createElement(SiteRealisations, null), /*#__PURE__*/React.createElement(SiteEquipe, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(SiteContact, null));
}
function PageNous({
  onNavigate
}) {
  const {
    Button
  } = window.SKDS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Qui sommes-nous",
    title: "Les fondateurs"
  }, "SKISS est port\xE9e par trois fondateurs compl\xE9mentaires. Voici qui contacter selon votre besoin."), /*#__PURE__*/React.createElement(SiteFondateurs, null), /*#__PURE__*/React.createElement("section", {
    className: "sk-section sk-section--tight"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "sk-container sk-cta"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sk-cta__title"
  }, "On en parle ?"), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    onClick: () => onNavigate("contact", "formulaire")
  }, "Lancer votre projet"))));
}
function PageContact({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Nous joindre",
    title: "Parlons de votre projet"
  }, "[Comment se passe un premier \xE9change et sous quel d\xE9lai on r\xE9pond]"), /*#__PURE__*/React.createElement(SiteContactCanaux, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("section", {
    className: "sk-section sk-section--tight",
    id: "formulaire"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-container sk-narrow"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "sk-block__title sk-block__title--center"
  }, "Ou remplissez ce formulaire"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement(SiteContactForm, null)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Realisations.jsx
try { (() => {
// Réalisations : les huit projets réels de projects.ts (client, titre, catégorie, année), filtrables par catégorie.
// Titres passés en casse de phrase française, « RS » et « Social media » traduits en « réseaux sociaux » (le brief demande de
// traduire chaque terme technique). The Fin Competition est créditée à Febelfin Academy (le brief prime).
// Pas de photo, pas de logo client : un cadre neutre légendé décrit le média attendu.

const SK_CATEGORIES = ["Tous", "Stratégie", "Branding", "Vidéo", "Événementiel"];
const SK_PROJETS = [{
  client: "Revival Business",
  titre: "Stratégie de communication 360°",
  categorie: "Stratégie",
  annee: "2024",
  media: "image",
  legende: "Visuel : plan de communication Revival Business"
}, {
  client: "Guidelance",
  titre: "Réseaux sociaux & direction artistique",
  categorie: "Stratégie",
  annee: "2024",
  media: "video",
  legende: "Vidéo : contenus Instagram Guidelance"
}, {
  client: "WIP (Working In Progress)",
  titre: "Branding & identité visuelle complète",
  categorie: "Branding",
  annee: "2024",
  media: "image",
  legende: "Visuel : identité visuelle WIP"
}, {
  client: "Febelfin Academy",
  titre: "Aftermovie de The Fin Competition",
  categorie: "Vidéo",
  annee: "2024",
  media: "video",
  legende: "Vidéo : aftermovie de The Fin Competition"
}, {
  client: "Vregas",
  titre: "Production vidéo & contenu",
  categorie: "Vidéo",
  annee: "2024",
  media: "video",
  legende: "Vidéo : vidéos promotionnelles Vregas"
}, {
  client: "La Cité des Nuages",
  titre: "Mini-vidéos & direction artistique réseaux sociaux",
  categorie: "Vidéo",
  annee: "2024",
  media: "video",
  legende: "Vidéo : mini-vidéos La Cité des Nuages"
}, {
  client: "Men at Work",
  titre: "Branding & identité visuelle",
  categorie: "Branding",
  annee: "2024",
  media: "image",
  legende: "Visuel : logotype Men at Work"
}, {
  client: "Wilmeyer",
  titre: "Couverture événementielle complète",
  categorie: "Événementiel",
  annee: "2024",
  media: "camera",
  legende: "Photo : tournoi de padel Wilmeyer"
}];
function SiteRealisations() {
  const {
    Badge,
    Card
  } = window.SKDS;
  const [filtre, setFiltre] = React.useState("Tous");
  const liste = filtre === "Tous" ? SK_PROJETS : SK_PROJETS.filter(p => p.categorie === filtre);
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-section",
    id: "realisations"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "D\xE9couvrez nos projets r\xE9cents",
    title: "Nos r\xE9alisations"
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1,
    className: "sk-filters",
    role: "group",
    "aria-label": "Filtrer par cat\xE9gorie"
  }, SK_CATEGORIES.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    as: "button",
    type: "button",
    className: "sk-chip",
    tone: filtre === c ? "solid" : "soft",
    "aria-pressed": filtre === c,
    onClick: () => setFiltre(c),
    style: {
      padding: "var(--space-2) var(--space-4)"
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "sk-projects"
  }, liste.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: `${filtre}-${p.client}`,
    delay: i % 4 * 0.08
  }, /*#__PURE__*/React.createElement(Card, {
    as: "article",
    style: {
      padding: 0,
      overflow: "hidden",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-project__media"
  }, /*#__PURE__*/React.createElement(NeutralFrame, {
    caption: p.legende,
    icon: p.media
  }), /*#__PURE__*/React.createElement(Badge, {
    className: "sk-project__badge",
    style: {
      background: "color-mix(in srgb, var(--dark-900) 72%, transparent)"
    }
  }, p.categorie)), /*#__PURE__*/React.createElement("div", {
    className: "sk-project__info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sk-project__meta"
  }, /*#__PURE__*/React.createElement("span", null, p.client), /*#__PURE__*/React.createElement("span", null, p.annee)), /*#__PURE__*/React.createElement("h3", {
    className: "sk-project__title"
  }, p.titre))))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Realisations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services : les trois offres 2026 du brief (« Qui est SKISS »), à la place des trois services du site.
// Accroches et textes repris des sources : brief (écran 12, « Phrases réelles ») et fiche de Martin sur le site.
// Aucune grille de prix ici ; l'offre IA est en cours de validation et ne montre aucun prix.

const SK_SERVICES = [{
  icon: "trending-up",
  titre: "Publicité payante Meta et Google",
  accroche: "Rien ne se lance sans tracking.",
  texte: "Un compte publicitaire se pilote dans cet ordre : on regarde ce qui existe, on construit ce qui manque, puis on pilote dans la durée. Le budget média est payé directement par l'annonceur."
}, {
  icon: "camera",
  titre: "Contenu produit en interne",
  accroche: "Une vidéo tournée une fois sert partout : Reel Instagram, Reel Facebook et TikTok.",
  texte: "Photo, vidéo, aftermovies, reels, gestion mensuelle des réseaux sociaux."
}, {
  icon: "workflow",
  titre: "IA dans les process des équipes",
  accroche: "L'IA comme méthode, pas comme gadget.",
  texte: "Son implémentation dans vos process internes : tâches répétitives automatisées, production accélérée, décisions appuyées sur la donnée plutôt que sur l'intuition."
}];
function SiteServices() {
  const {
    Card
  } = window.SKDS;
  return /*#__PURE__*/React.createElement("section", {
    className: "sk-section",
    id: "services"
  }, /*#__PURE__*/React.createElement(Halos, {
    items: [{
      color: "var(--orange-light)",
      opacity: 0.1,
      blur: 120,
      size: 320,
      pos: {
        top: 0,
        right: 0
      }
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Ce que nous faisons",
    title: "Nos services"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sk-grid-3"
  }, SK_SERVICES.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.titre,
    delay: i * 0.15,
    className: "sk-stretch"
  }, /*#__PURE__*/React.createElement(Card, {
    as: "article",
    interactive: true,
    style: {
      height: "100%",
      padding: "var(--space-7) var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sk-service__icon"
  }, /*#__PURE__*/React.createElement(SiteIcon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sk-service__title"
  }, s.titre), /*#__PURE__*/React.createElement("p", {
    className: "sk-service__hook"
  }, s.accroche), /*#__PURE__*/React.createElement("p", {
    className: "sk-service__text"
  }, s.texte)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Capsule = __ds_scope.Capsule;

__ds_ns.KeyFigure = __ds_scope.KeyFigure;

__ds_ns.NumberedCard = __ds_scope.NumberedCard;

__ds_ns.PostFrame = __ds_scope.PostFrame;

__ds_ns.PriceTable = __ds_scope.PriceTable;

__ds_ns.ProcessSteps = __ds_scope.ProcessSteps;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.StepChevrons = __ds_scope.StepChevrons;

__ds_ns.AccentWord = __ds_scope.AccentWord;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Signature = __ds_scope.Signature;

__ds_ns.ThemeSection = __ds_scope.ThemeSection;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

})();
