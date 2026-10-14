// Blog, software downloads, price list and static page content.

export const BLOG_CATEGORIES = [
  { title: 'مقالات دوربین مداربسته', slug: 'cctv-camera-articles', to: '/blog/category/cctv-camera-articles' },
  { title: 'مقالات اعلام حریق', slug: 'fire-alarm-articles', to: '/blog/category/fire-alarm-articles' },
  { title: 'مقالات دزدگیر', slug: 'burglar-alarm-articles', to: '/blog/category/burglar-alarm-articles' },
  { title: 'مقالات شبکه', slug: 'network-articles', to: '/blog/category/network-articles' },
];

export const BLOG_POSTS = [
  {
    slug: 'cctv-camera-recording-training',
    title: 'آموزش تنظیمات ضبط دوربین مداربسته در DVR و NVR',
    excerpt: 'برای تنظیم ضبط دوربین مداربسته، باید وضعیت ضبط پیوسته، زمان‌بندی و حساسیت تشخیص حرکت را مشخص کنید تا فضای هارد بهینه استفاده شود.',
    image: '/assets/images/blog-1.jpg',
    date: '1405/03/26',
    dateFa: '۲۶ خرداد ۱۴۰۵',
    category: 'cctv-camera-articles',
    body: [
      { h: 'پیش از شروع: چه چیزی باید مشخص باشد؟', p: 'پیش از هر تنظیمی مشخص کنید چند روز نگهداری تصویر نیاز دارید، ظرفیت هارد چقدر است و کیفیت ضبط هر کانال چه سطحی باید داشته باشد. بدون این سه عدد، هر تنظیمی موقتی است.' },
      { h: 'انتخاب حالت ضبط', p: 'در بیشتر دستگاه‌های DVR و NVR سه حالت اصلی وجود دارد: ضبط پیوسته، ضبط زمان‌بندی‌شده و ضبط در زمان تشخیص حرکت. برای محیط‌های کم‌تردد، حالت تشخیص حرکت فضای هارد را چند برابر افزایش می‌دهد.' },
      { h: 'تنظیم رزولوشن و نرخ فریم', p: 'رزولوشن ضبط باید با توان دستگاه و ظرفیت ذخیره‌سازی هماهنگ باشد. نرخ فریم بالاتر تصویر روان‌تری می‌دهد اما حجم داده را افزایش می‌دهد. برای بیشتر کاربردهای نظارتی ۱۵ تا ۲۵ فریم در ثانیه کافی است.' },
      { h: 'پاک‌نویسی (Overwrite)', p: 'با فعال بودن پاک‌نویسی، دستگاه در صورت پر شدن هارد قدیمی‌ترین تصاویر را حذف می‌کند. اگر نگهداری بلندمدت تصاویر خاصی مهم است، از پشتیبان‌گیری دوره‌ای استفاده کنید.' },
      { h: 'بررسی نتیجه', p: 'پس از تنظیم، یک روز ضبط را بررسی کنید و حجم مصرفی را اندازه بگیرید. اگر تعداد روزهای نگهداری کمتر از انتظار بود، رزولوشن، نرخ فریم یا بیت‌ریت را تعدیل کنید.' },
    ],
  },
  {
    slug: 'cctv-camera-resolution',
    title: 'رزولوشن دوربین مداربسته چیست؟',
    excerpt: 'رزولوشن دوربین مداربسته، تعداد پیکسل‌های تشکیل‌دهنده تصویر است و ظرفیت ثبت جزئیات را مشخص می‌کند. برای مثال تصویر Full HD حدود ۲ مگاپیکسل و 4K UHD حدود ۸٫۳ مگاپیکسل دارد.',
    image: '/assets/images/blog-2.webp',
    date: '1405/07/14',
    dateFa: '۱۴ مهر ۱۴۰۵',
    category: 'cctv-camera-articles',
    author: 'محمد حیدری',
    rating: '5 از 5 - (3 امتیاز)',
    body: [
      { h: 'رزولوشن دوربین مداربسته چیست و چگونه محاسبه می‌شود؟', p: 'رزولوشن معمولاً با تعداد پیکسل‌های افقی و عمودی بیان می‌شود. حاصل‌ضرب این دو عدد، تعداد کل پیکسل‌های تصویر را مشخص می‌کند: مگاپیکسل = تعداد پیکسل افقی × تعداد پیکسل عمودی ÷ ۱٬۰۰۰٬۰۰۰. برای نمونه، تصویر ۱۹۲۰ × ۱۰۸۰ شامل ۲٬۰۷۳٬۶۰۰ پیکسل است و معمولاً با عنوان «۲ مگاپیکسل» معرفی می‌شود.' },
      { h: 'جدول مقایسه رزولوشن‌های رایج', p: '720p یا HD با ابعاد ۱۲۸۰ × ۷۲۰ حدود ۰٫۹۲ مگاپیکسل؛ 1080p یا Full HD با ابعاد ۱۹۲۰ × ۱۰۸۰ حدود ۲٫۰۷ مگاپیکسل؛ ۴ مگاپیکسل با ابعاد ۲۵۶۰ × ۱۴۴۰ حدود ۳٫۶۹ مگاپیکسل؛ ۵ مگاپیکسل با ابعاد ۲۵۹۲ × ۱۹۴۴ حدود ۵٫۰۴ مگاپیکسل؛ و ۸ مگاپیکسل یا 4K UHD با ابعاد ۳۸۴۰ × ۲۱۶۰ حدود ۸٫۲۹ مگاپیکسل.' },
      { h: 'آیا دوربین 4K چهار برابر Full HD کیفیت دارد؟', p: 'تصویر 4K UHD چهار برابر Full HD پیکسل دارد؛ اما این به معنی چهار برابر شدن تمام جنبه‌های کیفیت نیست. تعداد پیکسل افقی دو برابر و عمودی دو برابر می‌شود و در نتیجه تعداد کل پیکسل‌ها چهار برابر می‌شود. اگر نور، کادربندی، فوکوس و تنظیمات مناسب باشند، این افزایش می‌تواند جزئیات بیشتری برای بررسی فراهم کند.' },
      { h: 'چرا فاصله و زاویه دید به‌اندازه مگاپیکسل مهم هستند؟', p: 'پیکسل‌های تصویر بین تمام بخش‌های کادر تقسیم می‌شوند. هرچه دوربین فضای گسترده‌تری را پوشش دهد، سهم یک چهره یا پلاک از پیکسل‌ها کمتر می‌شود. تراکم پیکسلی افقی = تعداد پیکسل‌های افقی تصویر ÷ عرض واقعی محدوده در فاصله سوژه.' },
      { h: 'دوربین مداربسته چند مگاپیکسل بخریم؟', p: 'انتخاب رزولوشن باید از هدف نظارت شروع شود. مشاهده رفت‌وآمد کلی با تشخیص جزئیات چهره یا خواندن پلاک، نیاز یکسانی ندارد. در یک کادر محدود و با نور مناسب، دوربین ۲ مگاپیکسل ممکن است نیاز نظارت عمومی را برطرف کند. مدل‌های ۴، ۵ یا ۸ مگاپیکسل زمانی ارزش بیشتری دارند که پیکسل اضافه در محل موردنیاز به جزئیات مفید تبدیل شود.' },
      { h: 'آیا رزولوشن بالا برای تشخیص چهره و پلاک کافی است؟', p: 'خیر. رزولوشن بالا ظرفیت ثبت جزئیات را افزایش می‌دهد، اما نتیجه به شرایط تصویربرداری وابسته است. همچنین «خوانا بودن پلاک در فیلم» با «تشخیص خودکار پلاک توسط نرم‌افزار» یکسان نیست. سامانه پلاک‌خوان به الزامات مشخص دوربین، نصب و نرم‌افزار نیاز دارد.' },
      { h: 'چه عواملی در کنار رزولوشن، کیفیت تصویر را تعیین می‌کنند؟', p: 'نور و عملکرد دوربین در شب، کیفیت لنز و فوکوس، فناوری WDR، سرعت شاتر و نرخ فریم، و فشرده‌سازی و بیت‌ریت. رزولوشن، نرخ فریم، میزان حرکت، نویز تصویر و روش فشرده‌سازی باید در کنار هم تنظیم شوند.' },
      { h: 'تأثیر رزولوشن بر هارد و پهنای باند', p: 'برای حفظ سطح مشابهی از جزئیات، افزایش رزولوشن معمولاً نیاز به داده بیشتری ایجاد می‌کند؛ اما حجم فایل فقط از روی مگاپیکسل مشخص نمی‌شود. حجم تقریبی روزانه بر حسب گیگابایت = بیت‌ریت بر حسب مگابیت‌برثانیه × ۱۰٫۸.' },
      { h: 'تفاوت رزولوشن دوربین با کیفیت ضبط DVR و NVR', p: 'داشتن دوربین ۸ مگاپیکسل کافی نیست؛ دستگاه ضبط باید رزولوشن، نرخ فریم و تعداد کانال موردنظر را پشتیبانی کند. پیش از خرید یا ارتقا، رزولوشن قابل ضبط هر کانال، نرخ فریم پشتیبانی‌شده، ظرفیت پهنای باند ورودی، سازگاری دوربین و دستگاه ضبط، تنظیمات جریان اصلی و فرعی و ظرفیت ذخیره‌سازی متناسب با مدت نگهداری را بررسی کنید.' },
      { h: 'انتخاب رزولوشن مناسب برای سیستم نظارتی', p: 'رزولوشن یکی از عوامل مهم در انتخاب دوربین است، اما تصمیم نهایی باید بر اساس جزئیات موردنیاز، فاصله، نور، لنز و توان دستگاه ضبط گرفته شود. برای بررسی انواع دوربین مداربسته، ابتدا محل نصب، فاصله سوژه، شرایط شب و تعداد روزهای نگهداری فیلم را مشخص کنید.' },
    ],
    faqs: [
      { q: 'رزولوشن 1080p چند مگاپیکسل است؟', a: 'تصویر ۱۹۲۰ × ۱۰۸۰ حدود ۲٫۰۷ مگاپیکسل دارد و معمولاً در رده ۲ مگاپیکسل قرار می‌گیرد.' },
      { q: 'دوربین 4K چند مگاپیکسل است؟', a: 'در کاربرد رایج 4K UHD، ابعاد تصویر ۳۸۴۰ × ۲۱۶۰ و تعداد پیکسل‌ها حدود ۸٫۲۹ میلیون است؛ این دوربین‌ها معمولاً ۸ مگاپیکسل نامیده می‌شوند.' },
      { q: 'دوربین ۵ مگاپیکسل همیشه بهتر از ۴ مگاپیکسل است؟', a: 'خیر. ابعاد خروجی، نسبت تصویر، کیفیت لنز، نور، پردازش و تنظیمات ضبط باید مقایسه شوند. عدد بالاتر به‌تنهایی نتیجه بهتر را تضمین نمی‌کند.' },
      { q: 'آیا دوربین با مگاپیکسل بالاتر دید در شب بهتری دارد؟', a: 'لزوماً خیر. عملکرد شب به نور، حسگر، لنز و تنظیمات نوردهی و پردازش تصویر وابسته است.' },
    ],
  },
  {
    slug: 'how-to-work-with-a-fire-alarm-panel',
    title: 'نحوه کار با پنل اعلام حریق',
    excerpt: 'برای کار با پنل اعلام حریق، ابتدا پیام نمایشگر و چراغ‌های روشن را بخوانید و سپس وضعیت منطقه اعلام‌شده را بررسی کنید.',
    image: '/assets/images/blog-3.jpg',
    date: '1405/05/12',
    dateFa: '۱۲ مرداد ۱۴۰۵',
    category: 'fire-alarm-articles',
  },
  {
    slug: 'fire-alarm-troubleshooting-methods',
    title: 'عیب یابی اعلام حریق',
    excerpt: 'عیب‌یابی اعلام حریق از خواندن پیام و چراغ‌های پنل شروع می‌شود. روشن شدن Fire یا Alarm به معنی وجود شرایط اضطراری واقعی است.',
    image: '/assets/images/blog-4.png',
    date: '1405/05/05',
    dateFa: '۵ مرداد ۱۴۰۵',
    category: 'fire-alarm-articles',
  },
  {
    slug: 'wireless-cctv-camera-installation-guide',
    title: 'آموزش نصب دوربین مداربسته بی‌سیم',
    excerpt: 'نصب دوربین مداربسته بی‌سیم معمولاً از سیستم‌های کابلی ساده‌تر است؛ اما برای داشتن تصویر پایدار، ضبط و تغذیه باید درست برنامه‌ریزی شود.',
    image: '/assets/images/blog-5.jpg',
    date: '1405/02/18',
    dateFa: '۱۸ اردیبهشت ۱۴۰۵',
    category: 'cctv-camera-articles',
  },
  {
    slug: 'warm-light-vs-starlight-cctv',
    title: 'تفاوت دوربین مداربسته وارم لایت و استارلایت',
    excerpt: 'وارم لایت با نور مرئی گرم تصویر رنگی در شب ثبت می‌کند و استارلایت با تقویت حساسیت سنسور در نور کم کار می‌کند. انتخاب به محل نصب بستگی دارد.',
    image: '/assets/images/blog-cover-hd.webp',
    date: '1405/01/20',
    dateFa: '۲۰ فروردین ۱۴۰۵',
    category: 'cctv-camera-articles',
  },
  {
    slug: 'wired-vs-wireless-cctv-camera',
    title: 'دوربین مداربسته بی‌سیم بهتر است یا باسیم؟ مقایسه کامل',
    excerpt: 'انتخاب بین بی‌سیم و باسیم به زیرساخت موجود، فاصله نقاط، پایداری موردنیاز و بودجه پروژه بستگی دارد. هر دو گزینه کاربرد خود را دارند.',
    image: '/assets/images/blog-storage.jpg',
    date: '1404/12/02',
    dateFa: '۲ اسفند ۱۴۰۴',
    category: 'cctv-camera-articles',
  },
];

export const SOFTWARE_ITEMS = [
  { slug: 'teletek-proste-observer-software', title: 'نرم افزار اعلام حریق تلتک Teletek , ProSte , Observer', category: 'fire-alarm-software', categoryTitle: 'نرم افزار اعلام حریق', date: '۲۶ خرداد ۱۴۰۵', image: '/assets/images/sw-teletek.png', excerpt: 'نرم‌افزارهای اعلام حریق تلتک (Teletek) شامل مجموعه‌ای از ابزارهای تخصصی برای برنامه‌ریزی، پیکربندی، مانیتورینگ و مدیریت سیستم‌های اعلام حریق است.' },
  { slug: 'classic', title: 'نرم افزار دزدگیر کلاسیک Classic', category: 'burglar-alarm-software', categoryTitle: 'نرم افزار دزدگیر', date: '۲۱ آذر ۱۴۰۴', image: '/assets/images/sw-classic.jpg', excerpt: 'اگر قصد دارید سیستم دزدگیر اماکن خود را هوشمند کنید و بتوانید فقط با موبایل آن را کنترل کنید، برند کلاسیک گزینه مناسبی است.' },
  { slug: 'good-alarm', title: 'نرم افزار دزدگیر گودآلارم Good Alarm', category: 'burglar-alarm-software', categoryTitle: 'نرم افزار دزدگیر', date: '۲۶ آبان ۱۴۰۴', image: '/assets/images/sw-goodalarm.jpg', excerpt: 'گود آلارم یکی از برندهای شناخته‌شده در زمینه تولید سیستم‌های امنیتی و دزدگیر اماکن است.' },
  { slug: 'anik', title: 'نرم افزار دزدگیر آنیک Anik', category: 'burglar-alarm-software', categoryTitle: 'نرم افزار دزدگیر', date: '۲۶ آبان ۱۴۰۴', image: '/assets/images/sw-anik.jpg', excerpt: 'برند آنیک یکی از تولیدکنندگان معتبر و شناخته‌شده در حوزه تجهیزات امنیتی و دزدگیر اماکن است.' },
  { slug: 'firewall', title: 'نرم افزار دزدگیر فایروال Firewall', category: 'burglar-alarm-software', categoryTitle: 'نرم افزار دزدگیر', date: '۲۶ آبان ۱۴۰۴', image: '/assets/images/sw-firewall.jpg', excerpt: 'نرم افزار دزدگیر فایروال ابزاری تخصصی و کاربردی برای کنترل و مدیریت سیستم‌های حفاظتی و دزدگیر منزل است.' },
  { slug: 'hik-connect', title: 'نرم افزار دوربین مداربسته hik-connect هایک ویژن', category: 'cctv-software', categoryTitle: 'نرم افزار دوربین مداربسته', date: '۲۵ آبان ۱۴۰۴', image: '/assets/images/sw-hikconnect.jpg', excerpt: 'با استفاده از نرم‌افزار Hik-Connect می‌توانید در هر نقطه از دنیا تصاویر زنده دوربین‌های هایک ویژن خود را مشاهده کنید.' },
  { slug: 'dmss', title: 'نرم افزار دوربین مداربسته DMSS', category: 'cctv-software', categoryTitle: 'نرم افزار دوربین مداربسته', date: '۲۵ آبان ۱۴۰۴', image: '/assets/images/sw-dmss.jpg', excerpt: 'نرم افزار DMSS ابزاری حرفه‌ای برای انتقال تصویر دوربین‌های مداربسته داهوا است که امکانات گسترده‌ای برای مدیریت و مشاهده دارد.' },
  { slug: 'imou-life', title: 'نرم افزار دوربین مداربسته imou Life', category: 'cctv-software', categoryTitle: 'نرم افزار دوربین مداربسته', date: '۲۵ آبان ۱۴۰۴', image: '/assets/images/sw-imou.jpg', excerpt: 'نرم افزار Imou ابزاری قدرتمند و کاربردی برای انتقال تصویر دوربین‌های مداربسته برندهای داهوا و Imou است.' },
  { slug: 'briton', title: 'نرم افزار انتقال تصویر برایتون Briton', category: 'cctv-software', categoryTitle: 'نرم افزار دوربین مداربسته', date: '۲۴ آبان ۱۴۰۴', image: '/assets/images/sw-briton.jpg', excerpt: 'نرم‌افزارهای انتقال تصویر برایتون شامل Briton CCTV Pro و Briton Device Manager هستند.' },
  { slug: 'xvrview', title: 'نرم افزار دوربین مداربسته XVRView', category: 'cctv-software', categoryTitle: 'نرم افزار دوربین مداربسته', date: '۲۴ آبان ۱۴۰۴', image: '/assets/images/sw-xvrview.jpg', excerpt: 'XVRView نرم‌افزاری حرفه‌ای از برند فالکن برای مدیریت و مشاهده تصاویر زنده و ضبط‌شده دوربین‌های مداربسته روی تلفن همراه است.' },
];

export const PRICE_LIST_GROUPS = [
  {
    title: 'لیست قیمت هارد وسترن دیجیتال',
    files: [
      { title: 'لیست قیمت هارد وسترن دیجیتال', image: '/assets/images/pricelist-wd.jpg' },
      { title: 'فرم سفارش هارد وسترن دیجیتال', image: '/assets/images/pricelist-wd.jpg' },
    ],
  },
  {
    title: 'لیست قیمت محصولات فایر ایندکس',
    files: [
      { title: 'لیست قیمت فایر ایندکس', image: '/assets/images/pricelist-fireindex.jpg' },
      { title: 'فرم سفارش فایر ایندکس', image: '/assets/images/pricelist-fireindex.jpg' },
    ],
  },
  {
    title: 'لیست قیمت محصولات داهوا',
    files: [
      { title: 'لیست قیمت AHD داهوا', image: '/assets/images/pricelist-dahua-ahd.jpg' },
      { title: 'لیست قیمت IP داهوا', image: '/assets/images/pricelist-dahua-ip.jpg' },
    ],
  },
  {
    title: 'لیست قیمت دوربین مداربسته کلارنت',
    files: [{ title: 'لیست قیمت AHD و IP کلارنت', image: '/assets/images/pricelist-clarent.jpg' }],
  },
  {
    title: 'لیست قیمت محصولات مکسرون',
    files: [
      { title: 'لیست قیمت مکسرون شبکه', image: '/assets/images/pricelist-maxron-switch.jpg' },
      { title: 'لیست قیمت مکسرون دوربین', image: '/assets/images/pricelist-maxron-cctv.jpg' },
    ],
  },
  {
    title: 'لیست قیمت محصولات دزدگیر کلاسیک',
    files: [{ title: 'لیست قیمت کلاسیک', image: '/assets/images/pricelist-classic.jpg' }],
  },
  {
    title: 'لیست قیمت محصولات تیتان',
    files: [{ title: 'لیست قیمت تیتان', image: '/assets/images/pricelist-titan.jpg' }],
  },
  {
    title: 'لیست قیمت محصولات OSTCAM',
    files: [{ title: 'لیست قیمت OSTCAM', image: '/assets/images/pricelist-ostcam.jpg' }],
  },
];

export const PRICE_LIST_TEXT = {
  title: 'لیست قیمت محصولات دوربین مداربسته و تجهیزات حفاظتی',
  paragraphs: [
    'اگر به دنبال لیست قیمت محصولات دوربین مداربسته، تجهیزات امنیتی و لوازم جانبی نظارتی هستید، در این صفحه می‌توانید جدیدترین قیمت‌ها را برای انواع کالاهای موجود مشاهده کنید. در این بخش، قیمت هارد وسترن دیجیتال، دوربین مداربسته کلارنت، محصولات اعلام حریق فایرایندکس، محصولات داهوا، محصولات مکسرون، محصولات دزدگیر کلاسیک، محصولات OSTCAM، محصولات تیتان و سایر تجهیزات مرتبط به‌صورت به‌روز در اختیار شما قرار می‌گیرد.',
    'داشتن یک لیست قیمت به‌روز محصولات دوربین مداربسته و تجهیزات حفاظتی باعث می‌شود کاربران بتوانند قیمت‌ها را سریع‌تر مقایسه کنند، بر اساس بودجه بهترین انتخاب را داشته باشند، برندهای مختلف را بررسی کنند، برای خرید عمده یا جزئی تصمیم دقیق‌تری بگیرند و از تغییرات بازار و نوسانات قیمت مطلع شوند.',
  ],
  bullets: [
    'قیمت‌ها را سریع‌تر مقایسه کنند',
    'بر اساس بودجه، بهترین انتخاب را داشته باشند',
    'برندهای مختلف را بررسی کنند',
    'برای خرید عمده یا جزئی تصمیم دقیق‌تری بگیرند',
    'از تغییرات بازار و نوسانات قیمت مطلع شوند',
  ],
  closing:
    'صفحه لیست قیمت محصولات مرجع کاملی برای مشاهده قیمت‌های به‌روز تجهیزات نظارتی و امنیتی است. اگر به دنبال قیمت دوربین مداربسته، قیمت هارد وسترن دیجیتال، لیست قیمت داهوا، لیست قیمت کلارنت، لیست قیمت مکسرون، لیست قیمت دزدگیر کلاسیک، لیست قیمت OSTCAM و لیست قیمت تیتان هستید، این صفحه می‌تواند کامل‌ترین منبع برای شما باشد.',
};

export const ABOUT_TEXT = {
  title: 'امنیت دید؛ تأمین‌کننده تجهیزات حفاظتی و نظارتی',
  paragraphs: [
    'امنیت دید با بیش از ۱۵ سال تجربه در ارائه راهکارهای نظارتی، یکی از پیشروترین تأمین‌کنندگان دوربین‌های مداربسته در مشهد و خراسان رضوی است.',
    'به عنوان نماینده انحصاری برندهای کلارنت، پیناکل، تیتان، برایتون، داهوا و هایک ویژن، مجموعه ما همواره در تلاش است تا با ارائه جدیدترین فناوری‌های نظارتی، امنیت و آرامش را برای مشتریان خود به ارمغان بیاورد.',
    'محصولات ما شامل دوربین‌های مداربسته آنالوگ و تحت شبکه، دستگاه‌های ضبط تصویر (DVR و NVR)، لنزهای تخصصی، تجهیزات ذخیره‌سازی و لوازم جانبی مرتبط می‌باشد.',
    'کیفیت تصویر بالا، عملکرد پایدار و فناوری‌های پیشرفته، از ویژگی‌های اصلی سیستم‌های نظارتی ارائه‌شده توسط امنیت دید است. شما می‌توانید به‌صورت حضوری، تلفنی و اینترنتی از خدمات مشاوره‌ای ما بهره‌مند شده و با اطمینان، بهترین راهکارهای نظارتی را برای محیط خود انتخاب کنید.',
  ],
};

export const HUB_PAGES = {
  'cctv-camera': {
    slug: 'cctv-camera',
    title: 'دوربین مداربسته',
    titleEn: 'CCTV Camera',
    hero: ['/assets/images/hub-titan.jpg', '/assets/images/hub-clarent.jpg'],
    tiles: [
      { title: 'دوربین مداربسته', sub: 'تحت شبکه', to: '/shop/protection-and-security-systems/cctv-camera/network-equipment/cctv-network', image: '/assets/images/hub-ip.webp' },
      { title: 'NVR', sub: 'تحت شبکه', to: '/shop/protection-and-security-systems/cctv-camera/network-equipment/nvr', image: '/assets/images/hub-nvr.webp' },
      { title: 'دوربین مداربسته', sub: 'آنالوگ', to: '/shop/protection-and-security-systems/cctv-camera/analog-equipment/analog-cctv', image: '/assets/images/hub-analog.webp' },
      { title: 'DVR', sub: 'آنالوگ', to: '/shop/protection-and-security-systems/cctv-camera/analog-equipment/dvr', image: '/assets/images/hub-dvr.webp' },
    ],
    sections: [
      { title: 'دوربین مداربسته تحت شبکه', slug: 'cctv-network', to: '/shop/protection-and-security-systems/cctv-camera/network-equipment/cctv-network' },
      { title: 'NVR', slug: 'nvr', to: '/shop/protection-and-security-systems/cctv-camera/network-equipment/nvr' },
      { title: 'دوربین مداربسته آنالوگ', slug: 'analog-cctv', to: '/shop/protection-and-security-systems/cctv-camera/analog-equipment/analog-cctv' },
      { title: 'DVR', slug: 'dvr', to: '/shop/protection-and-security-systems/cctv-camera/analog-equipment/dvr' },
    ],
    essentials: [
      { title: 'فیش', to: '/shop/protection-and-security-systems/peripheral-equipment/plug' },
      { title: 'کارت حافظه', to: '/shop/protection-and-security-systems/peripheral-equipment/memory-stick' },
      { title: 'هارد', to: '/shop/protection-and-security-systems/peripheral-equipment/hard-disk' },
      { title: 'مودم', to: '/shop/protection-and-security-systems/network/modem' },
      { title: 'باکس', to: '/shop/protection-and-security-systems/peripheral-equipment/box' },
      { title: 'سوئیچ شبکه', to: '/shop/protection-and-security-systems/network/switch' },
      { title: 'شبکه', to: '/shop/protection-and-security-systems/network' },
    ],
    seoTitle: 'خرید و انتخاب دوربین مداربسته در مشهد',
    seo: [
      'برای انتخاب دوربین مداربسته در مشهد، ابتدا مشخص کنید تصویر را برای چه کاری می‌خواهید: مشاهده رفت‌وآمد، بررسی صندوق فروشگاه، نظارت بر ورودی ساختمان یا ثبت جزئیات یک محوطه. تعداد دوربین‌ها، فاصله سوژه، روشنایی شب و مدت نگهداری تصاویر، روی انتخاب تجهیزات و هزینه نهایی اثر دارند. در امنیت دید می‌توانید مدل‌های مناسب پروژه خود در مشهد و استان خراسان رضوی را بررسی کنید و پیش از خرید، مشخصات محل و نیازتان را برای مشاوره مطرح کنید.',
      'قیمت دوربین فقط بخشی از هزینه پروژه است. دستگاه ضبط، فضای ذخیره‌سازی، کابل، تغذیه و شرایط اجرا نیز باید در برآورد دیده شوند. در سیستم IP، انتخاب دستگاه NVR و در سیستم آنالوگ، انتخاب دستگاه DVR باید با دوربین‌ها هماهنگ باشد. برای تکمیل مجموعه، تجهیزات جانبی دوربین مداربسته را جداگانه بررسی کنید.',
    ],
  },
  'burglar-alarm': {
    slug: 'burglar-alarm',
    title: 'دزدگیر اماکن',
    titleEn: 'Burglar Alarm',
    hero: ['/assets/images/hub-alarm.jpg'],
    tiles: [
      { title: 'پنل دزدگیر', sub: 'کلاسیک و تیتان', to: '/shop/protection-and-security-systems/burglar-alarm/alarm-panel', image: '/assets/images/tile-alarm-panel.png' },
      { title: 'سنسور دزدگیر', sub: 'چشم و مگنت', to: '/shop/protection-and-security-systems/burglar-alarm/alarm-sensor', image: '/assets/images/tile-alarm-sensor.png' },
      { title: 'سیرن فلاشر', sub: 'هشدار صوتی و نوری', to: '/shop/protection-and-security-systems/burglar-alarm/siren-flasher', image: '/assets/images/tile-alarm-siren.png' },
      { title: 'کیپد دزدگیر', sub: 'کنترل و تنظیم', to: '/shop/protection-and-security-systems/burglar-alarm/alarm-keypad', image: '/assets/images/tile-alarm-keypad.png' },
      { title: 'آژیر بلندگو', sub: 'هشدار صوتی', to: '/shop/protection-and-security-systems/burglar-alarm/loudspeaker-siren', image: '/assets/images/tile-alarm-loudspeaker.png' },
      { title: 'باطری دزدگیر', sub: 'باتری پشتیبان', to: '/shop/protection-and-security-systems/burglar-alarm/battery', image: '/assets/images/tile-alarm-battery.png' },
    ],
    sections: [
      { title: 'پرفروش‌ترین دزدگیرها', slug: 'burglar-alarm', to: '/shop/protection-and-security-systems/burglar-alarm' },
      { title: 'سنسور دزدگیر', slug: 'alarm-sensor', to: '/shop/protection-and-security-systems/burglar-alarm/alarm-sensor' },
      { title: 'پنل مرکزی دزدگیر', slug: 'alarm-panel', to: '/shop/protection-and-security-systems/burglar-alarm/alarm-panel' },
    ],
    seoTitle: 'خرید سیستم دزدگیر اماکن',
    seo: [
      'یک سیستم دزدگیر کارآمد از چند بخش تشکیل می‌شود: پنل مرکزی، سنسورها (چشم حرکتی، مگنت درب و پنجره، سنسور شکست شیشه)، آژیر و فلاشر، کیپد و ریموت. انتخاب هر بخش باید با ابعاد ملک، تعداد ورودی‌ها و امکان سیم‌کشی هماهنگ باشد.',
      'برای دزدگیر بی‌سیم، برد ارتباط سنسورها با پنل و عمر باتری آن‌ها اهمیت دارد. در دزدگیر باسیم، مسیر کابل و محل نصب سنسورها تعیین‌کننده است. برای انتخاب دقیق، متراژ، تعداد اتاق‌ها و ورودی‌های ملک را برای کارشناسان امنیت دید مطرح کنید.',
    ],
  },
  'fire-alarm-system': {
    slug: 'fire-alarm-system',
    title: 'اعلام حریق',
    titleEn: 'Fire Alarm System',
    hero: ['/assets/images/hub-fire.jpg'],
    tileGroups: [
      {
        title: 'اعلام حریق متعارف',
        tiles: [
          { title: 'پنل متعارف', sub: 'پنل کنترل', to: '/shop/protection-and-security-systems/fire-alarm/conventional-fire-alarm/conventional-fire-alarm-panel', image: '/assets/images/tile-fire-conv-panel.png' },
          { title: 'دتکتور متعارف', sub: 'دود و حرارت', to: '/shop/protection-and-security-systems/fire-alarm/conventional-fire-alarm/conventional-fire-alarm-detector', image: '/assets/images/tile-fire-conv-detector.png' },
          { title: 'سایر تجهیزات', sub: 'شستی و آژیر', to: '/shop/protection-and-security-systems/fire-alarm/conventional-fire-alarm/other-equipment-conventional-fire-alarm', image: '/assets/images/tile-fire-conv-other.webp' },
        ],
      },
      {
        title: 'اعلام حریق آدرس پذیر',
        tiles: [
          { title: 'پنل آدرس پذیر', sub: 'پنل کنترل', to: '/shop/protection-and-security-systems/fire-alarm/addressable-fire-alarm/addressable-fire-alarm-panel', image: '/assets/images/tile-fire-addr-panel.png' },
          { title: 'دتکتور آدرس پذیر', sub: 'دود و حرارت', to: '/shop/protection-and-security-systems/fire-alarm/addressable-fire-alarm/addressable-fire-alarm-detector', image: '/assets/images/tile-fire-addr-detector.png' },
          { title: 'سایر تجهیزات', sub: 'ماژول و شستی', to: '/shop/protection-and-security-systems/fire-alarm/addressable-fire-alarm/other-equipment-addressable-fire-alarm', image: '/assets/images/tile-fire-addr-other.png' },
        ],
      },
    ],
    sections: [
      { title: 'تجهیزات اعلام حریق متعارف', slug: 'conventional-fire-alarm', to: '/shop/protection-and-security-systems/fire-alarm/conventional-fire-alarm' },
      { title: 'اعلام حریق آدرس‌پذیر', slug: 'addressable-fire-alarm', to: '/shop/protection-and-security-systems/fire-alarm/addressable-fire-alarm' },
      { title: 'پنل اعلام حریق متعارف', slug: 'conventional-panel', to: '/shop/protection-and-security-systems/fire-alarm/conventional-fire-alarm/conventional-fire-alarm-panel' },
    ],
    seoTitle: 'سیستم اعلام حریق متعارف و آدرس‌پذیر',
    seo: [
      'سیستم اعلام حریق متعارف هر منطقه (Zone) را به‌صورت گروهی نشان می‌دهد و برای ساختمان‌های کوچک و متوسط انتخاب اقتصادی‌تری است. در سیستم آدرس‌پذیر، هر دتکتور نشانی مستقل دارد و محل دقیق حادثه روی پنل نمایش داده می‌شود.',
      'انتخاب بین این دو، به ابعاد ساختمان، تعداد طبقات، الزامات طرح و بودجه پروژه بستگی دارد. برای پروژه‌های اداری، تجاری و صنعتی، پیش از خرید، نقشه و تعداد نقاط موردنیاز را بررسی کنید.',
    ],
  },
  'solar-panel-mashhad': {
    slug: 'solar-panel-mashhad',
    title: 'تجهیزات انرژی خورشیدی و برق اضطراری',
    titleEn: 'Solar Energy and Backup Power',
    hero: ['/assets/images/hub-solar.jpg'],
    tileGroups: [
      {
        title: 'تجهیزات تولید برق خورشیدی',
        tiles: [
          { title: 'پنل خورشیدی', sub: 'مونو و پلی کریستال', to: '/shop/solar-energy-and-backup-power/solar-panel', image: '/assets/images/tile-solar-panel.jpg' },
          { title: 'پکیج برق خورشیدی', sub: 'آماده نصب', to: '/shop/solar-energy-and-backup-power/solar-power-package', image: '/assets/images/tile-solar-package.jpg' },
          { title: 'استراکچر خورشیدی', sub: 'سازه و نگهدارنده', to: '/shop/solar-energy-and-backup-power/solar-structure', image: '/assets/images/tile-solar-structure.jpg' },
        ],
      },
      {
        title: 'تجهیزات ذخیره و تبدیل انرژی',
        tiles: [
          { title: 'اینورتر خورشیدی', sub: 'آنگرید و آفگرید', to: '/shop/solar-energy-and-backup-power/solar-inverter', image: '/assets/images/tile-solar-inverter.jpg' },
          { title: 'باتری خورشیدی', sub: 'ذخیره‌سازی انرژی', to: '/shop/solar-energy-and-backup-power/solar-battery', image: '/assets/images/tile-solar-battery.png' },
          { title: 'یو پی اس UPS', sub: 'برق اضطراری', to: '/shop/solar-energy-and-backup-power/ups', image: '/assets/images/tile-solar-ups.jpg' },
        ],
      },
    ],
    sections: [
      { title: 'جدیدترین تجهیزات خورشیدی', slug: 'solar-energy', to: '/shop/solar-energy-and-backup-power' },
      { title: 'پکیج برق خورشیدی', slug: 'solar-power-package', to: '/shop/solar-energy-and-backup-power/solar-power-package' },
      { title: 'پنل خورشیدی', slug: 'solar-panel', to: '/shop/solar-energy-and-backup-power/solar-panel' },
      { title: 'استراکچر خورشیدی', slug: 'solar-structure', to: '/shop/solar-energy-and-backup-power/solar-structure' },
    ],
    seoTitle: 'خرید پنل و پکیج برق خورشیدی',
    seo: [
      'برای یک سیستم خورشیدی، تعیین مصرف روزانه (کیلووات‌ساعت)، توان پنل موردنیاز، ظرفیت باتری و توان اینورتر چهار عدد کلیدی هستند. اگر هدف کاهش قبض برق است، سیستم آنگرید مناسب‌تر است؛ و اگر نیاز به برق در محل بدون شبکه دارید، سیستم آفگرید با باتری انتخاب می‌شود.',
      'پکیج‌های آماده برق خورشیدی برای ویلا، باغ و کاربردهای کوچک انتخاب سریع‌تری هستند. برای پروژه‌های بزرگ‌تر، محاسبه دقیق بار مصرفی و شرایط تابش محل نصب ضروری است.',
    ],
  },
};

export const CONTACT_TEXT = {
  title: 'تماس با امنیت دید',
  lead: 'برای مشاوره و بررسی نیازهای پروژه‌تان، با ما تماس بگیرید. کارشناسان امنیت دید هفت روز هفته میزبان صدای گرم شما هستند.',
  formTitle: 'برای دریافت مشاوره و یا خرید، لطفاً شماره خود را وارد کنید',
  formNote: 'کارشناسان ما در اولین فرصت با شما تماس می‌گیرند.',
  ctaTitle: 'برای مشاوره و خرید با ما تماس بگیرید!',
};

export const INSTALLMENT_TEXT = {
  title: 'خرید اقساطی از امنیت دید',
  lead: 'برای خرید اقساطی تجهیزات نظارتی و امنیتی، اطلاعات خود را ثبت کنید تا کارشناسان ما شرایط را بررسی کنند.',
  image: '/assets/images/banner-installment.jpg',
};

export const DEALERSHIP_TEXT = {
  title: 'درخواست نمایندگی فروش',
  lead: 'اگر علاقه‌مند به همکاری و دریافت نمایندگی فروش محصولات امنیت دید هستید، فرم زیر را تکمیل کنید.',
  image: '/assets/images/banner-dealership.jpg',
};
