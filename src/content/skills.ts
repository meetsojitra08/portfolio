/**
 * Skills data
 * Source of truth: docs/03-CONTENT.md
 */

export interface SkillCategory {
  index: string;
  title: string;
  description: string;
  skills: string[];
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
      "Python, Django, Django REST Framework, FastAPI",
      "Ruby on Rails",
      "Authentication, authorization, role-based access control",
      "Data validation (Pydantic), third-party integrations",
    ],
  },
  {
    index: "02",
    title: "FRONTEND",
    description: "Responsive interfaces that stay easy to maintain.",
    skills: [
      "React.js, TypeScript, JavaScript",
      "Tailwind CSS, HTML5, CSS3",
      "Reusable component libraries",
      "Frontend ↔ API integration",
    ],
  },
  {
    index: "03",
    title: "DATA & WORKFLOW",
    description: "Storing data well and shipping it cleanly.",
    skills: [
      "PostgreSQL, MySQL, Redis, SQL",
      "RESTful API design, MVC, OOP",
      "Git, GitHub, Linux",
      "AI coding tools (Claude Code, Codex)",
    ],
  },
];
