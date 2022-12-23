import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import {UserInfoFragmentFragmentDoc} from "../../fragments/UserInfoFragment";

export const updateUserInfoResolver: UpdateResolver = (result, args, cache) => {
  cache.readFragment(UserInfoFragmentFragmentDoc, result)

}
