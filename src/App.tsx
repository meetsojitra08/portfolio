import { useEffect, useState } from 'react';
import { initSmoothScroll } from './lib/animations';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { LandscapeHero } from './components/LandscapeHero';
import { IntroPitch } from './components/IntroPitch';
import { CliffProcess } from './components/CliffProcess';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { FooterCTA } from './components/FooterCTA';

function App() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return false; // Warm illustrated theme default
  });

  const [active, setActive] = useState('home');
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return () => cleanup();
  }, []);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'scenic';
    localStorage.setItem('theme', dark ? 'dark' : 'scenic');
  }, [dark]);

  return (
    <main className="scenic-theme-main">
      {/* Preloader with counter */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Atmospheric UI enhancements */}
      <CustomCursor />
      <ScrollProgress />

      {/* Responsive Floating Navbar */}
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        activeSection={active}
        setActiveSection={setActive}
      />

      {/* Hero Section: Illustrated Sunset Mountain Landscape Parallax */}
      <section id="home">
        <LandscapeHero />
      </section>

      {/* "NEED A FULL STACK DEVELOPER?" Pitch */}
      <IntroPitch />

      {/* "WHAT TO EXPECT" Pagoda Cliff & 3-Step Process Roadmap */}
      <CliffProcess />

      {/* "CHECK MY LATEST PROJECTS" Showcase */}
      <Projects />

      {/* "WHERE I'VE WORKED" Experience Journey */}
      <Experience />

      {/* "ABOUT THE DEVELOPER" Profile & Stats */}
      <About />

      {/* "TOOLS OF THE TRADE" Skills Marquee */}
      <Skills />

      {/* "FOUNDATION & CERTIFICATIONS" Education */}
      <Education />

      {/* "ARE YOU READY TO START?" Scenic Night Forest Footer */}
      <FooterCTA />
    </main>
  );
}

export default App;
