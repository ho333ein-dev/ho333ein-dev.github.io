// Site-wide brand + navigation configuration.
// Brand name, contact details and menu tree are centralised here so rebranding
// touches a single file.

export const SITE = {
  brandFa: 'امنیت دید',
  brandEn: 'AMANIAT DID',
  tagline: 'سیستم‌های حفاظتی و امنیتی',
  since: 'بیش از ۱۵ سال تجربه',
  phone: '90006007',
  phoneHref: 'tel:+9890006007',
  telLabel: '۹۰۰۰۶۰۰۷',
  email: 'info@amaniatdid.ir',
  officeAddress:
    'مشهد، خیابان سنائی، میدان صاحب الزمان، مجتمع تجاری سرمد، طبقه اول، واحد ۱۰۶A',
  shopAddress:
    'مشهد، خیابان سنائی، میدان صاحب الزمان، مجتمع تجاری سرمد، جنب ورودی ۳، فروشگاه امنیت دید',
  hours: 'هفت روز هفته، از ساعت ۹ تا ۲۱',
  mapGoogle: 'https://maps.app.goo.gl/5YJbS9YLid5GWt5dA',
  mapNeshan: 'https://nshn.ir/97_b1dygQJjGLW',
  whatsapp: 'https://wa.me/message/MIBR3EL6H2DAA1',
  bale: 'http://ble.ir/heidari_mahancctv',
  instagram: 'https://instagram.com/',
  telegram: 'https://telegram.me/',
  sellerName: 'کارشناسان امنیت دید',
};

const P = '/shop/protection-and-security-systems';

// Mega-menu tree mirroring the reference site structure.
// The header menu is captured verbatim from the reference site by
// menu_sync.py (order, labels, links and the icon of every top-level item).
// Nothing here is hand-typed, so the menu cannot drift from the reference.
import rawMenu from './menu.json';

export const NAV = rawMenu;


export const FOOTER_LINKS = [
  {
    title: 'دسترسی سریع',
    items: [
      { title: 'خانه', to: '/' },
      { title: 'دوربین مداربسته', to: '/cctv-camera' },
      { title: 'دزدگیر', to: '/burglar-alarm' },
      { title: 'اعلام حریق', to: '/fire-alarm-system' },
      { title: 'تجهیزات خورشیدی', to: '/solar-panel-mashhad' },
      { title: 'لیست قیمت', to: '/price-list' },
    ],
  },
  {
    title: 'خدمات مشتریان',
    items: [
      { title: 'تماس با ما', to: '/contact-us' },
      { title: 'خرید اقساطی', to: '/installment-purchase' },
      { title: 'درخواست نمایندگی', to: '/request-for-dealership' },
      { title: 'وبلاگ', to: '/blog' },
      { title: 'دانلود نرم افزار', to: '/software' },
    ],
  },
];
