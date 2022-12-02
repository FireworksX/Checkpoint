import { createProxyMiddleware } from 'http-proxy-middleware'

export const gqlProxy = createProxyMiddleware({
  target: process.env.VITE_GQL_PATH,
  changeOrigin: true,
  logLevel: process.env.NODE_ENV !== 'production' ? 'debug' : 'error',
  pathRewrite: { '^/graphql': '' }
})
