import styled from 'styled-components'
import { rgbToRgba } from 'src/styles/theme/baseStyleds'
import { zIndex } from 'src/router/constants'

interface Props {
  safeAreaBottom?: boolean
}

export const Root = styled.div<Props>`
  padding-bottom: ${({ safeAreaBottom }) => safeAreaBottom && '70px'};
`

export const ScreenSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondaryBg};
  z-index: ${zIndex.pageSpinner};
`

export const SpinnerWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
`
