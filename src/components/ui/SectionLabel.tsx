import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-label">{children}</span>
    </div>
  );
}
