import * as React from "react";

export interface PostFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * post = 1080 x 1350 (défaut) ; reel = 1080 x 1920, contenu dans la zone sûre (14 % en haut, 35 % en bas).
   * En reel sur photo, voile encre d'au moins 45 % sous le logo et les grands titres, d'au moins 58 % sous tout autre
   * texte (sous-titre, légende, texte courant), calcul sur un blanc pur, en aplat ou en dégradé localisé.
   */
  format?: "post" | "reel";
  /**
   * Fond. social = dégradé social, texte encre dans la moitié claire (défaut) ; light = blanc ; cream = #F6D9C7 ;
   * dark = variante sombre chaude ; burnt = aplat #B45311.
   */
  theme?: "social" | "light" | "cream" | "dark" | "burnt";
  /** Formes en S translucides (#F7C3A5, #F5D2BD, #F3DED1), thème social seulement. Défaut : true. */
  shapes?: boolean;
  /** Signature spirale + wordmark en bas à droite, 200 px de large, alignée sur les marges. Défaut : true. */
  signature?: boolean;
  /** auto = noire sur social, light et cream, blanche sur dark et burnt. Défaut : "auto". */
  signatureTone?: "auto" | "white" | "black";
  /** Force d'autres fichiers pour la signature. */
  signatureSrc?: { spiral?: string; wordmark?: string };
  /** Réduction de l'affichage par transform : nombre, ou "fit" pour suivre la largeur du parent. Défaut : 1. */
  scale?: number | "fit";
  /**
   * Contenu, calé en bas de la zone utile (marges de 108 px sur les côtés, 110 px en bas, au-dessus de la signature).
   * Le texte blanc ne va que dans le coin sombre en haut à gauche du dégradé social.
   */
  children?: React.ReactNode;
}

/**
 * Cadre Instagram SKISS : post 1080 x 1350 ou reel 1080 x 1920, dégradé social et formes en S par défaut,
 * signature noire en bas à droite.
 * @startingPoint section="Blocs éditoriaux" subtitle="Post et reel Instagram, dégradé social et formes en S" viewport="1080x1350"
 */
export function PostFrame(props: PostFrameProps): JSX.Element;
