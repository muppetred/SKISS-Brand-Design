import * as React from "react";

export interface KeyFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chiffre clé vérifié, avec espace insécable avant l'unité (« 500 € »). Khand 144 px. */
  value: React.ReactNode;
  /** Légende en Hind 36 px, 480 px de large au plus. */
  caption?: React.ReactNode;
  /** Alignement du chiffre et de la légende. Défaut : "left". */
  align?: "left" | "center";
}

/**
 * Chiffre clé SKISS : grand chiffre en Khand et légende en Hind, dans la couleur de texte du thème
 * (encre sur le dégradé deck, blanc sur l'aplat brûlé ou le fond sombre).
 * @startingPoint section="Blocs éditoriaux" subtitle="Chiffre clé et sa légende" viewport="640x420"
 */
export function KeyFigure(props: KeyFigureProps): JSX.Element;
