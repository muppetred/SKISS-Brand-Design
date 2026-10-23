// SKISS, kit réseaux sociaux : post citation Instagram (brief, écran 10).
// Fonctions à noms uniques seulement (préfixe Social) ; window.SKDS est posé par la page.

/**
 * Post citation, 1080 x 1350, aplat #B45311 (PostFrame, thème burnt) : signature blanche en bas à droite (5,02:1).
 * Le bloc Quote du design system y est posé en colonne : spirale noire en haut, citation Khand Regular, auteur
 * Hind Bold. Carte blanche à 62 % (la seule transparence de la marque), texte encre.
 * Les tailles du deck (108 et 36 px) sont ramenées au format post par --slide-quote (112 px) et --slide-body (39 px).
 * Phrase réelle de SKISS (brief, « Ton et écriture ») : aucune citation inventée.
 */
function SocialPostQuote({ scale = 1, theme = "burnt", quote = "L’IA comme méthode, pas comme gadget.",
  author = "Martin Elegeert · SKISS" }) {
  const { PostFrame, Quote } = window.SKDS;
  return (
    <PostFrame format="post" theme={theme} scale={scale}>
      {/* La carte prend la hauteur de son contenu et se centre dans la zone utile, quelle que soit la longueur. */}
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Quote author={author}
          style={{ flex: "none", flexDirection: "column", alignItems: "flex-start", gap: 0, minHeight: 0,
            padding: "88px 80px 96px", "--slide-quote": "112px", "--slide-body": "var(--post-eyebrow)" }}>
          {quote}
        </Quote>
      </div>
    </PostFrame>
  );
}
window.SocialPostQuote = SocialPostQuote;
