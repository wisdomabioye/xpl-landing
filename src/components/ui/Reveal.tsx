import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = window.setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, reduced]);

  return (
    <Tag ref={ref as never} className={cn("reveal", className)} style={style}>
      {children}
    </Tag>
  );
}
