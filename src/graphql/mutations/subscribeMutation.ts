import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import { getMeKey } from '../utils/getMe'
import { UserCountersFragmentFragmentDoc } from '../fragments/UserCountersFragment'
import {
  SubscribeUserMutation,
  SubscribeUserMutationVariables
} from '../../widgets/SubscribeContainer/queries/SubscribeUserMutation'

export const subscribeMutation: UpdateResolver<SubscribeUserMutation, { input: SubscribeUserMutationVariables }> = (
  result,
  args,
  cache
) => {
  const { body } = getMeKey(cache)

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

    const userSubscribersKey = cache.keyOfField('userSubscribers', { userName: body.userName })
    const userSubscribersLinks = cache.resolve('Query', userSubscribersKey)

    console.log(userSubscribersLinks);

  }
}
