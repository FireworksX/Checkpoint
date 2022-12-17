import { LinkType } from '../linkConfig'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkFinalType } from './useLinkFinalType'
import { buildLinkConfig, LinkProps } from '../buildLinkConfig'

export const useLinkConfig = (type: LinkType, props?: Omit<LinkProps, 'router'>) => {
  const router = useRouter()
  const finalType = useLinkFinalType(type, props)

  return buildLinkConfig(finalType.type, { ...finalType.props, router })
}
