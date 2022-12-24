import { GeolocateControl } from 'react-map-gl'
import { useCallback, useRef } from 'react'
import { GeolocateControlRef } from 'react-map-gl/dist/esm/components/geolocate-control'
import MyLocationControl from '../components/MyLocationControl/MyLocationControl'
import { useLocationPermission } from 'src/hooks/data/useLocationPermission'
import { MODAL_NAMES } from '../../../router/constants'
import { useModal } from '../../../hooks/useModal'
import {GeoLocationRestrictedContext} from "../../../modals/GeoLocationRestricted/GeoLocationRestricted";

export const useMyLocation = () => {
  const { hasPermissions } = useLocationPermission()
  const locationRef = useRef<GeolocateControlRef | null>(null)
  const { open } = useModal<GeoLocationRestrictedContext>(MODAL_NAMES.geoLocationRestricted)


  const trigger = useCallback(() => {

    if (hasPermissions) {
      locationRef.current?.trigger()
    } else {
      open({
        onCheckedPermission: (newPerms) => newPerms && locationRef.current?.trigger()
      })
    }
  }, [open, locationRef, hasPermissions])

  return {
    marker: hasPermissions && (
      <GeolocateControl ref={locationRef} style={{ display: 'none' }} onGeolocate={console.log} onError={console.log} />
    ),
    control: <MyLocationControl onClick={trigger} />
  }
}
