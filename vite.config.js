import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ana sayfa
        cv: resolve(__dirname, 'cv/index.html'), // CV sayfan
      },
    },
  },
})
