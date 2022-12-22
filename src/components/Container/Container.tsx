import React from 'react'
import * as Styled from './styles'

interface ContainerProps {
  reversed?: boolean
  className?: string
}

const Container: React.FC<ContainerProps> = ({ className, reversed, children }) => {
  return (
    <Styled.Root className={className} reversed={reversed}>
      {children}
    </Styled.Root>
  )
}

export default Container
