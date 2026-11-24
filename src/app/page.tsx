import * as React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/ui/Tag";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-accent-ink flex flex-col">
      {/* Sticky Header with Mobile Nav */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Placeholder Shell for Projects (Built in Phase 3) */}
        <section
          id="projects"
          className="border-b border-border py-16 sm:py-24 px-4 sm:px-8 max-w-[1280px] mx-auto space-y-4"
        >
          <div className="flex items-center justify-between">
            <SectionLabel label="selected projects" number="02" />
            <Tag variant="default">Phase 3</Tag>
          </div>
          <div className="border border-dashed border-border rounded-lg p-8 sm:p-12 text-center bg-surface/20">
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Projects Section Shell · PickWise & BugSence will be implemented in Phase 3
            </p>
          </div>
        </section>

        {/* Placeholder Shell for About (Built in Phase 4) */}
        <section
          id="about"
          className="border-b border-border py-16 sm:py-24 px-4 sm:px-8 max-w-[1280px] mx-auto space-y-4"
        >
          <div className="flex items-center justify-between">
            <SectionLabel label="about" number="developer" />
            <Tag variant="default">Phase 4</Tag>
          </div>
          <div className="border border-dashed border-border rounded-lg p-8 sm:p-12 text-center bg-surface/20">
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              About Section Shell · Bio, stats & monogram tile will be implemented in Phase 4
            </p>
          </div>
        </section>

        {/* Placeholder Shell for Skills (Built in Phase 4) */}
        <section
          id="skills"
          className="border-b border-border py-16 sm:py-24 px-4 sm:px-8 max-w-[1280px] mx-auto space-y-4"
        >
          <div className="flex items-center justify-between">
            <SectionLabel label="skills" number="what i do" />
            <Tag variant="default">Phase 4</Tag>
          </div>
          <div className="border border-dashed border-border rounded-lg p-8 sm:p-12 text-center bg-surface/20">
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Skills Section Shell · Backend, Frontend, Data & Tools will be implemented in Phase 4
            </p>
          </div>
        </section>

        {/* Placeholder Shell for Experience (Built in Phase 4) */}
        <section
          id="experience"
          className="border-b border-border py-16 sm:py-24 px-4 sm:px-8 max-w-[1280px] mx-auto space-y-4"
        >
          <div className="flex items-center justify-between">
            <SectionLabel label="experience" number="where i've worked" />
            <Tag variant="default">Phase 4</Tag>
          </div>
          <div className="border border-dashed border-border rounded-lg p-8 sm:p-12 text-center bg-surface/20">
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Experience Section Shell · Mantham Technologies & Essence Solusoft timelines will be implemented in Phase 4
            </p>
          </div>
        </section>
      </main>

      {/* Footer / Contact CTA */}
      <Footer />
    </div>
  );
}
