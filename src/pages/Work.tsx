import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { caseStudies } from "@/config/content";

export function Work() {
  const published = caseStudies.filter((study) => study.publicationState === "published");

  return (
    <Page>
      <PageHero
        eyebrow="Case studies"
        title="Work backed by"
        accent="a clear record."
        intro="A closer look at selected products, XPL's role, the work delivered, and the outcomes the available evidence supports."
        primaryCta={{ label: "Start a project", to: "/contact" }}
        secondaryCta={{ label: "Browse the wider portfolio", to: "/portfolio" }}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <SectionLabel>Published work</SectionLabel>
            <h2 className="font-display-tight" style={{ fontSize: "clamp(34px, 5vw, 58px)", margin: "12px 0 28px" }}>
              Evidence before claims.
            </h2>
          </Reveal>

          {published.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
              {published.map((study, index) => (
                <Reveal key={study.slug} delay={Math.min(index * 60, 240)}>
                  <CaseStudyCard study={study} eager={index === 0} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p style={{ color: "var(--color-muted)", lineHeight: 1.7, maxWidth: 620 }}>
              No case studies are approved for publication yet. Browse the portfolio or contact us for relevant work that can be shared privately.
            </p>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a product worth building well?"
        body="Tell us what you are building, what stage it is at, and what a successful engagement should change."
        primaryLabel="Discuss your project"
        primaryTo="/contact"
      />
    </Page>
  );
}
