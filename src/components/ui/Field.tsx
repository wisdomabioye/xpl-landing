import type { ReactNode } from "react";

export function Field({
  label,
  required,
  children,
  htmlFor,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="field-label">
        {label}{" "}
        {required && (
          <span style={{ color: "var(--color-accent)" }} aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
