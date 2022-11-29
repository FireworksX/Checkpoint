import React, { useRef } from 'react'
import * as Styled from './styles'
import { useScrollEnd } from '../../hooks/useScrollEnd'

export interface HorizontalScrollProps {
  className?: string
  gap?: number
  cellGap?: number
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ className, children, gap = 15, cellGap = 10 }) => {
  const containerRef = useRef<any>()
  const { scrolledLeft, scrolledRight } = useScrollEnd(containerRef)

  return (
    <Styled.Root className={className}>
      {scrolledRight && <Styled.OverlayLeft />}
      <Styled.Wrapper ref={containerRef}>
        <Styled.Gap gap={gap} />
        {React.Children.toArray(children).map((child, index) => (
          <Styled.Cell key={index} cellGap={cellGap}>
            {child}
          </Styled.Cell>
        ))}
        <Styled.Gap gap={gap} />
      </Styled.Wrapper>
      {scrolledLeft && <Styled.OverlayRight />}
    </Styled.Root>
  )
}

export default HorizontalScroll
