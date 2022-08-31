# Checkpoint

### Features

- Vite (development server + fast refresh)
- React
- SSR
- Recoil
- ESLint + Prettier
- SVG sprite
- Styled-components
- Suspense mode for fetching (ssr prepass)
- SWR data fetching (transfer cache from server)
- PWA (offline mode / cache assets)

### Bootstrap
Development

1. Create `.env.local` with 
```
VITE_CURRENT_DOMAIN=http://localhost:3000
VITE_SERVER_PATH=https://app.checkpoint.guide/server/api
#VITE_SERVER_PATH=http://localhost:4080/api
VITE_API_PATH=https://app.checkpoint.guide/api
#VITE_API_PATH=http://localhost:4080/api
```
2. Run `yarn`
3. For run project with development mode run `yarn dev`
4. For *production* mode run `yarn build` and after that command start serving server `yarn serve`
