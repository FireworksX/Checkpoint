type Predictor<T, K extends keyof T = keyof T> = (key: K, value: T[K]) => boolean

export const filterObjectBy = <T extends Record<string, any>>(object: T, predictor: Predictor<T>): Partial<T> => {
  return Object.entries(object)
    .filter(([key, value]) => predictor(key, value))
    .reduce<any>((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {})
}
