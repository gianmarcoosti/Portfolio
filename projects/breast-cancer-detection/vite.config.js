import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    // Add this to ensure proper file naming
    emptyOutDir: true,
  },
    fs: {
      allow: ['..'],
    },
})