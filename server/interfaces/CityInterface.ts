export interface CityInterface {
  id: string
  name: string
  slug: string
  geo: {
    center: {
      lat: number
      lng: number
    }
    zoom: number
  }
  info: {
    slug: string
    value: number
  }[]
  categories: {
    slug: string
  }[]
  scales: {
    slug: string
    value: number
  }[]
}
