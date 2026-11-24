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
      "An AI-powered product decision platform. It turns a natural-language query into database-verified, side-by-side product comparisons, cutting purchase research from hours to seconds.",
    highlight: "~350 ms recommendations",
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
    title: "BUGSENCE",
    name: "BugSence",
    scope: "SOLO · FULL-STACK · 2025",
    description:
      "An AI-powered issue tracker that converts raw error logs and stack traces into structured, prioritized tickets in under 2 seconds. Detects duplicates with PostgreSQL trigram search and triages bugs automatically with Groq LLMs.",
    highlight: "< 2 s ticket generation",
    tags: ["REACT", "TYPESCRIPT", "DJANGO REST", "PYDANTIC", "POSTGRESQL"],
    live: "https://bugsence-lilac.vercel.app/",
    github: "https://github.com/meetsojitra08/bugsence",
    status: "Live",
    image: "/images/bugsence.webp",
  },
];

export const allProjectsUrl = "https://github.com/meetsojitra08?tab=repositories";
