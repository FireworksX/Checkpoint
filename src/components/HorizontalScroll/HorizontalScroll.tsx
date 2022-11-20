import React from 'react'
import * as Styled from './styles'

export interface HorizontalScrollProps {
  className?: string
  gap?: number
  cellGap?: number
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ className, children, gap = 15, cellGap = 10 }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Gap gap={gap} />
      {React.Children.toArray(children).map((child, index) => (
        <Styled.Cell key={index} cellGap={cellGap}>
          {child}
        </Styled.Cell>
      ))}
      <Styled.Gap gap={gap} />
    </Styled.Root>
  )
}

export default HorizontalScroll
