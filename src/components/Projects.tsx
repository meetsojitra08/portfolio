import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/content';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="cm-section cm-projects-section">
      <div className="cm-container">
        {/* Section Heading */}
        <h2 className="cm-section-title">Check my latest projects</h2>

        <div className="cm-btn-wrap">
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Explore more projects
          </a>
        </div>

        {/* Alternating Portfolio Items */}
        <div className="cm-portfolio-list">
          {PROJECTS.map((project, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <div
                key={project.name}
                className={`cm-portfolio-item ${isReverse ? 'cm-item-reverse' : ''}`}
              >
                {/* Media Preview Window */}
                <div className="cm-item-media">
                  <div className={`cm-mockup-frame cm-frame-${project.className}`}>
                    <div className="cm-frame-topbar">
                      <span className="cm-window-dot red" />
                      <span className="cm-window-dot yellow" />
                      <span className="cm-window-dot green" />
                      <span className="cm-window-url">https://{project.name.toLowerCase()}.dev</span>
                    </div>

                    <div className="cm-frame-viewport">
                      {project.className === 'pickwise' ? (
                        <div className="cm-preview-pickwise">
                          <span className="cm-preview-tag">AI DECISION PLATFORM · 350MS</span>
                          <div className="cm-preview-headline">Smart Product Intelligence</div>
                          <div className="cm-preview-split">
                            <div className="cm-comp-box highlight">
                              <span className="cm-comp-label">TOP RECOMMENDATION (98%)</span>
                              <div className="cm-comp-name">MacBook Pro M3</div>
                              <div className="cm-comp-stat">350ms processing</div>
                            </div>
                            <div className="cm-comp-box">
                              <span className="cm-comp-label">ALTERNATIVE</span>
                              <div className="cm-comp-name">Dell XPS 14</div>
                              <div className="cm-comp-stat">Comparison Matrix</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="cm-preview-bugsence">
                          <span className="cm-preview-tag">AI ISSUE TRIAGE · &lt; 2S</span>
                          <div className="cm-preview-headline">Automated Bug Classification</div>
                          <div className="cm-ticket-stack">
                            <div className="cm-ticket-row crit">
                              <span className="cm-ticket-badge">CRITICAL (P0)</span>
                              <span className="cm-ticket-desc">PG ConnectionPoolTimeout in checkout</span>
                            </div>
                            <div className="cm-ticket-row dup">
                              <span className="cm-ticket-badge">TRIGRAM DUPLICATE</span>
                              <span className="cm-ticket-desc">Matched with Issue #184 (94% confidence)</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Content */}
                <div className="cm-item-info">
                  <h4 className="cm-item-title">{project.name}</h4>

                  <p className="cm-item-desc">
                    {project.className === 'pickwise' ? (
                      <>
                        Due to the <span className="highlight">minimalist design and fast decision engine</span>,
                        illustrations and structured data have become crucial in modern e-commerce. PickWise is a platform
                        architected by me using <span className="highlight">FastAPI, React, TypeScript, PostgreSQL, and Redis</span>.
                        In addition to the clean aesthetic, this system features a verified query pipeline that reduces purchase
                        research from hours to seconds with <span className="highlight">350ms processing speed</span>.
                      </>
                    ) : (
                      <>
                        Engineered to convert raw error logs into prioritized tickets in under 2 seconds.
                        BugSense leverages <span className="highlight">Django REST Framework, React, PostgreSQL trigram search, and Groq LLM</span>.
                        By automatically grouping duplicate stack traces and assigning root-cause severity, it eliminates{' '}
                        <span className="highlight">40% of manual triage overhead</span> for engineering teams.
                      </>
                    )}
                  </p>

                  <div className="cm-item-tags">
                    {project.stack.map(tech => (
                      <span key={tech} className="cm-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="cm-item-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      <span>See details / Live Demo</span>
                      <ExternalLink size={15} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--secondary"
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
