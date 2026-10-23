// Réalisations : les huit projets réels de projects.ts (client, titre, catégorie, année), filtrables par catégorie.
// Titres passés en casse de phrase française, « RS » et « Social media » traduits en « réseaux sociaux » (le brief demande de
// traduire chaque terme technique). The Fin Competition est créditée à Febelfin Academy (le brief prime).
// Pas de photo, pas de logo client : un cadre neutre légendé décrit le média attendu.

const SK_CATEGORIES = ["Tous", "Stratégie", "Branding", "Vidéo", "Événementiel"];

const SK_PROJETS = [
  { client: "Revival Business", titre: "Stratégie de communication 360°", categorie: "Stratégie", annee: "2024",
    media: "image", legende: "Visuel : plan de communication Revival Business" },
  { client: "Guidelance", titre: "Réseaux sociaux & direction artistique", categorie: "Stratégie", annee: "2024",
    media: "video", legende: "Vidéo : contenus Instagram Guidelance" },
  { client: "WIP (Working In Progress)", titre: "Branding & identité visuelle complète", categorie: "Branding", annee: "2024",
    media: "image", legende: "Visuel : identité visuelle WIP" },
  { client: "Febelfin Academy", titre: "Aftermovie de The Fin Competition", categorie: "Vidéo", annee: "2024",
    media: "video", legende: "Vidéo : aftermovie de The Fin Competition" },
  { client: "Vregas", titre: "Production vidéo & contenu", categorie: "Vidéo", annee: "2024",
    media: "video", legende: "Vidéo : vidéos promotionnelles Vregas" },
  { client: "La Cité des Nuages", titre: "Mini-vidéos & direction artistique réseaux sociaux", categorie: "Vidéo", annee: "2024",
    media: "video", legende: "Vidéo : mini-vidéos La Cité des Nuages" },
  { client: "Men at Work", titre: "Branding & identité visuelle", categorie: "Branding", annee: "2024",
    media: "image", legende: "Visuel : logotype Men at Work" },
  { client: "Wilmeyer", titre: "Couverture événementielle complète", categorie: "Événementiel", annee: "2024",
    media: "camera", legende: "Photo : tournoi de padel Wilmeyer" },
];

function SiteRealisations() {
  const { Badge, Card } = window.SKDS;
  const [filtre, setFiltre] = React.useState("Tous");
  const liste = filtre === "Tous" ? SK_PROJETS : SK_PROJETS.filter((p) => p.categorie === filtre);
  return (
    <section className="sk-section" id="realisations">
      <div className="sk-container">
        <SectionHead eyebrow="Découvrez nos projets récents" title="Nos réalisations" />
        <Reveal delay={0.1} className="sk-filters" role="group" aria-label="Filtrer par catégorie">
          {SK_CATEGORIES.map((c) => (
            <Badge key={c} as="button" type="button" className="sk-chip" tone={filtre === c ? "solid" : "soft"}
              aria-pressed={filtre === c} onClick={() => setFiltre(c)}
              style={{ padding: "var(--space-2) var(--space-4)" }}>
              {c}
            </Badge>
          ))}
        </Reveal>
        <div className="sk-projects">
          {liste.map((p, i) => (
            <Reveal key={`${filtre}-${p.client}`} delay={(i % 4) * 0.08}>
              <Card as="article" style={{ padding: 0, overflow: "hidden", height: "100%" }}>
                <div className="sk-project__media">
                  <NeutralFrame caption={p.legende} icon={p.media} />
                  <Badge className="sk-project__badge" style={{ background: "color-mix(in srgb, var(--dark-900) 72%, transparent)" }}>{p.categorie}</Badge>
                </div>
                <div className="sk-project__info">
                  <p className="sk-project__meta"><span>{p.client}</span><span>{p.annee}</span></p>
                  <h3 className="sk-project__title">{p.titre}</h3>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
