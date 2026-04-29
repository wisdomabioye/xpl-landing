import { useMemo, useState } from "react";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CornerTicks } from "@/components/mockups/CornerTicks";
import { sendContactBrief, type ContactPayload } from "@/lib/emailjs";
import { isEmailjsConfigured, site, whatsappLink } from "@/config/site";
import { services, budgets } from "@/config/content";
import type { IconName } from "@/config/content";

interface Channel {
  key: string;
  icon: IconName;
  label: string;
  title: string;
  cta: string;
  action: { type: "scroll"; target: string } | { type: "external"; href: string };
}

function buildChannels(): Channel[] {
  const list: Channel[] = [
    {
      key: "email",
      icon: "mail",
      label: "Email form",
      title: "Send us a brief",
      cta: "Use the form below",
      action: { type: "scroll", target: "inquiry-form" },
    },
  ];
  if (site.contact.calendly) {
    list.push({
      key: "calendly",
      icon: "calendar",
      label: "Calendly",
      title: "Book a discovery call",
      cta: "Book a call",
      action: { type: "external", href: site.contact.calendly },
    });
  }
  if (site.contact.whatsapp) {
    list.push({
      key: "whatsapp",
      icon: "message-circle",
      label: "WhatsApp",
      title: "Chat with us",
      cta: "Message us",
      action: { type: "external", href: whatsappLink() },
    });
  }
  return list;
}

const initialForm: ContactPayload = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  brief: "",
};

export function Contact() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const channels = useMemo(buildChannels, []);

  const update =
    <K extends keyof ContactPayload>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const result = await sendContactBrief(form);
    if (result.ok) {
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 6000);
    } else {
      setStatus("error");
      setErrorMsg(result.message);
    }
  };

  const submitLabel =
    status === "sending"
      ? "Sending…"
      : status === "success"
        ? "Brief received — we will reply within 24h"
        : "Send brief";
  const submitIcon: IconName =
    status === "success" ? "check" : status === "sending" ? "send" : "send";

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
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", margin: "0 0 28px" }}
            >
              Let us build
              <br />
              something <span style={{ color: "var(--color-accent)" }}>together</span>.
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
              Fill the form{site.contact.calendly && ", book a call"}
              {site.contact.whatsapp && ", or drop us a message on WhatsApp"}. We respond within 24
              hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {channels.map((c, i) => (
              <Reveal key={c.key} delay={i * 100}>
                <Card style={{ padding: 28, minHeight: 220, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 24,
                      color: "var(--color-accent)",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        border: "1px solid var(--color-accent)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Icon name={c.icon} size={16} />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </div>
                  </div>
                  <div className="font-display-tight" style={{ fontSize: 22, marginBottom: 12 }}>
                    {c.title}
                  </div>
                  {c.action.type === "scroll" ? (
                    <a
                      href="#inquiry-form"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("inquiry-form")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      style={{
                        marginTop: "auto",
                        paddingTop: 16,
                        color: "var(--color-accent)",
                        fontSize: 13,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      {c.cta} <Icon name="arrow-up-right" size={14} />
                    </a>
                  ) : (
                    <a
                      href={c.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: "auto",
                        paddingTop: 16,
                        color: "var(--color-accent)",
                        fontSize: 13,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      {c.cta} <Icon name="arrow-up-right" size={14} />
                    </a>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-bg-soft)" }} id="inquiry-form">
        <div className="wrap contact-grid">
          <div>
            <Reveal>
              <SectionLabel>Inquiry form</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-display-tight"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  margin: "0 0 20px",
                  lineHeight: 1.05,
                }}
              >
                Tell us
                <br />
                about your
                <br />
                project.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  maxWidth: 380,
                }}
              >
                A short brief is enough to start. We will reply with questions, a rough scope, and
                timeline within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div
                style={{
                  marginTop: 40,
                  paddingTop: 24,
                  borderTop: "1px solid var(--color-rule)",
                  display: "grid",
                  gap: 16,
                }}
              >
                {site.contact.email && (
                  <div>
                    <div className="field-label" style={{ marginBottom: 6 }}>
                      Email
                    </div>
                    <div style={{ fontSize: 15 }}>{site.contact.email}</div>
                  </div>
                )}
                {site.contact.whatsapp && (
                  <div>
                    <div className="field-label" style={{ marginBottom: 6 }}>
                      WhatsApp
                    </div>
                    <div style={{ fontSize: 15 }}>{site.contact.whatsapp}</div>
                  </div>
                )}
                <div>
                  <div className="field-label" style={{ marginBottom: 6 }}>
                    Where we work
                  </div>
                  <div style={{ fontSize: 15 }}>Nigerian roots · Available worldwide</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="card" style={{ padding: 32, position: "relative" }}>
              <CornerTicks />

              <div
                className="contact-form-row"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
              >
                <Field label="Full name" required htmlFor="contact-name">
                  <input
                    id="contact-name"
                    className="input"
                    required
                    aria-required="true"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Ada Okonkwo"
                  />
                </Field>
                <Field label="Email" required htmlFor="contact-email">
                  <input
                    id="contact-email"
                    className="input"
                    required
                    aria-required="true"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="ada@company.com"
                  />
                </Field>
              </div>
              <div style={{ marginTop: 20 }}>
                <Field label="Company (optional)" htmlFor="contact-company">
                  <input
                    id="contact-company"
                    className="input"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Optional"
                  />
                </Field>
              </div>
              <div
                className="contact-form-row"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}
              >
                <Field label="Service needed" required htmlFor="contact-service">
                  <select
                    id="contact-service"
                    className="select"
                    required
                    aria-required="true"
                    value={form.service}
                    onChange={update("service")}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="not-sure">Not sure</option>
                  </select>
                </Field>
                <Field label="Budget range" required htmlFor="contact-budget">
                  <select
                    id="contact-budget"
                    className="select"
                    required
                    aria-required="true"
                    value={form.budget}
                    onChange={update("budget")}
                  >
                    <option value="">Select a range…</option>
                    {budgets.map((b) => (
                      <option key={b.value} value={b.label}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div style={{ marginTop: 20 }}>
                <Field label="Project brief" required htmlFor="contact-brief">
                  <textarea
                    id="contact-brief"
                    className="textarea"
                    required
                    aria-required="true"
                    rows={5}
                    value={form.brief}
                    onChange={update("brief")}
                    placeholder="What are you building? Who is it for? Any deadlines or constraints we should know about?"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === "sending"}
                className="!w-full"
              >
                <span style={{ flex: 1, textAlign: "center" }}>{submitLabel}</span>
                <Icon name={submitIcon} size={16} />
              </Button>

              {status === "error" && (
                <p
                  role="alert"
                  aria-live="polite"
                  style={{
                    marginTop: 12,
                    color: "var(--color-accent)",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              {!isEmailjsConfigured && (
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--color-muted-2)",
                    textAlign: "center",
                  }}
                >
                  FORM NOT CONFIGURED — SET VITE_EMAILJS_* IN .ENV.LOCAL
                </p>
              )}

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-muted)",
                  fontSize: 10,
                  marginTop: 16,
                  letterSpacing: "0.1em",
                  textAlign: "center",
                }}
              >
                ENCRYPTED · NO SPAM · DATA NEVER SHARED
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
