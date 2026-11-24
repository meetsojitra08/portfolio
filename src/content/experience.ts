/**
 * Experience data
 * Source of truth: docs/03-CONTENT.md
 * Rule: Employer work appears only in Experience as resume bullets, never as project cards.
 */

export interface ExperienceItem {
  id: string;
  company: string;
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
    role: "Software Developer",
    type: "Full-Time",
    period: "June 2026 – Nov 2026",
    location: "Surat / Remote",
    bullets: [
      "Developed custom web application modules using Python, Django, Django REST Framework, and React.",
      "Implemented REST APIs, authentication, business logic, and database integrations.",
      "Built reusable React components and responsive interfaces for business applications.",
      "Integrated frontend workflows with backend services and managed application data in PostgreSQL.",
      "Implemented data validation, database operations, and role-based access control.",
      "Resolved application issues and improved API reliability, code maintainability, and performance.",
    ],
  },
  {
    id: "essence-solusoft",
    company: "Essence Solusoft",
    role: "Software Intern & Developer",
    type: "Full-Time",
    period: "July 2025 – Feb 2026",
    location: "Ahmedabad",
    bullets: [
      "Built task and sprint workflows with custom status automation, real-time search, and synchronization.",
      "Added idle-time monitoring and performance dashboards for employee productivity tracking.",
      "Streamlined HR operations: attendance, leave management, and recruitment workflows.",
      "Integrated Slack and Firebase APIs for automated notifications, hour logging, and collaboration.",
      "Developed Shopify bundle features: Build Your Box, Buy Together, checkout previews, variant selection.",
      "Implemented subscription-based bundle limits, Shopify discount functionality, and analytics optimizations; resolved production issues.",
    ],
  },
];
