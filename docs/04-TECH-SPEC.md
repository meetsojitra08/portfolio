# 04 — Tech Spec

## Stack (do not add dependencies beyond this without asking)
- **Next.js (App Router) + TypeScript**, static export friendly
- **Tailwind CSS** (design tokens via CSS variables)
- **next-themes** (dark default, light toggle, no flash)
- **motion** (Framer Motion) — only for reveal animations; or pure CSS if sufficient
- **lucide-react** icons
- Fonts: `JetBrains Mono` via `next/font/google`; `Departure Mono` self-hosted in `/public/fonts`
- Deploy: **Vercel**
- Package manager: pnpm (or npm; be consistent)

## Folder structure
```
/public
  /fonts            Departure Mono (woff2)
  /images           pickwise.webp, bugsence.webp, og.png
  Meet-Sojitra-Resume.pdf
/src
  /app
    layout.tsx      fonts, theme provider, metadata, JSON-LD
    page.tsx        composes sections
    globals.css     tokens + base styles
    sitemap.ts, robots.ts
  /components
    Header.tsx  Hero.tsx  ProjectRow.tsx  Projects.tsx  About.tsx
    Skills.tsx  Process.tsx  Experience.tsx  Education.tsx  Contact.tsx  Footer.tsx
    ThemeToggle.tsx  SectionLabel.tsx  Reveal.tsx
    /ui  Button.tsx  TextLink.tsx  Tag.tsx
  /content
    site.ts  projects.ts  experience.ts  skills.ts   (typed data from 03-CONTENT.md)
  /lib
    cn.ts
```

## Components contract
- `Button` variants: `primary | secondary`. Props: `href` or `onClick`, `icon`, `external`. Renders `<a>` for links, `<button>` otherwise. Implements the press/hover behavior in `02-DESIGN-SYSTEM.md`.
- `TextLink`: uppercase mono link with arrow, `target="_blank" rel="noopener noreferrer"` for external.
- `ProjectRow`: props `{ index, title, description, highlight, tags, image, live, github, flip }`.
- `Reveal`: wraps children, once-only IntersectionObserver, no-op under reduced motion.
- All content typed (`type Project = {...}`) and imported from `/content`.

## Data shape (projects.ts)
```ts
export type Project = {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  tags: string[];
  image?: string;          // /images/xxx.webp
  live?: string;
  github?: string;
  status: "Live";
};
```

## Accessibility checklist
- Skip-to-content link
- One `<h1>`; sections use `<h2>`; landmarks: `header`, `nav`, `main`, `footer`
- Focus-visible styles everywhere; mobile menu traps focus, closes on `Esc`
- Images have meaningful `alt` (describe the product, e.g. "PickWise product comparison screen")
- Color contrast AA for both themes (check muted text + accent labels)
- External links announce new tab (`aria-label` suffix or visually hidden text)
- Respect `prefers-reduced-motion` and `prefers-color-scheme` (initial theme default = dark regardless, toggle persists)

## Performance
- Images: WebP/AVIF through `next/image`, explicit width/height, `priority` only on hero image
- Fonts: `display: swap`, preload display font, subset JetBrains Mono (latin)
- No layout shift (reserve image aspect ratios)
- Minimal client JS: only Header (menu), ThemeToggle, Reveal are client components
- Targets (mobile Lighthouse): Perf ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 95; LCP < 2.0s, CLS < 0.05

## SEO / sharing
- `metadata` in `layout.tsx` (title, description, canonical, OG, Twitter card)
- `og.png` 1200×630
- JSON-LD `Person` schema: name, jobTitle, url, sameAs (GitHub, LinkedIn), address locality Ahmedabad
- `sitemap.ts`, `robots.ts`
- Favicon: `MS` monogram (SVG, works in both themes)

## Contact method
`mailto:` link only. No backend, no form, no spam surface. Obfuscate email lightly (assemble in client component) to reduce scraping, but keep it a real clickable link.

## Scripts expected
`dev`, `build`, `start`, `lint`, `typecheck` (`tsc --noEmit`)

## Quality gates per phase
`pnpm lint && pnpm typecheck && pnpm build` must pass before reporting a phase done.
