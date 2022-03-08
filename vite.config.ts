import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgIcons from 'vite-plugin-svg-icons'
import * as path from 'path'

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
      port: Number(process.env.VITE_PORT) || 3000,
      proxy: {
        '/graphql': {
          target: process.env.VITE_API_PATH,
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
}
