import React from "react";

/**
 * SKISS KeyFigure : chiffre clé en Khand 144 px et légende en Hind 36 px.
 * Couleur du thème englobant (--text) : encre sur le dégradé deck, blanc sur l'aplat brûlé ou le fond sombre.
 */
export function KeyFigure({ value, caption, align = "left", className = "", style = {}, ...props }) {
  const center = align === "center";
  return (
    <div className={`sk-key-figure ${className}`.trim()}
      style={{ display: "flex", flexDirection: "column", alignItems: center ? "center" : "flex-start", gap: 12,
        textAlign: center ? "center" : "left", color: "var(--text)", ...style }}
      {...props}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-regular)", fontSize: "var(--slide-figure)",
        lineHeight: 1, whiteSpace: "nowrap" }}>{value}</div>
      {caption ? (
        <p style={{ margin: 0, maxWidth: 480, fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
          lineHeight: "var(--leading-deck)" }}>{caption}</p>
      ) : null}
    </div>
  );
}
