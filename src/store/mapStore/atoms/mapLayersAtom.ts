import { atom } from 'nanostores'

export type MapLayer = 'placemark' | 'search-near'

export const mapLayersAtom = atom<MapLayer[]>([])
