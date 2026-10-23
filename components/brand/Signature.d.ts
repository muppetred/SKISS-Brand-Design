import * as React from "react";

export interface SignatureProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Hauteur de la spirale en px ; le wordmark et l'écart suivent la proportion.
   * Défaut : 55 (layout "page", 225 px de large au total sur une slide 1920 x 1080) ou 36 (layout "nav").
   * Le wordmark ne descend pas sous 16 px : height 20 au moins en "page", 29 au moins en "nav".
   */
  height?: number;
  /** black sur fond clair (défaut) ; white sur dégradé deck, aplat orange, fond sombre. */
  tone?: "black" | "white";
  /**
   * page = proportions du deck 2024 : spirale 55, wordmark 45, écart 8 (slides, posts, signature e-mail).
   * nav = proportions de la barre de navigation du site : spirale 36, wordmark 20, écart 12.
   */
  layout?: "page" | "nav";
  /** Force d'autres fichiers pour la spirale et le wordmark. */
  src?: { spiral?: string; wordmark?: string };
  /** Nom accessible. Défaut : « SKISS ». */
  alt?: string;
}

/**
 * Signature de page SKISS : spirale + wordmark côte à côte (fichiers officiels, jamais retapés).
 * Sur une slide : en bas à droite, à 48 px du bord droit et du bord bas ; absente des slides qui portent le logo complet.
 * @startingPoint section="Composants" subtitle="Signature spirale + wordmark, proportions du deck" viewport="600x150"
 */
export function Signature(props: SignatureProps): JSX.Element;
