import { FC } from 'react'
import * as Styled from './styles'
import Icon from '../Icon/Icon'

interface CreateButtonProps {
  className?: string
}

const CreateButton: FC<CreateButtonProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Icon name='plus-circle' width={30} height={30} />
    </Styled.Root>
  )
}

export default CreateButton
