import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/content';

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Main Navigation */}
      <nav className={`nav ${sticky ? 'sticky' : ''}`}>
        <div className="nav-group-left">
          <a
            href="#welcome"
            className={`nav-item ${activeSection === 'welcome' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'welcome')}
          >
            welcome
          </a>
          <a
            href="#discover"
            className={`nav-item ${activeSection === 'discover' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'discover')}
          >
            discover
          </a>
        </div>

        <div className="nav-group-center">
          <a
            href="#welcome"
            className="nav-item nav-item-logo--lg"
            onClick={(e) => handleNavClick(e, 'welcome')}
            aria-label="Meet Sojitra Home"
          >
            <img
              className="logo logo--white"
              src="/images/illustrations/codemaster-white-logo.svg"
              alt="Meet Sojitra logo"
            />
          </a>
          <a
            href="#welcome"
            className="nav-item nav-item-logo--sm"
            onClick={(e) => handleNavClick(e, 'welcome')}
            aria-label="Meet Sojitra Home"
          >
            <img
              className="logo logo--dark"
              src="/images/illustrations/codemaster-dark-logo-sm.svg"
              alt="Meet Sojitra logo"
            />
          </a>
        </div>

        <div className="nav-group-right">
          <a
            href="#explore"
            className={`nav-item ${activeSection === 'explore' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'explore')}
          >
            explore
          </a>
          <a
            href="#contact"
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            contact
          </a>
        </div>
      </nav>

      {/* Burger Container */}
      <div className="burger-container" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`burger ${menuOpen ? 'collapsed' : ''}`}>
          <svg
            className="illustration-open"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 67.5 67.5"
            style={{ width: '40px', height: '40px' }}
          >
            <path
              fill="#1c2e57"
              d="M67.5,10.5v10.2c0,2.8-1,5.4-2.9,7.4c-1.9,2-4.5,3.1-7.2,3.1h-4.1c-1.4-0.2-2.5-1.4-2.5-2.8
              c0-1.4,1.1-2.6,2.5-2.8h4c1.3,0,2.5-0.5,3.4-1.5S62,22,62,20.7V10.5c0-2.7-2.1-4.8-4.7-4.8h-10c-2.6,0-4.8,2.1-4.8,4.8v0.7
              c-0.1,1.5-1.3,2.8-2.8,2.7c-0.7,0-1.4-0.3-1.9-0.9c-0.5-0.5-0.8-1.3-0.7-2V10.5c0-2.8,1.1-5.4,3-7.4C42,1.1,44.7,0,47.5,0h10
              C62.9,0.1,67.4,4.7,67.5,10.5z M20.2,0h-10C4.6,0,0,4.7,0,10.5v10.2c0,5.8,4.6,10.4,10.2,10.4h10c2.7,0,5.3-1.1,7.2-3.1
              c1.9-2,3-4.6,3-7.4V10.5C30.5,4.7,25.9,0,20.2,0z M47.3,36.4h10c5.6,0,10.2,4.7,10.2,10.4V57c0,5.8-4.6,10.4-10.2,10.5h-10
              c-5.6,0-10.2-4.7-10.2-10.4V46.8C37.1,41.1,41.6,36.4,47.3,36.4z M10.2,36.4h10c2.7,0,5.3,1.1,7.2,3
              c1.9,2,3,4.6,3,7.4v10.1c0,5.8-4.6,10.5-10.2,10.5h-10C4.6,67.5,0,62.8,0,57V46.8C0,41.1,4.6,36.4,10.2,36.4z"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Navigation Fullscreen Modal */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-group top">
          <div className="mobile-nav-item mobile-nav-item--top-left">
            <a
              href="#welcome"
              className="mobile-background mobile-home-background"
              onClick={(e) => handleNavClick(e, 'welcome')}
            >
              <p className="mobile-item-text">welcome</p>
            </a>
          </div>
          <div className="mobile-nav-item mobile-nav-item--top-right">
            <a
              href="#discover"
              className="mobile-background mobile-about-background"
              onClick={(e) => handleNavClick(e, 'discover')}
            >
              <p className="mobile-item-text">discover</p>
            </a>
          </div>
        </div>

        <div className="mobile-nav-group bottom">
          <div className="mobile-nav-item mobile-nav-item--bottom-left">
            <a
              href="#explore"
              className="mobile-background mobile-portfolio-background"
              onClick={(e) => handleNavClick(e, 'explore')}
            >
              <p className="mobile-item-text">explore</p>
            </a>
          </div>
          <div className="mobile-nav-item mobile-nav-item--bottom-right">
            <a
              href="#contact"
              className="mobile-background mobile-contact-background"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <p className="mobile-item-text">contact</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
