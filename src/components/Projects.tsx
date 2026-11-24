import * as React from "react";
import { projects, allProjectsUrl } from "@/content/projects";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section className="border-b border-border bg-bg" id="projects">
      {/* Section Header Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <SectionLabel label="selected projects" number="02" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
          02 AI-POWERED PLATFORMS · VERIFIED METRICS
        </span>
      </div>

      {/* Projects Rows Container */}
      <div className="max-w-[1280px] mx-auto">
        {projects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 60}>
            <ProjectRow
              index={project.index}
              title={project.title}
              description={project.description}
              highlight={project.highlight}
              tags={project.tags}
              image={project.image}
              live={project.live}
              github={project.github}
              flip={idx % 2 === 1}
            />
          </Reveal>
        ))}
      </div>

      {/* Bottom Bar: View All Projects */}
      <div className="max-w-[1280px] mx-auto p-6 sm:p-8 flex items-center justify-center sm:justify-between bg-surface/20">
        <span className="hidden sm:inline-block font-mono text-xs text-text-muted">
          Interested in more repositories & tools?
        </span>
        <Button
          variant="secondary"
          href={allProjectsUrl}
          external
          icon={<ArrowUpRight className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          VIEW ALL PROJECTS
        </Button>
      </div>
    </section>
  );
}
