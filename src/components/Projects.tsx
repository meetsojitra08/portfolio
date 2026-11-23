import React from 'react';
import { ExternalLink, Github, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/content';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-scenic-section">
      <div className="section-container">
        {/* Section Heading matching reference "CHECK MY LATEST PROJECTS" */}
        <div className="projects-header-block">
          <span className="section-eyebrow">FEATURED PORTFOLIO</span>
          <h2 className="projects-main-title">
            CHECK MY LATEST <span className="accent-coral">PROJECTS</span>
          </h2>
          <p className="projects-subtitle">
            Engineered from concept to deployment: high-throughput full-stack architectures,
            intelligent decision tools, and automated triage systems.
          </p>

          <div className="projects-action-pill">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-coral"
            >
              <span>EXPLORE ALL REPOSITORIES</span>
              <Github size={16} />
            </a>
          </div>
        </div>

        {/* Project Showcase List */}
        <div className="scenic-projects-grid">
          {PROJECTS.map((project, idx) => (
            <div key={project.name} className={`scenic-project-card card-${project.className}`}>
              {/* Left Column: Visual Browser Preview Mockup */}
              <div className="project-mockup-wrapper">
                <div className="browser-mockup-window">
                  {/* Browser Header Bar */}
                  <div className="browser-header">
                    <div className="window-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="browser-address-bar">
                      <span className="address-lock">🔒</span>
                      <span className="address-text">{project.liveUrl.replace('https://', '')}</span>
                    </div>
                    <div className="window-action-icon">
                      <ExternalLink size={12} />
                    </div>
                  </div>

                  {/* Browser Viewport with Illustrated UI Card */}
                  <div className={`browser-canvas canvas-${project.className}`}>
                    {project.className === 'pickwise' ? (
                      <div className="mockup-ui-pickwise">
                        <div className="ui-badge-row">
                          <span className="ui-chip">AI Engine</span>
                          <span className="ui-chip accent">350ms Query</span>
                        </div>
                        <h4 className="ui-title">Product Intelligence & Comparison</h4>
                        <div className="ui-comparison-cards">
                          <div className="comp-card best">
                            <span className="comp-tag">TOP MATCH · 98%</span>
                            <div className="comp-name">MacBook Pro M3</div>
                            <div className="comp-metric">$1,499 · 18h Battery</div>
                          </div>
                          <div className="comp-card">
                            <span className="comp-tag">ALTERNATIVE</span>
                            <div className="comp-name">Dell XPS 14</div>
                            <div className="comp-metric">$1,399 · 15h Battery</div>
                          </div>
                        </div>
                        <div className="ui-search-bar">
                          <span>"Best developer laptop under $1500 with long battery"</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mockup-ui-bugsence">
                        <div className="ui-badge-row">
                          <span className="ui-chip">Automated Triage</span>
                          <span className="ui-chip alert">&lt; 2s Processing</span>
                        </div>
                        <h4 className="ui-title">AI Bug Triage & Duplicate Detector</h4>
                        <div className="ui-tickets-stack">
                          <div className="ticket-item critical">
                            <div className="ticket-meta">
                              <span className="t-badge crit">CRITICAL (P0)</span>
                              <span className="t-time">Just now</span>
                            </div>
                            <div className="t-title">PG ConnectionPoolTimeout in /api/v1/checkout</div>
                            <div className="t-ai-rec">Groq LLM: Suggested indexing fix & pool increment</div>
                          </div>
                          <div className="ticket-item duplicate">
                            <div className="ticket-meta">
                              <span className="t-badge dup">94% SIMILARITY DUPLICATE</span>
                            </div>
                            <div className="t-title">Matched with issue #184 via Trigram Search</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Project Details & Specs */}
              <div className="project-details-wrapper">
                <div className="project-number-badge">
                  <span>PROJECT {project.number}</span>
                  <span className="project-category-tag">{project.type}</span>
                </div>

                <h3 className="project-title-name">{project.name}</h3>

                <p className="project-description-text">{project.description}</p>

                {/* Outcome Pill */}
                <div className="project-outcome-pill">
                  <CheckCircle2 size={16} className="outcome-icon" />
                  <span>Key Result: <strong>{project.outcome}</strong></span>
                </div>

                {/* Tech Stack Pills */}
                <div className="project-stack-tags">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* CTA Action Buttons in Sunset Coral Styling */}
                <div className="project-cta-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-live"
                  >
                    <span>VIEW LIVE DEMO</span>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-github"
                  >
                    <Github size={16} />
                    <span>GITHUB REPO</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
