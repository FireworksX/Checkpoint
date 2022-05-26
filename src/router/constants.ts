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
  'register',
  'createPlace',
  'city',
  'cityList',
  'cityDetail',
  'cityInfo',
  'cityMap',
)
export type RouteNamesType = keyof typeof ROUTE_NAMES

const ROUTE_PARAMS = createConstants()

const STORE_NAMES = createConstants(
    'mapCenterAtom',
    'mapZoomAtom',
    'mapPlacemarksAtom',
    'mapSaveCenterAtom',
    'hasNavigationAtom',
    'geoLocationAtom',
    'userAgentAtom',
    'authUserAtom'
)

export { langSlugs, ROUTE_NAMES, ROUTE_PARAMS, STORE_NAMES }
