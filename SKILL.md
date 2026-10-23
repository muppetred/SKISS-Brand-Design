---
name: skiss-design
description: Applique le design system SKISS (orange du deck 2024, Khand et Hind, logo tel quel, voix courte en français) à tout écran, slide, post, document ou page de l'agence.
user-invocable: true
---

# SKISS Design

Design system de SKISS, agence digitale bruxelloise (publicité payante Meta et Google, contenu photo et vidéo produit en interne, IA). Source de vérité : le brief de marque du 13 octobre 2026 dans `uploads/`. Tout est documenté dans `readme.md`.

## Comment l'utiliser

1. Lis `readme.md` (section 3 pour les tokens, section 4 pour le logo, section 2 pour les textes). Pour une valeur précise, ouvre le token dans `tokens/` plutôt que de la deviner.
2. Lie la feuille unique `styles.css` et écris `var(--token)` ; aucun hex brut quand un token existe.
3. Pose un thème sur le conteneur : rien ou `.theme-light` pour le clair, `.theme-dark`, `.theme-gradient`, `.theme-burnt`, `.theme-social` ou `.theme-cream` (ou le composant `ThemeSection`). Les boutons, bordures, liens et le focus suivent.
4. Prends les composants du bundle : `window[Object.keys(window).find(k => /DesignSystem_/.test(k))]`, posé une seule fois dans `window.SKDS` quand une page charge plusieurs `.jsx`. Base dans `components/core`, marque dans `components/brand`, blocs de slides et de posts dans `components/blocks`.
5. Pour un logo, passe par `Logo` ou `Signature` : les fichiers viennent de `assets/logos/`, on ne les redessine pas et on ne retape jamais le wordmark.
6. Pour un format complet, pars d'un kit : `ui_kits/deck` (16:9), `ui_kits/social` (post et reel), `ui_kits/documents` (A4 et signature e-mail), `ui_kits/website`.
7. Écris en français avec les règles de `readme.md`, section 2. Sans texte source, un intitulé neutre entre crochets.
8. Une nouvelle carte commence par `<!-- @dsCard group="..." viewport="LxH" name="..." subtitle="..." -->` en première ligne, fixe `body { margin: 0 }` et son fond, et tient entièrement dans son viewport. Avant de livrer, vérifie le contraste (jamais de blanc sur #ED7D31 ni sur le dégradé deck sans voile) et l'absence de toute teinte hors palette.

## Repères rapides

- Marque : SKISS, toujours en capitales, baseline « Dream it, design it, do it ». Aucun client, chiffre ou témoignage inventé ; seuls les clients du brief sont cités, sans logo.
- Couleurs et contraste : une seule famille, l'orange (#B45311, #D56C25, #F18E4B, #F3AA77 du foncé au clair ; accent #ED7D31 ; encre #12100C ; crème #F6D9C7). Jamais de blanc sur #ED7D31 ni sur le dégradé deck sans voile encre ; texte encre sur les dégradés ; blanc sur #B45311 ou sur fond sombre ; petit texte orange sur blanc en #B45311 seulement. Pas de violet.
- Typo : Khand pour les titres, Hind pour le texte, 400 et 700, aucune italique. Échelles par format dans `typography.css` (slides, Instagram, A4, web).
- Thèmes : clair (défaut), `.theme-dark` (brun-noir chaud #12100C), `.theme-gradient` (dégradé deck, texte encre), `.theme-burnt` (#B45311, texte blanc), `.theme-social` (dégradé Instagram), `.theme-cream`.
- Logo : fichiers de `assets/logos/` tels quels, noir sur clair, blanc sur dégradé deck, brûlé, photo voilée ou sombre. Signature de page = spirale + wordmark (55/45/8 px, 225 px de large, à 48 px des bords). Minimums : vertical 230 px de large, horizontal 325 px, ampoule 155 px de haut, wordmark 16 px ; spirale 350 px au plus.
- Voix : court, direct, « on », chiffres plutôt qu'adjectifs, dire l'argent clairement (HTVA, budget média distinct), méthode en étapes. Aucun tiret cadratin, aucun emoji, espaces insécables avant : ; ? ! % € et dans les milliers, jamais un fondateur à la troisième personne.

## Fichiers

- `readme.md` : la documentation complète (contexte, écriture, fondations, iconographie, index, réserves).
- `styles.css` : entrée unique, importe `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/logos/` : les 16 fichiers du logo (vertical, horizontal, ampoule, spirale, wordmark, baseline, en noir et en blanc). `assets/references/` : deck 2024 et visuels Instagram.
- `components/core/` : `Button`, `Badge`, `Card`, `Input`, `Eyebrow`. `components/brand/` : `Logo`, `Signature`, `ThemeSection`, `AccentWord`. `components/blocks/` : `SlideFrame`, `PostFrame`, `Capsule`, `NumberedCard`, `Quote`, `KeyFigure`, `StepChevrons`, `ProcessSteps`, `PriceTable`, `SectionTitle`.
- `ui_kits/deck/`, `ui_kits/social/`, `ui_kits/documents/`, `ui_kits/website/` : les quatre kits, chacun avec son `index.html` point de départ.
- `guidelines/` : trente cartes (couleurs, typographie, espacements, marque, imagerie, écriture).
- `uploads/skiss-brand-brief-2026-10-13.md` : le brief, source de toutes les valeurs.
- `thumbnail.html` : vignette du système.
