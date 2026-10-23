import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Libellé affiché au-dessus du champ (Hind Bold 14 px). Sans libellé, prévoir aria-label. */
  label?: React.ReactNode;
  /** Force l'état de focus pour une maquette ou une carte d'aperçu. */
  state?: "focus";
  /** Désactivé : 60 % d'opacité. */
  disabled?: boolean;
}

/**
 * Champ de saisie SKISS : rayon 12 px, bordure 1 px var(--border), bordure orange (var(--ring)) au focus.
 * Le texte indicatif est en var(--text-muted).
 * @startingPoint section="Composants" subtitle="Champ de formulaire avec libellé et focus orange" viewport="480x160"
 */
export function Input(props: InputProps): JSX.Element;
