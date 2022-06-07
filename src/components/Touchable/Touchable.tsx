import React from 'react'
import * as Styled from './styles'

export interface TouchableProps {
  className?: string
  tagName?: 'div' | 'a' | 'button'
  effect?: 'scale' | 'none'
  onClick?: (e?: any) => any
  [key: string]: any
}

const Touchable: React.FC<TouchableProps> = ({
  className,
  tagName = 'div',
  children,
  effect = 'scale',
  onClick,
  ...rest
}) => {
  return (
    <Styled.Root as={tagName} className={className} effect={effect} onClick={onClick} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default Touchable
