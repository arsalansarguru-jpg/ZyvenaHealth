import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-xl border border-border bg-white p-6 ${className}`}
    >
      {children}
    </article>
  );
}
