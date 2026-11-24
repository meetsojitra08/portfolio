import * as React from "react";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { HeroApiPanel } from "@/components/HeroApiPanel";

export function Hero() {
  return (
    <section className="relative border-b border-border bg-bg" id="hero">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-56px)]">
        {/* Left Column (7 cols on desktop) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border space-y-10 min-w-0">
          <div className="space-y-6">
            {/* Availability Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 py-2 px-3 rounded border border-border bg-surface/60 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-text-muted w-full sm:w-fit">
              <div className="flex items-center gap-1.5 text-text font-medium">
                <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse motion-reduce:animate-none shrink-0" />
                <span>{siteConfig.identity.availability}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <span className="text-border hidden sm:inline" aria-hidden="true">|</span>
                <span className="flex items-center gap-1">
                  <span className="text-accent" aria-hidden="true">⌖</span>
                  <span>AHMEDABAD, INDIA</span>
                </span>
                <span className="text-border" aria-hidden="true">|</span>
                <span>UTC +5:30</span>
              </div>
            </div>

            {/* H1 with Blinking Underscore Cursor */}
            <div className="space-y-3">
              <h1 className="font-display text-[clamp(2.25rem,6.5vw,5.25rem)] uppercase leading-[1.05] tracking-tight text-text">
                <span className="block">full-stack</span>
                <span className="block">
                  developer
                  <span className="text-accent cursor-blink" aria-hidden="true">
                    _
                  </span>
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-text-muted max-w-xl leading-relaxed">
                {siteConfig.hero.subhead}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                href={siteConfig.hero.ctaPrimary.href}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                {siteConfig.hero.ctaPrimary.label}
              </Button>
              <Button
                variant="secondary"
                href={siteConfig.hero.ctaSecondary.href}
                external
                icon={<Download className="w-4 h-4" />}
              >
                {siteConfig.hero.ctaSecondary.label}
              </Button>
            </div>
          </div>

          {/* Bottom Scroll Cue (Desktop) */}
          <div className="hidden lg:flex pt-6 border-t border-border/40 items-center justify-between font-mono text-xs text-text-muted">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <ArrowDown className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none" />
              <span className="uppercase tracking-widest text-[11px]">
                scroll to explore
              </span>
            </a>
            <span className="hidden sm:inline-block text-[11px] text-text-muted tracking-wider">
              {siteConfig.identity.name} · PORTFOLIO 2026
            </span>
          </div>
        </div>

        {/* Right Column: HeroApiPanel (5 cols on desktop, stacks below CTAs on mobile) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-surface/20 relative overflow-hidden min-w-0">
          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none text-text-muted"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "16px 16px",
            }}
            aria-hidden="true"
          />

          {/* HeroApiPanel Component */}
          <div className="relative z-10 w-full my-auto">
            <HeroApiPanel />
          </div>

          {/* Mobile Bottom Scroll Cue */}
          <div className="lg:hidden relative z-10 pt-6 mt-4 border-t border-border/40 flex items-center justify-between font-mono text-xs text-text-muted">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <ArrowDown className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none" />
              <span className="uppercase tracking-widest text-[11px]">
                scroll to explore
              </span>
            </a>
            <span className="text-[11px] text-text-muted tracking-wider">
              {siteConfig.identity.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
