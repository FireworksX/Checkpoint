import styled from 'styled-components'
import { pxToValue } from '../../styles/theme/baseStyleds'
import Icon from '../../components/Icon/Icon'
import { zIndex } from '../../router/constants'
import Touchable, { TouchableProps } from '../../components/Touchable/Touchable'
import Button from '../../components/Button/Button'

interface Props extends TouchableProps {
  isOpen?: boolean
}

export const Root = styled(Touchable)<Props>`
  background: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
  width: calc(100% - ${({ theme }) => pxToValue(theme.baseStyles.paddings.gutterMobile) * 2}px);
  left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBasic};
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  position: fixed;
  bottom: 80px;
  z-index: ${zIndex.snackbar};
  display: flex;
  align-items: center;
  transition: ${({ theme }) => theme.animation.transitionDuration};
  transform: translateY(${({ isOpen }) => (isOpen ? 0 : 100)}px);
`

export const Body = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.textColorLight};
  display: flex;
  align-items: center;
  width: 100%;
`

export const Before = styled(Icon)`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.textColorLight};
  min-width: 20px;
`

export const Action = styled(Button).attrs({ mode: 'tertiary', size: 'l' })`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-left: auto;
  padding-top: 3px;
  padding-bottom: 3px;
`
