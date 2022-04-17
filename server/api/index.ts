module.exports = () => {
  const express = require('express')
  const authRoute = require('./auth')()
  const usersRoute = require('./users')()
  const placesRoute = require('./places')()
  const citiesRoute = require('./cities')()

  const router = express.Router()

  const defaultRoutes = [
    {
      path: '/auth',
      route: authRoute
    },
    {
      path: '/users',
      route: usersRoute
    },
    {
      path: '/places',
      route: placesRoute
    },
    {
      path: '/cities',
      route: citiesRoute
    }
  ]

  defaultRoutes.forEach(route => {
    router.use(route.path, route.route)
  })

  return router
}
