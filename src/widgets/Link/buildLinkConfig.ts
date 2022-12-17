import linkConfig, { LinkType } from './linkConfig'
import { Router } from '../../hooks/useRouter'

export type LinkOptions = { safeOptionalParams?: boolean; router: Router }
export type LinkProps = Record<string, any> & LinkOptions

export const buildLinkConfig = (type: LinkType, props: LinkProps) => {
  const { safeOptionalParams = true, router } = props || {}
  const { route } = router

  const routeParams: { [key: string]: any } = {}

  const link = type && linkConfig[type]

  if (type && link) {
    linkConfig[type].params.optional.forEach(key => {
      routeParams[key] = safeOptionalParams ? props?.[key] || ((router as any)[key] || router.getParam(key)) : props?.[key]
    })
    linkConfig[type].params.required.forEach(key => {
      routeParams[key] = props?.[key]
    })
  }

  let href

  try {
    href = router.routerInstance.buildUrl(link?.name || 'root', routeParams)
  } catch (e) {
    console.error(e, link.name, routeParams)
  }
  const isSamePage = route?.path === href
  const isActive = props.router.isActive()

  return {
    routeParams,
    link,
    href,
    isSamePage
  }
}
