import { useEffect, useState } from 'react';
import { initSmoothScroll } from './lib/animations';
import { Navbar } from './components/Navbar';
import { LandscapeHero } from './components/LandscapeHero';
import { IntroPitch } from './components/IntroPitch';
import { CliffProcess } from './components/CliffProcess';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { FooterCTA } from './components/FooterCTA';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const cleanup = initSmoothScroll();
    return () => cleanup();
  }, []);

  return (
    <div className="cm-page-wrapper">
      {/* Code-Master Desktop Sticky & Mobile Quadrant Navbar */}
      <Navbar
        dark={false}
        onToggleTheme={() => {}}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Code-Master Hero Parallax Scene (Sky, Sun, Mountains, Clouds, Forest 4, H1 Title, Forest 3, 2, 1, Blurred Trees) */}
      <LandscapeHero />

      {/* Intro Pitch: "Need a freelance full stack developer?" + Coding Cabin */}
      <IntroPitch />

      {/* Process: "What to expect" (1. Understanding, 2. Design, 3. Development) */}
      <CliffProcess />

      {/* Projects: "Check my latest projects" (Alternating 2-column layout) */}
      <Projects />

      {/* Experience: "Where I've worked" */}
      <Experience />

      {/* Skills: "Tools of the trade" */}
      <Skills />

      {/* Footer: "Are you ready to start?" with top-shape.svg & wine maroon gradient */}
      <FooterCTA />
    </div>
  );
}

export default App;
