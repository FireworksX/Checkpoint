import FileControl from 'server/helpers/fileControl'
import { CityInterface } from '../../interfaces/CityInterface'
const fileControl: typeof FileControl = require('../../helpers/fileControl')

module.exports = () => {
  const citiesTable = fileControl<CityInterface[]>('server/data/cities.json')

  const getAllCities = (): CityInterface[] => {
    return citiesTable.getFileData()
  }

  const getCityBySlug = (citySlug: string): CityInterface | undefined => {
    return citiesTable.getFileData().find(({ slug }) => slug === citySlug)
  }

  return {
    getAllCities,
    getCityBySlug
  }
}
