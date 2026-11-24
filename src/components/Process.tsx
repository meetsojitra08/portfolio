import * as React from "react";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/SectionLabel";

export function Process() {
  return (
    <section className="border-b border-border bg-bg" id="process">
      {/* Header Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <SectionLabel label="process" number="how i work" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
          ENGINEERING WORKFLOW & DELIVERY
        </span>
      </div>

      {/* Four Equal Cells */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {siteConfig.process.map((step) => (
          <div
            key={step.step}
            className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-surface/10 hover:bg-surface/30 transition-colors border-b sm:border-b-0 border-border"
          >
            <div className="space-y-3">
              <span className="font-display text-2xl text-accent block">
                {step.step}
              </span>
              <h3 className="font-display text-base uppercase tracking-wider text-text">
                {step.title}
              </h3>
            </div>

            <p className="font-mono text-xs text-text-muted leading-relaxed border-t border-border/40 pt-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
