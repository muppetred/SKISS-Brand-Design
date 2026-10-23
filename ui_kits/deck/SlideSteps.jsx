/**
 * Slide 4 : cartes numérotées (gabarit du deck p5), les quatre étapes de la grille fixe : Audit, Cadrage, Set-up,
 * Gestion. Pilules de 334 px (17,4 % de la largeur), disques du brûlé au pêche, chiffres et pictogrammes Lucide en encre.
 * Pas de titre : le brief n'en donne pas pour cette slide (comme p5 en 2024).
 */
function DeckSlideSteps({ scale = 1 }) {
  const { SlideFrame, NumberedCard } = window.SKDS;
  const steps = [
    { number: 1, label: "Audit", icon: "search" },
    { number: 2, label: "Cadrage", icon: "compass" },
    { number: 3, label: "Set-up", icon: "wrench" },
    { number: 4, label: "Gestion", icon: "trending-up" },
  ];
  return (
    <SlideFrame theme="gradient" scale={scale}>
      <div style={{ flex: "1 1 auto", display: "flex", justifyContent: "space-between" }}>
        {steps.map((s) => (
          <div key={s.number} style={{ width: 334 }}><NumberedCard {...s} /></div>
        ))}
      </div>
    </SlideFrame>
  );
}
