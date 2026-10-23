import React from "react";

const SK_ROOT = (document.currentScript && document.currentScript.src) ? new URL(".", document.currentScript.src).href : (window.SKISS_ASSET_BASE || "");

// Proportions mesurées : deck 2024 sur 1920 x 1080 (spirale 55, wordmark 45, écart 8, soit 225 px de large)
// et barre de navigation du site (spirale 36, wordmark 20, écart 12).
const LAYOUTS = {
  page: { h: 55, word: 45 / 55, gap: 8 / 55 },
  nav: { h: 36, word: 20 / 36, gap: 12 / 36 },
};
const SPIRAL_RATIO = 334 / 349;
const WORDMARK_RATIO = 3000 / 822;

/**
 * SKISS Signature : spirale + wordmark côte à côte, centrés verticalement, composés avec les deux PNG officiels.
 * height = hauteur de la spirale ; wordmark et écart suivent la proportion choisie.
 */
export function Signature({ height, tone = "black", layout = "page", src, alt = "SKISS", style = {}, ...props }) {
  const p = LAYOUTS[layout] || LAYOUTS.page;
  const h = height != null ? height : p.h;
  const wordH = h * p.word;
  const t = tone === "white" ? "white" : "black";
  const spiralSrc = (src && src.spiral) || `${SK_ROOT}assets/logos/spiral-${t}.png`;
  const wordmarkSrc = (src && src.wordmark) || `${SK_ROOT}assets/logos/wordmark-${t}.png`;
  const px = (n) => `${Math.round(n * 100) / 100}px`;
  return (
    <span
      role="img"
      aria-label={alt}
      style={{ display: "inline-flex", alignItems: "center", gap: px(h * p.gap), lineHeight: 0, flexShrink: 0, ...style }}
      {...props}
    >
      <img src={spiralSrc} alt="" draggable={false}
        style={{ display: "block", height: px(h), width: px(h * SPIRAL_RATIO), maxWidth: "none", objectFit: "contain" }} />
      <img src={wordmarkSrc} alt="" draggable={false}
        style={{ display: "block", height: px(wordH), width: px(wordH * WORDMARK_RATIO), maxWidth: "none", objectFit: "contain" }} />
    </span>
  );
}
