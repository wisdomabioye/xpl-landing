import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { OfferCardItem } from "@/config/content";

interface OfferCardGridProps {
  items: readonly OfferCardItem[];
}

export function OfferCardGrid({ items }: OfferCardGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 20,
      }}
    >
      {items.map((item, index) => (
        <Reveal key={item.title} delay={Math.min(index * 70, 280)}>
          <Card
            withTopRule
            style={{
              padding: 28,
              height: "100%",
              minHeight: 210,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display-tight" style={{ fontSize: 23, margin: "24px 0 10px" }}>
              {item.title}
            </h3>
            <p style={{ color: "var(--color-muted)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              {item.description}
            </p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
