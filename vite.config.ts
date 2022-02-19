import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgIcons from 'vite-plugin-svg-icons'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/graphql': {
        target: 'https://scores24.live',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  plugins: [
    react(),
    viteSvgIcons({
      iconDirs: [path.resolve(__dirname, './src/svg')],
      symbolId: '[name]'
    })
  ]
})
