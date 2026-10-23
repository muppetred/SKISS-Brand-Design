import React from "react";

// Chaque thème, clair compris (.theme-light), redéfinit tous ses tokens dans colors.css : une section claire ou crème
// reste juste à l'intérieur d'un parent sombre ou en dégradé.
const THEMES = ["light", "dark", "gradient", "burnt", "social", "cream"];

/**
 * SKISS ThemeSection : bloc qui applique un thème (classe .theme-*) et pose son fond et sa couleur de texte.
 * light (défaut, blanc), dark (sombre chaud #12100C), gradient (dégradé deck, texte encre),
 * burnt (aplat #B45311, texte blanc), social (dégradé Instagram, texte encre dans la moitié claire),
 * cream (#F6D9C7, texte encre).
 */
export function ThemeSection({ theme = "light", as = "section", className = "", children, style = {}, ...props }) {
  const Tag = as;
  const t = THEMES.includes(theme) ? theme : "light";
  const cls = [`theme-${t}`, className].filter(Boolean).join(" ");
  return (
    <Tag
      className={cls}
      style={{ background: "var(--background)", color: "var(--text)", ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
