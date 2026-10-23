import * as React from "react";

export interface PriceRow {
  /** Prestation. Ex. : « Audit express ». */
  service: React.ReactNode;
  /** Durée. Ex. : « 1,5 jour · 1 canal ». */
  duration?: React.ReactNode;
  /** Montant HTVA. Les espaces avant €, % et « / mois » et entre les milliers deviennent insécables. Ex. : « 1 400 € ». */
  price: React.ReactNode;
}

export interface PriceTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lignes du tableau, chacune sur une carte crème opaque. */
  rows: PriceRow[];
  /** En-têtes des trois colonnes. Défaut : « Prestation », « Durée », « Prix ». */
  headers?: [React.ReactNode, React.ReactNode, React.ReactNode];
  /** Note sous le tableau, Hind 28 px. Ex. : la séparation du budget média et des honoraires. */
  note?: React.ReactNode;
}

/**
 * Tableau de prix SKISS : prestation, durée, prix, pour une slide sur fond clair (SlideFrame theme="light").
 * Montants HTVA, budget média toujours présenté à part.
 * @startingPoint section="Blocs éditoriaux" subtitle="Grille tarifaire en lignes crème" viewport="1920x900"
 */
export function PriceTable(props: PriceTableProps): JSX.Element;
