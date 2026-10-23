// Kit site web SKISS : éléments partagés entre les sections.
// Chargé en text/babel avant les autres fichiers : les fonctions de premier niveau sont globales,
// chaque constante de premier niveau porte un nom unique (préfixe SK_). Les composants du design system
// sont lus dans window.SKDS, à l'intérieur des fonctions.

// Pictogrammes Lucide (le jeu du site, licence ISC), tracés en 24 x 24, trait par défaut de 2.
const SK_ICONES = {
  "trending-up": [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }], ["polyline", { points: "16 7 22 7 22 13" }]],
  camera: [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }], ["circle", { cx: 12, cy: 13, r: 3 }]],
  video: [["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }], ["rect", { x: 2, y: 6, width: 14, height: 12, rx: 2 }]],
  image: [["rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }], ["circle", { cx: 9, cy: 9, r: 2 }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]],
  workflow: [["rect", { width: 8, height: 8, x: 3, y: 3, rx: 2 }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }], ["rect", { width: 8, height: 8, x: 13, y: 13, rx: 2 }]],
  "arrow-right": [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]],
  send: [["path", { d: "m22 2-7 20-4-9-9-4Z" }], ["path", { d: "M22 2 11 13" }]],
  mail: [["rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]],
  check: [["path", { d: "M20 6 9 17l-5-5" }]],
};

function SiteIcon({ name, size = 24, style = {} }) {
  const shapes = SK_ICONES[name];
  if (!shapes) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flexShrink: 0, ...style }}>
      {shapes.map(([Tag, attrs], i) => <Tag key={i} {...attrs} />)}
    </svg>
  );
}

// Apparition au défilement (site) : fondu et montée de 30 px en 0,7 s (tokens --reveal-distance, --duration-reveal).
// La racine d'observation est le conteneur qui défile (.sk-site). Sans mouvement si l'utilisateur le demande (base.css).
function Reveal({ as = "div", delay = 0, className = "", style = {}, children, ...props }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setShown(true); return undefined; }
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { setShown(true); io.disconnect(); } },
      { root: el.closest(".sk-site"), rootMargin: "0px 0px -6% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`sk-reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s`, ...style }} {...props}>
      {children}
    </Tag>
  );
}

// Halos flous en fond de section : nuances d'orange, opacité 5 à 20 %, flou 100 à 150 px (brief, « Web »).
function Halos({ items }) {
  return (
    <div className="sk-halos" aria-hidden="true">
      {items.map((h, i) => (
        <span key={i} className="sk-halo"
          style={{ background: h.color, opacity: h.opacity, filter: `blur(${h.blur}px)`, width: h.size, height: h.size, ...h.pos }} />
      ))}
    </div>
  );
}

// En-tête de section centré : surtitre (Eyebrow) puis titre H2 en Khand Bold.
function SectionHead({ eyebrow, title, as = "h2", titleClass = "sk-section__title", children }) {
  const { Eyebrow } = window.SKDS;
  const Title = as;
  return (
    <Reveal className="sk-section__head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title className={titleClass}>{title}</Title>
      {children}
    </Reveal>
  );
}

// Cadre neutre légendé à la place d'une photo ou d'une vidéo : aucune image de banque, aucun visage généré.
function NeutralFrame({ caption, icon = "image", round = false, className = "" }) {
  return (
    <div className={`sk-frame ${round ? "sk-frame--round" : ""} ${className}`.trim()} role="img" aria-label={caption}>
      <SiteIcon name={icon} size={round ? 20 : 24} />
      <span className="sk-frame__caption" aria-hidden="true">{round ? "Photo" : caption}</span>
    </div>
  );
}

// Coordonnées (brief, écrans 1, 7 et 12) et fondateurs (brief, écran 6). Espaces insécables dans le numéro.
const SK_CONTACT = {
  nom: "Martin Elegeert",
  email: "elegeertmartin.skiss@gmail.com",
  telephone: "+32 499 05 66 43",
};

const SK_FONDATEURS = [
  { nom: "Martin Elegeert", role: "Media buying, IA et contenu" },
  { nom: "Adam Elegeert", role: "Expert média, graphiste, vidéaste, motion designer et IA" },
  { nom: "Antoine Kahn", role: "[Rôle à confirmer]" },
];
