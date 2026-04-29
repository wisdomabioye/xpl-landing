import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceBlock } from "@/components/sections/ServiceBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { services, processSteps } from "@/config/content";

export function Services() {
  return (
    <Page>
      <section
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 60,
        }}
      >
        <div className="wrap">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", margin: "0 0 28px" }}
            >
              What we build.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 18,
                maxWidth: 720,
                lineHeight: 1.6,
              }}
            >
              Six disciplines, one team. We engage on full builds, embedded teams, and ongoing
              retainers — whatever shape your product needs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => (
              <ServiceBlock key={s.slug} service={s} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <Reveal>
            <SectionLabel>How we work</SectionLabel>
          </Reveal>
          <div className="section-head">
            <Reveal>
              <h2>
                From kickoff to launch
                <br />
                in five honest steps.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ color: "var(--color-muted)", maxWidth: 360 }}>
                Typical engagement is 8–16 weeks. Discovery is fixed-fee. Build is sprint-based.
              </p>
            </Reveal>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <CTABanner />
    </Page>
  );
}
