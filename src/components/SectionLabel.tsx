import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  number?: string;
  className?: string;
}

export function SectionLabel({
  label,
  number,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <div
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
    </div>
  );
}
