import { EngagementCrossSell } from "@/components/sections/EngagementCrossSell";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { engagementModels, getOfferBySlug } from "@/config/content";

export function AgencyPartner() {
  const offer = getOfferBySlug("agency-partner");
  const model = engagementModels.find((item) => item.id === "agency-partner");
  if (!offer || !model) return null;

  return (
    <Page>
      <PageHero
        eyebrow="Agency Partner"
        title="More delivery capacity."
        accent="Still your relationship."
        intro={offer.summary}
        primaryCta={offer.cta}
        secondaryCta={{ label: "See verified work", to: "/work" }}
        proof={["White-label available", "Partner-controlled communication", "Project or monthly support"]}
      />

      <section className="section" style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
        <div className="wrap">
          <Reveal>
            <p className="font-display-tight" style={{ fontSize: "clamp(38px,6vw,76px)", lineHeight: 1.08, maxWidth: 1050, margin: 0 }}>
              We add the engineering depth. You keep the trust, context, and ownership of the client relationship.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><SectionLabel>How the partnership works</SectionLabel></Reveal>
          <div className="agency-principles" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "36px 5vw", marginTop: 46 }}>
            <Principle number="01" title="You stay in control" body="You choose whether XPL is visible, white-label, or client-facing. Direct contact happens only with your approval." />
            <Principle number="02" title="Delivery stays visible" body="The working rhythm includes progress, risks, decisions, verification, and a handover your team can own." />
            <Principle number="03" title="Boundaries stay written" body="Scope, confidentiality, ownership, communication, capacity, and acceptance are agreed before delivery begins." />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <div className="agency-delivery" style={{ display: "grid", gridTemplateColumns: "minmax(280px,.8fr) minmax(320px,1.2fr)", gap: "56px 9vw" }}>
            <Reveal>
              <div style={{ position: "sticky", top: 120 }}>
                <SectionLabel>Delivery scope</SectionLabel>
                <h2 className="font-display-tight" style={{ fontSize: "clamp(40px,6vw,70px)", lineHeight: 1, margin: "18px 0 24px" }}>Senior capacity where the work needs it.</h2>
                <p style={{ color: "var(--color-muted)", fontSize: 17, lineHeight: 1.7 }}>{offer.duration}. The exact capacity and delivery ownership are confirmed before signing.</p>
              </div>
            </Reveal>
            <div style={{ borderTop: "1px solid var(--color-rule)" }}>
              {offer.scope.map((item, index) => <Reveal key={item}><div style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: 18, padding: "26px 0", borderBottom: "1px solid var(--color-rule)" }}><span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{String(index + 1).padStart(2,"0")}</span><p style={{ color: "var(--color-text)", fontSize: 18, lineHeight: 1.6, margin: 0 }}>{item}</p></div></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "48px 9vw" }}>
            <Reveal><div><SectionLabel>Commercial model</SectionLabel><h2 className="font-display-tight" style={{ fontSize: "clamp(42px,6vw,72px)", lineHeight: .98, margin: "18px 0" }}>{model.startingPrice}</h2><p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>{model.workingRhythm}. Final scope, capacity, and price are confirmed in the proposal.</p></div></Reveal>
            <Reveal delay={80}><div><SectionLabel>What you receive</SectionLabel><div style={{ marginTop: 20, borderTop: "1px solid var(--color-rule)" }}>{offer.deliverables.map((item) => <div key={item} style={{ padding: "17px 0", borderBottom: "1px solid var(--color-rule)", color: "var(--color-muted)", lineHeight: 1.6 }}>↗ &nbsp; {item}</div>)}</div></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap" style={{ maxWidth: 920 }}>
          <Reveal><SectionLabel>Guardrails and questions</SectionLabel><h2 className="font-display-tight" style={{ fontSize: "clamp(36px,5vw,58px)", margin: "16px 0 30px" }}>Clear terms make better partners.</h2></Reveal>
          <div style={{ borderTop: "1px solid var(--color-rule)" }}>
            {offer.faq.map((item) => <details key={item.question} className="editorial-details"><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
            <details className="editorial-details"><summary>What is outside the engagement?<span>+</span></summary><ul>{offer.exclusions.map((item) => <li key={item}>{item}</li>)}</ul></details>
          </div>
        </div>
      </section>

      <EngagementCrossSell exclude="agency-partner" />
      <CTABanner title="Need dependable capacity behind your agency?" body="Tell us what you are delivering, where capacity is tight, and how you prefer your delivery partner to operate." primaryLabel={offer.cta.label} primaryTo={offer.cta.to} />
    </Page>
  );
}

function Principle({ number, title, body }: { number: string; title: string; body: string }) {
  return <Reveal><div style={{ borderTop: "2px solid var(--color-accent)", paddingTop: 22 }}><span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{number}</span><h2 className="font-display-tight" style={{ fontSize: 30, margin: "24px 0 12px" }}>{title}</h2><p style={{ color: "var(--color-muted)", lineHeight: 1.7, margin: 0 }}>{body}</p></div></Reveal>;
}
