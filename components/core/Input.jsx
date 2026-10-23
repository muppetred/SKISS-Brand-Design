import React from "react";

// Couleur du texte indicatif : seule règle qui ne peut pas s'écrire en style en ligne.
if (typeof document !== "undefined" && !document.getElementById("sk-input-placeholder")) {
  const css = document.createElement("style");
  css.id = "sk-input-placeholder";
  css.textContent = ".sk-input::placeholder{color:var(--text-muted);opacity:1}";
  document.head.appendChild(css);
}

/**
 * SKISS Input : champ web (rayon 12 px, bordure 1 px var(--border), fond var(--surface)).
 * Focus : bordure et anneau de 2 px au total en var(--ring) (orange #B45311 en clair, #ED7D31 en sombre,
 * encre sur les dégradés, blanc sur .theme-burnt). Désactivé à 60 %.
 * Avec label, le champ est enveloppé dans un <label> (libellé Hind Bold 14 px au-dessus).
 */
export function Input({
  label,
  state,
  disabled = false,
  className = "",
  style = {},
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const isFocus = !disabled && (state === "focus" || focused);

  const field = (
    <input
      className={`sk-input ${className}`.trim()}
      disabled={disabled}
      onFocus={(e) => { setFocused(true); if (onFocus) onFocus(e); }}
      onBlur={(e) => { setFocused(false); if (onBlur) onBlur(e); }}
      style={{
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        margin: 0,
        padding: "var(--space-3) var(--space-4)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-main)",
        lineHeight: 1.5,
        color: "var(--text)",
        background: "var(--surface)",
        border: "1px solid",
        borderColor: isFocus ? "var(--ring)" : "var(--border)",
        borderRadius: "var(--radius-field)",
        boxShadow: isFocus ? "0 0 0 1px var(--ring)" : "none",
        outline: "none",
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "text",
        transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
        ...style,
      }}
      {...props}
    />
  );

  if (!label) return field;
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", margin: 0 }}>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--text-small)",
          lineHeight: 1.3,
          color: "var(--text)",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {label}
      </span>
      {field}
    </label>
  );
}
