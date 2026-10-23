# Design system SKISS

Dream it, design it, do it.

Ce dossier est le design system de SKISS au format attendu par Claude Design : une feuille de style unique (`styles.css`), des tokens CSS, des composants React, quatre kits d'interface et trente cartes de référence. Tout vient du brief de marque du 13 octobre 2026 (`uploads/skiss-brand-brief-2026-10-13.md`), qui fait foi : aucune valeur, aucun client, aucun chiffre, aucun témoignage n'a été inventé. Ce qui n'a pas de source est marqué « proposition » et repris dans la section 6.

## 1. Contexte

### Qui est SKISS

SKISS est une agence digitale basée à Bruxelles, fondée par Martin Elegeert, son frère jumeau Adam Elegeert et Antoine Kahn. Le nom signifie « esquisse » en suédois : le client arrive avec une idée, SKISS en fait une réalisation. Premiers textes en 2021, logo et plan d'action fin 2023, premier deck orange en 2024.

En 2026, SKISS vend trois choses :

- la publicité payante Meta et Google, sur une grille fixe (audit, cadrage, set-up, pilotage mensuel), le budget média étant toujours distinct des honoraires et payé directement par le client ;
- le contenu produit en interne : photo, vidéo, aftermovies, reels, gestion mensuelle des réseaux sociaux ;
- l'intégration de l'IA dans les process des équipes, offre en cours de validation, sans prix affiché.

Les fondateurs, en registre nominal : Martin Elegeert, media buying, IA et contenu ; Adam Elegeert, graphisme, photo, vidéo, motion design et IA, auteur de l'identité visuelle ; Antoine Kahn, cofondateur, rôle à confirmer.

Clients réels, les seuls à citer : Wilmeyer, Febelfin Academy, Greenpower Challenge (via Meraki Works), Nina Coaching, The K Art Signatures, Revival Business, et le portfolio 2024 (Guidelance, WIP, Vregas, La Cité des Nuages, Men at Work). Aucun témoignage client vérifié n'existe : le système n'en affiche aucun. Publics : indépendants, entrepreneurs et PME en Belgique, annonceurs avec au moins 500 € de budget média par mois, organisateurs d'événements, ASBL, coachs, commerces locaux, studios créatifs. Français par défaut.

### Sources

| Source | Ce qu'elle apporte | Où |
|---|---|---|
| Brief de marque du 13 octobre 2026 | Toutes les couleurs, contrastes, tailles, textes d'écran, règles de logo et d'écriture. Chaque valeur y a été mesurée dans un fichier. | `uploads/skiss-brand-brief-2026-10-13.md` |
| Deck orange 2024 | La charte d'origine : dégradé deck, Khand et Hind, capsules, cartes numérotées, chevrons, citation, processus. | `assets/references/deck-2024-p*.png` (7 captures de 1600 x 900 px) |
| Drive SKISS | Les logos officiels (le PNG fait foi sur le SVG, recomposé à environ 97 %). | `assets/logos/` |
| Posts Canva et visuel Instagram 2026 | Le dégradé social, les formes en S, le placement du logo blanc. | `assets/references/skiss-visuel-instagram-2026.png`, `canva-wilmeyer-09.png` |
| Site skiss-agency (2026) | La variante sombre chaude, la hiérarchie web, les états, les textes réels du site. | `05-Site-web/contenu-du-site/translations.ts` et `projects.ts` (hors de ce dossier) |

Le site actuel est en violet et en Montserrat : ce système retient l'orange du deck 2024 et Khand et Hind partout (voir la section 6).

## 2. Écriture

### Voix

- Donner des chiffres plutôt que des adjectifs : trois chiffres incontestables, pas quinze.
- Dire l'argent clairement : honoraires et budget média séparés, montants HTVA.
- Dire ce qui ne marchera pas tout de suite, plutôt que promettre.
- Présenter une méthode en étapes, dans l'ordre.
- Écrire court, direct, parlé : phrases courtes, « on », questions simples (« On en parle ? »).
- Montrer qui produit et comment, plutôt que se dire passionné.
- Parler pour le client, dans ses mots : son nom plus gros que SKISS en couverture.
- Traduire chaque terme technique en une phrase utile.

### Règles non négociables

- Français par défaut, orthographe et ponctuation impeccables. Espace fine insécable avant « ; ? ! » et à l'intérieur des guillemets « » ; espace insécable avant « : », « % » et « € », et entre les tranches d'un nombre (« 1 400 € »). Dans le HTML : `&nbsp;` ou U+202F.
- Aucun tiret cadratin ni demi-cadratin dans un texte visible : deux-points, virgule ou parenthèses. Les fourchettes s'écrivent avec « à » (« 90 à 180 € »).
- Accents sur les capitales. Pas de majuscule à l'anglaise : « Nos services », pas « Nos Services ».
- Aucun emoji. « SKISS » toujours en capitales.
- Pas de troisième personne quand un fondateur se présente : registre nominal ou « on ».
- Montants HTVA, budget média toujours présenté comme distinct des honoraires. Aucun retour à la ligne dans un numéro de téléphone.
- Aucun texte inventé présenté comme réel : ni client, ni chiffre, ni témoignage, ni citation. À défaut, un intitulé neutre entre crochets : [Nom du client], [Titre de la slide], [Rôle à confirmer].
- Casse : intercalaires et libellés en capitales (accents compris), titres de page et texte en casse de phrase.
- Baseline : « Dream it, design it, do it » dans un texte ; la version dessinée du logo (espace avant chaque virgule) ne se corrige pas. Seule exception, le surtitre français du hero du site : « Rêvez-le, dessinez-le, réalisez-le ».

### Phrases réelles

- « Rien ne se lance sans tracking. »
- « Le prix ne change pas par remise : il change parce que le périmètre change. »
- « L'IA comme méthode, pas comme gadget. »
- « Une vidéo tournée une fois sert partout : Reel Instagram, Reel Facebook et TikTok. »
- « Photo, vidéo, montage : les contenus sont produits en interne, jamais sous-traités. »

Ligne de contact : « Martin Elegeert · elegeertmartin.skiss@gmail.com · +32 499 05 66 43 ». Textes d'écran disponibles dans le brief, section « Écran par écran » (quatorze écrans).

## 3. Fondations visuelles

Tous les tokens sont dans `tokens/` et chargés par `styles.css`. Dans une page ou un composant, on écrit `var(--token)`, jamais un hex brut quand un token existe.

### Couleurs et contrastes

Une seule famille chromatique : l'orange. Pas de violet, pas de deuxième teinte, pas de noir pur en fond.

| Token | Hex | Rôle |
|---|---|---|
| `--orange-burnt` | #B45311 | L'aplat orange dominant du deck. Seul orange qui porte du texte blanc courant (5,02:1) et seul orange pour du petit texte sur blanc. |
| `--orange-burnt-2` | #BD5713 | Pas intermédiaire des chevrons (4,63:1 avec le blanc). |
| `--orange-deep` | #D56C25 | Deuxième nuance : disques, épingles, chevrons. Blanc en grand texte seulement (3,50:1). |
| `--orange` | #ED7D31 | Accent (proposition) : bouton, anneau de focus sur fond sombre. Jamais de texte blanc dessus (2,77:1). |
| `--orange-light-2` | #EC8B48 | Pas intermédiaire des chevrons. |
| `--orange-light` | #F18E4B | Troisième nuance. |
| `--peach` | #F3AA77 | Quatrième nuance, la plus claire : cartes, boîtes, dernier chevron. |
| `--sand` | #F4B081 | Arrêt du dégradé deck seulement. |
| `--cream` | #F6D9C7 | Panneaux et cartes claires, fond des posts clairs. |
| `--white` | #FFFFFF | Fond clair, texte sur aplat foncé. |
| `--ink` | #12100C | Texte foncé (proposition : c'est le fond du site) et fond de la variante sombre. |
| `--black` | #000000 | Logo noir uniquement. |

Les quatre nuances #B45311, #D56C25, #F18E4B, #F3AA77 vont toujours dans cet ordre, du foncé au clair, quand on numérote ou qu'on enchaîne des étapes.

Variante sombre chaude (site et écrans sombres), sur une teinte brun-jaune : `--dark-900` #12100C (fond), `--dark-800` #1C1A17 (carte), `--dark-700` #272520 (surface secondaire), `--dark-600` #322F2A (bordure), `--dark-text` #EFECE7, `--dark-muted` #989081, `--dark-cream` #EDE8DE.

Formes des posts Instagram : `--shape-1` #F7C3A5, `--shape-2` #F5D2BD, `--shape-3` #F3DED1, en aplats translucides sans contour.

Transparences et voiles, toujours en encre : `--capsule-bg` (blanc à 62 %, la seule transparence des capsules et cartes sur dégradé), `--cover-circle` (blanc à 51 %, le cercle hors cadre de la couverture), `--veil-ink-25` (3:1 sous un grand titre blanc sur le dégradé deck), `--veil-ink-41` (4,5:1 sous du texte blanc courant sur le dégradé), `--veil-ink-45` (sous un logo ou un grand titre sur photo), `--veil-ink-58` (sous du texte courant sur photo), `--ink-o14` (bordure sur fond clair, proposition), `--ink-o72` (texte secondaire sur fond clair, proposition), `--orange-o30` (bordure de carte au survol sur fond sombre).

Contrastes mesurés (seuils WCAG : 4,5:1 pour le texte courant, 3:1 pour le grand texte, les pictogrammes et le focus) :

- Jamais de blanc sur #ED7D31 (2,77:1), à aucune taille.
- Sur le dégradé deck, le texte est en encre #12100C (10,29:1 à gauche, environ 7:1 au centre). Le blanc n'est admis qu'au bord droit (5,25:1) ou sur un voile encre : 25 % pour un grand titre, 41 % pour du texte courant.
- Sur le dégradé social, encre partout où x + y atteint 853 px (sur 1080 x 1350) ; blanc seulement dans le coin sombre en haut à gauche. Signature noire en bas à droite.
- Petit texte orange sur blanc : #B45311 uniquement (5,02:1). Sur crème #F6D9C7, il tombe à 3,74:1 : on écrit alors en encre.
- Sur fond sombre #12100C : #ED7D31 6,86:1, #F3AA77 9,80:1, #989081 6,01:1, #EFECE7 16,13:1 ; jamais #B45311 en texte courant (3,79:1).
- Encre sur les nuances d'orange : de 3,79:1 (#B45311, grand texte seulement) à 9,80:1 (#F3AA77).

Exclus du système : le violet #6434A8 et tous les dégradés du site, le rouge #D42A2A des gabarits Canva, le jaune #FFC000 du deck, les couleurs du client Revival Business.

### Dégradés

- Dégradé deck, la signature de la marque : `--gradient-deck`, `linear-gradient(90deg, #F4B081 0%, #ED7F36 52%, #B0500F 100%)`. Horizontal, du clair à gauche au brûlé à droite, sans variation verticale. Pour les slides et les bandeaux de documents.
- Premier segment : `--gradient-deck-start`, `linear-gradient(90deg, #F4B081 0%, #ED7F36 100%)`. Seul dégradé admis sous un texte (encre, 6,96:1 au minimum) : bouton en dégradé, mot accent.
- Dégradé social : `--gradient-social`, `linear-gradient(135deg, #020101 0%, #F49A66 50%, #E7DDD7 100%)`. Du presque noir en haut à gauche vers l'orange au centre puis le crème en bas à droite, avec de grandes formes en S translucides. Pour Instagram et les reels.

Jamais le dégradé deck complet sous un texte blanc.

### Typographie

Deux familles Google Fonts, celles du deck 2024 : Khand pour les titres (`--font-display`), Hind pour le texte (`--font-sans`). Deux graisses, Regular 400 et Bold 700. Aucune italique : le mot accent du site (« qui convertissent ») devient un mot en Khand Bold rempli du premier segment du dégradé deck (classe `.sk-accent-word`, composant `AccentWord`). Retirées : Calibri, Arial, Montserrat, Baumans, et toutes les polices des posts Canva.

Interlignages : `--leading-display` 0,95 (H1 web), `--leading-tight` 1,05, `--leading-deck` 1,2 (mesuré dans le deck), `--leading-body` 1,5. Interlettrages : `--tracking-label` 0,08 em (libellés en capitales, proposition), `--tracking-eyebrow` 0,3 em (surtitres).

Échelle des slides 16:9 (1920 x 1080), tirée du deck :

| Rôle | Police | Token |
|---|---|---|
| Intercalaire de section (capitales) | Khand 400 | `--slide-section` 230 px |
| Phrase d'intercalaire, slide de fin | Khand 400 | `--slide-statement` 132 px |
| Chiffre clé | Khand 400 | `--slide-figure` 144 px |
| Chiffre de carte numérotée | Khand 400 | `--slide-number` 132 px |
| Citation | Khand 400 | `--slide-quote` 108 px |
| Titre de page (un seul style) | Khand 700 | `--slide-title` 88 px |
| Montant | Khand 700 | `--slide-amount` 72 px |
| Libellé de carte numérotée (capitales) | Khand 400 | `--slide-label` 56 px |
| Titre de carte | Khand 700 | `--slide-card-title` 40 px |
| Texte de capsule | Hind 700 | `--slide-capsule` 56 px |
| Grand texte | Hind 400 | `--slide-large` 48 px |
| Texte courant | Hind 400 | `--slide-body` 36 px |
| Texte minimum (légende, source) | Hind 400 | `--slide-min` 28 px |

Échelle Instagram 1080 x 1350 et reel 1080 x 1920 (proposition, d'après les hauteurs mesurées sur les posts et le site mobile) : `--post-title` 116 px (Khand 700), `--post-subtitle` 84 px (Khand 400), `--post-body` 50 px (Hind 400), `--post-eyebrow` 39 px (Hind 700, capitales), `--post-min` 28 px.

Échelle A4 (PDF des formules media buying) : `--a4-title` 30 pt, `--a4-lead` 14 pt, `--a4-body` 10,8 pt. Le one-pager ajoute des tailles locales (`--doc-*`, dans `ui_kits/documents/documents.css`), à promouvoir en tokens si elles sont validées.

Échelle web (hiérarchie mesurée sur le site) : `--text-h1` 48 à 96 px (interlignage 0,95), `--text-h2` 36 à 60 px, `--text-h3` 24 px, `--text-lead` 18 à 20 px, `--text-main` 16 px, `--text-small` 14 px, `--text-eyebrow` 12 à 16 px en capitales espacées.

### Espacements et grilles

- Web (proposition, pas de 8 px) : `--space-1` 4 px à `--space-10` 128 px ; conteneur `--container-max` 80 rem, `--container-pad` 20 à 48 px, `--section` 64 à 128 px.
- Slides 1920 x 1080 (mesuré dans le deck) : marges latérales `--slide-margin-x` 100 px ; haut des blocs `--slide-top` 104 px sans titre, `--slide-top-titled` 228 px sous un titre ; titre de page centré en haut ; signature `--slide-signature-w` 225 px de large, à `--slide-signature-inset` 48 px des bords droit et bas.
- Posts 1080 x 1350 (mesuré sur un post Wilmeyer) : `--post-margin-x` 108 px, `--post-margin-bottom` 110 px. Zone sûre du reel (proposition, consignes Meta) : 270 px en haut, 672 px en bas.
- A4 : `--a4-margin` 15 mm.
- Cartes numérotées : quatre pilules verticales de 17,4 % de la largeur, gouttière de 6,9 %. Capsules : 1720 x 169 px. Citation : carte de 1722 x 870 px.

### Rayons

Deux rayons par format, une seule transparence. `--radius-pill` (pilule) pour capsules, boutons, étiquettes et cartes numérotées ; `--radius-card-slide` 46 px pour les cartes sur 1920 x 1080 ; sur le web, `--radius-card` 16 px et `--radius-field` 12 px. Ombre très douce ou aucune.

### Thèmes

Six thèmes, par classes CSS sur un conteneur, qui redéfinissent les tokens sémantiques (`--background`, `--surface`, `--surface-soft`, `--text`, `--text-muted`, `--heading-accent`, `--border`, `--link`, `--btn-primary-*`, `--btn-secondary-*`, `--ring`, `--logo-tone`). Le composant `ThemeSection` pose la classe, le fond et la couleur du texte.

| Thème | Classe | Fond | Texte | Logo | Usage |
|---|---|---|---|---|---|
| Clair | aucune (`:root`) ou `.theme-light` | blanc | encre | noir | Pages, slide tarifaire, posts clairs |
| Sombre chaud | `.theme-dark` | #12100C | #EFECE7 | blanc | Site, écrans sombres |
| Dégradé deck | `.theme-gradient` | dégradé deck | encre | blanc | Slides, bandeaux |
| Brûlé | `.theme-burnt` | #B45311 | blanc | blanc | Post citation, aplat fort |
| Social | `.theme-social` | dégradé social | encre | noir | Posts Instagram, reels |
| Crème | `.theme-cream` | #F6D9C7 | encre | noir | Posts et pages claires |

Sur `.theme-gradient`, `.theme-social` et `.theme-cream`, l'accent de titre est l'encre (le brûlé ne passe pas sur crème). Sur `.theme-dark`, l'accent et le focus sont `--orange`.

### États et mouvement

États web, ceux du site avec l'orange à la place du violet : bouton plein à 90 % d'opacité au survol ; bouton en contour rempli de `--surface-soft` au survol ; liens de navigation `--dark-muted` qui passent à `--dark-text` ; bordure de carte qui passe à `--orange-o30` au survol ; bordure de champ orange au focus ; bouton désactivé à 60 % ; anneau de focus visible de 2 px en `--ring` avec décalage de 2 px (règle `:focus-visible` de `base.css`).

Mouvement : apparition en fondu avec montée de `--reveal-distance` 30 px en `--duration-reveal` 0,7 s, courbe `--ease-out` ; transitions courtes en `--duration-fast` 0,18 s ; tout est coupé sous `prefers-reduced-motion`.

### Imagerie

- Photo : reportage sur le vif, jamais posé. Téléobjectif, sujet net sur arrière-plan flou, lumière naturelle, couleurs chaudes et saturées, retouche légère. Cadrage vertical fréquent, coulisses en noir et blanc acceptées. Vidéo : aftermovies, reels, drone de jour et de nuit.
- Photo sur la marque : photo plein cadre avec logo blanc et filet fin en L ; photo détourée sur le dégradé ; grand aplat courbe #B45311 derrière une photo détourée.
- Aucune photo réelle n'est fournie : le système utilise des cadres neutres légendés (« Photo : tournoi de padel Wilmeyer »). Jamais de banque d'images, jamais de visage généré, jamais de logo client.
- Sur une photo, voile encre sous un logo ou un titre blanc (45 % au moins) et sous du texte courant (58 % au moins).
- Formes graphiques : S translucides (posts), cercle blanc hors cadre à 51 % (couverture, `--cover-circle`), halos flous orange sur fond sombre (opacité 5 à 20 %, flou 100 à 150 px).

## 4. Iconographie

### Logo

Une ampoule dessinée (spirale en tourbillon, filet fin, culot de six barres), le wordmark SKISS en capitales grasses, la baseline « DREAM IT , DESIGN IT , DO IT ». Monochrome : noir ou blanc, rien d'autre. Fichiers dans `assets/logos/` ; le logo s'utilise tel quel, on ne le redessine jamais et on ne retape jamais le wordmark (sa police n'est pas identifiée).

| Usage | Version | Fichiers | Minimum à l'écran |
|---|---|---|---|
| Couverture, post de marque, reel, planche | Logo complet vertical | `logo-vertical-black.png`, `logo-vertical-white.png` (font foi), `.svg` | 230 px de large |
| En-tête de document, one-pager | Logo complet horizontal | `logo-horizontal-black.png`, `logo-horizontal-white.png` (font foi), `.svg` | 325 px de large |
| Signature de page, signature e-mail, en-tête trop petit | Spirale + wordmark | `spiral-*.png` (334 x 349 px) et `wordmark-*.png` (3000 x 822 px) | wordmark 16 px de haut |
| Pictogramme, filigrane | Ampoule seule | `bulb-black.svg`, `bulb-white.svg` | 155 px de haut |
| Favicon, avatar, motif | Spirale seule | `spiral-*.png` | 350 px au plus |
| Pied de page | Baseline seule | `baseline-black.svg`, `baseline-white.svg` | |

Règles : noir sur fond clair ; blanc sur le dégradé deck, l'aplat brûlé, une photo voilée ou un fond sombre ; sur le dégradé social, noir dans la moitié claire, blanc dans le coin sombre. Pas de recoloration, de déformation, de rotation, de contour, d'ombre ni d'effet. Zone de protection (proposition) : un espace libre égal à la hauteur du wordmark tout autour. En dessous des minimums, on passe à la spirale + wordmark ou à la spirale seule ; au-dessus de 350 px, on prend une autre version que la spirale (pas de vectoriel).

Composant `Logo` (`components/brand/Logo.jsx`) : `variant` vertical, horizontal, bulb, spiral, wordmark ou baseline ; `tone` black ou white ; `height` ; `src` pour forcer un fichier. Les URL sont calculées depuis l'emplacement du bundle (`SK_ROOT + "assets/logos/..."`).

### Signature

Spirale et wordmark PNG côte à côte, la signature de page de toutes les slides et de tous les posts, sauf ceux qui portent déjà le logo complet (couverture, fin, reel). Proportions du deck : spirale de 55 px de haut, wordmark de 45 px, écart de 8 px, soit 225 px de large, à 48 px des bords droit et bas sur 1920 x 1080 ; blanche sur le dégradé deck, noire sur fond clair. Barre de navigation du site : spirale 36 px, wordmark 20 px, écart 12 px. Posts et reels : 200 px de large, calée sur les marges de 108 et 110 px. Composant `Signature` (`layout` page ou nav, `tone`, `height`, `src`). La signature e-mail reprend la même composition en image sur tuile blanche (`ui_kits/documents/email-signature-logo.png`).

### Pictogrammes

Lucide, le jeu du site, au trait fin de 2 px, à l'épaisseur par défaut mise à l'échelle avec l'icône. Un seul style : jamais de pictogramme plein. Blancs seulement sur #B45311, #BD5713, #D56C25 ou fond sombre ; encre partout ailleurs (dégradé deck, capsules, cartes claires). Logos tiers toujours monochromes, noirs ou blancs. Les composants intègrent leurs tracés en ligne (`NumberedCard` : search, compass, wrench, trending-up, camera, video, target, calendar-check ; `SiteIcon` dans le kit site).

## 5. Index des fichiers

Racine : `styles.css` (entrée unique, uniquement des `@import`), `readme.md`, `SKILL.md`, `thumbnail.html` (vignette du système : logo blanc sur le dégradé deck et bande des cinq couleurs), `_ds_bundle.js` (bundle généré localement par `tools/build-local-bundle.mjs` ; Claude Design le remplace par sa propre compilation), `uploads/skiss-brand-brief-2026-10-13.md` (le brief).

### tokens/

| Fichier | Contenu |
|---|---|
| `fonts.css` | Import Google Fonts de Khand et Hind, 400 et 700. |
| `colors.css` | Palette, variante sombre, formes, voiles, dégradés, tokens sémantiques, six thèmes, rayons. |
| `typography.css` | Familles, graisses, interlignages, interlettrages, échelles slides, Instagram, A4 et web. |
| `spacing.css` | Échelle web, conteneur, grille des slides, marges des posts et de l'A4, mouvement. |
| `base.css` | Reset léger, éléments (`body`, titres, liens, `::selection`, `:focus-visible`), thèmes, utilitaires `.sk-eyebrow`, `.sk-display`, `.sk-accent-word`, `.sk-container`. |

### assets/

`logos/` : `logo-vertical-black|white.svg|png`, `logo-horizontal-black|white.svg|png`, `bulb-black|white.svg`, `spiral-black|white.png`, `wordmark-black|white.png`, `baseline-black|white.svg` (16 fichiers).

`references/` : `deck-2024-p01-couverture.png`, `p03-citation`, `p04-section`, `p05-cartes-numerotees`, `p07-capsules`, `p29-processus`, `p32-chevrons`, `skiss-visuel-instagram-2026.png`, `canva-wilmeyer-09.png` (9 fichiers, références visuelles seulement).

### components/

Chaque composant est un `.jsx` (`import React from "react"`, export nommé, styles en ligne avec `var(--token)`) accompagné d'un `.d.ts` (props commentées, `@startingPoint`). Une carte de groupe `<dossier>.card.html` les montre sur plusieurs thèmes.

`core/` (carte `core.card.html`) :

| Composant | Rôle |
|---|---|
| `Button` | Pilule. `variant` primary, secondary ou gradient ; `size` sm, md, lg ; `state` hover ou focus pour une maquette ; `disabled`. |
| `Badge` | Étiquette pilule en Hind Bold 14 px. `tone` soft, solid ou outline. |
| `Card` | Carte rayon 16 px, bordure 1 px. `elevated`, `interactive` (bordure orange à 30 % au survol). |
| `Input` | Champ rayon 12 px avec `label`, focus en anneau `--ring`, `disabled`. |
| `Eyebrow` | Surtitre Hind Bold en capitales espacées, couleur `--heading-accent`. |

`brand/` (carte `brand.card.html`) :

| Composant | Rôle |
|---|---|
| `Logo` | Les six versions du logo, par `variant` et `tone`, hauteur par défaut au minimum d'usage. |
| `Signature` | Spirale + wordmark, `layout` page (55/45/8) ou nav (36/20/12). |
| `ThemeSection` | Conteneur qui pose un thème (`theme` light, dark, gradient, burnt, social, cream), fond et couleur de texte. |
| `AccentWord` | Mot en Khand Bold rempli du premier segment du dégradé deck, pour fond sombre. |

`blocks/` (cartes `blocks.card.html`, `blocks-slides.card.html`, `blocks-data.card.html`, `blocks-posts.card.html`) :

| Composant | Rôle |
|---|---|
| `SlideFrame` | Cadre 1920 x 1080 avec thème, titre optionnel, marges du deck, signature et `scale` (nombre ou fit). |
| `PostFrame` | Cadre Instagram 1080 x 1350 (post) ou 1080 x 1920 (reel) avec thème, formes en S et signature. |
| `Capsule` | Bande pilule pleine largeur, 169 px, blanc à 62 %, texte Hind Bold 56 px encre. |
| `NumberedCard` | Pilule verticale avec disque numéroté (quatre nuances), libellé en capitales, pictogramme Lucide. |
| `Quote` | Citation Khand 108 px avec guillemets français, spirale à gauche, auteur Hind Bold 36 px. |
| `KeyFigure` | Chiffre clé Khand 144 px et légende Hind 36 px. |
| `StepChevrons` | Deux à cinq chevrons emboîtés du foncé au clair (les quatre nuances officielles, ou les cinq pas du deck à cinq étapes), contour blanc 2 px, texte blanc puis encre. |
| `ProcessSteps` | Cartes rayon 46 px reliées par des flèches pleines en encre. |
| `PriceTable` | Tableau prestation, durée, prix en cartes crème opaques, montants alignés à droite, espaces insécables. |
| `SectionTitle` | Un mot en Khand 230 px, encre ou blanc sur voile 41 %. |

### ui_kits/

| Kit | Groupe | Fichiers |
|---|---|---|
| `deck/` | Deck 16:9 | `index.html` (visionneuse de dix slides, flèches et boutons, `?slide=N`), `deck-overview.html` (vignettes), `Deck.jsx` (`window.SKISS_DECK_SLIDES`), `DeckParts.jsx` (ligne de contact, cadre photo), `SlideCover`, `SlideSection`, `SlideCapsules`, `SlideSteps`, `SlideChevrons`, `SlideFigures`, `SlidePricing`, `SlideTeam`, `SlideQuote`, `SlideEnd` (`.jsx`). |
| `social/` | Réseaux sociaux | `index.html` (les quatre formats réduits), `post-cover.html`, `post-inside.html`, `post-quote.html`, `reel-cover.html` (chacun carte et point de départ), `SocialPostCover.jsx`, `SocialPostInside.jsx`, `SocialPostQuote.jsx`, `SocialReelCover.jsx`. |
| `documents/` | Documents | `index.html` (reprend le tableau de la signature en copie, sans fetch), `one-pager.html` (A4 portrait, marges 15 mm, imprimable), `DocOnePager.jsx`, `documents.css`, `email-signature.html` (tableau HTML de 560 px, styles en ligne, la source à copier), `email-signature-logo.png` (167 x 56 px). |
| `website/` | Site web | `index.html` (accueil, nous, contact), `site.css`, `Commun.jsx` (icônes, Reveal, halos, cadres neutres), `Nav.jsx`, `Hero.jsx`, `Services.jsx`, `Realisations.jsx`, `Equipe.jsx`, `Contact.jsx`, `Footer.jsx`, `Pages.jsx`. |

Les kits chargent React 18.3.1, `../../_ds_bundle.js` puis Babel, et posent une seule fois `window.SKDS` avec l'espace de noms du design system (`window[Object.keys(window).find(k => /DesignSystem_/.test(k))]`).

### guidelines/

Trente cartes de 700 px de large, chacune dans son viewport, qui lient `../styles.css`.

| Groupe | Cartes |
|---|---|
| Couleurs | `couleurs-orange`, `couleurs-neutres`, `couleurs-sombre`, `couleurs-degrades`, `couleurs-texte-sur-degrades`, `couleurs-themes`, `couleurs-contrastes`, `couleurs-transparences` |
| Typographie | `typographie-khand`, `typographie-hind`, `typographie-echelle-slides`, `typographie-echelle-instagram-reel`, `typographie-echelle-a4`, `typographie-echelle-web` |
| Espacements | `espacements-echelle-web`, `espacements-grille-slide`, `espacements-rayons` |
| Marque | `marque-logo-clair`, `marque-logo-sombre`, `marque-logo-degrade`, `marque-signature`, `marque-usages-tailles`, `marque-zone-protection`, `marque-interdits`, `marque-baseline` |
| Imagerie | `imagerie-photo`, `imagerie-pictogrammes`, `imagerie-formes` |
| Écriture | `ecriture-voix`, `ecriture-regles` |

Dernier contrôle de rendu (`tools/render-check.py`, hors de ce dossier) : 57 cartes, 0 en erreur, 0 trop vide ; les 9 variantes identiques sont les trois index de kits et les six écrans des kits social et documents, dont la carte et le point de départ partagent le même viewport.

## 6. Réserves et points à confirmer

### Marqué « proposition » (sans source mesurée)

- L'orange d'accent `--orange` #ED7D31 (bouton, focus, accent sur fond sombre) : c'est l'orange par défaut d'Office, presque absent du deck. Autre option : #ED7F36, milieu mesuré du dégradé deck.
- L'encre `--ink` #12100C comme couleur de texte : c'est le fond du site, jamais une couleur de texte dans les sources.
- La zone de protection du logo : un espace égal à la hauteur du wordmark tout autour.
- L'échelle Instagram et reel, et les graisses attribuées à chaque taille ; la zone sûre du reel (270 px en haut, 672 px en bas) ; la signature de post à 200 px.
- L'échelle A4 convertie à l'écran (96 ppp) et les tailles locales `--doc-*` du one-pager ; les rayons hors 16:9 ; la largeur de 560 px de la signature e-mail.
- L'échelle d'espacement web sur 8 px, `--tracking-label`, `--ink-o14`, `--ink-o72`, l'ombre de `Card elevated`.
- Les blocs des slides posés à 128 px du bas quand la signature est affichée (au lieu de 104 px, pour ne pas la toucher).
- Le tracé des formes en S et la géométrie du filet en L (non mesurés), les pictogrammes Lucide redessinés de mémoire, les proportions des chevrons.
- Les montants du tableau de prix en Hind Bold 36 px (le rôle « Montant » du brief, Khand Bold 72 px, ne tient pas sur sept lignes).
- Sur la couverture du deck, le nom du client en Khand Bold 132 px et le logo vertical réduit à 400 px de haut pour que le wordmark reste moins large que le nom.
- Le bouton principal en encre #12100C et texte blanc sur les thèmes dégradé deck et social (le brief ne définit pas de bouton sur dégradé).
- La slide chevrons du deck (hors des sept écrans du brief) : quatre chevrons et une rangée de cartes claires, comme p32, avec les textes des blocs A, B et C de l'écran 12 et « [Détail de l'étape] » pour le cadrage.
- Les textes de démonstration sans source, laissés entre crochets ([Titre de la slide], [Rôle à confirmer], [Description à confirmer], [Profil LinkedIn], [Compte Instagram]).

### À trancher avec Adam

- La police du site : ce système applique Khand et Hind partout, alors que le site est en Montserrat depuis juillet 2026 (choix d'Adam). Soit Khand et Hind partout, soit Montserrat pour le web (il faudra alors modifier `typography.css` et le kit site).
- La composition du logo vertical : le visuel Instagram 2026 et le PNG officiel n'ont pas les mêmes proportions. Le système impose le PNG.
- Les photos réelles (équipe, Wilmeyer, Zolder) : tout est en cadres neutres légendés tant qu'elles ne sont pas fournies.
- Le registre « nous » de quatre libellés du kit site, repris mot pour mot de `translations.ts` (« Message envoyé ! Nous vous répondons rapidement. », « Nous écrire directement », « Ce que nous faisons », « Nous joindre ») : garder les textes du site ou passer en « on », la voix du brief.

### À confirmer avant diffusion

- Le rôle d'Antoine Kahn : « [Rôle à confirmer] » partout.
- « 10 ans » (écran 4 et page Nous) : les textes fondateurs de 2023 et 2024 parlent de quatre ans d'expérience.
- La promesse du hero (« On crée des histoires qui convertissent ») et la baseline en français : gardées pour la démonstration.
- L'option « titres blancs seulement sur un aplat #B45311 » à la place des voiles sur le dégradé.

### Limites techniques

- Le wordmark et la spirale n'existent qu'en image (PNG de 3000 x 822 px et de 334 x 349 px) : pas de vectoriel. La spirale ne dépasse pas 350 px. À faire vectoriser par Adam. Les SVG de logo complet sont des recompositions : le PNG fait foi.
- Les polices sont chargées depuis Google Fonts (`tokens/fonts.css`, licence SIL OFL). Hors ligne ou si le chargement est bloqué, le texte retombe sur Arial Narrow, Helvetica Neue ou Arial, polices retirées du système. Les messageries ne chargent pas Hind : la signature e-mail s'affichera en police de secours.
- La signature e-mail est en hex en ligne (les messageries ignorent les variables CSS) et son image est en chemin relatif : à héberger en ligne avant usage réel. Son tableau existe en double (`email-signature.html`, la source à copier, et le gabarit `<template>` de `index.html`) : modifier les deux en cas de changement.
- `AccentWord` ne passe que sur fond sombre. `Button variant="gradient"` se confond avec `.theme-gradient` : utiliser primary.
- Le bouton secondaire sur fond sombre a un contour à 1,4:1 (`--dark-600`), très discret ; le libellé des boutons est optiquement 2 px trop haut avec Hind ; `--text-h1` n'atteint 96 px qu'à 1600 px de large.
- `SectionTitle tone="white"` exige un parent en `position: relative` hors des cadres ; `PostFrame` n'impose pas la règle de contraste du dégradé social à une mise en page libre.
- Le site n'a ni `Textarea`, ni `Select`, ni menu mobile ; « FR | EN » est statique ; le formulaire ne transmet rien.
- Les tailles minimales du logo sont documentées et appliquées par défaut, mais pas imposées par le code.
