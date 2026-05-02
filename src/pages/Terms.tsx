import { Link } from "react-router-dom";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/config/site";

export function Terms() {
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
            <SectionLabel>Terms</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", margin: "0 0 24px" }}
            >
              Terms of service.
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
              These terms govern your use of our website and any information you access through it.
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
                Acceptance of terms
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                By accessing this site, you agree to these terms and any applicable laws and
                regulations.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Use of the site
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
                <li>Do not misuse the site or attempt to access it unlawfully.</li>
                <li>Do not copy, scrape, or redistribute content without permission.</li>
                <li>Respect all applicable laws and third-party rights.</li>
              </ul>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Intellectual property
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                All content on this site is owned by XPL Developers or its licensors and is
                protected by intellectual property laws.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Third-party links
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                Links to third-party sites are provided for convenience. We are not responsible for
                their content or policies.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Disclaimers and limitation of liability
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                The site is provided “as is” without warranties of any kind. To the fullest extent
                permitted by law, XPL Developers will not be liable for any indirect or
                consequential damages arising from your use of the site.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2
                className="font-display-tight"
                style={{ fontSize: 28, margin: 0, lineHeight: 1.1 }}
              >
                Changes to terms
              </h2>
              <p style={{ color: "var(--color-muted)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                We may update these terms from time to time. Updates will be posted on this page.
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
