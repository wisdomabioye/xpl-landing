import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import type { OfferPackage } from "@/config/content";

export function PricingCards({ packages }: { packages: readonly OfferPackage[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
        alignItems: "stretch",
      }}
    >
      {packages.map((offer, index) => (
        <Reveal key={offer.name} delay={index * 100}>
          <Card
            withTopRule
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderColor: offer.featured ? "var(--color-accent)" : undefined,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
              <Pill variant={offer.featured ? "accent" : "outline"}>{offer.badge}</Pill>
              <span style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 11 }}>
                {offer.duration}
              </span>
            </div>

            <h3 className="font-display-tight" style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: "28px 0 12px" }}>
              {offer.name}
            </h3>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.65, margin: 0 }}>{offer.description}</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                borderTop: "1px solid var(--color-rule)",
                borderBottom: "1px solid var(--color-rule)",
                margin: "28px 0",
              }}
            >
              <div style={{ padding: "22px 16px 22px 0" }}>
                <div className="eyebrow-label">Nigeria</div>
                <div className="font-display-tight" style={{ color: "var(--color-accent)", fontSize: 32, marginTop: 8 }}>
                  {offer.nigeriaPrice}
                </div>
                <span style={{ color: "var(--color-muted-2)", fontSize: 12 }}>starting price</span>
              </div>
              <div style={{ padding: "22px 0 22px 16px", borderLeft: "1px solid var(--color-rule)" }}>
                <div className="eyebrow-label">International</div>
                <div className="font-display-tight" style={{ color: "var(--color-text)", fontSize: 32, marginTop: 8 }}>
                  {offer.internationalPrice}
                </div>
                <span style={{ color: "var(--color-muted-2)", fontSize: 12 }}>starting price</span>
              </div>
            </div>

            <p style={{ color: "var(--color-muted)", fontSize: 14, lineHeight: 1.65, margin: "0 0 28px" }}>
              {offer.detail}
            </p>
            <div style={{ marginTop: "auto" }}>
              <Button to={offer.cta.to} variant={offer.featured ? "primary" : "outline"}>
                <span>{offer.cta.label}</span>
                <Icon name="arrow-right" size={16} className="arrow" />
              </Button>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
