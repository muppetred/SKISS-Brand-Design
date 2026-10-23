// Contact : formulaire (Input et Button du design system), canaux directs et « qui contacter ».
// Libellés repris du site ; « Votre besoin » propose les trois offres 2026 du brief au lieu des cinq options du site.
// Coordonnées : ligne de contact du brief (écrans 1, 7, 12). Ce que les sources ne donnent pas reste entre crochets.
// Maquette : l'envoi n'appelle aucun service, il affiche le message de confirmation du site.

const SK_BESOINS = ["Publicité payante Meta et Google", "Contenu produit en interne", "IA dans les process des équipes"];

function SiteContactForm() {
  const { Input, Button, Badge } = window.SKDS;
  const [besoin, setBesoin] = React.useState("");
  const [envoye, setEnvoye] = React.useState(false);
  const onSubmit = (e) => { e.preventDefault(); setEnvoye(true); };
  return (
    <form className="sk-form" onSubmit={onSubmit}>
      <div className="sk-form__row">
        <Input label="Nom" name="nom" type="text" required placeholder="Votre nom" autoComplete="name" />
        <Input label="E-mail" name="email" type="email" required placeholder="votre@email.com" autoComplete="email" />
      </div>
      <div className="sk-form__row">
        <Input label="Entreprise" name="entreprise" type="text" placeholder="Nom de votre entreprise" autoComplete="organization" />
        <Input label="Téléphone" name="telephone" type="tel" placeholder={"+32 470 00 00 00"} autoComplete="tel" />
      </div>
      <fieldset className="sk-fieldset">
        <legend className="sk-field__label">Votre besoin</legend>
        <div className="sk-chips">
          {SK_BESOINS.map((b) => (
            <Badge key={b} as="button" type="button" className="sk-chip" tone={besoin === b ? "solid" : "soft"}
              aria-pressed={besoin === b} onClick={() => setBesoin(b)}
              style={{ padding: "var(--space-2) var(--space-4)" }}>
              {b}
            </Badge>
          ))}
        </div>
      </fieldset>
      <label className="sk-field">
        <span className="sk-field__label">Message</span>
        <textarea className="sk-textarea" name="message" rows={5} required placeholder="Parlez-nous de votre projet…" />
      </label>
      <div className="sk-form__submit">
        {envoye ? (
          <p className="sk-form__status" role="status">
            <SiteIcon name="check" size={20} />{"Message envoyé ! Nous vous répondons rapidement."}
          </p>
        ) : (
          <Button type="submit" size="lg">Envoyer le message<SiteIcon name="send" size={16} /></Button>
        )}
      </div>
    </form>
  );
}

// Section de l'accueil.
function SiteContact() {
  return (
    <section className="sk-section" id="contact">
      <Halos items={[{ color: "var(--orange-deep)", opacity: 0.1, blur: 120, size: 384, pos: { top: "50%", right: -160, transform: "translateY(-50%)" } }]} />
      <div className="sk-container sk-narrow">
        <SectionHead eyebrow="Parlons-en" title="Lancez votre projet">
          <p className="sk-section__lead">
            {SK_CONTACT.nom} · <a href={`mailto:${SK_CONTACT.email}`}>{SK_CONTACT.email}</a> · <span className="sk-nowrap">{SK_CONTACT.telephone}</span>
          </p>
        </SectionHead>
        <Reveal delay={0.2}><SiteContactForm /></Reveal>
      </div>
    </section>
  );
}

// Page Contact : canaux directs et fondateurs à contacter.
const SK_CANAUX = [
  { label: "E-mail", valeur: SK_CONTACT.email, href: `mailto:${SK_CONTACT.email}` },
  { label: "Téléphone", valeur: SK_CONTACT.telephone },
  { label: "LinkedIn", valeur: "[Profil LinkedIn]" },
  { label: "Instagram", valeur: "[Compte Instagram]" },
];

function SiteContactCanaux({ onNavigate }) {
  const { Card } = window.SKDS;
  return (
    <div className="sk-container sk-narrow sk-canaux">
      <Reveal as="section" className="sk-block">
        <h2 className="sk-block__title">Nous écrire directement</h2>
        <div className="sk-grid-2">
          {SK_CANAUX.map((c) => (
            <Card key={c.label} style={{ padding: "var(--space-4) var(--space-5)" }}>
              <p className="sk-mini-label">{c.label}</p>
              <p className="sk-mini-value">{c.href ? <a href={c.href}>{c.valeur}</a> : <span className="sk-nowrap">{c.valeur}</span>}</p>
            </Card>
          ))}
        </div>
      </Reveal>
      <Reveal as="section" delay={0.1} className="sk-block">
        <h2 className="sk-block__title">Qui contacter selon votre besoin</h2>
        <div className="sk-grid-3">
          {SK_FONDATEURS.map((f) => (
            <Card key={f.nom} as="a" href="#nous" interactive onClick={(e) => { e.preventDefault(); onNavigate("nous"); }}
              style={{ padding: "var(--space-4) var(--space-5)" }}>
              <p className="sk-mini-name">{f.nom}</p>
              <p className="sk-mini-role">{f.role}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
