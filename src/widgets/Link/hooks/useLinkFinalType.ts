import { LinkType } from 'src/widgets/Link/linkConfig'
import { getFinalLinkType } from '../getFinalLinkType'
import { LinkProps } from '../buildLinkConfig'

export const useLinkFinalType = (type: LinkType, props: LinkProps) => {
  //const { user } = useCurrentUser()

  return getFinalLinkType(type, {
    ...props,
    currentUser: undefined
  })
}
