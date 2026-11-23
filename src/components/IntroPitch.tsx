import React from 'react';
import { PERSONAL_INFO } from '../data/content';

export const IntroPitch: React.FC = () => {
  return (
    <section id="pitch" className="cm-section cm-intro-section">
      <div className="cm-container">
        {/* Main Title */}
        <h2 className="cm-section-title">
          Need a freelance <span className="highlight">full stack developer</span>
          <br />
          for your website or product?
        </h2>

        {/* Primary CTA Button */}
        <div className="cm-btn-wrap">
          <a href="#contact" className="btn btn--primary">
            Let's get started
          </a>
        </div>

        {/* Narrative Paragraph */}
        <p className="cm-lead-content">
          Hey there! I am Meet Sojitra, a{' '}
          <span className="highlight">creative Full Stack Developer and AI Engineer</span> based in
          Ahmedabad, India. With 1+ year of hands-on production experience in{' '}
          <strong>Python, Django REST, FastAPI, React, TypeScript, and PostgreSQL</strong>, I aim to
          engineer web applications that offer a <span className="highlight">modern, polished look and feel</span>{' '}
          and that are powered by backend code that’s just as beautiful, resilient, and scalable.
        </p>

        {/* The Place Where All The Coding & Designing Happens (The Cabin!) */}
        <div className="cm-cabin-stage">
          <img
            src="/images/illustrations/tree-blur-left.png"
            alt="forest pine tree left"
            className="cm-cabin-blur-l"
          />
          <img
            src="/images/illustrations/codemaster-house.svg"
            alt="The place where all the coding and designing happens"
            className="cm-house-svg"
          />
          <img
            src="/images/illustrations/tree-blur-right.png"
            alt="forest pine tree right"
            className="cm-cabin-blur-r"
          />
        </div>
      </div>
    </section>
  );
};
