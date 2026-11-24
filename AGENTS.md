# AGENTS.md — Meet Sojitra Portfolio

> Read this file first, every session. It is the source of truth for rules.
> Detailed specs live in `/docs`. Read the relevant doc before touching that area.

## What we are building
A single-page personal portfolio for **Meet Sojitra, Full Stack Developer** (Ahmedabad, India).
Purpose: **job search**. Audience: recruiters, hiring managers, engineering leads.
They skim for ~30–60 seconds, so every section must answer: *can this person ship, and are they easy to contact?*

Visual direction: dark, grid-based, monospace "developer terminal" aesthetic with one lime accent,
inspired by a reference portfolio (see `docs/02-DESIGN-SYSTEM.md`). **Inspiration only. Never copy its text, logo, images, or code.**

## Doc map (read in this order)
1. `docs/01-PROJECT-BRIEF.md` — goals, sections, success criteria
2. `docs/02-DESIGN-SYSTEM.md` — colors, type, layout, buttons, motion
3. `docs/03-CONTENT.md` — all real copy. **Use verbatim; do not invent facts.**
4. `docs/04-TECH-SPEC.md` — stack, structure, performance, a11y, SEO
5. `docs/05-BUILD-PLAN.md` — phased tasks + prompts for the agent

## Hard rules
1. **No fabricated content.** Only use facts from `docs/03-CONTENT.md`. If something is missing, insert a visible `TODO(meet):` marker and tell me. Never make up metrics, clients, testimonials, or links.
2. **Only two projects: PickWise and BugSence.** Do not add, invent, or suggest other projects. Employer work (Essence Solusoft, Mantham Technologies) appears only in the Experience section as resume bullets, never as project cards.
3. **Do not copy the reference site.** No copied copy, logo, "EY" monogram, or assets. Use an "MS" monogram.
4. **Do not expose the phone number** on the site. Email + LinkedIn + GitHub only.
5. **Content lives in data files** (`/src/content/*.ts`), not hardcoded in components.
6. **Accessibility is not optional**: WCAG AA contrast, keyboard navigable, visible focus rings, semantic HTML, `prefers-reduced-motion` respected.
7. **Performance budget**: Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO (mobile). The hero background must never block or delay content.
8. **Keep it simple.** Prefer fewer dependencies. Ask before adding any library not listed in `04-TECH-SPEC.md`.
9. **Dark theme is default**; light theme is supported via toggle (both must look intentional).
10. After each phase in `05-BUILD-PLAN.md`: run `lint`, `typecheck`, `build`, then summarize what changed and what's left. Stop and wait for my go-ahead before starting the next phase.

## Definition of done (whole project)
- All sections in the brief implemented, responsive 360px → 1920px
- Both themes polished
- Resume PDF downloadable
- Real screenshots for PickWise and BugSence (the only two projects)
- Lighthouse targets met
- Deployed to Vercel with correct OG image and metadata
- Zero `TODO(meet)` markers left, or each one listed in the final report