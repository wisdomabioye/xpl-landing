import { useParams, Link, Navigate } from "react-router-dom";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScreenshotGallery } from "@/components/sections/ScreenshotGallery";
import {
  getSystemBySlug,
  type Screenshot,
  type SystemApp,
  type SystemStatus,
} from "@/config/content";

const statusLabel: Record<SystemStatus, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  live: "Live",
};

const statusColor: Record<SystemStatus, string> = {
  planned: "var(--color-muted-2)",
  "in-progress": "var(--color-accent-soft)",
  live: "var(--color-accent)",
};

const appLabels: Record<SystemApp, { title: string; subtitle: string }> = {
  marketing: { title: "Marketing", subtitle: "Public-facing site" },
  dashboard: { title: "Dashboard", subtitle: "Logged-in app surface" },
  mobile: { title: "Mobile", subtitle: "Mobile-first web · phone viewport" },
};

export function SystemShowcase() {
  const { slug } = useParams<{ slug: string }>();
  const system = slug ? getSystemBySlug(slug) : undefined;

  if (!system) {
    return <Navigate to="/portfolio" replace />;
  }

  const apps: SystemApp[] = ["marketing", "dashboard", "mobile"];

  return (
    <Page>
      <section style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="wrap">
          <Reveal>
            <Link
              to="/portfolio"
              style={{
                color: "var(--color-muted)",
                fontSize: 13,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                textDecoration: "none",
              }}
            >
              ← Back to portfolio
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 32 }}>
              <SectionLabel>Design system</SectionLabel>
              <Pill variant="accent">Phase {system.phase}</Pill>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: statusColor[system.status],
                }}
              >
                {statusLabel[system.status]}
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(56px, 10vw, 140px)", margin: "20px 0 24px" }}
            >
              {system.name}.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p
              style={{
                color: "var(--color-text)",
                fontSize: 22,
                maxWidth: 720,
                lineHeight: 1.4,
                margin: "0 0 12px",
              }}
            >
              {system.aesthetic}.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 16,
                maxWidth: 680,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Best for {system.audience.toLowerCase()}.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div
              style={{
                display: "flex",
                gap: 24,
                paddingTop: 32,
                marginTop: 32,
                borderTop: "1px solid var(--color-rule)",
                flexWrap: "wrap",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-muted-2)",
              }}
            >
              <span>{system.screenCount} screens across 3 apps</span>
              <span>·</span>
              <span>{system.componentCount} components</span>
              <span>·</span>
              <span>{system.themes.length} prebuilt themes</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <h2
              className="font-display-tight"
              style={{ fontSize: 36, margin: "0 0 12px" }}
            >
              Three apps, one aesthetic.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 15,
                maxWidth: 560,
                lineHeight: 1.6,
                margin: "0 0 32px",
              }}
            >
              Every {system.name} buy ships a marketing site, a dashboard, and a mobile app — all
              powered by the same {system.componentCount}-component library and unified by{" "}
              {system.name}'s tokens.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {apps.map((app, i) => (
              <Reveal key={app} delay={i * 80}>
                <DemoSlot
                  title={appLabels[app].title}
                  subtitle={appLabels[app].subtitle}
                  url={system.demos[app]}
                  screenshots={system.screenshots?.[app] ?? []}
                  defaultKind={app === "mobile" ? "phone" : "browser"}
                  systemName={system.name}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Page>
  );
}

function DemoSlot({
  title,
  subtitle,
  url,
  screenshots,
  defaultKind,
  systemName,
}: {
  title: string;
  subtitle: string;
  url: string | null;
  screenshots: Screenshot[];
  defaultKind: "browser" | "phone";
  systemName: string;
}) {
  return (
    <div
      className="card"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: 320,
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid var(--color-rule)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
          <div
            style={{
              fontSize: 11,
              color: "var(--color-muted-2)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            {subtitle}
          </div>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-accent)",
              fontSize: 12,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Open <Icon name="arrow-up-right" size={12} />
          </a>
        )}
      </div>

      <div
        style={{
          flex: 1,
          background: "var(--color-mockup-bg)",
          display: "flex",
          alignItems: screenshots.length > 0 && !url ? "stretch" : "center",
          justifyContent: "center",
          padding: 24,
          textAlign: screenshots.length > 0 && !url ? "left" : "center",
        }}
      >
        {url ? (
          <iframe
            src={url}
            title={`${systemName} ${title} demo`}
            style={{
              width: "100%",
              height: "100%",
              minHeight: 240,
              border: 0,
              borderRadius: 4,
              background: "#fff",
            }}
            loading="lazy"
          />
        ) : screenshots.length > 0 ? (
          <div style={{ width: "100%", minWidth: 0 }}>
            <ScreenshotGallery
              screenshots={screenshots}
              defaultKind={defaultKind}
              title={`${systemName} · ${title}`}
            />
          </div>
        ) : (
          <div>
            <div
              className="font-display-tight"
              style={{ fontSize: 22, color: "var(--color-muted)", marginBottom: 8 }}
            >
              Coming soon
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--color-muted-2)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {systemName} · {title.toLowerCase()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

