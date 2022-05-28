import styled from 'styled-components'
import NavigationComp from 'src/widgets/Navigation/Navigation'

interface Props {
  hasNavigation?: boolean
}

export const Root = styled.div`
  padding-bottom: 70px;
`

export const Navigation = styled(NavigationComp)<Props>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  transition: ${({ theme }) => theme.animation.transitionDuration};
  ${({ hasNavigation }) => !hasNavigation && `transform: translateY(70px);`}
`
