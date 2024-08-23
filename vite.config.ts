import { defineConfig, loadEnv } from 'vite'
import React from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      React(),
    ],
    base: '/me/',
    build: {
      outDir: './docs/',
    },
  }
})
