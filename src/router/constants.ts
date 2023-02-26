import { createConstants } from 'src/utils/createConstants'

const langSlugs = createConstants('en', 'ru', 'es', 'it')

const ROUTE_NAMES = createConstants(
  '__splat_route',
  'root',
  'navigation',
  'map',
  'profile',
  'profileReview',
  'profileSettings',
  'profileFollowers',
  'profileSubscribers',
  'notifications',
  'welcome',
  'register',
  'user',
  'userReview',
  'userFollowers',
  'userSubscribers',
  'postDetail',
  'postReview',
  'postConnections',
  'postLikes',
  'locationDetail',
  'search'
)
type RouteNamesType = keyof typeof ROUTE_NAMES

const ROUTE_PARAMS = createConstants(
  'citySlug',
  'userSlug',
  'locationSlug',
  'mapAuthor',
  'mapCategory',
  'mapLocation',
  'postSlug',
  'postComments'
)

const zIndex = {
  navigation: 10,
  snackbar: 5,
  header: 10,
  modal: 20,
  pageSpinner: 30,
  mapLocation: 2
}

export const MODAL_NAMES = createConstants('postPreview', 'postCreate', 'geoLocationRestricted', 'placePreview')

export type ModalName = keyof typeof MODAL_NAMES

export { langSlugs, ROUTE_NAMES, ROUTE_PARAMS, RouteNamesType, zIndex }
