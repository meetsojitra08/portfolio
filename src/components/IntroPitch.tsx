import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const IntroPitch: React.FC = () => {
  return (
    <section id="pitch" className="intro-pitch-section">
      <div className="section-container">
        {/* Main Pitch Heading mirroring the reference */}
        <div className="pitch-header">
          <h2 className="pitch-title">
            NEED A <span className="accent-coral">FULL STACK DEVELOPER</span>
            <br />
            FOR YOUR NEXT BIG VENTURE?
          </h2>

          <div className="pitch-actions">
            <a href="#contact" className="btn-pill-coral">
              <span>HIRE ME / LET'S TALK</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline"
            >
              <FileText size={16} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>

        {/* Narrative Statement from Resume */}
        <div className="pitch-narrative">
          <p className="pitch-lead">
            I'm <strong>Meet Sojitra</strong> — a Full Stack Software Developer based in Ahmedabad, India.
            With 1+ year of hands-on production experience spanning <strong>Python, Django, FastAPI, React, and PostgreSQL</strong>,
            I engineer web systems that bridge complex data workflows and responsive interfaces into seamless, high-converting digital products.
          </p>

          <p className="pitch-sub">
            From architecting sub-second AI decision engines (PickWise) to automated log-triage platforms (BugSense),
            I focus on what matters most: <strong>uncompromising reliability (99.8% uptime)</strong>, clean maintainable code,
            and intuitive user experiences that scale.
          </p>
        </div>

        {/* Value Proposition Highlights */}
        <div className="pitch-features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrap">
              <CheckCircle2 size={20} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h3>High-Throughput APIs</h3>
              <p>FastAPI & Django REST Framework with connection pooling, Redis caching, and 99.8% sustained uptime.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrap">
              <CheckCircle2 size={20} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h3>Sub-32% Faster UI</h3>
              <p>Type-safe React & TypeScript applications engineered for low latency, smooth animation, and accessibility.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrap">
              <CheckCircle2 size={20} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h3>AI & Automation</h3>
              <p>Production integration of LLM triage (Groq), PostgreSQL trigram search, and real-time webhook pipelines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
