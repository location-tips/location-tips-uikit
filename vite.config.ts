/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/uikit-react',

  plugins: [
    react(),
    svgr(),
    libInjectCss(),
  ],

  // resolve: {
  //   alias: {
  //     '@uikit': path.resolve(__dirname, './src'),
  //   },
  // },

  build: {
    outDir: '../dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: './src/index.ts',
      name: '@location-tips/location-tips-uikit',
      formats: ['es'],
    },
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.includes('module.css'))
            return assetInfo.name
              .replace('module.css', 'css')
              .replace('src/', '');
          return (
            assetInfo.name?.replace('src/', '') ?? '[name].[ext]'
          );
        },
        chunkFileNames: (chunkInfo) =>
          `${chunkInfo.name?.replace('src/', '') ?? '[name]'}.js`,
        entryFileNames: (chunkInfo) =>
          `${chunkInfo.name?.replace('src/', '') ?? '[name]'}.js`,
        preserveModules: true,
      },
    },
  },
});
