# MS. Portfolio: Final Upgrade Prompt

> Paste this whole file into Claude Code / Cursor / your AI coding tool, inside your existing project folder.

---

## ROLE & GOAL

Upgrade my existing **React + TypeScript + Vite** portfolio ("Meet Sojitra", full-stack developer) into a **premium, dark, award-level animated portfolio**. The goal is to impress recruiters within the first 5 seconds while staying fast, clear, and easy to scan. Think Awwwards / Linear / Vercel polish, not a template.

**Do NOT rebuild from scratch.** Keep my existing content, sections, and data. Add motion, polish, and design upgrades on top.

---

## 1. DESIGN SYSTEM

- **Dark-first.** Background near-black (`#0b0b0b`), text off-white (`#ededed`), muted gray for secondary text.
- **Single accent:** muted lime `#b9c46a`, used sparingly (highlights, hover, key words, focus outlines).
- Keep the light/dark toggle, but dark is the default and the primary design.
- Subtle **grain overlay** (3-4% opacity), faint **grid-line background**, and a soft **radial glow that follows the cursor**.
- **Headings:** large, tight tracking, mixing solid and **outlined (stroke-only)** words, e.g. "Building digital *experiences* that work."
- Small **uppercase mono labels** with section numbers (01 / 02 ...) and **1px hairline borders**.
- Fonts: modern grotesk for headings (Space Grotesk or similar), JetBrains Mono for labels.
- The final CTA section inverts to a light off-white background for contrast.

## 2. INSTALL

```bash
npm i gsap lenis framer-motion three @react-three/fiber @react-three/drei
```

## 3. ANIMATIONS TO IMPLEMENT

1. **Preloader:** "MS." logo with a 0-100% counter, then a clip-path wipe revealing the hero.
2. **Hero:** masked line-by-line headline reveal with stagger; outlined words fill with color on scroll; one lightweight, **lazy-loaded** 3D/particle element reacting to the mouse.
3. **Custom cursor:** dot + trailing ring; expands on links; shows "VIEW" on project cards; magnetic buttons. **Disabled on touch devices.**
4. **Lenis smooth scroll** + top scroll-progress bar + gentle parallax.
5. **Section titles:** split-text words scrub from gray to white as they scroll into view.
6. **Project cards:** 3D tilt on hover, cursor-following spotlight gradient, slightly zooming preview, "Live / GitHub" buttons sliding in, stacking-card effect on scroll.
7. **Stats (1+, 2, 5+, ∞):** count-up animation on enter.
8. **Experience:** vertical timeline whose line draws on scroll; role cards fade and slide in.
9. **Skills:** two-row infinite marquee moving in opposite directions, pausing on hover, with icon glow.
10. **Process section:** three cards with staggered reveal and an animated connecting line.
11. **Route/page transitions:** curtain/wipe.
12. **Footer CTA:** giant "Have a good project in mind?", magnetic "Let's Talk" button, **click-to-copy email with a "Copied!" toast**, live local-time display.

## 4. NAVBAR

Logo "MS.", links (Projects, About, Experience, Skills, Contact), and a "Let's talk" button. Hides on scroll down, shows on scroll up, blur backdrop. Keep the mobile menu working.

## 5. SECTION ORDER (keep)

1. Hero: "Building digital experiences that work." + subtext + CTAs (Get in touch, Download Resume) + availability badge with a pulsing green dot
2. Things I've Built: PICKWISE and BUGSENSE (number, description, tech tags, key result, browser-frame preview, Live/GitHub links)
3. About: "Curious by nature. Developer by choice." + bio + stats row + monogram card
4. Where I've Worked: Mantham Technologies, Essence Solusoft
5. Tools of the Trade: Languages, Frontend, Backend & APIs, Databases & Tools
6. From Concept to Working Product: 3-step process
7. Learning Is Ongoing: B.Tech + certifications
8. Contact/Footer

## 6. PERFORMANCE, ACCESSIBILITY & SEO

- Animate **only `transform` and `opacity`**.
- Respect `prefers-reduced-motion` (disable parallax/scrub, use simple fades).
- Disable the custom cursor and 3D on mobile/touch; simplify animations there.
- Target **Lighthouse 90+** (Performance, Accessibility, SEO): lazy-load 3D and images, preload fonts.
- Semantic HTML, keyboard-accessible focus states (lime outline), alt text, WCAG AA contrast.
- SEO: meta tags, Open Graph image, JSON-LD `Person` schema.

## 7. CODE STRUCTURE

- Animation helpers in `src/lib/animations.ts`.
- Modular components in `src/components/`.
- All content (projects, experience, skills, links) in a single data file such as `src/data/content.ts`.
- Clean, commented code.

## 8. CONTENT RULES

- **Do not invent** metrics, links, or claims. Leave clear `TODO:` placeholders for: GitHub URL, LinkedIn URL, live demo links, resume PDF path, real project screenshots, and measurable results in experience bullets.
- Ask me for any missing content at the end.

## 9. EXECUTION ORDER

1. Dark theme + design tokens + Lenis + scroll progress
2. Preloader + custom cursor + hero (with lazy 3D)
3. Projects, About, Experience
4. Skills marquee, Process, Education
5. Footer CTA, page transitions, SEO, accessibility pass

**Run `npm run build` after each step** to confirm nothing breaks, and summarize what changed at the end of each step.

---

## PRE-PUBLISH CHECKLIST (for me)

- [ ] Replace generic GitHub/LinkedIn links with real profiles
- [ ] Add resume PDF to `/public` and link it
- [ ] Add live demo links for PICKWISE and BUGSENSE
- [ ] Replace illustrative artwork with real screenshots or short screen recordings
- [ ] Add measurable results to experience bullets
- [ ] Deploy to Vercel/Netlify and test on mobile
