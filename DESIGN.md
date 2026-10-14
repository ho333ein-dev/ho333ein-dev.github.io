---
version: alpha
name: امنیت دید — AMANIAT DID
description: "Visual design system for a faithful Persian RTL security-equipment commerce replication, preserving the reference information architecture while refining palette and motion."
colors:
  primary: "#0C4375"
  primary-deep: "#082E52"
  primary-soft: "#EAF4FA"
  secondary: "#1D8FA6"
  accent-sale: "#C90051"
  accent-sale-soft: "#FCE8F0"
  accent-warm: "#F2A93B"
  neutral-0: "#FFFFFF"
  neutral-50: "#FAFAFA"
  neutral-100: "#F4F6F8"
  neutral-200: "#E6EBEF"
  neutral-400: "#A1AAB3"
  neutral-600: "#505050"
  neutral-800: "#252B31"
  on-primary: "#FFFFFF"
  on-sale: "#FFFFFF"
  success: "#1B7A4B"
  warning: "#8A5700"
  error: "#B42318"
  focus: "#F2A93B"
typography:
  display-xl:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  display-lg:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  heading-lg:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0
  heading-md:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: 0
  heading-sm:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: 0
  body-lg:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0
  body-md:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0
  body-sm:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  label-md:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: 0
  label-sm:
    fontFamily: "IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  hairline: 1px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  page-gutter: 32px
  mobile-gutter: 20px
  card-gap: 12px
components:
  page:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-600}"
    direction: rtl
    maxWidth: 1280px
  header:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-800}"
    height: 72px
    mobileHeight: 67px
    boxShadow: "0 2px 12px -5px rgba(32, 45, 55, 0.28)"
  notice-bar:
    backgroundColor: "{colors.accent-sale}"
    textColor: "{colors.on-sale}"
    height: 24px
  section-heading:
    typography: "{typography.heading-lg}"
    textColor: "{colors.neutral-800}"
    borderColor: "{colors.neutral-200}"
    padding: "0 0 12px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  button-sale:
    backgroundColor: "{colors.accent-sale}"
    textColor: "{colors.on-sale}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: "0 20px"
  icon-button:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    width: 44px
    height: 44px
  category-tile:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-800}"
    rounded: "{rounded.md}"
    padding: 16px
    minHeight: 144px
  product-card:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-800}"
    rounded: "{rounded.sm}"
    padding: 10px
    minHeight: 280px
    borderColor: "{colors.neutral-100}"
  product-price:
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
  filter-panel:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-600}"
    rounded: "{rounded.md}"
    padding: 20px
    borderColor: "{colors.neutral-200}"
  input:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-800}"
    rounded: "{rounded.sm}"
    height: 44px
    borderColor: "{colors.neutral-200}"
  cta-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: 32px
  accordion:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-800}"
    rounded: "{rounded.sm}"
    padding: 16px
    borderColor: "{colors.neutral-200}"
---

## Overview

امنیت دید (AMANIAT DID) is a precise, dependable Persian security-equipment shop: calm, technical and approachable rather than flashy. The design keeps the reference's predominantly white catalog canvas, RTL reading order, slim colored notice strip, compact header, full-width hero, icon-led category tiles, dense product carousels, project proof, brand rail, editorial cards and multi-column footer. The supplied brand deviation is expressed only as a typographic lockup: use a bold Persian wordmark «امنیت دید» paired with the Latin descriptor “AMANIAT DID”; do not use a bitmap logo.

The reference renders `IRANSansnum` at 12px body text, with dark blue action controls, near-white page background, pale card surfaces, low-contrast dividers and a vivid magenta/pink notice or sale accent. The refined tokens retain those color directions but improve tonal separation: deep blue carries trust and actions, teal is a restrained information accent, magenta is reserved for sale/notice emphasis, and amber is reserved for focus and recommendation cues. Normal text must maintain at least 4.5:1 contrast; large text and UI labels must be checked separately.

### Reference fidelity notes

- **Global shell:** Reproduce the thin top notice bar, white sticky header, RTL logo/actions arrangement, social and cart/account affordances, mega menu trigger, and the generous white/near-white page field. On the observed mobile surface the header is 67px tall, with Instagram, cart badge, account, wordmark and hamburger controls; preserve this mobile-only compact arrangement.
- **Home hero:** Preserve the edge-to-edge slider with five slides, pagination dots and previous/next controls. Desktop uses a centered image inside a wide stage; mobile allows the hero to become a full-bleed, swipeable banner with controls kept at 44px minimum targets.
- **Category discovery:** Preserve the six horizontally scrollable quick category tiles, Persian title, “+N محصول” count and “مشاهده” affordance, followed by four large illustrated category feature tiles. On mobile the six-tile rail remains horizontal rather than collapsing into a dense grid.
- **Product merchandising:** Preserve section title rules, “مشاهده همه” links, six-item desktop carousels and two-column mobile product cards. Observed product cards use a white surface, large centered product image, compact Persian title, price plus «تومان», and a small cart action at the lower edge.
- **Proof and content:** Preserve the Persian project table, photo gallery, consultation CTA with support character and phone number, twelve-brand strip, blog row, installment/dealership promotions, store/address block, trust/payment badges and footer link columns.
- **Inner commerce surfaces:** Use the same breadcrumb, dense listing rhythm, filter sidebar, sort control, 3–4 column desktop grid, product detail image/spec/price hierarchy, tabbed information, review bars, related carousel, and mobile sticky add-to-cart bar across the requested shop and product routes.
- **Editorial and utility surfaces:** Preserve the blog card grid and long Persian article measure, software cards with date and «مشاهده و دانلود», downloadable price-list cards, FAQ accordions and heading hierarchy on category hubs, and deliberately designed search/account/cart/contact/404 states.
- **Intentional modernization:** Only the palette tonal scale, subtle gradient/elevation treatment and the motion system are modernized. The information architecture, section order, RTL behavior, card anatomy, component set, density, Persian copy length and route surface coverage remain byte-faithful to the reference theme.

## Colors

The base is `neutral-50` (#FAFAFA), matching the observed page field, with `neutral-0` cards that make product images read cleanly. The reference action blue was measured from rendered controls at approximately `rgb(12, 67, 117)`; it is preserved as `primary` #0C4375. Use `primary-deep` for hover and high-emphasis headings, never as a page-wide fill. The observed vivid top-strip family becomes `accent-sale` #C90051 and is used sparingly for notice, sale badges and promotional emphasis. `secondary` teal supports category and informational accents without competing with the primary.

Maintain these roles: dark blue on white for buttons, links and strong labels; neutral-800 on neutral-50 or neutral-0 for headings; neutral-600 for body and metadata; neutral-200 for separators and field borders; success for stock; error for validation; amber focus ring. Check every Persian text pair at 4.5:1 minimum for normal text. Never put neutral-400 text on white for essential information. Prices should use primary, with Persian-friendly Latin numerals, thousands separators and the suffix «تومان».

Use gradients only as restrained atmosphere: `linear-gradient(135deg, #0C4375 0%, #1D8FA6 100%)` in the consultation CTA or a hero overlay, and `linear-gradient(180deg, #FFFFFF 0%, #F4F6F8 100%)` behind a category band. Avoid gradients on product cards or long text surfaces.

## Typography

Use a self-hosted local `IRANSansnum` family when available, with the exact fallback stack `IRANSansnum, Tahoma, 'Segoe UI', system-ui, sans-serif`. Do not reference Google Fonts, external font CDNs or remote font imports. `IRANSansnum` is grounded in the computed reference body and heading styles; Tahoma and Segoe UI provide a Persian-capable fallback.

The observed site is compact: body text is approximately 12px, section headings approximately 13–14px, and product titles are short but can wrap to two or three lines. Keep that density for commerce chrome, while allowing long Persian SEO and article copy to breathe. Use `body-md` for normal content, `body-lg` for readable long-form articles, `label-sm` for metadata, and `label-md` for prices and controls. Headlines are right-aligned in RTL, with a 1.45–1.9 line-height so Persian diacritics and realistic product names do not collide. Do not force uppercase on Persian; retain Latin model names exactly where supplied. Use tabular numerals or a stable numeral feature for prices and result counts when the local font supports it.

## Layout

Set the document direction to RTL and align text to the right by default. Use a centered desktop container with a maximum width of 1280px and 32px page gutters. At 1440px, the content should sit in a comfortable centered band with roughly 64px section spacing, 24px component gaps and 12px product-card gaps. The reference's desktop catalog feels wide and airy around the carousels but dense inside each product card; preserve that contrast.

At 390px, use 20px page gutters for ordinary sections, 12px internal carousel gaps and 16px section spacing. The header is 67px high and the product/category rails may bleed to the gutter edge to allow natural swipe. Preserve two product cards per row at approximately 175–180px each, with image areas around 150–165px and titles constrained to a minimum three-line-safe height. Never make the desktop 6-up carousel a shrunk unreadable six-up mobile row.

Desktop transformations: show full navigation/mega menu, four-column category features where available, sidebar plus grid for shop listing, 3–4 product columns, and multi-column footer. Mobile transformations: collapse navigation behind the hamburger, keep social/cart/account actions visible, use horizontal carousels for quick categories and products, stack detail columns, turn filters into a drawer or accordion, keep the product image/gallery swipeable, and pin the add-to-cart bar above the safe-area bottom inset. Tables become horizontally scrollable with a minimum readable cell width; do not squeeze Persian project names.

Hero stages use a 16:7-ish wide desktop presentation with a max inner image width near 1280px; mobile hero imagery may use a shorter 4:3-ish crop when the source requires it. Keep all interactive targets at least 44x44 CSS pixels, including icon-only controls, carousel arrows, pagination and accordion triggers. Maintain a minimum 8px separation between adjacent targets.

## Elevation & Depth

The reference is mostly flat: depth comes from white cards against #FAFAFA, pale borders, and a very restrained shadow. Use `box-shadow: 0 2px 12px -5px rgba(32, 45, 55, .28)` for the sticky header and drawer; product cards use `0 2px 12px -8px rgba(32, 45, 55, .22)` only on hover or focus. Listing filters and detail panels use a 1px neutral-200 border before adding shadow. The CTA may use a tonal gradient and one soft shadow, but avoid floating every section.

Product imagery is centered on a clean neutral-0 field with `object-fit: contain`; do not crop equipment or add artificial reflections. Gallery thumbnails use a thin primary outline when selected. Brand logos remain monochrome or low-saturation until hover, while the active/hover state may reveal primary color. Drawer overlays use a translucent deep-blue-black scrim and a white panel with a clear close target.

## Shapes

Use the restrained rounded language seen in the reference: 4px for buttons and product surfaces, 8px for tiles, filters and inputs, 12px for CTA/promo panels, and full pills only for badges, notification counters and status chips. Avoid excessive pill-shaped cards. Product cards have a crisp rectangular silhouette with a small radius, centered image, divider-free white body and an unobtrusive cart action. Category tiles may use 8px corners and a slightly stronger surface contrast.

Inputs, selects and quantity steppers are 44px high with 4px corners. Focus uses a 2px amber ring with a 2px offset, visible on both white and blue backgrounds. Disabled controls use neutral-200 fill and neutral-400 text, with no loss of semantic explanation. Error fields use error border plus adjacent Persian helper text, not color alone.

## Components

### Header, notice and mega menu

The notice bar is a slim 24px desktop accent strip and may be omitted from the visible mobile header if content priority requires; the reference mobile evidence begins with the compact white header. The header is white, sticky, lightly shadowed and visually quiet. The AMANIAT DID lockup is text-only: bold Persian «امنیت دید» with a smaller Latin “AMANIAT DID”, using primary color and no bitmap. Keep cart badge, account, social icon and hamburger within 44px targets. Mega menu opens from the right in RTL with grouped category links, a soft surface and a short downward/fade transition; close on Escape and outside click, with focus trapped while open.

### Buttons, links and controls

Primary action uses primary blue with white text; hover uses primary-deep; pressed state darkens one additional tonal step; sale action uses accent-sale only for promotion or urgent conversion. Secondary actions are white with a primary border. Links are neutral-800 or primary and gain an underline or visible color shift on hover. Sort selects, quantity steppers, search fields and price filters share the 44px input height. Keep labels explicit in Persian and expose an accessible name for icon-only controls.

### Hero, category tiles and section headings

Section headings use heading-lg or heading-md, a small icon/graphic cue where present, and a horizontal rule or quiet divider extending toward the opposite edge. “مشاهده همه” is a compact link aligned opposite the title in RTL. Category tiles pair an illustrated/icon image with a bold Persian title, product count and مشاهده affordance; the six-tile quick rail scrolls horizontally on mobile. Hero controls are overlaid but must remain high-contrast and 44px.

### Product cards and carousels

A product card is: image stage, optional sale/stock badge, Persian title with optional Latin model line, primary-toned price, «تومان», and cart/quick action at the lower edge. Preserve the reference's compact 6-up desktop carousel and two-up mobile presentation. On hover, lift the card 4px, zoom the image to 1.04 and reveal quick actions; on touch, keep actions visible without requiring hover. Show loading skeletons using neutral-100 blocks with a left-to-right shimmer that respects RTL content direction. Empty product areas use the observed Persian “متاسفانه محتوایی یافت نشد!” treatment rather than collapsing the section.

### Shop listing, filters and pagination

Use breadcrumb above the title, result count “نمایش ۱ تا ۲۴ از N محصول”, a sort dropdown with the eight requested Persian options, a filter panel for price, availability, rating and categories, then a 3–4 column grid. On mobile, move the filter into a full-width drawer/accordion and retain a visible sort control. Pagination uses 44px square targets and an unambiguous selected state.

### Product detail and sticky purchase

Keep the image gallery/zoom on one side and title, English model line, brand, code, category, bullet attributes, returns box, stock, price and quantity/add-to-cart hierarchy on the other. Use a clear installment box for Snappay wording, آماده ارسال badge, and WhatsApp/Bale contact buttons. Tabs are horizontally scrollable on mobile and become a readable stacked/segmented row on desktop. Spec tables use zebra-free borders and a scroll wrapper on small screens. The mobile sticky add-to-cart bar is white with a top border/shadow, price and primary action, above the safe area.

### Content, trust and footer

FAQ rows use the accordion token, a 44px trigger and a rotating chevron. Blog cards preserve image, Persian title, excerpt, author/date and optional rating. The project table is readable and scrollable; gallery cards use consistent aspect ratios. Brand strip is a low-contrast logo marquee/rail with 12 marks. Consultation CTA combines mascot/support character, strong Persian heading and phone action on the primary/teal gradient. Footer retains link columns, payment/trust badges, address, map links and contact information; stack into accordions on mobile.

### Motion system

- **Hero slider:** auto-advance every 5s with a 520ms `cubic-bezier(.22,.61,.36,1)` crossfade plus 16px horizontal slide; drag/swipe remains direct and interruptible. Pause on hover, keyboard focus or reduced-motion preference.
- **Section/card entrance:** on scroll, fade from 0 to 1 and translate 18px upward over 420ms using the same ease; stagger sibling cards by 60ms, capped at 360ms total. Never hide essential content until animation completes.
- **Product hover:** 180ms ease-out, translateY(-4px), image scale 1.04 and quick-action opacity 0→1. On coarse pointers, show actions without hover.
- **Mega menu:** 220ms ease-out opacity and translateY(-8px→0), with the focus ring appearing immediately; close in 160ms. Drawer scrim fades over 180ms.
- **Brand strip:** continuous 26s linear marquee on desktop and touch-scroll rail on mobile; pause on hover/focus. Keep movement subtle and never move critical copy.
- **Result-count counter:** animate from the previous count to the new count over 500ms with an ease-out step, preserving Persian-friendly digit rendering and announcing the final value to assistive technology.
- **Accordion:** height/opacity over 260ms `cubic-bezier(.2,.8,.2,1)`; chevron rotates 180° in 200ms. Keep one clear focus target.
- **Image loading:** neutral skeleton shimmer travels over 1.2s linear, pauses when hidden, and is replaced by the image with a 180ms fade.
- **Sticky header:** after 24px scroll, shrink desktop header from 72px to 60px over 220ms; preserve the 67px mobile header and only reduce internal spacing subtly.
- **Reduced motion:** under `@media (prefers-reduced-motion: reduce)`, disable autoplay, marquee, shimmer, parallax, transforms and stagger; show content immediately, use instant state changes, and retain manual carousel/accordion controls.

## Do's and Don'ts

- Do keep the document and every major page section RTL, with right-aligned Persian copy and carefully isolated Latin model strings.
- Do preserve the reference order: notice/header, hero, quick categories, features, product sections, project proof, consultation, brands, promotions, blog and footer.
- Do use the deep blue for trust and the magenta only for notice/sale emphasis; keep the refined teal and gradients subordinate.
- Do keep normal text at a minimum 4.5:1 contrast and provide a visible 2px amber focus ring with a 2px offset.
- Do make every tap target at least 44x44 CSS pixels, including carousel arrows, cart actions, pagination, filters and accordion rows.
- Do use realistic Persian lengths, long SEO paragraphs, Persian dates and prices formatted with thousands separators followed by «تومان».
- Do preserve image aspect ratio and show security equipment on clean neutral surfaces; use local/user-supplied assets rather than copying protected reference assets.
- Do test the two-column mobile product layout at 390px before adding more content.
- Don't replace the text lockup «امنیت دید / AMANIAT DID» with a bitmap logo or a remote font.
- Don't turn every panel into a pill, add ornamental neon effects, or use heavy shadows that fight the reference's clean catalog density.
- Don't use hover-only interactions on touch devices, hide the filter without a mobile trigger, or make tables unreadable by squeezing columns.
- Don't introduce a dark theme, LTR layout, generic English placeholder copy, lorem ipsum, or unrelated visual patterns.
- Don't animate essential content indefinitely; honor `prefers-reduced-motion: reduce` and pause decorative movement on focus.

## Delivered Deviations

Recorded so this spec and the build stay in step:

1. **Font.** The build self-hosts Vazirmatn (five woff2 weights under `public/assets/fonts/`) and sets `--font: Vazirmatn, Tahoma, 'Segoe UI', system-ui, sans-serif`, per the explicit requirement to use Vazir site-wide for the Iranian market. `IRANSansnum` above is superseded; no external font CDN is referenced.
2. **Header menu.** The eight top-level items, their icons and their cascading dropdowns are captured verbatim from the reference header, including leaves the reference itself leaves empty. The nested flyout opens toward the page centre (leftwards in RTL) so no panel is clipped at the viewport edge.
3. **Homepage slider.** Slide 1 is composed for this template: one headline, one short subtitle and one real catalogue photograph presented on a white product card — no scrim, no slogan, no overlay buttons. Slides 2–5 show the reference banners uncropped and clickable, with a slow drift on banner slides only.
4. **«پیشنهادات شگفت انگیز» slot omitted.** The reference's own deal slider holds no published deals and renders «متاسفانه محتوایی یافت نشد!» on mahancctv.com; the homepage leaves it out rather than copying a visibly broken widget.
5. **Product imagery.** Mirrored from the reference and rebuilt at 1000 px with a bottom-left in-image «امنیت دید» watermark (see `ASSETS.md`). No AI-generated imagery is used anywhere.
