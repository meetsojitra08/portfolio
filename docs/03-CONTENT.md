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
- Resume file: `/public/Meet-Sojitra-Resume.pdf` (TODO(meet): add the PDF)

## Meta
- `<title>`: Meet Sojitra — Full Stack Developer (Python, Django, FastAPI, React)
- Description: Full Stack Developer in Ahmedabad building REST APIs and React interfaces with Python, Django, FastAPI, and PostgreSQL. See PickWise, BugSence, and production work.

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
- Description: An AI-powered product decision platform. It turns a natural-language query into database-verified, side-by-side product comparisons, cutting purchase research from hours to seconds.
- Highlight: Recommendation processing in about **350 ms**.
- Tags: `FASTAPI` `REACT` `TYPESCRIPT` `POSTGRESQL` `REDIS`
- Live: https://pick-wise-roan.vercel.app/
- GitHub: https://github.com/meetsojitra08/PickWise
- Status: Live
- Image: TODO(meet): screenshot of live site (1440×900)

### 02 — BUGSENCE
- Description: An AI-powered issue tracker that converts raw error logs and stack traces into structured, prioritized tickets in under 2 seconds. Detects duplicates with PostgreSQL trigram search and triages bugs automatically with Groq LLMs.
- Highlight: Ticket generation in **under 2 seconds**.
- Tags: `REACT` `TYPESCRIPT` `DJANGO REST` `PYDANTIC` `POSTGRESQL`
- Live: https://bugsence-lilac.vercel.app/
- GitHub: https://github.com/meetsojitra08/bugsence
- Status: Live
- Image: TODO(meet): screenshot of live site (1440×900)

> Only these two projects appear on the site. Do not add others.
> Footer link under the list: `VIEW ALL PROJECTS ↗` → https://github.com/meetsojitra08?tab=repositories

## About (`about / developer`)
- Quote: `I turn real requirements into dependable software.`
- Bio: `I'm Meet Sojitra, a full-stack developer in Ahmedabad with 1+ year of professional experience. I build REST APIs, manage PostgreSQL data, integrate third-party services, and ship React interfaces that stay maintainable as they grow. I also use AI coding tools (Claude Code, Codex) to move faster without lowering the bar.`
- Stats (from resume only):
  - `1+` / `YEARS EXPERIENCE`
  - `2` / `AI PRODUCTS SHIPPED` (PickWise, BugSence)
  - `B.Tech IT` / `2021–2025` — alternative if a third stat is needed

## Skills (`skills / what I do`)
**01 — BACKEND**
Designing and building APIs and business logic.
- Python, Django, Django REST Framework, FastAPI
- Ruby on Rails
- Authentication, authorization, role-based access control
- Data validation (Pydantic), third-party integrations

**02 — FRONTEND**
Responsive interfaces that stay easy to maintain.
- React.js, TypeScript, JavaScript
- Tailwind CSS, HTML5, CSS3
- Reusable component libraries
- Frontend ↔ API integration

**03 — DATA & WORKFLOW**
Storing data well and shipping it cleanly.
- PostgreSQL, MySQL, Redis, SQL
- RESTful API design, MVC, OOP
- Git, GitHub, Linux
- AI coding tools (Claude Code, Codex)

## How I work (`process / how I work`)
1. **UNDERSTAND** — Clarify the problem, users, and constraints before writing code.
2. **DESIGN** — Sketch the data model and API contract first.
3. **BUILD** — Small, tested, reviewable changes with clear naming.
4. **SHIP & IMPROVE** — Deploy, monitor, and fix based on real usage.

## Experience (`experience / where I've worked`)

### Mantham Technologies — Software Developer (Full-Time)
June 2026 – Nov 2026 · Surat / Remote
- Developed custom web application modules using Python, Django, Django REST Framework, and React.
- Implemented REST APIs, authentication, business logic, and database integrations.
- Built reusable React components and responsive interfaces for business applications.
- Integrated frontend workflows with backend services and managed application data in PostgreSQL.
- Implemented data validation, database operations, and role-based access control.
- Resolved application issues and improved API reliability, code maintainability, and performance.

### Essence Solusoft — Software Intern & Developer (Full-Time)
July 2025 – Feb 2026 · Ahmedabad
- Built task and sprint workflows with custom status automation, real-time search, and synchronization.
- Added idle-time monitoring and performance dashboards for employee productivity tracking.
- Streamlined HR operations: attendance, leave management, and recruitment workflows.
- Integrated Slack and Firebase APIs for automated notifications, hour logging, and collaboration.
- Developed Shopify bundle features: Build Your Box, Buy Together, checkout previews, variant selection.
- Implemented subscription-based bundle limits, Shopify discount functionality, and analytics optimizations; resolved production issues.

## Education & Certifications (compact row)
- **B.Tech, Information Technology** — Institute of Advanced Research, Gandhinagar · 2021–2025 · CGPA 7.9
- Full Stack Web Development Mastery — Udemy (2024)
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
  "experience": "1+ years",
  "stack": {
    "backend": ["Python", "Django", "FastAPI"],
    "frontend": ["React", "TypeScript"],
    "data": ["PostgreSQL", "Redis"]
  },
  "projects": ["PickWise", "BugSence"],
  "status": "open_to_full_time_roles",
  "contact": "meetsojitra314@gmail.com"
}
```
- Behavior: types in once, `COPY JSON` button, project names link to `#projects`, email is a `mailto:` link. Render as real text in `<pre><code>`; respect reduced motion.