import React from "react";

function Arrow() {
  // Flèche pleine : couleur du thème (encre sur le dégradé deck, où le blanc tombe à 2,69:1 au centre).
  return (
    <div aria-hidden="true" style={{ flex: "0 0 120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="84" height="84" viewBox="0 0 24 24" style={{ display: "block", fill: "var(--text)" }}>
        <path d="M2 9h11V4l9 8-9 8v-5H2z" />
      </svg>
    </div>
  );
}

/**
 * SKISS ProcessSteps : trois cartes claires reliées par des flèches pleines (deck p29).
 * Titre de carte en Khand Bold 40 px, texte en Hind 36 px ; rayon des cartes de slide (46 px).
 */
export function ProcessSteps({ steps = [], className = "", style = {}, ...props }) {
  return (
    <ol className={`sk-process-steps ${className}`.trim()}
      style={{ display: "flex", alignItems: "stretch", width: "100%", margin: 0, padding: 0, listStyle: "none", ...style }}
      {...props}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <Arrow /> : null}
          <li style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column", gap: 20, padding: "48px 44px",
            textAlign: "center", borderRadius: "var(--radius-card-slide)", background: "var(--sk-card-bg, var(--capsule-bg))",
            border: "1px solid var(--sk-card-border, transparent)", color: "var(--sk-card-text, var(--ink))" }}>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
              fontSize: "var(--slide-card-title)", lineHeight: "var(--leading-deck)" }}>{step.title}</h3>
            {step.text ? (
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
                lineHeight: "var(--leading-deck)" }}>{step.text}</p>
            ) : null}
          </li>
        </React.Fragment>
      ))}
    </ol>
  );
}
