import { Link } from "react-router-dom";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Icon } from "@/components/ui/Icon";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { engagementModels, type ProcessStep } from "@/config/content";

const selectionSteps: readonly ProcessStep[] = [
  { number: "01", title: "Share the constraint", description: "What exists, what is blocked, and what should change." },
  { number: "02", title: "Choose the shape", description: "The smallest engagement that can responsibly produce the outcome." },
  { number: "03", title: "Agree the terms", description: "Scope, access, acceptance, ownership, timing, and payment." },
  { number: "04", title: "Begin with visibility", description: "A clear owner, delivery rhythm, escalation path, and handover." },
];

const questions = [
  ["Unsure which model fits?", "Start with the problem. We recommend the smallest suitable engagement after understanding the product, access, urgency, and desired outcome."],
  ["Are these fixed quotes?", "No. Displayed prices are starting points. Your proposal confirms the exact scope, schedule, capacity, acceptance conditions, and fee."],
  ["Can we work through Contra?", "Yes, when mutually suitable. Contra can support proposals, contracts, milestones, and payment. Direct contracting remains available."],
  ["How quickly will XPL respond?", "Within one business day. Delivery availability is confirmed before either side signs an engagement."],
] as const;

export function Engagements() {
  return (
    <Page>
      <PageHero
        eyebrow="Ways to work together"
        title="Choose the shape"
        accent="that fits the problem."
        intro="Four focused ways to move a product forward—without forcing every problem into the same contract."
        primaryCta={{ label: "Discuss your project", to: "/contact" }}
        secondaryCta={{ label: "See verified work", to: "/work" }}
        proof={["Nigerian and international pricing", "Direct or Contra", "One-business-day reply"]}
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal><SectionLabel>Find your starting point</SectionLabel></Reveal>
          <div style={{ marginTop: 36, borderTop: "1px solid var(--color-rule)" }}>
            {engagementModels.map((model, index) => (
              <Reveal key={model.id}>
                <article className="engagement-row" style={{ display: "grid", gridTemplateColumns: "72px minmax(220px,.7fr) minmax(320px,1.3fr)", gap: "28px 5vw", padding: "52px 0", borderBottom: "1px solid var(--color-rule)", alignItems: "start" }}>
                  <span className="font-display-tight" style={{ color: "var(--color-accent)", fontSize: 30 }}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="font-display-tight" style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1, margin: "0 0 16px" }}>{model.name}</h2>
                    <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{model.startingPrice}</span>
                  </div>
                  <div>
                    <p style={{ color: "var(--color-text)", fontSize: 18, lineHeight: 1.6, margin: "0 0 24px" }}>{model.summary}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", marginBottom: 24 }}>
                      {model.idealFor.map((item) => <span key={item} style={{ color: "var(--color-muted)", fontSize: 13 }}>— {item}</span>)}
                    </div>
                    <p style={{ color: "var(--color-muted-2)", fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.6 }}>{model.workingRhythm}</p>
                    <Link to={model.cta.to} style={{ color: "var(--color-accent)", display: "inline-flex", gap: 8, alignItems: "center", marginTop: 12, fontSize: 13 }}>{model.cta.label}<Icon name="arrow-right" size={14} /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }}>
        <div className="wrap">
          <Reveal><SectionLabel>How we begin</SectionLabel><h2 className="font-display-tight" style={{ fontSize: "clamp(40px,6vw,72px)", lineHeight: 1, margin: "16px 0 44px", maxWidth: 700 }}>Clarity before commitment.</h2></Reveal>
          <ProcessTimeline steps={selectionSteps} />
        </div>
      </section>

      <section className="section" style={{ borderTop: "1px solid var(--color-accent)", borderBottom: "1px solid var(--color-accent)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "48px 9vw", alignItems: "center" }}>
            <Reveal><div><SectionLabel>Contracting</SectionLabel><h2 className="font-display-tight" style={{ fontSize: "clamp(42px,6vw,76px)", lineHeight: .95, margin: "18px 0 0" }}>Use Contra.<br />Or work directly.</h2></div></Reveal>
            <Reveal delay={80}><div><p style={{ color: "var(--color-muted)", fontSize: 18, lineHeight: 1.75 }}>Contra can handle proposals, contracts, milestones, and payment when it suits both sides. Direct contracting remains available. Either way, scope, acceptance, ownership, communication, and payment are agreed in writing.</p><p style={{ color: "var(--color-muted-2)", lineHeight: 1.7 }}>Fixed work normally uses 50% to start and 50% at handover, or approved milestones.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Reveal><SectionLabel>Before you ask</SectionLabel><h2 className="font-display-tight" style={{ fontSize: "clamp(36px,5vw,58px)", margin: "16px 0 30px" }}>The practical questions.</h2></Reveal>
          <div style={{ borderTop: "1px solid var(--color-rule)" }}>
            {questions.map(([question, answer]) => <details key={question} className="editorial-details"><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <CTABanner title="Not sure which model fits?" body="Describe the product, the immediate constraint, and the outcome you need. We will recommend the smallest suitable engagement." primaryLabel="Talk through the options" primaryTo="/contact?interest=not-sure" />
    </Page>
  );
}
