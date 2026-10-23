// Pied de page : signature blanche (wordmark à 17,8 px, au-dessus du minimum de 16 px), baseline dessinée à sa taille par défaut,
// liens du site, mention de droits du site.

const SK_LIENS_PIED = [
  { label: "Services", page: "accueil", ancre: "services" },
  { label: "Portfolio", page: "accueil", ancre: "realisations" },
  { label: "Nous", page: "nous" },
  { label: "Contact", page: "contact" },
];

function SiteFooter({ onNavigate }) {
  const { Signature, Logo } = window.SKDS;
  const go = (e, page, ancre) => { e.preventDefault(); onNavigate(page, ancre); };
  return (
    <footer className="sk-footer">
      <div className="sk-container sk-footer__inner">
        <a href="#accueil" className="sk-footer__brand" aria-label="SKISS, accueil" onClick={(e) => go(e, "accueil")}>
          <Signature layout="nav" tone="white" height={32} />
          <Logo variant="baseline" tone="white" />
        </a>
        <nav className="sk-footer__links" aria-label="Pied de page">
          {SK_LIENS_PIED.map((l) => (
            <a key={l.label} href={`#${l.ancre || l.page}`} className="sk-nav__link" onClick={(e) => go(e, l.page, l.ancre)}>{l.label}</a>
          ))}
        </nav>
        <p className="sk-footer__copy">© {new Date().getFullYear()} SKISS. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
