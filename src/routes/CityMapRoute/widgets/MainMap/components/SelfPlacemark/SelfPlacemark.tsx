import { FC } from 'react'
import * as Styled from './styles'
import { Coords } from 'google-map-react'

interface SelfPlacemarkProps extends Coords {
  className?: string
}

const SelfPlacemark: FC<SelfPlacemarkProps> = ({ className }) => {
  return <Styled.Root className={className} />
}

export default SelfPlacemark
