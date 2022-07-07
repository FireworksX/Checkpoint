import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from './Spinner'

interface Props {
  size?: SpinnerProps['size']
}

const sizeMap: Record<NonNullable<Props['size']>, number> = {
  small: 16,
  regular: 24,
  medium: 32,
  large: 44
}

const rotation = keyframes`
 from { transform: rotate(0) }
 to { transform: rotate(360deg) }
`

export const Root = styled.div<Props>`
  width: ${({ size }) => sizeMap[size || 'regular']}px;
  height: ${({ size }) => sizeMap[size || 'regular']}px;
  background: transparent;
  animation: ${rotation} 1s infinite linear;
`
