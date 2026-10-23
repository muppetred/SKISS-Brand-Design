/**
 * Slide 3 : contenu en capsules (brief, écran 3).
 * Titre de page Khand Bold 88 px, trois capsules pleine largeur (blanc à 62 %, texte encre Hind Bold 56 px).
 */
function DeckSlideCapsules({ scale = 1 }) {
  const { SlideFrame, Capsule } = window.SKDS;
  return (
    <SlideFrame theme="gradient" title="Un compte publicitaire se pilote dans cet ordre" scale={scale}>
      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        <Capsule>On regarde ce qui existe</Capsule>
        <Capsule>On construit ce qui manque</Capsule>
        <Capsule>On pilote dans la durée</Capsule>
      </div>
    </SlideFrame>
  );
}
