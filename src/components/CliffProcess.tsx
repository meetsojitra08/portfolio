import React from 'react';
import { Database, Layout, Rocket, Sparkles } from 'lucide-react';

export const CliffProcess: React.FC = () => {
  return (
    <section id="process" className="cliff-process-section">
      <div className="section-container">
        {/* Layout with Pagoda Cliff on Left and Process Roadmap on Right */}
        <div className="cliff-process-grid">
          {/* Left Column: Illustrated Pagoda Cliff & Traveler Silhouette */}
          <div className="cliff-illustration-col">
            <div className="cliff-artwork-card">
              <svg
                viewBox="0 0 500 750"
                className="cliff-svg"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Sky gradient behind cliff */}
                  <linearGradient id="cliffSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff9a76" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#fedac2" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#faf8f5" stopOpacity="0" />
                  </linearGradient>

                  {/* Cliff rock gradients */}
                  <linearGradient id="cliffRock" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7a2245" />
                    <stop offset="50%" stopColor="#531333" />
                    <stop offset="100%" stopColor="#310920" />
                  </linearGradient>

                  <linearGradient id="pagodaRoof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9a1b32" />
                    <stop offset="100%" stopColor="#5d0d1e" />
                  </linearGradient>
                </defs>

                {/* Soft backdrop glow */}
                <rect width="500" height="750" fill="url(#cliffSky)" />

                {/* Distant Birds */}
                <path d="M 120,90 Q 128,82 136,90 Q 144,82 152,90 Q 136,86 120,90 Z" fill="#7a2245" opacity="0.4" />
                <path d="M 180,110 Q 186,104 192,110 Q 198,104 204,110 Q 192,107 180,110 Z" fill="#7a2245" opacity="0.3" />

                {/* Pine tree silhouettes on cliff */}
                <g fill="#240718">
                  <polygon points="50,230 65,180 80,230 55,230" />
                  <polygon points="45,260 65,210 85,260 50,260" />
                  <polygon points="40,300 65,240 90,300 45,300" />
                </g>

                {/* Japanese Pagoda Structure */}
                <g transform="translate(90, 160)">
                  {/* Base Platform */}
                  <rect x="20" y="110" width="110" height="12" rx="2" fill="#3a0b17" />
                  <rect x="25" y="122" width="100" height="6" fill="#25050e" />

                  {/* Lower Pillars */}
                  <rect x="35" y="65" width="8" height="45" fill="#4d1020" />
                  <rect x="70" y="65" width="8" height="45" fill="#4d1020" />
                  <rect x="105" y="65" width="8" height="45" fill="#4d1020" />
                  {/* Lower Wall & Screen */}
                  <rect x="43" y="70" width="27" height="38" fill="#d95d43" opacity="0.85" />
                  <rect x="78" y="70" width="27" height="38" fill="#d95d43" opacity="0.85" />

                  {/* Tier 1 Curved Roof */}
                  <path
                    d="M 10,65 Q 75,55 140,65 Q 150,58 135,50 Q 75,40 15,50 Q 0,58 10,65 Z"
                    fill="url(#pagodaRoof)"
                  />

                  {/* Upper Pillars */}
                  <rect x="42" y="20" width="7" height="30" fill="#4d1020" />
                  <rect x="72" y="20" width="7" height="30" fill="#4d1020" />
                  <rect x="100" y="20" width="7" height="30" fill="#4d1020" />
                  <rect x="49" y="23" width="23" height="25" fill="#e06a51" opacity="0.9" />
                  <rect x="79" y="23" width="21" height="25" fill="#e06a51" opacity="0.9" />

                  {/* Tier 2 Top Curved Roof */}
                  <path
                    d="M 22,20 Q 75,10 128,20 Q 138,13 124,5 Q 75,-2 26,5 Q 12,13 22,20 Z"
                    fill="url(#pagodaRoof)"
                  />

                  {/* Spire / Finial */}
                  <rect x="72" y="-18" width="5" height="18" fill="#e88365" />
                  <circle cx="74.5" cy="-20" r="4" fill="#fca374" />
                </g>

                {/* Lone Traveler Silhouette on Cliff Promontory */}
                <g transform="translate(260, 260)" fill="#1c0717">
                  {/* Conical Straw Hat */}
                  <polygon points="12,0 2,10 22,10" fill="#2d0b24" />
                  {/* Head */}
                  <circle cx="12" cy="12" r="5" />
                  {/* Body & Cloak */}
                  <path d="M 6,18 L 18,18 L 22,42 L 2,42 Z" />
                  {/* Staff */}
                  <line x1="24" y1="5" x2="24" y2="46" stroke="#2d0b24" strokeWidth="2" />
                  {/* Legs */}
                  <rect x="6" y="42" width="4" height="12" />
                  <rect x="14" y="42" width="4" height="12" />
                </g>

                {/* Dramatic Red Rock Cliff Outcrop */}
                <path
                  d="M0,320 
                     L120,300 
                     L220,300 
                     L290,315 
                     L260,350 
                     L290,390 
                     L240,430 
                     L270,490 
                     L200,530 
                     L230,590 
                     L160,630 
                     L180,720 
                     L0,750 Z"
                  fill="url(#cliffRock)"
                />

                {/* Cliff Facet / Shading Highlights */}
                <path
                  d="M 120,300 L 220,300 L 290,315 L 260,350 L 220,330 L 150,320 Z"
                  fill="#9e3256"
                  opacity="0.8"
                />
                <path
                  d="M 260,350 L 290,390 L 240,430 L 220,400 L 235,365 Z"
                  fill="#862649"
                  opacity="0.7"
                />
                <path
                  d="M 240,430 L 270,490 L 200,530 L 190,470 Z"
                  fill="#9e3256"
                  opacity="0.6"
                />
              </svg>

              <div className="cliff-caption">
                <span className="caption-badge">THE JOURNEY</span>
                <p>From architectural blueprint to production deployment.</p>
              </div>
            </div>
          </div>

          {/* Right Column: "WHAT TO EXPECT" Process Roadmap */}
          <div className="cliff-content-col">
            <div className="process-header">
              <span className="section-eyebrow">DEVELOPMENT METHODOLOGY</span>
              <h2 className="process-headline">
                WHAT TO <span className="accent-coral">EXPECT</span>
              </h2>
              <p className="process-intro">
                Every project follows an intentional, battle-tested engineering pipeline.
                I ensure zero guesswork, rapid feedback loops, and production-grade execution.
              </p>
            </div>

            {/* Stepped Process Cards with Isometric Milestone Look */}
            <div className="process-steps-timeline">
              {/* Step 1 */}
              <div className="step-card">
                <div className="step-marker-box">
                  <span className="step-num">1</span>
                  <div className="step-icon-wrap">
                    <Database size={20} className="step-icon" />
                  </div>
                </div>
                <div className="step-body">
                  <div className="step-title-row">
                    <h3>UNDERSTANDING YOUR ARCHITECTURE</h3>
                    <span className="step-tag">DISCOVERY & SCOPE</span>
                  </div>
                  <p>
                    I dive deep into product requirements, model robust relational schemas (PostgreSQL / MySQL),
                    and design clean, modular RESTful API contracts. Every endpoint and data constraint is planned
                    for security, efficiency, and scale before a single line of frontend code is written.
                  </p>
                  <ul className="step-checkmarks">
                    <li>Database Schema Design & Normalization</li>
                    <li>REST API Specification & Contract Planning</li>
                    <li>Security, RBAC & Session Auth Strategy</li>
                  </ul>
                </div>
              </div>

              {/* Connecting Trail Line */}
              <div className="step-trail-connector" />

              {/* Step 2 */}
              <div className="step-card">
                <div className="step-marker-box">
                  <span className="step-num">2</span>
                  <div className="step-icon-wrap">
                    <Layout size={20} className="step-icon" />
                  </div>
                </div>
                <div className="step-body">
                  <div className="step-title-row">
                    <h3>CRAFTING INTUITIVE UI & RESILIENT APIS</h3>
                    <span className="step-tag">ENGINEERING & POLISH</span>
                  </div>
                  <p>
                    Building type-safe React & TypeScript interfaces optimized for sub-second rendering,
                    coupled with high-throughput Python backends (Django / FastAPI). I leverage Redis caching,
                    transaction safety, and async processing to sustain sub-350ms response times.
                  </p>
                  <ul className="step-checkmarks">
                    <li>Component-Driven React with Smooth UX</li>
                    <li>High-Throughput FastAPI / Django Endpoints</li>
                    <li>Redis In-Memory Caching & Query Optimization</li>
                  </ul>
                </div>
              </div>

              {/* Connecting Trail Line */}
              <div className="step-trail-connector" />

              {/* Step 3 */}
              <div className="step-card">
                <div className="step-marker-box">
                  <span className="step-num">3</span>
                  <div className="step-icon-wrap">
                    <Rocket size={20} className="step-icon" />
                  </div>
                </div>
                <div className="step-body">
                  <div className="step-title-row">
                    <h3>DEPLOYING, TESTING & TRIAGE</h3>
                    <span className="step-tag">PRODUCTION RELEASE</span>
                  </div>
                  <p>
                    Deploying to verified cloud staging and production environments with automated validation,
                    error triage pipelines (Groq LLM + PostgreSQL trigram search), and sustaining 99.8% uptime.
                    I remain dedicated post-launch to monitor performance and guarantee stability.
                  </p>
                  <ul className="step-checkmarks">
                    <li>Automated CI/CD & Production Deployment</li>
                    <li>Sub-2s Automated Error Log Triage</li>
                    <li>Post-Launch Observability & 99.8% Uptime SLA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
