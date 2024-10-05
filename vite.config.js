import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Base URL for GitHub Pages (use your repository name)
  build: {
    outDir: 'dist', // Default output directory for Vite is 'dist', let's stick with that for now
  },
  server: {
    open: true,  // Automatically opens the browser
    port: 3000,  // Dev server port
  }
})
