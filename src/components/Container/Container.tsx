import React from 'react'
import * as Styled from './styles'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default Container
