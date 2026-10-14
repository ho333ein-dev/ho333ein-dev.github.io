import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, ShieldCheck, Truck, Headphones, Wrench } from 'lucide-react';
import { Reveal, SectionHeading, SmartImage, Accordion } from '../common/ui.jsx';
import { ProductRow } from '../products/products.jsx';
import { SITE } from '../../data/site.js';
import { HERO_SLIDES, CATEGORY_TILES, FEATURE_TILES, PROJECT_ROWS, PROJECT_GALLERY, BRANDS, TRUST_BADGES, FAQ } from '../../data/home.js';

const TRUST_ICONS = [ShieldCheck, Truck, Headphones, Wrench];

/* ------------------------------------------------------------------ */
const AUTOPLAY_MS = 6500;

/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* Homepage slider.                                                    */
/* The five slides are the artwork the site owner supplied: each one   */
/* already carries its own logo, headline and button, so NOTHING is    */
/* overlaid here. The frame is sized close to the artwork's own        */
/* proportions and every image is shown whole, with the leftover band  */
/* filled by a blurred copy of the same slide.                         */
/* ------------------------------------------------------------------ */
export function HeroSlider({ slides = HERO_SLIDES }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const touch = useRef(null);

  const go = useCallback((n) => setI(((n % slides.length) + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', sync) : mq.removeListener(sync));
  }, []);

  useEffect(() => {
    if (paused || reduce) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, reduce, slides.length]);

  /* the countdown duration is handed to CSS through a custom property so the
     fill and its comet head stay in step with the real autoplay timer */
  const timer = (n) => (n === i && !reduce
    ? { '--hero-dur': `${AUTOPLAY_MS}ms`, '--hero-play': paused ? 'paused' : 'running' }
    : undefined);

  return (
    <section
      className={`hero ${reduce ? 'hero-static' : ''}`}
      data-component="hero-slider"
      aria-roledescription="اسلایدر"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 40) go(i + (dx > 0 ? -1 : 1));
        touch.current = null;
      }}
    >
      <div className="hero-stage">
        {slides.map((s, n) => (
          <div key={s.id} className={`hero-slide ${n === i ? 'active' : ''}`} aria-hidden={n !== i}>
              <span className="hero-ambient" aria-hidden="true" style={{ backgroundImage: `url(${s.sm})` }} />
            <Link to={s.to} className="hero-frame" aria-label={s.label} tabIndex={n === i ? 0 : -1}>
              <img
                src={s.image}
                srcSet={`${s.sm} ${Math.round(s.w / 2)}w, ${s.image} ${s.w}w`}
                sizes="100vw"
                width={s.w}
                height={s.h}
                alt={s.alt}
                loading={n === 0 ? 'eager' : 'lazy'}
                fetchPriority={n === 0 ? 'high' : 'low'}
                decoding="async"
              />
            </Link>
          </div>
        ))}

        <div className="hero-controls">
          <div className="hero-progress" role="tablist" aria-label="انتخاب اسلاید">
            {slides.map((s, n) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={n === i}
                aria-label={s.label}
                className={n === i ? 'on' : ''}
                style={timer(n)}
                onClick={() => go(n)}
              >
                <i className="fill" />
              </button>
            ))}
          </div>
        </div>

        <button type="button" className="hero-nav prev" onClick={() => go(i + 1)} aria-label="اسلاید قبلی"><ChevronRight size={20} /></button>
        <button type="button" className="hero-nav next" onClick={() => go(i - 1)} aria-label="اسلاید بعدی"><ChevronLeft size={20} /></button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function CategoryRail() {
  return (
    <section className="section-tight" data-component="category-rail">
      <div className="container">
        <div className="tile-rail">
          {CATEGORY_TILES.map((t, i) => (
            <Reveal key={t.title} delay={Math.min(i * 60, 360)}>
              <Link className="cat-tile" to={t.to}>
                <img src={t.icon} alt="" width="56" height="56" loading="lazy" />
                <span className="t">{t.title}</span>
                <span className="c">+{t.count.toLocaleString('fa-IR')} محصول</span>
                <span className="go">مشاهده</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureTiles() {
  return (
    <section className="section" data-component="feature-tiles">
      <div className="container">
        <div className="feature-grid">
          {FEATURE_TILES.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <Link className="feature-tile" to={t.to}>
                <img src={t.image} alt={t.title} loading="lazy" />
                <span className="cap">{t.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function ProductSection({ title, eyebrow, moreTo, products, rail = 'rail-6', alt = false }) {
  return (
    <section className={`section ${alt ? 'section-alt' : ''}`} data-component="product-section">
      <div className="container">
        <Reveal>
          <SectionHeading title={title} eyebrow={eyebrow} moreTo={moreTo} />
        </Reveal>
        <Reveal>
          <ProductRow products={products} rail={rail} ariaLabel={title} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function ProjectsSection() {
  const half = Math.ceil(PROJECT_ROWS.length / 2);
  return (
    <section className="section section-alt" data-component="projects">
      <div className="container">
        <Reveal>
          <div className="center-narrow" style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 22 }}>
              «برخی از پروژه‌های برجسته‌ای که توسط <b style={{ color: 'var(--primary)' }}>{SITE.brandFa}</b> انجام شده‌اند»
            </h2>
          </div>
        </Reveal>

        <div className="projects-grid">
          {[PROJECT_ROWS.slice(0, half), PROJECT_ROWS.slice(half)].map((rows, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr><th style={{ width: 56 }}>ردیف</th><th>پروژه</th><th style={{ width: 130 }}>نوع</th></tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.id}><td>{(r.id).toLocaleString('fa-IR')}</td><td>{r.name}</td><td>{r.type}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="gallery" style={{ marginTop: 32 }}>
            {PROJECT_GALLERY.map((g) => (
              <figure key={g.title}>
                <img src={g.image} alt={g.title} loading="lazy" />
                <figcaption>{g.title}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function ConsultationBand({ compact = false, title, text }) {
  return (
    <section className={compact ? 'section-tight' : 'section'} data-component="consultation-band">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <img className="char" src="/assets/images/char-support.png" alt="" aria-hidden="true" loading="lazy" />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 22 }}>{title || 'برای مشاوره و بررسی نیازهای پروژه‌تان، با ما تماس بگیرید.'}</h2>
              <p style={{ color: 'rgba(255,255,255,.86)', fontSize: 13, marginTop: 6 }}>
                {text || `کارشناسان ${SITE.brandFa} هفت روز هفته میزبان صدای گرم شما هستند.`}
              </p>
              <a className="cta-phone" href={SITE.phoneHref}>
                <Phone size={20} />
                {SITE.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function BrandMarquee({ brands = BRANDS }) {
  const items = [...brands, ...brands];
  return (
    <section className="section-tight" data-component="brand-strip">
      <div className="container">
        <Reveal>
          <SectionHeading title="برندهای موجود" eyebrow="نمایندگی و فروش برندهای معتبر" />
        </Reveal>
        <div className="marquee" aria-label="برندها">
          <div className="marquee-track">
            {items.map((b, i) => (
              <Link className="brand-logo" key={`${b.en}-${i}`} to={`/brand/${b.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} title={b.title}>
                <img src={b.image} alt={b.title} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function PromoBanners() {
  return (
    <section className="section-tight" data-component="promo-banners">
      <div className="container">
        <div className="promo-grid">
          <Reveal>
            <Link className="promo-card" to="/installment-purchase">
              <img src="/assets/images/banner-installment.jpg" alt="خرید اقساطی" loading="lazy" />
              <span className="overlay">
                <span className="badge badge-soft" style={{ background: 'rgba(255,255,255,.16)', color: '#fff' }}>دیجی پی</span>
                <h3>خرید اقساطی تجهیزات امنیتی</h3>
                <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.86)' }}>بدون چک و ضامن، در چند قسط ماهانه</span>
              </span>
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <Link className="promo-card" to="/request-for-dealership">
              <img src="/assets/images/banner-dealership.jpg" alt="درخواست نمایندگی" loading="lazy" />
              <span className="overlay">
                <span className="badge badge-sale">همکاری</span>
                <h3>درخواست نمایندگی فروش</h3>
                <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.86)' }}>فرصت همکاری برای فروشندگان و نصابان</span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function TrustRow() {
  return (
    <section className="section-tight" data-component="trust-row">
      <div className="container">
        <div className="card-grid grid-4">
          {TRUST_BADGES.map((b, i) => {
            const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
            return (
              <Reveal key={b.title} delay={i * 60}>
                <div className="stat" style={{ textAlign: 'right', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span className="info-item"><span className="ic"><Icon size={18} /></span></span>
                  <span>
                    <h4 style={{ fontSize: 13 }}>{b.title}</h4>
                    <p style={{ fontSize: 12, color: 'var(--n600)' }}>{b.text}</p>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function FaqSection({ items = FAQ, title = 'سوالات متداول' }) {
  return (
    <section className="section section-alt" data-component="faq">
      <div className="container" style={{ maxWidth: 980 }}>
        <Reveal><SectionHeading title={title} /></Reveal>
        <Reveal><Accordion items={items} /></Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function StatsRow({ items }) {
  return (
    <section className="section-tight" data-component="stats">
      <div className="container">
        <div className="stat-row">
          {items.map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div className="stat"><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function HubTiles({ tiles, bare = false }) {
  const grid = (
    <div className={tiles.length === 3 ? 'card-grid grid-3' : 'card-grid grid-4'} data-tile-count={tiles.length}>
      {tiles.map((t, i) => (
        <Reveal key={t.title + t.sub} delay={i * 60}>
          <Link className="cat-tile hub-tile" to={t.to} style={{ minHeight: 190 }}>
            <img src={t.image} alt={t.title} loading="lazy" />
            <span className="t">{t.title}</span>
            <span className="c">{t.sub}</span>
            <span className="go">مشاهده</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );

  if (bare) return grid;

  return (
    <section className="section" data-component="hub-tiles">
      <div className="container">{grid}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export function PageHero({ image, title, subtitle, badge }) {
  return (
    <div className="page-hero" data-component="page-hero">
      <img src={image} alt="" />
      <div className="overlay">
        <div className="container">
          {badge ? <span className="badge" style={{ background: 'rgba(255,255,255,.18)', color: '#fff', marginBottom: 10 }}>{badge}</span> : null}
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function SeoText({ title, paragraphs }) {
  return (
    <section className="section section-alt" data-component="seo-text">
      <div className="container">
        <Reveal>
          <div className="prose prose-inner">
            {title ? <h2>{title}</h2> : null}
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BlogRow({ posts, title = 'وبلاگ', moreTo = '/blog' }) {
  return (
    <section className="section" data-component="blog-row">
      <div className="container">
        <Reveal><SectionHeading title={title} moreTo={moreTo} /></Reveal>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <article className="blog-card">
                <Link className="cover" to={`/blog/${p.slug}`}>
                  <SmartImage src={p.image} alt={p.title} wrapClassName="cover-inner" />
                </Link>
                <div className="body">
                  <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                  <div className="meta">{p.dateFa || p.date}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
