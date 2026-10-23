import * as React from "react";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Un mot d'intercalaire, affiché en capitales (Khand Regular 230 px), accents compris. */
  children?: React.ReactNode;
  /**
   * auto = couleur de texte du thème (encre sur le dégradé deck). white = blanc sur un voile encre à 41 %,
   * qui couvre tout le cadre (SlideFrame, PostFrame). Défaut : "auto".
   */
  tone?: "auto" | "white";
}

/**
 * Intercalaire de section SKISS : un mot centré, encre sur le dégradé deck ou blanc sur voile.
 * Se pose seul dans un SlideFrame, avec la signature.
 * @startingPoint section="Blocs éditoriaux" subtitle="Mot d'intercalaire en capitales" viewport="1920x1080"
 */
export function SectionTitle(props: SectionTitleProps): JSX.Element;
