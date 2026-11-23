import React, { Suspense, useState, useEffect } from 'react';

const LazyHeroScene = React.lazy(() => import('./HeroScene'));

interface Hero3DProps {
  dark: boolean;
}

export function Hero3D({ dark }: Hero3DProps) {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Check if device is low powered, touch-only, or prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOnly = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 768;

    if (!prefersReducedMotion && !isTouchOnly) {
      setShouldRender3D(true);
    }
  }, []);

  if (!shouldRender3D) {
    return (
      <div className="hero-3d-fallback" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="fallback-glow" />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="hero-3d-loading" aria-hidden="true">
          <div className="orbit orbit-one" />
        </div>
      }
    >
      <LazyHeroScene dark={dark} />
    </Suspense>
  );
}
