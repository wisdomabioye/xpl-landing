import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Pill({
  children,
  variant = "outline",
  className,
}: {
  children: ReactNode;
  variant?: "outline" | "accent";
  className?: string;
}) {
  return (
    <span className={cn("pill", variant === "accent" && "pill-accent", className)}>
      {children}
    </span>
  );
}
