import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, FileText, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const FooterCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="cm-footer">
      {/* 1. Organic Curved Vector Top Shape Divider */}
      <div className="cm-footer-top-shape-wrap">
        <img
          src="/images/illustrations/top-shape.svg"
          alt="footer top shape"
          className="cm-footer-top-shape"
        />
      </div>

      <div className="cm-container cm-footer-inner">
        {/* Call to Action Prompt */}
        <div className="cm-footer-cta-block">
          <h5 className="cm-footer-title">Are you ready to start?</h5>
          <p className="cm-footer-prompt">Let's talk about your next web project!</p>
          <div className="cm-footer-btn-row">
            <a href={`mailto:${PERSONAL_INFO.links.email}`} className="btn btn--primary">
              Contact me
            </a>
            <button onClick={handleCopyEmail} className="cm-btn-copy" title="Copy email address">
              <Mail size={16} />
              <span>{PERSONAL_INFO.links.email}</span>
              {copied ? <Check size={16} className="cm-check-copied" /> : <Copy size={16} />}
            </button>
          </div>
          {copied && <span className="cm-copied-bubble">Copied to clipboard!</span>}
        </div>

        {/* Footer Navigation Columns */}
        <div className="cm-footer-grid">
          {/* Column 1: Navigation Pages */}
          <div className="cm-footer-col">
            <h6 className="cm-col-title">Pages</h6>
            <ul className="cm-footer-links">
              <li><a href="#welcome">Welcome</a></li>
              <li><a href="#pitch">Discover</a></li>
              <li><a href="#projects">Explore</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="cm-footer-col">
            <h6 className="cm-col-title">Direct Contact</h6>
            <ul className="cm-footer-links">
              <li>
                <a href={`mailto:${PERSONAL_INFO.links.email}`}>
                  {PERSONAL_INFO.links.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone}`}>
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li>
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Profiles & Resume */}
          <div className="cm-footer-col">
            <h6 className="cm-col-title">Meet Sojitra.</h6>
            <p className="cm-col-sub">
              Full Stack &amp; AI Developer building scalable, beautiful web systems.
            </p>
            <div className="cm-social-icons">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PERSONAL_INFO.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume PDF"
              >
                <FileText size={20} />
              </a>
            </div>
            <div className="cm-copyright">
              All rights reserved · {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="cm-footer-bottom">
          <button onClick={scrollToTop} className="cm-btn-top" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Forest Vector Shapes */}
      <div className="cm-footer-decorations">
        <img
          src="/images/illustrations/home-footer-decoration-1.svg"
          alt="footer forest tree decoration"
          className="cm-decor-1"
        />
        <img
          src="/images/illustrations/home-footer-decoration-2.svg"
          alt="footer forest tree decoration"
          className="cm-decor-2"
        />
      </div>
    </footer>
  );
};
