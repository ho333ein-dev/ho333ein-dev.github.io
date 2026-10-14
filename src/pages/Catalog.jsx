import React, { useMemo, useState, useEffect } from 'react';
import { Link, useParams, useSearchParams, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Reveal, SectionHeading, Breadcrumb, Pager, EmptyState } from '../components/common/ui.jsx';
import { ProductGrid, FilterPanel, SortBar } from '../components/products/products.jsx';
import {
  categoryByPath, categoryBySlug, productsOf, sortProducts, CATEGORIES,
  productsOfBrand, searchProducts, allBrands, SORT_OPTIONS, ALL_PRODUCTS,
} from '../lib/catalog.js';
import {
  HubTiles, ProductSection, ConsultationBand, BrandMarquee, FaqSection, SeoText, PageHero,
} from '../components/home/home-sections.jsx';
import { HUB_PAGES } from '../data/editorial.js';
import { FAQ, BRANDS } from '../data/home.js';
import { SITE } from '../data/site.js';

const PER_PAGE = 24;

/* ------------------------------------------------------------------ */
/* Full catalogue listing (/shop) — every product in the template      */
/* ------------------------------------------------------------------ */
export function AllProductsPage() {
  const [sp, setSp] = useSearchParams();
  const [sort, setSort] = useState('latest');
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([null, null]);
  const [availability, setAvailability] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const catSlug = sp.get('cat') || '';

  const base = useMemo(() => (catSlug ? productsOf(catSlug) : ALL_PRODUCTS), [catSlug]);
  const activeCat = catSlug ? categoryBySlug(catSlug) : null;

  const filtered = useMemo(() => {
    let list = base;
    if (availability) list = list.filter((p) => p.inStock !== false);
    if (priceRange[0] != null) list = list.filter((p) => (p.priceValue || 0) >= priceRange[0]);
    if (priceRange[1] != null) list = list.filter((p) => p.priceValue != null && p.priceValue <= priceRange[1]);
    return sortProducts(list, sort);
  }, [base, availability, priceRange, sort]);

  useEffect(() => { setPage(1); }, [catSlug, sort, availability, priceRange]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  const slice = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  /* Top-level categories with a live product count, for the filter rail. */
  const rail = useMemo(() => CATEGORIES
    .filter((c) => (c.urlPath || '').split('/').filter(Boolean).length === 2)
    .map((c) => ({ slug: c.slug, title: c.title, count: productsOf(c.slug).length }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count), []);

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'همه محصولات' }]} />
        <Reveal>
          <div className="section-head">
            <h1 style={{ fontSize: 24 }}>{activeCat ? activeCat.title : 'همه محصولات'}</h1>
            <div className="spacer" />
            <span className="eyebrow">{total.toLocaleString('fa-IR')} محصول</span>
          </div>
        </Reveal>
        <div className="chips" style={{ marginBottom: 6 }}>
          <button
            type="button"
            className={`chip ${catSlug ? '' : 'on'}`}
            onClick={() => { sp.delete('cat'); setSp(sp, { replace: true }); }}
          >
            همه ({ALL_PRODUCTS.length.toLocaleString('fa-IR')})
          </button>
          {rail.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={`chip ${catSlug === c.slug ? 'on' : ''}`}
              onClick={() => setSp({ cat: c.slug }, { replace: true })}
            >
              {c.title} ({c.count.toLocaleString('fa-IR')})
            </button>
          ))}
        </div>
      </div>

      <div className="container section-tight">
        <div className="listing">
          <FilterPanel
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            priceRange={priceRange}
            onPrice={setPriceRange}
            availability={availability}
            onAvailability={setAvailability}
            minRating={minRating}
            onRating={(r) => setMinRating(r === minRating ? 0 : r)}
            activeSlug={catSlug}
            categoryLinks={rail.map((c) => ({ slug: c.slug, title: c.title, to: `/shop?cat=${c.slug}` }))}
            onReset={() => { setPriceRange([null, null]); setAvailability(false); setMinRating(0); }}
          />

          <div>
            <SortBar
              count={slice.length}
              total={total}
              sort={sort}
              onSort={setSort}
              onOpenFilters={() => setFiltersOpen(true)}
            />

            {total === 0 ? (
              <div className="listing-empty">
                <EmptyState text="با فیلترهای انتخاب‌شده محصولی پیدا نشد. فیلترها را بازنشانی کنید." />
                <div className="listing-empty-actions">
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => { setPriceRange([null, null]); setAvailability(false); setMinRating(0); }}
                  >
                    بازنشانی فیلترها
                  </button>
                  <a className="btn btn-ghost" href={SITE.phoneHref}>تماس با کارشناس</a>
                </div>
              </div>
            ) : (
              <ProductGrid products={slice} cols={3} />
            )}

            {total > 0 ? (
              <Pager page={page} pages={pages} onChange={(p) => { setPage(p); window.scrollTo({ top: 120, behavior: 'smooth' }); }} />
            ) : null}
          </div>
        </div>
      </div>

      <ConsultationBand compact />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Category listing                                                    */
/* ------------------------------------------------------------------ */
export function CategoryPage() {
  const params = useParams();
  const path = '/' + (params['*'] || '');
  const cat = categoryByPath(path);

  const [sort, setSort] = useState('latest');
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([null, null]);
  const [availability, setAvailability] = useState(false);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => { setPage(1); window.scrollTo({ top: 0 }); }, [path]);

  const base = useMemo(() => (cat ? productsOf(cat.slug) : []), [cat]);

  const filtered = useMemo(() => {
    let list = base;
    if (availability) list = list.filter((p) => p.inStock !== false);
    if (priceRange[0] != null) list = list.filter((p) => (p.priceValue || 0) >= priceRange[0]);
    if (priceRange[1] != null) list = list.filter((p) => p.priceValue != null && p.priceValue <= priceRange[1]);
    if (minRating) list = list.filter(() => true);
    return sortProducts(list, sort);
  }, [base, availability, priceRange, minRating, sort]);

  if (!cat) {
    return (
      <div className="container section">
        <Breadcrumb items={[{ label: 'دسته‌بندی یافت نشد' }]} />
        <EmptyState text="این دسته‌بندی در قالب موجود نیست." />
        <div className="center-narrow" style={{ marginTop: 20 }}>
          <Link className="btn btn-primary" to="/">بازگشت به صفحه نخست</Link>
        </div>
      </div>
    );
  }

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  const slice = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const parent = CATEGORIES.find((c) => {
    const p = c.urlPath.replace(/\/+$/, '');
    const me = cat.urlPath.replace(/\/+$/, '');
    return me.startsWith(p + '/') && p !== me;
  });

  const siblings = CATEGORIES.filter((c) => c.urlPath.replace(/\/+$/, '').startsWith(cat.urlPath.replace(/\/+$/, '') + '/'));

  /* A few catalogue categories are genuinely empty in the source data. Rather
     than showing a blank page from a menu click, fall back to the nearest
     ancestor that does hold products so every menu destination is useful. */
  const fallback = useMemo(() => {
    let node = parent;
    let guard = 0;
    while (node && guard < 6) {
      const list = productsOf(node.slug);
      if (list.length) return { node, list: list.slice(0, PER_PAGE) };
      const pathKey = node.urlPath.replace(/\/+$/, '');
      const upKey = pathKey.split('/').slice(0, -1).join('/');
      node = CATEGORIES.find((c) => c.urlPath.replace(/\/+$/, '') === upKey) || null;
      guard += 1;
    }
    return { node: null, list: ALL_PRODUCTS.slice(0, PER_PAGE) };
  }, [parent]);

  return (
    <>
      <div className="container">
        <Breadcrumb items={[
          ...(parent ? [{ label: parent.title, to: parent.urlPath }] : []),
          { label: cat.title },
        ]} />
        <Reveal>
          <div className="section-head">
            <h1 style={{ fontSize: 24 }}>{cat.title}</h1>
            <div className="spacer" />
            <span className="eyebrow">{cat.resultCountText}</span>
          </div>
        </Reveal>
      </div>

      <div className="container section-tight">
        <div className="listing">
          <FilterPanel
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            priceRange={priceRange}
            onPrice={setPriceRange}
            availability={availability}
            onAvailability={setAvailability}
            minRating={minRating}
            onRating={(r) => setMinRating(r === minRating ? 0 : r)}
            activeSlug={cat.slug}
            categoryLinks={siblings.map((s) => ({ slug: s.slug, title: s.title, to: s.urlPath }))}
            onReset={() => { setPriceRange([null, null]); setAvailability(false); setMinRating(0); }}
          />

          <div>
            <SortBar
              count={slice.length}
              total={total}
              sort={sort}
              onSort={setSort}
              onOpenFilters={() => setFiltersOpen(true)}
            >
              <div className="chips" style={{ display: 'none' }}>
                {SORT_OPTIONS.slice(0, 3).map((o) => <span className="chip" key={o.id}>{o.label}</span>)}
              </div>
            </SortBar>

            {total === 0 ? (
              <div className="listing-fallback">
                <div className="listing-empty">
                  <EmptyState text={`این دسته در حال حاضر کالای فهرست‌شده ندارد. نزدیک‌ترین محصولات موجود${fallback.node ? ` از «${fallback.node.title}»` : ''} در ادامه آمده است.`} />
                  <div className="listing-empty-actions">
                    {fallback.node ? (
                      <Link className="btn btn-primary" to={fallback.node.urlPath}>مشاهده {fallback.node.title}</Link>
                    ) : null}
                    <Link className="btn btn-ghost" to="/shop">همه محصولات</Link>
                    <a className="btn btn-ghost" href={SITE.phoneHref}>تماس با کارشناس</a>
                  </div>
                </div>
                <ProductGrid products={fallback.list} cols={3} />
              </div>
            ) : (
              <ProductGrid products={slice} cols={3} />
            )}
            {total > 0 ? (
              <Pager page={page} pages={pages} onChange={(p) => { setPage(p); window.scrollTo({ top: 120, behavior: 'smooth' }); }} />
            ) : null}

            {siblings.length > 0 ? (
              <div style={{ marginTop: 32 }}>
                <h2 style={{ fontSize: 16, marginBottom: 12 }}>زیر‌دسته‌های {cat.title}</h2>
                <div className="chips">
                  {siblings.map((s) => (
                    <Link className="chip" key={s.slug} to={s.urlPath}>
                      {s.title} ({s.totalProducts.toLocaleString('fa-IR')})
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {cat.description ? (
        <section className="section section-alt">
          <div className="container">
            <Reveal>
              <div className="prose prose-inner">
                <h2>{cat.title}</h2>
                {cat.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <ConsultationBand compact />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hub landing pages                                                   */
/* ------------------------------------------------------------------ */
export function HubPage() {
  const params = useParams();
  const loc = useLocation();
  /* The hub routes are plain paths (/cctv-camera, /burglar-alarm, …) while the
     reference also links hubs as /shop/<path>/; resolve against the pathname so
     both forms land on the right hub instead of an empty page. */
  const tail = (p) => String(p || '').replace(/[?#].*$/, '').replace(/\/+$/, '').split('/').filter(Boolean).pop();
  const key = params.slug || tail(loc.pathname);
  const hub = HUB_PAGES[key] || null;

  if (!hub) {
    return (
      <div className="container section">
        <EmptyState text="این صفحه در قالب موجود نیست." />
      </div>
    );
  }

  return (
    <>
      <PageHero image={hub.hero[0]} title={hub.title} subtitle={hub.titleEn} badge="امنیت دید" />

      {hub.tileGroups
        ? hub.tileGroups.map((g) => (
          <section className="section-tight" key={g.title} data-component="hub-tile-group">
            <div className="container">
              <Reveal><SectionHeading title={g.title} /></Reveal>
              <HubTiles tiles={g.tiles} bare />
            </div>
          </section>
        ))
        : <HubTiles tiles={hub.tiles} />}

      {hub.sections.map((s, i) => (
        <ProductSection
          key={s.slug + i}
          alt={i % 2 === 1}
          title={s.title}
          moreTo={s.to}
          products={productsOf(s.slug, 6)}
        />
      ))}

      {hub.essentials ? (
        <section className="section" data-component="hub-essentials">
          <div className="container">
            <Reveal><SectionHeading title="ملزومات دوربین مداربسته" /></Reveal>
            <div className="tile-rail" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {hub.essentials.map((e, i) => (
                <Reveal key={e.title} delay={i * 50}>
                  <Link className="cat-tile" to={e.to} style={{ minHeight: 120 }}>
                    <span className="t">{e.title}</span>
                    <span className="go">مشاهده</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ConsultationBand />
      <BrandMarquee brands={BRANDS.slice(0, 8)} />
      <FaqSection items={FAQ} />
      <SeoText title={hub.seoTitle} paragraphs={hub.seo} />

      <section className="section-tight">
        <div className="container" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/price-list">دانلود لیست قیمت</Link>
          <Link className="btn btn-ghost" to="/contact-us">تماس با کارشناسان</Link>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Brand pages                                                         */
/* ------------------------------------------------------------------ */
export function BrandPage() {
  const { slug } = useParams();
  const list = productsOfBrand(slug);
  const brand = list.length ? (BRANDS.find((b) => b.en.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug) || null) : null;
  const title = brand ? brand.title : slug.replace(/-/g, ' ');

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'برندها', to: '/brand' }, { label: title }]} />
      </div>
      <div className="container section-tight">
        <div className="section-head">
          <h1 style={{ fontSize: 24 }}>محصولات {title}</h1>
          <div className="spacer" />
          <Link className="more" to="/brand">همه برندها <ChevronLeft size={14} /></Link>
        </div>
        <ProductGrid products={list} cols={4} />
      </div>
      <ConsultationBand compact />
    </>
  );
}

export function BrandIndexPage() {
  const brands = allBrands();
  const merged = BRANDS.map((b) => ({ ...b, slug: b.en.toLowerCase().replace(/[^a-z0-9]+/g, '-'), count: (brands.find((x) => x.en === b.en) || {}).count || 0 }));
  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'برندها' }]} />
      </div>
      <div className="container section-tight">
        <div className="section-head"><h1 style={{ fontSize: 24 }}>برندها</h1></div>
        <div className="card-grid grid-4">
          {merged.map((b) => (
            <Link className="cat-tile" key={b.en} to={`/brand/${b.slug}`} style={{ minHeight: 150 }}>
              <img src={b.image} alt={b.title} style={{ maxHeight: 52 }} />
              <span className="t">{b.title}</span>
              <span className="c">{b.count.toLocaleString('fa-IR')} محصول</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Search                                                              */
/* ------------------------------------------------------------------ */
export function SearchPage() {
  const [sp] = useSearchParams();
  const q = sp.get('q') || '';
  const results = useMemo(() => searchProducts(q, 60), [q]);
  const [sort, setSort] = useState('latest');
  const sorted = useMemo(() => sortProducts(results, sort), [results, sort]);

  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'جست و جو' }]} />
      </div>
      <div className="container section-tight">
        <div className="section-head">
          <h1 style={{ fontSize: 22 }}>نتایج جست و جو برای «{q}»</h1>
          <div className="spacer" />
          <span className="eyebrow">{sorted.length.toLocaleString('fa-IR')} محصول</span>
        </div>
        <SortBar count={sorted.length} total={sorted.length} sort={sort} onSort={setSort} onOpenFilters={() => {}} />
        <ProductGrid products={sorted} cols={4} />
      </div>
    </>
  );
}
