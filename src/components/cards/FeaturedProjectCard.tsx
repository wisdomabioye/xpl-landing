import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { Link } from "react-router-dom";
import type { Project } from "@/config/content";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: 16, paddingBottom: 0 }}>
        {project.kind === "browser" ? (
          <BrowserFrame title={project.domain} height={200} caption={`// ${project.slug}`} />
        ) : (
          <PhoneFrame caption={`// ${project.slug}`} height={260} />
        )}
      </div>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
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
            marginTop: 8,
            padding: 0,
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
