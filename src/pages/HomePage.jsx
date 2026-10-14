import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Store } from 'lucide-react';
import {
  HeroSlider, CategoryRail, FeatureTiles, ProductSection, ProjectsSection,
  ConsultationBand, BrandMarquee, PromoBanners, BlogRow,
} from '../components/home/home-sections.jsx';
import { Reveal, SectionHeading } from '../components/common/ui.jsx';
import {
  bestSellers, latestCctv, latestAlarm, latestAccessories, latestSolar, alarmPackages, picks,
} from '../lib/catalog.js';
import { BLOG_POSTS } from '../data/editorial.js';
import { SITE } from '../data/site.js';

/* The reference's own «پیشنهادات شگفت انگیز» slider carries no published deals —
   it renders a "no content" error on mahancctv.com. Rather than copy a broken
   widget onto the homepage, the slot is omitted until real offers exist. */

function VisitStore() {
  return (
    <section className="section section-alt" data-component="visit-store">
      <div className="container">
        <Reveal><SectionHeading title={`خرید حضوری از ${SITE.brandFa}`} /></Reveal>
        <div className="two-col">
          <Reveal>
            <p style={{ fontSize: 13.5, marginBottom: 18 }}>
              برای خرید حضوری از {SITE.brandFa} می‌توانید به آدرس‌های زیر مراجعه کنید.
            </p>
            <div className="info-list">
              <div className="info-item">
                <span className="ic"><Store size={17} /></span>
                <span>
                  <h4>دفتر مرکزی</h4>
                  <p>{SITE.officeAddress}</p>
                </span>
              </div>
              <div className="info-item">
                <span className="ic"><Store size={17} /></span>
                <span>
                  <h4>فروشگاه</h4>
                  <p>{SITE.shopAddress}</p>
                </span>
              </div>
              <div className="info-item">
                <span className="ic"><MapPin size={17} /></span>
                <span>
                  <h4>شماره تماس</h4>
                  <p><a href={SITE.phoneHref} style={{ color: 'var(--primary)', fontWeight: 700 }}>{SITE.phone}</a></p>
                </span>
              </div>
            </div>
            <div className="map-links" style={{ marginTop: 18 }}>
              <a className="btn btn-ghost btn-sm" href={SITE.mapGoogle} rel="noopener noreferrer">مسیریابی با گوگل مپ</a>
              <a className="btn btn-ghost btn-sm" href={SITE.mapNeshan} rel="noopener noreferrer">مسیریابی با نشان</a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr><th>ساعت کاری</th><th>روزهای هفته</th></tr>
                </thead>
                <tbody>
                  <tr><td>۹:۰۰ تا ۲۱:۰۰</td><td>شنبه تا پنجشنبه</td></tr>
                  <tr><td>۱۰:۰۰ تا ۲۰:۰۰</td><td>جمعه</td></tr>
                  <tr><td>پاسخگویی تلفنی ۲۴ ساعته</td><td>هفت روز هفته</td></tr>
                </tbody>
              </table>
            </div>
            <p className="form-note" style={{ marginTop: 12 }}>
              پیش از مراجعه، موجودی کالای موردنظر را تلفنی استعلام بگیرید.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const best = bestSellers(6);
  const cctv = latestCctv(6);
  const alarm = latestAlarm(6);
  const acc = latestAccessories(6);
  const solar = latestSolar(6);
  const packs = alarmPackages(6).length ? alarmPackages(6) : picks(['alarm-panel', 'burglar-alarm'], 6);

  return (
    <>
      <HeroSlider />
      <CategoryRail />
      <FeatureTiles />

      <ProductSection
        title="پرفروش ترین ها"
        eyebrow="انتخاب مشتریان"
        moreTo="/shop/protection-and-security-systems"
        products={best}
      />
      <ProductSection
        alt
        title="جدیدترین دوربین ها و تجهیزات"
        moreTo="/shop/protection-and-security-systems/cctv-camera"
        products={cctv}
      />
      <ProductSection
        title="جدیدترین دزدگیر ها و تجهیزات"
        moreTo="/burglar-alarm"
        products={alarm}
      />

      <ProjectsSection />
      <ConsultationBand />

      <ProductSection
        alt
        title="جدیدترین تجهیزات جانبی"
        moreTo="/shop/protection-and-security-systems/peripheral-equipment"
        products={acc}
      />
      <ProductSection
        title="جدیدترین تجهیزات خورشیدی"
        moreTo="/shop/solar-energy-and-backup-power"
        products={solar}
      />
      <ProductSection
        alt
        title="پکیج کامل دزدگیر"
        moreTo="/shop/protection-and-security-systems/burglar-alarm"
        products={packs}
      />

      <VisitStore />
      <PromoBanners />
      <BrandMarquee />
      <BlogRow posts={BLOG_POSTS.slice(0, 3)} />

      <section className="section-tight" data-component="home-cta">
        <div className="container center-narrow">
          <p style={{ fontSize: 13 }}>
            مشاهده <Link to="/price-list" style={{ color: 'var(--primary)', fontWeight: 500 }}>لیست قیمت محصولات</Link> ·
            {' '}دانلود <Link to="/software" style={{ color: 'var(--primary)', fontWeight: 500 }}>نرم‌افزارهای دوربین مداربسته</Link> ·
            {' '}<Link to="/contact-us" style={{ color: 'var(--primary)', fontWeight: 500 }}>تماس با ما</Link>
          </p>
        </div>
      </section>
    </>
  );
}
