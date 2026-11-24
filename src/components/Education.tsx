import * as React from "react";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section className="border-b border-border bg-bg" id="education">
      {/* Header Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        <SectionLabel label="credentials" number="education & certifications" />
        <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-text-muted">
          ACADEMIC & CERTIFIED FOUNDATION
        </span>
      </div>

      {/* Compact Row */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-border bg-surface/20">
        {/* Education Cell (5 cols) */}
        <Reveal delay={0} className="md:col-span-5 h-full">
          <div className="p-6 sm:p-8 space-y-3 h-full">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="w-4 h-4 stroke-[1.5]" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                ACADEMIC DEGREE
              </span>
            </div>

            <h3 className="font-display text-lg uppercase tracking-wider text-text">
              {siteConfig.education.degree}
            </h3>

            <div className="font-mono text-xs text-text-muted space-y-1">
              <div>{siteConfig.education.institution}</div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-text font-medium">{siteConfig.education.period}</span>
                <span className="text-border">·</span>
                <span className="text-accent font-medium">{siteConfig.education.detail}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Certifications Cell (7 cols) */}
        <Reveal delay={60} className="md:col-span-7 h-full">
          <div className="p-6 sm:p-8 space-y-3 h-full">
            <div className="flex items-center gap-2 text-accent">
              <Award className="w-4 h-4 stroke-[1.5]" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                CERTIFICATIONS
              </span>
            </div>

            <ul className="space-y-2.5 font-mono text-xs text-text-muted pt-1">
              {siteConfig.certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-border/40 last:border-b-0 last:pb-0"
                >
                  <span className="text-text font-medium">{cert.title}</span>
                  <span className="text-text-muted/80 text-[11px] shrink-0">
                    {cert.issuer} · {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
