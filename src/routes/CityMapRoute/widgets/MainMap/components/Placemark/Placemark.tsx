import { FC } from 'react'
import * as Styled from './styles'
import { Coords } from 'google-map-react'

interface PlacemarkProps extends Coords {
  className?: string
}

const Placemark: FC<PlacemarkProps> = ({ className }) => {
  return <Styled.Root className={className} />
}

export default Placemark
