// Services : les trois offres 2026 du brief (« Qui est SKISS »), à la place des trois services du site.
// Accroches et textes repris des sources : brief (écran 12, « Phrases réelles ») et fiche de Martin sur le site.
// Aucune grille de prix ici ; l'offre IA est en cours de validation et ne montre aucun prix.

const SK_SERVICES = [
  {
    icon: "trending-up",
    titre: "Publicité payante Meta et Google",
    accroche: "Rien ne se lance sans tracking.",
    texte: "Un compte publicitaire se pilote dans cet ordre : on regarde ce qui existe, on construit ce qui manque, puis on pilote dans la durée. Le budget média est payé directement par l'annonceur.",
  },
  {
    icon: "camera",
    titre: "Contenu produit en interne",
    accroche: "Une vidéo tournée une fois sert partout : Reel Instagram, Reel Facebook et TikTok.",
    texte: "Photo, vidéo, aftermovies, reels, gestion mensuelle des réseaux sociaux.",
  },
  {
    icon: "workflow",
    titre: "IA dans les process des équipes",
    accroche: "L'IA comme méthode, pas comme gadget.",
    texte: "Son implémentation dans vos process internes : tâches répétitives automatisées, production accélérée, décisions appuyées sur la donnée plutôt que sur l'intuition.",
  },
];

function SiteServices() {
  const { Card } = window.SKDS;
  return (
    <section className="sk-section" id="services">
      <Halos items={[{ color: "var(--orange-light)", opacity: 0.1, blur: 120, size: 320, pos: { top: 0, right: 0 } }]} />
      <div className="sk-container">
        <SectionHead eyebrow="Ce que nous faisons" title="Nos services" />
        <div className="sk-grid-3">
          {SK_SERVICES.map((s, i) => (
            <Reveal key={s.titre} delay={i * 0.15} className="sk-stretch">
              <Card as="article" interactive
                style={{ height: "100%", padding: "var(--space-7) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)", cursor: "default" }}>
                <span className="sk-service__icon"><SiteIcon name={s.icon} size={24} /></span>
                <h3 className="sk-service__title">{s.titre}</h3>
                <p className="sk-service__hook">{s.accroche}</p>
                <p className="sk-service__text">{s.texte}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
