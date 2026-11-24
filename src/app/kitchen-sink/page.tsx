"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { useIsMounted } from "@/lib/hooks";
import Link from "next/link";

export default function KitchenSinkPage() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const currentTheme = mounted ? resolvedTheme || theme || "dark" : "dark";

  return (
    <main className="min-h-screen bg-bg text-text px-4 py-8 sm:px-8 sm:py-12 max-w-6xl mx-auto space-y-12">
      {/* Top Header Bar */}
      <header className="border border-border p-6 rounded-lg bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="w-10 h-10 border border-border bg-bg flex items-center justify-center font-display font-bold text-lg text-accent rounded hover:border-accent transition-colors"
            title="Back to portfolio"
          >
            {siteConfig.identity.monogram}
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-lg tracking-wider uppercase text-text">
                Design System & Primitives Harness
              </h1>
              <Tag variant="status" pulse>
                {siteConfig.identity.availability}
              </Tag>
            </div>
            <p className="text-xs text-text-muted mt-1 font-mono">
              Visual verification harness for all button states, tokens, typography & themes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="text-right">
            <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted block">
              Active Theme
            </span>
            <span className="text-xs uppercase font-mono text-accent font-medium">
              {currentTheme}
            </span>
          </div>
          <ThemeToggle />
          <Link
            href="/"
            className="font-mono text-xs text-accent hover:underline border border-border px-3 py-1.5 rounded bg-surface/50"
          >
            ← View Home
          </Link>
        </div>
      </header>

      {/* 01. CSS Token Swatches */}
      <section className="border border-border p-6 rounded-lg bg-surface/40 space-y-4">
        <SectionLabel label="design tokens" number="01" />
        <h2 className="font-display text-xl uppercase tracking-wider text-text">
          Color Tokens (CSS Variables)
        </h2>
        <p className="text-xs text-text-muted max-w-2xl font-mono">
          Colors defined in <code className="text-accent">02-DESIGN-SYSTEM.md</code>. Dark theme is default.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 pt-2">
          <div className="border border-border p-3 rounded bg-bg">
            <div className="w-full h-8 rounded border border-border bg-bg mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--bg</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "#0B0C0B" : "#EFEFE9"}
            </div>
          </div>

          <div className="border border-border p-3 rounded bg-surface">
            <div className="w-full h-8 rounded border border-border bg-surface mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--surface</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "#101210" : "#F6F6F1"}
            </div>
          </div>

          <div className="border border-border p-3 rounded bg-surface/50">
            <div className="w-full h-8 rounded border border-border bg-border mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--border</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "10% white" : "12% black"}
            </div>
          </div>

          <div className="border border-border p-3 rounded bg-surface/50">
            <div className="w-full h-8 rounded border border-border bg-text mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--text</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "#EDEDE8" : "#111211"}
            </div>
          </div>

          <div className="border border-border p-3 rounded bg-surface/50">
            <div className="w-full h-8 rounded border border-border bg-text-muted mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--text-muted</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "#8C8F88" : "#5E615B"}
            </div>
          </div>

          <div className="border border-border p-3 rounded bg-surface/50">
            <div className="w-full h-8 rounded border border-border bg-accent mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--accent</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "#B6F24A" : "#4D7400"}
            </div>
          </div>

          <div className="border border-border p-3 rounded bg-surface/50">
            <div className="w-full h-8 rounded border border-border bg-accent-ink mb-2" />
            <div className="text-[11px] font-mono text-text font-medium">--accent-ink</div>
            <div className="text-[10px] font-mono text-text-muted">
              {currentTheme === "dark" ? "#0B0C0B" : "#FFFFFF"}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Primary Juicy Button States */}
      <section className="border border-border p-6 rounded-lg bg-surface/40 space-y-6">
        <div>
          <SectionLabel label="interactive primitives" number="02" />
          <h2 className="font-display text-xl uppercase tracking-wider text-text mt-1">
            Primary Button (The &quot;Juicy&quot; System)
          </h2>
          <p className="text-xs text-text-muted max-w-2xl font-mono mt-1">
            Reserved for primary CTAs (max 2 per viewport): <code className="text-accent">Email me</code> and <code className="text-accent">Download resume</code>.
          </p>
        </div>

        {/* Live Interactive Buttons */}
        <div className="border border-border p-4 rounded bg-bg/50 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
            Live Interactive Instances
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" icon={<ArrowUpRight className="w-4 h-4" />}>
              Email me
            </Button>
            <Button
              variant="primary"
              href="/Meet-Sojitra-Resume.pdf"
              icon={<Download className="w-4 h-4" />}
            >
              Download resume
            </Button>
            <Button variant="primary" disabled icon={<ArrowUpRight className="w-4 h-4" />}>
              Disabled state
            </Button>
          </div>
        </div>

        {/* State Breakdown Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-border p-4 rounded bg-bg/30 space-y-2">
            <span className="text-[10px] uppercase font-mono text-text-muted block">1. Normal</span>
            <Button variant="primary" icon={<ArrowUpRight className="w-4 h-4" />}>
              Normal
            </Button>
          </div>

          <div className="border border-border p-4 rounded bg-bg/30 space-y-2">
            <span className="text-[10px] uppercase font-mono text-accent block">2. Hover (-1px)</span>
            <Button
              variant="primary"
              forceState="hover"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Hover
            </Button>
          </div>

          <div className="border border-border p-4 rounded bg-bg/30 space-y-2">
            <span className="text-[10px] uppercase font-mono text-text-muted block">3. Active (+1px)</span>
            <Button
              variant="primary"
              forceState="active"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Active
            </Button>
          </div>

          <div className="border border-border p-4 rounded bg-bg/30 space-y-2">
            <span className="text-[10px] uppercase font-mono text-text-muted block">4. Focus Ring</span>
            <Button
              variant="primary"
              forceState="focus"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Focus Ring
            </Button>
          </div>
        </div>
      </section>

      {/* 03. Secondary Button States */}
      <section className="border border-border p-6 rounded-lg bg-surface/40 space-y-6">
        <div>
          <SectionLabel label="secondary actions" number="03" />
          <h2 className="font-display text-xl uppercase tracking-wider text-text mt-1">
            Secondary Button System
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="secondary"
            href={siteConfig.identity.github}
            external
            icon={<GithubIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            GitHub
          </Button>
          <Button
            variant="secondary"
            href={siteConfig.identity.linkedin}
            external
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            LinkedIn
          </Button>
          <Button variant="secondary" forceState="hover">
            Hover State
          </Button>
          <Button variant="secondary" forceState="active">
            Active (+1px)
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* 04. TextLink, Tags, Section Labels */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-border p-6 rounded-lg bg-surface/40 space-y-4">
          <SectionLabel label="text links" number="04a" />
          <div className="flex flex-col gap-3 pt-2">
            <TextLink href={projects[0].live || "#"} external>
              LIVE SITE
            </TextLink>
            <TextLink href={projects[0].github || "#"} external>
              GITHUB REPO
            </TextLink>
          </div>
        </div>

        <div className="border border-border p-6 rounded-lg bg-surface/40 space-y-4">
          <SectionLabel label="tags & badges" number="04b" />
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag variant="default">FASTAPI</Tag>
            <Tag variant="default">REACT</Tag>
            <Tag variant="accent">350 MS RESPONSE</Tag>
            <Tag variant="status" pulse>
              OPEN TO FULL-TIME
            </Tag>
          </div>
        </div>

        <div className="border border-border p-6 rounded-lg bg-surface/40 space-y-4">
          <SectionLabel label="section labels" number="04c" />
          <div className="flex flex-col gap-2 pt-2">
            <SectionLabel label="selected projects" number="02" />
            <SectionLabel label="about" number="developer" />
            <SectionLabel label="skills" number="what i do" />
          </div>
        </div>
      </section>

      {/* 05. Reveal Animation */}
      <section className="border border-border p-6 rounded-lg bg-surface/40 space-y-4">
        <SectionLabel label="motion primitives" number="05" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <Reveal delay={0}>
            <div className="border border-border p-4 rounded bg-bg">
              <span className="text-accent font-display text-lg block mb-1">01</span>
              <h4 className="font-display text-sm uppercase text-text mb-1">UNDERSTAND</h4>
              <p className="text-xs text-text-muted font-mono">0ms stagger</p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="border border-border p-4 rounded bg-bg">
              <span className="text-accent font-display text-lg block mb-1">02</span>
              <h4 className="font-display text-sm uppercase text-text mb-1">DESIGN</h4>
              <p className="text-xs text-text-muted font-mono">60ms stagger</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-border p-4 rounded bg-bg">
              <span className="text-accent font-display text-lg block mb-1">03</span>
              <h4 className="font-display text-sm uppercase text-text mb-1">BUILD</h4>
              <p className="text-xs text-text-muted font-mono">120ms stagger</p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="border border-border p-4 rounded bg-bg">
              <span className="text-accent font-display text-lg block mb-1">04</span>
              <h4 className="font-display text-sm uppercase text-text mb-1">SHIP & IMPROVE</h4>
              <p className="text-xs text-text-muted font-mono">180ms stagger</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
