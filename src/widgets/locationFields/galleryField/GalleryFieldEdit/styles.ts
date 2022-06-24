import styled from 'styled-components'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import Touchable from 'src/components/Touchable/Touchable'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Icon from '../../../../components/Icon/Icon'

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

export const NewWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`

export const NewSlide = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NewIcon = styled(Icon)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`
