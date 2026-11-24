"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/content/site";
import { coreStack } from "@/content/skills";
import { projects } from "@/content/projects";

export function HeroApiPanel() {
  const [copied, setCopied] = React.useState(false);

  const rawJson = React.useMemo(() => {
    return JSON.stringify(
      {
        name: siteConfig.identity.name,
        title: siteConfig.identity.title,
        location: siteConfig.identity.city,
        status: siteConfig.identity.availability,
        email: siteConfig.identity.email,
        stack: coreStack,
        projects: projects.map((p) => p.name),
      },
      null,
      2
    );
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for older browsers or restricted clipboard permissions
      const textarea = document.createElement("textarea");
      textarea.value = rawJson;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {}
      document.body.removeChild(textarea);
    }
  };

  return (
    <div
      role="group"
      aria-label="Developer profile as JSON"
      className="w-full rounded-lg border border-border bg-surface/90 backdrop-blur-xs overflow-hidden shadow-none my-auto"
    >
      {/* Terminal Window Header Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-border bg-bg/60 select-none">
        {/* 3 Hairline Window Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full border border-border/80 bg-surface/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full border border-border/80 bg-surface/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full border border-border/80 bg-surface/80 inline-block" />
        </div>

        {/* Window Title */}
        <div className="font-mono text-[11px] sm:text-xs text-text-muted font-medium tracking-wider flex items-center gap-1.5">
          <span className="text-accent font-semibold">GET</span>
          <span>/developer</span>
        </div>

        {/* COPY JSON Secondary Button (min-h-[44px] touch target on mobile) */}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 min-h-[44px] min-w-[44px] sm:min-h-[32px] sm:min-w-0 rounded border border-border bg-transparent text-text font-mono text-[11px] uppercase tracking-wider hover:border-text-muted hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={copied ? "JSON copied to clipboard" : "Copy developer profile JSON"}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
              <span className="text-accent font-medium">COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-text-muted shrink-0" aria-hidden="true" />
              <span>COPY JSON</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-hidden">
        {/* Request Line & Response Status */}
        <div className="pb-3 mb-3 border-b border-border/40 text-[11px] sm:text-xs space-y-1 select-none">
          <div className="text-text-muted">
            <span className="text-accent" aria-hidden="true">&gt; </span>
            <span>GET /developer HTTP/1.1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent" aria-hidden="true">&lt; </span>
            <span className="text-text-muted">HTTP/1.1</span>
            <span className="text-accent font-semibold">200 OK</span>
          </div>
        </div>

        {/* Pretty-printed JSON with CSS Reveal */}
        <div className="api-panel-reveal">
          <pre className="font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap break-words text-text">
            <code>
              <span className="text-text-muted">&#123;</span>
              {"\n  "}
              <span className="text-text-muted">&quot;name&quot;</span>
              <span className="text-text-muted">: </span>
              <span className="text-text">&quot;{siteConfig.identity.name}&quot;</span>
              <span className="text-text-muted">,</span>
              {"\n  "}
              <span className="text-text-muted">&quot;title&quot;</span>
              <span className="text-text-muted">: </span>
              <span className="text-text">&quot;{siteConfig.identity.title}&quot;</span>
              <span className="text-text-muted">,</span>
              {"\n  "}
              <span className="text-text-muted">&quot;location&quot;</span>
              <span className="text-text-muted">: </span>
              <span className="text-text">&quot;{siteConfig.identity.city}&quot;</span>
              <span className="text-text-muted">,</span>
              {"\n  "}
              <span className="text-text-muted">&quot;status&quot;</span>
              <span className="text-text-muted">: </span>
              <span className="text-accent font-medium">&quot;{siteConfig.identity.availability}&quot;</span>
              <span className="text-text-muted">,</span>
              {"\n  "}
              <span className="text-text-muted">&quot;email&quot;</span>
              <span className="text-text-muted">: </span>
              <a
                href={`mailto:${siteConfig.identity.email}`}
                className="text-text underline underline-offset-2 decoration-border hover:decoration-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-xs"
              >
                &quot;{siteConfig.identity.email}&quot;
              </a>
              <span className="text-text-muted">,</span>
              {"\n  "}
              <span className="text-text-muted">&quot;stack&quot;</span>
              <span className="text-text-muted">: [</span>
              {"\n"}
              {coreStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  {"    "}
                  <span className="text-text">&quot;{tech}&quot;</span>
                  {idx < coreStack.length - 1 && <span className="text-text-muted">,</span>}
                  {"\n"}
                </React.Fragment>
              ))}
              {"  "}
              <span className="text-text-muted">],</span>
              {"\n  "}
              <span className="text-text-muted">&quot;projects&quot;</span>
              <span className="text-text-muted">: [</span>
              {"\n"}
              {projects.map((project, idx) => (
                <React.Fragment key={project.id}>
                  {"    "}
                  <a
                    href="#projects"
                    className="text-text underline underline-offset-2 decoration-border hover:decoration-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-xs"
                  >
                    &quot;{project.name}&quot;
                  </a>
                  {idx < projects.length - 1 && <span className="text-text-muted">,</span>}
                  {"\n"}
                </React.Fragment>
              ))}
              {"  "}
              <span className="text-text-muted">]</span>
              {"\n"}
              <span className="text-text-muted">&#125;</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
