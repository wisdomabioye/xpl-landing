import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  style,
  withTopRule = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  withTopRule?: boolean;
}) {
  return (
    <div className={cn("card", className)} style={style}>
      {children}
      {withTopRule && <span className="card-top-rule" />}
    </div>
  );
}
