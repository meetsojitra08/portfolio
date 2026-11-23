import React from 'react';
import { Code2, Server, Database, Cpu, Wrench } from 'lucide-react';
import { SKILL_GROUPS, MARQUEE_SKILLS_ROW1, MARQUEE_SKILLS_ROW2 } from '../data/content';

export const Skills: React.FC = () => {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 size={20} className="cat-icon" />;
      case 1:
        return <Wrench size={20} className="cat-icon" />;
      case 2:
        return <Server size={20} className="cat-icon" />;
      case 3:
        return <Database size={20} className="cat-icon" />;
      default:
        return <Cpu size={20} className="cat-icon" />;
    }
  };

  return (
    <section id="skills" className="scenic-skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="skills-header-block">
          <span className="section-eyebrow">TECHNICAL CAPABILITIES</span>
          <h2 className="skills-title">
            TOOLS OF THE <span className="accent-coral">TRADE</span>
          </h2>
          <p className="skills-subtitle">
            Modern, maintainable technologies leveraged in production to deliver resilient backend architectures and responsive user interfaces.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-categories-grid">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={group.title} className="skill-category-card">
              <div className="category-header">
                {getCategoryIcon(idx)}
                <h3 className="category-title">{group.title}</h3>
              </div>
              <div className="category-pills">
                {group.items.map(item => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dual-Row Infinite Marquee */}
        <div className="skills-marquee-container">
          <div className="marquee-track track-forward">
            <div className="marquee-content">
              {MARQUEE_SKILLS_ROW1.concat(MARQUEE_SKILLS_ROW1).map((skill, index) => (
                <span key={index} className="marquee-item">
                  <span className="marquee-bullet">✦</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="marquee-track track-reverse">
            <div className="marquee-content reverse">
              {MARQUEE_SKILLS_ROW2.concat(MARQUEE_SKILLS_ROW2).map((skill, index) => (
                <span key={index} className="marquee-item">
                  <span className="marquee-bullet">✦</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
