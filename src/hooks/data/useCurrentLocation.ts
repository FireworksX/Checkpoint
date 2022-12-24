import {useEffect, useState} from "react";
import {useLocationPermission} from "./useLocationPermission";

export const useCurrentLocation = () => {
    const [coords, setCoords] = useState()
    const {hasPermissions, askPermission} = useLocationPermission()

    useEffect(() => {
        askPermission()
        if (hasPermissions) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                setCoords(coords)
            })
        }
    }, [hasPermissions]);


    return {
        coords
    }
}
