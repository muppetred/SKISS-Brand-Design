import * as React from "react";

export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** Citation réelle, sans guillemets (le composant ajoute « » avec espace fine insécable). Khand 108 px. */
  children?: React.ReactNode;
  /** Auteur, en Hind Bold 36 px. Ex. : « Martin Elegeert · SKISS ». */
  author?: React.ReactNode;
  /** Spirale à gauche (228 px de haut). Défaut : true. */
  spiral?: boolean;
  /** auto = noire sur carte claire, blanche sur carte sombre (thème dark du cadre). Défaut : "auto". */
  spiralTone?: "auto" | "black" | "white";
  /** Force un autre fichier pour la spirale. */
  src?: string;
}

/**
 * Citation SKISS : grande carte claire, spirale à gauche, citation en Khand, auteur en Hind Bold.
 * Aucune citation inventée : uniquement des phrases réelles et attribuées.
 * @startingPoint section="Blocs éditoriaux" subtitle="Grande carte de citation avec spirale" viewport="1920x1000"
 */
export function Quote(props: QuoteProps): JSX.Element;
