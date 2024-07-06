/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/uikit-react',

  plugins: [
    react(),
    svgr(),
    nxViteTsPaths(),
    libInjectCss(),
    dts({
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      outputDir: path.join(__dirname, '../dist'),
      insertTypesEntry: true,
      include: ['../uikit-react/src/**/*'],
    }),
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
      // name: 'uikit-react',
      // fileName: (format) => `index.${format}.js`,
      // fileName: (format, entryName) => entryName.replace('uikit-react/src/', ''),
      formats: ["es"],
    },
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
      output: {
        // assetFileNames: '[name][extname]',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.includes('module.css')) return assetInfo.name.replace('module.css', 'css').replace('uikit-react/src/', '');
          return assetInfo.name?.replace('uikit-react/src/', '') ?? '[name].[ext]';
        },
        chunkFileNames: (chunkInfo) => `${chunkInfo.name?.replace('uikit-react/src/', '') ?? '[name]'}.js`,
        entryFileNames: (chunkInfo) => `${chunkInfo.name?.replace('uikit-react/src/', '') ?? '[name]'}.js`,
        // globals: {
        //   "react": "React",
        //   "react-dom": "ReactDOM",
        // },
        preserveModules: true,
      }
    },
  },
});
