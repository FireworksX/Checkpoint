import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useScreenSize } from '../../../hooks/useScreenSize'
import { useModal } from '../../../hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZXdvcmtzeHMiLCJhIjoiY2xhd2QycWwwMGVnczN2cGdraXZwc2dpayJ9.pCxhrZN43fOdF_cLo6uTgA'

export const useMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng, setLng] = useState(30.5)
  const [lat, setLat] = useState(50.5)
  const [zoom, setZoom] = useState(9)

  const { open } = useModal(MODAL_NAMES.postPreview)

  const onMove = useCallback(() => {
    if (map.current) {
      setLng(+map.current.getCenter().lng.toFixed(4))
      setLat(+map.current.getCenter().lat.toFixed(4))
      setZoom(+map.current.getZoom().toFixed(2))
    }
  }, [])

  useEffect(() => {
    if (map.current) return

    if (mapContainer.current) {
      mapContainer.current.style.width = `100%`
      mapContainer.current.style.height = `calc(100vh - 70px)`

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      })

      map.current.on('move', onMove)
      map.current.on('click', () => {
        console.log('click')
        open()
      })

      if (map.current) {
        const marker = new mapboxgl.Marker({ draggable: true }).setLngLat([30.5, 50.5]).addTo(map.current)
      }
    }
  })

  return {
    container: mapContainer
  }
}
