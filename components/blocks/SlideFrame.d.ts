import * as React from "react";

export interface SlideFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Fond du cadre. gradient = dégradé deck, texte encre (défaut) ; burnt = aplat #B45311, texte blanc ;
   * dark = variante sombre chaude ; light = blanc ; cream = #F6D9C7.
   */
  theme?: "gradient" | "burnt" | "dark" | "light" | "cream";
  /** Titre de page centré en haut, Khand Bold 88 px ; les blocs commencent alors à 228 px au lieu de 104 px. */
  title?: React.ReactNode;
  /** Signature spirale + wordmark en bas à droite (225 px de large, à 48 px des bords). À désactiver sur couverture et slide de fin. Défaut : true. */
  signature?: boolean;
  /** auto = blanc sur gradient, burnt et dark, noir sur light et cream. Défaut : "auto". */
  signatureTone?: "auto" | "white" | "black";
  /** Force d'autres fichiers pour la signature. */
  signatureSrc?: { spiral?: string; wordmark?: string };
  /**
   * Réduction de l'affichage par transform, le cadre gardant sa mise en page 1920 x 1080.
   * Nombre (0.25 = 480 x 270) ou "fit" pour suivre la largeur du parent. Défaut : 1.
   */
  scale?: number | "fit";
  /**
   * Contenu, posé dans une colonne flex centrée verticalement, entre les marges de 100 px.
   * Le cadre fournit aux blocs leurs surfaces de carte (--sk-card-bg, --sk-card-solid, --sk-card-text, --sk-card-border).
   */
  children?: React.ReactNode;
}

/**
 * Cadre de slide 16:9 SKISS, 1920 x 1080, sur la grille du deck 2024 : marges latérales 100 px,
 * haut des blocs à 104 px (228 px sous un titre), signature en bas à droite.
 * @startingPoint section="Blocs éditoriaux" subtitle="Slide 16:9 sur la grille du deck, cinq fonds" viewport="1920x1080"
 */
export function SlideFrame(props: SlideFrameProps): JSX.Element;
