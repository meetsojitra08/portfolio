import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Cpu, Layers, ExternalLink, Github, ShieldCheck, Terminal } from 'lucide-react';
import { Project } from '../data/content';
import { Magnetic } from './Magnetic';
import { playPillBeep } from '../lib/sound';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [showArch, setShowArch] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setSpotlight({ x: mouseX, y: mouseY, opacity: 1 });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((mouseX - centerX) / centerX) * 5;
    const rotateX = -((mouseY - centerY) / centerY) * 5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  const archSpecs: Record<string, { arch: string; metrics: string; features: string[] }> = {
    pickwise: {
      arch: 'Microservices + Gemini Flash API + Client-side Redis Cache',
      metrics: '45% Reduction in External API Calls · Sub-120ms Decision Generation',
      features: [
        'Multi-attribute product scoring algorithm',
        'AI synthesized trade-off matrix',
        'Zero-layout-shift responsive recommendation feed'
      ]
    },
    bugsence: {
      arch: 'Full Stack SPA + WebSocket Streaming + PostgreSQL ORM',
      metrics: '50+ Concurrent Realtime Collaborators · 99.8% Uptime',
      features: [
        'Real-time bi-directional ticket updates via WebSockets',
        'Role-Based Access Control (RBAC) triage dashboard',
        'Optimistic cache updates with instant search indexing'
      ]
    }
  };

  const spec = archSpecs[project.className] || {
    arch: 'Modern Scalable Cloud Architecture',
    metrics: 'High Concurrency · 99.8% Uptime',
    features: ['Modular component architecture', 'Type-safe full stack integration']
  };

  return (
    <article
      ref={cardRef}
      className={`project-row stacking-card space-mission-card border-beam-card ${project.className}`}
      style={{
        top: `calc(90px + ${index * 24}px)`,
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="view"
    >
      {/* Absolute Overlays (Never take up grid cells) */}
      <div className="border-beam-glow" aria-hidden="true" />
      <div
        className="card-spotlight-overlay"
        style={{
          background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(56, 189, 248, 0.16), transparent 70%)`,
          opacity: spotlight.opacity,
        }}
        aria-hidden="true"
      />

      {/* Grid Column 1: Project Info */}
      <div className="project-info">
        <div className="project-number">{project.number}</div>
        <div className="project-content">
          <div className="mission-hud-inline">
            <span className="dot pulse-dot" />
            <span className="project-type-cyber">
              <Cpu size={11} /> {project.type.toUpperCase()}
            </span>
            <span className="mission-id-sep">·</span>
            <span className="mission-status-live">STATUS: PRODUCTION</span>
          </div>

          <h3 className="mission-title">{project.name}</h3>
          <p className="mission-desc">{project.description}</p>

          <div className="project-outcome mission-outcome-bar">
            <ShieldCheck size={14} className="outcome-icon" />
            <span>{project.outcome}</span>
          </div>

          {/* Architecture Telemetry Disclosure */}
          {showArch && (
            <div className="arch-telemetry-box">
              <div className="arch-label">
                <Terminal size={12} />
                <span>SYSTEM ARCHITECTURE SPECS:</span>
              </div>
              <div className="arch-detail"><strong>Engine:</strong> {spec.arch}</div>
              <div className="arch-detail"><strong>Telemetry:</strong> {spec.metrics}</div>
              <ul className="arch-features">
                {spec.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="tag-list cyber-tag-list">
            {project.stack.map((tag) => (
              <span key={tag} className="cyber-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Project CTAs */}
          <div className="project-links slide-in-links">
            <Magnetic strength={0.3}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-btn live-btn"
                data-cursor="pointer"
                onClick={() => playPillBeep(700, 0.05)}
              >
                <ExternalLink size={13} />
                <span>LIVE DEMO</span>
                <ArrowUpRight size={13} />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
                data-cursor="pointer"
                onClick={() => playPillBeep(600, 0.05)}
              >
                <Github size={13} />
                <span>GITHUB</span>
              </a>
            </Magnetic>

            <button
              type="button"
              className={`arch-toggle-btn ${showArch ? 'is-active' : ''}`}
              onClick={() => {
                playPillBeep(850, 0.04);
                setShowArch(!showArch);
              }}
            >
              <Layers size={12} />
              <span>{showArch ? 'HIDE ARCH' : 'ARCH SPECS'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Column 2: Visual Preview */}
      <div className={`project-visual cyber-visual ${project.className}`} data-cursor="view">
        <div className="visual-glow" />
        <div className="visual-top">
          <span>FEATURED PROJECT / {project.number}</span>
          <span className="visual-arrow-pill">VIEW LIVE ↗</span>
        </div>

        <div className="visual-center">
          <div className="visual-window zoom-preview">
            <div className="visual-window-bar">
              <i /><i /><i />
              <span className="window-app-name">{project.name.toUpperCase()} · v2.4</span>
            </div>
            <div className="visual-ui-lines">
              <b /><i /><i /><i />
            </div>
            <div className="visual-ui-panel cyber-ui-panel">
              <div className="panel-hud-header">
                <span>{project.className === 'pickwise' ? 'DECISION COCKPIT' : 'INCIDENT RADAR'}</span>
                <span className="panel-badge">99.8% UPTIME</span>
              </div>
              <strong>
                {project.className === 'pickwise' ? 'Smart Product Matrix' : 'Live WebSocket Stream'}
              </strong>
              <div className="fake-chart cyber-chart">
                <i style={{ height: '40%' }} />
                <i style={{ height: '75%' }} />
                <i style={{ height: '55%' }} />
                <i style={{ height: '90%' }} />
                <i style={{ height: '65%' }} />
                <i style={{ height: '100%' }} />
              </div>
            </div>
          </div>
          <div className="visual-title">{project.visual}</div>
        </div>

        <div className="visual-bottom">
          <span>{project.visualSub}</span>
          <span>MEET SOJITRA // SYS.0{index + 1}</span>
        </div>
      </div>
    </article>
  );
}
