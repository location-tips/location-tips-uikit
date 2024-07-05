/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import svgr from 'vite-plugin-svgr';
// import { extname, relative } from 'path'
// import { fileURLToPath } from 'node:url'
// import { glob } from 'glob'

// const entities = glob.sync(['uikit/index.ts', 'uikit/*.{ts,tsx}']).map(file => [
//   // The name of the entry point
//   // lib/nested/foo.ts becomes nested/foo
//   relative(
//     'uikit',
//     file.slice(0, file.length - extname(file).length)
//   ),
//   // The absolute path to the entry file
//   // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
//   fileURLToPath(new URL(file, import.meta.url)).replace("uikit-react/", "")
// ]);

// console.log(entities);

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
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    alias: {
      '@uikit': path.resolve(__dirname, './src/lib'),
    },
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../dist/uikit-react',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: './src/lib/index.ts',
      name: 'react',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      // input: Object.fromEntries(entities),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    },
  },
});
