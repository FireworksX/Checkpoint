import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'

interface NavigationRouteProps {
  className?: string
}

const NavigationRoute: FC<NavigationRouteProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      {children}
      <Styled.Navigation hasNavigation />
    </Styled.Root>
  )
}

export default route(NavigationRoute, ROUTE_NAMES.navigation)
