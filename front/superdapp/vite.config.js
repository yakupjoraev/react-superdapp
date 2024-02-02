import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
// import manifestSRI from 'vite-plugin-manifest-sri'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    nodePolyfills()
    // manifestSRI(),
  ],
  
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    }
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "index.html",
        background: "src/extension/background.js",
      },
      output: {
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
    },
    },
  },
});