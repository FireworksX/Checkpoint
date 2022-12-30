import styled, { css } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  sizeMode?: 's' | 'm' | 'l'
}

const sizeByMode: Record<NonNullable<Props['sizeMode']>, number> = {
  s: 10,
  m: 12,
  l: 15
}

export const Root = styled(Touchable)<Props>`
  ${({ sizeMode }) => {
    const size = sizeByMode[sizeMode || 'm']

    return css`
      width: ${size}px;
      height: ${size}px;
    `
  }};

  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowSecondary};
  position: relative;
  overflow: hidden;
`

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`
