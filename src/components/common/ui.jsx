import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, Star } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Motion-aware scroll reveal                                          */
/* ------------------------------------------------------------------ */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;
    if (typeof IntersectionObserver === 'undefined') { setSeen(true); return undefined; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Image with shimmer skeleton + graceful fallback                     */
/* ------------------------------------------------------------------ */
export function SmartImage({
  src, alt = '', className = '', fallback = '/assets/images/placeholder.svg',
  loading = 'lazy', ratio, wrapClassName = 'p-media',
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const current = failed ? fallback : src;

  return (
    <span className={wrapClassName} style={ratio ? { aspectRatio: ratio } : undefined}>
      {!loaded && !failed ? <span className="skeleton" aria-hidden="true" /> : null}
      <img
        src={current}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`${className} img-fade ${loaded ? 'loaded' : ''}`.trim()}
        onLoad={() => setLoaded(true)}
        onError={() => { if (!failed) { setFailed(true); setLoaded(true); } }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
export function SectionHeading({ title, eyebrow, moreTo, moreLabel = 'مشاهده همه', children }) {
  return (
    <div className="section-head">
      <div>
        <h2>{title}</h2>
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      </div>
      <div className="spacer" />
      {children}
      {moreTo ? (
        <Link className="more" to={moreTo}>
          {moreLabel}
          <ChevronLeft size={14} />
        </Link>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function Breadcrumb({ items }) {
  return (
    <nav className="crumbs" aria-label="مسیر صفحه">
      <Link to="/">صفحه نخست</Link>
      {items.map((it) => (
        <React.Fragment key={it.label}>
          <span className="sep" aria-hidden="true">/</span>
          {it.to ? <Link to={it.to}>{it.label}</Link> : <span>{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
export function Accordion({ items, defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div data-component="faq-accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc ${isOpen ? 'open' : ''}`} key={it.q}>
            <button
              type="button"
              className="acc-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <ChevronDown size={16} className="chev" />
              <span>{it.q}</span>
            </button>
            <div className="acc-body">
              <div className="acc-inner">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function Stars({ score = 5, size = 14 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2, color: 'var(--warm)' }} aria-label={`امتیاز ${score} از ۵`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={size} fill={n <= score ? 'currentColor' : 'none'} strokeWidth={1.5} />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
export function Counter({ value, duration = 500 }) {
  const [n, setN] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    const from = prev.current;
    const to = value;
    prev.current = value;
    if (from === to || typeof requestAnimationFrame === 'undefined') { setN(to); return undefined; }
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return undefined; }
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - start) / duration);
      const eased = 1 - (1 - k) * (1 - k);
      setN(Math.round(from + (to - from) * eased));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <span aria-live="polite">{n.toLocaleString('fa-IR')}</span>;
}

/* ------------------------------------------------------------------ */
export function Carousel({ children, rail = 'rail-6', ariaLabel }) {
  const ref = useRef(null);
  const scroll = useCallback((dir) => {
    const el = ref.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.8, 240);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }, []);

  return (
    <div className="carousel-wrap">
      <button type="button" className="car-arrow r" onClick={() => scroll(1)} aria-label="بعدی">
        <ChevronRight size={18} />
      </button>
      <button type="button" className="car-arrow l" onClick={() => scroll(-1)} aria-label="قبلی">
        <ChevronLeft size={18} />
      </button>
      <div className={`carousel ${rail}`} ref={ref} role="list" aria-label={ariaLabel}>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function Pager({ page, pages, onChange }) {
  if (pages <= 1) return null;
  const list = [];
  const push = (n) => list.push(n);
  push(1);
  for (let i = page - 1; i <= page + 1; i += 1) if (i > 1 && i < pages) push(i);
  if (pages > 1) push(pages);
  const uniq = [...new Set(list)].sort((a, b) => a - b);

  return (
    <nav className="pager" aria-label="صفحه‌بندی">
      <button type="button" onClick={() => onChange(Math.max(1, page - 1))} disabled={page === 1} aria-label="صفحه قبل">
        <ChevronRight size={16} />
      </button>
      {uniq.map((n, i) => (
        <React.Fragment key={n}>
          {i > 0 && uniq[i - 1] !== n - 1 ? <span aria-hidden="true">…</span> : null}
          <button
            type="button"
            className={n === page ? 'on' : ''}
            onClick={() => onChange(n)}
            aria-current={n === page ? 'page' : undefined}
          >
            {n.toLocaleString('fa-IR')}
          </button>
        </React.Fragment>
      ))}
      <button type="button" onClick={() => onChange(Math.min(pages, page + 1))} disabled={page === pages} aria-label="صفحه بعد">
        <ChevronLeft size={16} />
      </button>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
export function EmptyState({ text = 'متاسفانه محتوایی یافت نشد!' }) {
  return <div className="empty-state">{text}</div>;
}
