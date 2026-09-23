import { Card } from "@/components/ui/Card";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/sections/CTABanner";
import { OfferCardGrid } from "@/components/sections/OfferCardGrid";
import { PricingCards } from "@/components/sections/PricingCards";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { productRescue } from "@/config/content";
import type { OfferSectionIntro } from "@/config/content";

function SectionHeading({ eyebrow, heading, body }: OfferSectionIntro) {
  return (
    <>
      <Reveal><SectionLabel>{eyebrow}</SectionLabel></Reveal>
      <div className="section-head">
        <Reveal><h2>{heading}</h2></Reveal>
        <Reveal delay={80}>
          <p style={{ color: "var(--color-muted)", maxWidth: 440, lineHeight: 1.65 }}>{body}</p>
        </Reveal>
      </div>
    </>
  );
}

function FitList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <Card style={{ padding: 32, height: "100%" }}>
      <h3 className="font-display-tight" style={{ fontSize: 28, margin: "0 0 24px" }}>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 18 }}>
        {items.map((item) => (
          <li key={item} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12 }}>
            <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>—</span>
            <span style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function ProductRescue() {
  const {
    hero,
    overview,
    symptoms,
    pricingSection,
    packages,
    deliverablesSection,
    deliverables,
    processSection,
    process,
    fitSection,
    goodFit,
    badFit,
    scopeLabel,
    scopeNote,
    cta,
  } = productRescue;

  return (
    <Page>
      <PageHero {...hero} />
      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <SectionHeading {...overview} />
          <OfferCardGrid items={symptoms} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading {...pricingSection} />
          <PricingCards packages={packages} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading {...deliverablesSection} />
          <OfferCardGrid items={deliverables} />
        </div>
      </section>
      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <SectionHeading {...processSection} />
          <ProcessTimeline steps={process} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading {...fitSection} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <Reveal><FitList title={fitSection.goodTitle} items={goodFit} /></Reveal>
            <Reveal delay={100}><FitList title={fitSection.badTitle} items={badFit} /></Reveal>
          </div>
          <Reveal delay={160}>
            <div style={{ borderLeft: "2px solid var(--color-accent)", marginTop: 32, padding: "20px 24px", background: "var(--color-bg-card)" }}>
              <div className="eyebrow-label" style={{ marginBottom: 10 }}>{scopeLabel}</div>
              <p style={{ color: "var(--color-muted)", lineHeight: 1.65, margin: 0, maxWidth: 900 }}>{scopeNote}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABanner title={cta.title} body={cta.body} primaryLabel={cta.label} primaryTo={cta.to} />
    </Page>
  );
}
