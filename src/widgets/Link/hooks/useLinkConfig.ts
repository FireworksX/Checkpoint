import { useRoute } from 'react-router5'
import linkConfig, { LinkNavigationTypeProps, LinkType } from '../linkConfig'
import { useRouter } from 'src/hooks/useRouter'

interface Props {}

export const useLinkConfig = <T extends LinkType>(type: T, props?: Props & LinkNavigationTypeProps<T>) => {
  const router = useRouter()
  const { route } = useRoute()

  const routeParams: { [key: string]: any } = {}
  const link = type && linkConfig[type]

  if (type && link) {
    linkConfig[type].params.optional.forEach(key => {
      routeParams[key] = props?.[key] || router.getParam(key)
    })
    linkConfig[type].params.required.forEach(key => {
      routeParams[key] = props?.[key]
    })
  }


  const href = router.routerInstance.buildUrl(link?.name || 'root', routeParams)
  const isSamePage = route?.path === href

  return {
    routeParams,
    link,
    href,
    isSamePage
  }
}
