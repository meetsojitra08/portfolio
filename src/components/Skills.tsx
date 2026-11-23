import { Code2, Database, Layers3, Workflow, Sparkles, Terminal, Cpu } from 'lucide-react';
import {
  SKILL_GROUPS,
  MARQUEE_SKILLS_ROW1,
  MARQUEE_SKILLS_ROW2,
  CONCEPTS
} from '../data/content';
import { SectionHeading } from './SectionHeading';

const groupIcons = [Code2, Layers3, Workflow, Database];

// Helper to double items for seamless infinite marquee loop
const row1Items = [...MARQUEE_SKILLS_ROW1, ...MARQUEE_SKILLS_ROW1];
const row2Items = [...MARQUEE_SKILLS_ROW2, ...MARQUEE_SKILLS_ROW2];

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading
        index="04 / MY TOOLKIT"
        title="Tools of the trade."
        highlightWord="trade"
        subtitle="The modern languages, frameworks, and databases I use to build dependable digital products."
      />

      {/* Two-Row Infinite Marquee with Opposite Directions and Pause on Hover */}
      <div className="skills-marquee-container" aria-label="Skills marquee">
        {/* Row 1 - Moves Left */}
        <div className="marquee-row marquee-row-left">
          <div className="marquee-track">
            {row1Items.map((skill, index) => (
              <div key={`${skill}-${index}`} className="marquee-pill">
                <span className="marquee-glow-icon">
                  <Sparkles size={11} />
                </span>
                <span className="marquee-skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="marquee-row marquee-row-right">
          <div className="marquee-track">
            {row2Items.map((skill, index) => (
              <div key={`${skill}-${index}`} className="marquee-pill">
                <span className="marquee-glow-icon">
                  <Terminal size={11} />
                </span>
                <span className="marquee-skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static 4-Grid Categorized Skill Cards */}
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = groupIcons[i] || Cpu;
          return (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <span>0{i + 1}</span>
                <Icon size={19} />
              </div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Architectural Concepts Line */}
      <div className="concepts-line">
        <span>ALSO COMFORTABLE WITH</span>
        <p>
          {CONCEPTS.map((concept, i) => (
            <span key={concept}>
              {concept}
              {i < CONCEPTS.length - 1 && <i />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
