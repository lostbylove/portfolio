import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/javascript'),
    },
  },
})