import { PlaceInterface } from 'server/interfaces/PlaceInterface'
import FileControl from 'server/helpers/fileControl'
const fileControl: typeof FileControl = require('../../helpers/fileControl')

module.exports = () => {
  const placesTable = fileControl<PlaceInterface[]>('server/data/places.json')

  const getAllPlacesByUserid = (userId: string): PlaceInterface[] => {
    return placesTable.getFileData().filter(({ authorId }) => authorId === userId)
  }

  const addPlace = (place: PlaceInterface): PlaceInterface => {
    const list = placesTable.getFileData()
    list.push(place)

    placesTable.updateFile(list)

    return place
  }

  return {
    addPlace,
    getAllPlacesByUserid
  }
}
