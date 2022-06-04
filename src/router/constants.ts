import { createConstants } from 'src/utils/createConstants'

const langSlugs = createConstants('en', 'ru', 'es', 'it')

const ROUTE_NAMES = createConstants(
  '__splat_route',
  'root',
  'navigation',
  'home',
  'profile',
  'profileFollowers',
  'profileSubscribers',
  'trends',
  'notifications',
  'welcome',
  'register',
  'createPlace',
  'city',
  'cityList',
  'cityDetail',
  'cityInfo',
  'cityMap'
)
type RouteNamesType = keyof typeof ROUTE_NAMES

const ROUTE_PARAMS = createConstants('citySlug')

const STORE_NAMES = createConstants(
  'mapCenterAtom',
  'mapZoomAtom',
  'mapPlacemarksAtom',
  'mapSaveCenterAtom',
  'hasNavigationAtom',
  'geoLocationAtom',
  'userAgentAtom',
  'hasNavigationMapHelpersAtom',
)

export { langSlugs, ROUTE_NAMES, ROUTE_PARAMS, STORE_NAMES, RouteNamesType }
