import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled.div``

export const Slide = styled(Touchable)`
  height: 180px;
  min-width: calc(100vw - 30px);
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  overflow: hidden;
`

export const SlideImage = styled(BaseImage)`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`
