import { Route } from 'router5'
import { FC } from 'react'
import { langSlugs, ROUTE_NAMES, ROUTE_PARAMS } from './constants'
import routeComponents from 'src/routes/index'

declare module 'router5' {
  interface Route {
    component?: FC
  }
}

const langRegex = `(${Object.values(langSlugs).join('|')})`

export const routes: Route[] = [
  {
    name: ROUTE_NAMES.root,
    path: '/',
    component: routeComponents.RootRoute,
    children: [
      {
        name: ROUTE_NAMES.home,
        path: `/`,
        component: routeComponents.HomeRoute
      },
      {
        name: ROUTE_NAMES.profile,
        path: `profile`,
        component: routeComponents.ProfileRoute
      },
      {
        name: ROUTE_NAMES.notifications,
        path: `notifications`,
        component: routeComponents.NotificationsRoute
      },
      {
        name: ROUTE_NAMES.trends,
        path: `trends`,
        component: routeComponents.TrendsRoute
      },
      {
        name: ROUTE_NAMES.createPlace,
        path: `createPlace`,
        component: routeComponents.CreatePlaceRoute
      },
      {
        name: ROUTE_NAMES.welcome,
        path: `welcome`,
        component: routeComponents.WelcomeRoute
      }
    ]
  }
]
