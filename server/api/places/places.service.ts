import { Request } from 'express'
const { v4: uuid } = require('uuid')
const { AUTH_USER_KEY } = require('../auth/auth.service')()
const { getUserById, getUserByLogin } = require('../controllers/usersController')()
import FileControl from 'server/helpers/fileControl'
import { PlaceInterface, PlaceInterfaceCreate } from 'server/interfaces/PlaceInterface'
import { AppResponse } from 'server/interfaces/Request'
const fileControl: typeof FileControl = require('../../helpers/fileControl')
const placesController = require('../controllers/placesController')()

module.exports = () => {
  const createPlace = (req: Request, res: AppResponse<PlaceInterface>) => {
    const initialPlace = req.body as PlaceInterfaceCreate

    if (!initialPlace?.title || !initialPlace?.lat || !initialPlace?.lng) {
      return res.json({
        success: false,
        message: 'Don`t provided required parameters (title, lat, lon)'
      })
    }

    const currentUser = req.cookies[AUTH_USER_KEY]
    const findUser = getUserByLogin(currentUser)

    if (findUser) {
      const newPlace = placesController.addPlace({
        ...initialPlace,
        authorId: findUser.id,
        id: uuid()
      })

      return res.json({
        success: true,
        data: newPlace
      })
    }

    return res.json({
      success: false
    })
  }

  const getUserPlaces = (req: Request, res: AppResponse<PlaceInterface[]>) => {
    const { userId } = req.query

    if (!userId) {
      return res.json({
        success: false,
        message: 'userId don`t provided'
      })
    }

    const findUser = getUserById(userId)

    if (findUser) {
      const { id } = findUser
      const allPlaces = placesController.getAllPlacesByUserid(id)

      return res.json({
        success: true,
        data: allPlaces
      })
    }

    return res.json({
      success: false
    })
  }

  return {
    createPlace,
    getUserPlaces
  }
}
