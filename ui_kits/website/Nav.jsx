// Barre de navigation : spirale + wordmark blancs (proportions du site : 36, 20, écart 12),
// liens Services, Nous, Portfolio, Contact, bouton pilule « Commencer », « FR | EN ».
// Transparente en haut de page, voile sombre flouté après 50 px de défilement (comme le site).

const SK_LIENS_NAV = [
  { label: "Services", page: "accueil", ancre: "services" },
  { label: "Nous", page: "nous" },
  { label: "Portfolio", page: "accueil", ancre: "realisations" },
  { label: "Contact", page: "contact" },
];

function SiteNav({ page, scrolled, onNavigate }) {
  const { Signature, Button } = window.SKDS;
  const go = (e, cible, ancre) => { e.preventDefault(); onNavigate(cible, ancre); };
  return (
    <header className={`sk-nav ${scrolled ? "is-scrolled" : ""}`.trim()}>
      <div className="sk-container sk-nav__inner">
        <a href="#accueil" className="sk-nav__brand" aria-label="SKISS, accueil" onClick={(e) => go(e, "accueil")}>
          <Signature layout="nav" tone="white" />
        </a>
        <nav className="sk-nav__links" aria-label="Navigation principale">
          {SK_LIENS_NAV.map((l) => (
            <a key={l.label} href={`#${l.ancre || l.page}`} className="sk-nav__link"
              aria-current={!l.ancre && page === l.page ? "page" : undefined}
              onClick={(e) => go(e, l.page, l.ancre)}>
              {l.label}
            </a>
          ))}
          <Button size="sm" onClick={() => onNavigate("contact", "formulaire")}>Commencer</Button>
          <span className="sk-lang" aria-label={"Langue\u00A0: français"}>
            <b>FR</b><span className="sk-lang__sep" aria-hidden="true">|</span><span>EN</span>
          </span>
        </nav>
      </div>
    </header>
  );
}
