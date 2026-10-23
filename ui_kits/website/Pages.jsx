// Les trois pages du kit : accueil, nous, contact. Textes de page repris du site (titres, surtitres, introduction de
// la page Nous) ; la fin de la page Nous reprend « On en parle ? » (brief, écran 7).

function PageHero({ eyebrow, title, children }) {
  return (
    <section className="sk-page-hero">
      <Halos items={[
        { color: "var(--orange)", opacity: 0.16, blur: 110, size: 384, pos: { top: "10%", left: -140 } },
        { color: "var(--orange-deep)", opacity: 0.12, blur: 120, size: 384, pos: { top: "30%", right: -140 } },
      ]} />
      <div className="sk-container sk-narrow">
        <SectionHead as="h1" titleClass="sk-page-title" eyebrow={eyebrow} title={title}>
          {children ? <p className="sk-section__lead">{children}</p> : null}
        </SectionHead>
      </div>
    </section>
  );
}

function PageAccueil({ onNavigate }) {
  return (
    <>
      <SiteHero onNavigate={onNavigate} />
      <SiteServices />
      <SiteRealisations />
      <SiteEquipe onNavigate={onNavigate} />
      <SiteContact />
    </>
  );
}

function PageNous({ onNavigate }) {
  const { Button } = window.SKDS;
  return (
    <>
      <PageHero eyebrow="Qui sommes-nous" title="Les fondateurs">
        SKISS est portée par trois fondateurs complémentaires. Voici qui contacter selon votre besoin.
      </PageHero>
      <SiteFondateurs />
      <section className="sk-section sk-section--tight">
        <Reveal className="sk-container sk-cta">
          <h2 className="sk-cta__title">{"On en parle ?"}</h2>
          <Button variant="gradient" size="lg" onClick={() => onNavigate("contact", "formulaire")}>Lancer votre projet</Button>
        </Reveal>
      </section>
    </>
  );
}

function PageContact({ onNavigate }) {
  return (
    <>
      <PageHero eyebrow="Nous joindre" title="Parlons de votre projet">
        [Comment se passe un premier échange et sous quel délai on répond]
      </PageHero>
      <SiteContactCanaux onNavigate={onNavigate} />
      <section className="sk-section sk-section--tight" id="formulaire">
        <div className="sk-container sk-narrow">
          <Reveal as="h2" className="sk-block__title sk-block__title--center">Ou remplissez ce formulaire</Reveal>
          <Reveal delay={0.1}><SiteContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
