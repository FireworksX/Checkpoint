import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

export interface ButtonProps extends TouchableProps {
  color?: 'accent' | 'positive' | 'negative' | 'neutral'
  size?: 's' | 'm' | 'l'
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  stretched?: boolean
  disabled?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({ className, disabled, size, color, mode, stretched, children, ...rest }) => {
  return (
    <Styled.Root
      className={className}
      disabled={disabled}
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
