import React from 'react';

export const CliffProcess: React.FC = () => {
  return (
    <>
      {/* 1. Understanding your idea */}
      <div className="container">
        <section className="section">
          <div className="linear-content idea">
            <div className="linear-block linear-block--left">
              <h4>
                1. <span className="highlight">Understanding</span> your idea
              </h4>
              <p>
                The first phase is actually the most important one, as it involves a solid understanding of{' '}
                <strong>the vision you have and the goals you want to achieve</strong>. It involves also a good
                perception of what <strong>your business goals and architectural needs</strong> are, and how the web
                and database models can be utilized to help you <strong>achieve those goals</strong>.
              </p>
            </div>
            <div className="linear-block linear-block--right">
              <div className="tree-right-wrap">
                <img
                  src="/images/illustrations/tree-right.svg"
                  alt="forest tree decoration"
                  style={{ maxWidth: '280px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Crafting a stunning design */}
      <div className="container">
        <section className="section">
          <div className="linear-content design">
            <div className="linear-block linear-block--left image-left">
              <div className="tree-right-wrap">
                <img
                  src="/images/illustrations/tree-close-up-dark.svg"
                  alt="forest tree decoration"
                  style={{ maxWidth: '280px', height: 'auto' }}
                />
              </div>
            </div>
            <div className="linear-block linear-block--right">
              <h4>
                2. Crafting a stunning <span className="highlight">design &amp; architecture</span>
              </h4>
              <p>
                In the next phase, the main focus will lie on the system architecture, from responsive React user
                interfaces to PostgreSQL relational schema design. Your idea will be transformed into{' '}
                <strong>a user-friendly web application</strong> built with performance and simplicity in mind.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Decorative Blur Trees */}
      <div className="tree-blur-container">
        <div>
          <div>
            <img
              className="tree tree--right"
              src="/images/illustrations/tree-right.svg"
              alt="closed up tree of the forest"
            />
          </div>
          <div>
            <img
              className="tree tree--right tree--blur"
              src="/images/illustrations/tree-blur-right.png"
              alt="closed up blur tree of forest"
            />
          </div>
        </div>
      </div>

      {/* 3. Developing your project */}
      <div className="container">
        <section className="section">
          <div className="linear-content development">
            <div className="linear-block linear-block--left">
              <h4>
                3. <span className="highlight">Developing</span> your project
              </h4>
              <p>
                After the design approval, begins the development phase where specifications will be transformed into{' '}
                <strong>a real product</strong>. Your project will be created using{' '}
                <strong>the most suitable technology</strong> (Python, FastAPI, Django REST, React, Redis) with
                automated tests and monitoring to guarantee a <strong>fast and smooth release with 99.8% uptime</strong>.
              </p>
            </div>
            <div className="linear-block linear-block--right">
              <div className="tree-right-wrap">
                <img
                  src="/images/illustrations/tree-close-up-light.svg"
                  alt="forest tree decoration"
                  style={{ maxWidth: '280px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
