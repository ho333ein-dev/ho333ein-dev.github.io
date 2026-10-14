import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, SlidersHorizontal } from 'lucide-react';
import { SmartImage, Carousel, EmptyState, Stars } from '../common/ui.jsx';
import { brandOf, priceLabel, formatToman, SORT_OPTIONS } from '../../lib/catalog.js';
import { useCart } from '../../lib/cart.jsx';

/**
 * @typedef {Object} ProductCardProps
 * @property {object} product
 * @property {boolean} [compact]
 */
export function ProductCard({ product, compact = false }) {
  const { add } = useCart();
  const brand = brandOf(product.name);
  const inStock = product.inStock !== false;
  const label = priceLabel(product);

  return (
    <article className="p-card" data-component="product-card" itemScope itemType="https://schema.org/Product">
      <Link to={`/product/${product.slug}`} className="p-media" aria-label={product.name}>
        <SmartImage src={product.image} alt={product.name} wrapClassName="media-inner" />
        {!inStock ? <span className="badge badge-out flag">ناموجود</span> : null}
        {inStock && product.ctaText ? <span className="badge badge-warm flag">{product.ctaText}</span> : null}
      </Link>

      <h3 className="p-title">
        <Link to={`/product/${product.slug}`} itemProp="name">{product.name}</Link>
      </h3>
      {brand && !compact ? <div style={{ fontSize: 11, color: 'var(--n400)' }}>برند: {brand.fa}</div> : null}

      <div className="p-foot">
        {label ? (
          <span className="price" itemProp="offers">{label}</span>
        ) : (
          <span className="badge badge-soft">تماس بگیرید</span>
        )}
        {inStock ? (
          <button
            type="button"
            className="icon-btn"
            style={{ width: 40, height: 40, background: 'var(--primary-soft)' }}
            aria-label={`افزودن به سبد خرید: ${product.name}`}
            onClick={() => add(product)}
          >
            <ShoppingCart size={16} />
          </button>
        ) : (
          <Link className="icon-btn" style={{ width: 40, height: 40, background: 'var(--n100)' }} to={`/product/${product.slug}`} aria-label={`مشاهده ${product.name}`}>
            <Eye size={16} />
          </Link>
        )}
      </div>

      <div className="p-quick">
        <Link className="btn btn-primary btn-sm btn-block" to={`/product/${product.slug}`}>
          <Eye size={14} />
          مشاهده محصول
        </Link>
      </div>
    </article>
  );
}

export function ProductRow({ products, rail = 'rail-6', ariaLabel }) {
  if (!products || products.length === 0) return <EmptyState />;
  return (
    <Carousel rail={rail} ariaLabel={ariaLabel}>
      {products.map((p) => (
        <div key={p.slug} role="listitem">
          <ProductCard product={p} />
        </div>
      ))}
    </Carousel>
  );
}

export function ProductGrid({ products, cols = 4 }) {
  if (!products || products.length === 0) return <EmptyState />;
  return (
    <div className={`card-grid grid-${cols}`} data-component="product-grid">
      {products.map((p) => <ProductCard key={p.slug} product={p} />)}
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function SortBar({ count, total, sort, onSort, onOpenFilters, children }) {
  return (
    <div className="listing-bar" data-component="listing-bar">
      <button type="button" className="btn btn-quiet btn-sm filter-toggle" onClick={onOpenFilters}>
        <SlidersHorizontal size={14} />
        فیلتر
      </button>
      <div className="count">
        نمایش {count ? count.toLocaleString('fa-IR') : '۰'} از {total.toLocaleString('fa-IR')} محصول
      </div>
      <div className="spacer" style={{ flex: 1 }} />
      {children}
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5 }}>
        <span style={{ color: 'var(--n600)', whiteSpace: 'nowrap' }}>مرتب سازی بر اساس</span>
        <select className="select" style={{ width: 160, minHeight: 40 }} value={sort} onChange={(e) => onSort(e.target.value)}>
          {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
        </select>
      </label>
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function FilterPanel({
  open, onClose, priceRange, onPrice, availability, onAvailability,
  minRating, onRating, categoryLinks = [], activeSlug, onReset,
}) {
  return (
    <aside className={`filter-panel ${open ? 'open' : ''}`} data-component="filter-panel" aria-label="فیلتر محصولات">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: 15 }}>فیلتر</h2>
        <button type="button" className="btn btn-quiet btn-sm" onClick={onClose}>بستن</button>
      </div>

      <div className="filter-group">
        <h3>محدوده قیمت (تومان)</h3>
        <div className="price-inputs">
          <input
            className="field" inputMode="numeric" placeholder="از"
            value={priceRange[0] ?? ''}
            onChange={(e) => onPrice([e.target.value === '' ? null : Number(e.target.value.replace(/\D/g, '')), priceRange[1]])}
          />
          <span style={{ color: 'var(--n400)' }}>—</span>
          <input
            className="field" inputMode="numeric" placeholder="تا"
            value={priceRange[1] ?? ''}
            onChange={(e) => onPrice([priceRange[0], e.target.value === '' ? null : Number(e.target.value.replace(/\D/g, ''))])}
          />
        </div>
      </div>

      <div className="filter-group">
        <h3>وضعیت کالا</h3>
        <label className="check">
          <input type="checkbox" checked={availability} onChange={(e) => onAvailability(e.target.checked)} />
          کالاهای موجود
        </label>
      </div>

      <div className="filter-group">
        <h3>امتیاز</h3>
        {[5, 4, 3, 2, 1].map((r) => (
          <label className="check" key={r}>
            <input type="radio" name="rating" checked={minRating === r} onChange={() => onRating(r)} />
            <Stars score={r} size={12} />
          </label>
        ))}
      </div>

      {categoryLinks.length > 0 ? (
        <div className="filter-group">
          <h3>دسته‌بندی‌ها</h3>
          <div style={{ display: 'grid', gap: 4, maxHeight: 260, overflowY: 'auto' }}>
            {categoryLinks.map((c) => (
              <Link
                key={c.slug}
                to={c.to}
                className="check"
                style={c.slug === activeSlug ? { color: 'var(--primary)', fontWeight: 500 } : undefined}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <button type="button" className="btn btn-quiet btn-block" style={{ marginTop: 16 }} onClick={onReset}>
        پاک کردن فیلترها
      </button>
    </aside>
  );
}

export const priceText = (v) => (v ? `${formatToman(v)} تومان` : '');
