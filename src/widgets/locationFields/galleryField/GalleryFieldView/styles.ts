import styled from 'styled-components'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Touchable from 'src/components/Touchable/Touchable'
import CircleProgress from 'src/components/CircleProgress/CircleProgress'

export const Root = styled.div``

export const Wrapper = styled(HorizontalScroll)``

export const Slide = styled(Touchable)`
  height: 180px;
  min-width: calc(100vw - 30px);
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  overflow: hidden;
  margin: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  position: relative;
`

export const SlideImage = styled(BaseImage)`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Progress = styled(CircleProgress).attrs({ size: 50 })`
  z-index: 2;
      top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
`
