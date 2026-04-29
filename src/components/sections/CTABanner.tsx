import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

export function CTABanner() {
  return (
    <section
      className="section"
      style={{
        borderTop: "1px solid var(--color-accent)",
        background: "var(--color-bg-soft)",
        paddingTop: 96,
        paddingBottom: 96,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        <div style={{ maxWidth: 620 }}>
          <Reveal>
            <h2
              className="font-display-tight"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: 0, lineHeight: 1.05 }}
            >
              Ready to build
              <br />
              something great?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p style={{ color: "var(--color-muted)", marginTop: 18, fontSize: 16, maxWidth: 480 }}>
              Tell us about your project and we will get back to you within 24 hours.
            </p>
          </Reveal>
        </div>
        <Reveal delay={180}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button to="/contact" variant="primary">
              <span>Start a project</span>
              <Icon name="arrow-right" size={16} className="arrow" />
            </Button>
            {site.contact.calendly && (
              <Button href={site.contact.calendly} target="_blank" rel="noopener noreferrer" variant="outline">
                <span>Book a call</span>
                <Icon name="calendar" size={16} />
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
