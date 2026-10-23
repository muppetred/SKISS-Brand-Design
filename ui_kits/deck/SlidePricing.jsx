/**
 * Slide 7 : offre tarifaire (brief, écran 5). Fond clair, lignes en cartes crème #F6D9C7 opaques, signature noire.
 * Montants HTVA de la grille 2026 ; le budget média reste distinct des honoraires (note de bas de tableau).
 */
function DeckSlidePricing({ scale = 1 }) {
  const { SlideFrame, PriceTable } = window.SKDS;
  const rows = [
    { service: "Audit express", duration: "0,5 jour", price: "300 €" },
    { service: "Audit complet", duration: "1 jour", price: "600 €" },
    { service: "Cadrage & roadmap", duration: "0,75 jour", price: "450 €" },
    { service: "Set-up essentiel", duration: "1,5 jour · 1 canal", price: "850 €" },
    { service: "Set-up complet", duration: "2,5 jours · 2 canaux", price: "1 400 €" },
    { service: "Gestion essentielle", duration: "0,75 jour / mois", price: "450 € / mois" },
    { service: "Gestion standard", duration: "1,5 jour / mois", price: "850 € / mois" },
  ];
  const note = "Le budget média est payé directement par l’annonceur, sur son propre moyen de paiement. Il n’est jamais avancé ni refacturé.";
  return (
    <SlideFrame theme="light" title="Grille tarifaire" scale={scale}>
      <p style={{ margin: "0 0 20px", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
        lineHeight: "var(--leading-deck)", color: "var(--text)" }}>Montants hors TVA.</p>
      <PriceTable rows={rows} note={note} />
    </SlideFrame>
  );
}
