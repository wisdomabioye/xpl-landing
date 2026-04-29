import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import type { DesignSystem, SystemStatus } from "@/config/content";

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

export function SystemCard({ system }: { system: DesignSystem }) {
  return (
    <Card
      withTopRule
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Link
        to={`/systems/${system.slug}`}
        style={{
          color: "inherit",
          textDecoration: "none",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flex: 1,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Pill variant="accent">Phase {system.phase}</Pill>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: statusColor[system.status],
            }}
          >
            {statusLabel[system.status]}
          </span>
        </div>

        <div className="font-display-tight" style={{ fontSize: 32, lineHeight: 1 }}>
          {system.name}
        </div>

        <p
          style={{
            color: "var(--color-text)",
            fontSize: 14,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {system.aesthetic}
        </p>

        <p
          style={{
            color: "var(--color-muted)",
            fontSize: 13,
            margin: 0,
            lineHeight: 1.55,
          }}
        >
          {system.audience}
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            paddingTop: 12,
            borderTop: "1px solid var(--color-rule)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--color-muted-2)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>{system.screenCount} screens</span>
          <span>·</span>
          <span>{system.componentCount} components</span>
          <span>·</span>
          <span>{system.themes.length} themes</span>
        </div>

        <span
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
          Explore {system.name} <Icon name="arrow-up-right" size={14} />
        </span>
      </Link>
    </Card>
  );
}
