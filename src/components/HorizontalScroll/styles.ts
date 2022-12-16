import styled, { css } from 'styled-components'
import { HorizontalScrollProps } from './HorizontalScroll'

interface Props {
  cellGap?: HorizontalScrollProps['cellGap']
  gap?: HorizontalScrollProps['gap']
}

export const Root = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;

  // hide scroll
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`

const OverlayBase = css`
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  z-index: 2;
`

export const OverlayLeft = styled.div`
  ${OverlayBase}
  left: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.background} 20%, rgba(255, 255, 255, 0)); ;
`

export const OverlayRight = styled.div`
  ${OverlayBase}
  right: 0;
  background: linear-gradient(to left, ${({ theme }) => theme.colors.background} 20%, rgba(255, 255, 255, 0)); ;
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
