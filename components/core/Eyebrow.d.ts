import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** Balise rendue. Défaut : "p". */
  as?: keyof JSX.IntrinsicElements;
  /** Texte en casse de phrase, accents compris (« Publicité payante · Meta & Google ») : la mise en capitales est faite en CSS. */
  children?: React.ReactNode;
}

/**
 * Surtitre SKISS : capitales espacées (0,3 em), Hind Bold 12 à 16 px, couleur d'accent du thème.
 * @startingPoint section="Composants" subtitle="Surtitre en capitales espacées" viewport="600x100"
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
