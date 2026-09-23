import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { CtaLink } from "@/config/content";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section
      style={{
        minHeight: "72vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div className="wrap">
        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="font-display-tight"
            style={{ fontSize: "clamp(48px, 8vw, 112px)", margin: "0 0 28px", maxWidth: 1080 }}
          >
            {title}
            {accent && (
              <>
                <br />
                <span style={{ color: "var(--color-accent)" }}>{accent}</span>
              </>
            )}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ color: "var(--color-muted)", fontSize: 18, maxWidth: 720, lineHeight: 1.6 }}>
            {intro}
          </p>
        </Reveal>
        {(primaryCta || secondaryCta) && (
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 36 }}>
              {primaryCta && (
                <Button to={primaryCta.to} variant="primary">
                  <span>{primaryCta.label}</span>
                  <Icon name="arrow-right" size={16} className="arrow" />
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant="outline">
                  <span>{secondaryCta.label}</span>
                </Button>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
