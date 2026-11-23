import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/content';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scenic-education-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="education-header-block">
          <span className="section-eyebrow">ACADEMIC & CONTINUOUS LEARNING</span>
          <h2 className="education-title">
            FOUNDATION & <span className="accent-coral">CERTIFICATIONS</span>
          </h2>
        </div>

        <div className="education-layout-grid">
          {/* Degree Card */}
          <div className="degree-card">
            <div className="card-badge">
              <GraduationCap size={16} />
              <span>FORMAL EDUCATION</span>
            </div>

            <div className="degree-header">
              <h3 className="degree-title">{EDUCATION.degree}</h3>
              <div className="degree-field">{EDUCATION.field}</div>
            </div>

            <div className="degree-meta">
              <span className="meta-inst">{EDUCATION.institution}</span>
              <span className="meta-dot">·</span>
              <span className="meta-loc">
                <MapPin size={13} /> {EDUCATION.location}
              </span>
            </div>

            <div className="degree-footer">
              <span className="grade-badge">Grade: {EDUCATION.grade}</span>
              <span className="period-badge">
                <Calendar size={13} /> 2021 — 2025
              </span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="certifications-card">
            <div className="card-badge">
              <Award size={16} />
              <span>INDUSTRY CERTIFICATIONS</span>
            </div>

            <div className="cert-list">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.num} className="cert-item">
                  <div className="cert-num">{cert.num}</div>
                  <div className="cert-details">
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-dot">·</span>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
