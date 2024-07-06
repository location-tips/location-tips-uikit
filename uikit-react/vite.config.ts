/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

const entities = {};

glob.sync(['uikit-react/index.ts', 'uikit-react/src/lib/**/*.{ts,tsx}'], {
  ignore: ['uikit-react/src/lib/**/*.stories.{ts,tsx}', 'uikit-react/src/lib/**/*.test.{ts,tsx}', 'uikit-react/src/lib/**/*.d.ts'],
}).forEach(file => { 
  // console.log('File:', file);
  const relativePath = file.replace(/.*uikit-react\//, '');
  const f = fileURLToPath(new URL(relativePath, import.meta.url));
  const alias = relativePath;

  entities[alias] = [f];
});

console.log('Entities:', entities);

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
      rollupTypes: true,
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
    outDir: '../dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      // entry: './src/lib/index.ts',
      entry: entities,
      name: 'uikit-react',
      fileName: (format) => `index.${format}.js`,
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"],
    },
    target: 'esnext',
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
      input: Object.keys(entities),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        preserveModules: true,
        // preserveModulesRoot: '.',
      }
    },
  },
});
