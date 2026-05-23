const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ============= Covers — placeholder visuals per project ============= */
function CoverDiary() {
  return (
    <div className="cover">
      <div className="grid-lines" />
      <svg viewBox="0 0 400 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <pattern id="d-stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill="var(--bg-2)" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--rule-strong)" strokeWidth="1" />
          </pattern>
        </defs>
        {/* phone frame */}
        <rect x="135" y="40" width="130" height="220" rx="20" fill="var(--card)" stroke="var(--rule-strong)" />
        {/* photo placeholder */}
        <rect x="148" y="58" width="104" height="80" rx="6" fill="url(#d-stripes)" />
        {/* macro bars */}
        <rect x="148" y="152" width="104" height="6" rx="3" fill="var(--rule)" />
        <rect x="148" y="152" width="62" height="6" rx="3" fill="var(--accent)" />
        <rect x="148" y="166" width="104" height="6" rx="3" fill="var(--rule)" />
        <rect x="148" y="166" width="40" height="6" rx="3" fill="var(--ink)" opacity="0.5" />
        <rect x="148" y="180" width="104" height="6" rx="3" fill="var(--rule)" />
        <rect x="148" y="180" width="80" height="6" rx="3" fill="var(--ink)" opacity="0.3" />
        {/* comment chip */}
        <rect x="148" y="200" width="104" height="40" rx="6" fill="var(--bg-2)" stroke="var(--rule)" />
        <line x1="156" y1="212" x2="220" y2="212" stroke="var(--rule-strong)" strokeWidth="1.5" />
        <line x1="156" y1="220" x2="200" y2="220" stroke="var(--rule-strong)" strokeWidth="1.5" />
        <line x1="156" y1="228" x2="210" y2="228" stroke="var(--rule-strong)" strokeWidth="1.5" />
      </svg>
      <span className="cover-label">photo → macros</span>
    </div>
  );
}

function CoverTrainers() {
  return (
    <div className="cover">
      <div className="grid-lines" />
      <svg viewBox="0 0 400 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(${60 + i*90}, ${80 + i*8})`}>
            <rect width="100" height="140" rx="8" fill="var(--card)" stroke="var(--rule-strong)" />
            <circle cx="50" cy="40" r="22" fill="var(--bg-2)" stroke="var(--rule)" />
            <rect x="20" y="74" width="60" height="6" rx="3" fill="var(--ink)" opacity="0.6" />
            <rect x="20" y="86" width="40" height="4" rx="2" fill="var(--ink)" opacity="0.3" />
            <rect x="20" y="110" width="60" height="18" rx="9" fill={i === 1 ? "var(--accent)" : "var(--bg-2)"} stroke={i === 1 ? "var(--accent)" : "var(--rule)"} />
          </g>
        ))}
      </svg>
      <span className="cover-label">marketplace</span>
    </div>
  );
}

function CoverYoutube() {
  return (
    <div className="cover">
      <div className="grid-lines" />
      <svg viewBox="0 0 400 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <pattern id="y-stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
            <rect width="6" height="6" fill="var(--bg-2)" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--rule-strong)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="80" y="60" width="240" height="135" rx="8" fill="url(#y-stripes)" stroke="var(--rule-strong)" />
        <circle cx="200" cy="127" r="28" fill="var(--bg)" stroke="var(--rule-strong)" />
        <polygon points="192,114 192,140 216,127" fill="var(--accent)" />
        <rect x="80" y="210" width="160" height="8" rx="4" fill="var(--ink)" opacity="0.5" />
        <rect x="80" y="226" width="100" height="6" rx="3" fill="var(--ink)" opacity="0.25" />
      </svg>
      <span className="cover-label">weekly · video</span>
    </div>
  );
}

const COVERS = { diary: CoverDiary, trainers: CoverTrainers, youtube: CoverYoutube };

/* ============= Screenshot gallery (real phone shots) ============= */
function PhoneShot({ src, alt, size = "md" }) {
  return (
    <div className={`phone-shot phone-shot--${size}`}>
      <div className="phone-shot-frame">
        <img src={src} alt={alt || ""} draggable="false" />
      </div>
    </div>
  );
}
function DesktopShot({ src, alt }) {
  return (
    <div className="desktop-shot">
      <div className="desktop-shot-chrome">
        <span /><span /><span />
      </div>
      <div className="desktop-shot-frame">
        <img src={src} alt={alt || ""} draggable="false" />
      </div>
    </div>
  );
}
function GalleryCover({ project, lang, variant }) {
  // variant: 'preview' (single thumb) or 'modal' (row/stack)
  const shots = project.screenshots || [];
  const format = shots[0]?.format || "phone";
  if (variant === "preview") {
    const s = shots[0];
    return (
      <div className={`cover gallery gallery--preview gallery--${format}`}>
        <div className="grid-lines" />
        {format === "desktop"
          ? <DesktopShot src={s.src} alt={s.alt[lang]} />
          : <PhoneShot src={s.src} alt={s.alt[lang]} size="sm" />}
      </div>
    );
  }
  return (
    <div className={`cover gallery gallery--modal gallery--${format}`}>
      <div className="grid-lines" />
      <div className="gallery-row">
        {shots.map((s, i) => (
          format === "desktop"
            ? <DesktopShot key={i} src={s.src} alt={s.alt[lang]} />
            : <PhoneShot key={i} src={s.src} alt={s.alt[lang]} size="md" />
        ))}
      </div>
    </div>
  );
}
function renderCover(project, lang, variant) {
  if (project.screenshots && project.screenshots.length) {
    return <GalleryCover project={project} lang={lang} variant={variant} />;
  }
  const Cover = COVERS[project.cover.kind];
  return <Cover />;
}

/* ============= Reveal-on-scroll ============= */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ============= Nav ============= */
function Nav({ lang, setLang, theme, setTheme, copy }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="brand">
        <span className="brand-dot" />
        <span>danil.site</span>
        <span className="brand-status"> &nbsp;/ &nbsp;{copy.nav.status}</span>
      </div>
      <div className="nav-tools">
        <div className="tool lang-toggle" role="tablist" aria-label="Language">
          <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <button className="tool" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
          {theme === "dark" ? "☾ " + copy.nav.theme.dark : "☀ " + copy.nav.theme.light}
        </button>
      </div>
    </header>
  );
}

/* ============= Hero ============= */
function Hero({ copy }) {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-meta reveal">
          {copy.hero.meta.map((m, i) => (
            <React.Fragment key={i}>
              <span>{m}</span>
              {i < copy.hero.meta.length - 1 && <span className="hero-meta-rule" />}
            </React.Fragment>
          ))}
        </div>
        <h1 className="reveal" data-delay="1">
          {copy.hero.lines[0][0]}
          <em>{copy.hero.lines[0][1]}</em>
          {copy.hero.lines[0][2]}
        </h1>
        <div className="hero-sub reveal" data-delay="2">
          {copy.hero.sub.map((s, i) => <p key={i}>{s.text}</p>)}
        </div>
        <div className="hero-aside reveal" data-delay="3">
          {copy.hero.aside.map((a, i) => (
            <div key={i}>
              <span className="label">{a.label}</span>
              <span className="value">{a.pulse && <span className="pulse" />}{a.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= Project list ============= */
function ProjectRow({ project, index, lang, onOpen, onHover }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    onHover({ id: project.id, x: e.clientX, y: e.clientY, in: true });
  };
  const onLeave = () => onHover({ in: false });
  const t = project.title[lang];
  const Cover = COVERS[project.cover.kind];
  return (
    <li
      ref={ref}
      className="project reveal"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(project.id)}
    >
      <span className="p-num mono">{String(index + 1).padStart(2, "0")} /</span>
      <div className="p-body">
        <div className="p-title">{t[0]}<em>{t[1]}</em></div>
        <div className="p-meta">
          <span>{project.year}</span>
          <span className="p-rule" />
          <span>{project.status[lang]}</span>
        </div>
        <p className="p-desc">{project.tagline[lang]}</p>
        <div className="p-tags">
          {project.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
      <div className="p-arrow" aria-hidden>→</div>
    </li>
  );
}

function Projects({ copy, lang, onOpen }) {
  const previewRef = useRef(null);
  const [previewId, setPreviewId] = useState(null);
  const onHover = useCallback((s) => {
    const el = previewRef.current;
    if (!el) return;
    if (s.in) {
      setPreviewId(s.id);
      el.style.left = s.x + "px";
      el.style.top = s.y + "px";
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
      setTimeout(() => setPreviewId(null), 200);
    }
  }, []);
  const previewProject = previewId ? PROJECTS.find((p) => p.id === previewId) : null;
  return (
    <section className="section" id="projects">
      <div className="shell">
        <div className="section-head reveal">
          <h2>{copy.projects.title}</h2>
          <span className="index mono">{copy.projects.index} · {copy.projects.hint}</span>
        </div>
        <ul className="projects">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} lang={lang} onOpen={onOpen} onHover={onHover} />
          ))}
        </ul>
      </div>
      <div className="p-preview" ref={previewRef}>
        {previewProject && renderCover(previewProject, lang, "preview")}
      </div>
    </section>
  );
}

/* ============= Modal ============= */
function Modal({ projectId, onClose, lang }) {
  const project = projectId ? PROJECTS.find((p) => p.id === projectId) : null;
  const open = !!project;
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!project && !open) return null;
  const p = project || PROJECTS[0];
  const t = p.title[lang];
  return (
    <React.Fragment>
      <div className={`modal-scrim ${open ? "open" : ""}`} onClick={onClose} />
      <div className={`modal ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-inner">
          <div className="modal-cover">{renderCover(p, lang, "modal")}</div>
          <h3>{t[0]}<em>{t[1]}</em></h3>
          <div className="modal-meta">
            <span>{p.year}</span>
            <span>{p.status[lang]}</span>
            {p.tags.slice(0, 3).map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="modal-body">
            <div>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--ink)" }}><strong>{p.tagline[lang]}</strong></p>
              {p.body[lang].map((para, i) => <p key={i}>{para}</p>)}
              <div className="cta-stack">
                <div className="cta-row">
                  {p.cta.filter((c) => c.primary).map((c, i) => (
                    <a key={i} href={c.href} target="_blank" rel="noreferrer" className="cta primary">
                      {c.label[lang]} <span className="mono" aria-hidden>↗</span>
                    </a>
                  ))}
                  {p.cta.filter((c) => c.disabled).map((c, i) => (
                    <span key={i} className="cta cta--disabled" aria-disabled="true">
                      <span className="cta-dot" /> {c.label[lang]}
                    </span>
                  ))}
                </div>
                {p.cta.some((c) => c.platform) && (
                  <div className="cta-row cta-row--platforms">
                    {p.cta.filter((c) => c.platform).map((c, i) => (
                      <a key={i} href={c.href} target="_blank" rel="noreferrer" className="cta cta--ghost">
                        <span className="cta-badge mono">{c.platform.toUpperCase()}</span>
                        <span className="cta-url mono">{c.href.replace(/^https?:\/\//, "")}</span>
                        <span className="mono" aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                )}
                {p.cta.filter((c) => !c.primary && !c.platform).length > 0 && (
                  <div className="cta-row">
                    {p.cta.filter((c) => !c.primary && !c.platform).map((c, i) => (
                      <a key={i} href={c.href} target="_blank" rel="noreferrer" className="cta">
                        {c.label[lang]} <span className="mono" aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <aside className="modal-side">
              <dl>
                {Object.entries(p.meta).map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v[lang]}</dd>
                  </div>
                ))}
                <div>
                  <dt>tags</dt>
                  <dd>{p.tags.join(" · ")}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ============= Footer ============= */
function Footer({ copy }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <h2 className="reveal">{copy.footer.title[0]}<em>{copy.footer.title[1]}</em></h2>
          <div>
            <p className="reveal" style={{ color: "var(--ink-soft)", maxWidth: "44ch", margin: "0 0 32px", fontSize: 16, lineHeight: 1.5 }}>
              {copy.footer.sub}
            </p>
            <div className="footer-links reveal" data-delay="1">
              {copy.footer.links.map((l) => (
                <a key={l.label} href={l.href} className="footer-link">
                  <span><span className="mono" style={{ color: "var(--ink-faint)", marginRight: 14 }}>{l.label.toLowerCase()}</span>{l.value}</span>
                  <span className="arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="colophon">
          <span>{copy.footer.colophon[0]}</span>
          <span>{copy.footer.colophon[1]}</span>
        </div>
      </div>
    </footer>
  );
}

/* ============= App ============= */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c2562a",
  "density": 1
}/*EDITMODE-END*/;

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ru");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [openId, setOpenId] = useState(null);
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  useEffect(() => { localStorage.setItem("lang", lang); document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", tweaks.accent);
    document.documentElement.style.setProperty("--accent-soft", tweaks.accent + "1f");
    document.documentElement.style.setProperty("--density", String(tweaks.density));
  }, [tweaks.accent, tweaks.density]);

  useReveal();

  const copy = SITE_COPY[lang];

  return (
    <React.Fragment>
      <Nav lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} copy={copy} />
      <main>
        <Hero copy={copy} />
        <Projects copy={copy} lang={lang} onOpen={setOpenId} />
      </main>
      <Footer copy={copy} />
      <Modal projectId={openId} onClose={() => setOpenId(null)} lang={lang} />

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Look" />
          <window.TweakColor
            label="Accent"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#c2562a", "#1d4d3a", "#234899", "#7a3e8f", "#111111"]}
          />
          <window.TweakSlider
            label="Density"
            value={tweaks.density}
            onChange={(v) => setTweak("density", v)}
            min={0} max={3} step={0.25}
            unit="×"
          />
        </window.TweaksPanel>
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
