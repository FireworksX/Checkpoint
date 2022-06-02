export interface Location {
  _id: string
  slug: string
  title: string
  category: string
  author: string
  city: string
  createdAt: string
  gallery: string[]
  description?: string
  coords: {
    lat: number
    lng: number
  }
}
