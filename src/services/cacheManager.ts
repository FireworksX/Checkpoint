export const cacheManager = () => {
  const cache = new Map()
  const id = Date.now()

  return {
    id,
    has: cache.has.bind(cache),
    delete: cache.delete.bind(cache),
    get: cache.get.bind(cache),
    set: cache.set.bind(cache),
    forEach: cache.forEach.bind(cache)
  }
}

export type CacheManager = ReturnType<typeof cacheManager>
