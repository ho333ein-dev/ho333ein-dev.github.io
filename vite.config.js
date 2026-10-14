import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* Asset URLs inside the app are root-absolute ("/assets/images/..."), which is
   why this site is published as a GitHub Pages *user* site
   (https://<user>.github.io/) rather than a project site under /<repo>/.
   At the domain root, "/assets/..." resolves to the site root and nothing has
   to be rewritten — see README for what a move to a sub-path would require.

   The workflow can still override the base: it passes the Pages `base_path`
   output, which is "/" for a user site. */
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 5000,
  },
});
