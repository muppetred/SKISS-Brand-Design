import * as React from "react";

export interface ThemeSectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * light = blanc, texte encre (défaut) ; dark = sombre chaud #12100C (site) ;
   * gradient = dégradé deck, texte encre #12100C, jamais de texte blanc sans voile ;
   * burnt = aplat #B45311, seul fond orange qui porte du texte blanc courant (5,02:1) ;
   * social = dégradé Instagram à 135°, texte encre dans la moitié claire (en bas à droite), blanc seulement dans le coin sombre ;
   * cream = crème #F6D9C7, texte encre.
   */
  theme?: "light" | "dark" | "gradient" | "burnt" | "social" | "cream";
  /** Balise rendue. Défaut : "section". */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Section à thème SKISS : pose la classe .theme-* (tokens sémantiques), le fond et la couleur de texte.
 * Les composants enfants (Button, Badge, Card, Input, Eyebrow) prennent les couleurs du thème.
 * Pas de marge intérieure par défaut : la poser avec style.
 * @startingPoint section="Composants" subtitle="Section à thème : clair, sombre, dégradé, brûlé, social, crème" viewport="1280x480"
 */
export function ThemeSection(props: ThemeSectionProps): JSX.Element;
