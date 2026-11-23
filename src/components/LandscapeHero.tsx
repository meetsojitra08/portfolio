import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, ExternalLink, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const LandscapeHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('pitch');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="landscape-hero-container">
      {/* Dynamic Multi-Layer Parallax SVG Background */}
      <div className="landscape-scene-viewport">
        {/* Layer 0: Sky Gradient & Glowing Sun */}
        <div
          className="parallax-layer layer-sky"
          style={{
            transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 3}px, 0)`
          }}
        >
          <div className="sky-gradient-base" />
          <div className="sun-orb" />
          {/* Drifting Clouds */}
          <div className="clouds-container">
            <div className="cloud cloud-1" />
            <div className="cloud cloud-2" />
            <div className="cloud cloud-3" />
          </div>
          {/* Flying Bird Silhouettes */}
          <svg className="birds-layer" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 210,95 Q 220,85 230,95 Q 240,85 250,95 Q 230,90 210,95 Z" fill="#662244" opacity="0.6" />
            <path d="M 270,80 Q 278,72 286,80 Q 294,72 302,80 Q 286,76 270,80 Z" fill="#662244" opacity="0.5" />
            <path d="M 320,110 Q 327,103 334,110 Q 341,103 348,110 Q 334,106 320,110 Z" fill="#662244" opacity="0.4" />
          </svg>
        </div>

        {/* Layer 1: Distant Jagged Mountains */}
        <div
          className="parallax-layer layer-mountains-back"
          style={{
            transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 6}px, 0)`
          }}
        >
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="mountains-svg">
            <path
              d="M0,320 L120,240 L260,300 L420,190 L580,290 L720,170 L860,280 L1020,190 L1180,310 L1320,230 L1440,300 L1440,600 L0,600 Z"
              fill="url(#mountainGradBack)"
            />
            <defs>
              <linearGradient id="mountainGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d96b68" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#9a3350" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 2: Mid-Range Mountain Peaks */}
        <div
          className="parallax-layer layer-mountains-mid"
          style={{
            transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 10}px, 0)`
          }}
        >
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="mountains-svg">
            <path
              d="M0,380 L180,310 L340,390 L520,280 L680,380 L840,290 L1020,380 L1200,300 L1360,400 L1440,360 L1440,600 L0,600 Z"
              fill="url(#mountainGradMid)"
            />
            <defs>
              <linearGradient id="mountainGradMid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7c224b" />
                <stop offset="100%" stopColor="#511438" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 3: Layered Forest & Foothill Ridges */}
        <div
          className="parallax-layer layer-forest-mid"
          style={{
            transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 14}px, 0)`
          }}
        >
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="mountains-svg">
            <path
              d="M0,450 C240,410 400,470 600,430 C780,390 940,460 1140,420 C1300,390 1380,440 1440,430 L1440,600 L0,600 Z"
              fill="url(#forestGrad1)"
            />
            {/* Tree Silhouette Spikes along ridge */}
            <path
              d="M40,450 L50,420 L60,450 L75,410 L90,450 L110,430 L130,455 M240,430 L250,400 L260,435 L280,415 L295,440 M680,410 L695,380 L710,415 L730,395 L745,420 M1020,440 L1035,405 L1050,445 L1070,415 L1085,445"
              stroke="#380e2d"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="forestGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d1033" />
                <stop offset="100%" stopColor="#250621" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 4: Foreground Silhouetted Pine Trees Framing Left & Right */}
        <div
          className="parallax-layer layer-trees-foreground"
          style={{
            transform: `translate3d(${mousePos.x * 28}px, ${mousePos.y * 18}px, 0)`
          }}
        >
          {/* Left Forest Canopy */}
          <div className="pine-cluster pine-left">
            <svg viewBox="0 0 400 700" className="pine-svg" fill="#180517">
              {/* Tree 1 */}
              <polygon points="120,80 140,150 130,150 155,220 140,220 170,300 150,300 190,400 90,400 110,300 90,300 105,220 90,220 110,150 100,150" />
              {/* Tree 2 */}
              <polygon points="50,140 70,210 60,210 85,280 70,280 100,370 80,370 120,470 20,470 45,370 25,370 45,280 30,280 50,210 40,210" />
              {/* Tree 3 (Foreground giant) */}
              <polygon points="200,200 230,280 215,280 250,370 230,370 275,470 250,470 300,580 150,580 180,470 155,470 185,370 165,370 195,280 180,280" />
              {/* Base terrain mound */}
              <path d="M0,450 Q160,420 320,530 L320,700 L0,700 Z" />
            </svg>
          </div>

          {/* Right Forest Canopy */}
          <div className="pine-cluster pine-right">
            <svg viewBox="0 0 400 700" className="pine-svg" fill="#180517">
              {/* Tree 1 */}
              <polygon points="260,90 280,160 270,160 295,230 280,230 310,310 290,310 330,410 230,410 250,310 230,310 245,230 230,230 250,160 240,160" />
              {/* Tree 2 */}
              <polygon points="330,150 350,220 340,220 365,290 350,290 380,380 360,380 400,480 300,480 325,380 305,380 325,290 310,290 330,220 320,220" />
              {/* Tree 3 */}
              <polygon points="180,220 210,300 195,300 230,390 210,390 255,490 230,490 280,600 130,600 160,490 135,490 165,390 145,390 175,300 160,300" />
              {/* Base terrain mound */}
              <path d="M80,530 Q240,420 400,450 L400,700 L80,700 Z" />
            </svg>
          </div>
        </div>

        {/* Layer 5: Hero Content & Typography Overlay */}
        <div className="hero-content-stage">
          <div className="hero-badge-pill">
            <Sparkles size={14} className="accent-icon" />
            <span>FULL STACK & AI SOFTWARE DEVELOPER</span>
          </div>

          <h1 className="hero-display-title">
            <span className="title-row-1">WEB ARCHITECTURE &</span>
            <span className="title-row-2">AI PLATFORMS</span>
          </h1>

          <p className="hero-subtext">
            I craft high-throughput web systems, resilient backend APIs, and intelligent
            AI-powered products that turn complex workflows into sub-second user experiences.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-scenic-primary">
              <span>EXPLORE PROJECTS</span>
            </a>
            <a href="#contact" className="btn-scenic-secondary">
              <Mail size={16} />
              <span>LET'S TALK</span>
            </a>
          </div>

          <div className="hero-stats-chips">
            <span className="stat-chip">1+ Yr Experience</span>
            <span className="stat-separator">/</span>
            <span className="stat-chip">FastAPI & Django</span>
            <span className="stat-separator">/</span>
            <span className="stat-chip">React & TypeScript</span>
            <span className="stat-separator">/</span>
            <span className="stat-chip">Ahmedabad, India</span>
          </div>

          <button
            onClick={scrollToNext}
            className="hero-scroll-cue"
            aria-label="Scroll to introduction"
          >
            <span className="scroll-label">SCROLL DOWN</span>
            <ArrowDown size={18} className="scroll-arrow" />
          </button>
        </div>

        {/* Bottom Valley Organic Cutout (Transitions naturally into white body) */}
        <div className="hero-valley-cutout">
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="cutout-svg">
            <path
              d="M0,80 C360,160 1080,160 1440,80 L1440,180 L0,180 Z"
              fill="#faf8f5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
