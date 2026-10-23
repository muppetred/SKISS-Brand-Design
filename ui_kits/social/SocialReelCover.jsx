// SKISS, kit réseaux sociaux : couverture de reel Instagram (brief, écran 11).
// Fonctions à noms uniques seulement (préfixe Social) ; window.SKDS est posé par la page.

/**
 * Couverture de reel, 1080 x 1920 (PostFrame, format reel, sans signature : le logo complet est déjà là).
 * Cadre photo neutre plein écran et légendé (aucune photo réelle fournie), voile #12100C à 45 % plein cadre sous le logo
 * et le grand titre. Logo complet vertical blanc, titre Khand Bold, sous-titre Hind.
 * Sous tout autre texte, le brief exige 58 % au moins (calcul sur un blanc pur) : la légende est posée sur un voile local
 * à 58 % ; le sous-titre, Hind 50 px, sur un dégradé localisé à 25 % qui s'ajoute au voile plein cadre (58,75 % cumulés,
 * environ 4,8:1 sur un blanc pur). Le voile à 45 % seul ne lui donnerait que 3,05:1, le seuil du grand texte WCAG.
 * Tout le texte tient dans la zone sûre (proposition) : 270 px en haut, 672 px en bas, hors interface Instagram.
 */
function SocialReelCover({ scale = 1, title = "Aftermovie", subtitle = "Wilmeyer · tournoi de padel 2024",
  photo = "tournoi de padel Wilmeyer" }) {
  const { PostFrame, Logo } = window.SKDS;
  const photoLabel = "Photo\u00A0: " + photo;
  return (
    <PostFrame format="reel" theme="dark" signature={false} scale={scale}>
      {/* Cadre photo neutre : à remplacer par la vraie photo, recadrée en 1080 x 1920 */}
      <div role="img" aria-label={photoLabel}
        style={{ position: "absolute", inset: 0, zIndex: -1, backgroundColor: "var(--dark-cream)",
          backgroundImage: "repeating-linear-gradient(135deg, var(--ink-o14) 0 2px, transparent 2px 32px)" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--veil-ink-45)" }} />
      </div>

      {/* Légende du cadre, sur un voile local à 58 % */}
      <p style={{ position: "absolute", zIndex: 1, top: 270, left: "var(--post-margin-x)", margin: 0,
        display: "inline-flex", alignItems: "center", gap: 14, padding: "12px 28px 10px 22px",
        borderRadius: "var(--radius-pill)", background: "var(--veil-ink-58)", color: "var(--white)",
        fontFamily: "var(--font-sans)", fontSize: "var(--post-min)", lineHeight: 1.2, whiteSpace: "nowrap" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", marginTop: -2 }}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
        {photoLabel}
      </p>

      {/* Bloc central : logo, titre, sous-titre */}
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", color: "var(--white)" }}>
        <Logo variant="vertical" tone="white" height={360} />
        {/* Titre et sous-titre sur un dégradé localisé à 25 % ajouté au voile plein cadre à 45 % : 58,75 % cumulés,
            le minimum sous du texte courant. Pleine largeur, fondu de 90 px au-dessus et en dessous du bloc. */}
        <div style={{ position: "relative", alignSelf: "stretch", marginTop: 72 }}>
          <span aria-hidden="true" style={{ position: "absolute", zIndex: -1, top: -90, bottom: -90,
            left: "calc(-1 * var(--post-margin-x))", right: "calc(-1 * var(--post-margin-x))",
            background: "linear-gradient(180deg, transparent 0, var(--veil-ink-25) 90px, var(--veil-ink-25) calc(100% - 90px), transparent 100%)" }} />
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
            fontSize: "var(--post-title)", lineHeight: "var(--leading-tight)", color: "var(--white)" }}>
            {title}
          </h1>
          <p style={{ margin: "12px 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--post-body)",
            lineHeight: "var(--leading-deck)", color: "var(--white)" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </PostFrame>
  );
}
window.SocialReelCover = SocialReelCover;
