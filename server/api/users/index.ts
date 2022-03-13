module.exports = () => {
  const { profile } = require('./users.service')()
  const express = require('express')
  const router = express.Router()

  router.get('/profile', profile)

  return router
}
