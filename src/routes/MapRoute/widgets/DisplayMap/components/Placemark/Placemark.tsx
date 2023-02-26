import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { mapPositionAtom } from '../../../../../../store/mapStore'
import { TouchableProps } from '../../../../../../components/Touchable/Touchable'
import { useStore } from '@nanostores/react'

interface PlacemarkProps extends TouchableProps {
  className?: string
}

const Placemark: FC<PlacemarkProps> = ({ className, ...touchProps }) => {
  const { zoom } = useStore(mapPositionAtom)

  const size = useMemo(() => {
    if (zoom > 0 && zoom <= 7) {
      return 's'
    } else if (zoom > 7 && zoom <= 15) {
      return 'm'
    } else {
      return 'l'
    }
  }, [zoom])

  return (
    <Styled.Root className={className} sizeMode={size} {...touchProps}>
      <Styled.Overlay />
    </Styled.Root>
  )
}

export default Placemark
