export interface Project {
  number: string;
  name: string;
  type: string;
  description: string;
  outcome: string;
  stack: string[];
  className: string;
  visual: string;
  visualSub: string;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  place: string;
  points: string[];
}

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  grade: string;
}

export interface CertificationItem {
  num: string;
  title: string;
  issuer: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: 'Meet Sojitra',
  monogram: 'MS.',
  role: 'Full Stack Developer',
  location: 'Ahmedabad, India',
  phone: '+91 83470 36019',
  availability: 'OPEN TO OPPORTUNITIES',
  experienceYears: '1+ YEAR EXPERIENCE',
  tagline: 'Building digital experiences that work.',
  bio: 'I build thoughtful web applications, reliable backend systems and AI-powered products — from idea to implementation.',
  aboutHeading: 'Curious by nature.\nDeveloper by choice.',
  aboutStatement: 'I turn complex problems into clear, useful digital experiences.',
  aboutParagraphs: [
    "I'm Meet Sojitra, a Full Stack Developer based in Ahmedabad, India with 1+ year of hands-on experience designing and deploying robust web applications across Python, Django, FastAPI, React, and Ruby on Rails.",
    'I specialize in architecting dependable RESTful APIs, optimizing relational databases, and engineering AI-driven product workflows that solve real-world problems with sub-second performance.'
  ],
  links: {
    email: 'meetsojitra314@gmail.com',
    github: 'https://github.com/meetsojitra08',
    linkedin: 'https://www.linkedin.com/in/meet-sojitra-8375a032a',
    resume: '/resume.pdf'
  }
};

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'PickWise',
    type: 'AI PRODUCT DECISION PLATFORM',
    description: 'An AI-powered product decision platform that transforms natural-language queries into database-verified, side-by-side product comparisons, reducing purchase research time from hours to seconds.',
    outcome: '350ms recommendation processing',
    stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],
    className: 'pickwise',
    visual: 'Compare better. Decide faster.',
    visualSub: 'PRODUCT INTELLIGENCE / AI',
    liveUrl: 'https://pick-wise-roan.vercel.app/',
    githubUrl: 'https://github.com/meetsojitra08/PickWise'
  },
  {
    number: '02',
    name: 'BugSense',
    type: 'AI ISSUE TRACKING PLATFORM',
    description: 'An AI-powered issue tracking platform that converts raw error logs and stack traces into structured, prioritized tickets in under 2 seconds, featuring PostgreSQL trigram duplicate detection and automated Groq LLM triage.',
    outcome: 'Issue triage in under 2 seconds',
    stack: ['React', 'TypeScript', 'Django REST', 'Pydantic', 'PostgreSQL', 'Groq'],
    className: 'bugsence',
    visual: 'From error to action.',
    visualSub: 'AUTOMATED BUG TRIAGE / AI',
    liveUrl: 'https://bugsence-lilac.vercel.app/',
    githubUrl: 'https://github.com/meetsojitra08/bugsence'
  }
];

export const STATS = [
  { value: '1+', label: 'YEAR EXPERIENCE', numeric: 1, suffix: '+' },
  { value: '2', label: 'FEATURED AI PLATFORMS', numeric: 2, suffix: '' },
  { value: '5+', label: 'CORE LANGUAGES & FRAMEWORKS', numeric: 5, suffix: '+' },
  { value: '∞', label: 'CURIOSITY TO LEARN', isInfinity: true, suffix: '' }
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    items: ['Python', 'JavaScript', 'TypeScript', 'Ruby', 'SQL']
  },
  {
    title: 'FRONTEND',
    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'BACKEND & APIS',
    items: ['Django', 'FastAPI', 'Ruby on Rails', 'REST APIs']
  },
  {
    title: 'DATABASES & TOOLS',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Git', 'GitHub', 'Linux']
  }
];

export const MARQUEE_SKILLS_ROW1 = [
  'React.js', 'TypeScript', 'Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Tailwind CSS'
];

export const MARQUEE_SKILLS_ROW2 = [
  'JavaScript', 'Ruby on Rails', 'REST APIs', 'MySQL', 'Git & GitHub', 'Linux', 'Docker', 'Pydantic'
];

export const CONCEPTS = [
  'RESTful APIs',
  'MVC Architecture',
  'Authentication & Authorization',
  'OOP',
  'AI Coding Tools (Claude Code, Codex)'
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'JUN 2026 — NOV 2026',
    company: 'MANTHAM TECHNOLOGIES',
    role: 'Software Developer · Full-time',
    place: 'Surat / Remote',
    points: [
      'Developed custom full-stack web application modules using Python, Django, Django REST Framework, and React, sustaining 99.8% API uptime.',
      'Implemented high-throughput RESTful APIs, session authentication, business validation, and PostgreSQL integrations with optimized indexing.',
      'Built reusable React components and responsive interfaces for business dashboards, reducing client-side rendering latency by ~32%.',
      'Engineered data validation pipelines, database transaction integrity, and role-based access control (RBAC), significantly elevating reliability.'
    ]
  },
  {
    period: 'JUL 2025 — FEB 2026',
    company: 'ESSENCE SOLUSOFT',
    role: 'Software Intern & Developer · Full-time',
    place: 'Ahmedabad',
    points: [
      'Engineered task and sprint workflows with custom status automation, real-time search, and synchronization, cutting sprint coordination overhead by 40%.',
      'Built employee productivity tracking, idle-time monitoring, and performance analytics dashboards actively utilized by 50+ internal team members.',
      'Streamlined core HR operations, automating multi-tier attendance tracking, leave management, and candidate recruitment pipelines.',
      'Integrated Slack and Firebase real-time APIs for instant notification webhooks, hour logging, and high-converting Shopify bundle features (Build Your Box, Buy Together).'
    ]
  }
];

export const PROCESS_STEPS: ServiceItem[] = [
  {
    num: '01',
    title: 'FULL-STACK DEVELOPMENT',
    desc: 'Building responsive web applications with maintainable frontend and backend architecture.',
    items: ['React interfaces', 'Python applications', 'End-to-end features']
  },
  {
    num: '02',
    title: 'BACKEND & API ENGINEERING',
    desc: 'Designing dependable APIs, application logic and data workflows.',
    items: ['REST API development', 'Authentication & authorization', 'Database integration']
  },
  {
    num: '03',
    title: 'INTEGRATIONS & AI PRODUCTS',
    desc: 'Connecting services and building useful AI-powered product experiences.',
    items: ['Third-party integrations', 'AI application workflows', 'Automation & data processing']
  }
];

export const EDUCATION: EducationItem = {
  period: '2021 — 2025 / EDUCATION',
  degree: 'Bachelor of Technology',
  field: 'Information Technology',
  institution: 'Institute of Advanced Research',
  location: 'Gandhinagar',
  grade: 'CGPA 7.9'
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    num: '01',
    title: 'Full Stack Web Development MASTERY Course',
    issuer: 'Udemy',
    year: '2024'
  },
  {
    num: '02',
    title: 'Python Fundamentals for Beginners',
    issuer: 'Great Learning',
    year: '2023'
  },
  {
    num: '03',
    title: 'Power BI Data Analytics for All Levels 3.0',
    issuer: 'Codebasics',
    year: '2025'
  }
];

export const NAV_LINKS = [
  { id: 'pitch', label: 'Overview', num: '01' },
  { id: 'process', label: 'Process', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'experience', label: 'Experience', num: '04' },
  { id: 'skills', label: 'Skills', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' }
];
