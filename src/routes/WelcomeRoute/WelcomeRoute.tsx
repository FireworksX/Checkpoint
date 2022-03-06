import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { useKeepNavigation } from 'src/hooks/keepNavigation'

interface WelcomeRouteProps {
  className?: string
}

const WelcomeRoute: FC<WelcomeRouteProps> = ({ className }) => {
  useKeepNavigation(false)

  return (
    <Styled.Root className={className}>
      <Styled.Overlay />
      <Styled.OverlayTexts>
        <Styled.HeaderLabel>Placesato</Styled.HeaderLabel>
        <Styled.Title>Welcome to Placesato</Styled.Title>
        <Styled.Description>Find your destination</Styled.Description>
      </Styled.OverlayTexts>
      WelcomeRoute
    </Styled.Root>
  )
}

export default route(WelcomeRoute, ROUTE_NAMES.welcome)
