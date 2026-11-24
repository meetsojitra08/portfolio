/**
 * Experience data
 * Source of truth: docs/03-CONTENT.md
 * Rule: Employer work appears only in Experience as resume bullets, never as project cards.
 */

export interface ExperienceItem {
  id: string;
  company: string;
  companyDescription?: string;
  companyUrl?: string;
  role: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "mantham-technologies",
    company: "Mantham Technologies",
    companyDescription: "B2B web application consultancy",
    companyUrl: "https://manthamtechnologies.com", // TODO(meet): confirm URL
    role: "Software Developer",
    type: "Full-Time",
    period: "June 2026 – Nov 2026",
    location: "Surat / Remote",
    bullets: [
      "Architected and delivered custom full-stack web application modules combining Python, Django, Django REST Framework, and React.",
      "Engineered secure REST APIs with session/token authentication, complex business logic, and relational database integrations.",
      "Designed reusable React component systems and responsive client interfaces tailored for business-critical client workflows.",
      "Connected frontend state machines to backend REST endpoints with optimized PostgreSQL queries and relational schema management.",
      "Enforced data integrity with strict input validation and implemented fine-grained role-based access control (RBAC).",
      "Diagnosed production bugs, refactored legacy endpoints, and fortified API reliability and maintainability across deployment cycles.",
    ],
  },
  {
    id: "essence-solusoft",
    company: "Essence Solusoft",
    companyDescription: "SaaS product studio — project management + Shopify apps",
    companyUrl: "https://essencesolusoft.com", // TODO(meet): confirm URL
    role: "Software Intern & Developer",
    type: "Full-Time",
    period: "July 2025 – Feb 2026",
    location: "Ahmedabad",
    bullets: [
      "Engineered core task and sprint management workflows with automated status transitions, instant search, and real-time state synchronization.",
      "Designed and shipped employee productivity dashboards featuring idle-time tracking algorithms and activity analytics.",
      "Automated HR operational pipelines encompassing attendance tracking, leave approval workflows, and structured recruitment processes.",
      "Integrated Slack webhooks and Firebase Cloud APIs to orchestrate automated event notifications, work-hour logging, and team alerts.",
      "Developed custom Shopify storefront bundle engines, including 'Build Your Box', 'Buy Together', live checkout previews, and dynamic variant selectors.",
      "Engineered tiered subscription-based bundle limits, native Shopify discount logic, and cart performance optimizations; triaged and fixed critical production issues.",
    ],
  },
];
