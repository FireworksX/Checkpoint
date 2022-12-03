import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'
import Spinner from '../Spinner/Spinner'
import { useTheme } from 'styled-components'

export interface ButtonProps extends TouchableProps {
  size?: 's' | 'm' | 'l' | 'xl'
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  stretched?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
  icon?: SvgNames
}

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  icon,
  loading,
  size,
  color,
  mode,
  stretched,
  children,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <Styled.Root
      className={className}
      disabled={disabled || loading}
      color={color}
      mode={mode}
      stretched={stretched}
      size={size}
      {...rest}
    >
      <Styled.LoadingState loading={loading}>
        <Spinner size='regular' pathColor={theme.colors.textColorLight} />
      </Styled.LoadingState>

      <Styled.Body loading={loading}>
        {icon && <Styled.Icon hasContent={!!children} name={icon} />}
        {children}
      </Styled.Body>
    </Styled.Root>
  )
}

export default Button
