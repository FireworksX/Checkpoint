import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import { useRouter } from 'src/hooks/useRouter'
import Redirect from 'src/components/Redirect/Redirect'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'

interface NavigationRouteProps {
  className?: string
}

const NavigationRoute: FC<NavigationRouteProps> = ({ className, children }) => {
  const { citySlug } = useRouter()
  const { link } = useLinkConfig('cityList')

    if (!citySlug) {
    // return <Redirect routeName={link.name} />
  }

  return (
    <Styled.Root className={className}>
      {children}
      <Styled.Navigation hasNavigation />
    </Styled.Root>
  )
}

export default withValidateUser(route(NavigationRoute, ROUTE_NAMES.navigation))
