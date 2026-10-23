import * as React from "react";

export interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "height" | "src"> {
  /**
   * vertical = logo complet (ampoule, wordmark, baseline) : couverture, post de marque, reel, planche. 230 px de large au moins.
   * horizontal = logo complet, ampoule à gauche : en-tête de document, one-pager. 325 px de large au moins.
   * bulb = ampoule seule (SVG) : pictogramme, filigrane. 155 px de haut au moins.
   * spiral = spirale seule (PNG 334 x 349) : favicon, avatar, motif. 350 px au plus.
   * wordmark = wordmark SKISS seul (PNG) : 16 px de haut au moins.
   * baseline = « DREAM IT , DESIGN IT , DO IT » dessinée (SVG), pour un pied de page. Ne pas corriger son espacement.
   * Sous les minimums, utiliser <Signature /> ou la spirale seule.
   */
  variant?: "vertical" | "horizontal" | "bulb" | "spiral" | "wordmark" | "baseline";
  /** black sur fond clair (défaut) ; white sur dégradé deck, aplat orange, fond sombre ou photo voilée (45 % d'encre au moins). */
  tone?: "black" | "white";
  /** Hauteur en px (nombre) ou valeur CSS. La largeur suit le ratio du fichier. Défaut : le minimum d'usage de la version. */
  height?: number | string;
  /** Force un autre fichier (chemin ou URL). Par défaut : assets/logos/<version>-<tone>, résolu depuis le bundle. */
  src?: string;
  /** Texte alternatif. Défaut : « SKISS » (« Dream it, design it, do it » pour la baseline). */
  alt?: string;
}

/**
 * Logo SKISS depuis les fichiers officiels (assets/logos). Monochrome, noir ou blanc, jamais redessiné.
 * @startingPoint section="Composants" subtitle="Logo officiel : six versions, noir ou blanc" viewport="700x400"
 */
export function Logo(props: LogoProps): JSX.Element;
