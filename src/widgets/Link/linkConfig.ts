import { ROUTE_NAMES, ROUTE_PARAMS } from 'src/router/constants'
import { buildName } from 'src/utils/buildName'

const linkConfig = {
  welcome: {
    name: buildName(ROUTE_NAMES.welcome),
    params: { required: [], optional: [] }
  },
  profile: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.profile, ROUTE_NAMES.profileReview),
    params: { required: [], optional: [] }
  },
  profileSettings: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.profile, ROUTE_NAMES.profileSettings),
    params: { required: [], optional: [] }
  },
  profileFollowers: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.profile, ROUTE_NAMES.profileFollowers),
    params: { required: [], optional: [] }
  },
  profileSubscribers: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.profile, ROUTE_NAMES.profileSubscribers),
    params: { required: [], optional: [] }
  },
  user: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.user, ROUTE_NAMES.userReview),
    params: { required: [ROUTE_PARAMS.userSlug], optional: [] }
  },
  userFollowers: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.user, ROUTE_NAMES.userFollowers),
    params: { required: [ROUTE_PARAMS.userSlug], optional: [] }
  },
  userSubscribers: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.user, ROUTE_NAMES.userSubscribers),
    params: { required: [ROUTE_PARAMS.userSlug], optional: [] }
  },
  map: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.map),
    params: { required: [], optional: [] }
  },
  notifications: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.notifications),
    params: { required: [], optional: [] }
  },
  post: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.postDetail, ROUTE_NAMES.postReview),
    params: { required: [ROUTE_PARAMS.postSlug], optional: [ROUTE_PARAMS.postComments] }
  },
  postConnections: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.postDetail, ROUTE_NAMES.postConnections),
    params: { required: [ROUTE_PARAMS.postSlug], optional: [] }
  },
  postLikes: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.postDetail, ROUTE_NAMES.postLikes),
    params: { required: [ROUTE_PARAMS.postSlug], optional: [] }
  },
  location: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.locationDetail),
    params: { required: [ROUTE_PARAMS.locationSlug], optional: [] }
  },
  search: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.search),
    params: { required: [], optional: [] }
  },
} as const

export type LinkConfig = typeof linkConfig
export type LinkType = keyof LinkConfig
type ValueOf<T> = T[keyof T]

export type LinkNavigationProps =
  | ValueOf<{
      [Type in keyof LinkConfig]: {
        type: Type
      } & {
        [P in LinkConfig[Type]['params']['required'][any]]: string
      } & { [P in LinkConfig[Type]['params']['optional'][any]]?: string }
    }>
  | {
      type?: undefined
    }

export type LinkNavigationTypeProps<T extends keyof LinkConfig> = Extract<LinkNavigationProps, { type: T }>

export default linkConfig
