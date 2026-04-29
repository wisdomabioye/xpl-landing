import { Reveal } from "@/components/ui/Reveal";
import type { ProcessStep } from "@/config/content";

export function ProcessTimeline({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <div className="process-timeline">
      {steps.map((s, i) => (
        <Reveal key={s.number} delay={i * 100}>
          <div className="process-step">
            <div className="process-num">
              <span>{s.number}</span>
              {i < steps.length - 1 && <div className="process-connector" />}
            </div>
            <div className="font-display-tight" style={{ fontSize: 22, marginTop: 16, marginBottom: 8 }}>
              {s.title}
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: 13, margin: 0 }}>{s.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
