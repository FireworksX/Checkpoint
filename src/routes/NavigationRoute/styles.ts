import styled from 'styled-components'
import NavigationComp from 'src/widgets/Navigation/Navigation'
import { zIndex } from 'src/router/constants'

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
  z-index: ${zIndex.navigation};
  transition: ${({ theme }) => theme.animation.transitionDuration};
  ${({ hasNavigation }) => !hasNavigation && `transform: translateY(80px);`}
`
