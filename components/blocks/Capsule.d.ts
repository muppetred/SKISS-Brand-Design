import * as React from "react";

export interface CapsuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Texte court, en casse de phrase (Hind Bold 56 px, centré). */
  children?: React.ReactNode;
}

/**
 * Capsule SKISS : bande pleine largeur en pilule, fond blanc à 62 % et texte encre sur le dégradé deck.
 * Sur fond clair ou sombre, la surface vient du cadre (crème opaque, carte sombre).
 * @startingPoint section="Blocs éditoriaux" subtitle="Bande en pilule pour une liste d'étapes ou d'axes" viewport="1920x320"
 */
export function Capsule(props: CapsuleProps): JSX.Element;
