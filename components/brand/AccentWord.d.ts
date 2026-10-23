import * as React from "react";

export interface AccentWordProps extends React.HTMLAttributes<HTMLElement> {
  /** Balise rendue. Défaut : "span". */
  as?: keyof JSX.IntrinsicElements;
  /** Un seul mot (ou deux) d'un titre, par exemple « convertissent ». */
  children?: React.ReactNode;
}

/**
 * Mot accent SKISS : Khand Bold rempli du premier segment du dégradé deck, sans italique.
 * À poser dans un titre sur fond sombre (.theme-dark) ; jamais sur blanc, crème ni dégradé orange.
 * @startingPoint section="Composants" subtitle="Mot accent rempli du dégradé deck, sur fond sombre" viewport="800x200"
 */
export function AccentWord(props: AccentWordProps): JSX.Element;
