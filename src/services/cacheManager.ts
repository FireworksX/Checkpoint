import { AppContext } from 'server'

export type CacheEntityKey = 'x-user-ip'

export type CacheManagerStore = Partial<{
  'x-user-ip': string
  useragent: AppContext['req']['useragent']
}>

type CacheKeys = keyof CacheManagerStore
type CacheValue<T extends CacheKeys> = CacheManagerStore[T]

export const cacheManager = () => {
  const cache: CacheManagerStore = {}
  const id = Date.now()

  const has = (key: CacheKeys) => {
    return key in cache
  }

  const remove = (key: CacheKeys) => {
    delete cache[key]
  }

  const get = <T extends CacheKeys>(key: T): CacheValue<T> | undefined => {
    return cache[key]
  }

  const set = <T extends CacheKeys>(key: T, value: CacheValue<T> | undefined) => {
    cache[key] = value
  }

  const forEach = (predictor: (key: CacheKeys, value: CacheValue<unknown>) => void) => {
    Object.entries(cache).forEach(([key, value]) => predictor(key as CacheKeys, value))
  }

  return {
    id,
    has,
    remove,
    get,
    set,
    forEach
  }
}

export type CacheManager = ReturnType<typeof cacheManager>
