import { Link, useParams } from "react-router-dom";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScreenshotGallery } from "@/components/sections/ScreenshotGallery";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { Page } from "@/components/ui/Page";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getCaseStudyBySlug } from "@/config/content";
import { NotFound } from "@/pages/NotFound";

const copy = {
  color: "var(--color-muted)",
  fontSize: 17,
  lineHeight: 1.75,
  margin: 0,
} as const;

const heading = {
  fontSize: "clamp(40px, 6vw, 76px)",
  lineHeight: 0.98,
  margin: "14px 0 28px",
} as const;

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) return <NotFound />;

  const cover = study.gallery[0];

  return (
    <Page>
      <section style={{ paddingTop: 112, paddingBottom: 56, overflow: "hidden" }}>
        <div className="wrap">
          <Reveal>
            <Link to="/work" style={{ color: "var(--color-muted)", fontSize: 13 }}>
              ← All case studies
            </Link>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              alignItems: "end",
              gap: "40px 8vw",
              marginTop: 56,
            }}
          >
            <div>
              <Reveal delay={60}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <Pill variant="accent">{study.category}</Pill>
                  <Pill>{study.timeline}</Pill>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1
                  className="font-display-tight"
                  style={{ fontSize: "clamp(72px, 13vw, 176px)", lineHeight: 0.82, margin: "24px 0 0" }}
                >
                  {study.name}.
                </h1>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <p style={{ ...copy, color: "var(--color-text)", fontSize: "clamp(20px, 2.3vw, 28px)", lineHeight: 1.4 }}>
                {study.summary}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {cover && (
        <section style={{ padding: "28px 0 104px" }}>
          <div className="wrap">
            <Reveal delay={100}>
              <div
                style={{
                  minHeight: "clamp(320px, 58vw, 720px)",
                  display: "grid",
                  placeItems: "center",
                  padding: "clamp(16px, 3vw, 36px)",
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-rule)",
                  overflow: "hidden",
                }}
              >
                {(cover.kind ?? "browser") === "browser" ? (
                  <BrowserFrame
                    title={study.domain ?? study.name}
                    height="clamp(280px, 49vw, 620px)"
                    caption={`// ${study.slug}`}
                    image={cover.src}
                    imageAlt={cover.label}
                    eager
                  />
                ) : (
                  <PhoneFrame height="clamp(280px, 49vw, 620px)" caption={`// ${study.slug}`} image={cover.src} imageAlt={cover.label} eager />
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section" style={{ borderTop: "1px solid var(--color-rule)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(220px, 0.7fr) minmax(300px, 1.3fr)", gap: "48px 10vw" }} className="case-study-split">
            <Reveal>
              <div>
                <SectionLabel>Project brief</SectionLabel>
                <ProjectFact label="Services" value={study.services.join(" · ")} />
                <ProjectFact label="Technology" value={study.stack.join(" · ")} />
                {study.domain && <ProjectFact label="Product" value={study.domain} />}
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel>The challenge</SectionLabel>
                <h2 className="font-display-tight" style={heading}>A product shaped around the real workflow.</h2>
                <p style={copy}>{study.clientProblem}</p>
              </Reveal>
              <Reveal delay={100}>
                <div style={{ marginTop: 64, paddingLeft: 24, borderLeft: "2px solid var(--color-accent)" }}>
                  <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    XPL's role
                  </span>
                  <p style={{ ...copy, color: "var(--color-text)", fontSize: 21, lineHeight: 1.55, marginTop: 14 }}>
                    {study.xplRole}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <Reveal>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="font-display-tight" style={{ ...heading, maxWidth: 820 }}>From product direction to a connected experience.</h2>
          </Reveal>
          <div style={{ marginTop: 48, borderTop: "1px solid var(--color-rule)" }}>
            {study.approach.map((item, index) => (
              <Reveal key={item} delay={Math.min(index * 50, 180)}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px minmax(0, 1fr)",
                    gap: 20,
                    padding: "28px 0",
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p style={{ ...copy, color: "var(--color-text)", fontSize: 19, maxWidth: 820 }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px 9vw" }}>
            <Reveal>
              <div>
                <SectionLabel>Delivered</SectionLabel>
                <h2 className="font-display-tight" style={heading}>The work that moved the product forward.</h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ borderTop: "1px solid var(--color-rule)" }}>
                {study.deliverables.map((item) => (
                  <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: 14, padding: "22px 0", borderBottom: "1px solid var(--color-rule)" }}>
                    <span style={{ color: "var(--color-accent)" }}>↗</span>
                    <p style={copy}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
        <div className="wrap">
          <Reveal>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Supported outcome
            </span>
            <p className="font-display-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.08, maxWidth: 1050, margin: "24px 0 0" }}>
              {study.outcomes[0]?.statement}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionLabel>Evidence</SectionLabel>
            <h2 className="font-display-tight" style={heading}>What we can stand behind.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px 48px", marginTop: 44 }}>
            {study.proof.map((item) => (
              <Reveal key={item.label}>
                <div style={{ borderTop: `2px solid ${item.status === "verified" ? "var(--color-accent)" : "var(--color-rule)"}`, paddingTop: 20 }}>
                  <span style={{ color: "var(--color-muted-2)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {item.status}
                  </span>
                  <h3 className="font-display-tight" style={{ fontSize: 25, margin: "14px 0 8px" }}>{item.label}</h3>
                  <p style={{ ...copy, fontSize: 15 }}>{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <Reveal>
            <SectionLabel>Product views</SectionLabel>
            <h2 className="font-display-tight" style={heading}>Inside the experience.</h2>
          </Reveal>
          <Reveal delay={80}>
            <ScreenshotGallery screenshots={[...study.gallery]} title={study.name} itemHeight={320} />
          </Reveal>
        </div>
      </section>

      {study.faq.length > 0 && (
        <section className="section">
          <div className="wrap" style={{ maxWidth: 920 }}>
            <Reveal><SectionLabel>Project notes</SectionLabel></Reveal>
            <div style={{ marginTop: 28, borderTop: "1px solid var(--color-rule)" }}>
              {study.faq.map((item) => (
                <Reveal key={item.question}>
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(180px, 0.8fr) minmax(280px, 1.2fr)", gap: 32, padding: "30px 0", borderBottom: "1px solid var(--color-rule)" }} className="case-study-note">
                    <h3 className="font-display-tight" style={{ fontSize: 22, lineHeight: 1.2, margin: 0 }}>{item.question}</h3>
                    <p style={{ ...copy, fontSize: 15 }}>{item.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Building a focused digital product?"
        body="Tell us what your users need to accomplish and where product delivery is currently getting stuck."
        primaryLabel={study.cta.label}
        primaryTo={study.cta.to}
      />
    </Page>
  );
}

function ProjectFact({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ padding: "24px 0", borderBottom: "1px solid var(--color-rule)" }}>
      <span style={{ color: "var(--color-muted-2)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {label}
      </span>
      <p style={{ ...copy, color: "var(--color-text)", fontSize: 15, marginTop: 8 }}>{value}</p>
    </div>
  );
}
