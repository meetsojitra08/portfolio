import * as React from "react";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="border-b border-border bg-bg" id="about">
      {/* Header Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-5 sm:py-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        <SectionLabel label="about" number="developer" />
        <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-text-muted">
          ENGINEERING ETHOS & PROFILE
        </span>
      </div>

      {/* Three-Cell Row */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border">
        {/* Cell 1: Big Quote Headline (4 cols) */}
        <Reveal delay={0} className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border h-full">
          <div className="p-6 sm:p-10 flex flex-col justify-between bg-surface/20 space-y-6 h-full">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent block">
                {"// PRINCIPLE"}
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl text-text leading-snug uppercase tracking-tight">
                &ldquo;{siteConfig.about.quote}&rdquo;
              </blockquote>
            </div>
            <div className="font-mono text-xs text-text-muted border-t border-border/40 pt-4">
              MEET SOJITRA · FULL STACK DEVELOPER
            </div>
          </div>
        </Reveal>

        {/* Cell 2: Bio + 3 Stats (5 cols) */}
        <Reveal delay={60} className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border h-full">
          <div className="p-6 sm:p-10 flex flex-col justify-between space-y-8 h-full">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                {"// BACKGROUND"}
              </span>
              <p className="font-mono text-sm sm:text-base text-text-muted leading-relaxed">
                {siteConfig.about.bio}
              </p>
            </div>

            {/* 3 Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 border-t border-border pt-6">
              {siteConfig.about.stats.map((stat) => (
                <div key={stat.label} className="border border-border/60 p-2.5 sm:p-3 rounded bg-surface/40 min-w-0">
                  <div className="font-display text-lg sm:text-2xl text-accent font-bold truncate">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-text-muted mt-1 leading-tight break-words">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cell 3: MS Monogram Tile on Dot Grid (3 cols) */}
        <Reveal delay={120} className="lg:col-span-3 h-full">
          <div className="p-6 sm:p-10 flex flex-col items-center justify-center bg-surface/30 relative overflow-hidden min-h-[300px] h-full">
            {/* Subtle Dot Grid Background */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(var(--text-muted) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
              aria-hidden="true"
            />

            {/* Monogram Card */}
            <div className="relative z-10 w-32 h-32 rounded-lg border border-border bg-bg/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center shadow-lg space-y-2">
              <div className="font-display text-4xl font-bold text-accent tracking-wider">
                {siteConfig.identity.monogram}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                AHMEDABAD, IN
              </div>
            </div>

            <div className="relative z-10 font-mono text-[10px] uppercase tracking-wider text-text-muted text-center mt-6">
              PYTHON &bull; FASTAPI &bull; REACT
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
