import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GeoMark } from "@/components/mockups/GeoMark";
import { CTABanner } from "@/components/sections/CTABanner";
import { ValueCard } from "@/components/cards/ValueCard";
import { TeamCard } from "@/components/cards/TeamCard";
import { values, team } from "@/config/content";

export function About() {
  return (
    <Page>
      {/* HERO */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 80,
          position: "relative",
        }}
      >
        <div className="wrap">
          <Reveal>
            <SectionLabel>About us</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(48px, 7vw, 96px)", margin: "0 0 28px", maxWidth: 1100 }}
            >
              A software agency built
              <br />
              for the modern <span style={{ color: "var(--color-accent)" }}>builder</span>.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 18,
                maxWidth: 720,
                lineHeight: 1.6,
              }}
            >
              XPL Developers exists to give serious founders, operators, and product teams an
              engineering partner that ships at international standard — without the agency
              theater. Distributed by design. Outcome-obsessed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="wrap">
          <div className="story-grid">
            <div>
              <Reveal>
                <SectionLabel>Our story</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  className="font-display-tight"
                  style={{
                    fontSize: "clamp(32px, 4vw, 48px)",
                    margin: "0 0 24px",
                    lineHeight: 1.05,
                  }}
                >
                  We started XPL because
                  <br />
                  the agency model was
                  <br />
                  broken.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div
                  style={{
                    color: "var(--color-muted)",
                    fontSize: 16,
                    lineHeight: 1.7,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <p style={{ margin: 0 }}>
                    Most agencies sell hours. We sell shipped products. The difference shows up on
                    launch day, in the bug count, and in your customer NPS.
                  </p>
                  <p style={{ margin: 0 }}>
                    We were founded with Nigerian roots and built on a single conviction: world-class
                    engineering talent can hold its own against any team in San Francisco, London, or
                    Berlin — given the right standards and the right scaffolding.
                  </p>
                  <p style={{ margin: 0 }}>
                    Today we ship products for clients across the US, UK, Austria, and Nigeria —
                    from venture-backed startups to established institutions reinventing themselves.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <GeoMark size={360} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <Reveal>
            <SectionLabel>What we stand for</SectionLabel>
          </Reveal>
          <div className="section-head">
            <Reveal>
              <h2>Four values, no slogans.</h2>
            </Reveal>
          </div>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <ValueCard value={v} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionLabel>The team</SectionLabel>
          </Reveal>
          <div className="section-head">
            <Reveal>
              <h2>
                Engineers, designers,
                <br />
                and one stubborn QA.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ color: "var(--color-muted)", maxWidth: 360 }}>
                A senior team with deep specialisations across the stack. Photos coming shortly —
                we are camera-shy by nature.
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
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORLDWIDE PRESENCE */}
      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap presence-grid">
          <Reveal>
            <div
              className="font-display-tight"
              style={{
                fontSize: "clamp(80px, 14vw, 200px)",
                lineHeight: 0.9,
                color: "transparent",
                WebkitTextStroke: "1px var(--color-accent)",
              }}
            >
              WW
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel>Nigerian roots · Worldwide</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-display-tight"
                style={{ fontSize: "clamp(28px, 3.6vw, 44px)", margin: "0 0 18px" }}
              >
                Distributed by design.
                <br />
                Delivered worldwide.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ color: "var(--color-muted)", fontSize: 16, maxWidth: 560 }}>
                We work with founders building for Africa, and with international clients building
                for the world. Same team, same standards, same accountability — wherever you are.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </Page>
  );
}
