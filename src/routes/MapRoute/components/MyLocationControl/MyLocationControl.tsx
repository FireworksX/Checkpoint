import { FC } from 'react'
import * as Styled from './styles'
import Icon from 'src/components/Icon/Icon'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface MyLocationControlProps extends TouchableProps {
  className?: string
}

const MyLocationControl: FC<MyLocationControlProps> = ({ className, ...touchableProps }) => {
  return (
    <Styled.Root className={className} {...touchableProps}>
      <Icon name='my-location' />
    </Styled.Root>
  )
}

export default MyLocationControl
