import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroBackdrop } from "@/components/mockups/HeroBackdrop";
import { CTABanner } from "@/components/sections/CTABanner";
import { StatStrip } from "@/components/sections/StatStrip";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FeaturedProjectCard } from "@/components/cards/FeaturedProjectCard";
import { services, projects, stats } from "@/config/content";

const FEATURED_COUNT = 3;

export function Home() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <Page>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <HeroBackdrop />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <Reveal>
              <SectionLabel>XPL Developers</SectionLabel>
            </Reveal>
            <h1
              className="font-display-tight"
              style={{
                fontSize: "clamp(56px, 11vw, 168px)",
                margin: "0 0 32px",
                fontWeight: 600,
              }}
            >
              <Reveal as="span" style={{ display: "block" }}>
                We Build.
              </Reveal>
              <Reveal as="span" delay={120} style={{ display: "block", color: "var(--color-accent)" }}>
                You Scale.
              </Reveal>
            </h1>
            <Reveal delay={240}>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: 18,
                  maxWidth: 620,
                  marginBottom: 40,
                  lineHeight: 1.6,
                }}
              >
                A software agency engineering web, mobile, and Web3 products for ambitious teams.
                Nigerian roots — available worldwide.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Button to="/portfolio" variant="primary">
                  <span>View our work</span>
                  <Icon name="arrow-right" size={16} className="arrow" />
                </Button>
                <Button to="/contact" variant="outline">
                  <span>Start a project</span>
                  <Icon name="arrow-up-right" size={16} />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={520}>
              <StatStrip items={stats.hero} />
            </Reveal>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            color: "var(--color-muted)",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em" }}>
            SCROLL
          </span>
          <span className="scroll-bounce">
            <Icon name="chevron-down" size={16} />
          </span>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionLabel>What we do</SectionLabel>
          </Reveal>
          <div className="section-head">
            <Reveal>
              <h2>
                End-to-end digital
                <br />
                product development.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ color: "var(--color-muted)", maxWidth: 380 }}>
                Strategy through to maintenance — one team, one source of accountability, one bar
                for craft.
              </p>
            </Reveal>
          </div>

          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {services.slice(0, 4).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
            <Button to="/services" variant="ghost">
              See all services <Icon name="arrow-right" size={14} className="arrow" />
            </Button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <Reveal>
            <SectionLabel>Our work</SectionLabel>
          </Reveal>
          <div className="section-head">
            <Reveal>
              <h2>Products we have shipped.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ color: "var(--color-muted)", maxWidth: 380 }}>
                A few from the recent shelf — full set in the portfolio.
              </p>
            </Reveal>
          </div>

          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <FeaturedProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <Button to="/portfolio" variant="outline">
              <span>See all projects</span>
              <Icon name="arrow-right" size={16} className="arrow" />
            </Button>
          </div>
        </div>
      </section>

      {/* WHY XPL */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionLabel>Why XPL</SectionLabel>
          </Reveal>
          <div className="section-head">
            <Reveal>
              <h2>
                Operating principles
                <br />
                over marketing copy.
              </h2>
            </Reveal>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 0,
              border: "1px solid var(--color-rule)",
            }}
          >
            {stats.why.map((w, i) => (
              <Reveal key={w.label} delay={i * 100}>
                <div
                  style={{
                    padding: "40px 32px",
                    borderRight:
                      i < stats.why.length - 1 ? "1px solid var(--color-rule)" : "none",
                    minHeight: 240,
                  }}
                >
                  <div
                    className="font-display-tight"
                    style={{ fontSize: 64, color: "var(--color-accent)", lineHeight: 1 }}
                  >
                    {w.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      marginTop: 12,
                      color: "#fff",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontSize: 11,
                    }}
                  >
                    {w.label}
                  </div>
                  <p style={{ color: "var(--color-muted)", marginTop: 12, fontSize: 14 }}>
                    {w.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Page>
  );
}
