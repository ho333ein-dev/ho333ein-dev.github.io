// Homepage + shared marketing content.

// The five hero slides are the artwork the site owner supplied, recovered from
// the single contact sheet he sent at native resolution and then lifted to 2K
// by a detail-synthesis (HD upscale) pass before being re-encoded to WebP.
// They are shown exactly as designed — no overlay text, no scrim, no buttons,
// no drift — framed inside a softly blurred ambient fill taken from the slide
// itself, so nothing is ever cropped and no dead space is ever visible.
// `sm` is the half-size file served to phones; `w`/`h` keep the box stable
// before the bytes arrive, so the hero never jumps.
export const HERO_SLIDES = [
  {
    id: 'unv-smart',
    label: 'راهکارهای حرفه‌ای نظارت تصویری یونی‌ویو',
    image: '/assets/images/hero-1.webp',
    sm: '/assets/images/hero-1-sm.webp',
    w: 2048,
    h: 992,
    to: '/shop/protection-and-security-systems/cctv-camera',
    alt: 'راهکارهای حرفه‌ای نظارت تصویری یونی‌ویو — بهتر، امن‌تر، جهان هوشمندتر',
  },
  {
    id: 'dahua-tomorrow',
    label: 'فناوری برای فردای امن‌تر — داهوا',
    image: '/assets/images/hero-2.webp',
    sm: '/assets/images/hero-2-sm.webp',
    w: 2048,
    h: 992,
    to: '/shop/protection-and-security-systems/cctv-camera',
    alt: 'فناوری برای فردای امن‌تر — دوربین مداربسته داهوا',
  },
  {
    id: 'unv-intelligent',
    label: 'نظارت هوشمند، امنیت بیشتر — یونی‌ویو',
    image: '/assets/images/hero-3.webp',
    sm: '/assets/images/hero-3-sm.webp',
    w: 2048,
    h: 992,
    to: '/shop/protection-and-security-systems/cctv-camera',
    alt: 'نظارت هوشمند، امنیت بیشتر — دوربین‌های هوشمند یونی‌ویو',
  },
  {
    id: 'dahua-see-more',
    label: 'بیشتر ببین، بیشتر انجام بده — داهوا',
    image: '/assets/images/hero-4.webp',
    sm: '/assets/images/hero-4-sm.webp',
    w: 2048,
    h: 992,
    to: '/shop/protection-and-security-systems/cctv-camera',
    alt: 'بیشتر ببین، بیشتر انجام بده — دوربین مداربسته داهوا',
  },
  {
    id: 'unv-total',
    label: 'امنیت حرفه‌ای، راهکار کامل — از کوچک تا بزرگ',
    image: '/assets/images/hero-5.webp',
    sm: '/assets/images/hero-5-sm.webp',
    w: 2048,
    h: 992,
    to: '/cctv-camera',
    alt: 'امنیت حرفه‌ای، راهکار کامل یونی‌ویو برای منزل، فروشگاه، اداره و مرکز صنعتی',
  },
];

export const CATEGORY_TILES = [
  { title: 'اعلام حریق', count: 71, to: '/shop/protection-and-security-systems/fire-alarm', icon: '/assets/images/icon-fire-alarm.png' },
  { title: 'تجهیزات انرژی خورشیدی و برق اضطراری', count: 80, to: '/shop/solar-energy-and-backup-power', icon: '/assets/images/icon-solar.png' },
  { title: 'تجهیزات جانبی', count: 72, to: '/shop/protection-and-security-systems/peripheral-equipment', icon: '/assets/images/icon-accessory.png' },
  { title: 'دوربین مدار بسته', count: 194, to: '/shop/protection-and-security-systems/cctv-camera', icon: '/assets/images/icon-cctv.png' },
  { title: 'دزدگیر', count: 33, to: '/shop/protection-and-security-systems/burglar-alarm', icon: '/assets/images/icon-burglar-alarm.png' },
  { title: 'شبکه', count: 53, to: '/shop/protection-and-security-systems/network', icon: '/assets/images/icon-network.png' },
];

export const FEATURE_TILES = [
  { title: 'دوربین مدار بسته', image: '/assets/images/cat-cctv.jpg', to: '/shop/protection-and-security-systems/cctv-camera' },
  { title: 'دزدگیر اماکن', image: '/assets/images/cat-alarm.jpg', to: '/shop/protection-and-security-systems/burglar-alarm' },
  { title: 'اعلام حریق', image: '/assets/images/cat-fire.jpg', to: '/shop/protection-and-security-systems/fire-alarm' },
  { title: 'شبکه و زیرساخت', image: '/assets/images/cat-network.jpg', to: '/shop/protection-and-security-systems/network' },
];

export const PROJECT_ROWS = [
  { id: 1, name: 'پروژه شهرکتاب تهران', type: 'سیستم نظارتی' },
  { id: 2, name: 'مسیریاب نشان', type: 'سیستم نظارتی' },
  { id: 3, name: 'خبر فوری', type: 'سیستم نظارتی' },
  { id: 4, name: 'مجتمع تجاری افشار', type: 'سیستم نظارتی' },
  { id: 5, name: 'پمپ بنزین فریمان', type: 'سیستم نظارتی' },
  { id: 6, name: 'بازار حافظ', type: 'سیستم نظارتی' },
  { id: 7, name: 'شعبات کت و شلوار سپهری', type: 'سیستم نظارتی' },
  { id: 8, name: 'صنایع چوبی هیلدا', type: 'سیستم نظارتی' },
  { id: 9, name: 'عطر پدیده', type: 'سیستم نظارتی' },
  { id: 10, name: 'و تعداد بسیاری از پروژه‌های دولتی و خصوصی دیگر…', type: 'سیستم نظارتی' },
];

export const PROJECT_GALLERY = [
  { title: 'شهر کتاب تهران', image: '/assets/images/project-1.jpg' },
  { title: 'مجتمع افشار', image: '/assets/images/project-2.jpg' },
  { title: 'بازار حافظ', image: '/assets/images/project-3.jpg' },
  { title: 'شرکت گاز', image: '/assets/images/project-4.jpg' },
  { title: 'فرماندهی انتظامی جمهوری اسلامی', image: '/assets/images/project-5.jpg' },
  { title: 'شرکت سایپا', image: '/assets/images/project-6.jpg' },
];

export const BRANDS = [
  { title: 'فایرایندکس', en: 'FireIndex', image: '/assets/images/brand-fireindex.png' },
  { title: 'کلارنت', en: 'Clarent', image: '/assets/images/brand-clarent.png' },
  { title: 'کلاسیک', en: 'Classic', image: '/assets/images/brand-classic.png' },
  { title: 'پیناکل', en: 'Pinnacle', image: '/assets/images/brand-pinaccle.png' },
  { title: 'وسترن دیجیتال', en: 'Western Digital', image: '/assets/images/brand-western-digital.png' },
  { title: 'هایک ویژن', en: 'Hikvision', image: '/assets/images/brand-hikvision.png' },
  { title: 'مکسرون', en: 'Maxron', image: '/assets/images/brand-maxron.png' },
  { title: 'او استی کم', en: 'OSTCAM', image: '/assets/images/brand-ostcam.png' },
  { title: 'برایتون', en: 'Briton', image: '/assets/images/brand-briton.png' },
  { title: 'تیتان', en: 'Titan', image: '/assets/images/brand-titan.png' },
  { title: 'تلتک', en: 'Teletek', image: '/assets/images/brand-teletek.png' },
  { title: 'داهوا', en: 'Dahua', image: '/assets/images/brand-dahua.png' },
];

export const FAQ = [
  {
    q: 'چه نوع دوربین مداربسته‌ای برای شما مناسب است؟',
    a: 'انتخاب دوربین مداربسته تماماً بستگی به نیاز شما دارد. بسته به اینکه دوربین را برای فضای بسته یا فضای باز می‌خواهید، نوع دوربین می‌تواند متفاوت باشد. دوربین‌های بی‌سیم نصب راحت‌تری دارند اما مدل‌های سیمی بعضاً قیمت مناسب‌تری دارند. اگر می‌خواهید دوربین قابلیت چرخیدن و زوم داشته باشد باید مدل‌های PTZ را انتخاب کنید. پیشنهاد می‌شود برای این موضوع با کارشناسان امنیت دید تماس بگیرید.',
  },
  {
    q: 'دوربین مداربسته با چه رزولوشنی بخرم؟',
    a: 'معمولاً دوربین‌های مداربسته در ۳ رزولوشن مختلف عرضه می‌شوند:\n• رزولوشن 720p (HD): کیفیت مناسبی دارد اما در نمایش جزئیات کیفیت خوبی ندارد.\n• رزولوشن 1080p (Full HD): کیفیت بسیار خوبی دارد و در نمایش جزئیات عملکرد خوبی نشان می‌دهد.\n• رزولوشن 4K (Ultra HD): کیفیت فوق‌العاده‌ای دارد و بهترین رزولوشن برای نمایش جزئیات حتی در زوم کامل است.',
  },
  {
    q: 'دوربین‌های مداربسته معمولاً تا چند روز فیلم ضبط می‌کنند؟',
    a: 'این موضوع کاملاً بستگی به حجم هارد دستگاه DVR، کیفیت ضبط و تعداد دوربین‌ها دارد. به‌عنوان مثال یک هارد ۱ ترابایتی در رزولوشن 1080p می‌تواند حدود ۷ تا ۱۰ روز فیلم را ذخیره کند. اگر می‌خواهید تعداد روز بیشتری ذخیره شود، می‌توانید از دوربین با تشخیص حرکت استفاده کنید که فقط در زمان تشخیص حرکت فیلم‌برداری می‌کند.',
  },
  {
    q: 'دوربین مداربسته دید در شب معمولاً چقدر برد فیلم‌برداری دارد؟',
    a: 'این تماماً بسته به نوع دوربین مداربسته است و بین ۱۰ تا ۱۰۰ متر متفاوت است.',
  },
  {
    q: 'آیا دوربین مداربسته بدون اینترنت هم کار می‌کند؟',
    a: 'بله، اما محدودیت‌هایی وجود دارد. دوربین‌های سیمی باید به دستگاه DVR یا NVR متصل شوند تا بدون اینترنت تصویربرداری انجام دهند. تنها دوربین‌های وای‌فای به اینترنت نیاز دارند. در نظر داشته باشید برخی از این دوربین‌ها قابلیت ضبط آفلاین را نیز دارند.',
  },
  {
    q: 'دوربین مداربسته تحت شبکه (IP) بهتر است یا آنالوگ؟',
    a: 'دوربین‌های IP نسبت به آنالوگ مزایای بیشتری دارند؛ از جمله کیفیت تصویر بهتر، امکان اتصال به اینترنت و کنترل از راه دور و قابلیت تشخیص حرکت. اما مزیت مهم دوربین‌های آنالوگ ارزان‌تر بودن آن‌هاست.',
  },
  {
    q: 'آیا برای نصب دوربین مداربسته باید مجوز داشته باشیم؟',
    a: 'برای محیط‌های ساختمان شخصی و منزل خیر. ولی برای محیط‌های عمومی و شرکت‌ها باید به کارکنان و ساکنین اطلاع‌رسانی کنید.',
  },
];

export const TRUST_BADGES = [
  { title: 'ضمانت اصالت کالا', text: 'تمام محصولات با گارانتی شرکتی و فاکتور رسمی ارائه می‌شوند.' },
  { title: 'ارسال سریع', text: 'ارسال به سراسر ایران؛ ارسال همان‌روز در مشهد و خراسان رضوی.' },
  { title: 'مشاوره تخصصی', text: 'بررسی نیاز پروژه و پیشنهاد تجهیزات متناسب با محل نصب.' },
  { title: 'پشتیبانی و نصب', text: 'اجرای پروژه‌های نظارتی و خدمات پس از فروش تخصصی.' },
];
