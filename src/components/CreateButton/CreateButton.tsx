import { FC } from 'react'
import * as Styled from './styles'
import Icon from '../Icon/Icon'
import { TouchableProps } from '../Touchable/Touchable'

interface CreateButtonProps extends TouchableProps {
  className?: string
}

const CreateButton: FC<CreateButtonProps> = ({ className, ...touchableProps }) => {
  return (
    <Styled.Root className={className} {...touchableProps}>
      <Icon name='plus-circle' width={30} height={30} />
    </Styled.Root>
  )
}

export default CreateButton
