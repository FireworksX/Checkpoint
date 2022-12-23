import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'

interface UrqlCacheStore {
  subscribe: UpdateResolver[]
  unSubscribe: UpdateResolver[]
  editUser: UpdateResolver[]
}

export type UrqlCacheNotify = ReturnType<typeof urqlCacheNotify>

export const urqlCacheNotify = () => {
  const store: UrqlCacheStore = {}

  const mutation =
    (mutationName: keyof UrqlCacheStore): UpdateResolver =>
    (parent, args, cache, info) => {
      if (mutationName in store) {
        store[mutationName].forEach(handler => handler(parent, args, cache, info))
      }
    }

  const on = (name: keyof UrqlCacheStore, handler: UpdateResolver) => {
    if (name in store) {
      store[name].push(handler)
    } else {
      store[name] = [handler]
    }
  }

  return {
    mutation,
    on
  }
}
