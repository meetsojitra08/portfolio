import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/SectionLabel";

export function Hero() {
  const pickwise = projects[0];

  return (
    <section className="relative border-b border-border bg-bg overflow-x-hidden" id="hero">
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

          {/* Bottom Scroll Cue */}
          <div className="pt-6 border-t border-border/40 flex items-center justify-between font-mono text-xs text-text-muted">
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

        {/* Right Column: Featured Project Card (PickWise) (5 cols on desktop) */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-surface/30 space-y-6 min-w-0">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <SectionLabel label="featured project" number="01" />
              <Tag variant="accent" className="self-start sm:self-auto shrink-0">
                {pickwise.highlight || "~350 ms recommendations"}
              </Tag>
            </div>

            <div className="border border-border rounded-lg bg-surface/80 p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl uppercase tracking-wider text-text">
                    {pickwise.title}
                  </h2>
                  <p className="font-mono text-xs text-text-muted mt-1 leading-relaxed line-clamp-3">
                    {pickwise.description}
                  </p>
                </div>
              </div>

              {/* Project Image Frame (16:10 aspect ratio) */}
              <div className="relative aspect-[16/10] w-full rounded border border-border bg-bg overflow-hidden group hover:border-text-muted transition-colors">
                {pickwise.image ? (
                  <Image
                    src={pickwise.image}
                    alt="PickWise AI product decision platform preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                  />
                ) : (
                  <div className="absolute inset-0 p-4 flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center justify-between text-[10px] text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        LIVE DECISION MATRIX
                      </span>
                      <span>AI VERIFIED</span>
                    </div>

                    <div className="space-y-2 text-center py-4">
                      <div className="font-display text-lg text-accent uppercase tracking-wider">
                        PICKWISE
                      </div>
                      <div className="text-[11px] text-text-muted font-mono">
                        Query → DB Verified Side-by-Side Comparisons
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-accent">
                      <span>FASTAPI / REACT</span>
                      <span>~350 MS RESPONSE</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pickwise.tags.map((tag) => (
                  <Tag key={tag} variant="default">
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* 3-item Meta Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-border/60 pt-3 text-center font-mono text-[10px] uppercase tracking-wider">
                <div className="sm:border-r border-border/60 sm:pr-2 flex sm:block justify-between items-center py-1 sm:py-0 border-b sm:border-b-0 border-border/40">
                  <span className="text-text-muted block text-[9px]">ROLE</span>
                  <span className="text-text font-medium truncate block">
                    {pickwise.featuredMeta?.role || "Full-stack"}
                  </span>
                </div>
                <div className="sm:border-r border-border/60 sm:pr-2 flex sm:block justify-between items-center py-1 sm:py-0 border-b sm:border-b-0 border-border/40">
                  <span className="text-text-muted block text-[9px]">STACK</span>
                  <span className="text-text font-medium truncate block">FastAPI / React</span>
                </div>
                <div className="flex sm:block justify-between items-center py-1 sm:py-0">
                  <span className="text-text-muted block text-[9px]">STATUS</span>
                  <span className="text-accent font-medium truncate block">
                    ● {pickwise.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Link Row */}
          <div className="flex items-center justify-between pt-2">
            <TextLink href={pickwise.live || "#"} external>
              VIEW PROJECT
            </TextLink>
            <TextLink href={pickwise.github || "#"} external>
              GITHUB
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
