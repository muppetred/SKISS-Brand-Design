import React from "react";

/**
 * SKISS Capsule : bande pleine largeur en pilule (1720 x 169 dans le deck), texte Hind Bold 56 px centré.
 * Fond blanc à 62 % et texte encre sur couleur ; le cadre (SlideFrame, PostFrame) fournit la surface adaptée
 * sur fond clair (crème opaque) ou sombre via --sk-card-bg et --sk-card-text.
 */
export function Capsule({ children, className = "", style = {}, ...props }) {
  return (
    <div className={`sk-capsule ${className}`.trim()}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: 169,
        padding: "24px 96px", borderRadius: "var(--radius-pill)", background: "var(--sk-card-bg, var(--capsule-bg))",
        border: "1px solid var(--sk-card-border, transparent)", color: "var(--sk-card-text, var(--ink))",
        fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: "var(--slide-capsule)",
        lineHeight: "var(--leading-deck)", textAlign: "center", ...style }}
      {...props}>
      {children}
    </div>
  );
}
