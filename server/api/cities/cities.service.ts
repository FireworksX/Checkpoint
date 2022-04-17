import { Request } from 'express'
import FileControl from 'server/helpers/fileControl'
import { AppResponse } from 'server/interfaces/Request'
import { CityInterface } from '../../interfaces/CityInterface'
const fileControl: typeof FileControl = require('../../helpers/fileControl')
const citiesController = require('../controllers/citiesController')()

module.exports = () => {
  const citiesList = (req: Request, res: AppResponse<CityInterface>) => {
    return res.json({
      success: true,
      data: citiesController.getAllCities()
    })
  }

  const cityDetail = (req: Request, res: AppResponse<CityInterface>) => {
    const { citySlug } = req.query

    if (!citySlug) {
      return res.json({
        success: false,
        message: 'citySlug don`t provided'
      })
    }

    return res.json({
      success: true,
      data: citiesController.getCityBySlug(citySlug)
    })
  }

  return {
    citiesList,
    cityDetail
  }
}
