/**
 * Slide 10 : fin (brief, écran 7). Logo complet vertical blanc, « On en parle ? » en Khand Regular 132 px et en encre,
 * ligne de contact dans une capsule blanche à 62 %. Pas de signature de page : la slide porte déjà le logo complet.
 */
function DeckSlideEnd({ scale = 1 }) {
  const { SlideFrame, Logo } = window.SKDS;
  return (
    <SlideFrame theme="gradient" signature={false} scale={scale}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", color: "var(--text)" }}>
        <Logo variant="vertical" tone="white" height={360} />
        <h2 style={{ margin: "40px 0 0", fontFamily: "var(--font-display)", fontWeight: "var(--fw-regular)",
          fontSize: "var(--slide-statement)", lineHeight: "var(--leading-deck)" }}>{"On en parle ?"}</h2>
        <div style={{ marginTop: 48 }}><DeckContactLine /></div>
      </div>
    </SlideFrame>
  );
}
