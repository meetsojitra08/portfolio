import React from 'react';
import { Code2, Server, Database } from 'lucide-react';
import { SKILL_GROUPS } from '../data/content';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="cm-section cm-skills-section">
      <div className="cm-container">
        <h3 className="cm-sub-section-title">Tools of the trade</h3>
        <p className="cm-lead-content" style={{ marginBottom: '3em' }}>
          Technologies and tools I specialize in to build <span className="highlight">performant full stack applications</span>,
          maintainable REST APIs, and production AI integrations.
        </p>

        <div className="cm-skills-grid">
          {SKILL_GROUPS.map((group, idx) => {
            const getIcon = () => {
              if (idx === 0) return <Code2 size={24} className="cm-skill-icon" />;
              if (idx === 1) return <Code2 size={24} className="cm-skill-icon" />;
              if (idx === 2) return <Server size={24} className="cm-skill-icon" />;
              return <Database size={24} className="cm-skill-icon" />;
            };

            return (
              <div key={group.title} className="cm-skill-category-card">
                <div className="cm-cat-top">
                  {getIcon()}
                  <h4 className="cm-cat-title">{group.title}</h4>
                </div>

                <div className="cm-cat-pills">
                  {group.items.map(item => (
                    <span key={item} className="cm-cat-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
