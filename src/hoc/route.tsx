import { FC, useEffect } from 'react'
import { RouteNamesType } from 'src/router/constants'
import { useRouteChildren } from 'src/hooks/useRouteChildren'
import { useRouter } from 'src/hooks/useRouter'

export const route = (Route: FC, routeName: RouteNamesType) => {
  const RouteWrapper: FC = () => {
    const router = useRouter()
    const ChildrenComponent = useRouteChildren(routeName)

    return (
      <Route>
        {ChildrenComponent ? <ChildrenComponent /> : null}
      </Route>
    )
  }

  return RouteWrapper
}
