import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { Magnetic } from './Magnetic';

function StatCounter({
  target,
  suffix,
  isInfinity,
  startCount,
}: {
  target?: number;
  suffix: string;
  isInfinity?: boolean;
  startCount: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    if (isInfinity || target === undefined) return;

    const duration = 1200; // ms
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [startCount, target, isInfinity]);

  if (isInfinity) {
    return (
      <strong className={`stat-infinity ${startCount ? 'is-animated' : ''}`}>
        ∞
      </strong>
    );
  }

  return (
    <strong>
      {count}
      {suffix && <span>{suffix}</span>}
    </strong>
  );
}

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-section" id="about">
      <SectionHeading
        index="02 / ABOUT ME"
        title="Curious by nature. Developer by choice."
        highlightWord="choice"
        subtitle="Full stack software developer passionate about clean architecture, scalable backends, and responsive user experiences."
      />

      <div className="about-grid">
        <div className="about-statement">
          I turn complex problems into <span>clear, useful</span> digital experiences.
        </div>

        <div className="about-copy">
          {PERSONAL_INFO.aboutParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <Magnetic strength={0.25}>
            <a
              className="text-link"
              href={`mailto:${PERSONAL_INFO.links.email}`}
              data-cursor="pointer"
            >
              A LITTLE MORE? LET'S CONNECT <ArrowUpRight size={14} />
            </a>
          </Magnetic>
        </div>

        <div className="about-mark">
          <div className="mark-grid" />
          <strong>MS<span>.</span></strong>
          <small>BUILD / LEARN / REPEAT</small>
        </div>
      </div>

      {/* Animated Stats Counter Row */}
      <div ref={statsRef} className="stat-strip">
        {STATS.map((stat, i) => (
          <div key={i} className="stat-item">
            <StatCounter
              target={stat.numeric}
              suffix={stat.suffix}
              isInfinity={stat.isInfinity}
              startCount={hasStarted}
            />
            <small>{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
