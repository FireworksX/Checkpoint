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
        name: ROUTE_NAMES.cityList,
        path: 'city/list',
        component: routeComponents.CityListRoute
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
                name: ROUTE_NAMES.profileEdit,
                path: `/edit`,
                component: routeComponents.ProfileEditRoute
              },
              {
                name: ROUTE_NAMES.profileCategories,
                path: `/categories`,
                component: routeComponents.ProfileCategoriesRoute
              }
            ]
          },
          {
            name: ROUTE_NAMES.location,
            path: `location`,
            children: [
              {
                name: ROUTE_NAMES.locationDetail,
                path: `/:${ROUTE_PARAMS.locationSlug}`,
                children: [
                  {
                    name: ROUTE_NAMES.locationView,
                    path: '/',
                    component: routeComponents.LocationView,
                    children: [{ name: ROUTE_NAMES.locationEdit, path: '/edit' }]
                  }
                ]
              },
              { name: ROUTE_NAMES.locationCreate, path: '/create', component: routeComponents.LocationCreate }
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
            name: ROUTE_NAMES.trends,
            path: `trends`,
            component: routeComponents.TrendsRoute
          },
          {
            name: ROUTE_NAMES.city,
            path: `city`,
            children: [
              {
                name: ROUTE_NAMES.cityDetail,
                path: `/:${ROUTE_PARAMS.citySlug}`,
                children: [
                  { name: ROUTE_NAMES.cityInfo, path: '/', component: routeComponents.CityInfoRoute },
                  {
                    name: ROUTE_NAMES.cityMap,
                    path: `/map?${ROUTE_PARAMS.mapAuthor}&${ROUTE_PARAMS.mapCategory}`,
                    component: routeComponents.CityMapRoute
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
