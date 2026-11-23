import Lenis from 'lenis';

export type LenisInstance = Lenis | null;

let lenisInstance: LenisInstance = null;

/**
 * Initializes Lenis smooth scrolling.
 * Automatically respects prefers-reduced-motion.
 */
export function initSmoothScroll(): () => void {
  // If user prefers reduced motion or window is undefined, don't initialize smooth scrolling
  if (typeof window === 'undefined') return () => {};

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return () => {};
  }

  // Destroy previous instance if any
  if (lenisInstance) {
    lenisInstance.destroy();
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
  });

  lenisInstance = lenis;

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenisInstance = null;
  };
}

export function getLenis(): LenisInstance {
  return lenisInstance;
}

export function scrollToElement(selector: string, offset: number = 0) {
  if (lenisInstance) {
    lenisInstance.scrollTo(selector, { offset });
  } else {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Framer motion transition presets optimized for transform and opacity only.
 */
export const transitions = {
  springGentle: { type: 'spring', damping: 25, stiffness: 120 },
  springSnappy: { type: 'spring', damping: 20, stiffness: 200 },
  easeOutQuad: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  easeOutExpo: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  staggerFast: 0.06,
  staggerMedium: 0.1,
};
