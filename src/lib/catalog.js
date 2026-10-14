import rawProducts from '../data/products.json';
import rawCategories from '../data/categories.json';
import categoryProducts from '../data/category-products.json';
import rawDetails from '../data/product-details.json';
import rawSpecs from '../data/product-specs.json';

/** Real captured product copy from the reference catalogue. */
export const PRODUCT_DETAILS = rawDetails;

/** Make the captured HTML safe to inject and keep internal links in-site. */
const cleanHtml = (html) => (html || '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
  .replace(/href="https?:\/\/(?:www\.)?mahancctv\.com([^"]*)"/gi, 'href="$1"')
  .replace(/<img[^>]*>/gi, '')
  .trim();

export const productDetail = (slug) => {
  const d = rawDetails[slug];
  if (!d) return null;
  return {
    descriptionHtml: cleanHtml(d.descriptionHtml),
    shortHtml: cleanHtml(d.shortHtml),
    categories: d.categories || [],
  };
};

/**
 * Per-product blocks captured from the reference product page: the short
 * attribute rail, the "مشخصات کلی" spec groups, the visible price/stock line
 * and the gallery. Keyed by product slug.
 */
export const PRODUCT_SPECS = rawSpecs;

export const productSpec = (slug) => rawSpecs[slug] || null;

export const CATEGORIES = rawCategories;
export const ALL_PRODUCTS = rawProducts;

const norm = (p) => (p || '').replace(/\/+$/, '');

export const slugFromUrl = (url) => {
  if (!url) return '';
  const path = url.replace(/^https?:\/\/[^/]+/, '').replace(/\/+$/, '');
  const parts = path.split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
};

export const PRODUCTS = rawProducts.map((p, i) => {
  const slug = slugFromUrl(p.url) || `product-${i}`;
  return {
    id: `p${i}`,
    slug,
    name: p.name,
    url: p.url,
    price: p.price,
    priceValue: p.priceValue,
    image: p.imageLocal || p.image || '/assets/images/placeholder.svg',
    imageFull: p.imageFullLocal || p.imageLocal || p.image || '/assets/images/placeholder.svg',
    imageRemote: p.image,
    inStock: p.inStock !== false,
    sku: p.sku || null,
    ctaText: p.ctaText || null,
  };
});

const bySlug = new Map();
PRODUCTS.forEach((p) => { if (!bySlug.has(p.slug)) bySlug.set(p.slug, p); });

const byName = new Map();
CATEGORIES.forEach((c) => byName.set(c.slug, c));

export const CATEGORY_BY_SLUG = byName;

/**
 * Canonical form of a category address, so a link captured from the reference
 * (which is stored as `/shop/<group>/<sub>/<leaf>`) still resolves when the
 * router has already consumed the leading `/shop` segment, and vice versa.
 */
const canonPath = (p) => String(p || '')
  .replace(/^https?:\/\/[^/]+/i, '')
  .split(/[?#]/)[0]
  .replace(/\/+/g, '/')
  .replace(/^\/+|\/+$/g, '')
  .replace(/^shop\//i, '')
  .toLowerCase();

export const categoryByPath = (path) => {
  const n = canonPath(path);
  if (!n) return null;
  const hit = CATEGORIES.find((c) => canonPath(c.urlPath) === n);
  if (hit) return hit;
  // last-resort: the final segment is a known category slug
  const tail = n.split('/').filter(Boolean).pop();
  return (tail && CATEGORY_BY_SLUG.get(tail)) || null;
};

export const categoryBySlug = (slug) => CATEGORY_BY_SLUG.get(slug) || null;

const BRAND_KEYS = [
  ['کلارنت', 'Clarent'], ['کلارینت', 'Clarent'], ['تیتان', 'Titan'], ['کلاسیک', 'Classic'],
  ['وسترن دیجیتال', 'Western Digital'], ['هایک ویژن', 'Hikvision'], ['داهوا', 'Dahua'],
  ['مکسرون', 'Maxron'], ['اوکپ', 'OKEP'], ['برایتون', 'Briton'], ['تلتک', 'Teletek'],
  ['فایرایندکس', 'FireIndex'], ['فایر ایندکس', 'FireIndex'], ['پیناکل', 'Pinnacle'],
  ['یوگالینک', 'Yogalink'], ['صبا', 'Saba'], ['فالکن', 'Falcon'],
];

export const brandOf = (name) => {
  const n = name || '';
  if (/OSTCAM|XMEYEPLUS|XMEYE/i.test(n)) return { fa: 'ا استی کم', en: 'OSTCAM' };
  for (const [fa, en] of BRAND_KEYS) if (n.includes(fa)) return { fa, en };
  return null;
};

export const brandSlug = (en) => (en || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const productBySlug = (slug) => bySlug.get(slug) || null;

/** category slug -> ordered product slugs, as captured from the reference site. */
export const MEMBERS = categoryProducts;

const memberSet = (slug) => new Set(MEMBERS[slug] || []);

/** Category slugs that are the given category or one of its descendants. */
const subtree = (slug) => {
  const cat = CATEGORY_BY_SLUG.get(slug);
  if (!cat) return [];
  const wanted = norm(cat.urlPath);
  return CATEGORIES
    .filter((c) => {
      const p = norm(c.urlPath);
      return p === wanted || p.startsWith(wanted + '/');
    })
    .map((c) => c.slug);
};

/** Products belonging to a category, including its descendant categories. */
export const productsOf = (slug, limit) => {
  if (!CATEGORY_BY_SLUG.has(slug)) return [];
  const slugs = subtree(slug);
  const allowed = new Set();
  slugs.forEach((s) => memberSet(s).forEach((x) => allowed.add(x)));
  const out = PRODUCTS.filter((p) => allowed.has(p.slug));
  return limit ? out.slice(0, limit) : out;
};

export const formatToman = (v) => {
  if (v === null || v === undefined) return null;
  return Number(v).toLocaleString('en-US');
};

export const priceLabel = (p) => (p.priceValue ? `${formatToman(p.priceValue)} تومان` : p.price || null);

export const searchProducts = (q, limit = 40) => {
  const t = (q || '').trim().toLowerCase();
  if (!t) return [];
  return PRODUCTS.filter((p) => p.name.toLowerCase().includes(t)).slice(0, limit);
};

export const featuredProducts = (slugs, limit) => {
  const out = [];
  (slugs || []).forEach((s) => {
    const p = bySlug.get(s);
    if (p) out.push(p);
  });
  return out.slice(0, limit || out.length);
};

/** Products picked from a list of category slugs, deduplicated, in order. */
export const picks = (slugs, limit = 6) => {
  const out = [];
  const seen = new Set();
  (slugs || []).forEach((slug) => {
    (MEMBERS[slug] || []).forEach((s) => {
      if (seen.has(s)) return;
      const p = bySlug.get(s);
      if (!p) return;
      seen.add(s);
      out.push(p);
    });
  });
  return out.slice(0, limit);
};

export const bestSellers = (limit = 6) => picks([
  'network-equipment', 'cctv-network', 'analog-cctv', 'dvr', 'nvr', 'peripheral-equipment',
], limit);

export const latestCctv = (limit = 6) => picks(['cctv-network', 'nvr', 'analog-cctv', 'dvr'], limit);
export const latestAlarm = (limit = 6) => picks(['burglar-alarm', 'alarm-sensor', 'alarm-panel'], limit);
export const latestAccessories = (limit = 6) => picks(['peripheral-equipment', 'hard-disk', 'power-supply'], limit);
export const latestSolar = (limit = 6) => picks(['solar-energy', 'solar-panel', 'solar-power-package', 'solar-structure'], limit);
export const alarmPackages = (limit = 6) => picks(['burglar-alarm', 'alarm-panel'], limit).filter((p) => /پک|پکیج/.test(p.name)).slice(0, limit);

export const relatedTo = (product, limit = 6) => {
  if (!product) return [];
  const brand = brandOf(product.name);
  const out = [];
  const seen = new Set([product.slug]);
  PRODUCTS.forEach((p) => {
    if (out.length >= limit) return;
    if (seen.has(p.slug)) return;
    const b = brandOf(p.name);
    if (brand && b && b.en === brand.en) { seen.add(p.slug); out.push(p); }
  });
  if (out.length < limit) {
    PRODUCTS.forEach((p) => {
      if (out.length >= limit || seen.has(p.slug)) return;
      seen.add(p.slug); out.push(p);
    });
  }
  return out;
};

export const allBrands = () => {
  const map = new Map();
  PRODUCTS.forEach((p) => {
    const b = brandOf(p.name);
    if (b) map.set(b.en, (map.get(b.en) || 0) + 1);
  });
  return [...map.entries()].map(([en, count]) => ({ en, count }));
};

export const productsOfBrand = (en) => PRODUCTS.filter((p) => {
  const b = brandOf(p.name);
  return b && b.en.toLowerCase() === (en || '').toLowerCase();
});

export const CATEGORY_TREE = (() => {
  const groups = new Map();
  CATEGORIES.forEach((c) => {
    if (!groups.has(c.group)) groups.set(c.group, []);
    groups.get(c.group).push(c);
  });
  return [...groups.entries()].map(([group, items]) => ({ group, items }));
})();

export const SORT_OPTIONS = [
  { id: 'popularity', label: 'محبوبیت' },
  { id: 'rating', label: 'امتیاز' },
  { id: 'latest', label: 'جدیدترین' },
  { id: 'price-asc', label: 'ارزان ترین' },
  { id: 'price-desc', label: 'گران ترین' },
  { id: 'stock', label: 'موجودی' },
  { id: 'best', label: 'پرفروش ترین' },
  { id: 'soon', label: 'به زودی' },
];

export const sortProducts = (list, id) => {
  const arr = [...list];
  const pv = (p) => (p.priceValue == null ? Number.MAX_SAFE_INTEGER : p.priceValue);
  switch (id) {
    case 'price-asc': return arr.sort((a, b) => pv(a) - pv(b));
    case 'price-desc': return arr.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
    case 'stock': return arr.sort((a, b) => Number(b.inStock) - Number(a.inStock));
    case 'soon': return arr.sort((a, b) => Number(!!a.ctaText) - Number(!!b.ctaText));
    case 'latest': return arr.reverse();
    default: return arr;
  }
};
