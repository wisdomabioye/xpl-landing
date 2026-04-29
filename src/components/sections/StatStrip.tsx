import type { StatItem } from "@/config/content";

export function StatStrip({ items }: { items: readonly StatItem[] }) {
  return (
    <div
      style={{
        marginTop: 80,
        paddingTop: 32,
        borderTop: "1px solid var(--color-rule)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 24,
      }}
    >
      {items.map((s) => (
        <div key={s.label}>
          <div className="font-display-tight" style={{ fontSize: 28 }}>
            {s.value}
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-muted)",
              marginTop: 4,
              fontSize: 11,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
