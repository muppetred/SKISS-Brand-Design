// Hero de l'accueil (brief, écran 14) : variante sombre chaude, halos orange flous, textes mot pour mot.
// Le mot « convertissent » est rempli du dégradé deck (AccentWord), sans italique.

const SK_HALOS_HERO = [
  { color: "var(--orange)", opacity: 0.2, blur: 100, size: 384, pos: { top: "25%", left: -128 } },
  { color: "var(--orange-deep)", opacity: 0.15, blur: 100, size: 384, pos: { bottom: "25%", right: -128 } },
  { color: "var(--peach)", opacity: 0.1, blur: 120, size: 384, pos: { top: "33%", right: "25%" } },
];

function SiteHero({ onNavigate }) {
  const { Eyebrow, AccentWord, Button } = window.SKDS;
  return (
    <section className="sk-hero" id="accueil-hero">
      <Halos items={SK_HALOS_HERO} />
      <div className="sk-container sk-hero__content">
        <Reveal delay={0}>
          <Eyebrow>Rêvez-le, dessinez-le, réalisez-le</Eyebrow>
        </Reveal>
        <Reveal as="h1" delay={0.1} className="sk-hero__title">
          On crée des histoires<br />qui <AccentWord>convertissent</AccentWord>
        </Reveal>
        <Reveal as="p" delay={0.2} className="sk-hero__text">
          {"Photo, vidéo, montage : les contenus sont produits en interne, jamais sous-traités."}
        </Reveal>
        <Reveal delay={0.3} className="sk-hero__actions">
          <Button variant="gradient" size="lg" onClick={() => onNavigate("contact", "formulaire")}>Lancer votre projet</Button>
          <Button variant="secondary" size="lg" onClick={() => onNavigate("accueil", "realisations")}>Voir nos réalisations</Button>
        </Reveal>
      </div>
      <div className="sk-scroll-cue" aria-hidden="true"><span /></div>
    </section>
  );
}
