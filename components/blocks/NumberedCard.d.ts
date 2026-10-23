import * as React from "react";

export interface NumberedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chiffre affiché dans le disque, en Khand 132 px, couleur encre. */
  number: number | string;
  /** Libellé, affiché en capitales (Khand 56 px), accents compris. */
  label: React.ReactNode;
  /** Nuance du disque, du foncé au clair : 1 #B45311, 2 #D56C25, 3 #F18E4B, 4 #F3AA77. Défaut : suit le numéro. */
  shade?: 1 | 2 | 3 | 4;
  /**
   * Pictogramme au trait en bas (120 px) : nom d'un pictogramme Lucide intégré
   * ("search", "compass", "wrench", "trending-up", "camera", "video", "target", "calendar-check") ou élément React.
   */
  icon?: "search" | "compass" | "wrench" | "trending-up" | "camera" | "video" | "target" | "calendar-check" | React.ReactNode;
}

/**
 * Carte numérotée SKISS : pilule verticale, disque plein en haut, libellé en capitales, pictogramme au trait.
 * Remplit la hauteur de son parent ; dans le deck, quatre cartes de 334 px de large avec 128 px de gouttière.
 * @startingPoint section="Blocs éditoriaux" subtitle="Pilule verticale numérotée, quatre nuances d'orange" viewport="420x900"
 */
export function NumberedCard(props: NumberedCardProps): JSX.Element;
