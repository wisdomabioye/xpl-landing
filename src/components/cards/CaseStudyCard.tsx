import { Link } from "react-router-dom";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import type { CaseStudy } from "@/config/content";

export function CaseStudyCard({ study, eager = false }: { study: CaseStudy; eager?: boolean }) {
  const cover = study.gallery[0];
  const kind = cover?.kind ?? "browser";

  return (
    <Card style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
      {cover && (
        <div style={{ padding: 16, paddingBottom: 0, height: 280, overflow: "hidden", display: "grid", placeItems: "center" }}>
          {kind === "browser" ? (
            <BrowserFrame
              title={study.domain ?? study.name}
              height={232}
              caption={`// ${study.slug}`}
              image={cover.src}
              imageAlt={cover.label}
              eager={eager}
            />
          ) : (
            <PhoneFrame
              height={240}
              caption={`// ${study.slug}`}
              image={cover.src}
              imageAlt={cover.label}
              eager={eager}
            />
          )}
        </div>
      )}
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <Pill variant="accent">{study.category}</Pill>
          <span style={{ color: "var(--color-muted-2)", fontFamily: "var(--font-mono)", fontSize: 10 }}>
            {study.timeline}
          </span>
        </div>
        <h2 className="font-display-tight" style={{ fontSize: 30, lineHeight: 1, margin: "4px 0 0" }}>
          {study.name}
        </h2>
        <p style={{ color: "var(--color-muted)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
          {study.summary}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {study.stack.map((technology) => <Pill key={technology}>{technology}</Pill>)}
        </div>
        <Link
          to={`/work/${study.slug}`}
          style={{ marginTop: "auto", paddingTop: 12, color: "var(--color-accent)", fontSize: 13, display: "inline-flex", gap: 7, alignItems: "center" }}
        >
          Read case study <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </Card>
  );
}
