// SKISS, kit réseaux sociaux : page intérieure de carrousel Instagram (brief, écran 9).
// Fonctions à noms uniques seulement (préfixe Social) ; window.SKDS est posé par la page.

/**
 * Page intérieure de carrousel, 1080 x 1350, fond blanc (PostFrame, thème clair).
 * Grand numéro en haut à droite en Khand Regular, couleur var(--heading-accent) : #B45311 sur blanc (5,02:1).
 * Texte en Khand Regular 84 px (sous-titre de l'échelle Instagram), encre. Signature noire en bas à droite.
 */
function SocialPostInside({ scale = 1, number = "02",
  text = "Pas de campagne tant que le pixel, GA4 et le consentement ne sont pas validés." }) {
  const { PostFrame } = window.SKDS;
  return (
    <PostFrame format="post" theme="light" scale={scale}>
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <p style={{ alignSelf: "flex-end", margin: "-24px -12px 0 0", fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-regular)", fontSize: 360, lineHeight: 0.8, color: "var(--heading-accent)",
          fontVariantNumeric: "tabular-nums" }}>
          {number}
        </p>
        <div>
          {/* Filet fin d'accent, comme les gabarits éditoriaux Canva */}
          <span aria-hidden="true" style={{ display: "block", width: 120, height: 6, marginBottom: 44,
            borderRadius: "var(--radius-pill)", background: "var(--heading-accent)" }} />
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-regular)",
            fontSize: "var(--post-subtitle)", lineHeight: "var(--leading-tight)", color: "var(--text)", textWrap: "pretty" }}>
            {text}
          </p>
        </div>
      </div>
    </PostFrame>
  );
}
window.SocialPostInside = SocialPostInside;
