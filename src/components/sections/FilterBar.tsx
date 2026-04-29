import { cn } from "@/lib/cn";

interface Props<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (v: T) => void;
  count: { shown: number; total: number; label?: string };
}

export function FilterBar<T extends string>({ options, active, onChange, count }: Props<T>) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        padding: "20px 0 32px",
        borderBottom: "1px solid var(--color-rule)",
        marginBottom: 40,
      }}
    >
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onChange(c)}
              className={cn("transition-colors")}
              style={{
                padding: "10px 18px",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                border: "1px solid",
                borderColor: isActive ? "var(--color-accent)" : "var(--color-rule)",
                background: isActive ? "var(--color-accent)" : "transparent",
                color: isActive ? "var(--color-bg)" : "var(--color-muted)",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-muted)",
          fontSize: 11,
          letterSpacing: "0.04em",
        }}
      >
        <span style={{ color: "var(--color-accent)" }}>
          {count.shown.toString().padStart(2, "0")}
        </span>{" "}
        / {count.total.toString().padStart(2, "0")} {count.label ?? "items"}
      </div>
    </div>
  );
}
