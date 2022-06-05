import { useRoute } from 'react-router5'
import linkConfig, { LinkType } from '../linkConfig'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkFinalType } from './useLinkFinalType'

export type LinkProps = Record<string, any>

export const useLinkConfig = (type: LinkType, props?: LinkProps) => {
  const router = useRouter()
  const { route } = useRoute()

  const routeParams: { [key: string]: any } = {}
  const { type: finalType, props: finalProps } = useLinkFinalType(type, props)

  const link = finalType && linkConfig[finalType]

  if (finalType && link) {
    linkConfig[finalType].params.optional.forEach(key => {
      routeParams[key] = finalProps?.[key] || router.getParam(key)
    })
    linkConfig[finalType].params.required.forEach(key => {
      routeParams[key] = finalProps?.[key]
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
