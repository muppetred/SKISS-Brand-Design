import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * soft = fond doux du thème (crème en clair) et texte du thème (défaut).
   * solid = aplat principal du thème (orange #ED7D31 et encre en clair et en sombre).
   * outline = contour et texte en couleur d'accent du thème (#B45311 sur blanc).
   */
  tone?: "soft" | "solid" | "outline";
  /** Balise rendue. Défaut : "span". */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Étiquette SKISS en pilule (catégorie, type de prestation, canal). Texte court, casse de phrase.
 * @startingPoint section="Composants" subtitle="Étiquettes en pilule : douce, pleine, contour" viewport="600x120"
 */
export function Badge(props: BadgeProps): JSX.Element;
