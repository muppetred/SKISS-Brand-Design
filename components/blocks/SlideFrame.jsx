import React from "react";

// Racine des assets, calculée depuis l'emplacement du bundle compilé.
const SK_ROOT = (document.currentScript && document.currentScript.src) ? new URL(".", document.currentScript.src).href : (window.SKISS_ASSET_BASE || "");

const SLIDE_W = 1920;
const SLIDE_H = 1080;

// Signature de page mesurée dans le deck 2024 : spirale 55 px, wordmark 45 px, écart 8 px, soit 225 px de large
// (--slide-signature-w), à 48 px du bord droit et du bord bas (--slide-signature-inset).
const SIG = { spiralH: 55, wordH: 45, gap: 8 };
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
  "--sk-card-logo-white": "none",
};
const CARDS_ON_WHITE = { ...CARDS_ON_COLOR, "--sk-card-bg": "var(--cream)" };
const CARDS_ON_CREAM = { ...CARDS_ON_COLOR, "--sk-card-bg": "var(--white)", "--sk-card-solid": "var(--white)" };
const CARDS_ON_DARK = {
  "--sk-card-bg": "var(--dark-800)",
  "--sk-card-solid": "var(--dark-800)",
  "--sk-card-text": "var(--dark-text)",
  "--sk-card-border": "var(--dark-600)",
  "--sk-card-logo-black": "none",
  "--sk-card-logo-white": "block",
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
  "--logo-tone": "black",
};

const THEMES = {
  gradient: { className: "theme-gradient", tone: "white", vars: CARDS_ON_COLOR },
  burnt: { className: "theme-burnt", tone: "white", vars: CARDS_ON_COLOR },
  dark: { className: "theme-dark", tone: "white", vars: CARDS_ON_DARK },
  light: { className: "", tone: "black", vars: { ...LIGHT_TOKENS, ...CARDS_ON_WHITE } },
  cream: { className: "theme-cream", tone: "black", vars: CARDS_ON_CREAM },
};

function FrameSignature({ tone, src }) {
  const t = tone === "black" ? "black" : "white";
  const spiralSrc = (src && src.spiral) || `${SK_ROOT}assets/logos/spiral-${t}.png`;
  const wordmarkSrc = (src && src.wordmark) || `${SK_ROOT}assets/logos/wordmark-${t}.png`;
  return (
    <div role="img" aria-label="SKISS"
      style={{ position: "absolute", zIndex: 2, right: "var(--slide-signature-inset)", bottom: "var(--slide-signature-inset)",
        display: "flex", alignItems: "center", gap: SIG.gap, lineHeight: 0 }}>
      <img src={spiralSrc} alt="" draggable={false}
        style={{ display: "block", height: SIG.spiralH, width: SIG.spiralH * SPIRAL_RATIO, maxWidth: "none" }} />
      <img src={wordmarkSrc} alt="" draggable={false}
        style={{ display: "block", height: SIG.wordH, width: SIG.wordH * WORDMARK_RATIO, maxWidth: "none" }} />
    </div>
  );
}

/**
 * SKISS SlideFrame : cadre 16:9 de 1920 x 1080 sur la grille du deck 2024.
 * Marges latérales 100 px, haut des blocs à 104 px (228 px sous un titre), signature spirale + wordmark en bas à droite.
 * Bas des blocs à 104 px du bord, 128 px avec la signature (24 px d'air au-dessus d'elle).
 * scale réduit l'affichage par transform (nombre, ou "fit" pour suivre la largeur du parent).
 */
export function SlideFrame({ theme = "gradient", title, signature = true, signatureTone = "auto", signatureSrc,
  scale = 1, children, className = "", style = {}, ...props }) {
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

  const frame = (
    <div className={`sk-slide ${t.className} ${className}`.trim()}
      style={{ position: "relative", isolation: "isolate", width: SLIDE_W, height: SLIDE_H, overflow: "hidden", background: "var(--background)",
        color: "var(--text)", fontFamily: "var(--font-sans)", ...t.vars, ...style }}
      {...props}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%",
        padding: `${title ? "40px" : "var(--slide-top)"} var(--slide-margin-x) ${signature ? "128px" : "var(--slide-top)"}` }}>
        {title ? (
          <h2 style={{ position: "relative", zIndex: 1, flex: "none", margin: 0, minHeight: 188, paddingBottom: 24,
            textAlign: "center", fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--slide-title)",
            lineHeight: "var(--leading-deck)", color: "var(--text)" }}>{title}</h2>
        ) : null}
        <div style={{ flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {children}
        </div>
      </div>
      {signature ? <FrameSignature tone={tone} src={signatureSrc} /> : null}
    </div>
  );

  const s = fit ? fitScale : (Number(scale) || 1);
  if (!fit && s === 1) return frame;
  return (
    <div ref={boxRef} className="sk-slide-scaler"
      style={{ position: "relative", width: fit ? "100%" : SLIDE_W * s, height: SLIDE_H * s }}>
      <div style={{ width: SLIDE_W, height: SLIDE_H, transform: `scale(${s})`, transformOrigin: "0 0" }}>{frame}</div>
    </div>
  );
}
