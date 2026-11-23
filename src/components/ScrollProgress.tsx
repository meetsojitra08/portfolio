import { useEffect, useState } from 'react';

/**
 * Top scroll progress bar tracking page scroll 0% -> 100%.
 * Uses transform: scaleX for optimal 60fps GPU performance.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const factor = winHeightPx > 0 ? scrollPx / winHeightPx : 0;
      setProgress(Math.min(1, Math.max(0, factor)));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="scroll-progress-bar"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: '0% 50%',
        }}
      />
    </div>
  );
}
