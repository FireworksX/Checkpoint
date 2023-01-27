import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'
import {MapLayer} from "../index";

type Options = MapLayer

export const mapSearchNearLayerAtom = atom<Options>({
  key: STORE_NAMES.mapLayersAtom,
  default: {
    isVisible: false
  }
})
