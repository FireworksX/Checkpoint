import { UserHeaderProps } from '../UserHeader'
import { useRouter } from '../../../hooks/useRouter'
import { ROUTE_NAMES, ROUTE_PARAMS } from 'src/router/constants'
import { isValue } from '../../../utils/isValue'

interface Options {
  followers?: number
  subscribers?: number
}

export const useUserHeaderCounters = ({ subscribers, followers }: Options) => {
  const { isActive, getParam } = useRouter()
  const isProfile = isActive(ROUTE_NAMES.profile)
  const userSlug = getParam(ROUTE_PARAMS.userSlug)
  const counters: UserHeaderProps['counters'] = []

  counters.push({
    value: 124,
    label: 'Posts',
    appLinkProps: isProfile ? { type: 'profileConnections' } : { type: 'userConnections', userSlug }
  })

  if (isValue(followers)) {
    counters.push({
      value: followers,
      label: 'Followers',
      appLinkProps: isProfile ? { type: 'profileFollowers' } : { type: 'userFollowers', userSlug }
    })
  }

  if (isValue(subscribers)) {
    counters.push({
      value: subscribers,
      label: 'Following',
      appLinkProps: isProfile ? { type: 'profileSubscribers' } : { type: 'userSubscribers', userSlug }
    })
  }

  return counters
}
