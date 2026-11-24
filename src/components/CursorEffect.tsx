"use client";

import * as React from "react";

function subscribePointerAndMotion(callback: () => void) {
  const pointerMql = window.matchMedia("(pointer: fine)");
  const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

  pointerMql.addEventListener("change", callback);
  motionMql.addEventListener("change", callback);

  return () => {
    pointerMql.removeEventListener("change", callback);
    motionMql.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return hasFinePointer && !prefersReducedMotion;
}

function getServerSnapshot() {
  return false;
}

export function CursorEffect() {
  const isEnabled = React.useSyncExternalStore(
    subscribePointerAndMotion,
    getSnapshot,
    getServerSnapshot
  );

  const [visible, setVisible] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isClicking, setIsClicking] = React.useState(false);

  const ringRef = React.useRef<HTMLDivElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);
  const spotlightRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isEnabled) return;

    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let rafId: number | null = null;
    let isMoving = false;

    const updatePosition = () => {
      // Smooth lerp (linear interpolation) for trailing ring
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.18;
      currentY += dy * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--cursor-x", `${currentX}px`);
        spotlightRef.current.style.setProperty("--cursor-y", `${currentY}px`);
      }

      // Continue animation until at rest to save 100% CPU when stationary
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        isMoving = false;
        rafId = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      setVisible(true);

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select, label")
        );
        setIsHovering(interactive);
      }

      // Initialize position on first move
      if (currentX < -1000) {
        currentX = targetX;
        currentY = targetY;
      }

      // Wake up animation loop
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Ambient Radial Spotlight following cursor across all sections */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none select-none z-30 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(550px circle at var(--cursor-x, -9999px) var(--cursor-y, -9999px), var(--accent) 0%, transparent 65%)",
          opacity: 0.045,
        }}
      />

      {/* Trailing Luminous Accent Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none select-none z-50 transition-[width,height,margin,border-color,background-color,box-shadow,opacity] duration-150 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          isHovering
            ? "w-11 h-11 -ml-[22px] -mt-[22px] rounded-full border border-accent/70 bg-accent/[0.12] shadow-[0_0_16px_rgba(182,242,74,0.2)]"
            : isClicking
            ? "w-6 h-6 -ml-3 -mt-3 rounded-full border border-accent/80 bg-accent/[0.08]"
            : "w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border border-accent/40 bg-accent/[0.03]"
        }`}
      />

      {/* Instant Central Accent Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none select-none z-50 -ml-1 -mt-1 w-2 h-2 rounded-full bg-accent transition-opacity duration-150 ${
          visible ? (isHovering ? "opacity-30" : "opacity-90") : "opacity-0"
        }`}
      />
    </>
  );
}
