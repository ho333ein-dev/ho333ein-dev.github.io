/**
 * GitHub Pages has no server-side rewrite, so a deep link such as
 *   /amaniat-did/product/some-camera
 * asks Pages for a file that does not exist and returns its 404 page.
 *
 * The standard workaround is to ship a copy of the SPA shell as `404.html`:
 * Pages serves it for any unknown path, the app boots, and because the asset
 * URLs inside the shell are absolute and already carry the base prefix, the
 * bundle loads from the correct sub-path. React Router then sees the real
 * pathname and renders the right route.
 *
 * Run after `vite build`; see the `build` script in package.json.
 */
import { copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const index = join(root, 'dist', 'index.html');
const notFound = join(root, 'dist', '404.html');

if (!existsSync(index)) {
  console.error('[make-404] dist/index.html not found — run vite build first.');
  process.exit(1);
}

copyFileSync(index, notFound);
console.log('[make-404] dist/404.html written for SPA deep links.');
