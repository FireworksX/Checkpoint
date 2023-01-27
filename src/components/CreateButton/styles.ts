import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  isActive?: boolean
  loading?: boolean
}

export const Root = styled(Touchable)<Props>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColorLight};
  background: #3f8ae0;
  transition: ${({ theme }) => theme.animation.transitionDuration};
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(135deg, #FF7575, #FF3E3E)' : 'linear-gradient(135deg, #6cf, #3f8ae0)'};
  ${({ isActive }) => isActive && 'transform: rotate(45deg);'}
`

export const Body = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
  transition: opacity ${150}ms;
`

export const LoadingState = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity ${150}ms;
  opacity: ${({ loading }) => (loading ? 1 : 0)};
`
