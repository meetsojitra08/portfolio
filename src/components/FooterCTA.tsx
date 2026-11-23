import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/content';

export const FooterCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="footer-home" id="contact">
      <img
        className="footer-top-shape"
        src="/images/illustrations/top-shape.svg"
        alt="footer top shape"
      />

      <div className="container">
        <div className="footer-primary">
          <div className="footer-contact">
            <h5>
              Are you ready
              <br />
              to start?
            </h5>
            <p>
              Let's talk about it!{' '}
              <a href={`mailto:${PERSONAL_INFO.links.email}`} className="underline">
                Contact me
              </a>
            </p>
            <div>
              <button onClick={handleCopyEmail} className="footer-copy-btn">
                <span>{PERSONAL_INFO.links.email}</span>
                {copied && <span className="toast-copied">✓ Copied!</span>}
              </button>
            </div>
          </div>

          <div className="footer-pages">
            <h6>pages</h6>
            <ul>
              <li><a href="#welcome">welcome</a></li>
              <li><a href="#discover">discover</a></li>
              <li><a href="#explore">explore</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>

          <div className="footer-languages">
            <h6>location</h6>
            <ul>
              <li><span>{PERSONAL_INFO.location}</span></li>
              <li><span>{PERSONAL_INFO.phone}</span></li>
              <li><span>{PERSONAL_INFO.availability}</span></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h6>resume</h6>
            <p style={{ color: '#ffd8bd', fontSize: '0.95em', marginBottom: '0.8em' }}>
              Download official developer resume (PDF)
            </p>
            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ fontSize: '1em', padding: '0.4em 1.2em' }}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="footer-secondary">
          <div className="footer-logo-container">
            <div className="logo">
              <h6>Meet Sojitra.</h6>
            </div>
            <div className="copyrights">
              <p>All rights reserved - {new Date().getFullYear()}</p>
            </div>
          </div>

          <div className="footer-socials-container">
            <ul className="socials-list">
              <li className="social-item">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={PERSONAL_INFO.links.github}
                >
                  <img
                    className="social-icon"
                    src="/images/illustrations/github.svg"
                    alt="github profile"
                  />
                </a>
              </li>
              <li className="social-item">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={PERSONAL_INFO.links.linkedin}
                >
                  <img
                    className="social-icon"
                    src="/images/illustrations/facebook.svg"
                    alt="linkedin profile"
                  />
                </a>
              </li>
              <li className="social-item">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                >
                  <img
                    className="social-icon"
                    src="/images/illustrations/instagram.svg"
                    alt="email contact"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src="/images/illustrations/home-footer-decoration-1.svg"
        alt="home footer decoration"
        className="home-footer-decoration-1"
      />
      <img
        src="/images/illustrations/home-footer-decoration-2.svg"
        alt="home footer decoration"
        className="home-footer-decoration-2"
      />
    </footer>
  );
};
