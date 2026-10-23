/**
 * Slide 8 : équipe (brief, écran 6). Trois cartes blanches à 62 % (rayon 46 px) sur le dégradé deck,
 * cadre photo rond neutre et légendé, nom en Khand Bold 40 px, rôle en Hind 36 px. Registre nominal :
 * aucun fondateur à la troisième personne. Le rôle d'Antoine Kahn reste à confirmer.
 */
function DeckSlideTeam({ scale = 1 }) {
  const { SlideFrame } = window.SKDS;
  const founders = [
    { name: "Martin Elegeert", role: "Media buying, IA et contenu" },
    { name: "Adam Elegeert", role: "Expert média, graphiste, vidéaste, motion designer et IA" },
    { name: "Antoine Kahn", role: "[Rôle à confirmer]" },
  ];
  return (
    <SlideFrame theme="gradient" title="Les fondateurs" scale={scale}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 56, alignItems: "stretch" }}>
        {founders.map((f) => (
          <article key={f.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            padding: "48px 40px 56px", borderRadius: "var(--radius-card-slide)", background: "var(--sk-card-bg, var(--capsule-bg))",
            border: "1px solid var(--sk-card-border, transparent)", color: "var(--sk-card-text, var(--ink))" }}>
            <DeckPhotoFrame name={f.name} />
            <h3 style={{ margin: "36px 0 0", fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
              fontSize: "var(--slide-card-title)", lineHeight: "var(--leading-deck)" }}>{f.name}</h3>
            <p style={{ margin: "12px 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
              lineHeight: "var(--leading-deck)" }}>{f.role}</p>
          </article>
        ))}
      </div>
    </SlideFrame>
  );
}
