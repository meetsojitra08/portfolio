"use client";

import * as React from "react";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-bg" id="contact">
      {/* Contact CTA Section */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border">
        {/* Left / Main Column */}
        <Reveal delay={0} className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-border h-full">
          <div className="p-6 sm:p-10 lg:p-14 space-y-8 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <SectionLabel label="contact" number="let's talk" />

              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[1.08] tracking-tight text-text">
                let&apos;s build something together
                <span className="text-accent cursor-blink" aria-hidden="true">
                  _
                </span>
              </h2>

              <p className="font-mono text-sm sm:text-base text-text-muted max-w-lg leading-relaxed">
                {siteConfig.footer.subhead}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  href={`mailto:${siteConfig.identity.email}`}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Email me
                </Button>
                <span className="font-mono text-xs text-text-muted">
                  {siteConfig.identity.email}
                </span>
              </div>
            </div>

            <div className="pt-8 border-t border-border/40 font-mono text-xs text-text-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>LOCATION: {siteConfig.identity.location}</span>
              <span className="text-accent font-medium">AVAILABLE NOW</span>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Bordered Link Rows */}
        <Reveal delay={60} className="lg:col-span-5 h-full">
          <div className="p-6 sm:p-10 flex flex-col justify-between bg-surface/20 space-y-4 h-full">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block mb-4">
                Direct Connections
              </span>

              {/* GitHub Row */}
              <a
                href={siteConfig.identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded border border-border bg-surface/50 hover:border-text-muted hover:bg-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-text-muted group-hover:text-text transition-colors" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                    GitHub
                  </span>
                </div>
                <span className="font-mono text-xs text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-120 motion-reduce:transform-none">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              {/* LinkedIn Row */}
              <a
                href={siteConfig.identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded border border-border bg-surface/50 hover:border-text-muted hover:bg-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-text-muted group-hover:text-accent transition-colors">
                    in
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                    LinkedIn
                  </span>
                </div>
                <span className="font-mono text-xs text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-120 motion-reduce:transform-none">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              {/* Email Row */}
              <a
                href={`mailto:${siteConfig.identity.email}`}
                className="group flex items-center justify-between p-4 rounded border border-border bg-surface/50 hover:border-text-muted hover:bg-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Send email to ${siteConfig.identity.email}`}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-text-muted group-hover:text-text transition-colors stroke-[1.5]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                    Email
                  </span>
                </div>
                <span className="font-mono text-xs text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-120 motion-reduce:transform-none">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-text-muted">
        <div>{siteConfig.footer.copyright}</div>
        <div className="text-[11px] text-text-muted">
          {siteConfig.footer.builtWith}
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 uppercase tracking-wider hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent p-1"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 stroke-[1.5]" />
        </button>
      </div>
    </footer>
  );
}
