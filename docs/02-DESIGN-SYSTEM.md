# 02 — Design System

Reference: https://helliong.space/en (dark + light screenshots provided). **Take the feel, not the content.**

## Design principles
1. **Grid as architecture.** Every section sits inside 1px bordered cells. Borders do the work that shadows and cards usually do.
2. **Monospace voice.** Labels, metadata, and headlines feel like a terminal / spec sheet.
3. **One accent.** Lime is used sparingly: status dots, small labels, active states, the primary button. Never for large fills.
4. **Quiet by default.** Motion is subtle and purposeful. Content first.
5. **Both themes are first-class.** Dark is default.

## Color tokens (CSS variables)

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0B0C0B` | `#EFEFE9` |
| `--surface` | `#101210` | `#F6F6F1` |
| `--border` | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.12)` |
| `--text` | `#EDEDE8` | `#111211` |
| `--text-muted` | `#8C8F88` | `#5E615B` |
| `--accent` | `#B6F24A` (lime) | `#5C8A00` (darker lime for contrast) |
| `--accent-ink` | `#0B0C0B` (text on accent) | `#FFFFFF` |

Rules:
- Body text and muted text must pass **WCAG AA** on their backgrounds. Verify `--text-muted` at small sizes. If it fails, lighten/darken it.
- Light-theme accent is intentionally darker than the dark-theme lime so small labels stay readable.
- Never use pure `#000` / `#FFF` as backgrounds.

## Typography
| Role | Font | Notes |
|---|---|---|
| Display (hero, big numbers `01`–`02`, section headline) | **Departure Mono** (self-host, OFL) | Pixel-style mono. Fallback: `JetBrains Mono`, `ui-monospace` |
| Body + labels | **JetBrains Mono** (via `next/font`) | Weights 400/500 |
| Small caps labels | JetBrains Mono, `uppercase`, `letter-spacing: 0.08em`, 11–12px | e.g. `SELECTED PROJECTS / 02` |

Scale (fluid with `clamp`):
- Hero H1: `clamp(2.5rem, 7vw, 5.5rem)`, line-height 1.05
- Section headline: `clamp(1.75rem, 3.5vw, 2.75rem)`
- Body: 15–16px, line-height 1.6, max-width ~60ch
- Labels: 11–12px uppercase

The hero H1 ends with a **blinking underscore cursor** (`full-stack developer_`). Disable blink under `prefers-reduced-motion`.

## Layout
- Max content width: **1280px**, centered, with a 1px outer border frame on desktop.
- 12-col grid on desktop, single column on mobile. Breakpoints: 640 / 1024 / 1280.
- **Sections are separated by full-width 1px borders** and generous vertical padding (96–128px desktop, 64px mobile).
- Section label pattern: short accent dash + lowercase label, e.g. `— selected projects / 02`.

### Header (sticky, 56px)
`MS` monogram (left) · centered nav links (`projects about skills experience contact`) · right: availability tag, `Resume` button, theme toggle.
On mobile: monogram + hamburger → full-screen menu. Menu must trap focus and close on `Esc`.

### Hero
Two-column bordered grid.
- Left: H1 with cursor, one-line subhead, availability row (`● OPEN TO FULL-TIME ROLES | ⌖ AHMEDABAD, INDIA | UTC +5:30`), `↓ scroll to explore`.
- Right: "selected project" card (PickWise) with screenshot, title, `VIEW PROJECT ↗`, and a 3-item meta row (`ROLE / STACK / STATUS`).

### Project rows (only 2: PickWise, BugSence)
With just two projects, each row is taller and more generous than the reference. Add a highlight stat line (`~350 ms recommendations`, `< 2 s ticket generation`) in the accent color.
- Big number (`01`) in display font, project title in uppercase, 1–2 line description, tech tags (tiny uppercase), `LIVE SITE ↗` and `GITHUB ↗` text-links.
- **Alternate image left/right** per row on desktop; always image-on-top on mobile.
- Image sits in a bordered cell with a subtle inner padding. On hover: image scales to 1.02, border brightens.

### About
Three-cell row: (1) big quote headline, (2) bio + 3 stats, (3) monogram tile on a subtle dot/line grid.

### Skills
Three bordered columns, each with a number, title, one-line description, and a short bullet list (square bullets).

### How I work
Four equal cells with step number + title + one sentence.

### Experience
Vertical timeline inside bordered rows. Left column: company, role, dates, location. Right column: 4–6 bullets.

### Footer
Giant lowercase `have a project in mind?` is **replaced** with `let's build something together_`. Right side: bordered link rows for GitHub / LinkedIn / Email with `↗`. Bottom bar: © year, "Built with Next.js", back-to-top.

## Buttons — the "juicy" decision

**Verdict: use the juicy style in a restrained way, for primary CTAs only. Skip the neumorphic toggle, round knob, and plus-icon buttons.**

Why:
- **Fits:** the third reference's *Book a call* style (solid fill, soft depth, tactile press) gives a clear "click me" signal. Recruiters should find `Email me` and `Download resume` instantly.
- **Doesn't fit:** neumorphic raised/soft-shadow surfaces (toggle, round pad, "+" tile) clash with this site's flat, hairline-border, terminal look. They'd look like two different designs and hurt credibility.
- **Dark theme:** large soft shadows are nearly invisible on near-black backgrounds, so depth must come from borders and highlights instead.

### Button system (3 types only)

| Type | Used for | Look |
|---|---|---|
| **Primary (juicy)** | `Email me`, `Download resume` — **max 2 per viewport** | Lime fill, `--accent-ink` text, 1px darker bottom edge (`box-shadow: 0 2px 0 rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.35)`), 8px radius, 40–44px tall, trailing icon (↗ or download) |
| **Secondary** | `GitHub`, `LinkedIn`, `View all projects` | Transparent, 1px `--border`, mono uppercase label, same height and radius |
| **Text link** | `CASE STUDY ↗`, `GITHUB ↗` inside project rows | Uppercase mono, underline in accent on hover |

### Primary button behavior (the "juice")
- **Hover:** lift `translateY(-1px)`, brighten fill ~4%, edge shadow grows to 3px. 120ms ease-out.
- **Active/press:** `translateY(1px)`, edge shadow collapses to 0, inset shadow appears. 60ms.
- **Icon:** arrow nudges 2px right/up on hover.
- **Focus-visible:** 2px outline in `--accent` with 3px offset.
- **Reduced motion:** remove transforms, keep color change only.
- **Touch targets:** ≥ 44×44px.
- Never animate with layout-shifting properties. Use `transform` and `opacity`.

### Theme toggle
Simple 32px square icon button with a hairline border (sun/moon). Not a neumorphic switch.

## Motion
- Section reveal: fade + 12px translateY on enter viewport, once, 400ms. Stagger children by 60ms (max 4).
- Project image hover scale 1.02, 300ms.
- Cursor blink in hero, 1s steps.
- Nothing loops except the cursor. Everything off under `prefers-reduced-motion: reduce`.

## Iconography
`lucide-react`, 16px, stroke 1.5. Arrows `↗` are text glyphs in labels.

## Imagery rules
- Real screenshots of PickWise and BugSence (captured at 1440×900, saved as WebP, ≤150KB each) displayed inside a device-less bordered frame. No fake mockups.
- OG image: 1200×630, dark bg, `MS`, name, role.
