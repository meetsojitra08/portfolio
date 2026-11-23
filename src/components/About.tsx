import React from 'react';
import { ArrowUpRight, Award, Compass, Sparkles, Terminal, FileText } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="scenic-about-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="about-header-block">
          <span className="section-eyebrow">ABOUT THE DEVELOPER</span>
          <h2 className="about-title">
            ENGINEERING WITH <span className="accent-coral">PURPOSE</span>
          </h2>
          <p className="about-tagline">{PERSONAL_INFO.tagline}</p>
        </div>

        <div className="about-content-layout">
          {/* Left Column: Narrative Card */}
          <div className="about-card-main">
            <div className="card-badge">
              <Compass size={15} />
              <span>FULL-STACK PROFILE</span>
            </div>

            <h3 className="about-pitch-heading">
              {PERSONAL_INFO.aboutHeading}
            </h3>

            <div className="about-paragraphs">
              {PERSONAL_INFO.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="about-action-strip">
              <a
                href={PERSONAL_INFO.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-coral"
              >
                <FileText size={16} />
                <span>DOWNLOAD RESUME</span>
              </a>
              <a href="#contact" className="btn-pill-outline">
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Stats & Tech Highlights */}
          <div className="about-sidebar">
            <div className="stats-metric-grid">
              {STATS.map(stat => (
                <div key={stat.label} className="stat-metric-card">
                  <div className="stat-val">{stat.value}</div>
                  <div className="stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-focus-card">
              <div className="focus-header">
                <Terminal size={18} className="focus-icon" />
                <h4>CORE FOCUS & ARCHITECTURE</h4>
              </div>
              <ul className="focus-list">
                <li>Production-grade Python (FastAPI, Django REST)</li>
                <li>Reactive UI with React, TypeScript & CSS polish</li>
                <li>Relational database tuning (PostgreSQL, MySQL, Redis)</li>
                <li>AI Product Integration (LLM Triage, Groq, Trigram Search)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
