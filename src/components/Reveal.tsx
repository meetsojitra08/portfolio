"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Milliseconds delay: 0, 60, 120, 180, 240
  as?: React.ElementType;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isIntersected, setIsIntersected] = React.useState(false);
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const showContent = prefersReducedMotion || isIntersected;

  return (
    <Component
      ref={ref}
      style={{
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
      }}
      className={cn(
        "transition-all duration-400 ease-out",
        showContent
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </Component>
  );
}
