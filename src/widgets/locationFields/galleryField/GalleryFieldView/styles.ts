import styled from 'styled-components'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Touchable from "../../../../components/Touchable/Touchable";

export const Root = styled.div``

export const Wrapper = styled(HorizontalScroll)``

export const Slide = styled(Touchable)`
  height: 180px;
  min-width: calc(100vw - 30px);
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  overflow: hidden;
  margin: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile}; ;
`

export const SlideImage = styled(BaseImage)`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`
