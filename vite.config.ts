import { defineConfig, loadEnv } from 'vite'
import React from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  return {
    plugins: [
      React(),
    ],
    server: {
      port: Number(env.VITE_APP_PORT),
      host: true,
    },
    base: '/me/',
  }
})
