import React, { useEffect, useState } from 'react';
import { Home, User, Briefcase, Mail, X, Menu } from 'lucide-react';
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
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
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
      {/* Desktop Main Navigation Bar */}
      <nav className={`cm-navbar ${sticky ? 'cm-navbar-sticky' : ''}`}>
        <div className="cm-nav-container">
          {/* Left Group */}
          <div className="cm-nav-group cm-nav-left">
            <a
              href="#welcome"
              className={`cm-nav-item ${activeSection === 'welcome' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'welcome')}
            >
              welcome
            </a>
            <a
              href="#pitch"
              className={`cm-nav-item ${activeSection === 'pitch' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'pitch')}
            >
              discover
            </a>
          </div>

          {/* Center Brand Logo */}
          <div className="cm-nav-center">
            <a
              href="#welcome"
              className="cm-logo"
              onClick={(e) => handleNavClick(e, 'welcome')}
              aria-label="Meet Sojitra Home"
            >
              <span className="cm-logo-symbol">✦</span>
              <span className="cm-logo-text">MEET SOJITRA</span>
            </a>
          </div>

          {/* Right Group */}
          <div className="cm-nav-group cm-nav-right">
            <a
              href="#projects"
              className={`cm-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              explore
            </a>
            <a
              href="#contact"
              className={`cm-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Neumorphic Circular Toggle Button */}
      <button
        className={`cm-mobile-toggle ${menuOpen ? 'is-active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile 4-Quadrant Radial Menu Modal */}
      <div className={`cm-mobile-quadrant-modal ${menuOpen ? 'is-open' : ''}`}>
        <div className="cm-quadrants-grid">
          {/* Quadrant 1: Top-Left (Terracotta Red) */}
          <a
            href="#welcome"
            className="cm-quadrant quad-home"
            onClick={(e) => handleNavClick(e, 'welcome')}
          >
            <div className="quad-circle-badge">
              <Home size={24} />
            </div>
            <span className="quad-label">Welcome</span>
          </a>

          {/* Quadrant 2: Top-Right (Sage Green) */}
          <a
            href="#pitch"
            className="cm-quadrant quad-about"
            onClick={(e) => handleNavClick(e, 'pitch')}
          >
            <div className="quad-circle-badge">
              <User size={24} />
            </div>
            <span className="quad-label">Discover</span>
          </a>

          {/* Quadrant 3: Bottom-Left (Cyan / Lake Blue) */}
          <a
            href="#projects"
            className="cm-quadrant quad-projects"
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            <div className="quad-circle-badge">
              <Briefcase size={24} />
            </div>
            <span className="quad-label">Explore</span>
          </a>

          {/* Quadrant 4: Bottom-Right (Warm Apricot) */}
          <a
            href="#contact"
            className="cm-quadrant quad-contact"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <div className="quad-circle-badge">
              <Mail size={24} />
            </div>
            <span className="quad-label">Contact</span>
          </a>
        </div>
      </div>
    </>
  );
};
