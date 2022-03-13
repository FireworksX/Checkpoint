import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

export interface ButtonProps extends TouchableProps {
  color?: 'dark' | 'secondary'
  size?: 's' | 'm' | 'l'
  stretched?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({ className, size, color, stretched, children, ...rest }) => {
  return (
    <Styled.Root className={className} color={color} stretched={stretched} size={size} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default Button
