import { Card } from "@/components/ui/Card";
import type { Value } from "@/config/content";

export function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <Card style={{ padding: 28, borderLeft: "2px solid var(--color-accent)", minHeight: 220 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-accent)",
          fontSize: 11,
          letterSpacing: "0.18em",
          marginBottom: 12,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="font-display-tight" style={{ fontSize: 26, marginBottom: 12 }}>
        {value.title}
      </div>
      <p style={{ color: "var(--color-muted)", fontSize: 14, margin: 0 }}>{value.body}</p>
    </Card>
  );
}
