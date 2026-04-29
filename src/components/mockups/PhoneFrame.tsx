import type { ReactNode } from "react";

export function PhoneFrame({
  caption,
  height = 380,
  children,
  image,
  imageAlt,
  eager = false,
}: {
  caption?: string;
  height?: number;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  eager?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: 200,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "var(--color-mockup-bg)",
          padding: "8px 8px 14px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 60,
            height: 4,
            background: "var(--color-mockup-chrome)",
            margin: "0 auto 8px",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            height,
            overflow: "hidden",
            background: image
              ? "var(--color-mockup-bg)"
              : "repeating-linear-gradient(135deg, rgba(251,146,60,0.06) 0 1px, transparent 1px 14px), var(--color-mockup-bg)",
            display: "grid",
            placeItems: "center",
            position: "relative",
          }}
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt ?? caption ?? "Mobile app screenshot"}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          ) : (
            children ?? (
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-2)",
                  transform: "rotate(-90deg)",
                  whiteSpace: "nowrap",
                }}
              >
                {caption ?? "// app mockup"}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
