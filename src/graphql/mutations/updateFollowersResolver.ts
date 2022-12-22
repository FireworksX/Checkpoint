import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'

const FIELDS = ['userFollowers', 'userSubscribers']

export const updateFollowersResolver: UpdateResolver = (parent, args, cache) => {
  cache
    .inspectFields('Query')
    .filter(field => FIELDS.includes(field.fieldName))
    .forEach(field => {
      cache.invalidate('Query', field.fieldName, field.arguments)
    })
}
