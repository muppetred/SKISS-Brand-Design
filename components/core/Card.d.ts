import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Ajoute une ombre très douce (encre à 14 %, très floue). Défaut : false. */
  elevated?: boolean;
  /** Carte cliquable : bordure orange à 30 % au survol et curseur main. Défaut : false. */
  interactive?: boolean;
  /** Balise rendue, par exemple "article" ou "a". Défaut : "div". */
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  children?: React.ReactNode;
}

/**
 * Carte web SKISS : rayon 16 px, bordure 1 px var(--border), fond var(--surface), marge intérieure 24 px.
 * Pour les slides 1920 x 1080, le rayon de carte est 46 px (var(--radius-card-slide)) : passer style.
 * @startingPoint section="Composants" subtitle="Carte web à bordure fine, ombre douce en option" viewport="480x320"
 */
export function Card(props: CardProps): JSX.Element;
