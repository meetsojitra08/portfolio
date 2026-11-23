import { useEffect, useRef, useState } from 'react';
import { EXPERIENCES } from '../data/content';
import { SectionHeading } from './SectionHeading';

function ExperienceCard({
  job,
  index,
  isActive,
}: {
  job: (typeof EXPERIENCES)[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <article
      className={`experience-item timeline-entry ${isActive ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* Glowing Milestone Node */}
      <div className="timeline-node" aria-hidden="true">
        <div className={`node-dot ${isActive ? 'is-active' : ''}`} />
      </div>

      <div className="experience-date">
        {job.period}
        <span>0{index + 1}</span>
      </div>

      <div className="experience-main">
        <div className="experience-title">
          <div>
            <h3>{job.company}</h3>
            <p>{job.role}</p>
          </div>
          <span className="location">{job.place}</span>
        </div>
        <ul>
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<boolean[]>(
    new Array(EXPERIENCES.length).fill(false)
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the experience section the user has scrolled
      const totalHeight = rect.height;
      const visibleFromTop = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, (visibleFromTop - 120) / (totalHeight - 80)));

      setLineProgress(progress);

      // Trigger visibility for each job card
      setActiveItems(
        EXPERIENCES.map((_, i) => {
          const threshold = (i + 0.3) / EXPERIENCES.length;
          return progress >= threshold * 0.6;
        })
      );

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section experience-section" id="experience">
      <SectionHeading
        index="03 / EXPERIENCE"
        title="Where I've worked & built."
        highlightWord="worked"
        subtitle="Professional software engineering experience across high-uptime backend services and responsive web applications."
      />

      <div className="experience-timeline-wrap">
        {/* Continuous SVG Drawing Timeline Line */}
        <div className="vertical-timeline-track" aria-hidden="true">
          <div
            className="vertical-timeline-fill"
            style={{
              transform: `scaleY(${lineProgress})`,
            }}
          />
        </div>

        <div className="experience-list">
          {EXPERIENCES.map((job, i) => (
            <ExperienceCard
              key={job.company}
              job={job}
              index={i}
              isActive={activeItems[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
