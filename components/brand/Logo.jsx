import React from "react";

// Racine du design system, déduite de l'emplacement du bundle compilé (ds/_ds_bundle.js).
const SK_ROOT = (document.currentScript && document.currentScript.src) ? new URL(".", document.currentScript.src).href : (window.SKISS_ASSET_BASE || "");

// Fichiers officiels de assets/logos. Pour le logo complet, le PNG fait foi sur le SVG (recomposition).
// ratio = largeur / hauteur du fichier ; h = hauteur par défaut, au minimum d'usage à l'écran.
const LOGO_FILES = {
  vertical: { file: "logo-vertical", ext: "png", ratio: 771 / 860, h: 258 },        // 230 px de large au moins
  horizontal: { file: "logo-horizontal", ext: "png", ratio: 1099 / 524, h: 156 },   // 325 px de large au moins
  bulb: { file: "bulb", ext: "svg", ratio: 150.196 / 250.763, h: 155 },             // 155 px de haut au moins
  spiral: { file: "spiral", ext: "png", ratio: 334 / 349, h: 55 },                   // 350 px au plus
  wordmark: { file: "wordmark", ext: "png", ratio: 3000 / 822, h: 45 },             // 16 px de haut au moins
  baseline: { file: "baseline", ext: "svg", ratio: 244.15 / 11.1, h: 11 },
};

/**
 * SKISS Logo : affiche un fichier officiel tel quel, sans recoloration, déformation ni effet.
 * tone black sur fond clair ; white sur dégradé deck, aplat orange, fond sombre ou photo voilée.
 * Le wordmark n'est jamais retapé dans une police : c'est toujours l'image.
 */
export function Logo({ variant = "vertical", tone = "black", height, src, alt, style = {}, ...props }) {
  const v = LOGO_FILES[variant] || LOGO_FILES.vertical;
  const h = height != null ? height : v.h;
  const numeric = typeof h === "number";
  const url = src || `${SK_ROOT}assets/logos/${v.file}-${tone === "white" ? "white" : "black"}.${v.ext}`;
  const label = alt != null ? alt : variant === "baseline" ? "Dream it, design it, do it" : "SKISS";
  return (
    <img
      src={url}
      alt={label}
      draggable={false}
      style={{
        display: "block",
        flexShrink: 0,
        height: numeric ? `${h}px` : h,
        width: numeric && !src ? `${Math.round(h * v.ratio * 100) / 100}px` : "auto",
        maxWidth: "none",
        objectFit: "contain",
        ...style,
      }}
      {...props}
    />
  );
}
