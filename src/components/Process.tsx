import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { Magnetic } from './Magnetic';

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section services-section">
      <SectionHeading
        index="05 / HOW I WORK"
        title="From concept to working product."
        highlightWord="product"
        subtitle="Practical end-to-end software development across the frontend, backend, and cloud deployment."
      />

      <div className="process-container">
        {/* Animated Connecting Line Across the 3 Cards */}
        <div className="process-connecting-line" aria-hidden="true">
          <div
            className={`process-line-progress ${isInView ? 'is-animated' : ''}`}
          />
        </div>

        <div className="services-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div
              className={`service-card ${isInView ? 'is-revealed' : ''}`}
              key={step.num}
              style={{
                transitionDelay: `${i * 0.18}s`,
              }}
            >
              {/* Step indicator node linked to connecting line */}
              <div className="step-node" aria-hidden="true">
                <span className={`node-marker ${isInView ? 'active' : ''}`} />
              </div>

              <span className="service-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>

              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Magnetic strength={0.25}>
                <div className="service-arrow-wrap">
                  <ArrowUpRight className="service-arrow" size={17} />
                </div>
              </Magnetic>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
