import { LinkType } from './linkConfig'
import {AuthUserResponse} from "../../interfaces/User";

const USER_TYPES: LinkType[] = ['user', 'userFollowers', 'userSubscribers']

type Props = Record<string, any> & {
  currentUser?: AuthUserResponse
}

export const getFinalLinkType = (type: LinkType, props: Props) => {
  if (USER_TYPES.includes(type) && props?.user?.username === props?.userSlug) {
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
