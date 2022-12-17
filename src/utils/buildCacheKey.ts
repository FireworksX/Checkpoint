export const buildCacheKey = <T = any>(target: T, ...keys: (keyof T)[]): string | null => {
  const resultKeys = keys.filter(key => key in target)

  if (resultKeys.length === keys.length) {
    return resultKeys.map(key => target[key]).join('_')
  }

  return null
}
