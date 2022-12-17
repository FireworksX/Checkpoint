import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from './Spinner'
import { CircularProgressbar } from 'react-circular-progressbar'

interface Props {
  size?: SpinnerProps['size']
}

const sizeMap: Record<NonNullable<Props['size']>, number> = {
  small: 20,
  regular: 28,
  medium: 36,
  large: 48
}

const rotation = keyframes`
 from { transform: rotate(0) }
 to { transform: rotate(360deg) }
`

export const Root = styled.div<Props>`
  width: ${({ size }) => sizeMap[size || 'regular']}px;
  height: ${({ size }) => sizeMap[size || 'regular']}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
`

export const Bar = styled.div`
  animation: ${rotation} 1s infinite linear;
`

export const BarInner = styled(CircularProgressbar)<Props>`
  width: ${({ size }) => sizeMap[size || 'regular']}px;
  height: ${({ size }) => sizeMap[size || 'regular']}px;
`

export const Status = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const done = keyframes`
 from { stroke-dashoffset: 50; }
 to { stroke-dashoffset: 0; }
`

export const IconWrapper = styled.div`
  path {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: ${done} 0.6s 0.3s cubic-bezier(0.36, 0.66, 0.04, 1) forwards;
  }
`
