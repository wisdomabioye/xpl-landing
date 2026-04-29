import type { ReactNode } from "react";

interface Props {
  title?: string;
  caption?: string;
  height?: number;
  children?: ReactNode;
}

export function BrowserFrame({
  title = "preview.xpldevelopers.com",
  caption,
  height = 280,
  children,
}: Props) {
  return (
    <div
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ width: 8, height: 8, borderRadius: 99, background: "#553623" }}
          />
        ))}
        <div
          style={{
            flex: 1,
            marginLeft: 12,
            padding: "4px 10px",
            background: "rgba(255,255,255,0.03)",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--color-muted-2)",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height,
          background:
            "repeating-linear-gradient(135deg, rgba(251,146,60,0.05) 0 1px, transparent 1px 14px), var(--color-bg)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {children ?? (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-muted-2)",
            }}
          >
            {caption ?? "// project mockup"}
          </div>
        )}
      </div>
    </div>
  );
}
