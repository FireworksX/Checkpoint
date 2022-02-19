import { ROUTE_NAMES, RouteNamesType } from 'src/router/constants'

export const buildName = (...names: RouteNamesType[]): string => `${ROUTE_NAMES.root}.${names.join('.')}`
