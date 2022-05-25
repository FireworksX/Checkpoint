# Checkpoint

### Features

- Vite (development server + fast refresh)
- React
- SSR
- Recoil
- SVG sprite
- Styled-components
- Suspense mode for fetching (ssr prepass)
- SWR data fetching (transfer cache from server)
- PWA (offline mode / cache assets)

### Bootstrap
Development

1. Create `.env.local` with 
```
COOKIE_SALT=yourSaltForCookies
```
2. Run `yarn`
3. For run project with development mode run `yarn dev`
4. For *production* mode run `yarn build` and after that command start serving server `yarn serve`
