import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import { getMe } from '../../utils/getMe'

export const updateListsResolver: UpdateResolver = (result, args, cache, info) => {
  const { body } = getMe(cache)

  const userSubscribersKey = cache.keyOfField('userSubscribers', { userName: body.userName })
  const userSubscribersLinks = cache.resolve('Query', userSubscribersKey)

  console.log(userSubscribersLinks)
}
