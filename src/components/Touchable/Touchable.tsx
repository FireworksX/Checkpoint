import React from 'react'
import * as Styled from './styles'

export interface TouchableProps {
  className?: string
  tagName?: 'div' | 'a' | 'button'
  onClick?: (e?: any) => any
  [key: string]: any
}

const Touchable: React.FC<TouchableProps> = ({ className, tagName = 'div', children, onClick, ...rest }) => {
  return (
    <Styled.Root as={tagName} className={className} onClick={onClick} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default Touchable
