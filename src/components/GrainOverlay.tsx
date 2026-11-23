/**
 * Subtle film grain texture overlay with ~3% opacity.
 * Adds tactile analog depth typical of high-end Awwwards portfolios.
 */
export function GrainOverlay() {
  return (
    <div className="grain-overlay" aria-hidden="true">
      <svg className="grain-svg" width="100%" height="100%">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
  );
}
