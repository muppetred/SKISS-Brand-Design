// SKISS, kit réseaux sociaux : couverture de carrousel Instagram (brief, écran 8).
// Règle du kit : les fichiers .jsx sont chargés en text/babel dans la même page. On n'y déclare que des fonctions à
// noms uniques (préfixe Social), jamais de const de premier niveau. L'espace de noms du design system est posé une
// seule fois par la page dans window.SKDS (script classique après _ds_bundle.js) et déstructuré dans chaque fonction.

/**
 * Couverture de carrousel, 1080 x 1350 : dégradé social et formes en S (PostFrame, thème social).
 * Titre Khand Bold en encre #12100C, calé en bas à gauche, donc dans la moitié claire du dégradé (x + y ≥ 853 px).
 * Signature spirale + wordmark noire en bas à droite (15,72:1).
 * scale : réduction d'affichage transmise à PostFrame (nombre ou "fit").
 */
function SocialPostCover({ scale = 1, title = "Rien ne se lance sans tracking." }) {
  const { PostFrame } = window.SKDS;
  return (
    <PostFrame format="post" theme="social" scale={scale}>
      <h1 style={{ margin: 0, maxWidth: 760, fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
        fontSize: "var(--post-title)", lineHeight: "var(--leading-tight)", color: "var(--ink)", textWrap: "balance" }}>
        {title}
      </h1>
    </PostFrame>
  );
}
window.SocialPostCover = SocialPostCover;
