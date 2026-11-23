import React from 'react';

export const CliffProcess: React.FC = () => {
  return (
    <section id="process" className="cm-section cm-process-section">
      {/* Decorative blurred pine trees on edges */}
      <img
        src="/images/illustrations/tree-blur-left.png"
        alt="blurred pine left"
        className="cm-side-tree cm-side-left"
      />
      <img
        src="/images/illustrations/tree-blur-right.png"
        alt="blurred pine right"
        className="cm-side-tree cm-side-right"
      />

      <div className="cm-container">
        {/* Section Title */}
        <h3 className="cm-sub-section-title">What to expect</h3>

        {/* 3 Numbered Steps matching Code-Master layout */}
        <div className="cm-steps-container">
          {/* Step 1 */}
          <div className="cm-step-block">
            <h4 className="cm-step-heading">
              1. Understanding your <span className="highlight">idea</span>
            </h4>
            <p className="cm-step-text">
              The first phase is actually the most important one, as it involves a solid understanding of{' '}
              <span className="highlight">the vision you have and the goals you want to achieve</span>.
              It involves also a thorough perception of what{' '}
              <span className="highlight">your business architecture and user needs</span> are, and how
              modern web standards, database schemas, and clean RESTful API contracts can be engineered
              to help you <span className="highlight">achieve those goals</span>.
            </p>
          </div>

          {/* Step 2 */}
          <div className="cm-step-block">
            <h4 className="cm-step-heading">
              2. Crafting a stunning <span className="highlight">design &amp; architecture</span>
            </h4>
            <p className="cm-step-text">
              In the next phase, the main focus will lie on the system design — from responsive React user interfaces
              to relational database normalization in <strong>PostgreSQL and MySQL</strong>.
              Your idea will be transformed into{' '}
              <span className="highlight">a user-friendly, high-performance web experience</span> built with
              simplicity, accessibility, and sub-32% lower rendering latency in mind.
            </p>
          </div>

          {/* Step 3 */}
          <div className="cm-step-block">
            <h4 className="cm-step-heading">
              3. Developing your <span className="highlight">project</span>
            </h4>
            <p className="cm-step-text">
              After architectural alignment, begins the development phase where designs are transformed into{' '}
              <span className="highlight">a production-ready product</span>. Your application will be crafted
              using <span className="highlight">the most suitable technology</span> (Python, Django REST Framework,
              FastAPI, React, Redis), backed by automated testing, sub-2s AI log triage, and post-launch
              monitoring to guarantee a <span className="highlight">fast, smooth release with 99.8% uptime</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
