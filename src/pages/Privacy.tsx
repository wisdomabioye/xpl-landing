import { Link } from "react-router-dom";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/config/site";

export function Privacy() {
  const contactEmail = site.contact.email;

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
            <SectionLabel>Privacy</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", margin: "0 0 24px" }}
            >
              Privacy policy.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 18,
                maxWidth: 720,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              We respect your privacy. This policy explains what we collect and how we use it when
              you visit our site or contact us.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-muted-2)",
              }}
            >
              Last updated: May 2, 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gap: 28, maxWidth: 900 }}>
            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Information we collect
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                We only collect information you choose to share with us.
              </p>
              <ul
                style={{
                  color: "var(--color-muted)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  margin: 0,
                  paddingLeft: 18,
                  display: "grid",
                  gap: 8,
                }}
              >
                <li>Contact details and company information submitted through our forms.</li>
                <li>Project details and messages you send to our team.</li>
              </ul>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                How we use information
              </h2>
              <ul
                style={{
                  color: "var(--color-muted)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  margin: 0,
                  paddingLeft: 18,
                  display: "grid",
                  gap: 8,
                }}
              >
                <li>To respond to inquiries and discuss potential projects.</li>
                <li>To deliver services or proposals you request.</li>
                <li>To meet legal or regulatory requirements when applicable.</li>
              </ul>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Sharing and disclosures
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                We do not sell your data. We may share it with service providers that help us
                operate the site and communicate with you, or when required by law.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Retention and security
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                We keep information only as long as needed for the purposes above and apply
                reasonable safeguards to protect it.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Your choices
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                You can request access, correction, or deletion of your information by contacting
                us. You may also choose not to submit personal information through our forms.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Contact
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                {contactEmail ? (
                  <>
                    Email us at{" "}
                    <a href={`mailto:${contactEmail}`} style={{ color: "var(--color-accent)" }}>
                      {contactEmail}
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Reach us through the <Link to="/contact">contact form</Link>.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
