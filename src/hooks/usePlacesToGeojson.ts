import {Place} from "../graphql/codegenTypes";
import {Feature} from "geojson";

export type FeaturePredictor = Callback<[Place], Feature>

export const usePlacesToGeojson = (places: Place[], predicate: FeaturePredictor): GeoJSON.FeatureCollection => ({
    type: 'FeatureCollection',
    features: places.map(predicate)
})
