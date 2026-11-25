/**
 * Projects data
 * Source of truth: docs/03-CONTENT.md
 * Rule: Only two projects: PickWise and BugSence. Do not add others.
 */

export interface Project {
  id: string;
  index: string;
  title: string;
  name: string;
  scope?: string;
  description: string;
  highlight?: string;
  tags: string[];
  image?: string;
  live?: string;
  github?: string;
  status: "Live";
  featuredMeta?: {
    role: string;
    stack: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: "pickwise",
    index: "01",
    title: "PICKWISE",
    name: "PickWise",
    scope: "SOLO · FULL-STACK · 2025",
    description:
      "An AI-powered shopping platform with budget-aware product recommendations, typo-tolerant search, and side-by-side comparisons. Validates suggestions against catalog data to prevent fabricated recommendations.",
    highlight: "Catalog-validated AI",
    tags: ["FASTAPI", "REACT", "TYPESCRIPT", "POSTGRESQL", "REDIS"],
    live: "https://pick-wise-roan.vercel.app/",
    github: "https://github.com/meetsojitra08/PickWise",
    status: "Live",
    image: "/images/pickwise.webp",
    featuredMeta: {
      role: "Full-stack",
      stack: "FastAPI / React",
      status: "Live",
    },
  },
  {
    id: "bugsence",
    index: "02",
    title: "BUGSENSE",
    name: "BugSense",
    scope: "SOLO · FULL-STACK · 2025",
    description:
      "A full-stack AI bug tracking platform with Groq-powered issue triage, duplicate detection, and a drag-and-drop Kanban board. Auto-fills issue details from stack traces in under 2 seconds.",
    highlight: "< 2 s stack-trace auto-fill",
    tags: ["REACT", "TYPESCRIPT", "DJANGO REST", "PYDANTIC", "POSTGRESQL"],
    live: "https://bugsence-lilac.vercel.app/",
    github: "https://github.com/meetsojitra08/bugsence",
    status: "Live",
    image: "/images/bugsence.webp",
  },
];

export const allProjectsUrl = "https://github.com/meetsojitra08?tab=repositories";
