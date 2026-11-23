import React, { useEffect, useRef, useState } from 'react';

export const LandscapeHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className="cm-hero-banner" id="welcome">
      {/* 1. Sky & Sun */}
      <img
        src="/images/illustrations/home-header-sun.svg"
        alt="the sun"
        className="cm-layer cm-sun"
        style={{
          transform: `translate3d(${mousePos.x * 6}px, ${scrollY * 0.45 + mousePos.y * 4}px, 0)`
        }}
      />

      {/* 2. Mountains */}
      <img
        src="/images/illustrations/home-header-montains.svg"
        alt="mountains"
        className="cm-layer cm-mountains"
        style={{
          transform: `translate3d(${mousePos.x * 10}px, ${scrollY * 0.35 + mousePos.y * 6}px, 0)`
        }}
      />

      {/* 3. Clouds drifting */}
      <div
        className="cm-clouds-wrap"
        style={{
          transform: `translate3d(${mousePos.x * 14}px, ${scrollY * 0.25}px, 0)`
        }}
      >
        <img src="/images/illustrations/cloud-left.svg" alt="cloud" className="cm-cloud cm-cloud-l" />
        <img src="/images/illustrations/cloud-left-center.svg" alt="cloud" className="cm-cloud cm-cloud-lc" />
        <img src="/images/illustrations/cloud-right-center.svg" alt="cloud" className="cm-cloud cm-cloud-rc" />
        <img src="/images/illustrations/cloud-right.svg" alt="cloud" className="cm-cloud cm-cloud-r" />
      </div>

      {/* 4. Fourth Forest Layer (Behind the title) */}
      <img
        src="/images/illustrations/home-header-fourth-forest-layer.svg"
        alt="fourth forest layer"
        className="cm-layer cm-forest-4"
        style={{
          transform: `translate3d(${mousePos.x * 16}px, ${scrollY * 0.22}px, 0)`
        }}
      />

      {/* 5. Hero H1 Display Title (Sandwiched between Forest 4 & Forest 3!) */}
      <div
        className="cm-title-layer"
        style={{
          transform: `translate3d(${mousePos.x * 18}px, ${scrollY * 0.18}px, 0)`
        }}
      >
        <h1 className="cm-hero-title">
          WEB DESIGN &amp;
          <br />
          DEVELOPMENT
        </h1>
        <p className="cm-hero-subtitle">
          MEET SOJITRA · FULL STACK &amp; AI DEVELOPER
        </p>
      </div>

      {/* 6. Third Forest Layer */}
      <img
        src="/images/illustrations/home-header-third-forest-layer.svg"
        alt="third forest layer"
        className="cm-layer cm-forest-3"
        style={{
          transform: `translate3d(${mousePos.x * 22}px, ${scrollY * 0.14}px, 0)`
        }}
      />

      {/* 7. Second Forest Layer */}
      <img
        src="/images/illustrations/home-header-second-forest-layer.svg"
        alt="second forest layer"
        className="cm-layer cm-forest-2"
        style={{
          transform: `translate3d(${mousePos.x * 26}px, ${scrollY * 0.08}px, 0)`
        }}
      />

      {/* 8. First Forest Layer (Foreground Base) */}
      <img
        src="/images/illustrations/home-header-first-forest-layer.svg"
        alt="first forest layer"
        className="cm-layer cm-forest-1"
        style={{
          transform: `translate3d(${mousePos.x * 30}px, ${scrollY * 0.02}px, 0)`
        }}
      />

      {/* 9. Close up trees & Blurred Depth-of-Field Trees */}
      <img
        src="/images/illustrations/tree-close-up-light.svg"
        alt="tree close up"
        className="cm-layer cm-tree-light"
      />
      <img
        src="/images/illustrations/tree-close-up-dark.svg"
        alt="tree close up"
        className="cm-layer cm-tree-dark"
      />
      <img
        src="/images/illustrations/tree-blur-left.png"
        alt="blurred pine tree left"
        className="cm-layer cm-tree-blur-l"
      />
      <img
        src="/images/illustrations/tree-blur-right.png"
        alt="blurred pine tree right"
        className="cm-layer cm-tree-blur-r"
      />

      {/* Scroll indicator cue */}
      <a href="#pitch" className="cm-scroll-indicator" aria-label="Scroll to content">
        <span className="cm-scroll-wheel" />
      </a>
    </header>
  );
};
