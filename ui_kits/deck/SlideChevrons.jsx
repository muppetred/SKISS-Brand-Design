/**
 * Slide 5 : chevrons d'étapes et rangée de cartes claires (gabarit du deck p32), même méthode que la slide 4 :
 * Audit, Cadrage, Set-up, Gestion. Quatre chevrons, donc les quatre nuances officielles du brûlé au pêche.
 * Les textes des cartes sont ceux des blocs A, B et C de l'écran 12 du brief ; le brief ne décrit pas l'étape de
 * cadrage et ne donne pas de titre pour cette slide : intitulés neutres entre crochets.
 */
function DeckSlideChevrons({ scale = 1 }) {
  const { SlideFrame, StepChevrons } = window.SKDS;
  const steps = [
    { label: "Audit", text: "Ce qui tourne, ce qui brûle du budget, ce qu’on répare en premier." },
    { label: "Cadrage", text: "[Détail de l’étape]" },
    { label: "Set-up", text: "Tracking, structure de compte, audiences, première campagne en ligne." },
    { label: "Gestion", text: "Pilotage mensuel, itérations créatives, arbitrage budgétaire, reporting." },
  ];
  return (
    <SlideFrame theme="gradient" title="[Titre de la slide]" scale={scale}>
      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <StepChevrons steps={steps.map((s) => s.label)} height={220} />
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 40, margin: 0, padding: 0, listStyle: "none" }}>
          {steps.map((s) => (
            <li key={s.label} style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 260,
              padding: "36px 40px", textAlign: "center", borderRadius: "var(--radius-card-slide)",
              background: "var(--sk-card-bg, var(--capsule-bg))", border: "1px solid var(--sk-card-border, transparent)",
              color: "var(--sk-card-text, var(--ink))", fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
              lineHeight: "var(--leading-deck)" }}>
              {s.text}
            </li>
          ))}
        </ul>
      </div>
    </SlideFrame>
  );
}
