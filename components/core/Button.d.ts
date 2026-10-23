import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * primary = aplat du thème englobant (orange #ED7D31 et texte encre en clair et en sombre ; encre et texte blanc sur
   * .theme-gradient et .theme-social ; blanc et texte #B45311 sur .theme-burnt).
   * secondary = pilule en contour 1 px.
   * gradient = premier segment du dégradé deck (#F4B081 vers #ED7F36), texte encre #12100C, quel que soit le thème
   * (bouton principal du hero sombre). Sur .theme-gradient, il se confond avec le fond : utiliser primary.
   */
  variant?: "primary" | "secondary" | "gradient";
  /** sm = 14 px, md = 16 px (défaut), lg = 18 à 20 px. */
  size?: "sm" | "md" | "lg";
  /** Balise rendue, par exemple "a" pour un lien. Défaut : "button" (type="button"). */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Force un état pour une maquette ou une carte d'aperçu : "hover" (plein à 90 %, contour rempli),
   * "focus" (anneau 2 px en var(--ring), décalé de 2 px). Sans cette prop, les états suivent la souris et le clavier.
   */
  state?: "hover" | "focus";
  /** Désactivé : 60 % d'opacité, curseur interdit. */
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  children?: React.ReactNode;
}

/**
 * Bouton SKISS en pilule, Hind Bold. Les couleurs viennent des tokens du thème englobant
 * (.theme-dark, .theme-gradient, .theme-burnt, .theme-social, .theme-cream).
 * Ne jamais poser de texte blanc sur #ED7D31 ni sur le dégradé deck.
 * @startingPoint section="Composants" subtitle="Boutons pilule : principal, contour, dégradé" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
