import styled from 'styled-components'
import NavigationComp from './widgets/Navigation/Navigation'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  min-height: 100vh;
`

export const Navigation = styled(NavigationComp)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`
