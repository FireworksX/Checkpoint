import { FC } from 'react'
import * as Styled from './styles'
import DotPlacemark from './components/DotPlacemark/DotPlacemark'
import { Coords } from 'google-map-react'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface PlacemarkProps extends Coords, TouchableProps {
  className?: string
}

const Placemark: FC<PlacemarkProps> = ({ className, ...rest }) => {
  return (
    <Styled.Root className={className} {...rest}>
      <DotPlacemark />
    </Styled.Root>
  )
}

export default Placemark
