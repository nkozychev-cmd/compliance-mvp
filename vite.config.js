import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Automatically switch base for local vs. GitHub Pages
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/compliance-mvp/' : '/',
  plugins: [react()],
})
