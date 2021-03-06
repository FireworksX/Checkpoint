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
  profileEdit: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.profile, ROUTE_NAMES.profileEdit),
    params: { required: [], optional: [] }
  },
  profileCategories: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.profile, ROUTE_NAMES.profileCategories),
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
  trends: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.trends),
    params: { required: [], optional: [] }
  },
  notifications: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.notifications),
    params: { required: [], optional: [] }
  },
  cityList: {
    name: buildName(ROUTE_NAMES.cityList),
    params: { required: [], optional: [] }
  },
  cityInfo: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.city, ROUTE_NAMES.cityDetail, ROUTE_NAMES.cityInfo),
    params: { required: [], optional: [ROUTE_PARAMS.citySlug] }
  },
  cityMap: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.city, ROUTE_NAMES.cityDetail, ROUTE_NAMES.cityMap),
    params: {
      required: [],
      optional: [ROUTE_PARAMS.citySlug, ROUTE_PARAMS.mapAuthor, ROUTE_PARAMS.mapCategory, ROUTE_PARAMS.mapLocation]
    }
  },
  cityMapSearch: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.city, ROUTE_NAMES.cityDetail, ROUTE_NAMES.cityMapSearch),
    params: {
      required: [],
      optional: [ROUTE_PARAMS.citySlug]
    }
  },
  locationView: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.location, ROUTE_NAMES.locationDetail, ROUTE_NAMES.locationView),
    params: { required: [], optional: [ROUTE_PARAMS.locationSlug] }
  },
  locationEdit: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.location, ROUTE_NAMES.locationEdit),
    params: { required: [], optional: [ROUTE_PARAMS.locationSlug] }
  },
  locationCreate: {
    name: buildName(ROUTE_NAMES.navigation, ROUTE_NAMES.location, ROUTE_NAMES.locationCreate),
    params: { required: [], optional: [] }
  }
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
