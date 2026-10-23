/**
 * Slide 9 : citation (gabarit du deck p3). Phrase réelle du brief (« Ton et écriture »), attribuée à son auteur.
 * Les guillemets français et leurs espaces fines sont ajoutés par le composant Quote.
 */
function DeckSlideQuote({ scale = 1 }) {
  const { SlideFrame, Quote } = window.SKDS;
  return (
    <SlideFrame theme="gradient" scale={scale}>
      <Quote author="Martin Elegeert · SKISS">L’IA comme méthode, pas comme gadget.</Quote>
    </SlideFrame>
  );
}
