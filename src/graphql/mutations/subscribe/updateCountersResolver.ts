import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import { getMe } from '../../utils/getMe'
import { UserCountersFragmentFragmentDoc } from '../../fragments/UserCountersFragment'

export const updateCountersResolver: UpdateResolver = (result, args, cache) => {
  const { body } = getMe(cache)

  if (result.subscribe) {
    const userEntity = {
      __typename: 'User',
      userName: args.input.userName
    }

    const meEntity = {
      __typename: 'User',
      userName: body.userName
    }

    const userCounters = cache.readFragment(UserCountersFragmentFragmentDoc, userEntity)
    const meCounters = cache.readFragment(UserCountersFragmentFragmentDoc, meEntity)

    if (userCounters) {
      userCounters.counters.followers += 1
      cache.writeFragment(UserCountersFragmentFragmentDoc, {
        ...userEntity,
        ...userCounters
      })
    }

    if (meCounters) {
      meCounters.counters.subscribers += 1
      cache.writeFragment(UserCountersFragmentFragmentDoc, {
        ...meEntity,
        ...meCounters
      })
    }
  }
}
