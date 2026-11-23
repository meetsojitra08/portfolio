import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { Magnetic } from './Magnetic';
import { Hero3D } from './Hero3D';
import { scrollToElement } from '../lib/animations';
import { playTypingClick, playWarpDrive, playPillBeep } from '../lib/sound';

interface HeroProps {
  dark: boolean;
  preloaderFinished: boolean;
}

export function Hero({ dark, preloaderFinished }: HeroProps) {
  const [outlineFilled, setOutlineFilled] = useState(false);
  const [termOutput, setTermOutput] = useState<string>('status: nominal // ready for input');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setOutlineFilled(true);
      } else {
        setOutlineFilled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    playWarpDrive();
    scrollToElement('#projects');
  };

  const handleCommand = (cmd: string) => {
    playPillBeep(650, 0.05);
    playTypingClick();
    switch (cmd) {
      case 'whoami':
        setTermOutput('Meet Sojitra: Full-Stack Architect & Systems Builder');
        break;
      case 'stack':
        setTermOutput('React 18 · TypeScript · Node.js · Three.js · Python');
        break;
      case 'missions':
        setTermOutput('PickWise (AI Recommender) & BugSence (Realtime Tracker)');
        break;
      case 'warp':
        setTermOutput('Engaging hyperdrive sequence to missions...');
        setTimeout(() => handleScrollToProjects(), 250);
        break;
      default:
        setTermOutput('command not recognized. try [whoami] or [stack]');
    }
  };

  return (
    <section className="hero" id="home">
      {/* Left Column: Mission Commander Copy & CTAs */}
      <div className="hero-copy">
        {/* Availability Telemetry Badge */}
        <div className={`eyebrow ${preloaderFinished ? 'hero-anim-in delay-1' : ''}`}>
          <span className="dot pulse-dot" />
          <span>FULL STACK DEVELOPER // PORTFOLIO</span>
          <span className="eyebrow-line" />
        </div>

        {/* Masked Line-by-Line Headline Reveal */}
        <h1 className="hero-headline">
          <span className="headline-line-mask">
            <span className={`headline-line ${preloaderFinished ? 'is-revealed delay-1' : ''}`}>
              Architecting digital
            </span>
          </span>
          <span className="headline-line-mask">
            <span
              className={`headline-line outline-text ${outlineFilled ? 'filled' : ''} ${
                preloaderFinished ? 'is-revealed delay-2' : ''
              }`}
            >
              universes
            </span>
          </span>
          <span className="headline-line-mask">
            <span className={`headline-line ${preloaderFinished ? 'is-revealed delay-3' : ''}`}>
              that scale.
            </span>
          </span>
        </h1>

        <p className={`hero-intro ${preloaderFinished ? 'hero-anim-in delay-4' : ''}`}>
          I am <strong className="text-glow">{PERSONAL_INFO.name}</strong>, a developer fusing
          high-concurrency engineering, scalable microservices, and immersive 3D spatial web
          interfaces.
        </p>

        {/* Action CTAs */}
        <div className={`hero-actions ${preloaderFinished ? 'hero-anim-in delay-5' : ''}`}>
          <Magnetic strength={0.3}>
            <a
              className="button button-dark cockpit-cta-btn"
              href="#projects"
              onClick={handleScrollToProjects}
              data-cursor="pointer"
            >
              <Zap size={14} className="accent-icon" />
              <span>EXPLORE WORK</span>
              <ArrowDownRight size={15} />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              className="text-link space-comms-link"
              href={`mailto:${PERSONAL_INFO.links.email}`}
              data-cursor="pointer"
              onClick={() => playPillBeep(750, 0.05)}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={14} />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              className="resume-pill-link"
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              title="Download Resume (PDF)"
              onClick={() => playPillBeep(600, 0.05)}
            >
              <Download size={13} />
              <span>RESUME</span>
            </a>
          </Magnetic>
        </div>

        {/* Live telemetry counters */}
        <div className={`hero-meta telemetry-pill-row ${preloaderFinished ? 'hero-anim-in delay-6' : ''}`}>
          <span className="telemetry-pill">
            <i className="dot" /> {PERSONAL_INFO.availability}
          </span>
          <span className="telemetry-pill">
            <Cpu size={12} /> {PERSONAL_INFO.location.toUpperCase()}
          </span>
          <span className="telemetry-pill">
            <Sparkles size={12} /> {PERSONAL_INFO.experienceYears}
          </span>
        </div>
      </div>

      {/* Right Column: 3D Celestial Planetary Station & Developer Terminal */}
      <div className="hero-side">
        <div className="side-top">
          <span>MEET SOJITRA // PORTFOLIO</span>
          <span>FULL STACK DEVELOPER · 2026</span>
        </div>

        <div className="hero-art space-hero-art">
          <div className="art-grid" />

          {/* 3D Celestial Planetary Construct Canvas */}
          <Hero3D dark={dark} />

          {/* Floating Developer Terminal Card */}
          <div className="art-card card-front cyber-terminal-hud">
            <div className="card-window">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
            </div>

            <div className="terminal-label">
              <Terminal size={11} className="term-icon" />
              <span>meet@developer:~</span>
            </div>

            <div className="terminal-code">
              <span>const</span> developer: Profile = {'{'}
            </div>
            <div className="terminal-code indent">
              name: <em>'Meet Sojitra'</em>,
            </div>
            <div className="terminal-code indent">
              role: <em>'Full Stack Developer'</em>,
            </div>
            <div className="terminal-code indent">
              focus: <em>'modern web & distributed systems'</em>
            </div>
            <div className="terminal-code">{'}'};</div>

            {/* Live Interactive Command Output */}
            <div className="terminal-live-feed">
              <span className="term-prompt">&gt;</span>
              <span className="term-feed-text">{termOutput}</span>
            </div>

            {/* Quick-Run Terminal Chips */}
            <div className="term-quick-chips">
              <button type="button" onClick={() => handleCommand('whoami')}>
                whoami
              </button>
              <button type="button" onClick={() => handleCommand('stack')}>
                stack
              </button>
              <button type="button" onClick={() => handleCommand('missions')}>
                projects
              </button>
              <button type="button" onClick={() => handleCommand('warp')}>
                explore ↗
              </button>
            </div>
          </div>

          <div className="art-stamp">MS<span>.</span></div>
          <div className="art-caption">
            CODE WITH INTENTION<br />BUILD WITH PURPOSE
          </div>
        </div>

        <div className="side-bottom">
          <span>REACT · TYPESCRIPT · PYTHON · NODE.JS</span>
          <span>SELECTED WORK · 01 — 02</span>
        </div>
      </div>

      {/* Downward Warp Glide Cue */}
      <a
        className="scroll-cue"
        href="#projects"
        onClick={handleScrollToProjects}
        data-cursor="pointer"
      >
        <ArrowDown size={14} className="bounce-subtle" />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}
