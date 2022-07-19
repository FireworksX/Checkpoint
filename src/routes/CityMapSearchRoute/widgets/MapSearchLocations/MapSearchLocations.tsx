import { FC } from 'react'
import * as Styled from './styles'

interface MapSearchLocationsProps {
  className?: string
}

const MapSearchLocations: FC<MapSearchLocationsProps> = ({ className }) => {
  return <Styled.Root className={className}>MapSearchLocations</Styled.Root>
}

export default MapSearchLocations
