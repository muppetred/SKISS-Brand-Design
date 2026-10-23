# Prompt pour Claude Design : branding SKISS

Préparé le 13 octobre 2026 à partir des audits du deck orange de 2024, des logos du Drive, du visuel Instagram
exporté de Canva le 31 mars 2026, des posts Canva et du site. Chaque valeur du prompt a été mesurée dans un fichier
(remplissages vectoriels, pixels, variables CSS). Ce qui n'a pas de source, et chaque rôle de couleur qui relève d'un
choix plutôt que d'une mesure, est signalé comme une proposition.

## À joindre avant d'envoyer

Chemins relatifs au dossier `pieces-jointes/`. Joins d'abord le bloc « Indispensable » (environ 7,3 Mo), puis le bloc
« Utile » si Claude Design accepte assez de fichiers.

### Indispensable

| Fichier | Ce qu'il apporte |
|---|---|
| `logos/skiss-logo-complet-vertical-noir.svg`, `.png`, `-blanc.svg`, `-blanc.png` | Logo principal (ampoule, SKISS, baseline) : noir pour fond clair, blanc pour le dégradé orange et le fond sombre. |
| `logos/skiss-logo-complet-horizontal-noir.svg`, `.png`, `-blanc.svg`, `-blanc.png` | Version horizontale (ampoule à gauche) : en-têtes, one-pager, site en mode sombre. |
| `logos/skiss-ampoule-noir.svg` et `skiss-ampoule-blanc.svg` | Ampoule seule, en vrai vectoriel comme la baseline : pictogramme, filigrane. |
| `logos/skiss-spirale-blanc.png` et `skiss-spirale-noir.png` | Spirale seule (334 x 349 px, sans version vectorielle) : signature de page, favicon, avatar, logo du site. |
| `logos/skiss-wordmark-blanc.png` et `skiss-wordmark-noir.png` | Wordmark SKISS seul (3000 x 822 px), à associer à la spirale pour la signature. |
| `references-deck-2024/deck-2024-p01-couverture.png` à `deck-2024-p40-budget.png` (12 images) | La charte orange d'origine, en captures de 1600 x 900 px. Modèles : p01 couverture, p03 citation, p04 intercalaire, p05 cartes numérotées, p07 capsules, p29 processus, p32 chevrons. Mise en page seulement : p08, p22, p31. Contre-exemples : p24 et p40 (effet « verre » à ne pas reproduire, tarifs 2024 périmés). Si le nombre de fichiers est limité, joins à la place `references-deck-2024/SKISS-deck-2024-extraits.pdf` : les mêmes 12 pages, dans cet ordre (le prompt donne la correspondance). |
| `references-instagram/skiss-visuel-instagram-2026.png` | Logo blanc sur dégradé diagonal sombre, orange, crème, grandes formes en S. Exporté le 31 mars 2026 de la page 15 du Canva « SKISS - Instagram - Exemple » (posts Wilmeyer) ; date de création inconnue. Copié le 13 octobre 2026 depuis `10-Brand-design/assets/logo/`. |
| `references-instagram/canva-wilmeyer-09.png` | Le dégradé social sans formes, avec la baseline en texte blanc ; ses valeurs y ont été mesurées. |
| `references-instagram/canva-wilmeyer-planche-25-pages.png` | Les posts SKISS existants : photo d'événement avec logo blanc, dégradé social, équipe (on y retrouve `canva-wilmeyer-01.png` et `canva-wilmeyer-20.png`). |
| `references-site-2026/site-accueil-desktop-1440-viewport.png` | Le hero actuel du site : structure à garder, accent violet à remplacer. |

### Utile

| Fichier | Ce qu'il apporte |
|---|---|
| `logos/skiss-baseline-noir.svg` et `skiss-baseline-blanc.svg` | Baseline seule en vectoriel, pour un pied de page. |
| `references-instagram/canva-templates-planche-17-pages.png` | Gabarits Instagram éditoriaux (titres en capitales, numéros géants, filets fins) : idées pour les posts clairs. |
| `references-instagram/canva-wilmeyer-01.png` | Traitement d'une photo d'événement : wordmark blanc, filet fin en L, ampoule en bas à droite. |
| `references-instagram/canva-wilmeyer-20.png` | Photo détourée des trois fondateurs posée sur le dégradé. |
| `references-site-2026/site-nous-desktop-1440-viewport.png`, `site-projet-wilmeyer-desktop-1440.png`, `site-accueil-mobile-390-viewport.png` | Composants web existants : cartes fondateurs, fiche projet, galerie, version mobile. |

**Ne pas joindre** : `logos/source-ne-pas-joindre/` (`SKISS.ai` et le PDF de l'ampoule pour l'imprimeur, archive pour
Adam), les autres captures Canva à l'unité et les autres captures du site (`references-instagram/` pèse environ 27 Mo).

À savoir : le wordmark SKISS n'existe en vectoriel dans aucune source. Les SVG de logo complet sont mixtes (ampoule et
baseline vectorielles, wordmark en image de 3000 px intégrée), et leurs versions blanches sont des recolorations des
noires : aucune version blanche officielle n'existe sur le Drive. Ces SVG sont une recomposition fidèle à environ 97 %
des PNG officiels, pas des fichiers d'origine : en cas de doute, le PNG fait foi.

## Prompt à coller dans Claude Design

Copie de « Crée le design system » jusqu'à la fin de « Ce que j'attends en retour ».

---

Crée le design system complet de SKISS, agence digitale bruxelloise, puis une série d'écrans de démonstration qui
l'appliquent. La marque existe déjà : un logo (ampoule-spirale, wordmark SKISS, baseline), une couleur (l'orange) et un
premier deck de 2024. Ton travail consiste à en faire un système cohérent et lisible, pas à inventer une autre
identité. Les fichiers joints sont la référence : logos à utiliser tels quels (pour le logo complet, le PNG fait foi
sur le SVG, qui est une recomposition), slides du deck 2024, visuel Instagram du logo, posts Canva existants, capture
du site.

Les numéros de page (p1, p5…) renvoient au deck 2024 et figurent dans les noms des captures. Si tu as reçu le PDF
d'extraits, ses pages 1 à 12 sont, dans l'ordre, p1, p3, p4, p5, p7, p8, p22, p24, p29, p31, p32 et p40. Les captures
font 1600 x 900 px : multiplie une mesure prise dessus par 1,2 pour passer en 1920 x 1080. Les pages p24 et p40 sont
jointes comme contre-exemples (effet « verre », tarifs 2024) ; les pages p8, p22 et p31 servent pour la mise en page
seulement.

Les valeurs ci-dessous ont été mesurées dans ces fichiers, sauf celles marquées « proposition ». Quand une information
manque, ne t'arrête pas pour la demander : applique la règle de « Si quelque chose manque », continue, et signale le
point à la fin.

## Ce que tu dois produire

1. **Le design system**
   - Fondations : couleurs (tokens nommés, hex, rôle), deux dégradés, variante sombre, règles de contraste ;
     typographie (familles, graisses, échelles par format) ; logo (versions, usages, zone de protection, taille
     minimale, interdits) ; grilles et marges par format ; rayons et transparence ; pictogrammes ; style photo.
   - Composants : signature de page, capsule, carte claire, carte numérotée, chevrons d'étapes, processus en trois
     étapes, citation, chiffre clé, tableau de prix, bouton pilule, étiquette, surtitre, barre de navigation, pied de
     document.
2. **Quatorze écrans de démonstration**, avec les textes donnés dans « Écran par écran » :
   - Deck 16:9 (1920 x 1080) : couverture, slide de section, slide de contenu en capsules, slide de chiffres clés,
     slide d'offre tarifaire (tableau), slide équipe, slide de fin.
   - Instagram 1080 x 1350 : couverture de carrousel, page intérieure de carrousel, post citation.
   - Couverture de reel 1080 x 1920.
   - One-pager de proposition A4 portrait.
   - Signature e-mail.
   - Hero du site web, desktop 1440 px de large.
3. **Une planche de marque récapitulative** sur une page : logo et ses versions, palette avec hex et rôles, les deux
   dégradés, échelle typographique, composants principaux, trois écrans en vignette.

## Qui est SKISS

SKISS est une agence digitale basée à Bruxelles, fondée par Martin Elegeert, son frère jumeau Adam Elegeert et Antoine
Kahn. Le nom signifie « esquisse » en suédois : le client arrive avec une idée, SKISS en fait une réalisation (c'est
le récit des posts Canva). La baseline est « Dream it, design it, do it ». Premiers textes en 2021, logo et plan
d'action fin 2023.

En 2026, SKISS vend trois choses. D'abord la **publicité payante Meta et Google**, sur une grille fixe (audit,
cadrage, set-up, pilotage mensuel) ; le budget média est toujours distinct des honoraires, payé directement par le
client, sans commission. Ensuite du **contenu produit en interne** : photo, vidéo, aftermovies, reels, gestion
mensuelle des réseaux sociaux. Enfin l'**intégration de l'IA dans les process des équipes**, une offre en cours de
validation : n'affiche aucun prix.

L'équipe compte trois fondateurs. Martin Elegeert s'occupe du media buying, de l'IA et du contenu ; il est media buyer
depuis dix ans. Adam Elegeert couvre le graphisme, la photo, la vidéo, le motion design et l'IA ; il conçoit l'identité
visuelle de SKISS. Antoine Kahn est cofondateur, avec un rôle à confirmer : n'en invente pas.

Clients réels, les seuls à citer comme preuves :
- Wilmeyer (2024) : couverture d'un tournoi de padel, 97 photos, aftermovie, reel.
- Febelfin Academy : aftermovie de The Fin Competition.
- Greenpower Challenge, via Meraki Works (mai 2026) : captation et trois reels au circuit de Zolder.
- Nina Coaching (depuis mars 2026) : gestion complète du contenu Instagram, TikTok et Facebook.
- The K Art Signatures (2026) : pilotage de la publicité payante et de l'acquisition, avec Concrette Studio et LocalWeb.
- Revival Business (2024) : plan de communication multicanal (c'est le deck joint).
- Portfolio 2024 : Guidelance, WIP, Vregas, La Cité des Nuages, Men at Work.

Ne présente jamais comme client ou comme preuve : LIFT Brussels et Foodtruck Solidaire (propositions sans signature
connue), D'Ieteren (sponsor de l'événement de Zolder, pas client), un logo « FA » (non identifié). Il n'existe aucun
témoignage client vérifié : n'en affiche pas.

Publics : indépendants, entrepreneurs et PME en Belgique ; annonceurs Meta et Google avec au moins 500 € de budget
média par mois ; organisateurs d'événements ; ASBL ; coachs et indépendants du bien-être ; commerces locaux ; studios
créatifs qui cherchent un partenaire en publicité payante. Français par défaut.

## Logo

Une ampoule dessinée : le haut du verre est une spirale en tourbillon faite de pales en croissant, dont la grande pale
du haut se prolonge en filet fin pour tracer le contour de l'ampoule ; dessous, un culot de six barres arrondies. Sous
l'ampoule, le wordmark SKISS en capitales grasses serrées, puis la baseline « DREAM IT , DESIGN IT , DO IT » en petites
capitales très espacées. Le logo est monochrome : noir ou blanc, rien d'autre.

Versions et usages :

| Usage | Version |
|---|---|
| Couverture, post de marque, reel, planche | Logo complet vertical |
| En-tête de document, one-pager (325 px de large au moins) | Logo complet horizontal |
| Signature de page (slides, posts), signature e-mail, en-tête trop petit pour le logo complet | Spirale + wordmark côte à côte, à composer avec les deux PNG : spirale de 55 px de haut, wordmark de 45 px, écart de 8 px sur 1920 x 1080 (mesures du deck) |
| Barre de navigation du site | Spirale + wordmark (spirale 36 px de haut, wordmark 20 px, écart 12 px, mesurés sur le site) |
| Pictogramme, filigrane (155 px de haut au moins) | Ampoule seule (SVG) |
| Favicon, avatar, motif graphique (350 px au plus) | Spirale seule |

Règles :
- Fond clair : logo noir. Dégradé deck, aplat orange, photo voilée ou fond sombre : logo blanc. Dégradé social : noir
  dans la moitié claire, blanc dans le coin sombre en haut à gauche.
- Ne retape jamais le wordmark dans une police : utilise le fichier. Sa police n'est pas identifiée (une grotesque
  grasse proche d'Inter ou d'Helvetica Bold, sans correspondance exacte) ; ce n'est ni Khand ni Montserrat.
- Ne corrige pas la baseline dessinée dans le logo (espace avant chaque virgule). Dans un texte, écris
  « Dream it, design it, do it » ; seule exception, le surtitre français du hero du site (écran 14).
- Pas de recoloration, de déformation, de rotation, de contour, d'ombre ni d'effet. Pas de logo sur une zone de photo
  chargée sans voile. Sur une photo, voile `#12100C` sous le logo ou le texte blanc : au moins 45 % sous un logo ou un
  grand titre, au moins 58 % sous du texte courant (calcul fait sur un blanc pur, le pire cas), en aplat ou en dégradé
  localisé.
- Zone de protection : aucune source ne la fixe. Propose une règle simple, montre-la sur la planche et signale-la comme
  proposition.
- Taille minimale : le filet qui dessine le contour de l'ampoule fait environ 0,65 % de sa hauteur (13 px sur
  2000 px) ; il passe sous 1 px quand l'ampoule mesure moins d'environ 155 px de haut. Minimums à l'écran, arrondis
  au-dessus : ampoule seule 155 px de haut, logo complet vertical 230 px de large, logo complet horizontal 325 px de
  large. En dessous (en-tête A4 à l'écran, signature e-mail, favicon), utilise la spirale + wordmark ou la spirale
  seule. Le wordmark ne descend pas sous 16 px de haut, le plus petit usage existant (pied de page du site ; 20 px
  dans la barre de navigation).
- Pas de spirale vectorielle : la spirale PNG ne dépasse pas 350 px. Pour un grand format, utilise une autre version
  du logo et signale le besoin d'une spirale vectorisée. L'ampoule ne la remplace pas : c'est un autre dessin
  (contour en filet, culot, spirale moins complète).

## Couleurs

### Orange SKISS (la marque)

| Token | Hex | Rôle |
|---|---|---|
| `orange-burnt` | `#B45311` | Le plus foncé, et l'aplat orange dominant du deck (p5, p12, p13, p18, p19, p32) : aplats forts, premier disque des cartes numérotées, grand aplat derrière une photo, fond pour du texte blanc, petit texte orange sur fond blanc. |
| `orange-deep` | `#D56C25` | Deuxième nuance : disques, épingles, chevrons. |
| `orange` | `#ED7D31` | Accent (proposition) : bouton, anneau de focus, accent sur fond sombre. Dans le deck, il ne colore qu'un pétale de diagramme (p8 à 10) et un décor (p34) ; c'est l'orange « Accent 2 » par défaut d'Office. |
| `orange-light` | `#F18E4B` | Troisième nuance. |
| `peach` | `#F3AA77` | Quatrième nuance, la plus claire : cartes, boîtes, dernier chevron. |
| `sand` | `#F4B081` | Bord clair du dégradé deck, arrêt de dégradé seulement (trop proche de `peach` pour un autre rôle). |
| `cream` | `#F6D9C7` | Panneaux et cartes claires, fond clair des posts (pétale clair p8 à 10, cartes p31). |
| `white` | `#FFFFFF` | Fond clair, texte sur aplat foncé. |
| `ink` | `#12100C` | Texte foncé (proposition : c'est le fond du site, jamais une couleur de texte dans les sources ; les gabarits Canva écrivent en `#171717`). |
| `black` | `#000000` | Logo noir uniquement. |

Les quatre nuances `#B45311`, `#D56C25`, `#F18E4B`, `#F3AA77` vont toujours dans cet ordre, du foncé au clair, quand
on numérote ou qu'on enchaîne des étapes. Les chevrons du deck ajoutent deux pas intermédiaires : `#BD5713` et
`#EC8B48`. Trois crèmes coexistent, chacun dans son contexte : `cream` `#F6D9C7` (slides et posts clairs), `#EDE8DE`
(crème du site, variante sombre) et `#E7DDD7` (fin du dégradé social).

### Les deux dégradés

- **Dégradé deck (signature)** : `linear-gradient(90deg, #F4B081 0%, #ED7F36 52%, #B0500F 100%)`. Horizontal, du
  clair à gauche au brûlé à droite, sans aucune variation verticale ; identique sur les 41 pages du deck 2024.
  Contrôle : à 25 % et 75 % de la largeur, le deck mesure `#F0985D` et `#CF6823`, ce que donne cette formule à un
  niveau près. `#B0500F` ne sert qu'à cet arrêt (trop proche de `#B45311` pour un autre rôle).
- **Dégradé social (posts Instagram)** : `linear-gradient(135deg, #020101 0%, #F49A66 50%, #E7DDD7 100%)`,
  reconstruction CSS du dégradé Canva. Du presque noir en haut à gauche vers l'orange au centre puis le crème en bas à
  droite ; mesuré sur `canva-wilmeyer-09.png`, où la couleur est constante le long de chaque parallèle à
  l'antidiagonale (d'où 135°) et suit la formule à un niveau près ; valeurs proches sur
  `skiss-visuel-instagram-2026.png`. Les posts y posent de grandes formes organiques en S plus claires que le fond
  (`#F7C3A5`, `#F5D2BD`, `#F3DED1`, relevées sur `skiss-visuel-instagram-2026.png`) : reproduis-les comme des aplats
  translucides, sans contour.
- Usage : le dégradé deck pour les slides et les bandeaux de documents, le dégradé social pour Instagram et les reels.

### Variante sombre chaude (site et écrans sombres)

Fond `#12100C`, carte `#1C1A17`, surface secondaire `#272520`, bordure `#322F2A`, texte `#EFECE7`, texte secondaire
`#989081`, crème `#EDE8DE`. Toute la gamme est sur une teinte brun-jaune chaude, pas un noir pur. L'accent y est
l'orange `#ED7D31` (proposition, voir plus haut) et le dégradé deck. Le violet du site (`#6434A8`) et tous les
dégradés du site (violet, corail, sarcelle, et le dégradé rouge-jaune `#DA3E58` à `#EEB14F`) ne font pas partie de
ce système : le choix retenu est l'orange du deck 2024. N'en reprends aucun. Exclus aussi : le rouge
`#D42A2A` des gabarits Canva, le jaune `#FFC000` du deck, les couleurs du client Revival Business (`#D1C534`,
`#935950`).

### Contraste (mesuré)

Seuils WCAG : 4,5:1 pour le texte courant ; 3:1 pour le grand texte (24 px et plus, ou 18,66 px en gras), les
pictogrammes et les indicateurs de focus.

- **Dégradé deck** : le blanc y fait 1,85:1 à gauche, 2,69:1 au centre, 5,25:1 au bord droit. Le texte y est donc en
  `#12100C` (au moins 4,5:1 de x = 0 à x = 1626 px sur 1920 ; 10,29:1 au bord gauche, environ 7:1 au centre). Le
  blanc n'y est admis qu'en grand texte au-delà de x = 1142 px, et en texte courant au-delà de x = 1715 px. Pour
  garder un titre blanc centré (intercalaire, couverture, fin), pose un voile `#12100C` sur le dégradé : 25 % donnent
  3:1 au bord le plus clair, 41 % donnent 4,5:1. Blanc sur `#ED7D31` : 2,77:1, interdit à toute taille.
- **Dégradé social** (formule ci-dessus sur 1080 x 1350, position sur l'axe t = (x + y) / 2430) : texte en `#12100C`
  partout où x + y atteint 853 px ; blanc seulement dans le coin haut gauche, où x + y ne dépasse pas 821 px (1030 px
  pour un grand titre). Au centre, le blanc tombe à 2,17:1, et les formes en S claires l'abaissent encore. Signature
  en noir dans le coin bas droit (15,72:1, contre 1,34:1 pour le blanc), ou en blanc dans le coin haut gauche.
- **Nuances d'orange** : blanc sur `#B45311` 5,02:1, sur `#BD5713` 4,63:1, sur `#D56C25` 3,50:1 (grand texte
  seulement) ; sur `#EC8B48`, `#F18E4B` et `#F3AA77`, de 2,51 à 1,94:1 (jamais). `#12100C` sur ces nuances : de 3,79:1
  (`#B45311`, grand texte seulement) à 9,80:1 (`#F3AA77`).
- **Capsules et cartes claires** : texte `#12100C` (10,8 à 14,2:1).
- **Texte orange sur fond clair** : `#B45311` (5,02:1) ou `#BD5713` (4,63:1) sur blanc, à toute taille ; `#D56C25`
  (3,50:1) en grand texte seulement ; jamais `#ED7D31`, `#F18E4B` ni `#F3AA77`. Sur `#F6D9C7`, `#B45311` tombe à
  3,74:1 : écris alors en `#12100C`.
- **Sur fond sombre `#12100C`** : `#ED7D31` 6,86:1, `#F3AA77` 9,80:1, `#989081` 6,01:1, `#EFECE7` 16,13:1. Jamais
  `#B45311` (3,79:1) ni `#B0500F` (3,62:1) en texte courant.

## Typographie

Deux familles Google Fonts, celles du deck 2024 : **Khand** pour les titres, **Hind** pour le texte. Deux graisses
seulement : Regular 400 et Bold 700. Aucune des deux n'a d'italique : la signature typographique du site (un mot
accent en italique et en dégradé, « qui *convertissent* ») devient un mot en Khand Bold rempli du dégradé deck, sans
italique.

Retirées : Calibri, Arial et Montserrat Light (polices parasites du deck), Baumans (utilisée une seule fois pour des
chiffres, remplacée par Khand). Le site actuel est en Montserrat : ne l'utilise pas dans ce système. Les polices vues
dans les posts Canva (Anton, Agrandir, Poppins, Open Sans, Inter, Computer says no) n'en font pas partie non plus.

Casse : intercalaires et libellés en capitales, accents compris (Khand les affiche bien) ; titres de page et texte en
casse de phrase.

Interlignage mesuré dans le deck : environ 1,2, pour Khand comme pour Hind.

Échelle 16:9 (1920 x 1080), tirée des tailles du deck (en points, multipliées par 2) :

| Rôle | Police | Taille |
|---|---|---|
| Intercalaire de section (capitales) | Khand Regular | 230 px |
| Phrase d'intercalaire, slide de fin | Khand Regular | 132 px |
| Chiffre clé | Khand Regular | 144 px |
| Chiffre de carte numérotée | Khand Regular | 132 px |
| Citation | Khand Regular | 108 px |
| Titre de page (un seul style) | Khand Bold | 88 px |
| Montant | Khand Bold | 72 px |
| Libellé de carte numérotée (capitales) | Khand Regular | 56 px |
| Titre de carte | Khand Bold | 40 px |
| Texte de capsule | Hind Bold | 56 px |
| Grand texte | Hind Regular | 48 px |
| Texte courant | Hind Regular | 36 px |
| Texte minimum (légende, source) | Hind Regular | 28 px |
| Emphase dans le texte | Hind Bold | taille du texte |

Instagram 1080 x 1350 et reel 1080 x 1920 : aucune taille de police exacte, mais des hauteurs mesurées sur les posts
existants (hauteur des capitales, pas corps de police) : 111 à 116 px pour « DREAM IT / DESIGN IT / DO IT »
(`canva-wilmeyer-09.png`), 84 et 67 px pour les lignes de titre de la page 16 de la planche Wilmeyer, 13 à 25 px pour
les petits textes des gabarits (page 6). Marges mesurées : 108 px à gauche et 110 px en bas (filet en L de
`canva-wilmeyer-01.png`). Autre repère, dérivé du site mobile (390 px) mis à l'échelle de 1080 px (facteur 2,77) :
titre 133 px, sous-titre 100 px, texte 50 px, surtitre 39 px. Propose l'échelle à partir de ces repères (proposition),
lisible sur un téléphone sans zoom, et écris les tailles sur la planche. Placement du logo sur
`skiss-visuel-instagram-2026.png` : centré, wordmark à 72,7 % de la largeur, bloc de y = 311 à y = 1030. Ce visuel
n'a pas les proportions du fichier joint (ampoule plus petite et plus proche du wordmark) : utilise
`skiss-logo-complet-vertical` tel quel, sans recomposer.

A4 : le PDF des formules media buying de Martin (A4, 2026, même texte que l'écran 12) mesure titre 30 pt, introduction
14 pt, texte 10,8 pt, marges de 43 pt (15 mm). Pars de ces valeurs.

Web : garde la hiérarchie mesurée sur le site, appliquée à Khand et Hind. H1 96 px (48 px en mobile), interlignage
0,95 (mesuré sur Montserrat, à vérifier avec Khand) ; H2 60 px (36 px en mobile) ; H3 24 px ; introduction 18 à
20 px, texte courant 16 px, petits textes 14 px ; surtitres en capitales de 12 à 16 px, interlettrage 0,3 em.

## Composants et mises en page

Le deck 2024 donne le vocabulaire de la marque. Garde les principes, corrige les défauts.

Grille 16:9 : marges latérales de 100 px (5,2 % de la largeur) ; haut des blocs à 104 px (9,6 % de la hauteur) sur
une slide sans titre, à 228 px sur une slide avec titre (haut des cartes de la page 15 du deck, la plus serrée) ; titre
de page centré en haut (haut du texte entre 34 et 86 px).

- **Signature de page** : spirale + wordmark en bas à droite sur toutes les slides, sauf celles qui portent déjà le
  logo complet (couverture, fin) ; blancs sur le dégradé deck (5,25:1 au bord droit), noirs sur fond clair. 225 px de
  large (11,7 % de la largeur), marge droite de 48 px (2,5 %). Le deck la collait à 12 px du bord bas : mets la même
  marge en bas qu'à droite, 48 px.
- **Couverture de marque** (p1) : dégradé deck, grand cercle blanc de 1240 px de diamètre, à 51 % d'opacité, centré
  en (-218 ; 130), donc aux trois quarts hors cadre en haut à gauche ; logo complet vertical blanc centré, légèrement
  au-dessus du milieu, de 548 px de haut (la hauteur du bloc spirale, wordmark et baseline de 2024), soit 491 px de
  large et un wordmark d'environ 455 px. En 2024, le wordmark faisait 35,2 % de la largeur, mais sans ampoule : à
  cette largeur, le logo vertical mesurerait environ 815 px de haut, 75 % de la page.
- **Intercalaire de section** (p4) : dégradé, un mot en Khand Regular 230 px centré, en `#12100C`, ou en blanc sur un
  voile `#12100C` d'au moins 25 % (voir « Contraste ») ; signature.
- **Capsules** (p7) : bandes pleine largeur (1720 x 169 px), rayon en pilule, texte centré. Une seule transparence pour
  les capsules et les cartes : blanc à 62 %. Texte `#12100C` dans la capsule (le deck écrivait en blanc, illisible :
  1,34 à 1,76:1). Sur fond clair, où ce blanc disparaît, les cartes sont en `#F6D9C7` opaque, ou blanches avec une
  bordure de 1 px.
- **Cartes numérotées** (p5) : quatre pilules verticales (17,4 % de la largeur chacune, gouttière de 6,9 %), disque
  plein en haut dans les quatre nuances du foncé au clair, chiffre Khand en `#12100C` (3,79:1 au minimum, suffisant
  pour un chiffre de 132 px ; le blanc ne passe que sur les deux premières nuances), libellé en capitales,
  pictogramme au trait en `#12100C` en bas.
- **Citation** (p3) : grande carte claire (1722 x 870 px), spirale à gauche, guillemets, citation Khand 108 px,
  auteur Hind Bold 36 px.
- **Processus en trois étapes** (p29) : trois cartes claires reliées par des flèches pleines en `#12100C` (le blanc
  tombe à 2,69:1 au centre du dégradé).
- **Chevrons d'étapes** (p32) : cinq chevrons qui se chevauchent, du foncé au clair (`#B45311`, `#BD5713`,
  `#D56C25`, `#EC8B48`, `#F3AA77`), contour blanc de 2 px, texte en Hind Bold de 36 px au moins : blanc sur les
  trois premiers, `#12100C` sur les deux derniers (voir « Contraste »).
- **Rayons** : deux pour les slides, posts et documents. Pilule (moitié du petit côté) pour capsules, boutons,
  étiquettes et cartes numérotées ; 46 px pour les cartes sur 1920 x 1080 (le rayon des tuiles du deck). Sur le web,
  ceux du site : cartes 16 px, champs 12 px, boutons en pilule. Ombre très douce ou aucune.
- **Web** (d'après le site) : cartes `#1C1A17` avec bordure 1 px `#322F2A`, boutons en pilule, surtitres en capitales
  espacées, halos flous en fond de section (opacité 5 à 20 %, flou 100 à 150 px) en nuances d'orange au lieu du trio
  violet, corail, sarcelle ; apparition en fondu avec montée de 20 à 40 px en 0,6 à 0,8 s.
- **Boutons** : bouton plein en `#ED7D31` avec texte `#12100C` (6,86:1), ou en `#B45311` avec texte blanc (5,02:1).
  Jamais le dégradé deck complet sous un texte : pour un bouton en dégradé, prends son premier segment (`#F4B081` vers
  `#ED7F36`) avec texte `#12100C` (6,96:1 au minimum).
- **États web**, ceux du site avec l'orange à la place du violet : bouton plein à 90 % d'opacité au survol ; bouton en
  contour rempli de `#272520` au survol ; liens de navigation `#989081` qui passent à `#EFECE7` ; bordure de carte qui
  passe à l'orange à 30 % au survol ; bordure de champ orange au focus ; bouton désactivé à 60 % d'opacité. Ajoute un
  anneau de focus visible de 2 px en `#ED7D31` (6,86:1 sur `#12100C`), que le site supprime.

À corriger ou à ne pas reproduire :
- Les fautes et défauts des captures (« CONVERTION », « EVENTMENT », « VISIBILITE » sans accent, « bugétaire »,
  « Tarifs Horaire », « 2880€* », « Notre Objectif = », les tirets demi-cadratins des en-têtes p7 et p8) : ne recopie
  aucun texte des slides jointes, elles servent pour la mise en page.
- Deux styles de titre de page et deux tailles d'intercalaire sans règle : un seul style par rôle, selon l'échelle.
- Les polices parasites Calibri, Arial, Montserrat Light.
- Des rayons de 6 à 36 pt et des transparences de 22 à 67 % : deux rayons, une transparence.
- Les effets datés : cartes « verre » teinté (p24, p40, jointes comme contre-exemples), objets 3D et stickers,
  captures d'écran illisibles en guise de contenu.
- Les logos tiers dans leurs couleurs (Facebook bleu, Mailchimp jaune) : toujours monochromes, blancs ou noirs.
- Les pictogrammes mélangés (trait fin blanc et plein orange-brun) : un seul style, au trait fin.
- Tout ce qui appartient au client Revival Business (logo, couleurs, textes).

## Imagerie

- **Photo** : reportage sur le vif, jamais posé (tournoi de padel Wilmeyer : joueurs en action, public). Téléobjectif,
  sujet net sur arrière-plan très flou, lumière naturelle, couleurs chaudes et saturées, retouche légère sans filtre.
  Cadrage vertical fréquent. Coulisses en noir et blanc acceptées.
- **Vidéo** : aftermovies, reels, prises de vue de drone de jour et de nuit.
- **Photo sur la marque** : photo plein cadre avec logo blanc et filet fin en L (`canva-wilmeyer-01.png`) ; photo
  détourée posée sur le dégradé (l'équipe, `canva-wilmeyer-20.png`), deux posts aussi visibles dans la planche de
  25 pages ; grand aplat courbe `#B45311` derrière une photo détourée (deck 2024, p12, non jointe).
- **Pas de photo brute jointe**, seulement des posts Canva qui en contiennent : ces photos servent de référence de
  traitement, ne les recadre pas pour les réutiliser. Utilise des cadres neutres légendés (« Photo : tournoi de padel
  Wilmeyer »). Jamais de banque d'images, jamais de visage généré, ni les photos de mannequins des gabarits Canva,
  ni les ampoules illustrées des pages 16 à 19 de la planche Wilmeyer (illustrations Canva sous filigrane).
- **Pictogrammes** : Lucide (le jeu du site), à l'épaisseur de trait par défaut, mise à l'échelle avec l'icône.
  Blancs seulement sur `#B45311`, `#BD5713`, `#D56C25` ou fond sombre ; `#12100C` partout ailleurs (dégradé deck,
  capsules, cartes claires).
- **Formes graphiques** : S translucides (posts Instagram), cercle hors cadre (couverture 2024), halos flous orange
  sur fond sombre.

## Ton et écriture

Principes de voix :
- Donner des chiffres plutôt que des adjectifs : trois chiffres incontestables, pas quinze.
- Dire l'argent clairement : honoraires et budget média séparés, montants HTVA.
- Dire ce qui ne marchera pas tout de suite, plutôt que promettre.
- Présenter une méthode en étapes, dans l'ordre.
- Écrire court, direct, parlé : phrases courtes, « on », questions simples (« On en parle ? »).
- Montrer qui produit et comment, plutôt que se dire passionné.
- Parler pour le client, dans ses mots : son nom plus gros que SKISS en couverture.
- Traduire chaque terme technique en une phrase utile.

Phrases réelles, pour donner le ton :
- « Rien ne se lance sans tracking. »
- « Le prix ne change pas par remise : il change parce que le périmètre change. »
- « L'IA comme méthode, pas comme gadget. »
- « Une vidéo tournée une fois sert partout : Reel Instagram, Reel Facebook et TikTok. »
- « Photo, vidéo, montage : les contenus sont produits en interne, jamais sous-traités. »

## Règles non négociables

- Aucun tiret cadratin ni demi-cadratin dans un texte visible : deux-points, virgule ou parenthèses. Les fourchettes
  s'écrivent avec « à » (« 90 à 180 € »).
- Orthographe et ponctuation françaises impeccables : espace fine insécable avant « ; ? ! » et à l'intérieur des
  guillemets « » ; espace insécable avant « : », « % » et « € », et entre les tranches d'un nombre (« 1 400 € ») ;
  aucun retour à la ligne dans un numéro de téléphone ; accents sur les capitales ; pas de majuscule à l'anglaise :
  majuscule en début de phrase et aux noms propres seulement (« Nos services », pas « Nos Services »).
- Aucun emoji. « SKISS » toujours en capitales.
- Pas de troisième personne quand un fondateur se présente (jamais « Martin pilote… ») : registre nominal ou « on ».
- Aucun texte inventé présenté comme réel : ni client, ni chiffre, ni témoignage, ni citation. Utilise les textes
  de la section « Écran par écran » ou des intitulés neutres entre crochets ([Nom du client], [Titre de la slide]).
- Montants HTVA, espace insécable avant le symbole et entre les milliers (« 1 400 € »), budget média toujours présenté
  comme distinct des honoraires.
- Pas de photo de banque d'images, pas de personne générée.
- Pas de violet ni d'autre teinte hors palette.
- Le logo s'utilise tel quel depuis les fichiers joints : ne le redessine pas.
- Garde chaque texte éditable : aucun texte transformé en image (seuls le logo et sa baseline sont des images).

## Écran par écran

**1. Couverture de deck (1920 x 1080).** Dégradé deck, cercle blanc translucide en haut à gauche, logo complet vertical
blanc dont le wordmark reste moins large que le nom du client. Titre : « [Nom du client] ». Sous-titre :
« Proposition · [mois année] ». Titre et sous-titre en `#12100C`, ou en blanc sur voile (voir « Contraste »).
Bas de page, en `#12100C` ou dans une capsule blanche à 62 % :
« Martin Elegeert · elegeertmartin.skiss@gmail.com · +32 499 05 66 43 ».

**2. Slide de section.** « STRATÉGIE », Khand Regular 230 px, centré, couleur selon la règle de l'intercalaire.
Signature.

**3. Slide de contenu en capsules.** Titre : « Un compte publicitaire se pilote dans cet ordre ». Trois capsules :
« On regarde ce qui existe », « On construit ce qui manque », « On pilote dans la durée ».

**4. Slide de chiffres clés.** Titre : « [Titre de la slide] ». Trois chiffres, en `#12100C` sur le dégradé (ou
blancs sur voile) :
- « 10 ans » : « à piloter des budgets média »
- « 500 € » : « En dessous de 500 € par mois, aucune campagne ne sort de la phase d'apprentissage. »
- « 3 mois » : « minimum sur la gestion : le temps nécessaire pour lire un résultat »

**5. Slide d'offre tarifaire.** Fond clair pour la lisibilité, cartes en `#F6D9C7` opaque, signature noire.
Titre : « Grille tarifaire ». Chapeau : « Montants hors TVA. » Tableau (prestation, durée, prix) :

| Prestation | Durée | Prix |
|---|---|---|
| Audit express | 0,5 jour | 300 € |
| Audit complet | 1 jour | 600 € |
| Cadrage & roadmap | 0,75 jour | 450 € |
| Set-up essentiel | 1,5 jour · 1 canal | 850 € |
| Set-up complet | 2,5 jours · 2 canaux | 1 400 € |
| Gestion essentielle | 0,75 jour / mois | 450 € / mois |
| Gestion standard | 1,5 jour / mois | 850 € / mois |

Note : « Le budget média est payé directement par l'annonceur, sur son propre moyen de paiement. Il n'est jamais
avancé ni refacturé. »

**6. Slide équipe.** Titre : « Les fondateurs ». Trois cartes avec cadre photo rond neutre :
- « Martin Elegeert » · « Media buying, IA et contenu »
- « Adam Elegeert » · « Expert média, graphiste, vidéaste, motion designer et IA »
- « Antoine Kahn » · « [Rôle à confirmer] »

**7. Slide de fin.** « On en parle ? », Khand Regular 132 px, couleur selon la règle de l'intercalaire. Logo complet
vertical blanc, sans signature de page. Ligne de contact, en `#12100C` ou dans une capsule blanche à 62 % :
« Martin Elegeert · elegeertmartin.skiss@gmail.com · +32 499 05 66 43 ».

**8. Instagram, couverture de carrousel (1080 x 1350).** Dégradé social et formes en S. Titre :
« Rien ne se lance sans tracking. » Il se place en `#12100C` dans la moitié claire, ou en blanc dans le coin sombre
(voir « Contraste »). Signature spirale + wordmark noire en bas à droite.

**9. Instagram, page intérieure (1080 x 1350).** Fond clair (blanc ou `cream` `#F6D9C7`), grand numéro « 02 » en
haut à droite. Texte : « Pas de campagne tant que le pixel, GA4 et le consentement ne sont pas validés. »
Signature noire.

**10. Instagram, citation (1080 x 1350).** « L'IA comme méthode, pas comme gadget. » Auteur : « Martin Elegeert ·
SKISS ».

**11. Couverture de reel (1080 x 1920).** Cadre photo neutre plein écran légendé « Photo : tournoi de padel
Wilmeyer », voile `#12100C` selon la règle du logo sur photo, logo blanc. Titre : « Aftermovie ». Sous-titre :
« Wilmeyer · tournoi de padel 2024 ». Tiens compte de l'interface Instagram : textes dans la zone centrale.

**12. One-pager de proposition (A4 portrait).** En-tête : logo horizontal noir (325 px de large au moins à
l'écran ; en dessous, spirale + wordmark). Surtitre : « Publicité payante · Meta & Google ».
Titre : « Trois blocs, trois prix, zéro surprise. » Introduction : « Un compte publicitaire se pilote dans
cet ordre : on regarde ce qui existe, on construit ce qui manque, puis on pilote dans la durée. Chaque bloc se vend
seul. Aucun n'oblige à prendre le suivant. » Trois blocs :
- « Bloc A · Audit » : « Ce qui tourne, ce qui brûle du budget, ce qu'on répare en premier. » Prix : « Dès 300 € ».
- « Bloc B · Set-up » : « Tracking, structure de compte, audiences, première campagne en ligne. » Prix : « Dès 850 € ».
- « Bloc C · Gestion » : « Pilotage mensuel, itérations créatives, arbitrage budgétaire, reporting. » Prix :
  « Dès 450 € / mois ».

Bas de page : « Tarifs HTVA, valables en 2026. Le budget média est payé directement par l'annonceur. » puis la ligne de
contact de l'écran 7.

**13. Signature e-mail.** Spirale + wordmark noirs. « Martin Elegeert » ; « Media buying, IA et contenu · SKISS » ;
« elegeertmartin.skiss@gmail.com · +32 499 05 66 43 ». Simple, compatible avec les logiciels de messagerie (logo en
image, texte en vrai texte). Propose la largeur. Le logo noir disparaît sur une messagerie en mode sombre (1,11:1 sur
`#12100C`) : intègre-le sur fond blanc dans l'image, ou prévois une version blanche.

**14. Hero du site (desktop 1440 px).** Variante sombre chaude, halos orange flous. Navigation : spirale + wordmark
blancs, liens « Services », « Nous », « Portfolio », « Contact », bouton pilule « Commencer » (voir « Boutons »),
« FR | EN ». Surtitre en capitales espacées : « Rêvez-le, dessinez-le, réalisez-le ». Titre : « On crée des
histoires qui convertissent », le mot « convertissent » rempli du dégradé deck. Texte : « Photo, vidéo, montage :
les contenus sont produits en interne, jamais sous-traités. » Boutons : « Lancer votre projet » (pilule pleine sur
le premier segment du dégradé deck, texte `#12100C`) et « Voir nos réalisations » (pilule en contour).

## Si quelque chose manque

Ne t'interromps pas pour demander : applique la règle ci-dessous, continue, et liste le point à la fin.
- Des photos réelles (équipe, événement) : cadres neutres légendés ; dis-moi lesquelles fournir.
- Le rôle d'Antoine Kahn : garde « [Rôle à confirmer] ».
- Un texte que je n'ai pas donné : intitulé neutre entre crochets.
- Une version du logo absente des fichiers (par exemple un wordmark vectoriel) : utilise le PNG et signale-le.
- Un logo client : n'en mets aucun.
- Une valeur de couleur ou de taille qui te semble contredire une capture : signale-la, ne la corrige pas en silence.

## Ce que j'attends en retour

Le design system, les quatorze écrans et la planche de marque. Puis une courte liste : ce que tu as proposé faute de
source (zone de protection, échelles Instagram, reel et A4, zone sûre du reel, marges Instagram et A4, largeur de la
signature e-mail, rayons hors 16:9, rôle de l'orange `#ED7D31`, couleur de texte `#12100C`), les écrans où un texte
était trop long pour la mise en page voulue, et les écarts que tu as faits par rapport au deck 2024, avec la raison.

---

## Points ouverts pour Martin

Hors prompt. À trancher avant d'envoyer, ou à laisser sur les choix par défaut (sauf le point 4).

1. **Orange retenu.** Martin a désigné les présentations orange comme référence. Le site (accent violet `#6434A8`
   depuis février 2026) et la proposition Foodtruck (octobre 2026) restent en violet : il faudra les repasser en
   orange une fois le design system validé.
2. **Orange d'accent.** `#ED7D31` (token `orange`) est l'orange par défaut d'Office ; dans le deck, il ne colore qu'un
   pétale de diagramme (p8 à 10) et un décor (p34), et l'aplat orange dominant est `#B45311`. Le prompt en fait
   l'accent (bouton, focus, fond sombre) à titre de proposition. Autre option : `#ED7F36`, milieu mesuré du dégradé
   deck ; dans ce cas, remplace la valeur dans « Couleurs », « Contraste » et « Boutons ».
3. **Blanc sur le dégradé deck.** Le deck 2024 écrit en blanc partout, ce qui échoue au contraste sur les deux tiers
   gauches du dégradé. Par défaut, le prompt met le texte en `#12100C` et n'admet un titre blanc centré que sur un
   voile sombre. Autre option : titres blancs seulement sur un aplat `#B45311` (5,02:1).
4. **Typo du site.** Le prompt part sur Khand + Hind partout (la charte orange d'origine). Le site est en Montserrat
   depuis le 4 juillet 2026, choix d'Adam. À trancher avec lui avant d'envoyer, sans garder le défaut par habitude :
   soit Khand et Hind partout, soit Montserrat pour le web (modifie alors « Typographie »), soit demande à Claude
   Design deux versions du hero.
5. **Rôle d'Antoine Kahn.** « Rôle à définir » sur le site, rien d'écrit ailleurs. La slide équipe reste avec un
   intitulé neutre tant que ce n'est pas fixé.
6. **Promesse principale.** Le hero du site dit « On crée des histoires qui convertissent » (contenu, stratégie
   commerciale, identité de marque), alors que l'offre 2026 est paid media, contenu et IA. Le prompt garde ce titre
   pour la démonstration. La phrase de description du hero est aussi à réécrire : le prompt remplace celle du site
   (« Nous mêlons vision créative… », formule creuse et en « nous ») par une phrase de la fiche de Martin.
7. **Baseline en français.** Le logo et les textes gardent « Dream it, design it, do it » ; le hero du site affiche la
   version française. Une seule langue ou les deux ? Si la française reste, elle s'écrit « Rêvez-le, dessinez-le,
   réalisez-le » (le site met des majuscules fautives après les virgules).
8. **Dix ans d'expérience.** « 10 ans » est affiché (formules media buying, site, `identite-martin.md`), alors que les
   textes fondateurs de septembre 2023 et de janvier 2024 parlent de 4 ans d'expérience en digital. À confirmer avant
   de le mettre en avant (écran 4).
9. **Composition du logo vertical.** Le visuel Instagram (page 15 du Canva Wilmeyer) et le PNG officiel du Drive
   (« SKISS 1080x1080 ») n'ont pas les mêmes proportions : sur le visuel, l'ampoule est plus petite et plus proche du
   wordmark. Le prompt impose le PNG ; fais confirmer par Adam laquelle des deux compositions est officielle.
10. **Photos réelles et fichiers à demander à Adam.** Aucune photo brute n'est jointe : les écrans auront des cadres
    neutres. Pour des écrans plus parlants, ajoute trois à cinq photos (photo d'équipe, Wilmeyer, Zolder) ; modifie
    alors « Pas de photo brute jointe » dans « Imagerie » et l'écran 11. À prévoir aussi avec Adam : vectoriser le
    wordmark, qui n'existe qu'en image, et la spirale, qui n'existe qu'en PNG de 334 x 349 px.
