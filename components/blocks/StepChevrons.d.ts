import * as React from "react";

export interface StepChevronsProps extends React.HTMLAttributes<HTMLOListElement> {
  /**
   * Deux à cinq libellés courts, dans l'ordre. Cinq étapes : les cinq pas des chevrons du deck (#B45311, #BD5713,
   * #D56C25, #EC8B48, #F3AA77). Quatre étapes ou moins : les quatre nuances officielles #B45311, #D56C25, #F18E4B,
   * #F3AA77, toujours dans cet ordre (trois étapes : brûlé, #D56C25, pêche ; deux : brûlé, pêche).
   */
  steps: React.ReactNode[];
  /** Hauteur des chevrons en px. Défaut : 180 (trois lignes de Hind Bold 36 px). */
  height?: number;
}

/**
 * Chevrons d'étapes SKISS : chevrons emboîtés du foncé au clair, contour blanc de 2 px, texte blanc sur les nuances
 * foncées (#B45311, #BD5713, #D56C25) et encre sur les claires. Occupe la largeur du parent.
 * @startingPoint section="Blocs éditoriaux" subtitle="Cinq étapes en chevrons, du brûlé au pêche" viewport="1920x300"
 */
export function StepChevrons(props: StepChevronsProps): JSX.Element;
