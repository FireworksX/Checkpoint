import { createConstants } from 'src/utils/createConstants'

const langSlugs = createConstants('en', 'ru', 'es', 'it')

const ROUTE_NAMES = createConstants(
  '__splat_route',
  'root',
  'home',
  'profile',
  'trends',
  'notifications',
  'welcome',
  'createPlace'
)
export type RouteNamesType = keyof typeof ROUTE_NAMES

const ROUTE_PARAMS = createConstants()

export { langSlugs, ROUTE_NAMES, ROUTE_PARAMS }
