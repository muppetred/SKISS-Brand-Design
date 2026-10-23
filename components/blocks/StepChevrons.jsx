import React from "react";

// Les cinq pas des chevrons du deck (p32), du foncé au clair, pour cinq étapes. Blanc sur les trois premiers
// (5,02 à 3,50:1, grand texte), encre sur les deux derniers (le blanc y tombe sous 2,6:1).
const STEPS = [
  { bg: "var(--orange-burnt)", text: "var(--white)" },
  { bg: "var(--orange-burnt-2)", text: "var(--white)" },
  { bg: "var(--orange-deep)", text: "var(--white)" },
  { bg: "var(--orange-light-2)", text: "var(--ink)" },
  { bg: "var(--peach)", text: "var(--ink)" },
];
// Les quatre nuances officielles, toujours dans cet ordre (brief, « Couleurs »), pour quatre étapes ou moins :
// blanc sur #B45311 (5,02:1) et #D56C25 (3,50:1, admis pour du Hind Bold 36 px), encre sur #F18E4B et #F3AA77.
const FOUR = [
  { bg: "var(--orange-burnt)", text: "var(--white)" },
  { bg: "var(--orange-deep)", text: "var(--white)" },
  { bg: "var(--orange-light)", text: "var(--ink)" },
  { bg: "var(--peach)", text: "var(--ink)" },
];
// Nuances selon le nombre d'étapes : 5 = les cinq pas du deck ; 4 = les quatre nuances ; 3 = brûlé, #D56C25, pêche ; 2 = brûlé, pêche.
function palette(n) {
  if (n >= 5) return Array.from({ length: n }, (_, i) => STEPS[Math.round((i * 4) / (n - 1))]);
  if (n === 4) return FOUR;
  if (n === 3) return [FOUR[0], FOUR[1], FOUR[3]];
  if (n === 2) return [FOUR[0], FOUR[3]];
  return [FOUR[0]];
}
const DEPTH = 0.2;   // profondeur de la pointe, en part de la largeur d'un chevron
const GAP = 0.035;   // jour entre deux chevrons emboîtés

/**
 * SKISS StepChevrons : deux à cinq chevrons emboîtés, du foncé au clair, contour blanc de 2 px,
 * texte en Hind Bold 36 px. Occupe toute la largeur du parent.
 */
export function StepChevrons({ steps = [], height = 180, className = "", style = {}, ...props }) {
  const n = steps.length;
  const overlap = DEPTH - GAP;
  const w = 100 / (n - (n - 1) * overlap);
  const tip = 100 - DEPTH * 100;
  const colors = palette(n);
  return (
    <ol className={`sk-step-chevrons ${className}`.trim()}
      style={{ position: "relative", width: "100%", height, margin: 0, padding: 0, listStyle: "none", ...style }}
      {...props}>
      {steps.map((label, i) => {
        const c = colors[i];
        return (
          <li key={i} style={{ position: "absolute", top: 0, height: "100%", left: `${i * (1 - overlap) * w}%`, width: `${w}%` }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
              <polygon points={`0,0 ${tip},0 100,50 ${tip},100 0,100 ${DEPTH * 100},50`} vectorEffect="non-scaling-stroke"
                style={{ fill: c.bg, stroke: "var(--white)", strokeWidth: 2, strokeLinejoin: "miter" }} />
            </svg>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: `${DEPTH * 100 + 2}%`, right: `${DEPTH * 100 - 6}%`,
              display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: c.text,
              fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: "var(--slide-body)",
              lineHeight: "var(--leading-deck)" }}>{label}</div>
          </li>
        );
      })}
    </ol>
  );
}
