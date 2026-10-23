// SKISS, kit deck : pièces communes aux slides.
// Règle du kit : chaque fichier .jsx est chargé en text/babel dans la même page. On n'y déclare donc que des fonctions
// à noms uniques (préfixe Deck), jamais de const de premier niveau. L'espace de noms du design system est posé une
// seule fois par la page dans window.SKDS (script classique après _ds_bundle.js) et déstructuré dans chaque fonction.

/** Ligne de contact des slides de couverture et de fin (brief, écrans 1 et 7), dans une capsule blanche à 62 %. */
function DeckContactLine() {
  // Espaces insécables dans le numéro : il ne se coupe jamais.
  const text = "Martin Elegeert · elegeertmartin.skiss@gmail.com · +32 499 05 66 43";
  return (
    <p style={{ margin: 0, display: "inline-flex", alignItems: "center", padding: "18px 56px 14px",
      borderRadius: "var(--radius-pill)", background: "var(--sk-card-bg, var(--capsule-bg))",
      color: "var(--sk-card-text, var(--ink))", fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
      lineHeight: "var(--leading-deck)", whiteSpace: "nowrap" }}>
      {text}
    </p>
  );
}

/**
 * Cadre photo rond et neutre, légendé : aucune photo réelle n'est fournie (brief, « Imagerie »).
 * Fond crème opaque, pictogramme Lucide « camera » au trait en encre, légende Hind 28 px.
 */
function DeckPhotoFrame({ name, size = 280 }) {
  return (
    <div role="img" aria-label={`Photo\u00A0: ${name}`}
      style={{ flex: "none", width: size, height: size, borderRadius: "50%", background: "var(--cream)",
        border: "2px solid var(--ink-o14)", color: "var(--ink)", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 12, textAlign: "center", fontFamily: "var(--font-sans)",
        fontSize: "var(--slide-min)", lineHeight: "var(--leading-deck)" }}>
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block" }}>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
      <span>{"Photo :"}<br />{name}</span>
    </div>
  );
}
