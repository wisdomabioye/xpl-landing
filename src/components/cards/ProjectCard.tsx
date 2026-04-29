import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import type { Project } from "@/config/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 16, paddingBottom: 0, background: "rgba(255,255,255,0.01)" }}>
        {project.kind === "browser" ? (
          <BrowserFrame title={project.domain} height={200} caption={`// ${project.slug}`} />
        ) : (
          <PhoneFrame caption={`// ${project.slug}`} height={240} />
        )}
      </div>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Pill variant="accent">{project.category}</Pill>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-muted)",
              fontSize: 10,
            }}
          >
            {project.year}
          </span>
        </div>
        <div className="font-display-tight" style={{ fontSize: 22, lineHeight: 1.1 }}>
          {project.name}
        </div>
        <p style={{ color: "var(--color-muted)", fontSize: 14, margin: 0, lineHeight: 1.55 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {project.stack.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "auto",
              paddingTop: 16,
              color: "var(--color-accent)",
              fontSize: 13,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            View project <Icon name="arrow-up-right" size={14} />
          </a>
        ) : (
          <span
            style={{
              marginTop: "auto",
              paddingTop: 16,
              color: "var(--color-muted-2)",
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Case study on request
          </span>
        )}
      </div>
    </Card>
  );
}
