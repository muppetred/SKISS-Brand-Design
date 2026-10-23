// SKISS, kit documents : one-pager de proposition A4 portrait (brief, écran 12). Styles dans documents.css.
// Règle du kit : fichiers chargés en text/babel ; uniquement des fonctions à noms uniques (préfixe Doc), aucune const
// de premier niveau. L'espace de noms du design system est posé une seule fois par la page dans window.SKDS.

/**
 * One-pager A4 : en-tête au logo horizontal noir (325 px de large au moins à l'écran), surtitre, titre, introduction,
 * trois blocs en lignes sur un bandeau en dégradé deck (cartes blanches à 62 %, texte encre), pied de page avec la
 * ligne de contact.
 * Textes mot pour mot du brief. Montants HTVA, espaces insécables avant € et dans « / mois ».
 */
function DocOnePager() {
  const { Logo, Eyebrow, ThemeSection, Card } = window.SKDS;
  const nb = "\u00A0";
  // Disques dans les nuances d'orange, du foncé au clair, comme les cartes numérotées ; lettre en encre
  // (3,79:1 au minimum sur #B45311, admis pour une lettre de 22 pt).
  const blocks = [
    { letter: "A", shade: "var(--orange-burnt)", label: "Bloc A · Audit",
      text: "Ce qui tourne, ce qui brûle du budget, ce qu’on répare en premier.", price: `Dès 300${nb}€` },
    { letter: "B", shade: "var(--orange-deep)", label: "Bloc B · Set-up",
      text: "Tracking, structure de compte, audiences, première campagne en ligne.", price: `Dès 850${nb}€` },
    { letter: "C", shade: "var(--orange-light)", label: "Bloc C · Gestion",
      text: "Pilotage mensuel, itérations créatives, arbitrage budgétaire, reporting.", price: `Dès 450${nb}€${nb}/${nb}mois` },
  ];
  return (
    <article className="doc-page">
      <header className="doc-head">
        <Logo variant="horizontal" tone="black" />
      </header>

      <section className="doc-intro">
        <Eyebrow style={{ fontSize: "var(--doc-eyebrow)" }}>Publicité payante · Meta &amp; Google</Eyebrow>
        <h1 className="doc-title">Trois blocs, trois prix, zéro surprise.</h1>
        <p className="doc-lead">
          {`Un compte publicitaire se pilote dans cet ordre${nb}: on regarde ce qui existe, on construit ce qui manque, puis on pilote dans la durée. Chaque bloc se vend seul. Aucun n’oblige à prendre le suivant.`}
        </p>
      </section>

      <ThemeSection theme="gradient" className="doc-band">
        {blocks.map((b) => (
          <Card key={b.label} className="doc-block" style={{ display: "grid", padding: "18pt 20pt 18pt 16pt" }}>
            <span className="doc-block-disc" aria-hidden="true" style={{ background: b.shade }}>{b.letter}</span>
            <div>
              <h2 className="doc-block-title">{b.label}</h2>
              <p className="doc-block-text">{b.text}</p>
            </div>
            <p className="doc-block-price">{b.price}</p>
          </Card>
        ))}
      </ThemeSection>

      <footer className="doc-foot">
        <p className="doc-note">Tarifs HTVA, valables en 2026. Le budget média est payé directement par l’annonceur.</p>
        <p className="doc-contact">
          Martin Elegeert · elegeertmartin.skiss@gmail.com · <span className="doc-nowrap">{`+32${nb}499${nb}05${nb}66${nb}43`}</span>
        </p>
      </footer>
    </article>
  );
}
window.DocOnePager = DocOnePager;
