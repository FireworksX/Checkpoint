import { BaseUser } from './User'
import { MediaFile } from './MediaFile'
import { CityRate } from './CityRate'

export interface City {
  _id: string
  slug: string
  name: string
  owner: BaseUser
  gallery: MediaFile[]
  facts: { name: string; value: string }[]
  rates: CityRate[]
  createdAt: Date
}
