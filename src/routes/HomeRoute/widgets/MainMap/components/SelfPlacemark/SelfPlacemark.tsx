import { FC } from 'react'
import * as Styled from './styles'
import { PlacemarkType } from 'src/widgets/MainMap/MainMap'

interface SelfPlacemarkProps extends PlacemarkType {
  className?: string
}

const SelfPlacemark: FC<SelfPlacemarkProps> = ({ className }) => {
  return <Styled.Root className={className} />
}

export default SelfPlacemark
