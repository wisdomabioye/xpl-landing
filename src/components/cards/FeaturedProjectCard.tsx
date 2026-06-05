import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { Link } from "react-router-dom";
import type { Project } from "@/config/content";

// Matches ProjectCard so featured and portfolio cards share preview height.
const PREVIEW_HEIGHT = 280;

export function FeaturedProjectCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  const cover = project.image ?? project.screenshots?.[0]?.src;
  return (
    <Card style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 16, paddingBottom: 0 }}>
        <div
          style={{
            height: PREVIEW_HEIGHT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {project.kind === "browser" ? (
            <BrowserFrame
              title={project.domain}
              height={PREVIEW_HEIGHT - 48}
              caption={`// ${project.slug}`}
              image={cover}
              imageAlt={`${project.name} — ${project.description}`}
              eager={eager}
            />
          ) : (
            <PhoneFrame
              caption={`// ${project.slug}`}
              height={PREVIEW_HEIGHT - 40}
              image={cover}
              imageAlt={`${project.name} — ${project.description}`}
              eager={eager}
            />
          )}
        </div>
      </div>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="font-display-tight" style={{ fontSize: 22 }}>
            {project.name}
          </div>
          <Pill variant="accent">{project.category}</Pill>
        </div>
        <p style={{ color: "var(--color-muted)", fontSize: 14, margin: 0 }}>
          {project.description}
        </p>
        <Link
          to="/portfolio"
          style={{
            marginTop: "auto",
            padding: 0,
            paddingTop: 8,
            alignSelf: "start",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--color-accent)",
            fontSize: 13,
          }}
        >
          View case study <Icon name="arrow-up-right" size={14} />
        </Link>
      </div>
    </Card>
  );
}
