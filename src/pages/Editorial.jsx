import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Download, Calendar, User, ChevronLeft, Search } from 'lucide-react';
import { Reveal, Breadcrumb, SectionHeading, Accordion, SmartImage, Stars, EmptyState } from '../components/common/ui.jsx';
import { brandOf, productBySlug, priceLabel } from '../lib/catalog.js';
import { ConsultationBand, BrandMarquee, PromoBanners, FaqSection } from '../components/home/home-sections.jsx';
import { BLOG_POSTS, BLOG_CATEGORIES, SOFTWARE_ITEMS, PRICE_LIST_GROUPS, PRICE_LIST_TEXT, HUB_PAGES } from '../data/editorial.js';
import { SITE } from '../data/site.js';
import { FAQ } from '../data/home.js';

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */
export function BlogIndexPage() {
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const list = BLOG_POSTS.filter((p) => (cat === 'all' || p.category === cat)
    && (q.trim() === '' || p.title.includes(q.trim()) || (p.excerpt || '').includes(q.trim())));

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'وبلاگ' }]} />
        <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
          <img src="/assets/images/blog-cover-hd.webp" alt="" />
          <div className="overlay">
            <div className="container">
              <h1 style={{ fontSize: 26 }}>وبلاگ {SITE.brandFa}</h1>
              <p>آموزش، راهنمای خرید و نکات فنی تجهیزات نظارتی و امنیتی</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-tight">
        <div className="listing-bar">
          <div className="chips">
            <button type="button" className={`chip ${cat === 'all' ? 'on' : ''}`} onClick={() => setCat('all')}>همه مطالب</button>
            {BLOG_CATEGORIES.map((c) => (
              <button key={c.slug} type="button" className={`chip ${cat === c.slug ? 'on' : ''}`} onClick={() => setCat(c.slug)}>
                {c.title}
              </button>
            ))}
          </div>
          <div className="spacer" style={{ flex: 1 }} />
          <label style={{ display: 'flex', gap: 8 }}>
            <span className="visually-hidden">جست و جو در مقالات</span>
            <input className="field" style={{ width: 200 }} placeholder="جست و جو…" value={q} onChange={(e) => setQ(e.target.value)} />
            <span className="icon-btn" style={{ background: 'var(--primary-soft)' }}><Search size={16} /></span>
          </label>
        </div>

        {list.length === 0 ? <EmptyState /> : (
          <div className="blog-grid">
            {list.map((p, i) => (
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
        )}
      </div>

      <ConsultationBand compact />
      <BrandMarquee />
    </>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const cat = BLOG_CATEGORIES.find((c) => c.slug === post.category);
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div className="container">
        <Breadcrumb items={[
          { label: 'وبلاگ', to: '/blog' },
          ...(cat ? [{ label: cat.title, to: cat.to }] : []),
          { label: post.title },
        ]} />
      </div>

      <div className="container section-tight">
        <article className="article">
          <h1>{post.title}</h1>
          <div className="article-meta">
            {post.author ? <span><User size={13} /> {post.author}</span> : null}
            <span><Calendar size={13} /> {post.dateFa || post.date}</span>
            {post.rating ? <span><Stars score={5} size={13} /> {post.rating}</span> : null}
          </div>

          <div className="article-hero">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="prose prose-inner">
            <p>{post.excerpt}</p>
            {post.body ? post.body.map((b) => (
              <React.Fragment key={b.h}>
                <h2>{b.h}</h2>
                <p>{b.p}</p>
              </React.Fragment>
            )) : (
              <>
                <p>
                  این مقاله بخشی از آرشیو آموزشی {SITE.brandFa} است. متن کامل این مطلب در نسخه نمایشی قالب بارگذاری
                  نشده است؛ اما ساختار صفحه، تیترها، متادیتا و بخش‌های مرتبط در همین قالب قابل استفاده است.
                </p>
                <h2>نکته مهم پیش از خرید</h2>
                <p>
                  پیش از انتخاب تجهیزات، محل نصب، فاصله سوژه، شرایط نوری شب و مدت نگهداری تصاویر را مشخص کنید. این
                  چهار عامل، انتخاب رزولوشن، لنز، دستگاه ضبط و ظرفیت ذخیره‌سازی را تعیین می‌کنند.
                </p>
              </>
            )}

            {post.rating ? (
              <p style={{ color: 'var(--n400)', marginTop: 18 }}>{post.rating}</p>
            ) : null}
          </div>

          {post.faqs ? (
            <div style={{ marginTop: 32 }}>
              <SectionHeading title="سؤال‌های متداول" />
              <Accordion items={post.faqs} />
            </div>
          ) : null}

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--n200)' }}>
            <h3 style={{ fontSize: 15, marginBottom: 12 }}>مطالب مرتبط</h3>
            <div className="card-grid grid-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="chip" style={{ justifyContent: 'flex-start', textAlign: 'right', borderRadius: 4, padding: '10px 14px', minHeight: 'auto' }}>
                  {r.title}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 28 }} className="form-card">
            <h3 style={{ fontSize: 15, marginBottom: 10 }}>ارسال دیدگاه</h3>
            <div className="form-row">
              <div className="form-field"><label htmlFor="c-name">نام</label><input id="c-name" className="field" /></div>
              <div className="form-field"><label htmlFor="c-mail">ایمیل</label><input id="c-mail" className="field" type="email" dir="ltr" /></div>
            </div>
            <div className="form-field"><label htmlFor="c-text">دیدگاه</label><textarea id="c-text" className="field" rows={4} /></div>
            <button type="button" className="btn btn-primary">ثبت دیدگاه</button>
            <p className="form-note" style={{ marginTop: 10 }}>نشانی ایمیل شما منتشر نخواهد شد.</p>
          </div>
        </article>
      </div>

      <ConsultationBand compact />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Software downloads                                                  */
/* ------------------------------------------------------------------ */
export function SoftwarePage() {
  const [cat, setCat] = useState('all');
  const cats = [
    { id: 'all', title: 'همه' },
    { id: 'cctv-software', title: 'نرم افزار دوربین مداربسته' },
    { id: 'burglar-alarm-software', title: 'نرم افزار دزدگیر' },
    { id: 'fire-alarm-software', title: 'نرم افزار اعلام حریق' },
  ];
  const list = SOFTWARE_ITEMS.filter((s) => cat === 'all' || s.category === cat);

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'دانلود نرم افزار' }]} />
        <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
          <img src="/assets/images/sw-hikconnect.jpg" alt="" />
          <div className="overlay">
            <div className="container">
              <h1 style={{ fontSize: 26 }}>دانلود نرم افزار</h1>
              <p>نرم‌افزارهای انتقال تصویر، دزدگیر و اعلام حریق برندهای معتبر</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-tight">
        <div className="listing-bar">
          <div className="chips">
            {cats.map((c) => (
              <button key={c.id} type="button" className={`chip ${cat === c.id ? 'on' : ''}`} onClick={() => setCat(c.id)}>{c.title}</button>
            ))}
          </div>
        </div>

        {list.length === 0 ? <EmptyState /> : (
          <div className="sw-grid">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <article className="sw-card">
                  <Link className="cover" to={`/software/${s.slug}`}><img src={s.image} alt={s.title} loading="lazy" /></Link>
                  <div className="body">
                    <h3><Link to={`/software/${s.slug}`}>{s.title}</Link></h3>
                    <div className="date">{s.date}</div>
                    <p style={{ fontSize: 12, color: 'var(--n600)' }}>{s.excerpt}</p>
                    <Link className="dl" to={`/software/${s.slug}`}>مشاهده و دانلود <ChevronLeft size={13} /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ConsultationBand compact />
    </>
  );
}

export function SoftwareDetailPage() {
  const { slug } = useParams();
  const item = SOFTWARE_ITEMS.find((s) => s.slug === slug);
  if (!item) return <Navigate to="/software" replace />;

  return (
    <>
      <div className="container">
        <Breadcrumb items={[
          { label: 'دانلود نرم افزار', to: '/software' },
          { label: item.categoryTitle },
          { label: item.title },
        ]} />
      </div>
      <div className="container section-tight">
        <article className="article">
          <h1>{item.title}</h1>
          <div className="article-meta"><span><Calendar size={13} /> {item.date}</span></div>
          <img src={item.image} alt={item.title} style={{ borderRadius: 12, marginBottom: 24 }} />
          <div className="prose prose-inner">
            <p>{item.excerpt}</p>
            <h2>راهنمای دانلود و نصب</h2>
            <p>
              برای دریافت فایل نصب این نرم‌افزار و راهنمای گام‌به‌گام پیکربندی، با کارشناسان {SITE.brandFa} تماس بگیرید.
              نسخه پیشنهادی نصب، به مدل دستگاه و سیستم‌عامل شما بستگی دارد.
            </p>
            <ul>
              <li>پیش از نصب، نسخه فعلی نرم‌افزار روی سیستم را بررسی کنید.</li>
              <li>برای اتصال از راه دور، پورت‌ها و تنظیمات شبکه دستگاه را آماده کنید.</li>
              <li>نام کاربری و رمز پیش‌فرض را در اولین ورود تغییر دهید.</li>
            </ul>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={SITE.phoneHref}><Download size={16} /> دریافت فایل نصب</a>
            <Link className="btn btn-ghost" to="/software">بازگشت به لیست نرم‌افزارها</Link>
          </div>
        </article>
      </div>
      <ConsultationBand compact />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Price list                                                          */
/* ------------------------------------------------------------------ */
export function PriceListPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'لیست قیمت' }]} />
      </div>

      <div className="container section-tight">
        <Reveal>
          <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
            <img src="/assets/images/pricelist-banner.jpg" alt="" />
            <div className="overlay">
              <div className="container">
                <h1 style={{ fontSize: 26 }}>دانلود لیست قیمت محصولات {SITE.brandFa}</h1>
                <p>لیست قیمت به‌روز برندهای کلارنت، داهوا، مکسرون، کلاسیک، تیتان و OSTCAM</p>
              </div>
            </div>
          </div>
        </Reveal>

        {PRICE_LIST_GROUPS.map((g, gi) => (
          <Reveal key={g.title} delay={Math.min(gi * 60, 300)}>
            <div style={{ marginBottom: 28 }}>
              <SectionHeading title={g.title} />
              <div className="pricelist-grid">
                {g.files.map((f) => (
                  <div className="pl-card" key={f.title}>
                    <img src={f.image} alt={f.title} loading="lazy" />
                    <span className="t">{f.title}</span>
                    <a className="a" href={SITE.phoneHref}>دریافت فایل</a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="prose prose-inner">
              <h2>{PRICE_LIST_TEXT.title}</h2>
              {PRICE_LIST_TEXT.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              <h3>چرا مشاهده لیست قیمت محصولات اهمیت دارد؟</h3>
              <ul>
                {PRICE_LIST_TEXT.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <h3>جمع‌بندی</h3>
              <p>{PRICE_LIST_TEXT.closing}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Product detail helper used by search / internal links               */
/* ------------------------------------------------------------------ */
export function ProductShortcut({ slug }) {
  const p = productBySlug(slug);
  if (!p) return <EmptyState />;
  const b = brandOf(p.name);
  return (
    <div className="p-card">
      <Link className="p-media" to={`/product/${p.slug}`}><img src={p.image} alt={p.name} /></Link>
      <h3 className="p-title"><Link to={`/product/${p.slug}`}>{p.name}</Link></h3>
      <div className="p-foot"><span className="price">{priceLabel(p)}</span></div>
      {b ? <span className="visually-hidden">{b.fa}</span> : null}
    </div>
  );
}
