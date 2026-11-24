import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  showArrow?: boolean;
  children: React.ReactNode;
}

export function TextLink({
  href,
  external = false,
  showArrow = true,
  children,
  className,
  ...props
}: TextLinkProps) {
  const isExternal =
    external ||
    href.startsWith("http://") ||
    href.startsWith("https://");

  const classes = cn(
    "group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider",
    "text-text hover:text-accent transition-colors underline-offset-4 hover:underline decoration-accent",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className="inline-block transition-transform duration-120 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
          aria-hidden="true"
        >
          ↗
        </span>
      )}
      {isExternal && <span className="sr-only"> (opens in new tab)</span>}
    </>
  );

  if (isExternal || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
