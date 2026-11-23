import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { Magnetic } from './Magnetic';
import { scrollToElement } from '../lib/animations';

export function FooterCTA() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live local time in Ahmedabad, India (IST)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setLocalTime(timeString);
      } catch {
        // Fallback if Intl timeZone unavailable
        const now = new Date();
        setLocalTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('#home');
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`copy-toast ${copied ? 'is-visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <span className="toast-icon">
          <Check size={14} />
        </span>
        <span>Email copied to clipboard!</span>
      </div>

      {/* Inverted High-Contrast Contact CTA Section */}
      <section className="contact-section" id="contact" aria-label="Contact">
        <div className="contact-kicker">
          <span className="dot pulse-dot" />
          <span>{PERSONAL_INFO.availability}</span>
        </div>

        <div className="contact-main">
          <h2>
            Have a project<br />
            <span>in mind?</span>
          </h2>

          <div className="contact-cta">
            <span>HAVE AN IDEA OR AN OPPORTUNITY?</span>

            {/* Giant Magnetic CTA Button */}
            <Magnetic strength={0.35}>
              <a
                className="main-cta-btn"
                href={`mailto:${PERSONAL_INFO.links.email}`}
                data-cursor="pointer"
              >
                LET'S TALK <ArrowUpRight size={28} />
              </a>
            </Magnetic>

            {/* Click-to-copy email pill with copy icon & feedback */}
            <Magnetic strength={0.25}>
              <button
                className="copy-email-btn"
                onClick={handleCopyEmail}
                data-cursor="pointer"
                title="Click to copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{PERSONAL_INFO.links.email}</span>
                <span className="copy-hint">{copied ? 'COPIED!' : 'CLICK TO COPY'}</span>
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="contact-bottom">
          <div className="contact-bottom-left">
            <p>
              Open to full-stack, backend and software development opportunities.
            </p>

            {/* Live Local Time Display */}
            <div className="live-time-badge" title="Meet's Current Local Time (IST)">
              <span className="time-pulse-dot" />
              <Clock size={12} className="time-icon" />
              <span>
                AHMEDABAD, IN · <strong>{localTime || 'LIVE IST'}</strong> (UTC+5:30)
              </span>
            </div>
          </div>

          <div className="social-links">
            <Magnetic strength={0.25}>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={14} /> LINKEDIN <ArrowUpRight size={12} />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                aria-label="GitHub profile"
              >
                <Github size={14} /> GITHUB <ArrowUpRight size={12} />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={`mailto:${PERSONAL_INFO.links.email}`}
                data-cursor="pointer"
                aria-label="Send email"
              >
                <Mail size={14} /> EMAIL <ArrowUpRight size={12} />
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer" role="contentinfo">
        <Magnetic strength={0.25}>
          <a
            className="brand"
            href="#home"
            onClick={handleBackToTop}
            data-cursor="pointer"
            aria-label="Back to top"
          >
            MS<span>.</span>
          </a>
        </Magnetic>

        <span className="copyright">
          © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
        </span>

        <span className="built-tag">DESIGNED & BUILT WITH INTENTION</span>

        <Magnetic strength={0.25}>
          <a
            className="back-to-top-link"
            href="#home"
            onClick={handleBackToTop}
            data-cursor="pointer"
          >
            BACK TO TOP ↑
          </a>
        </Magnetic>
      </footer>
    </>
  );
}
