# 05 — Build Plan (phased prompts for Antigravity)

Work **one phase at a time**. After each phase: run lint/typecheck/build, summarize, list any `TODO(meet)`, then **wait for approval**.
Always start a session with: *"Read AGENTS.md and the docs it references, then do Phase N."*

---

## Before you start (Meet's checklist)
- [ ] Put `Meet-Sojitra-Resume.pdf` in `/public`
- [ ] Take screenshots (1440×900) of https://pick-wise-roan.vercel.app/ and https://bugsence-lilac.vercel.app/ → `/public/images/pickwise.webp`, `bugsence.webp`
- [ ] Download Departure Mono (free, OFL) → `/public/fonts/`
- [ ] Confirm the `TODO(meet)` items in `03-CONTENT.md`

---

## Phase 1 — Foundation
**Prompt:**
> Read AGENTS.md and all docs. Scaffold a Next.js App Router + TypeScript + Tailwind project. Set up `next-themes` (dark default), CSS variable tokens from `02-DESIGN-SYSTEM.md` for both themes, fonts (`next/font` JetBrains Mono + self-hosted Departure Mono), the folder structure from `04-TECH-SPEC.md`, typed content files from `03-CONTENT.md`, and the `Button`, `TextLink`, `Tag`, `SectionLabel`, `Reveal` primitives. Include a temporary kitchen-sink page showing every button state and both themes. Do not build page sections yet.

**Done when:** build passes; kitchen-sink shows primary/secondary buttons with hover/active/focus in both themes; reduced motion respected.

## Phase 2 — Header, Hero, Footer shell
**Prompt:**
> Build Header (sticky, nav anchors, availability tag, Resume primary button, theme toggle, accessible mobile menu), Hero (H1 with blinking cursor, subhead, availability row, featured PickWise card), and Footer/Contact CTA. Use content from `/content`. Match the bordered-grid layout from the design system.

**Done when:** responsive 360–1920px, keyboard navigable, menu traps focus and closes on Esc.

## Phase 3 — Projects
**Prompt:**
> Build the Projects section with exactly 2 alternating `ProjectRow`s: PickWise and BugSence. Each shows a screenshot, description, highlight stat, tags, and Live + GitHub links. Make the rows generous in height since there are only two. Add hover states and `next/image` with correct aspect ratios. Add the `VIEW ALL PROJECTS ↗` link to the GitHub repositories page.

**Done when:** no layout shift; all links verified; alt text written.

## Phase 4 — About, Skills, Process, Experience, Education
**Prompt:**
> Build About (quote cell, bio + stats, monogram tile on dot grid), Skills (3 columns), How I Work (4 cells), Experience (timeline rows, bullets from content), and the compact Education & Certifications row.

**Done when:** content matches `03-CONTENT.md` exactly; no invented facts.

## Phase 5 — Polish, motion, a11y
**Prompt:**
> Add section reveal animations (once, subtle, staggered), project hover motion, and tune spacing/typography across breakpoints. Audit contrast in both themes and fix failures. Add skip link, focus styles, and external-link announcements. Verify `prefers-reduced-motion`.

**Done when:** axe/Lighthouse a11y ≥ 95; no motion under reduced-motion.

## Phase 6 — SEO, performance, deploy
**Prompt:**
> Add metadata, OG image (1200×630), JSON-LD Person schema, sitemap, robots, and favicon. Optimize images and fonts. Run Lighthouse (mobile) and report scores. Prepare Vercel deployment notes. List every remaining `TODO(meet)`.

**Done when:** Lighthouse ≥ 95 on all four; OG preview renders correctly (test in a LinkedIn/Slack link preview).

---

## Final review prompt
> Act as a recruiter with 30 seconds. Open the site on a 390px viewport, then desktop. Report: (1) what you learned about Meet, (2) anything confusing or weak, (3) any claim not backed by `03-CONTENT.md`, (4) broken links, (5) a11y or performance regressions. Fix the issues, then give me the final report.

## Tips for working with the agent
- If it gets creative with copy, say: *"Use only 03-CONTENT.md. Mark gaps with TODO(meet)."*
- If it adds a library, say: *"Remove it; stick to 04-TECH-SPEC.md."*
- If the design drifts toward generic cards/shadows: *"Re-read 02-DESIGN-SYSTEM.md. Borders and grid, not shadows."*
