import { LinkType } from 'src/widgets/Link/linkConfig'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { LinkProps } from './useLinkConfig'

const USER_TYPES: LinkType[] = ['user', 'userFollowers', 'userSubscribers']

export const useLinkFinalType = (
  type: LinkType,
  props?: Record<string, any>
): {
  type: LinkType
  props?: LinkProps
} => {
  const { user } = useCurrentUser()

  if (USER_TYPES.includes(type) && user?.username === props?.userSlug) {
    if (type === 'userFollowers') {
      type = 'profileFollowers'
    }

    if (type === 'userSubscribers') {
      type = 'profileSubscribers'
    }

    if (type === 'user') {
      type = 'profile'
    }
  }

  return {
    type,
    props
  }
}
