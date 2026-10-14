import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Clock, Mail, Home, ShieldCheck, Trash2, LogIn, UserPlus, Search,
} from 'lucide-react';
import { Reveal, Breadcrumb, SectionHeading, EmptyState } from '../components/common/ui.jsx';
import { ConsultationBand, FaqSection, BrandMarquee, StatsRow, SeoText, PromoBanners } from '../components/home/home-sections.jsx';
import { SITE } from '../data/site.js';
import { ABOUT_TEXT, CONTACT_TEXT, INSTALLMENT_TEXT, DEALERSHIP_TEXT } from '../data/editorial.js';
import { FAQ } from '../data/home.js';
import { useCart } from '../lib/cart.jsx';

/* ------------------------------------------------------------------ */
function LeadForm({ title, note, submitLabel = 'ارسال درخواست', extra = false }) {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) { setErr('شماره تماس را به‌صورت کامل وارد کنید.'); return; }
    setErr('');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card" style={{ textAlign: 'center' }}>
        <ShieldCheck size={34} style={{ color: 'var(--success)', margin: '0 auto 10px' }} />
        <h3 style={{ fontSize: 16 }}>درخواست شما ثبت شد</h3>
        <p style={{ fontSize: 12.5, color: 'var(--n600)', marginTop: 6 }}>
          کارشناسان {SITE.brandFa} در اولین فرصت با شما تماس می‌گیرند.
        </p>
        <p className="form-note" style={{ marginTop: 10 }}>این فرم نمایشی است و پیام واقعی ارسال نمی‌کند.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <h3 style={{ fontSize: 16, marginBottom: 14 }}>{title}</h3>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="lf-name">نام و نام خانوادگی</label>
          <input id="lf-name" className="field" />
        </div>
        <div className="form-field">
          <label htmlFor="lf-phone">شماره تماس *</label>
          <input
            id="lf-phone"
            className="field"
            inputMode="tel"
            dir="ltr"
            placeholder="09xxxxxxxxx"
            value={phone}
            aria-invalid={!!err}
            onChange={(e) => setPhone(e.target.value)}
          />
          {err ? <span className="helper">{err}</span> : null}
        </div>
      </div>
      {extra ? (
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="lf-city">شهر</label>
            <input id="lf-city" className="field" />
          </div>
          <div className="form-field">
            <label htmlFor="lf-subject">موضوع</label>
            <select id="lf-subject" className="select">
              <option>خرید اقساطی</option>
              <option>درخواست نمایندگی</option>
              <option>مشاوره فنی</option>
            </select>
          </div>
        </div>
      ) : null}
      <div className="form-field">
        <label htmlFor="lf-msg">توضیحات</label>
        <textarea id="lf-msg" className="field" rows={4} />
      </div>
      <button type="submit" className="btn btn-primary btn-block">{submitLabel}</button>
      {note ? <p className="form-note" style={{ marginTop: 10 }}>{note}</p> : null}
    </form>
  );
}

/* ------------------------------------------------------------------ */
export function AboutPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'درباره ما' }]} />
      </div>
      <div className="container section-tight">
        <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
          <img src="/assets/images/hub-titan.jpg" alt="" />
          <div className="overlay">
            <div className="container">
              <h1 style={{ fontSize: 26 }}>{ABOUT_TEXT.title}</h1>
            </div>
          </div>
        </div>
        <Reveal>
          <div className="prose prose-inner">
            {ABOUT_TEXT.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
      </div>

      <StatsRow items={[
        { n: '+۱۵', l: 'سال تجربه' },
        { n: '+۵۰۰', l: 'پروژه اجراشده' },
        { n: '+۱۹۴', l: 'مدل دوربین مداربسته' },
        { n: '۷ روز', l: 'پاسخگویی هفتگی' },
      ]} />

      <ConsultationBand />
      <BrandMarquee />
      <PromoBanners />
    </>
  );
}

/* ------------------------------------------------------------------ */
export function ContactPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb items={[{ label: 'تماس با ما' }]} />
      </div>
      <div className="container section-tight">
        <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
          <img src="/assets/images/cat-cctv.jpg" alt="" />
          <div className="overlay">
            <div className="container">
              <h1 style={{ fontSize: 26 }}>{CONTACT_TEXT.title}</h1>
              <p>{CONTACT_TEXT.lead}</p>
            </div>
          </div>
        </div>

        <div className="two-col">
          <Reveal>
            <div className="info-list">
              <div className="info-item">
                <span className="ic"><MapPin size={17} /></span>
                <span><h4>دفتر مرکزی</h4><p>{SITE.officeAddress}</p></span>
              </div>
              <div className="info-item">
                <span className="ic"><Home size={17} /></span>
                <span><h4>فروشگاه</h4><p>{SITE.shopAddress}</p></span>
              </div>
              <div className="info-item">
                <span className="ic"><Phone size={17} /></span>
                <span>
                  <h4>شماره تماس</h4>
                  <p><a href={SITE.phoneHref} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 16 }}>{SITE.phone}</a></p>
                </span>
              </div>
              <div className="info-item">
                <span className="ic"><Mail size={17} /></span>
                <span><h4>ایمیل</h4><p dir="ltr" style={{ textAlign: 'right' }}>{SITE.email}</p></span>
              </div>
              <div className="info-item">
                <span className="ic"><Clock size={17} /></span>
                <span><h4>ساعات کاری</h4><p>{SITE.hours}</p></span>
              </div>
              <div className="map-links">
                <a className="btn btn-ghost btn-sm" href={SITE.mapGoogle} rel="noopener noreferrer">مسیریابی با گوگل مپ</a>
                <a className="btn btn-ghost btn-sm" href={SITE.mapNeshan} rel="noopener noreferrer">مسیریابی با نشان</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <LeadForm title={CONTACT_TEXT.formTitle} note={CONTACT_TEXT.formNote} submitLabel="درخواست تماس" extra />
          </Reveal>
        </div>
      </div>

      <FaqSection items={FAQ.slice(0, 4)} title="پرسش‌های پرتکرار مشتریان" />
      <ConsultationBand title={CONTACT_TEXT.ctaTitle} />
    </>
  );
}

/* ------------------------------------------------------------------ */
export function InstallmentPage() {
  return (
    <>
      <div className="container"><Breadcrumb items={[{ label: 'خرید اقساطی' }]} /></div>
      <div className="container section-tight">
        <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
          <img src={INSTALLMENT_TEXT.image} alt="" />
          <div className="overlay">
            <div className="container">
              <h1 style={{ fontSize: 26 }}>{INSTALLMENT_TEXT.title}</h1>
              <p>{INSTALLMENT_TEXT.lead}</p>
            </div>
          </div>
        </div>
        <div className="two-col">
          <Reveal>
            <div className="prose">
              <h2>چگونه خرید اقساطی انجام می‌شود؟</h2>
              <p>
                پس از انتخاب کالا و ثبت درخواست، کارشناسان ما شرایط اقساط، تعداد قسط و مدارک موردنیاز را اعلام می‌کنند.
                تسویه اقساط از طریق سرویس‌های پرداخت اقساطی انجام می‌شود.
              </p>
              <ul>
                <li>انتخاب محصول و ثبت درخواست خرید اقساطی</li>
                <li>بررسی اعتبار و تایید شرایط توسط کارشناس</li>
                <li>تسویه قسط اول و ارسال کالا</li>
              </ul>
              <p className="form-note">
                پرداخت آنلاین و درگاه اقساط در این نسخه نمایشی فعال نیست؛ فرآیند از طریق تماس با کارشناسان نهایی می‌شود.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <LeadForm title="فرم درخواست خرید اقساطی" submitLabel="ثبت درخواست اقساطی" extra />
          </Reveal>
        </div>
      </div>
      <ConsultationBand />
    </>
  );
}

/* ------------------------------------------------------------------ */
export function DealershipPage() {
  return (
    <>
      <div className="container"><Breadcrumb items={[{ label: 'درخواست نمایندگی' }]} /></div>
      <div className="container section-tight">
        <div className="page-hero" style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
          <img src={DEALERSHIP_TEXT.image} alt="" />
          <div className="overlay">
            <div className="container">
              <h1 style={{ fontSize: 26 }}>{DEALERSHIP_TEXT.title}</h1>
              <p>{DEALERSHIP_TEXT.lead}</p>
            </div>
          </div>
        </div>
        <div className="two-col">
          <Reveal>
            <div className="prose">
              <h2>مزایای همکاری با {SITE.brandFa}</h2>
              <ul>
                <li>قیمت‌گذاری ویژه همکاران و شرایط خرید عمده</li>
                <li>پشتیبانی فنی و آموزش محصولات</li>
                <li>تنوع محصولات در دسته‌های نظارتی، دزدگیر، اعلام حریق، شبکه و خورشیدی</li>
                <li>گارانتی شرکتی و خدمات پس از فروش</li>
              </ul>
              <p>
                برای شروع همکاری، فرم مقابل را تکمیل کنید. کارشناسان ما شرایط نمایندگی، حداقل سفارش و محدوده فعالیت
                را با شما بررسی می‌کنند.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <LeadForm title="فرم درخواست نمایندگی" submitLabel="ارسال درخواست نمایندگی" extra />
          </Reveal>
        </div>
      </div>
      <ConsultationBand />
    </>
  );
}

/* ------------------------------------------------------------------ */
export function CartPage() {
  const { lines, remove, setQty, total, clear } = useCart();

  return (
    <>
      <div className="container"><Breadcrumb items={[{ label: 'سبد خرید' }]} /></div>
      <div className="container section-tight">
        <div className="section-head"><h1 style={{ fontSize: 22 }}>سبد خرید</h1><div className="spacer" /><span className="eyebrow">{lines.length.toLocaleString('fa-IR')} قلم کالا</span></div>

        {lines.length === 0 ? (
          <div>
            <EmptyState text="سبد خرید شما خالی است." />
            <div className="center-narrow" style={{ marginTop: 20 }}>
              <Link className="btn btn-primary" to="/shop/protection-and-security-systems">شروع خرید</Link>
            </div>
          </div>
        ) : (
          <div className="two-col" style={{ gridTemplateColumns: '1fr 360px' }}>
            <div>
              {lines.map((l) => (
                <div className="cart-line" key={l.slug} style={{ alignItems: 'center' }}>
                  <img src={l.image} alt="" />
                  <div style={{ flex: 1 }}>
                    <Link to={`/product/${l.slug}`} style={{ fontWeight: 500, color: 'var(--n800)' }}>{l.name}</Link>
                    <div className="price" style={{ marginTop: 4 }}>
                      {l.priceValue ? `${l.priceValue.toLocaleString('en-US')} تومان` : 'تماس بگیرید'}
                    </div>
                  </div>
                  <div className="qty">
                    <button type="button" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="کاهش">−</button>
                    <span className="val">{l.qty.toLocaleString('fa-IR')}</span>
                    <button type="button" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="افزایش">+</button>
                  </div>
                  <button type="button" className="icon-btn" onClick={() => remove(l.slug)} aria-label="حذف"><Trash2 size={16} /></button>
                </div>
              ))}
              <button type="button" className="btn btn-quiet btn-sm" style={{ marginTop: 16 }} onClick={clear}>خالی کردن سبد</button>
            </div>

            <aside className="form-card">
              <h3 style={{ fontSize: 15, marginBottom: 12 }}>جمع سفارش</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>جمع کالاها</span><span className="price">{total.toLocaleString('en-US')} تومان</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>هزینه ارسال</span><span>پس از تایید سفارش</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--n200)', fontWeight: 700 }}>
                <span>مبلغ قابل پرداخت</span><span className="price price-lg">{total.toLocaleString('en-US')} تومان</span>
              </div>
              <a className="btn btn-primary btn-block" style={{ marginTop: 16 }} href={SITE.phoneHref}>نهایی کردن سفارش با تماس</a>
              <p className="form-note" style={{ marginTop: 12 }}>
                در این نسخه، پرداخت آنلاین و درگاه بانکی فعال نیست. سفارش شما پس از تایید موجودی و هزینه ارسال،
                تلفنی نهایی می‌شود.
              </p>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
export function AccountPage() {
  const [mode, setMode] = useState('login');
  return (
    <>
      <div className="container"><Breadcrumb items={[{ label: 'حساب کاربری' }]} /></div>
      <div className="container section-tight">
        <div className="center-narrow">
          <div className="chips" style={{ justifyContent: 'center', marginBottom: 20 }}>
            <button type="button" className={`chip ${mode === 'login' ? 'on' : ''}`} onClick={() => setMode('login')}><LogIn size={14} /> ورود</button>
            <button type="button" className={`chip ${mode === 'register' ? 'on' : ''}`} onClick={() => setMode('register')}><UserPlus size={14} /> ثبت‌نام</button>
          </div>

          <div className="form-card" style={{ textAlign: 'right' }}>
            <h3 style={{ fontSize: 16, marginBottom: 16 }}>{mode === 'login' ? 'ورود به حساب کاربری' : 'ساخت حساب کاربری جدید'}</h3>
            <div className="form-field">
              <label htmlFor="ac-phone">شماره موبایل</label>
              <input id="ac-phone" className="field" dir="ltr" inputMode="tel" placeholder="09xxxxxxxxx" />
            </div>
            <div className="form-field">
              <label htmlFor="ac-pass">رمز عبور</label>
              <input id="ac-pass" className="field" type="password" dir="ltr" />
            </div>
            {mode === 'register' ? (
              <div className="form-field">
                <label htmlFor="ac-name">نام و نام خانوادگی</label>
                <input id="ac-name" className="field" />
              </div>
            ) : null}
            <button type="button" className="btn btn-primary btn-block">{mode === 'login' ? 'ورود' : 'ثبت‌نام'}</button>
            <p className="form-note" style={{ marginTop: 12 }}>
              سیستم حساب کاربری در نسخه نمایشی قالب فعال نیست؛ این صفحه فقط ساختار رابط کاربری را نشان می‌دهد.
            </p>
          </div>

          <div style={{ marginTop: 20, fontSize: 12.5 }}>
            <Link to="/search?q=دوربین" style={{ color: 'var(--primary)' }}><Search size={13} /> جست و جو در محصولات</Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
export function NotFoundPage() {
  return (
    <>
      <div className="container section">
        <div className="center-narrow">
          <div style={{ fontSize: 64, fontWeight: 700, color: 'var(--primary)' }}>۴۰۴</div>
          <h1 style={{ fontSize: 24, marginBottom: 10 }}>صفحه مورد نظر پیدا نشد</h1>
          <p style={{ fontSize: 13.5, color: 'var(--n600)' }}>
            ممکن است آدرس تغییر کرده باشد یا این صفحه در قالب نمایشی موجود نباشد.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 22, flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/">بازگشت به صفحه نخست</Link>
            <Link className="btn btn-ghost" to="/shop/protection-and-security-systems">مشاهده محصولات</Link>
            <Link className="btn btn-quiet" to="/contact-us">تماس با ما</Link>
          </div>
        </div>
      </div>

      <div className="container section-tight">
        <SectionHeading title="دسته‌بندی‌های پرطرفدار" />
        <div className="chips">
          <Link className="chip" to="/cctv-camera">دوربین مداربسته</Link>
          <Link className="chip" to="/burglar-alarm">دزدگیر</Link>
          <Link className="chip" to="/fire-alarm-system">اعلام حریق</Link>
          <Link className="chip" to="/shop/protection-and-security-systems/network">شبکه</Link>
          <Link className="chip" to="/solar-panel-mashhad">تجهیزات خورشیدی</Link>
          <Link className="chip" to="/software">دانلود نرم افزار</Link>
          <Link className="chip" to="/price-list">لیست قیمت</Link>
        </div>
      </div>
    </>
  );
}
