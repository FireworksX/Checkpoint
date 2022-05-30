import { FC } from 'react'
import { RouteNamesType } from 'src/router/constants'
import { useRouteChildren } from 'src/hooks/useRouteChildren'

export const route = (Route: FC, routeName: RouteNamesType) => {
  const RouteWrapper: FC = () => {
    const ChildrenComponent = useRouteChildren(routeName)

    return <Route>{ChildrenComponent ? <ChildrenComponent /> : null}</Route>
  }

  return RouteWrapper
}
