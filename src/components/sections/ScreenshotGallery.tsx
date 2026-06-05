import { useState } from "react";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { Lightbox } from "@/components/ui/Lightbox";
import type { ProjectKind, Screenshot } from "@/config/content";

interface Props {
  screenshots: Screenshot[];
  /** Frame used when a screenshot has no `kind` of its own. */
  defaultKind?: ProjectKind;
  /** Context shown in the lightbox caption, e.g. "Velocity · Marketing". */
  title?: string;
  /** Height of each shot's frame area — browser and phone shots share it so mixed strips align. */
  itemHeight?: number;
}

/**
 * Horizontal scroll-snap strip of framed screenshots. Click any screenshot
 * to open it in a full-screen lightbox. Renders nothing when the list is
 * empty — callers decide their own placeholder.
 */
export function ScreenshotGallery({
  screenshots,
  defaultKind = "browser",
  title,
  itemHeight = 260,
}: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: 8,
        }}
      >
        {screenshots.map((shot, i) => {
          const kind = shot.kind ?? defaultKind;
          return (
            <button
              key={shot.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`View ${shot.label}`}
              style={{
                flex: "0 0 auto",
                width: kind === "browser" ? "min(420px, 85%)" : "auto",
                scrollSnapAlign: "start",
                background: "none",
                border: 0,
                padding: 0,
                cursor: "zoom-in",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  height: itemHeight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {kind === "browser" ? (
                  <BrowserFrame
                    title={shot.label}
                    height={itemHeight - 48}
                    image={shot.src}
                    imageAlt={shot.label}
                  />
                ) : (
                  <PhoneFrame
                    caption={shot.label}
                    height={itemHeight - 40}
                    image={shot.src}
                    imageAlt={shot.label}
                  />
                )}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-2)",
                }}
              >
                {shot.label}
              </div>
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          screenshots={screenshots}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          title={title}
        />
      )}
    </>
  );
}
