import * as React from "react";
import { experiences } from "@/content/experience";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section className="border-b border-border bg-bg" id="experience">
      {/* Header Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <SectionLabel label="experience" number="where i've worked" />
        <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-text-muted">
          Work history
        </span>
      </div>

      {/* Experience Rows */}
      <div className="max-w-[1280px] mx-auto divide-y divide-border">
        {experiences.map((exp, idx) => (
          <Reveal key={exp.id} delay={idx * 60}>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px] bg-surface/10 hover:bg-surface/20 transition-colors"
            >
              {/* Left Column: Company, Role, Dates, Location (4 cols) */}
              <div className="lg:col-span-4 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent block">
                    {exp.type}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-text">
                    {exp.company}
                  </h3>
                  <div className="font-mono text-sm text-text font-medium">
                    {exp.role}
                  </div>
                </div>

                <div className="space-y-1 font-mono text-xs text-text-muted border-t border-border/40 pt-4">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              {/* Right Column: Bullets (8 cols) */}
              <div className="lg:col-span-8 p-6 sm:p-10 flex items-center">
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-text-muted">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 bg-accent inline-block mt-2 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed text-text/90">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
