import * as React from "react";
import { cn } from "@/lib/cn";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "status";
  children: React.ReactNode;
  pulse?: boolean;
}

export function Tag({
  variant = "default",
  children,
  pulse = false,
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase select-none",
        variant === "default" &&
          "border border-border bg-surface/50 text-text-muted",
        variant === "accent" &&
          "border border-accent/40 bg-accent/10 text-accent font-medium",
        variant === "status" &&
          "border border-border bg-surface text-text font-medium",
        className
      )}
      {...props}
    >
      {variant === "status" && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0",
            pulse && "animate-pulse motion-reduce:animate-none"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
