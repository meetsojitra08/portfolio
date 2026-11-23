import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/content';

export const Projects: React.FC = () => {
  return (
    <>
      <div className="container" id="explore">
        <section className="section">
          <div className="title-content">
            <h2 className="xlg">
              Check my latest
              <br />
              <span className="highlight">projects</span>
            </h2>
          </div>

          <div className="main-btn">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              Explore more projects
            </a>
          </div>
        </section>
      </div>

      {/* Item 1: PickWise (Image Left, Content Right) */}
      <div className="container">
        <section className="section margin--large">
          <div className="portfolio-item">
            <div className="item item-image item-image--left">
              <div className="image-portfolio image-website">
                <img
                  src="/images/illustrations/placeholder-website-preview.jpg"
                  alt="preview of PickWise project made by Meet Sojitra"
                />
              </div>
            </div>

            <div className="item item-content item-content--right">
              <h4>PickWise</h4>
              <p>
                Due to the <strong>minimalist design and AI decision engine</strong>, side-by-side comparisons have
                become crucial in e-commerce. PickWise is a platform engineered by me using{' '}
                <strong>FastAPI, React, TypeScript, and Redis</strong>. In addition to verified data models, this
                project delivers query recommendations in <strong>350ms processing speed</strong>.
              </p>

              <div className="portfolio-tags">
                <span className="portfolio-tag">FastAPI</span>
                <span className="portfolio-tag">React</span>
                <span className="portfolio-tag">TypeScript</span>
                <span className="portfolio-tag">PostgreSQL</span>
                <span className="portfolio-tag">Redis</span>
              </div>

              <div className="main-btn btn-group-row">
                <a
                  href="https://pick-wise-roan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  See details / Live Demo
                </a>
                <a
                  href="https://github.com/meetsojitra08/PickWise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Decorative Tree Blur */}
      <div className="tree-blur-container">
        <div>
          <div>
            <img
              className="tree tree--left tree--blur"
              src="/images/illustrations/tree-blur-left.png"
              alt="closed up blur tree of forest"
            />
          </div>
        </div>
      </div>

      {/* Item 2: BugSense (Content Left, Image Right) */}
      <div className="container">
        <section className="section margin--large">
          <div className="portfolio-item">
            <div className="item item-content item-content--left">
              <h4>BugSense</h4>
              <p>
                An AI-driven triage platform designed to convert raw stack traces and error logs into actionable,
                prioritized tickets. Powered by <strong>Django REST, React, PostgreSQL trigram search, and Groq LLM</strong>,
                it resolves duplicates and classifies severity in <strong>under 2 seconds</strong>.
              </p>

              <div className="portfolio-tags">
                <span className="portfolio-tag">React</span>
                <span className="portfolio-tag">Django REST</span>
                <span className="portfolio-tag">PostgreSQL</span>
                <span className="portfolio-tag">Groq LLM</span>
                <span className="portfolio-tag">Pydantic</span>
              </div>

              <div className="main-btn btn-group-row">
                <a
                  href="https://bugsence-lilac.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  See details / Live Demo
                </a>
                <a
                  href="https://github.com/meetsojitra08/bugsence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="item item-image item-image--right">
              <div className="image-portfolio image-app">
                <img
                  src="/images/illustrations/placeholder-app-preview.jpg"
                  alt="preview of BugSense project made by Meet Sojitra"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
