import React from 'react'
import * as Styled from './styles'
import { noop } from 'src/utils/helpers'

export interface TouchableProps {
  className?: string
  tagName?: 'div' | 'a' | 'button' | 'span'
  effect?: 'scale' | 'none'
  disabled?: boolean
  onClick?: (e?: any) => any
  [key: string]: any
}

const Touchable: React.FC<TouchableProps> = ({
  className,
  tagName = 'div',
  disabled,
  children,
  effect = 'scale',
  onClick,
  ...rest
}) => {
  return (
    <Styled.Root
      as={tagName}
      className={className}
      effect={effect}
      disabled={disabled}
      onClick={!disabled ? onClick : noop}
      {...rest}
    >
      {children}
    </Styled.Root>
  )
}

export default Touchable
