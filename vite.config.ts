import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Force fresh dep optimization on dev server start to avoid stale cache issues
    force: true,
    // Pre-bundle the 2D graph lib explicitly
    include: ['react-force-graph-2d', 'force-graph']
    // Note: we intentionally do not include VR/AR variants to avoid pulling A-Frame deps
  }
})
