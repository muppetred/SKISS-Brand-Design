// Équipe : les trois fondateurs, cadre photo rond neutre (aucune photo, aucun visage généré).
// Rôles : brief, écran 6. Textes de la page Nous : premier paragraphe de chaque fiche du site (registre nominal) ;
// les paragraphes 2 et 3 de la fiche d'Adam sont à la troisième personne (« il ») et ne sont pas repris.

const SK_FICHES = {
  "Martin Elegeert": "Dix ans à piloter des budgets média. Des campagnes d'acquisition et de lead generation pour des marques en pharmaceutique et en événementiel, sur des objectifs de vente comme de collecte de contacts. Le coût par résultat se gagne dans le détail : structure de compte, ciblage, arbitrage des budgets, itération sur la créa.",
  "Adam Elegeert": "Six ans dans les médias, à développer la notoriété et la visibilité de marques, y compris sur des sites à forte audience. Achat d'espace, choix des formats selon la cible et l'objectif : awareness, trafic ou conversion. Une diffusion pensée pour être vue par les bonnes personnes, au bon moment, avec un suivi de performance à chaque étape.",
  "Antoine Kahn": "[Description à confirmer]",
};

function FounderHead({ f }) {
  return (
    <>
      <NeutralFrame round caption={`Photo : ${f.nom}`} icon="camera" />
      <h3 className="sk-founder__name">{f.nom}</h3>
      <p className="sk-founder__role">{f.role}</p>
    </>
  );
}

// Aperçu sur l'accueil : cartes cliquables qui mènent à la page Nous.
function SiteEquipe({ onNavigate }) {
  const { Card } = window.SKDS;
  return (
    <section className="sk-section" id="equipe">
      <Halos items={[{ color: "var(--orange)", opacity: 0.08, blur: 140, size: 360, pos: { bottom: 0, left: "10%" } }]} />
      <div className="sk-container">
        <SectionHead eyebrow="Qui sommes-nous" title="Les fondateurs" />
        <div className="sk-grid-3">
          {SK_FONDATEURS.map((f, i) => (
            <Reveal key={f.nom} delay={i * 0.15} className="sk-stretch">
              <Card as="a" href="#nous" interactive aria-label={`${f.nom}, ${f.role}`}
                onClick={(e) => { e.preventDefault(); onNavigate("nous"); }}
                style={{ height: "100%", padding: "var(--space-6)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-3)" }}>
                <FounderHead f={f} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Page Nous : fiche complète de chaque fondateur.
function SiteFondateurs() {
  const { Card } = window.SKDS;
  return (
    <section className="sk-section sk-section--tight">
      <div className="sk-container">
        <div className="sk-grid-3 sk-grid-3--start">
          {SK_FONDATEURS.map((f, i) => (
            <Reveal key={f.nom} delay={i * 0.15}>
              <Card as="article" interactive
                style={{ padding: "var(--space-7) var(--space-6)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-3)", cursor: "default" }}>
                <FounderHead f={f} />
                <p className="sk-founder__label">Le contacter pour</p>
                <p className="sk-founder__text">{SK_FICHES[f.nom]}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
