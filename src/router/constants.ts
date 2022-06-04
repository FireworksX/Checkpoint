import { createConstants } from 'src/utils/createConstants'

const langSlugs = createConstants('en', 'ru', 'es', 'it')

const ROUTE_NAMES = createConstants(
  '__splat_route',
  'root',
  'navigation',
  'home',
  'profile',
  'profileReview',
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
  'cityMap',
  'user',
  'userReview',
  'userFollowers',
  'userSubscribers'
)
type RouteNamesType = keyof typeof ROUTE_NAMES

const ROUTE_PARAMS = createConstants('citySlug', 'userSlug')

const STORE_NAMES = createConstants(
  'mapCenterAtom',
  'mapZoomAtom',
  'mapPlacemarksAtom',
  'mapSaveCenterAtom',
  'hasNavigationAtom',
  'geoLocationAtom',
  'userAgentAtom',
  'hasNavigationMapHelpersAtom'
)

const zIndex = {
  navigation: 10,
  modal: 20
}

export { langSlugs, ROUTE_NAMES, ROUTE_PARAMS, STORE_NAMES, RouteNamesType, zIndex }
