import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

export interface ButtonProps extends TouchableProps {
  size?: 's' | 'm' | 'l' | 'xl'
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  stretched?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({ className, disabled, loading, size, color, mode, stretched, children, ...rest }) => {
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
      {children}
    </Styled.Root>
  )
}

export default Button
