import { FC, useEffect } from 'react'
import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import isBrowser from 'src/utils/isBrowser'

interface RedirectProps {
  routeName: string
  params?: Record<keyof typeof ROUTE_PARAMS, any>
}

const Redirect: FC<RedirectProps> = ({ routeName, params }) => {
  const { routerInstance } = useRouter()

  if (!isBrowser) {
    routerInstance.redirect(routeName, params)
  }

  useEffect(() => {
    routerInstance.redirect(routeName, params)
  }, [])

  return null
}

export default Redirect
