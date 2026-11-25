# 03 — Content (source of truth)

All facts come from Meet's resume and links. Use verbatim or lightly tightened. **Do not add facts, numbers, clients, or links that aren't here.**
`TODO(meet)` = needs Meet's input.

## Identity
- Name: **Meet Sojitra**
- Title: **Full Stack Developer**
- Location: Ahmedabad, India (UTC +5:30)
- Email: meetsojitra314@gmail.com
- GitHub: https://github.com/meetsojitra08
- LinkedIn: https://www.linkedin.com/in/meet-sojitra-8375a032a
- Phone: **do not display on site**
- Monogram: `MS`
- Availability tag: `OPEN TO FULL-TIME ROLES`
- Resume file: `/public/Meet-Sojitra-Resume.pdf`

## Meta
- `<title>`: Meet Sojitra — Full Stack Developer (Python, Django, FastAPI, React)
- Description: Full Stack Developer in Ahmedabad building REST APIs and React interfaces with Python, Django, FastAPI, Ruby on Rails, and PostgreSQL. See PickWise, BugSense, and production work.

## Hero
- H1 (typed once, then cursor): `full-stack developer_`
- Subhead: `I build reliable APIs and clear React interfaces, from database to browser.`
- Meta row: `OPEN TO FULL-TIME ROLES` · `AHMEDABAD, INDIA` · `UTC +5:30`
- CTAs: `EMAIL ME` (primary) · `DOWNLOAD RESUME` (secondary)
- Scroll hint: `SCROLL TO EXPLORE`
- Background code snippets (illustrative, decorative; keep short and generic, no real company or project code):
```python
@router.get("/products/{id}")
async def get_product(id: int, db: Session = Depends(get_db)):
    return await crud.get_product(db, id)
```
```python
class Ticket(models.Model):
    title = models.CharField(max_length=200)
    status = models.CharField(default="open")
    created_at = models.DateTimeField(auto_now_add=True)
```
```tsx
const [items, setItems] = useState<Item[]>([]);
useEffect(() => { api.get("/items").then(setItems); }, []);
```
```sql
CREATE INDEX idx_title_trgm ON tickets USING gin (title gin_trgm_ops);
SELECT * FROM tickets WHERE title % 'checkout error';
```
```bash
$ git commit -m "feat: add role-based access control"
$ pytest -q && npm run build
```
> Add a few more of similar size (Redis cache get/set, a Pydantic model, a Tailwind class list) so the columns feel varied.

## Selected projects (`selected projects / 02`)

### 01 — PICKWISE
- Description: An AI-powered shopping platform with budget-aware product recommendations, typo-tolerant search, and side-by-side comparisons. Validates suggestions against catalog data to prevent fabricated recommendations.
- Highlight: Catalog-validated AI recommendations.
- Tags: `FASTAPI` `REACT` `TYPESCRIPT` `POSTGRESQL` `REDIS`
- Live: https://pick-wise-roan.vercel.app/
- GitHub: https://github.com/meetsojitra08/PickWise
- Status: Live
- Image: `/public/images/pickwise.webp`

### 02 — BUGSENSE
- Description: A full-stack AI bug tracking platform with Groq-powered issue triage, duplicate detection, and a drag-and-drop Kanban board. Auto-fills issue details from stack traces in under 2 seconds.
- Highlight: Stack-trace auto-fill in **under 2 seconds**.
- Tags: `REACT` `TYPESCRIPT` `DJANGO REST` `PYDANTIC` `POSTGRESQL`
- Live: https://bugsence-lilac.vercel.app/
- GitHub: https://github.com/meetsojitra08/bugsence
- Status: Live
- Image: `/public/images/bugsence.webp`

> Only these two projects appear on the site. Do not add others.
> Footer link under the list: `VIEW ALL PROJECTS ↗` → https://github.com/meetsojitra08?tab=repositories

## About (`about / developer`)
- Quote: `I turn real requirements into dependable software.`
- Bio: `I'm Meet Sojitra, a full-stack developer in Ahmedabad with a background in Ruby on Rails and hands-on experience with Python, Django, FastAPI, and React.js. I build RESTful APIs, manage relational and Redis data, integrate third-party services, and ship responsive web applications—using AI coding tools (Claude Code, Codex) to move faster without lowering the bar.`
- Stats (from resume only):
  - `1` / `YEAR EXPERIENCE`
  - `2` / `AI PRODUCTS SHIPPED` (PickWise, BugSense)
  - `B.Tech IT` / `2021–2025` — alternative if a third stat is needed

## Skills (`skills / what I do`)
**01 — BACKEND**
Designing and building APIs and business logic.
- Python, Django, Django REST Framework, FastAPI
- Ruby on Rails
- Authentication & authorization, RESTful APIs
- Flask, data validation (Pydantic)

**02 — FRONTEND**
Responsive interfaces that stay easy to maintain.
- React.js, TypeScript, JavaScript
- Tailwind CSS, HTML5, CSS3
- Responsive web application development
- Frontend ↔ REST API integration

**03 — DATA & WORKFLOW**
Storing data well and shipping it cleanly.
- PostgreSQL, MySQL, Redis, SQL
- RESTful APIs, MVC Architecture, OOP
- Git, GitHub, Linux
- Claude Code, Codex

## How I work (`process / how I work`)
1. **UNDERSTAND** — Clarify the problem, users, and constraints before writing code.
2. **DESIGN** — Sketch the data model and API contract first.
3. **BUILD** — Small, tested, reviewable changes with clear naming.
4. **SHIP & IMPROVE** — Deploy, monitor, and fix based on real usage.

## Experience (`experience / where I've worked`)

### Essence Solusoft — Software Intern & Developer (Full-Time)
Jul 2025 – Feb 2026 · Ahmedabad
- Engineered task and sprint workflows with custom status automation, real-time search, and synchronization.
- Enhanced employee productivity tracking through idle-time monitoring and performance dashboards.
- Streamlined HR operations, including attendance, leave management, and recruitment workflows.
- Integrated Slack and Firebase APIs for automated notifications, hour logging, and project collaboration.
- Developed Shopify bundle features, including Build Your Box, Buy Together, checkout previews, and variant selection.
- Implemented subscription-based bundle limits, Shopify discount functionality, and analytics optimizations while resolving production issues.

### Acespritech Solutions Pvt. Ltd. — Python Developer Intern
Jan 2025 – Apr 2025 · Gandhinagar
- Assisted in developing backend functionality using Python.
- Worked with Django and Flask to understand and implement web application features.
- Assisted in developing and testing REST APIs.
- Performed basic database operations using SQL.
- Debugged application issues and fixed minor errors under team guidance.
- Used Git and GitHub for version control and collaborative development.

## Education & Certifications (compact row)
- **B.Tech, Information Technology** — Institute of Advanced Research, Gandhinagar · 2021–2025 · CGPA 7.9
- Full Stack Web Development Mastery Course — Udemy (2024)
- Python Fundamentals for Beginners — Great Learning (2023)
- Power BI Data Analytics for All Levels 3.0 — Codebasics (2025)

## Footer / Contact
- Headline: `let's build something together_`
- Sub: `Open to full-time Full Stack / Python / React roles. I reply within a day.` (TODO(meet): confirm you want to promise this)
- Link rows: `GITHUB ↗` · `LINKEDIN ↗` · `EMAIL ↗`
- Bottom bar: `© 2026 Meet Sojitra` · `Built with Next.js` · `BACK TO TOP ↑`

### API panel (Contact section, right side)
- Title: `GET /developer` · Status line: `HTTP/1.1 200 OK`
- JSON (facts from resume only; do not add keys):
```json
{
  "name": "Meet Sojitra",
  "role": "Full Stack Developer",
  "location": "Ahmedabad, India",
  "experience": "1 year",
  "stack": {
    "backend": ["Python", "Django", "FastAPI", "Ruby on Rails"],
    "frontend": ["React", "TypeScript"],
    "data": ["PostgreSQL", "Redis"]
  },
  "projects": ["PickWise", "BugSense"],
  "status": "open_to_full_time_roles",
  "contact": "meetsojitra314@gmail.com"
}
```
- Behavior: types in once, `COPY JSON` button, project names link to `#projects`, email is a `mailto:` link. Render as real text in `<pre><code>`; respect reduced motion.