"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key === "Tab") {
        if (!menuRef.current) return;
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
        "button, a[href]"
      );
      firstFocusable?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/90 backdrop-blur-md">
      {/* Skip to content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-ink focus:font-mono focus:text-xs focus:rounded focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>

      <div className="max-w-[1280px] mx-auto h-14 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: MS Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          aria-label="MS - Meet Sojitra Home"
        >
          <div className="w-8 h-8 rounded border border-border bg-surface group-hover:border-accent transition-colors flex items-center justify-center font-display text-sm font-bold text-accent">
            {siteConfig.identity.monogram}
          </div>
          <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider text-text-muted group-hover:text-text transition-colors">
            {siteConfig.identity.name}
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main Navigation"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs lowercase tracking-wider text-text-muted hover:text-accent transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Availability, Resume CTA, Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Tag variant="status" pulse className="hidden lg:inline-flex">
            {siteConfig.identity.availability}
          </Tag>
          <Button
            variant="primary"
            href={siteConfig.identity.resumeUrl}
            external
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            className="h-8 min-h-[36px] px-3 text-[11px]"
          >
            Resume
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Header Controls (< md) */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 min-h-[44px] min-w-[44px] rounded border border-border bg-surface text-text hover:border-text-muted flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <X className="w-4 h-4 stroke-[1.5]" />
            ) : (
              <Menu className="w-4 h-4 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 top-14 z-50 bg-bg/95 backdrop-blur-xl border-t border-border flex flex-col justify-between p-6 md:hidden"
        >
          <div className="space-y-6 pt-2">
            <div className="pb-3 border-b border-border flex items-center justify-between">
              <Tag variant="status" pulse>
                {siteConfig.identity.availability}
              </Tag>
              <button
                type="button"
                onClick={closeMenu}
                className="font-mono text-xs text-text-muted hover:text-text flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                aria-label="Close menu"
              >
                <span>esc</span>
                <span className="text-[10px] text-text-muted/60">to close</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {siteConfig.navigation.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between font-display text-lg uppercase tracking-wider text-text hover:text-accent transition-colors py-3 border-b border-border/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-text-muted">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-border space-y-4">
            <Button
              variant="primary"
              href={siteConfig.identity.resumeUrl}
              external
              onClick={closeMenu}
              icon={<ArrowUpRight className="w-4 h-4" />}
              className="w-full justify-center"
            >
              Download Resume
            </Button>
            <div className="text-center font-mono text-[11px] text-text-muted">
              {siteConfig.identity.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
