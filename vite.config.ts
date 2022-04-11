import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'


export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        })
      ]
    }
  },
  plugins: [solidPlugin()],
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill()
      ]
    },
    target: 'esnext',
    polyfillDynamicImport: false,
  }
});