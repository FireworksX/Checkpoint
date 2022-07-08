import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface DotPlacemarkProps extends TouchableProps {
  className?: string
}

const DotPlacemark: FC<DotPlacemarkProps> = ({ className, ...rest }) => {
  return (
    <Styled.Root className={className} {...rest}>
      <Styled.Inner />
    </Styled.Root>
  )
}

export default DotPlacemark
