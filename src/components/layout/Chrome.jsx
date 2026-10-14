import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ShoppingCart, User, Menu, X, Search, ChevronDown, Phone, ArrowUp,
  Instagram, Send, MapPin, Clock, Trash2,
} from 'lucide-react';
import { SITE, NAV, FOOTER_LINKS } from '../../data/site.js';
import { useCart } from '../../lib/cart.jsx';

/* ------------------------------------------------------------------ */
/* Notice bar                                                          */
/* ------------------------------------------------------------------ */
function NoticeBar() {
  return (
    <div className="notice-bar" data-component="notice-bar">
      <Link to="/solar-panel-mashhad" aria-label="تجهیزات انرژی خورشیدی و برق اضطراری">
        <img
          className="notify-desktop"
          src="/assets/images/notice-desktop.jpg"
          width="1920"
          height="74"
          alt="امنیت دید"
          loading="eager"
          decoding="async"
        />
        <img
          className="notify-mobile"
          src="/assets/images/notice-mobile.jpg"
          width="720"
          height="100"
          alt="امنیت دید — نسخه موبایل"
          loading="eager"
          decoding="async"
        />
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Menu icons — the exact glyphs the reference uses next to each        */
/* top-level title, captured by menu_sync.py                            */
/* ------------------------------------------------------------------ */
const FALLBACK_ICONS = {
  home: 'M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5',
};

function MenuIcon({ icon, title }) {
  if (!icon) {
    return (
      <span className="mi" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
             strokeLinecap="round" strokeLinejoin="round">
          <path d={FALLBACK_ICONS.home} />
        </svg>
      </span>
    );
  }
  if (icon.type === 'path') {
    return (
      <span className="mi" aria-hidden="true">
        <svg viewBox="0 0 576 512" fill="currentColor"><path d={icon.d} /></svg>
      </span>
    );
  }
  return (
    <span className="mi" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
           strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Cascading menu — one dropdown per top-level item, with a nested      */
/* flyout for groups that have children (same behaviour as the          */
/* reference header, not a wide mega panel).                            */
/* ------------------------------------------------------------------ */
function NavMenu({ item }) {
  if (!item.items || !item.items.length) return null;
  return (
    <div className="dropdown" role="menu">
      <ul className="dd-list">
        {item.items.map((group) => (
          <li key={group.title + group.to} className={group.items && group.items.length ? 'has-sub' : ''}>
            <Link to={group.to} className="dd-link">
              <span>{group.title}</span>
              {group.items && group.items.length ? (
                <svg className="dd-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="m14 7-5 5 5 5" />
                </svg>
              ) : null}
            </Link>
            {group.items && group.items.length ? (
              <ul className="dd-sub">
                {group.items.map((leaf) => (
                  <li key={leaf.title + leaf.to}>
                    <Link to={leaf.to}>{leaf.title}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */
export function Header({ onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [q, setQ] = useState('');
  const { count } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
    setQ('');
  };

  return (
    <>
      <NoticeBar />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} data-component="site-header">
        <div className="container header-main">
          <button
            type="button"
            className="icon-btn mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
            aria-expanded={menuOpen}
          >
            <Menu size={20} />
          </button>

          <Link className="logo" to="/" aria-label={SITE.brandFa}>
            <span className="fa">{SITE.brandFa}</span>
            <span className="en">{SITE.brandEn}</span>
          </Link>

          <form onSubmit={submit} style={{ flex: 1, maxWidth: 460, display: 'flex', gap: 8 }} role="search">
            <label className="visually-hidden" htmlFor="site-search">جست و جو</label>
            <input
              id="site-search"
              className="field"
              placeholder="جست و جو در محصولات…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" aria-label="جست و جو" style={{ minWidth: 48 }}>
              <Search size={16} />
            </button>
          </form>

          <div className="header-actions">
            <a className="header-phone" href={SITE.phoneHref}>
              <Phone size={18} />
              <span>
                <span className="lbl">مشاوره و خرید</span>
                <span className="num" style={{ display: 'block' }}>{SITE.phone}</span>
              </span>
            </a>
            <Link className="icon-btn" to="/account" aria-label="حساب کاربری"><User size={19} /></Link>
            <button type="button" className="icon-btn cart-button" onClick={onOpenCart} aria-label={`سبد خرید، ${count} کالا`}>
              <ShoppingCart size={19} />
              <span className="cart-count">{count.toLocaleString('fa-IR')}</span>
            </button>
          </div>
        </div>

        <nav className="main-nav" aria-label="منوی اصلی">
          <div className="container">
            {NAV.map((item) => (
              <div className="nav-item" key={item.title}>
                {item.to ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end={item.to === '/'}
                  >
                    <MenuIcon icon={item.icon} title={item.title} />
                    <span className="nav-text">{item.title}</span>
                    {item.items && item.items.length ? <ChevronDown size={13} className="chev" /> : null}
                  </NavLink>
                ) : null}
                <NavMenu item={item} />
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* mobile drawer */}
      <div className={`drawer-scrim ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside className={`drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen} aria-label="منوی موبایل">
        <div className="drawer-head">
          <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
            <span className="fa">{SITE.brandFa}</span>
            <span className="en">{SITE.brandEn}</span>
          </Link>
          <button type="button" className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="بستن منو"><X size={18} /></button>
        </div>
        <div className="drawer-body">
          {NAV.map((item) => {
            const hasSub = item.items && item.items.length;
            const isOpen = expanded === item.title;
            const sub = (item.items || []).flatMap((c) => (
              c.items && c.items.length ? [{ group: c.title, to: c.to }, ...c.items] : [c]
            ));
            return (
              <div className={`m-group ${isOpen ? 'expanded' : ''}`} key={item.title}>
                {hasSub ? (
                  <>
                    <button type="button" onClick={() => setExpanded(isOpen ? null : item.title)} aria-expanded={isOpen}>
                      <span>{item.title}</span>
                      <ChevronDown size={16} style={{ color: 'var(--primary)' }} />
                    </button>
                    <div className="m-sub">
                      <Link to={item.to}>مشاهده همه {item.title}</Link>
                      {sub.map((s) => (
                        s.group
                          ? <h4 key={s.group}>{s.group}</h4>
                          : <Link key={s.title} to={s.to}>{s.title}</Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.to} onClick={() => setMenuOpen(false)}>{item.title}</Link>
                )}
              </div>
            );
          })}
          <a className="btn btn-primary btn-block" style={{ marginTop: 18 }} href={SITE.phoneHref}>
            <Phone size={16} /> تماس با کارشناسان {SITE.phone}
          </a>
        </div>
      </aside>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Cart drawer                                                         */
/* ------------------------------------------------------------------ */
export function CartDrawer({ open, onClose }) {
  const { lines, remove, setQty, total, clear } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className={`drawer-scrim ${open ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="سبد خرید">
        <div className="drawer-head">
          <h2 style={{ fontSize: 15 }}>سبد خرید</h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="بستن سبد خرید"><X size={18} /></button>
        </div>
        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="cart-empty">سبد خرید شما خالی است.</div>
          ) : (
            <>
              {lines.map((l) => (
                <div className="cart-line" key={l.slug}>
                  <img src={l.image} alt="" />
                  <div style={{ flex: 1 }}>
                    <Link to={`/product/${l.slug}`} style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--n800)' }} onClick={onClose}>
                      {l.name}
                    </Link>
                    <div className="price" style={{ marginTop: 4 }}>
                      {l.priceValue ? `${l.priceValue.toLocaleString('en-US')} تومان` : 'تماس بگیرید'}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
                      <div className="qty">
                        <button type="button" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="کاهش">−</button>
                        <span className="val">{l.qty.toLocaleString('fa-IR')}</span>
                        <button type="button" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="افزایش">+</button>
                      </div>
                      <button type="button" className="btn btn-quiet btn-sm" onClick={() => remove(l.slug)}>
                        <Trash2 size={14} /> حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '18px 0 12px', fontSize: 14, fontWeight: 500 }}>
                <span>جمع کل</span>
                <span className="price price-lg">{total.toLocaleString('en-US')} تومان</span>
              </div>
              <Link className="btn btn-primary btn-block" to="/cart" onClick={onClose}>مشاهده سبد خرید</Link>
              <button type="button" className="btn btn-quiet btn-block" style={{ marginTop: 8 }} onClick={clear}>خالی کردن سبد</button>
              <p className="form-note" style={{ marginTop: 12 }}>
                پرداخت آنلاین در این نسخه فعال نیست؛ سفارش شما با تماس کارشناسان نهایی می‌شود.
              </p>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="site-footer" data-component="site-footer">
      <div className="container">
        <div className="top">
          <div className="brand-block">
            <span className="fa">{SITE.brandFa}</span>
            <span className="en" style={{ display: 'block' }}>{SITE.brandEn}</span>
            <p>{SITE.since} در ارائه راهکارهای نظارتی و تجهیزات حفاظتی در مشهد و خراسان رضوی.</p>
            <div className="socials" style={{ marginTop: 14 }}>
              <a href={SITE.instagram} aria-label="اینستاگرام" rel="noopener noreferrer"><Instagram size={17} /></a>
              <a href={SITE.telegram} aria-label="تلگرام" rel="noopener noreferrer"><Send size={17} /></a>
              <a href={SITE.whatsapp} aria-label="واتساپ" rel="noopener noreferrer"><Phone size={17} /></a>
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              {col.items.map((l) => <Link key={l.title} to={l.to}>{l.title}</Link>)}
            </div>
          ))}

          <div>
            <h4>اطلاعات تماس</h4>
            <div className="info-item" style={{ marginBottom: 12 }}>
              <span className="ic" style={{ background: 'rgba(255,255,255,.12)', color: '#fff' }}><MapPin size={16} /></span>
              <span>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,.72)' }}>دفتر مرکزی: {SITE.officeAddress}</p>
              </span>
            </div>
            <div className="info-item" style={{ marginBottom: 12 }}>
              <span className="ic" style={{ background: 'rgba(255,255,255,.12)', color: '#fff' }}><Clock size={16} /></span>
              <span><p style={{ fontSize: 12, color: 'rgba(255,255,255,.72)' }}>{SITE.hours}</p></span>
            </div>
            <a href={SITE.phoneHref} style={{ fontSize: 18, fontWeight: 700, color: '#fff', paddingTop: 6 }}>{SITE.phone}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© تمامی حقوق برای {SITE.brandFa} محفوظ است.</span>
          <div className="pay-badges">
            <span>پرداخت در محل</span>
            <span>کارت به کارت</span>
            <span>خرید اقساطی</span>
            <span>ضمانت اصالت کالا</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
export function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button type="button" className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="رفتن به بالا">
      <ArrowUp size={18} />
    </button>
  );
}
