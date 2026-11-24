import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionLabelProps
  extends React.HTMLAttributes<HTMLElement> {
  label: string;
  number?: string;
  as?: "div" | "h2";
  className?: string;
}

export function SectionLabel({
  label,
  number,
  as = "h2",
  className,
  ...props
}: SectionLabelProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "flex items-center gap-2 font-mono text-xs tracking-widest text-text-muted uppercase select-none",
        className
      )}
      {...props}
    >
      <span className="text-accent font-bold" aria-hidden="true">
        —
      </span>
      <span>
        {label}
        {number ? ` / ${number}` : ""}
      </span>
    </Component>
  );
}
