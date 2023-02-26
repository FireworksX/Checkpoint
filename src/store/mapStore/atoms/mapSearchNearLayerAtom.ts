import { atom } from 'nanostores'
import {MapLayer} from "../index";
import {MapNearSearchQuery} from "src/routes/MapRoute/widgets/MapNearSearch/queries/MapNearSearchQuery";

export const mapSearchNearLayerAtom = atom<MapLayer<MapNearSearchQuery['searchNearPlace']>>({
  isVisible: false,
  data: []
})
