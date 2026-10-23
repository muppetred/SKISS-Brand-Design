/**
 * Slide 1 : couverture de proposition (brief, écran 1).
 * Dégradé deck, cercle blanc à 51 % de 1 240 px centré en (-218 ; 130) comme la couverture de 2024, logo complet
 * vertical blanc. Le nom du client est plus large que le wordmark : à 400 px de haut, le wordmark du logo mesure
 * environ 330 px, le titre « [Nom du client] » en Khand Bold 132 px environ 800 px. Titre et textes en encre.
 * Pas de signature de page : la slide porte déjà le logo complet.
 */
function DeckSlideCover({ scale = 1 }) {
  const { SlideFrame, Logo } = window.SKDS;
  return (
    <SlideFrame theme="gradient" signature={false} scale={scale}>
      {/* Cercle mesuré sur p1 : seule transparence hors capsules (51 %), décor sans texte. */}
      <div aria-hidden="true" style={{ position: "absolute", zIndex: 0, left: -218 - 620, top: 130 - 620, width: 1240,
        height: 1240, borderRadius: "50%", background: "var(--cover-circle)" }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", color: "var(--text)" }}>
        <Logo variant="vertical" tone="white" height={400} />
        <h1 style={{ margin: "36px 0 0", fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
          fontSize: "var(--slide-statement)", lineHeight: "var(--leading-deck)" }}>[Nom du client]</h1>
        <p style={{ margin: "4px 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--slide-large)",
          lineHeight: "var(--leading-deck)" }}>Proposition · [mois année]</p>
        <div style={{ marginTop: 48 }}><DeckContactLine /></div>
      </div>
    </SlideFrame>
  );
}
