import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Phone, Share2, Check, Truck, ChevronLeft } from 'lucide-react';
import { Reveal, Breadcrumb, SectionHeading, Stars, EmptyState } from '../components/common/ui.jsx';
import { ProductGrid } from '../components/products/products.jsx';
import {
  productBySlug, relatedTo, brandOf, CATEGORY_BY_SLUG, MEMBERS, productDetail, productSpec,
} from '../lib/catalog.js';
import { ConsultationBand } from '../components/home/home-sections.jsx';
import { useCart } from '../lib/cart.jsx';
import { SITE } from '../data/site.js';

const TABS = [
  { id: 'desc', label: 'توضیحات' },
  { id: 'spec', label: 'مشخصات کلی' },
  { id: 'reviews', label: 'نظرات کاربران' },
  { id: 'qa', label: 'سوالات کاربران' },
  { id: 'review-tab', label: 'نقد و بررسی' },
];

/* Real captured content for the reference product that was fully documented. */
const DETAILED = {
  'clarent-mb65400kp-wah-if-bullet-cctv-camera': {
    attrs: [
      'نوع دوربین : بولت', 'نوع دید در شب : وارم لایت', 'متراژ دید در شب : 30M',
      'داشتن میکروفن : دارد', 'وضوح تصویر : 5MP', 'پارامتر هوشمند: تشخیص حرکت',
    ],
    body: [
      { h: 'وضوح تصویر 5 مگاپیکسل؛ جزئیات در دستان شما', p: 'این دوربین از یک سنسور پیشرفته با رزولوشن 2880*1620 بهره می‌برد. خروجی ۵ مگاپیکسل به این معناست که می‌توانید روی جزئیات حساسی مثل پلاک خودروها یا چهره افراد در فواصل دورتر با اطمینان بیشتری حساب کنید. نرخ فریم ۳۰ فریم در ثانیه در برخی تنظیمات باعث می‌شود حتی حرکات سریع به‌صورت کاملاً شفاف و بدون تاری ثبت شوند.' },
      { h: 'دید در شب وارم لایت؛ پایان تصاویر سیاه و سفید', p: 'تکنولوژی وارم لایت در این مدل با استفاده از نور مرئی گرم، محیط را در شب روشن کرده و اجازه می‌دهد سنسور دوربین تصاویر را به‌صورت تمام رنگی ثبت کند. با برد ۳۰ متری این قابلیت، محوطه پارکینگ یا حیاط شما در تاریک‌ترین ساعات شب نیز دقیقاً همان‌طور دیده می‌شود که در روز دیده می‌شد.' },
      { h: 'پارامتر هوشمند تشخیص حرکت', p: 'این دوربین به‌صورت هوشمند تغییرات پیکسلی را در کادر تصویر آنالیز کرده و در صورت مشاهده هرگونه حرکت مشکوک می‌تواند به دستگاه ضبط (NVR) فرمان شروع ضبط یا ارسال هشدار بدهد. این ویژگی باعث می‌شود فضای هارددیسک بی‌هوده اشغال نشود و تنها لحظات حساس ثبت گردند.' },
      { h: 'میکروفون داخلی؛ صدای محیط را از دست ندهید', p: 'دوربین به یک میکروفون داخلی قدرتمند مجهز شده است؛ یعنی هم‌زمان با دیدن تصویر رنگی می‌توانید صدای محیط را نیز با وضوح بالا بشنوید و ضبط کنید. وجود صدا در کنار تصویر، اعتبار مدارک امنیتی شما را در مواقع بروز حادثه دوچندان می‌کند.' },
      { h: 'لنز ۳.۶ میلی‌متری و بدنه فلزی ضدآب', p: 'استفاده از لنز ۳.۶ میلی‌متری در این مدل تعادل بی‌نظیری بین زاویه دید و عمق تصویر ایجاد کرده که برای محیط‌های باز بسیار مناسب است. بدنه فلزی با استاندارد IP67 مقاومت کامل در برابر باران‌های شدید، گرد و غبار و نور مستقیم خورشید را تضمین می‌کند.' },
    ],
    specs: [
      { group: 'دوربین', rows: [['لنز', '3.6mm'], ['محدوده IR', '30M'], ['WDR', 'DWDR'], ['کاهنده نویز دیجیتال', '3DDNR']] },
      { group: 'تصویر', rows: [['وضوح تصویر', '5MP (2880*1620)'], ['فریم ریت', '25/30fps']] },
      { group: 'پورت های رابط', rows: [['میکروفون داخلی', 'دارد']] },
      { group: 'عمومی', rows: [['درجه حفاظت', 'IP67'], ['نوع دوربین', 'بولت'], ['جنس بدنه', 'فلز']] },
    ],
  },
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  const [tab, setTab] = useState('desc');
  const [qty, setQty] = useState(1);
  const [shot, setShot] = useState(0);
  const { add } = useCart();

  useEffect(() => { setTab('desc'); setQty(1); setShot(0); window.scrollTo({ top: 0 }); }, [slug]);

  const related = useMemo(() => relatedTo(product, 6), [product]);

  if (!product) {
    return (
      <div className="container section">
        <Breadcrumb items={[{ label: 'محصول یافت نشد' }]} />
        <EmptyState text="این محصول در قالب موجود نیست." />
        <div className="center-narrow" style={{ marginTop: 20 }}>
          <Link className="btn btn-primary" to="/">بازگشت به صفحه نخست</Link>
        </div>
      </div>
    );
  }

  const detail = DETAILED[slug] || null;
  /* Real Persian copy captured from the reference catalogue for this product. */
  const captured = productDetail(slug) || null;
  /* Blocks read back off the reference product page itself (attribute rail,
     "مشخصات کلی" groups, visible price/stock). */
  const spec = productSpec(slug) || null;
  const hasRealCopy = Boolean(captured && captured.descriptionHtml && captured.descriptionHtml.replace(/<[^>]*>/g, '').trim().length > 80);
  const shortIsList = Boolean(captured && /<ul|<ol/i.test(captured.shortHtml || ''));
  const shortText = captured ? (captured.shortHtml || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '';

  /* The reference product page's own spec groups, when it publishes any. */
  const specGroups = (detail && detail.specs) || (spec && spec.specs && spec.specs.length ? spec.specs : null);

  /* Attribute rail: the reference's short-description list is authoritative. */
  const attrList = useMemo(() => {
    if (spec && spec.attrs && spec.attrs.length) return spec.attrs.slice(0, 14);
    if (detail && detail.attrs) return detail.attrs;
    if (!captured) return [];
    const raw = captured.shortHtml || '';
    const items = Array.from(raw.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)).map((m) => m[1].replace(/<[^>]*>/g, '').trim());
    if (items.length) return items.filter(Boolean).slice(0, 10);
    const plain = shortText;
    return plain ? plain.split(/[؛؛]/).map((s) => s.trim()).filter(Boolean).slice(0, 10) : [];
  }, [spec, detail, captured, shortText]);
  const brand = brandOf(product.name);
  const inStock = product.inStock !== false && (spec ? spec.inStock !== false : true);
  /* de-duplicate: most products carry one image, mirrored under both keys */
  const gallery = Array.from(new Set([product.imageFull, product.image].filter(Boolean)));
  /* Visible price/stock read back off the reference product page. */
  const livePrice = product.priceValue || (spec && spec.priceValue) || null;
  const priceText = livePrice ? `${livePrice.toLocaleString('en-US')} تومان` : null;
  const inst = livePrice ? Math.round(livePrice / 4 / 1000) * 1000 : null;
  const categories = Object.keys(MEMBERS).filter((c) => (MEMBERS[c] || []).includes(product.slug)).slice(0, 4);
  /* latin part of the name — only when it actually reads as a model/brand,
     never a bare number such as the "102" in «پک کامل دزدگیر ۱۰۲ تیتان» */
  const titleEn = (() => {
    const latin = product.name.replace(/[\u0600-\u06FF\s]+/g, ' ').replace(/\s+/g, ' ').trim();
    return /[A-Za-z]{3,}/.test(latin) ? latin : '';
  })();

  return (
    <>
      <div className="container">
        <Breadcrumb items={[
          ...(categories[0] && CATEGORY_BY_SLUG.get(categories[0])
            ? [{ label: CATEGORY_BY_SLUG.get(categories[0]).title, to: CATEGORY_BY_SLUG.get(categories[0]).urlPath }]
            : []),
          { label: product.name },
        ]} />
      </div>

      <div className="container" data-component="product-detail">
        <div className="pd">
          {/* gallery */}
          <div className="pd-gallery">
            <div className="pd-main">
              <img src={gallery[shot]} alt={product.name} />
            </div>
            {gallery.length > 1 ? (
              <div className="pd-thumbs">
                {gallery.map((g, i) => (
                  <button key={g} type="button" className={i === shot ? 'on' : ''} onClick={() => setShot(i)} aria-label={`تصویر ${i + 1}`}>
                    <img src={g} alt="" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* details */}
          <div className="pd-side">
            <Reveal>
              <div>
                <h1 className="pd-title">{product.name}</h1>
                {titleEn ? <div className="pd-title-en">{titleEn}</div> : null}
                <div className="pd-meta" style={{ marginTop: 12 }}>
                  {brand ? <span>برند: <Link to={`/brand/${brand.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{brand.fa}</Link></span> : null}
                  {product.sku ? <span>شناسه محصول: {product.sku}</span> : null}
                  <span>
                    دسته:{' '}
                    {categories.slice(0, 2).map((c, i) => (
                      <React.Fragment key={c}>
                        {i > 0 ? ', ' : ''}
                        <Link to={CATEGORY_BY_SLUG.get(c).urlPath}>{CATEGORY_BY_SLUG.get(c).title}</Link>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </Reveal>

            {attrList.length ? (
              <Reveal>
                <div className="pd-attrs-wrap">
                  <div className="pd-attrs-title">ویژگی‌های کلیدی</div>
                  <ul className="pd-attrs">
                    {attrList.map((a) => <li key={a}><span>{a}</span></li>)}
                  </ul>
                </div>
              </Reveal>
            ) : null}

            <div className="pd-note">
              درخواست مرجوع کردن کالا در گروه دوربین‌های امنیتی و نظارتی با دلیل «انصراف از خرید» تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد و بیشتر از ۷ روز از خرید کالا نگذشته باشد. (در صورت پلمپ بودن، کالا نباید باز شده باشد).
            </div>

            <div className="pd-buy">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {inStock
                  ? <span className="badge badge-stock"><Check size={12} /> موجود است</span>
                  : <span className="badge badge-out">ناموجود</span>}
                <span className="badge badge-soft" style={{ background: 'var(--n100)', color: 'var(--n600)' }}>
                  <Truck size={12} /> آماده ارسال
                </span>
              </div>

              {priceText ? <div className="price price-lg">{priceText}</div> : <div className="badge badge-warm">برای قیمت تماس بگیرید</div>}
              {inStock ? (
                <div style={{ fontSize: 12, color: 'var(--n600)' }}>
                  {spec && spec.stockText ? spec.stockText : 'موجود در انبار — پیش از ارسال تست می‌شود'}
                </div>
              ) : null}

              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div className="qty">
                  <button type="button" onClick={() => setQty((v) => Math.max(1, v - 1))} aria-label="کاهش تعداد">−</button>
                  <span className="val">{qty.toLocaleString('fa-IR')}</span>
                  <button type="button" onClick={() => setQty((v) => v + 1)} aria-label="افزایش تعداد">+</button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  disabled={!inStock}
                  onClick={() => add(product, qty)}
                >
                  <ShoppingCart size={16} />
                  افزودن به سبد خرید
                </button>
              </div>

              {inst ? (
                <div className="installment">
                  هر قسط با اسنپ‌پی: <b>{inst.toLocaleString('en-US')} تومان</b>
                  <div style={{ marginTop: 4, color: 'var(--n600)' }}>۴ قسط ماهانه. بدون سود، چک و ضامن.</div>
                </div>
              ) : null}

              <div className="contact-btns">
                <a className="contact-btn" href={SITE.bale} rel="noopener noreferrer">
                  <Phone size={15} /> ارتباط با فروش
                </a>
                <a className="contact-btn wa" href={SITE.whatsapp} rel="noopener noreferrer">
                  <Share2 size={15} /> واتساپ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div className="container section">
        <div className="tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`tab ${tab === t.id ? 'on' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {tab === 'desc' ? (
            detail ? (
              <div className="prose prose-inner">
                <h3>{product.name}</h3>
                <p>{brand ? brand.fa : ''} {product.name} یکی از گزینه‌های موجود در دسته تجهیزات نظارتی {SITE.brandFa} است. پیش از خرید، مشخصات فنی و شرایط نصب محل خود را با کارشناسان ما بررسی کنید.</p>
                {detail.body.map((b) => (
                  <React.Fragment key={b.h}>
                    <h4>{b.h}</h4>
                    <p>{b.p}</p>
                  </React.Fragment>
                ))}
                <h4>ویژگی‌های برجسته در یک نگاه</h4>
                <ul>
                  <li><b>کیفیت تصویر:</b> ۵ مگاپیکسل (رزولوشن بالا)</li>
                  <li><b>دید در شب:</b> وارم لایت ۳۰ متری (رنگی در تاریکی)</li>
                  <li><b>قابلیت هوشمند:</b> تشخیص حرکت (Motion Detection)</li>
                  <li><b>امکانات صوتی:</b> میکروفون داخلی با حساسیت بالا</li>
                  <li><b>مقاومت:</b> بدنه تمام فلز با استاندارد IP67</li>
                </ul>
              </div>
            ) : hasRealCopy ? (
              <div className="prose prose-inner">
                <div
                  className="pd-rich"
                  dangerouslySetInnerHTML={{ __html: captured.descriptionHtml }}
                />
                <div className="pd-copy-note">
                  توضیحات بالا متن کامل ثبت‌شده برای این کالا در {SITE.brandFa} است. برای دریافت دیتاشیت رسمی یا بررسی
                  سازگاری با تجهیزات موجود شما، با کارشناسان ما به شماره{' '}
                  <a href={SITE.phoneHref} style={{ color: 'var(--primary)' }}>{SITE.phone}</a> تماس بگیرید.
                </div>
              </div>
            ) : (
              <div className="prose prose-inner">
                <h3>{product.name}</h3>
                <p>
                  این محصول در دسته تجهیزات حفاظتی و نظارتی {SITE.brandFa} عرضه می‌شود
                  {brand ? ` و متعلق به برند ${brand.fa} است` : ''}.
                  {product.priceValue ? ' قیمت اعلام‌شده به‌روز است و پیش از ثبت سفارش، موجودی انبار کنترل می‌شود.' : ' برای اطلاع از قیمت و موجودی، با کارشناسان فروش تماس بگیرید.'}
                </p>
                <p>
                  انتخاب درست تجهیزات نظارتی به محل نصب، فاصله سوژه، شرایط نوری شب و مدت نگهداری تصاویر بستگی دارد.
                  برای دریافت پیشنهاد متناسب با پروژه خود، مشخصات محل و تعداد نقاط موردنظر را با کارشناسان ما مطرح کنید.
                </p>
                <p>
                  متن کامل توضیحات و جدول مشخصات فنی این محصول در نسخه نمایشی قالب بارگذاری نشده است؛ برای دریافت
                  دیتاشیت رسمی با شماره <a href={SITE.phoneHref} style={{ color: 'var(--primary)' }}>{SITE.phone}</a> تماس بگیرید.
                </p>
              </div>
            )
          ) : null}

          {tab === 'spec' ? (
            specGroups ? (
              <div className="spec-fallback">
                <div className="table-scroll">
                  <table className="data-table spec-table">
                    <tbody>
                      {specGroups.map((g, gi) => (
                        <React.Fragment key={`${g.group}-${gi}`}>
                          <tr><td className="spec-group" colSpan={2}>{g.group}</td></tr>
                          {g.rows.map((r) => (
                            <tr key={`${r[0]}-${r[1]}`}><td>{r[0]}</td><td>{r[1]}</td></tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                {shortText && !shortIsList ? (
                  <div className="spec-contents">
                    <h4>توضیح کوتاه</h4>
                    <p style={{ fontSize: 13, lineHeight: 2, color: 'var(--n700)' }}>{shortText}</p>
                  </div>
                ) : null}
                <div className="pd-copy-note">
                  مشخصات بالا همان جدول «مشخصات کلی» ثبت‌شده برای این کالا است. برای دریافت دیتاشیت رسمی یا
                  بررسی سازگاری با تجهیزات موجود شما، با شماره{' '}
                  <a href={SITE.phoneHref} style={{ color: 'var(--primary)' }}>{SITE.phone}</a> تماس بگیرید.
                </div>
              </div>
            ) : (
              <div className="spec-fallback">
                <div className="table-scroll">
                  <table className="data-table spec-table">
                    <tbody>
                      <tr><td>نام محصول</td><td>{product.name}</td></tr>
                      <tr><td>برند</td><td>{brand ? brand.fa : '—'}</td></tr>
                      <tr><td>وضعیت موجودی</td><td>{inStock ? 'موجود در انبار' : 'ناموجود'}</td></tr>
                      <tr><td>گارانتی</td><td>گارانتی شرکتی</td></tr>
                      <tr>
                        <td>دسته‌بندی</td>
                        <td>{categories.map((c) => (CATEGORY_BY_SLUG.get(c) || {}).title).filter(Boolean).join(' / ') || '—'}</td>
                      </tr>
                      {product.sku ? <tr><td>شناسه محصول</td><td>{product.sku}</td></tr> : null}
                    </tbody>
                  </table>
                </div>

                {shortText ? (
                  <div className="spec-contents">
                    <h4>{shortIsList ? 'محتویات بسته و اقلام همراه' : 'معرفی کوتاه'}</h4>
                    {shortIsList ? (
                      <div className="pd-rich" dangerouslySetInnerHTML={{ __html: captured.shortHtml }} />
                    ) : (
                      <p style={{ fontSize: 13, lineHeight: 2, color: 'var(--n700)' }}>{shortText}</p>
                    )}
                  </div>
                ) : null}

                <div className="pd-copy-note">
                  جدول مشخصات فنی کامل این کالا در قالب نمایشی بارگذاری نشده است؛ برای دریافت دیتاشیت رسمی با شماره{' '}
                  <a href={SITE.phoneHref} style={{ color: 'var(--primary)' }}>{SITE.phone}</a> تماس بگیرید.
                </div>
              </div>
            )
          ) : null}

          {tab === 'reviews' ? (
            <div className="review-summary">
              <div style={{ textAlign: 'center' }}>
                <div className="review-score">۰.۰</div>
                <Stars score={0} />
                <div style={{ fontSize: 12, color: 'var(--n600)', marginTop: 6 }}>بر اساس ۰ دیدگاه</div>
              </div>
              <div className="bars">
                {[5, 4, 3, 2, 1].map((r) => (
                  <div className="bar-row" key={r}>
                    <span>{r.toLocaleString('fa-IR')}</span>
                    <span className="bar"><i style={{ width: '0%' }} /></span>
                    <span>۰٪</span>
                  </div>
                ))}
              </div>
              <div style={{ minWidth: 220 }}>
                <p style={{ fontSize: 12.5, color: 'var(--n600)' }}>هیچ دیدگاهی برای این محصول نوشته نشده است.</p>
                <button type="button" className="btn btn-ghost btn-sm" style={{ marginTop: 10 }}>افزودن دیدگاه</button>
              </div>
            </div>
          ) : null}

          {tab === 'qa' ? (
            <div className="prose">
              <p>هنوز پرسشی ثبت نشده است.</p>
              <button type="button" className="btn btn-ghost btn-sm">ثبت پرسش جدید</button>
            </div>
          ) : null}

          {tab === 'review-tab' ? (
            hasRealCopy ? (
              <div className="prose prose-inner">
                <h3>نقد و بررسی اجمالی</h3>
                {titleEn ? <div className="tab-h-desc-en">{titleEn}</div> : null}
                <div className="pd-rich" dangerouslySetInnerHTML={{ __html: captured.descriptionHtml }} />
              </div>
            ) : (
              <div className="prose prose-inner">
                <h3>نقد و بررسی اجمالی</h3>
                <p>{product.name}</p>
                <p>
                  بررسی تخصصی این محصول در قالب موجود نیست. برای دریافت تحلیل فنی، مقایسه با مدل‌های مشابه
                  و پیشنهاد جایگزین، با کارشناسان {SITE.brandFa} تماس بگیرید.
                </p>
              </div>
            )
          ) : null}
        </div>
      </div>

      <div className="container section">
        <Reveal>
          <SectionHeading title="محصولات مشابه" moreTo="/shop/protection-and-security-systems" />
        </Reveal>
        <ProductGrid products={related} cols={4} />
      </div>

      <ConsultationBand title="برای مشاوره و خرید با ما تماس بگیرید!" />

      {/* mobile sticky purchase */}
      <div className="sticky-buy">
        <div style={{ flex: 1 }}>
          {priceText ? <div className="price">{priceText}</div> : <div className="badge badge-warm">تماس بگیرید</div>}
        </div>
        <button type="button" className="btn btn-primary" disabled={!inStock} onClick={() => add(product, qty)}>
          <ShoppingCart size={16} /> افزودن به سبد
        </button>
      </div>

      <div className="container" style={{ paddingBottom: 24 }}>
        <Link className="more" to="/cart" style={{ fontSize: 12.5, color: 'var(--primary)' }}>
          مشاهده سبد خرید <ChevronLeft size={14} />
        </Link>
      </div>
    </>
  );
}
