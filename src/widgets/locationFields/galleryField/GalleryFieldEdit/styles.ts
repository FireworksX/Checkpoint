import styled from 'styled-components'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import Touchable from 'src/components/Touchable/Touchable'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Icon from 'src/components/Icon/Icon'

export const Root = styled.div``

export const Wrapper = styled(HorizontalScroll)``

export const EmptySlide = styled(Touchable)`
  ${({ theme }) => theme.typography.text_20_24};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  height: 180px;
  width: calc(100vw - 30px);
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  overflow: hidden;
  margin: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`
