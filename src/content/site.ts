/**
 * Site content configuration
 * Source of truth: docs/03-CONTENT.md
 * Rule: Only use facts from docs/03-CONTENT.md. No invented facts.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}

export interface SiteConfig {
  identity: {
    name: string;
    title: string;
    location: string;
    city: string;
    email: string;
    github: string;
    linkedin: string;
    monogram: string;
    availability: string;
    resumeUrl: string;
  };
  meta: {
    title: string;
    description: string;
    url: string;
  };
  navigation: NavItem[];
  hero: {
    headline: string;
    subhead: string;
    metaRow: string[];
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
  };
  about: {
    quote: string;
    bio: string;
    stats: StatItem[];
  };
  process: ProcessStep[];
  education: EducationItem;
  certifications: CertificationItem[];
  footer: {
    headline: string;
    subhead: string; // TODO(meet): confirm reply within a day promise
    links: SocialLink[];
    copyright: string;
    builtWith: string;
  };
}

export const siteConfig: SiteConfig = {
  identity: {
    name: "Meet Sojitra",
    title: "Full Stack Developer",
    location: "Ahmedabad, India (UTC +5:30)",
    city: "Ahmedabad, India",
    email: "meetsojitra314@gmail.com",
    github: "https://github.com/meetsojitra08",
    linkedin: "https://www.linkedin.com/in/meet-sojitra-8375a032a",
    monogram: "MS",
    availability: "OPEN TO FULL-TIME ROLES",
    resumeUrl: "/Meet-Sojitra-Resume.pdf",
  },
  meta: {
    title: "Meet Sojitra — Full Stack Developer (Python, Django, FastAPI, React)",
    description:
      "Full Stack Developer in Ahmedabad building REST APIs and React interfaces with Python, Django, FastAPI, and PostgreSQL. See PickWise, BugSence, and production work.",
    url: "https://meetsojitra.dev",
  },
  navigation: [
    { label: "projects", href: "#projects" },
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ],
  hero: {
    headline: "full-stack developer_",
    subhead:
      "I build reliable APIs and clear React interfaces, from database to browser.",
    metaRow: ["OPEN TO FULL-TIME ROLES", "AHMEDABAD, INDIA", "UTC +5:30"],
    ctaPrimary: {
      label: "Email me",
      href: "mailto:meetsojitra314@gmail.com",
    },
    ctaSecondary: {
      label: "Download resume",
      href: "/Meet-Sojitra-Resume.pdf",
    },
  },
  about: {
    quote: "I turn real requirements into dependable software.",
    bio: "I'm Meet Sojitra, a full-stack developer in Ahmedabad with 1+ year of professional experience. I build REST APIs, manage PostgreSQL data, integrate third-party services, and ship React interfaces that stay maintainable as they grow. I also use AI coding tools (Claude Code, Codex) to move faster without lowering the bar.",
    stats: [
      { value: "1+", label: "YEARS EXPERIENCE" },
      { value: "2", label: "AI PRODUCTS SHIPPED" },
      { value: "B.Tech", label: "IT · 2021–2025" },
    ],
  },
  process: [
    {
      step: "01",
      title: "UNDERSTAND",
      description:
        "Clarify the problem, users, and constraints before writing code.",
    },
    {
      step: "02",
      title: "DESIGN",
      description: "Sketch the data model and API contract first.",
    },
    {
      step: "03",
      title: "BUILD",
      description: "Small, tested, reviewable changes with clear naming.",
    },
    {
      step: "04",
      title: "SHIP & IMPROVE",
      description: "Deploy, monitor, and fix based on real usage.",
    },
  ],
  education: {
    degree: "B.Tech, Information Technology",
    institution: "Institute of Advanced Research, Gandhinagar",
    period: "2021–2025",
    detail: "CGPA 7.9",
  },
  certifications: [
    {
      title: "Full Stack Web Development Mastery",
      issuer: "Udemy",
      year: "2024",
    },
    {
      title: "Python Fundamentals for Beginners",
      issuer: "Great Learning",
      year: "2023",
    },
    {
      title: "Power BI Data Analytics for All Levels 3.0",
      issuer: "Codebasics",
      year: "2025",
    },
  ],
  footer: {
    headline: "let's build something together_",
    // TODO(meet): confirm reply within a day promise
    subhead:
      "Open to full-time Full Stack / Python / React roles. I reply within a day.",
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/meetsojitra08",
        external: true,
      },
      {
        label: "LINKEDIN",
        href: "https://www.linkedin.com/in/meet-sojitra-8375a032a",
        external: true,
      },
      {
        label: "EMAIL",
        href: "mailto:meetsojitra314@gmail.com",
        external: false,
      },
    ],
    copyright: "© 2026 Meet Sojitra",
    builtWith: "Built with Next.js",
  },
};
