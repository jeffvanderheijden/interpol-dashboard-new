import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist',
  },
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem')
    },
    origin: 'https://localhost:5173'
  }
})
