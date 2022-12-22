import { Cache } from '@urql/exchange-graphcache/dist/types/types'
import { MeUserFragmentFragmentDoc } from 'src/graphql/fragments/MeUserFragment'
import { CurrentUserQuery } from 'src/hooks/data/useCurrentUser/CurrentUserQuery'

export const getMe = (cache: Cache) => {
  const [meField] = cache.inspectFields('Query').filter(field => field.fieldName === 'getMe')
  const resolved = cache.resolve('Query', meField.fieldKey)

  const body = cache.readFragment<CurrentUserQuery['getMe']>(MeUserFragmentFragmentDoc, resolved)

  return {
    field: meField,
    resolved: cache.resolve('Query', meField.fieldKey),
    body
  }
}
