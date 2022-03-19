export interface PlaceInterface {
  id: string
  title: string
  description: string
  authorId: string
  lat: number
  lng: number
}

export type PlaceInterfaceCreate = Omit<PlaceInterface, 'id' | 'authorId'>
