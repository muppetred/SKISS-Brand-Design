import React from "react";

/**
 * SKISS AccentWord : mot accent d'un titre, en Khand Bold rempli du premier segment du dégradé deck
 * (#F4B081 vers #ED7F36), sans italique. Remplace le mot en italique et en dégradé du site.
 * Sur fond sombre (#12100C : 6,9 à 10,3:1). Pas sur fond blanc, crème ni sur les dégradés orange (contraste insuffisant).
 */
export function AccentWord({ as = "span", children, style = {}, ...props }) {
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-bold)",
        fontStyle: "normal",
        background: "var(--gradient-deck-start)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        WebkitBoxDecorationBreak: "clone",
        boxDecorationBreak: "clone",
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
