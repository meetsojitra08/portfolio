import { useEffect, useState } from 'react';
import { initSmoothScroll } from './lib/animations';
import { SpaceBackground } from './components/SpaceBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { GrainOverlay } from './components/GrainOverlay';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Education } from './components/Education';
import { FooterCTA } from './components/FooterCTA';
import { PageTransition } from './components/PageTransition';

function App() {
  // Dark mode is the primary default
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const [active, setActive] = useState('home');
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return () => cleanup();
  }, []);

  // Sync theme with document element and localStorage
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <main className="grid-bg space-theme-main">
      {/* Deep Space Interactive Animated Background */}
      <SpaceBackground />

      {/* Route & Page Transition Curtain */}
      <PageTransition />

      {/* Preloader with 0-100% counter & clip-path wipe */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Atmospheric & Interactive UI enhancements */}
      <CustomCursor />
      <ScrollProgress />
      <CursorGlow />
      <GrainOverlay />

      {/* Navbar with scroll show/hide, blur backdrop & magnetic button */}
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        activeSection={active}
        setActiveSection={setActive}
      />

      {/* Hero Section with masked reveals & lazy-loaded 3D element */}
      <Hero dark={dark} preloaderFinished={preloaderFinished} />

      {/* Projects Section with 3D tilt, spotlight glow, zoom preview & card stacking */}
      <Projects />

      {/* About Section with animated stats counter 1+, 2, 5+, ∞ */}
      <About />

      {/* Experience Section with vertical drawing timeline on scroll */}
      <Experience />

      {/* Skills Section with two-row opposite marquee & icon glow */}
      <Skills />

      {/* Process Section with 3 cards & animated connecting line */}
      <Process />

      {/* Education & Certifications Section with staggered reveals */}
      <Education />

      {/* Footer CTA Section: Inverted High-Contrast, Copy Email Toast & Live Local Time */}
      <FooterCTA />
    </main>
  );
}

export default App;
