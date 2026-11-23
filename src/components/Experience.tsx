import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/content';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="cm-section cm-experience-section">
      <div className="cm-container">
        <h3 className="cm-sub-section-title">Where I've worked</h3>

        <div className="cm-experience-grid">
          {EXPERIENCES.map(exp => (
            <div key={exp.company} className="cm-experience-card">
              <div className="cm-exp-header">
                <div>
                  <h4 className="cm-exp-company">{exp.company}</h4>
                  <div className="cm-exp-role">{exp.role}</div>
                </div>

                <div className="cm-exp-meta">
                  <span className="cm-exp-badge">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="cm-exp-badge">
                    <MapPin size={13} />
                    {exp.place}
                  </span>
                </div>
              </div>

              <ul className="cm-exp-points">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle size={15} className="cm-point-check" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
