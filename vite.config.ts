import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        ['@swc/plugin-styled-components', { displayName: false, ssr: true }],
      ],
    }),
    viteCompression(),
    ViteImageOptimizer({
      cache: true,
      cacheLocation: 'cache-images',
      test: /(?<!\$)\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '#', replacement: resolve(__dirname, 'src/components') },
    ],
  },
  base: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : void 0,
  build: {
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
