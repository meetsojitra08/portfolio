import { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function Education() {
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
    <section ref={sectionRef} className="section education-section">
      <SectionHeading
        index="06 / EDUCATION"
        title="Degree & certifications."
        highlightWord="Degree"
        subtitle="Formal academic degree in Information Technology complemented with continuous technical certifications."
      />

      <div className="education-grid">
        {/* Degree Card */}
        <div
          className={`education-card ${isInView ? 'is-revealed delay-1' : ''}`}
        >
          <div className="card-top-icon">
            <span className="project-type">{EDUCATION.period}</span>
            <GraduationCap size={18} className="edu-icon" />
          </div>

          <h3>{EDUCATION.degree}</h3>
          <p>{EDUCATION.field}</p>

          <div className="education-bottom">
            <strong>{EDUCATION.institution}</strong>
            <span>
              {EDUCATION.location} · {EDUCATION.grade}
            </span>
          </div>
        </div>

        {/* Certifications Card */}
        <div
          className={`cert-card ${isInView ? 'is-revealed delay-2' : ''}`}
        >
          <div className="card-top-icon">
            <span className="project-type">CERTIFICATIONS</span>
            <Award size={18} className="edu-icon" />
          </div>

          <ul>
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.num} className="cert-item">
                <span>{cert.num}</span>
                <div>
                  <strong>{cert.title}</strong>
                  <small>
                    {cert.issuer} · {cert.year}
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
