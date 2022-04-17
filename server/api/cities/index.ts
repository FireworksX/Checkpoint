module.exports = () => {
  const { citiesList, cityDetail } = require('./cities.service')()
  const express = require('express')
  const router = express.Router()

  router.get('/list', citiesList)
  router.get('/detail', cityDetail)

  return router
}
