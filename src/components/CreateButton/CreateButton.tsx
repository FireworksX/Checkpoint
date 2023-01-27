import { FC } from 'react'
import { useTheme } from 'styled-components'
import * as Styled from './styles'
import Icon from '../Icon/Icon'
import { TouchableProps } from '../Touchable/Touchable'
import Spinner from '../Spinner/Spinner'

interface CreateButtonProps extends TouchableProps {
  loading?: boolean
  isActive?: boolean
  className?: string
}

const CreateButton: FC<CreateButtonProps> = ({ className, loading = false, isActive = false, ...touchableProps }) => {
  const theme = useTheme()

  return (
    <Styled.Root className={className} isActive={isActive} {...touchableProps}>
      <Styled.LoadingState loading={loading}>
        <Spinner size='small' strokeWidth={15} pathColor={theme.colors.textColorLight} />
      </Styled.LoadingState>
      <Styled.Body loading={loading}>
        <Icon name='plus-circle' width={30} height={30} />
      </Styled.Body>
    </Styled.Root>
  )
}

export default CreateButton
