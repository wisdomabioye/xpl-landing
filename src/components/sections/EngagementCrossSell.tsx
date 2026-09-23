import { EngagementCard } from "@/components/cards/EngagementCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { engagementModels, type EngagementModelId } from "@/config/content";

export function EngagementCrossSell({ exclude, limit = 2 }: { exclude: EngagementModelId; limit?: number }) {
  const alternatives = engagementModels.filter((model) => model.id !== exclude).slice(0, limit);
  return (
    <section className="section" style={{ borderTop: "1px solid var(--color-rule)" }}>
      <div className="wrap">
        <Reveal><SectionLabel>Other ways to work together</SectionLabel></Reveal>
        <h2 className="font-display-tight" style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "14px 0 30px" }}>A different problem may need a different shape.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px 40px" }}>
          {alternatives.map((model, index) => <EngagementCard key={model.id} model={model} index={index} />)}
        </div>
      </div>
    </section>
  );
}
