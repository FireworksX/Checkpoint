import styled, {keyframes} from 'styled-components'
import { rgbToRgba } from 'src/styles/theme/baseStyleds'

interface Props {
  size?: number
}

const rotation = keyframes`
 from { transform: rotate(0) }
 to { transform: rotate(360deg) }
`

export const Root = styled.div<Props>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ theme }) => rgbToRgba(theme.colors.basicBlack, 0.8)};
  padding: 10px;
  border-radius: 50%;
`

export const ProgressWrapper = styled.div`
  animation: ${rotation} 1s infinite linear;
`
