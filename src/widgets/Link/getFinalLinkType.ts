import { LinkType } from './linkConfig'

const USER_TYPES: LinkType[] = ['user', 'userFollowers', 'userSubscribers']

type Props = Record<string, any> & {
  currentUser?: {
    userName: string
  }
}

export const getFinalLinkType = (type: LinkType, props: Props) => {
  if (USER_TYPES.includes(type) && props?.currentUser?.userName === props?.userSlug) {
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
