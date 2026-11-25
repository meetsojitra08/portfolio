"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { siteConfig } from "@/content/site";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function ApiPanel() {
  const [copied, setCopied] = React.useState(false);
  const totalLines = 18;

  const prefersReducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [typedLines, setTypedLines] = React.useState(0);

  const developerJsonData = React.useMemo(
    () => ({
      name: siteConfig.identity.name,
      role: siteConfig.identity.title,
      location: siteConfig.identity.city,
      experience: "1 year",
      stack: {
        backend: ["Python", "Django", "FastAPI", "Ruby on Rails"],
        frontend: ["React", "TypeScript"],
        data: ["PostgreSQL", "Redis"],
      },
      projects: ["PickWise", "BugSense"],
      status: "open_to_full_time_roles",
      contact: siteConfig.identity.email,
    }),
    []
  );

  const rawJsonString = React.useMemo(() => {
    return JSON.stringify(developerJsonData, null, 2);
  }, [developerJsonData]);

  React.useEffect(() => {
    if (prefersReducedMotion) return;

    let line = 0;
    const interval = setInterval(() => {
      line += 1;
      setTypedLines(line);
      if (line >= totalLines) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, totalLines]);

  const revealedLines = prefersReducedMotion ? totalLines : typedLines;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(rawJsonString);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = rawJsonString;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full rounded border border-border bg-bg overflow-hidden shadow-md font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border bg-surface/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
          <span className="text-accent font-semibold ml-1">GET</span>
          <span className="text-text font-medium">/developer</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-text-muted text-[11px] hidden sm:inline">
            HTTP/1.1 200 OK
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-border bg-surface hover:border-text-muted text-text-muted hover:text-text transition-colors text-[11px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer"
            aria-label="Copy JSON representation to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-accent" />
                <span className="text-accent font-medium">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>COPY JSON</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Display Area */}
      <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed select-text min-h-[360px]">
        <pre className="font-mono text-xs text-text-muted">
          <code>
            {revealedLines >= 1 && <div>&#123;</div>}
            {revealedLines >= 2 && (
              <div className="pl-4">
                <span className="text-text">&quot;name&quot;</span>:{" "}
                <span className="text-accent">&quot;{developerJsonData.name}&quot;</span>,
              </div>
            )}
            {revealedLines >= 3 && (
              <div className="pl-4">
                <span className="text-text">&quot;role&quot;</span>:{" "}
                <span className="text-accent">&quot;{developerJsonData.role}&quot;</span>,
              </div>
            )}
            {revealedLines >= 4 && (
              <div className="pl-4">
                <span className="text-text">&quot;location&quot;</span>:{" "}
                <span className="text-accent">&quot;{developerJsonData.location}&quot;</span>,
              </div>
            )}
            {revealedLines >= 5 && (
              <div className="pl-4">
                <span className="text-text">&quot;experience&quot;</span>:{" "}
                <span className="text-accent">&quot;{developerJsonData.experience}&quot;</span>,
              </div>
            )}
            {revealedLines >= 6 && (
              <div className="pl-4">
                <span className="text-text">&quot;stack&quot;</span>: &#123;
              </div>
            )}
            {revealedLines >= 7 && (
              <div className="pl-8">
                <span className="text-text">&quot;backend&quot;</span>: [
                {developerJsonData.stack.backend.map((item, i, arr) => (
                  <React.Fragment key={item}>
                    <span className="text-accent">&quot;{item}&quot;</span>
                    {i < arr.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                ],
              </div>
            )}
            {revealedLines >= 8 && (
              <div className="pl-8">
                <span className="text-text">&quot;frontend&quot;</span>: [
                {developerJsonData.stack.frontend.map((item, i, arr) => (
                  <React.Fragment key={item}>
                    <span className="text-accent">&quot;{item}&quot;</span>
                    {i < arr.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                ],
              </div>
            )}
            {revealedLines >= 9 && (
              <div className="pl-8">
                <span className="text-text">&quot;data&quot;</span>: [
                {developerJsonData.stack.data.map((item, i, arr) => (
                  <React.Fragment key={item}>
                    <span className="text-accent">&quot;{item}&quot;</span>
                    {i < arr.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                ]
              </div>
            )}
            {revealedLines >= 10 && <div className="pl-4">&#125;,</div>}
            {revealedLines >= 11 && (
              <div className="pl-4">
                <span className="text-text">&quot;projects&quot;</span>: [
              </div>
            )}
            {revealedLines >= 12 && (
              <div className="pl-8">
                <a
                  href="#projects"
                  className="text-accent hover:underline underline-offset-2 decoration-accent/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                  title="View PickWise project"
                >
                  &quot;PickWise&quot;
                </a>
                ,
              </div>
            )}
            {revealedLines >= 13 && (
              <div className="pl-8">
                <a
                  href="#projects"
                  className="text-accent hover:underline underline-offset-2 decoration-accent/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                  title="View BugSense project"
                >
                  &quot;BugSense&quot;
                </a>
              </div>
            )}
            {revealedLines >= 14 && <div className="pl-4">],</div>}
            {revealedLines >= 15 && (
              <div className="pl-4">
                <span className="text-text">&quot;status&quot;</span>:{" "}
                <span className="text-accent">&quot;{developerJsonData.status}&quot;</span>,
              </div>
            )}
            {revealedLines >= 16 && (
              <div className="pl-4">
                <span className="text-text">&quot;contact&quot;</span>:{" "}
                <a
                  href={`mailto:${developerJsonData.contact}`}
                  className="text-accent hover:underline underline-offset-2 decoration-accent/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                  title="Send email"
                >
                  &quot;{developerJsonData.contact}&quot;
                </a>
              </div>
            )}
            {revealedLines >= 17 && <div>&#125;</div>}
          </code>
        </pre>
      </div>
    </div>
  );
}
