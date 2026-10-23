/**
 * Slide 2 : intercalaire de section (brief, écran 2).
 * Un mot en Khand Regular 230 px, capitales, centré, en encre sur le dégradé deck. Signature blanche.
 * Variante possible : <SectionTitle tone="white"> (blanc sur voile encre à 41 %).
 */
function DeckSlideSection({ scale = 1 }) {
  const { SlideFrame, SectionTitle } = window.SKDS;
  return (
    <SlideFrame theme="gradient" scale={scale}>
      <SectionTitle>STRATÉGIE</SectionTitle>
    </SlideFrame>
  );
}
