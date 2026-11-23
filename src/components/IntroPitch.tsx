import React from 'react';

export const IntroPitch: React.FC = () => {
  return (
    <>
      <div className="container" id="discover">
        <section className="section margin-top--large">
          <div className="title-content">
            <h2 className="">
              Need a <span className="highlight">freelance</span> full stack developer
              <br />
              for your website?
            </h2>
          </div>

          <div className="main-btn">
            <a href="#contact" className="btn btn--primary btn--large">
              Let's get started
            </a>
          </div>
        </section>

        <div className="section margin-top--large">
          <div className="content align--center">
            <p>
              Hey there! I am Meet Sojitra, a <strong>creative full stack developer &amp; AI engineer</strong>{' '}
              based in Ahmedabad, India. With 1+ year of hands-on experience in{' '}
              <strong>Python, Django, FastAPI, React, and PostgreSQL</strong>, I aim to create web systems that
              offer a <strong>modern look and feel</strong> and that are powered by code that's just as beautiful,
              sub-second fast, and scalable.
            </p>
          </div>
        </div>
      </div>

      {/* Cabin & What to expect Title Banner */}
      <section className="section">
        <div className="codemaster-content">
          <div className="images images--left">
            <img
              src="/images/illustrations/codemaster-house.svg"
              alt="The place where all the coding and the designing happens"
            />
            <div className="tree--left-blur">
              <img
                src="/images/illustrations/tree-blur-left.png"
                alt="a close up blur tree of the forest"
              />
            </div>
          </div>

          <div className="images images--right">
            <div className="title-container">
              <h3 className="xlg">
                What to
                <br />
                <span className="highlight">expect</span>
              </h3>
            </div>
            <div className="tree tree--bottom-blur">
              <img
                src="/images/illustrations/tree-blur-right.png"
                alt="a close up blur tree of the forest"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
