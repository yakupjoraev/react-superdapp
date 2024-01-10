import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
// import manifestSRI from 'vite-plugin-manifest-sri'



// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    // manifestSRI(),
  ],

  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },

  // build: {
  //   // generate .vite/manifest.json in outDir
  //   manifest: true,
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     // input: '/index.html',
  //   },
  // },

})
