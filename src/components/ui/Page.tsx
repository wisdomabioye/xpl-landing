import type { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <main className="page-fade">{children}</main>;
}
