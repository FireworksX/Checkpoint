import { map} from 'nanostores'
import { MapLayer } from '../index'
import {PlacemarksQuery} from "../../../hooks/data/usePlacemarks/PlacemarksQuery";

export const placemarksAtom = map<MapLayer<PlacemarksQuery['getPlacemarks']>>({
  isVisible: true,
  data: []
})
