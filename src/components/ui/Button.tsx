import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  forceState?: "normal" | "hover" | "active" | "focus";
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      href,
      external,
      icon,
      iconPosition = "right",
      children,
      className,
      disabled,
      forceState,
      ...props
    },
    ref
  ) => {
    const isPrimary = variant === "primary";

    const baseClasses = cn(
      "group inline-flex items-center justify-center gap-2",
      "h-11 min-h-[44px] min-w-[44px] px-5 rounded-lg",
      "font-mono text-xs uppercase tracking-wider font-medium select-none",
      "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      isPrimary ? "btn-juicy-primary" : "btn-secondary",
      forceState === "hover" &&
        (isPrimary ? "btn-juicy-hover" : "btn-secondary-hover"),
      forceState === "active" &&
        (isPrimary ? "btn-juicy-active" : "btn-secondary-active"),
      forceState === "focus" &&
        "ring-2 ring-accent ring-offset-2 ring-offset-bg",
      className
    );

    const renderedIcon = icon && (
      <span
        className={cn(
          "inline-flex items-center shrink-0 transition-transform duration-120 motion-reduce:transform-none",
          isPrimary &&
            iconPosition === "right" &&
            "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          forceState === "hover" &&
            isPrimary &&
            iconPosition === "right" &&
            "translate-x-0.5 -translate-y-0.5"
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
    );

    const content = (
      <>
        {icon && iconPosition === "left" && renderedIcon}
        <span>{children}</span>
        {icon && iconPosition === "right" && renderedIcon}
      </>
    );

    if (href && !disabled) {
      const isExternal =
        external || href.startsWith("http") || href.startsWith("mailto:");

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={baseClasses}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={props["aria-label"]}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          aria-label={props["aria-label"]}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={props.type || "button"}
        disabled={disabled}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
