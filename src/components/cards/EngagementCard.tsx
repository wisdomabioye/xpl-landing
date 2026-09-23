import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { EngagementModel } from "@/config/content";

export function EngagementCard({ model, index }: { model: EngagementModel; index: number }) {
  return (
    <Reveal delay={Math.min(index * 70, 210)}>
      <article style={{ height: "100%", padding: "30px 0", borderTop: "2px solid var(--color-accent)", display: "flex", flexDirection: "column" }}>
        <span style={{ color: "var(--color-muted-2)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em" }}>
          {String(index + 1).padStart(2, "0")} · {model.startingPrice}
        </span>
        <h2 className="font-display-tight" style={{ fontSize: 34, lineHeight: 1, margin: "22px 0 14px" }}>{model.name}</h2>
        <p style={{ color: "var(--color-muted)", lineHeight: 1.65, margin: 0 }}>{model.summary}</p>
        <div style={{ margin: "28px 0", borderTop: "1px solid var(--color-rule)" }}>
          {model.idealFor.map((item) => (
            <div key={item} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 10, padding: "12px 0", borderBottom: "1px solid var(--color-rule)", color: "var(--color-muted)", fontSize: 14 }}>
              <span style={{ color: "var(--color-accent)" }}>—</span><span>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ color: "var(--color-muted-2)", fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.6, margin: "0 0 24px" }}>{model.workingRhythm}</p>
        <div style={{ marginTop: "auto" }}>
          <Button to={model.cta.to} variant="outline"><span>{model.cta.label}</span><Icon name="arrow-right" size={14} /></Button>
        </div>
      </article>
    </Reveal>
  );
}
