import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Screenshot } from "@/config/content";

interface Props {
  screenshots: Screenshot[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  /** Context shown above the caption, e.g. the project or system name. */
  title?: string;
}

/** Full-screen screenshot viewer with keyboard navigation (Esc / ← / →). */
export function Lightbox({ screenshots, index, onIndexChange, onClose, title }: Props) {
  const count = screenshots.length;
  const current = screenshots[index];

  const prev = useCallback(
    () => onIndexChange((index - 1 + count) % count),
    [index, count, onIndexChange],
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % count),
    [index, count, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  if (!current) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title ? `${title} — ` : ""}${current.label}`}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "56px 16px 24px",
      }}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        style={lightboxButtonStyle({ top: 16, right: 16 })}
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            style={lightboxButtonStyle({ left: 16, top: "50%", transform: "translateY(-50%)" })}
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            style={lightboxButtonStyle({ right: 16, top: "50%", transform: "translateY(-50%)" })}
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </>
      )}

      <img
        src={current.src}
        alt={current.label}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "min(1200px, 100%)",
          maxHeight: "calc(100vh - 160px)",
          objectFit: "contain",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "var(--color-mockup-bg)",
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: 16,
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-muted)",
        }}
      >
        {title && <span style={{ color: "var(--color-muted-2)" }}>{title} · </span>}
        {current.label}
        {count > 1 && (
          <span style={{ color: "var(--color-muted-2)" }}>
            {" "}
            · {index + 1}/{count}
          </span>
        )}
      </div>
    </div>,
    document.body,
  );
}

function lightboxButtonStyle(position: React.CSSProperties): React.CSSProperties {
  return {
    position: "absolute",
    ...position,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 99,
    color: "var(--color-text)",
    cursor: "pointer",
  };
}
