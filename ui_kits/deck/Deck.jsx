// SKISS, kit deck : ordre des slides. Chargé après DeckParts.jsx et les fichiers Slide*.jsx.
// Chaque entrée : id (stable, pour ?slide=), libellé affiché par la visionneuse, composant (prop scale transmise à SlideFrame).
window.SKISS_DECK_SLIDES = [
  { id: "couverture", label: "Couverture", Component: DeckSlideCover },
  { id: "section", label: "Section", Component: DeckSlideSection },
  { id: "capsules", label: "Contenu en capsules", Component: DeckSlideCapsules },
  { id: "cartes", label: "Cartes numérotées", Component: DeckSlideSteps },
  { id: "chevrons", label: "Chevrons d’étapes", Component: DeckSlideChevrons },
  { id: "chiffres", label: "Chiffres clés", Component: DeckSlideFigures },
  { id: "tarifs", label: "Offre tarifaire", Component: DeckSlidePricing },
  { id: "equipe", label: "Équipe", Component: DeckSlideTeam },
  { id: "citation", label: "Citation", Component: DeckSlideQuote },
  { id: "fin", label: "Fin", Component: DeckSlideEnd },
];
