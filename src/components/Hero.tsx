"use client";

import * as React from "react";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { HeroTopologyBackground } from "@/components/HeroTopologyBackground";
import { cn } from "@/lib/cn";

const FULL_HEADLINE = "full-stack developer";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function HeroHeadline() {
  const prefersReducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [typedLength, setTypedLength] = React.useState(0);

  React.useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setTypedLength((prev) => {
        const next = prev + 1;
        if (next >= FULL_HEADLINE.length) {
          clearInterval(interval);
        }
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const activeLength = prefersReducedMotion ? FULL_HEADLINE.length : typedLength;
  const isFinished = prefersReducedMotion || typedLength >= FULL_HEADLINE.length;

  const visibleText = FULL_HEADLINE.slice(0, activeLength);
  const invisibleText = FULL_HEADLINE.slice(activeLength);

  return (
    <h1
      className="font-display text-[clamp(2.25rem,6.5vw,5.25rem)] uppercase leading-[1.05] tracking-tight text-text text-center select-none"
      aria-label="full-stack developer"
    >
      <span className="sr-only">full-stack developer</span>
      <span aria-hidden="true" className="inline-block">
        <span>{visibleText}</span>
        <span
          className={cn(
            "text-accent",
            isFinished ? "cursor-blink" : "opacity-100"
          )}
        >
          _
        </span>
        <span className="invisible select-none" aria-hidden="true">
          {invisibleText}
        </span>
      </span>
    </h1>
  );
}

export function Hero() {
  const heroRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    const node = heroRef.current;
    if (!node) return;

    let rafId: number | null = null;
    const onPointerMove = (e: PointerEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        node.style.setProperty("--mx", `${x}px`);
        node.style.setProperty("--my", `${y}px`);
        rafId = null;
      });
    };

    const onPointerLeave = () => {
      node.style.setProperty("--mx", "-9999px");
      node.style.setProperty("--my", "-9999px");
    };

    node.addEventListener("pointermove", onPointerMove, { passive: true });
    node.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerleave", onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative border-b border-border bg-bg overflow-hidden flex flex-col justify-between items-center min-h-[calc(100vh-56px)] min-h-[560px]"
      id="hero"
    >
      {/* Topographic Contour Background */}
      <HeroTopologyBackground />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-between items-center text-center min-w-0">
        {/* Availability Row */}
        <div className="w-full flex justify-center pt-2 sm:pt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-1.5 sm:py-2 px-3.5 sm:px-4 rounded border border-border bg-surface/80 backdrop-blur-xs font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-text-muted shadow-xs">
            <div className="flex items-center gap-1.5 text-text font-medium">
              <span
                className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse motion-reduce:animate-none shrink-0"
                aria-hidden="true"
              />
              <span>OPEN TO FULL-TIME ROLES</span>
            </div>
            <span className="text-border" aria-hidden="true">
              |
            </span>
            <div className="flex items-center gap-1">
              <span className="text-accent" aria-hidden="true">
                ⌖
              </span>
              <span>AHMEDABAD, INDIA</span>
            </div>
            <span className="text-border" aria-hidden="true">
              |
            </span>
            <span>UTC +5:30</span>
          </div>
        </div>

        {/* Center: H1 + Subhead + CTAs */}
        <div className="my-auto py-8 sm:py-12 flex flex-col items-center max-w-2xl sm:max-w-3xl space-y-6 sm:space-y-8">
          <HeroHeadline />

          <p className="font-mono text-sm sm:text-base text-text-muted max-w-[48ch] leading-relaxed mx-auto">
            {siteConfig.hero.subhead}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              href={siteConfig.hero.ctaPrimary.href}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Email me
            </Button>
            <Button
              variant="secondary"
              href={siteConfig.hero.ctaSecondary.href}
              external
              icon={<Download className="w-4 h-4" />}
            >
              Download resume
            </Button>
          </div>
        </div>

        {/* Bottom: Scroll to explore */}
        <div className="w-full flex justify-center pb-2 sm:pb-4 font-mono text-xs text-text-muted">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent py-1 px-2.5 rounded"
            aria-label="Scroll to explore selected projects"
          >
            <ArrowDown
              className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
            <span className="uppercase tracking-widest text-[11px]">
              SCROLL TO EXPLORE
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
