import { Route } from 'router5'
import { FC } from 'react'
import { ROUTE_NAMES, ROUTE_PARAMS } from './constants'
import routeComponents from 'src/routes/index'

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
            children: [
              {
                name: ROUTE_NAMES.profileReview,
                path: `/`,
                component: routeComponents.ProfileRoute
              },
              {
                name: ROUTE_NAMES.profileFollowers,
                path: `/followers`,
                component: routeComponents.ProfileFollowersRoute
              },
              {
                name: ROUTE_NAMES.profileSubscribers,
                path: `/subscribers`,
                component: routeComponents.ProfileSubscribersRoute
              },
              {
                name: ROUTE_NAMES.profileSettings,
                path: `/settings`,
                component: routeComponents.ProfileSettingsRoute
              }
            ]
          },
          {
            name: ROUTE_NAMES.user,
            path: `user/:${ROUTE_PARAMS.userSlug}`,
            children: [
              {
                name: ROUTE_NAMES.userReview,
                path: `/`,
                component: routeComponents.UserRoute
              },
              {
                name: ROUTE_NAMES.userFollowers,
                path: `/followers`,
                component: routeComponents.UserFollowersRoute
              },
              {
                name: ROUTE_NAMES.userSubscribers,
                path: `/subscribers`,
                component: routeComponents.UserSubscribersRoute
              }
            ]
          },
          {
            name: ROUTE_NAMES.notifications,
            path: `notifications`,
            component: routeComponents.NotificationsRoute
          },
          {
            name: ROUTE_NAMES.postDetail,
            path: `post/:${ROUTE_PARAMS.postSlug}`,
            component: routeComponents.PostDetailRoute
          },
          {
            name: ROUTE_NAMES.locationDetail,
            path: `location/:${ROUTE_PARAMS.locationSlug}`,
            component: routeComponents.LocationDetailRoute
          },
          {
            name: ROUTE_NAMES.map,
            path: 'map',
            component: routeComponents.MapRoute
          },
          {
            name: ROUTE_NAMES.search,
            path: 'search',
            component: routeComponents.SearchRoute
          }
        ]
      }
    ]
  }
]
