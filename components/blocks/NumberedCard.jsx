import React from "react";

// Les quatre nuances, du foncé au clair, dans l'ordre de numérotation du brief.
const SHADES = { 1: "var(--orange-burnt)", 2: "var(--orange-deep)", 3: "var(--orange-light)", 4: "var(--peach)" };

// Pictogrammes Lucide (le jeu du site, licence ISC), tracés en 24 x 24, trait par défaut de 2.
const ICONS = {
  search: [["circle", { cx: 11, cy: 11, r: 8 }], ["path", { d: "m21 21-4.3-4.3" }]],
  compass: [["path", { d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }], ["circle", { cx: 12, cy: 12, r: 10 }]],
  wrench: [["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }]],
  "trending-up": [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }], ["polyline", { points: "16 7 22 7 22 13" }]],
  camera: [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }], ["circle", { cx: 12, cy: 13, r: 3 }]],
  video: [["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }], ["rect", { x: 2, y: 6, width: 14, height: 12, rx: 2 }]],
  target: [["circle", { cx: 12, cy: 12, r: 10 }], ["circle", { cx: 12, cy: 12, r: 6 }], ["circle", { cx: 12, cy: 12, r: 2 }]],
  "calendar-check": [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: 18, height: 18, x: 3, y: 4, rx: 2 }], ["path", { d: "M3 10h18" }], ["path", { d: "m9 16 2 2 4-4" }]],
};

function LineIcon({ name, size }) {
  const shapes = ICONS[name];
  if (!shapes) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block" }}>
      {shapes.map(([Tag, attrs], i) => <Tag key={i} {...attrs} />)}
    </svg>
  );
}

/**
 * SKISS NumberedCard : pilule verticale (17,4 % de la largeur d'une slide dans le deck), disque plein en haut,
 * chiffre Khand 132 px en encre, libellé Khand 56 px en capitales, pictogramme au trait en bas.
 * Le disque prend la nuance shade (1 à 4, du foncé au clair) ; par défaut, celle qui suit le numéro.
 */
export function NumberedCard({ number, label, shade, icon, className = "", style = {}, ...props }) {
  const n = Number(number);
  const s = SHADES[shade] ? shade : (Number.isFinite(n) && n > 0 ? ((n - 1) % 4) + 1 : 1);
  const iconEl = typeof icon === "string" ? <LineIcon name={icon} size={120} /> : icon;
  return (
    <div className={`sk-numbered-card ${className}`.trim()}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", minHeight: 640,
        padding: 28, borderRadius: "var(--radius-pill)", background: "var(--sk-card-bg, var(--capsule-bg))",
        border: "1px solid var(--sk-card-border, transparent)", color: "var(--sk-card-text, var(--ink))", ...style }}
      {...props}>
      <div style={{ flex: "none", width: "100%", aspectRatio: "1 / 1", borderRadius: "50%", background: SHADES[s],
        display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink)", fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-regular)", fontSize: "var(--slide-number)", lineHeight: 1 }}>{number}</div>
      <div style={{ flex: "1 1 auto", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 8px",
        textAlign: "center", fontFamily: "var(--font-display)", fontWeight: "var(--fw-regular)", fontSize: "var(--slide-label)",
        lineHeight: "var(--leading-deck)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase" }}>{label}</div>
      {iconEl ? <div style={{ flex: "none", paddingBottom: 56, lineHeight: 0 }}>{iconEl}</div> : null}
    </div>
  );
}
