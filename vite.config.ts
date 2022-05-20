import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(mode || 'production', process.cwd()) }

  const port = Number(process.env.VITE_PORT) || 3000

  return defineConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src')
      }
    },
    server: {
      port
    },
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, './src/svg')],
        symbolId: '[name]'
      }),
      VitePWA({
        manifest: {
          theme_color: '#fff',
          icons: [
            {
              src: 'assets/manifest-icon-192.maskable.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'assets/manifest-icon-192.maskable.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable'
            },
            {
              src: 'assets/manifest-icon-512.maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'assets/manifest-icon-512.maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        workbox: {
          cleanupOutdatedCaches: false
        }
      })
    ]
  })
}
