/**
 * Skills data
 * Source of truth: docs/03-CONTENT.md
 */

export interface SkillItem {
  name: string;
  primary?: boolean;
}

export interface SkillCategory {
  index: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const coreStack: string[] = [
  "Python",
  "Django",
  "FastAPI",
  "React",
  "TypeScript",
  "PostgreSQL",
];

export const skillCategories: SkillCategory[] = [
  {
    index: "01",
    title: "BACKEND",
    description: "Designing and building APIs and business logic.",
    skills: [
      { name: "Python, Django, Django REST Framework, FastAPI", primary: true },
      { name: "Ruby on Rails", primary: true },
      { name: "Authentication & authorization, RESTful APIs", primary: true },
      { name: "Flask, data validation (Pydantic)", primary: false },
    ],
  },
  {
    index: "02",
    title: "FRONTEND",
    description: "Responsive interfaces that stay easy to maintain.",
    skills: [
      { name: "React.js, TypeScript, JavaScript", primary: true },
      { name: "Tailwind CSS, HTML5, CSS3", primary: true },
      { name: "Responsive web application development", primary: true },
      { name: "Frontend ↔ REST API integration", primary: false },
    ],
  },
  {
    index: "03",
    title: "DATA & WORKFLOW",
    description: "Storing data well and shipping it cleanly.",
    skills: [
      { name: "PostgreSQL, MySQL, Redis, SQL", primary: true },
      { name: "RESTful APIs, MVC Architecture, OOP", primary: true },
      { name: "Git, GitHub, Linux", primary: true },
      { name: "Claude Code, Codex", primary: true },
    ],
  },
];
