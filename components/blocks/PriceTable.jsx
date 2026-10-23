import React from "react";

// Espaces insécables entre les tranches de milliers, avant € et %, et devant « / mois » (« 1 400 € »).
function nb(v) {
  if (typeof v !== "string") return v;
  return v.replace(/(\d) (?=\d{3}(?!\d))/g, "$1\u00A0").replace(/ (€|%)/g, "\u00A0$1").replace(/ \/ /g, "\u00A0/ ");
}

const COLS = "minmax(0, 1.5fr) minmax(0, 1fr) minmax(0, 0.9fr)";

/**
 * SKISS PriceTable : tableau prestation, durée, prix pour une slide sur fond clair.
 * Chaque ligne est une carte crème opaque (--sk-card-solid) ; montants en gras, alignés à droite, insécables.
 */
export function PriceTable({ rows = [], headers = ["Prestation", "Durée", "Prix"], note, className = "", style = {}, ...props }) {
  const cell = { padding: "0 8px" };
  return (
    <div className={`sk-price-table ${className}`.trim()} style={{ width: "100%", color: "var(--text)", ...style }} {...props}>
      <div role="table" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div role="row" style={{ display: "grid", gridTemplateColumns: COLS, alignItems: "end", padding: "0 48px 4px",
          fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: "var(--slide-min)", lineHeight: "var(--leading-deck)",
          letterSpacing: "var(--tracking-label)", textTransform: "uppercase" }}>
          {headers.map((h, i) => (
            <span role="columnheader" key={i} style={{ ...cell, textAlign: i === 2 ? "right" : "left" }}>{h}</span>
          ))}
        </div>
        {rows.map((r, i) => (
          <div role="row" key={i} style={{ display: "grid", gridTemplateColumns: COLS, alignItems: "center", minHeight: 68,
            padding: "12px 48px", borderRadius: "var(--radius-card-slide)", background: "var(--sk-card-solid, var(--cream))",
            color: "var(--sk-card-text, var(--ink))", fontFamily: "var(--font-sans)", fontSize: "var(--slide-body)",
            lineHeight: "var(--leading-deck)" }}>
            <span role="cell" style={cell}>{r.service}</span>
            <span role="cell" style={cell}>{nb(r.duration)}</span>
            <span role="cell" style={{ ...cell, textAlign: "right", fontWeight: "var(--fw-bold)", whiteSpace: "nowrap" }}>{nb(r.price)}</span>
          </div>
        ))}
      </div>
      {note ? (
        <p style={{ margin: "20px 0 0", padding: "0 56px", fontFamily: "var(--font-sans)", fontSize: "var(--slide-min)",
          lineHeight: "var(--leading-deck)" }}>{note}</p>
      ) : null}
    </div>
  );
}
