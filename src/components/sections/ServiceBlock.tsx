import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CornerTicks } from "@/components/mockups/CornerTicks";
import type { Service } from "@/config/content";
import { cn } from "@/lib/cn";

export function ServiceBlock({ service, reverse }: { service: Service; reverse?: boolean }) {
  return (
    <Reveal>
      <div className={cn("service-block", reverse && "reverse")}>
        <div className="visual">
          <div
            style={{
              aspectRatio: "4/3",
              border: "1px solid var(--color-rule)",
              background:
                "repeating-linear-gradient(135deg, rgba(251,146,60,0.06) 0 1px, transparent 1px 14px), var(--color-bg-card)",
              position: "relative",
              display: "grid",
              placeItems: "center",
            }}
          >
            <CornerTicks />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  border: "1px solid var(--color-accent)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--color-accent)",
                }}
              >
                <Icon name={service.icon} size={28} strokeWidth={1.2} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-muted-2)",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                }}
              >
                SERVICE / {service.number}
              </div>
            </div>
          </div>
        </div>

        <div className="copy">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-accent)",
              fontSize: 11,
              letterSpacing: "0.18em",
              marginBottom: 12,
            }}
          >
            {service.number} · {service.name.toUpperCase()}
          </div>
          <h3
            className="font-display-tight"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)", margin: "0 0 16px", lineHeight: 1.05 }}
          >
            {service.name}
          </h3>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-muted)",
              fontSize: 11,
              marginBottom: 20,
              letterSpacing: "0.06em",
            }}
          >
            {service.stack}
          </div>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: 16,
              lineHeight: 1.6,
              marginBottom: 24,
              maxWidth: 560,
            }}
          >
            {service.description}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              maxWidth: 480,
            }}
          >
            {service.bullets.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
                <span style={{ color: "var(--color-accent)" }}>
                  <Icon name="check" size={14} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
