import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://christmas.jaredtstark.com/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
