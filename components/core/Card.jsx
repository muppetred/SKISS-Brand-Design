import React from "react";

/**
 * SKISS Card : carte web (rayon 16 px, bordure 1 px var(--border), fond var(--surface)).
 * Clair : blanc et bordure encre à 14 %. Sombre : #1C1A17 et bordure #322F2A. Dégradés : blanc à 62 % (capsule).
 * elevated    = ombre très douce, en encre à 14 %.
 * interactive = bordure orange à 30 % au survol (état du site), curseur main.
 */
export function Card({
  elevated = false,
  interactive = false,
  as = "div",
  children,
  style = {},
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = as;
  const isHover = interactive && hovered;
  return (
    <Tag
      onMouseEnter={(e) => { setHovered(true); if (onMouseEnter) onMouseEnter(e); }}
      onMouseLeave={(e) => { setHovered(false); if (onMouseLeave) onMouseLeave(e); }}
      style={{
        display: "block",
        boxSizing: "border-box",
        margin: 0,
        padding: "var(--space-5)",
        background: "var(--surface)",
        color: "var(--text)",
        border: "1px solid",
        borderColor: isHover ? "var(--orange-o30)" : "var(--border)",
        borderRadius: "var(--radius-card)",
        boxShadow: elevated ? "0 2px 6px -2px var(--ink-o14), 0 16px 32px -20px var(--ink-o14)" : "none",
        cursor: interactive ? "pointer" : undefined,
        textDecoration: "none",
        transition: "border-color var(--duration-fast) var(--ease-out)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
