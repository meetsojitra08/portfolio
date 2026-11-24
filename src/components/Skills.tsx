import * as React from "react";
import { skillCategories } from "@/content/skills";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section className="border-b border-border bg-bg" id="skills">
      {/* Header Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <SectionLabel label="skills" number="what i do" />
        <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-text-muted">
          TECHNICAL TOOLKIT & ARCHITECTURE
        </span>
      </div>

      {/* Three Columns Grid */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {skillCategories.map((cat, idx) => (
          <Reveal key={cat.index} delay={idx * 60} className="h-full">
            <div className="p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-surface/20 hover:bg-surface/40 transition-colors h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-accent">
                    {cat.index}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    STACK AREA
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-wider text-text">
                  {cat.title}
                </h3>

                <p className="font-mono text-xs text-text-muted leading-relaxed md:min-h-[2.75rem]">
                  {cat.description}
                </p>
              </div>

              {/* Square Bullet List with Primary/Familiar Distinction */}
              <ul className="space-y-3 font-mono text-xs border-t border-border/60 pt-6">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-2.5">
                    <span
                      className={
                        skill.primary
                          ? "w-1.5 h-1.5 bg-accent inline-block mt-1.5 shrink-0"
                          : "w-1.5 h-1.5 border border-border inline-block mt-1.5 shrink-0 bg-surface/50"
                      }
                      aria-hidden="true"
                    />
                    <span
                      className={
                        skill.primary
                          ? "leading-relaxed text-text font-medium"
                          : "leading-relaxed text-text-muted"
                      }
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
