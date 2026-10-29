import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://starkwebdev.github.io/christmas-list/
export default defineConfig({
  base: '/christmas-list/',
  plugins: [react()],
})
