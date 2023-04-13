import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import {UserMeFlagsFragmentFragmentDoc} from "../../fragments/UserMeFlagsFragment";

export const updateCountersResolver: UpdateResolver = (result, args, cache) => {
  if (result.unSubscribe) {
    const userEntity = {
      __typename: 'User',
      userName: args.input.userName
    }

    const userFlags = cache.readFragment(UserMeFlagsFragmentFragmentDoc, userEntity)


    if (userFlags) {
      userFlags.me.isFollow = false
      cache.writeFragment(UserMeFlagsFragmentFragmentDoc, {
        ...userEntity,
        ...userFlags
      })

    }
  }
}
