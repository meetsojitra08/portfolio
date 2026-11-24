"use client";

import * as React from "react";

function SnippetFastAPI() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">@router.get</span>(&quot;/products/&#123;id&#125;&quot;)&#10;
        <span className="text-accent font-semibold">async def</span> get_product(id: int, db: Session = Depends(get_db)):&#10;
        {"    "}<span className="text-accent font-semibold">return await</span> crud.get_product(db, id)
      </code>
    </pre>
  );
}

function SnippetDjango() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">class</span> Ticket(models.Model):&#10;
        {"    "}title = models.CharField(max_length=200)&#10;
        {"    "}status = models.CharField(default=&quot;open&quot;)&#10;
        {"    "}created_at = models.DateTimeField(auto_now_add=<span className="text-accent font-semibold">True</span>)
      </code>
    </pre>
  );
}

function SnippetReactHook() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">const</span> [items, setItems] = useState&lt;Item[]&gt;([]);&#10;
        useEffect(() =&gt; &#123;&#10;
        {"    "}api.get(&quot;/items&quot;).then(setItems);&#10;
        &#125;, []);
      </code>
    </pre>
  );
}

function SnippetSQLTrgm() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">CREATE INDEX</span> idx_title_trgm <span className="text-accent font-semibold">ON</span> tickets <span className="text-accent font-semibold">USING</span> gin (title gin_trgm_ops);&#10;
        <span className="text-accent font-semibold">SELECT</span> * <span className="text-accent font-semibold">FROM</span> tickets <span className="text-accent font-semibold">WHERE</span> title % &apos;checkout error&apos;;
      </code>
    </pre>
  );
}

function SnippetGitTerminal() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">$</span> git commit -m &quot;feat: add role-based access control&quot;&#10;
        <span className="text-accent font-semibold">$</span> pytest -q &amp;&amp; npm run build
      </code>
    </pre>
  );
}

function SnippetRedis() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        cached = <span className="text-accent font-semibold">await</span> redis.get(cache_key)&#10;
        <span className="text-accent font-semibold">if</span> cached:&#10;
        {"    "}<span className="text-accent font-semibold">return</span> json.loads(cached)&#10;
        <span className="text-accent font-semibold">await</span> redis.set(cache_key, json.dumps(data), ex=3600)
      </code>
    </pre>
  );
}

function SnippetPydantic() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">class</span> ProductFilter(BaseModel):&#10;
        {"    "}category: str = Field(..., min_length=2)&#10;
        {"    "}max_price: float = Field(gt=0)&#10;
        {"    "}in_stock: bool = <span className="text-accent font-semibold">True</span>
      </code>
    </pre>
  );
}

function SnippetDRFView() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">class</span> IssueViewSet(viewsets.ModelViewSet):&#10;
        {"    "}serializer_class = TicketSerializer&#10;
        {"    "}permission_classes = [IsAuthenticated]&#10;
        {"    "}<span className="text-accent font-semibold">def</span> get_queryset(self):&#10;
        {"        "}<span className="text-accent font-semibold">return</span> Ticket.objects.filter(owner=self.request.user)
      </code>
    </pre>
  );
}

function SnippetDebounce() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">export function</span> useDebounce&lt;T&gt;(value: T, delay = 200): T &#123;&#10;
        {"    "}const [debounced, setDebounced] = useState(value);&#10;
        {"    "}useEffect(() =&gt; &#123;&#10;
        {"        "}const t = setTimeout(() =&gt; setDebounced(value), delay);&#10;
        {"        "}<span className="text-accent font-semibold">return</span> () =&gt; clearTimeout(t);&#10;
        {"    "}&#125;, [value, delay]);&#10;
        {"    "}<span className="text-accent font-semibold">return</span> debounced;&#10;
        &#125;
      </code>
    </pre>
  );
}

function SnippetSQLTransaction() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">BEGIN;</span>&#10;
        <span className="text-accent font-semibold">UPDATE</span> accounts <span className="text-accent font-semibold">SET</span> balance = balance - 100 <span className="text-accent font-semibold">WHERE</span> id = 42;&#10;
        <span className="text-accent font-semibold">UPDATE</span> accounts <span className="text-accent font-semibold">SET</span> balance = balance + 100 <span className="text-accent font-semibold">WHERE</span> id = 84;&#10;
        <span className="text-accent font-semibold">COMMIT;</span>
      </code>
    </pre>
  );
}

function SnippetAuthToken() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">async def</span> get_current_user(token: str = Depends(oauth2_scheme)):&#10;
        {"    "}payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])&#10;
        {"    "}username: str = payload.get(&quot;sub&quot;)&#10;
        {"    "}<span className="text-accent font-semibold">return</span> await crud.get_user(username)
      </code>
    </pre>
  );
}

function SnippetTailwindBadge() {
  return (
    <pre className="font-mono text-xs leading-relaxed">
      <code>
        <span className="text-accent font-semibold">export function</span> StatusBadge(&#123; status &#125;: Props) &#123;&#10;
        {"    "}<span className="text-accent font-semibold">return</span> (&#10;
        {"        "}&lt;span className=&quot;inline-flex px-2 py-0.5 rounded text-xs&quot;&gt;&#10;
        {"            "}&#123;status&#125;&#10;
        {"        "}&lt;/span&gt;&#10;
        {"    "});&#10;
        &#125;
      </code>
    </pre>
  );
}

const col1Snippets = [SnippetFastAPI, SnippetDjango, SnippetRedis, SnippetGitTerminal];
const col2Snippets = [SnippetReactHook, SnippetSQLTrgm, SnippetPydantic, SnippetDebounce];
const col3Snippets = [SnippetDRFView, SnippetSQLTransaction, SnippetAuthToken, SnippetTailwindBadge];
const col4Snippets = [SnippetFastAPI, SnippetRedis, SnippetPydantic, SnippetGitTerminal];

export function HeroCodeBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(true);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const renderSnippets = (snippets: React.ComponentType[]) => (
    <>
      <div className="flex flex-col space-y-6">
        {snippets.map((Snippet, idx) => (
          <div
            key={`a-${idx}`}
            className="p-3.5 rounded border border-border/30 bg-surface/20 select-none"
          >
            <Snippet />
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-6 mt-6" aria-hidden="true">
        {snippets.map((Snippet, idx) => (
          <div
            key={`b-${idx}`}
            className="p-3.5 rounded border border-border/30 bg-surface/20 select-none"
          >
            <Snippet />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {/* Desktop-only cursor spotlight */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background:
            "radial-gradient(circle 300px at var(--mx, -9999px) var(--my, -9999px), var(--accent) 0%, transparent 75%)",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      {/* Radial clear mask for centered headline & content */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 65% 50% at 50% 50%, transparent 20%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 50% at 50% 50%, transparent 20%, black 75%)",
        }}
      >
        {/* Code snippets columns at 7-10% opacity */}
        <div className="w-full h-full opacity-[0.08] text-text font-mono">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6">
            {/* Column 1 (Mobile & Desktop) */}
            <div
              className="hero-drift-column"
              style={{
                animationDuration: "72s",
                animationPlayState: isInView ? "running" : "paused",
              }}
            >
              {renderSnippets(col1Snippets)}
            </div>

            {/* Column 2 (Mobile & Desktop) */}
            <div
              className="hero-drift-column"
              style={{
                animationDuration: "88s",
                animationPlayState: isInView ? "running" : "paused",
              }}
            >
              {renderSnippets(col2Snippets)}
            </div>

            {/* Column 3 (Tablet/Desktop only) */}
            <div
              className="hero-drift-column hidden md:block"
              style={{
                animationDuration: "64s",
                animationPlayState: isInView ? "running" : "paused",
              }}
            >
              {renderSnippets(col3Snippets)}
            </div>

            {/* Column 4 (Large Desktop only) */}
            <div
              className="hero-drift-column hidden xl:block"
              style={{
                animationDuration: "80s",
                animationPlayState: isInView ? "running" : "paused",
              }}
            >
              {renderSnippets(col4Snippets)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
