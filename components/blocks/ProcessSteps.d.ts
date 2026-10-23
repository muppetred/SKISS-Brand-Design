import * as React from "react";

export interface ProcessStep {
  /** Titre de carte, Khand Bold 40 px, en casse de phrase. */
  title: React.ReactNode;
  /** Texte de carte, Hind 36 px. */
  text?: React.ReactNode;
}

export interface ProcessStepsProps extends React.HTMLAttributes<HTMLOListElement> {
  /** Étapes dans l'ordre ; trois dans le deck. */
  steps: ProcessStep[];
}

/**
 * Processus SKISS en trois étapes : cartes claires reliées par des flèches pleines,
 * encre sur le dégradé deck (couleur de texte du thème ailleurs).
 * @startingPoint section="Blocs éditoriaux" subtitle="Trois cartes reliées par des flèches" viewport="1920x560"
 */
export function ProcessSteps(props: ProcessStepsProps): JSX.Element;
