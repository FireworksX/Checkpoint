import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'
import {MapLayer} from "../index";
import {MapNearSearchQuery} from "../../../routes/MapRoute/widgets/MapNearSearch/queries/MapNearSearchQuery";


export const mapSearchNearLayerAtom = atom<MapLayer<MapNearSearchQuery['searchNearPlace']>>({
  key: STORE_NAMES.mapLayersAtom,
  default: {
    isVisible: false,
    data: []
  }
})
