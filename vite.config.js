import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Vite Configuration
 * ------------------
 * Supporting React and the latest Tailwind CSS Vite plugin.
 * Optimized for modern UI/UX projects like QurbaniHat.
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Development server configuration
  server: {
    port: 3000,
    open: true, // Run করার সাথে সাথে ব্রাউজারে অটো ওপেন হবে
  },
  // Build optimizations for clean deployment
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})