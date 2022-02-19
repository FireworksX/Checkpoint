import React from 'react'
import * as Styled from './styles'

interface HorizontalScrollProps {
  className?: string
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default HorizontalScroll
