import styled from 'styled-components'
import { CommonLogoSize } from './CommonLogo'
import BaseImage from 'src/components/BaseImage/BaseImage'

interface Props {
  size?: CommonLogoSize | 'flag'
  withRadius?: boolean
  withBorder?: boolean
  withBackground?: boolean
}

type MapType = (size: NonNullable<Props['size']>) => string

const sizesMap: MapType = size =>
  size === 'flag'
    ? `
        width: 20px;
        height: 14px;
      `
    : `
        width: ${size}px;
        height: ${size}px;
      `

export const Root = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ size }) => sizesMap(size || 20)}
  overflow: hidden;
  color: ${({ theme }) => theme.colors.iconBasic};

  ${({ withRadius }) => withRadius && `border-radius: 50%;`}
  ${({ withBackground, theme }) => withBackground && `background-color: ${theme.colors.border};`}
  ${({ withBorder }) => withBorder && `border: 1px solid var(--rgb-color-border);`}
`

export const Image = styled(BaseImage)`
  max-width: 100%;
  max-height: 100%;
  display: block;
`
