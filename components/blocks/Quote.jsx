import React from "react";

// Racine des assets, calculée depuis l'emplacement du bundle compilé.
const SK_ROOT = (document.currentScript && document.currentScript.src) ? new URL(".", document.currentScript.src).href : (window.SKISS_ASSET_BASE || "");

const SPIRAL_H = 228;               // hauteur de la spirale dans la citation du deck (p3), sous le plafond de 350 px
const SPIRAL_RATIO = 334 / 349;

function Spiral({ tone, src }) {
  const size = { height: SPIRAL_H, width: SPIRAL_H * SPIRAL_RATIO, maxWidth: "none" };
  if (src) return <img src={src} alt="" draggable={false} style={{ display: "block", ...size }} />;
  const black = `${SK_ROOT}assets/logos/spiral-black.png`;
  const white = `${SK_ROOT}assets/logos/spiral-white.png`;
  if (tone === "black" || tone === "white") {
    return <img src={tone === "black" ? black : white} alt="" draggable={false} style={{ display: "block", ...size }} />;
  }
  // auto : noire sur carte claire, blanche sur carte sombre, selon la surface fournie par le cadre.
  return (
    <>
      <img src={black} alt="" draggable={false} style={{ display: "var(--sk-card-logo-black, block)", ...size }} />
      <img src={white} alt="" draggable={false} style={{ display: "var(--sk-card-logo-white, none)", ...size }} />
    </>
  );
}

/**
 * SKISS Quote : grande carte claire (1722 x 870 dans le deck), spirale à gauche, citation en Khand Regular 108 px
 * entre guillemets français (ajoutés par le composant, espace fine insécable à l'intérieur), auteur en Hind Bold 36 px.
 */
export function Quote({ children, author, spiral = true, spiralTone = "auto", src, className = "", style = {}, ...props }) {
  return (
    <figure className={`sk-quote ${className}`.trim()}
      style={{ flex: "1 1 auto", display: "flex", alignItems: "center", gap: 64, width: "100%", minHeight: 560, margin: 0,
        padding: "80px 120px 80px 96px", borderRadius: "var(--radius-card-slide)", background: "var(--sk-card-bg, var(--capsule-bg))",
        border: "1px solid var(--sk-card-border, transparent)", color: "var(--sk-card-text, var(--ink))", ...style }}
      {...props}>
      {spiral ? (
        <div style={{ flex: "0 0 300px", display: "flex", justifyContent: "center", lineHeight: 0 }}>
          <Spiral tone={spiralTone} src={src} />
        </div>
      ) : null}
      <div style={{ flex: "1 1 auto", minWidth: 0, display: "flex", flexDirection: "column" }}>
        <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-regular)",
          fontSize: "var(--slide-quote)", lineHeight: "var(--leading-deck)", textWrap: "balance" }}>
          «{"\u202F"}{children}{"\u202F"}»
        </blockquote>
        {author ? (
          <figcaption style={{ marginTop: 40, fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)",
            fontSize: "var(--slide-body)", lineHeight: "var(--leading-deck)" }}>{author}</figcaption>
        ) : null}
      </div>
    </figure>
  );
}
