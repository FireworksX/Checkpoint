import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import {UserMeFlagsFragmentFragmentDoc} from "../../fragments/UserMeFlagsFragment";

export const updateConnectionFlagsResolver: UpdateResolver = (result, args, cache) => {
  if (result.subscribe) {
    const userEntity = {
      __typename: 'User',
      userName: args.input.userName
    }

    const userFlags = cache.readFragment(UserMeFlagsFragmentFragmentDoc, userEntity)


    if (userFlags) {
      userFlags.me.isFollow = true
      cache.writeFragment(UserMeFlagsFragmentFragmentDoc, {
        ...userEntity,
        ...userFlags
      })

    }
  }
}
