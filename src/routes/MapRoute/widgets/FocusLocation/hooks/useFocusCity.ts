import { useRecoilValue} from "recoil";
import {mapPositionAtom} from "../../../../../store/mapStore";
import {useFocusCityQuery} from "../queries/FocusCityQuery";

export const useFocusCity = () => {
    const mapPosition = useRecoilValue(mapPositionAtom)
    const hasLabel = mapPosition.zoom > 5

    const [{data}] = useFocusCityQuery({
        variables: {
            lat: mapPosition.lat,
            lng: mapPosition.lng,
        },
        pause: !hasLabel
    })

    return hasLabel ? data?.getCity : ''
}
