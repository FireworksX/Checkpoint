import styled from 'styled-components'
import { HorizontalScrollProps } from './HorizontalScroll'

interface Props {
  cellGap?: HorizontalScrollProps['cellGap']
  gap?: HorizontalScrollProps['gap']
}

export const Root = styled.div`
  overflow: auto;
  display: flex;

  // hide scroll
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`

export const Gap = styled.div<Props>`
  min-width: ${({ gap }) => `${gap}px`};
`

export const Cell = styled.div<Props>`
  white-space: nowrap;
  margin-right: ${({ cellGap }) => `${cellGap}px`};

  &:last-child {
    margin-right: 0;
  }
`
