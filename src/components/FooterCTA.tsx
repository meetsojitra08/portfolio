import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, FileText, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const FooterCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  // Live Local Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="scenic-night-footer">
      {/* Top Transition Hills & Forest Silhouettes */}
      <div className="footer-landscape-transition">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="footer-cutout-svg">
          <path
            d="M0,80 C360,20 1080,20 1440,80 L1440,220 L0,220 Z"
            fill="#180719"
          />
          {/* Subtle night pine silhouettes along the crest */}
          <path
            d="M80,80 L90,55 L100,80 L115,50 L130,85 M350,60 L360,35 L370,62 L385,40 L400,65 M720,50 L735,22 L750,52 L770,30 L785,55 M1120,65 L1130,40 L1145,68 L1160,45 L1175,70"
            stroke="#100311"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Gentle Starry Sky Sparkles */}
        <div className="night-stars-overlay">
          <span className="star star-1" />
          <span className="star star-2" />
          <span className="star star-3" />
          <span className="star star-4" />
          <span className="star star-5" />
          <span className="star star-6" />
        </div>
      </div>

      <div className="section-container footer-content-wrap">
        {/* Main Footer Pitch */}
        <div className="footer-headline-row">
          <div className="footer-prompt-block">
            <span className="footer-eyebrow">GET IN TOUCH</span>
            <h2 className="footer-cta-title">
              ARE YOU READY TO <span className="accent-coral">START?</span>
            </h2>
            <p className="footer-cta-desc">
              Whether you need high-throughput full-stack development, dependable RESTful APIs,
              or intelligent AI product workflows — let's build something extraordinary together.
            </p>
          </div>

          <div className="footer-contact-actions">
            <button onClick={handleCopyEmail} className="btn-copy-email">
              <Mail size={16} />
              <span>{PERSONAL_INFO.links.email}</span>
              {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
            </button>
            {copied && <span className="copy-toast">Copied to clipboard!</span>}

            <a
              href={`mailto:${PERSONAL_INFO.links.email}?subject=Project%20Inquiry%20from%20Portfolio`}
              className="btn-send-message"
            >
              <span>SEND AN EMAIL</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation & Details Grid */}
        <div className="footer-meta-grid">
          {/* Col 1: Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">DIRECT CONTACT</h4>
            <ul className="footer-info-list">
              <li>
                <Mail size={15} className="col-icon" />
                <a href={`mailto:${PERSONAL_INFO.links.email}`}>{PERSONAL_INFO.links.email}</a>
              </li>
              <li>
                <Phone size={15} className="col-icon" />
                <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a>
              </li>
              <li>
                <MapPin size={15} className="col-icon" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Social & Profiles */}
          <div className="footer-col">
            <h4 className="footer-col-title">PROFILES & CODE</h4>
            <ul className="footer-info-list">
              <li>
                <Github size={15} className="col-icon" />
                <a href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li>
              <li>
                <Linkedin size={15} className="col-icon" />
                <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Network
                </a>
              </li>
              <li>
                <FileText size={15} className="col-icon" />
                <a href={PERSONAL_INFO.links.resume} target="_blank" rel="noopener noreferrer">
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Status & Time */}
          <div className="footer-col">
            <h4 className="footer-col-title">CURRENT STATUS</h4>
            <div className="availability-chip">
              <span className="pulsing-dot" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
            <div className="local-time-card">
              <span className="time-lbl">Ahmedabad, India (IST)</span>
              <span className="time-val">{timeStr || 'Loading...'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Meet Sojitra. Crafted with passion, precision & code.
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top" aria-label="Back to top">
            <span>BACK TO TOP</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
