import React from "react";

/**
 * SKISS Button : pilule.
 * primary   = aplat du thème (var(--btn-primary-bg) / var(--btn-primary-text)) : orange #ED7D31 et texte encre (6,86:1)
 *             en clair et en sombre, encre et texte blanc sur les dégradés, blanc et texte brûlé sur .theme-burnt.
 * secondary = contour 1 px (var(--btn-secondary-border)), rempli de var(--btn-secondary-bg-hover) au survol.
 * gradient  = premier segment du dégradé deck (#F4B081 vers #ED7F36), texte encre #12100C (6,96:1 au minimum).
 *             Jamais le dégradé deck complet sous un texte. Sur .theme-gradient, il se confond avec le fond : utiliser primary.
 * États : survol (bouton plein à 90 % d'opacité), focus clavier 2 px en var(--ring) (règle :focus-visible de base.css,
 * reproduite ici quand state="focus"), désactivé à 60 % d'opacité.
 */
export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  state,
  disabled = false,
  type,
  children,
  style = {},
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = as;
  const isHover = !disabled && (state === "hover" || hovered);
  const isFocus = state === "focus";

  const sizes = {
    sm: { padding: "var(--space-2) var(--space-4)", fontSize: "var(--text-small)" },
    md: { padding: "var(--space-3) var(--space-5)", fontSize: "var(--text-main)" },
    lg: { padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-lead)" },
  };
  const variants = {
    primary: { background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)", borderColor: "transparent" },
    secondary: {
      background: isHover ? "var(--btn-secondary-bg-hover)" : "var(--btn-secondary-bg)",
      color: "var(--btn-secondary-text)",
      borderColor: "var(--btn-secondary-border)",
    },
    gradient: { background: "var(--gradient-deck-start)", color: "var(--ink)", borderColor: "transparent" },
  };
  const filled = variant !== "secondary";

  return (
    <Tag
      type={Tag === "button" ? type || "button" : type}
      disabled={Tag === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onMouseEnter={(e) => { setHovered(true); if (onMouseEnter) onMouseEnter(e); }}
      onMouseLeave={(e) => { setHovered(false); if (onMouseLeave) onMouseLeave(e); }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5em",
        boxSizing: "border-box",
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        textDecoration: "none",
        borderRadius: "var(--radius-pill)",
        borderWidth: "1px",
        borderStyle: "solid",
        cursor: disabled ? "not-allowed" : "pointer",
        pointerEvents: disabled && Tag !== "button" ? "none" : undefined,
        opacity: disabled ? 0.6 : filled && isHover ? 0.9 : 1,
        transition: "opacity var(--duration-fast) var(--ease-out), background-color var(--duration-fast) var(--ease-out)",
        ...(isFocus ? { outline: "2px solid var(--ring)", outlineOffset: "2px" } : null),
        ...(sizes[size] || sizes.md),
        ...(variants[variant] || variants.primary),
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
