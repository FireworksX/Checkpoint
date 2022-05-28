import { Route } from 'router5'
import { FC } from 'react'
import { langSlugs, ROUTE_NAMES, ROUTE_PARAMS } from './constants'
import routeComponents from 'src/routes/index'
import NavigationRoute from '../routes/NavigationRoute/NavigationRoute'

declare module 'router5' {
  interface Route {
    component?: FC
  }
}

export const routes: Route[] = [
  {
    name: ROUTE_NAMES.root,
    path: '/',
    component: routeComponents.RootRoute,
    children: [
      {
        name: ROUTE_NAMES.welcome,
        path: `welcome`,
        component: routeComponents.WelcomeRoute
      },
      {
        name: ROUTE_NAMES.navigation,
        path: `/`,
        component: routeComponents.NavigationRoute,
        children: [
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
            name: ROUTE_NAMES.city,
            path: `city`,
            children: [
              {
                name: ROUTE_NAMES.cityList,
                path: '/',
                component: routeComponents.CityListRoute
              },
              {
                name: ROUTE_NAMES.cityDetail,
                path: `/:${ROUTE_PARAMS.citySlug}`,
                children: [
                  { name: ROUTE_NAMES.cityInfo, path: '/', component: routeComponents.CityInfoRoute },
                  { name: ROUTE_NAMES.cityMap, path: '/map', component: routeComponents.CityMapRoute }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
