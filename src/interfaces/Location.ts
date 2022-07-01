export type LocationTitleField = string
export type LocationDescriptionField = string
export type LocationGalleryField = string[]
export type LocationKitchenField = string[]
export type LocationWifispeedField = number
export type LocationAverageBillField = [number, number]
export type LocationTagsField = string[]

export type LocationFieldsMap = Partial<{
  title: LocationTitleField
  description: LocationDescriptionField
  gallery: LocationGalleryField
  kitchen: LocationKitchenField
  wifispeed: LocationWifispeedField
  averageBill: LocationAverageBillField
  tags: LocationTagsField
}>

export interface Location {
  _id: string
  fields: LocationFieldsMap
  slug: string
  category: string
  author: string
  city: string
  createdAt: string
  coords: {
    lat: number
    lng: number
  }
}

export type CreateLocation = Omit<Location, '_id' | 'author' | 'slug' | 'createdAt'>
