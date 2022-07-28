import { createProxyMiddleware } from 'http-proxy-middleware'

export const apiProxy = createProxyMiddleware({
  target: process.env.VITE_SERVER_PATH,
  changeOrigin: true,
  logLevel: process.env.NODE_ENV !== 'production' ? 'debug' : 'error',
  pathRewrite: { '^/api': '' }
})
