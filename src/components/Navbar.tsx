import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, Volume2, VolumeX, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/content';
import { Magnetic } from './Magnetic';
import { scrollToElement } from '../lib/animations';
import { isAudioEnabled, toggleAudio, playPillBeep } from '../lib/sound';

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export function Navbar({ dark, onToggleTheme, activeSection, setActiveSection }: NavbarProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(() => isAudioEnabled());

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > 120 && currentScrollY > lastScrollY && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    playPillBeep(700, 0.05);
    setActiveSection(id);
    setMenuOpen(false);
    scrollToElement(`#${id}`);
  };

  const handleToggleSound = () => {
    const nextState = toggleAudio();
    setAudioActive(nextState);
  };

  return (
    <header
      className={`topbar ${hidden ? 'topbar-hidden' : ''} ${scrolled ? 'topbar-scrolled' : ''}`}
      role="banner"
    >
      <Magnetic strength={0.25}>
        <a
          className="brand"
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Meet Sojitra Home"
        >
          MS<span>.</span>
        </a>
      </Magnetic>

      <nav
        className={`nav ${menuOpen ? 'nav-open' : ''}`}
        aria-label="Main navigation"
      >
        {NAV_LINKS.map(({ id, label, num }) => (
          <a
            key={id}
            className={`nav-link ${activeSection === id ? 'active' : ''}`}
            href={`#${id}`}
            onClick={(e) => handleNavClick(e, id)}
          >
            <span className="nav-num">{num}</span>
            {label}
          </a>
        ))}
      </nav>

      <div className="top-actions">
        {/* Audio FX Toggle Pill */}
        <Magnetic strength={0.2}>
          <button
            type="button"
            className={`sfx-toggle-btn ${audioActive ? 'is-active' : ''}`}
            onClick={handleToggleSound}
            title={audioActive ? 'Mute SFX' : 'Enable Sci-Fi SFX'}
            aria-label="Toggle Sci-Fi SFX"
          >
            {audioActive ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span className="sfx-label">{audioActive ? 'SFX ON' : 'SFX OFF'}</span>
          </button>
        </Magnetic>

        <Magnetic strength={0.3}>
          <a
            className="hire-link"
            href={`mailto:${PERSONAL_INFO.links.email}`}
            data-cursor="pointer"
            onClick={() => playPillBeep(800, 0.05)}
          >
            LET'S TALK <ArrowUpRight size={13} />
          </a>
        </Magnetic>

        <Magnetic strength={0.25}>
          <button
            className="theme-toggle"
            onClick={() => {
              playPillBeep(600, 0.05);
              onToggleTheme();
            }}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            data-cursor="pointer"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </Magnetic>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
