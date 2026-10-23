import React from "react";

/**
 * SKISS Eyebrow : surtitre en capitales espacées (Hind Bold, 12 à 16 px, interlettrage 0,3 em),
 * en var(--heading-accent) : #B45311 sur blanc, #ED7D31 sur sombre, encre sur crème et sur les dégradés,
 * blanc sur .theme-burnt. Écrire le texte en casse de phrase, avec ses accents : la capitalisation est faite en CSS.
 */
export function Eyebrow({ as = "p", children, style = {}, ...props }) {
  const Tag = as;
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        fontSize: "var(--text-eyebrow)",
        lineHeight: 1.3,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--heading-accent)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
