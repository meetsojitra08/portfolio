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
    id: "essence-solusoft",
    company: "Essence Solusoft",
    companyDescription: "SaaS product studio — project management + Shopify apps",
    companyUrl: "https://essencesolusoft.com", // TODO(meet): confirm URL
    role: "Software Intern & Developer",
    type: "Full-Time",
    period: "Jul 2025 – Feb 2026",
    location: "Ahmedabad",
    bullets: [
      "Engineered task and sprint workflows with custom status automation, real-time search, and synchronization.",
      "Enhanced employee productivity tracking through idle-time monitoring and performance dashboards.",
      "Streamlined HR operations, including attendance, leave management, and recruitment workflows.",
      "Integrated Slack and Firebase APIs for automated notifications, hour logging, and project collaboration.",
      "Developed Shopify bundle features, including Build Your Box, Buy Together, checkout previews, and variant selection.",
      "Implemented subscription-based bundle limits, Shopify discount functionality, and analytics optimizations while resolving production issues.",
    ],
  },
  {
    id: "acespritech-solutions",
    company: "Acespritech Solutions Pvt. Ltd.",
    role: "Python Developer Intern",
    type: "Internship",
    period: "Jan 2025 – Apr 2025",
    location: "Gandhinagar",
    bullets: [
      "Assisted in developing backend functionality using Python.",
      "Worked with Django and Flask to understand and implement web application features.",
      "Assisted in developing and testing REST APIs.",
      "Performed basic database operations using SQL.",
      "Debugged application issues and fixed minor errors under team guidance.",
      "Used Git and GitHub for version control and collaborative development.",
    ],
  },
];
