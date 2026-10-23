import React from "react";

/**
 * SKISS SectionTitle : mot d'intercalaire en Khand Regular 230 px, en capitales, centré.
 * tone "auto" : couleur du thème (encre sur le dégradé deck). tone "white" : blanc sur un voile encre à 41 %
 * (4,5:1 au bord le plus clair du dégradé), posé sur tout le cadre positionné le plus proche (SlideFrame, PostFrame).
 */
export function SectionTitle({ children, tone = "auto", className = "", style = {}, ...props }) {
  const white = tone === "white";
  return (
    <div className={`sk-section-title ${className}`.trim()}
      style={{ flex: "1 1 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", ...style }}
      {...props}>
      {white ? <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, background: "var(--veil-ink-41)" }} /> : null}
      <h2 style={{ position: "relative", zIndex: 1, margin: 0, textAlign: "center", fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-regular)", fontSize: "var(--slide-section)", lineHeight: "var(--leading-tight)",
        textTransform: "uppercase", color: white ? "var(--white)" : "var(--text)" }}>{children}</h2>
    </div>
  );
}
