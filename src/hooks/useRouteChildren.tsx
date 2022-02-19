import { useRoute } from 'react-router5'
import { RouteNamesType } from 'src/router/constants'
import { Route } from 'router5'
import { FC } from 'react'

const getRenderRoutes = (routes: Route[], routeName: string, index = 0, acc: Route[] = []): Route[] => {
  const currentName = routeName.split('.')[index]
  const findRoute = routes.find(({ name }) => name === currentName)

  if (findRoute) {
    acc.push(findRoute)
    getRenderRoutes(findRoute?.children || [], routeName, index + 1, acc)
  }

  return acc
}

const Noop: FC = ({ children }) => <>{children}</>

export const useRouteChildren = (parentRouteName: RouteNamesType) => {
  const { route, router } = useRoute()
  const { routes } = router.getDependencies()
  const renderComponents = getRenderRoutes(routes, route.name, 0, []).filter(({ component }) => !!component)
  const currentRouteIndex = renderComponents.findIndex(({ name }) => name === parentRouteName)
  const nextRouteIndex = currentRouteIndex !== -1 ? currentRouteIndex + 1 : -1

  if (nextRouteIndex !== -1) {
    return renderComponents[nextRouteIndex]?.component || Noop
  }
}
