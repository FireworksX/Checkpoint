import { FC } from 'react'
import * as Styled from './styles'
import DotPlacemark from './components/DotPlacemark/DotPlacemark'
import { Coords } from 'google-map-react'

interface PlacemarkProps extends Coords {
  className?: string
}

const Placemark: FC<PlacemarkProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <DotPlacemark />
    </Styled.Root>
  )
}

export default Placemark
