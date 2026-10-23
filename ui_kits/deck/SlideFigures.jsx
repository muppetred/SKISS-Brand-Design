/**
 * Slide 6 : chiffres clés (brief, écran 4). Trois chiffres en encre sur le dégradé deck, Khand 144 px,
 * légendes Hind 36 px. Espaces insécables avant € et :.
 * « 10 ans » est à confirmer avant diffusion (brief, points ouverts, n° 8).
 */
function DeckSlideFigures({ scale = 1 }) {
  const { SlideFrame, KeyFigure } = window.SKDS;
  const figures = [
    { value: "10 ans", caption: "à piloter des budgets média" },
    { value: "500 €", caption: "En dessous de 500 € par mois, aucune campagne ne sort de la phase d’apprentissage." },
    { value: "3 mois", caption: "minimum sur la gestion : le temps nécessaire pour lire un résultat" },
  ];
  return (
    <SlideFrame theme="gradient" title="[Titre de la slide]" scale={scale}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 64, alignItems: "start" }}>
        {figures.map((f) => <KeyFigure key={f.value} align="center" value={f.value} caption={f.caption} />)}
      </div>
    </SlideFrame>
  );
}
