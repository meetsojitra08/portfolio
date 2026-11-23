import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/content';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scenic-experience-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="experience-header-block">
          <span className="section-eyebrow">CAREER MILESTONES</span>
          <h2 className="experience-title">
            WHERE I'VE <span className="accent-coral">WORKED</span>
          </h2>
          <p className="experience-subtitle">
            Demonstrated engineering impact across high-uptime backend services,
            responsive business dashboards, and real-time enterprise automation.
          </p>
        </div>

        {/* Trail Timeline of Experience */}
        <div className="scenic-experience-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.company} className="scenic-timeline-node">
              {/* Waypoint Marker */}
              <div className="timeline-waypoint">
                <div className="waypoint-ring">
                  <span className="waypoint-num">0{index + 1}</span>
                </div>
                <div className="waypoint-line" />
              </div>

              {/* Waypoint Content Card */}
              <div className="timeline-card">
                <div className="card-top-bar">
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="role-title">{exp.role}</div>
                  </div>

                  <div className="timeline-badges">
                    <span className="badge-period">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="badge-place">
                      <MapPin size={13} />
                      {exp.place}
                    </span>
                  </div>
                </div>

                <div className="card-divider" />

                {/* Achievements List from Resume */}
                <ul className="experience-points-list">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="point-item">
                      <CheckCircle size={15} className="point-bullet" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
