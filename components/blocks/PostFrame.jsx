import React from "react";

// Racine des assets, calculée depuis l'emplacement du bundle compilé.
const SK_ROOT = (document.currentScript && document.currentScript.src) ? new URL(".", document.currentScript.src).href : (window.SKISS_ASSET_BASE || "");

// Formats Instagram. Marges du post mesurées sur canva-wilmeyer-01 (108 px sur les côtés, 110 px en bas).
// Zone sûre du reel (proposition) : 14 % en haut, 35 % en bas, hors interface Instagram.
const FORMATS = {
  post: { w: 1080, h: 1350, top: 108, bottom: 110 },
  reel: { w: 1080, h: 1920, top: 270, bottom: 672 },
};

// Signature de post (proposition) : 200 px de large, proportions du deck (spirale 55, wordmark 45, écart 8).
const SIG_W = 200;
const SIG = { spiralH: 55 * SIG_W / 225, wordH: 45 * SIG_W / 225, gap: 8 * SIG_W / 225 };
const SPIRAL_RATIO = 334 / 349;
const WORDMARK_RATIO = 3000 / 822;

const CARDS_ON_COLOR = {
  "--sk-card-bg": "var(--capsule-bg)",
  "--sk-card-solid": "var(--cream)",
  "--sk-card-text": "var(--ink)",
  "--sk-card-border": "transparent",
  "--sk-card-logo-black": "block",
  "--sk-card-logo-white": "none",
};
const CARDS_ON_DARK = {
  "--sk-card-bg": "var(--dark-800)",
  "--sk-card-solid": "var(--dark-800)",
  "--sk-card-text": "var(--dark-text)",
  "--sk-card-border": "var(--dark-600)",
  "--sk-card-logo-black": "none",
  "--sk-card-logo-white": "block",
};
const LIGHT_TOKENS = {
  "--background": "var(--white)",
  "--surface": "var(--white)",
  "--surface-soft": "var(--cream)",
  "--text": "var(--ink)",
  "--text-muted": "var(--ink-o72)",
  "--heading-accent": "var(--orange-burnt)",
  "--border": "var(--ink-o14)",
  "--logo-tone": "black",
};

// Signature noire dans la moitié claire du dégradé social (15,72:1 en bas à droite).
const THEMES = {
  social: { className: "theme-social", tone: "black", vars: CARDS_ON_COLOR },
  light: { className: "", tone: "black", vars: { ...LIGHT_TOKENS, ...CARDS_ON_COLOR, "--sk-card-bg": "var(--cream)" } },
  cream: { className: "theme-cream", tone: "black", vars: { ...CARDS_ON_COLOR, "--sk-card-bg": "var(--white)", "--sk-card-solid": "var(--white)" } },
  dark: { className: "theme-dark", tone: "white", vars: CARDS_ON_DARK },
  burnt: { className: "theme-burnt", tone: "white", vars: CARDS_ON_COLOR },
};

// Formes organiques en S, plus claires que le fond, relevées sur skiss-visuel-instagram-2026.png.
// Tracées sur 1080 x 1350 ; en reel, les ordonnées suivent la hauteur.
function SocialShapes({ w, h }) {
  const k = h / 1350;
  const y = (v) => Math.round(v * k);
  const shapes = [
    { fill: "var(--shape-1)", opacity: 0.6,
      d: `M640 0C560 ${y(130)} 500 ${y(270)} 530 ${y(410)}C570 ${y(600)} 720 ${y(720)} 880 ${y(800)}C990 ${y(855)} 1050 ${y(930)} 1080 ${y(1000)}L1080 0Z` },
    { fill: "var(--shape-2)", opacity: 0.65,
      d: `M0 ${y(1085)}C170 ${y(1035)} 330 ${y(1060)} 480 ${y(1120)}C640 ${y(1185)} 770 ${y(1250)} 890 ${y(1235)}C990 ${y(1222)} 1050 ${y(1160)} 1080 ${y(1110)}L1080 ${h}L0 ${h}Z` },
    { fill: "var(--shape-3)", opacity: 0.75,
      d: `M0 ${y(1290)}C130 ${y(1235)} 270 ${y(1250)} 390 ${y(1300)}C430 ${y(1318)} 470 ${y(1336)} 505 ${h}L0 ${h}Z` },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: -1, display: "block", pointerEvents: "none" }}>
      {shapes.map((s, i) => <path key={i} d={s.d} style={{ fill: s.fill, opacity: s.opacity }} />)}
    </svg>
  );
}

function FrameSignature({ tone, src, inset, bottom }) {
  const t = tone === "black" ? "black" : "white";
  const spiralSrc = (src && src.spiral) || `${SK_ROOT}assets/logos/spiral-${t}.png`;
  const wordmarkSrc = (src && src.wordmark) || `${SK_ROOT}assets/logos/wordmark-${t}.png`;
  return (
    <div role="img" aria-label="SKISS"
      style={{ position: "absolute", zIndex: 2, right: inset, bottom, display: "flex", alignItems: "center", gap: SIG.gap, lineHeight: 0 }}>
      <img src={spiralSrc} alt="" draggable={false}
        style={{ display: "block", height: SIG.spiralH, width: SIG.spiralH * SPIRAL_RATIO, maxWidth: "none" }} />
      <img src={wordmarkSrc} alt="" draggable={false}
        style={{ display: "block", height: SIG.wordH, width: SIG.wordH * WORDMARK_RATIO, maxWidth: "none" }} />
    </div>
  );
}

/**
 * SKISS PostFrame : cadre Instagram 1080 x 1350 (post) ou 1080 x 1920 (reel).
 * Thème social par défaut : dégradé social et formes en S translucides, signature noire en bas à droite.
 * Le contenu se pose en bas de la zone utile ; scale réduit l'affichage par transform (nombre ou "fit").
 */
export function PostFrame({ format = "post", theme = "social", shapes = true, signature = true, signatureTone = "auto",
  signatureSrc, scale = 1, children, className = "", style = {}, ...props }) {
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
  const frame = (
    <div className={`sk-post ${t.className} ${className}`.trim()}
      style={{ position: "relative", isolation: "isolate", width: f.w, height: f.h, overflow: "hidden", background: "var(--background)",
        color: "var(--text)", fontFamily: "var(--font-sans)", ...t.vars, ...style }}
      {...props}>
      {theme === "social" && shapes ? <SocialShapes w={f.w} h={f.h} /> : null}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%",
        padding: `${f.top}px var(--post-margin-x) ${bottomPad}px` }}>
        {children}
      </div>
      {signature ? <FrameSignature tone={tone} src={signatureSrc} inset="var(--post-margin-x)" bottom={f.bottom} /> : null}
    </div>
  );

  const s = fit ? fitScale : (Number(scale) || 1);
  if (!fit && s === 1) return frame;
  return (
    <div ref={boxRef} className="sk-post-scaler"
      style={{ position: "relative", width: fit ? "100%" : f.w * s, height: f.h * s }}>
      <div style={{ width: f.w, height: f.h, transform: `scale(${s})`, transformOrigin: "0 0" }}>{frame}</div>
    </div>
  );
}
