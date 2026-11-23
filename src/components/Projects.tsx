import { PROJECTS } from '../data/content';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';
import { Sparkles, Terminal } from 'lucide-react';

export function Projects() {
  return (
    <section className="section projects-section space-projects-section" id="projects">
      <SectionHeading
        index="01 / SELECTED PROJECTS"
        title="Featured work & software."
        highlightWord="software"
        subtitle="Full-stack web applications and AI platforms built with modern TypeScript, Python, and scalable cloud architectures."
      />

      {/* Portfolio Projects Info Bar */}
      <div className="missions-info-strip">
        <div className="strip-item">
          <Terminal size={12} />
          <span>FEATURED WORK: 2 PRODUCTION PLATFORMS</span>
        </div>
        <div className="strip-item">
          <Sparkles size={12} />
          <span>FULL STACK & AI POWERED</span>
        </div>
      </div>

      <div className="project-list stacking-container">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>

      <div className="projects-note space-projects-note">
        <div className="note-beam" />
        <span>MORE PROJECTS IN DEVELOPMENT</span>
        <span>BUILT TO LEARN. MADE TO SOLVE.</span>
      </div>
    </section>
  );
}
