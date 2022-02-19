import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'

interface WelcomeRouteProps {
  className?: string
}

const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  return <Styled.Root className={className}>WelcomeRoute</Styled.Root>
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
