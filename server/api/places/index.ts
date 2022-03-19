module.exports = () => {
  const { getUserPlaces, createPlace } = require('./places.service')()
  const express = require('express')
  const router = express.Router()

  router.get('/userPlaces', getUserPlaces)
  router.post('/create', createPlace)

  return router
}
