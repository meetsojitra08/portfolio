import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isWiping, setIsWiping] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(100);
      setIsWiping(true);
      const timer = setTimeout(() => {
        setIsRemoved(true);
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }

    // Smooth counter animation from 0 to 100
    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        // Start clip-path / curtain wipe
        setTimeout(() => {
          setIsWiping(true);
          setTimeout(() => {
            setIsRemoved(true);
            onComplete();
          }, 850);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`preloader-overlay ${isWiping ? 'preloader-wipe-out' : ''}`}
      aria-label="Loading site"
      role="status"
    >
      <div className="preloader-content">
        <div className="preloader-brand">
          MS<span>.</span>
        </div>

        <div className="preloader-counter-wrap">
          <span className="preloader-number">
            {count.toString().padStart(2, '0')}
          </span>
          <span className="preloader-percent">%</span>
        </div>

        <div className="preloader-bar-track">
          <div
            className="preloader-bar-fill"
            style={{ width: `${count}%` }}
          />
        </div>

        <div className="preloader-status">
          <span>INITIALIZING EXPERIENCE</span>
          <span>MEET SOJITRA</span>
        </div>
      </div>
    </div>
  );
}
