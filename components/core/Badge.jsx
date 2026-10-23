import React from "react";

/**
 * SKISS Badge : étiquette en pilule, Hind Bold 14 px.
 * soft    = var(--surface-soft) et var(--text) : crème #F6D9C7 et encre en clair, #272520 et #EFECE7 en sombre,
 *           blanc à 62 % et encre sur les dégradés, #BD5713 et blanc sur .theme-burnt (4,63:1).
 * solid   = aplat principal du thème (var(--btn-primary-bg) / var(--btn-primary-text)).
 * outline = contour et texte en var(--heading-accent) : #B45311 sur blanc (5,02:1), #ED7D31 sur sombre (6,86:1).
 */
export function Badge({ tone = "soft", as = "span", children, style = {}, ...props }) {
  const Tag = as;
  const tones = {
    soft: { background: "var(--surface-soft)", color: "var(--text)", borderColor: "transparent" },
    solid: { background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)", borderColor: "transparent" },
    outline: { background: "transparent", color: "var(--heading-accent)", borderColor: "currentColor" },
  };
  return (
    <Tag
      style={{
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
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
