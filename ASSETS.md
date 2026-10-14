# Static assets (canonical location)

This file documents the `public/assets/` directory convention for this project.

All local images, videos, and fonts referenced by runtime code MUST live under
`public/assets/`. Vite copies everything in `public/` verbatim into the
production bundle root, so these files survive `build` + publish.

## Layout

```
public/assets/
├── images/          # all site images (hero, logo, products, avatars, ...)
│   └── placeholder.svg
├── videos/          # local video files (optional)
└── fonts/           # self-hosted fonts (optional)
```

## Reference rule (single canonical form)

Always reference assets with a **root-absolute URL path** — leading slash, no
`public/` prefix:

```jsx
<img src="/assets/images/brand-logo.png" alt="Logo" />
```

```css
.hero { background-image: url('/assets/images/hero-banner.jpg'); }
```

## Never do

- `src="assets/images/x.png"` — relative path; breaks on nested routes and CDN sub-paths
- `src="public/assets/images/x.png"` — `public/` is not part of the served URL
- `src="../assets/x.png"` / `./assets/x.png` — same relative-path breakage
- placing images in `<project>/assets/` or `src/assets/` — not copied into `dist/`
  (unless explicitly `import`-ed, which this project convention does not use)

## Replacing an image? Rename it

Files under `public/` are served without content hashes, so CDN edges and
browsers cache them by URL. Overwriting a file with new content under the
**same name** can keep serving the stale image until caches expire.

When replacing an existing image, save it under a **new filename** (e.g.
`brand-logo-v2.png` or a short content hash suffix) and update the single
code reference. Never overwrite an existing file in place with different
content.

## Image Manifest

| Source | Count | Where | Notes |
| --- | --- | --- | --- |
| Reference-site mirror (mahancctv.com) | 502 product images | `public/assets/images/p-<hash>-hd.webp` | Rebuilt from the pristine originals by `../assets_sharp.py`: white margins trimmed (498 of 502), re-framed on a 1000 px square canvas at 0.92 fill, LANCZOS resize + `UnsharpMask(radius=1.6, percent=115, threshold=3)` (452 were upscaled, median 2.7×), then watermarked. Every file is exactly 1000 px wide, median 36 KB, 18 MB total — the earlier 700 px / ~6 KB pass is superseded and its `-hi` files were deleted. |
| Reference-site mirror — curated art | ~60 | `public/assets/images/*` | Hero banners (5), notice bar (2), 3 hub heroes, 18 hub tiles, category tiles and brand logos. |
| Pristine originals (never served) | 502 + curated | `../asset-originals/` (outside the project) | Un-watermarked masters kept for asset regeneration only. They are deliberately outside `public/` so they are never published. |
| Self-hosted fonts | 5 | `public/assets/fonts/Vazirmatn-{Regular,Medium,SemiBold,Bold,ExtraBold}.woff2` | Vazirmatn, `font-display: swap`, referenced from `src/styles.css`. No external font CDN is used. |
| Hero slides (user-supplied artwork) | 5 + 5 small | `public/assets/images/hero-{1..5}[-sm].webp` | The five slides are the client's own artwork, extracted at native resolution from the 5-in-1 sheet he supplied and AI-upscaled to a 2048 px master (`../media-output/img-*.png`). `../_hero_canvas.py` then composes each master onto one common **2048 × 992** canvas (ratio 2.0645) — the photograph is placed whole and un-cropped, full width, and any remaining height is closed with a blurred, dimmed, feathered copy of the same artwork plus a soft navy veil, so the frame is never empty and the frame height never changes between slides. Published at WebP q95 (full) / q92 (small). Slides 3–5 needed the extension (170 px, 170 px, 304 px); slides 1–2 are native 2.0645. |
| **AI-generated images** | **0** | — | Per the explicit user instruction, no imagery is generated. Every image is mirrored from the reference site, or — for the five hero slides only — is the client's own supplied artwork, AI-**upscaled** (never generated) to remove the softness of the source sheet. |

### Watermark policy

Product images carry a bottom-LEFT in-image wordmark in brand blue `#0C4375`,
scaled to roughly 52 % of the image width, with a faint light halo, sitting about
2.2 % in from the bottom-left corner. It is placed away from the product's centre
so the customer's view of the item stays clear, and it identifies the image as
this site's own asset so search engines do not treat it as an unmodified copy.

### Regeneration

`../assets_sharp.py` (workspace root) is the current pass and supersedes
`../assets_upgrade.py`. It reads each pristine original from
`../asset-originals/p-<md5>.<ext>`, trims the white surround, re-frames and
sharpens on a 1000 px canvas, re-burns the watermark, writes
`p-<hash>-hd.webp`, and repoints `imageLocal` / `imageFullLocal` in
`src/data/products.json` (with `imageQuality: "trimmed+upscaled+watermark"`).
The pass is resumable and skips files that already exist.
