import { CookieManager, CookiesType } from 'src/interfaces/CookieManager'
import { isPrimitive } from 'src/utils/isPrimitive'

export const clientCookieManager = <T extends CookiesType = CookiesType>(prefix = ''): CookieManager<T> => {
  const get = <K extends keyof T>(name: keyof T): T[K] => {
    const cookies = getAll()

    return (cookies as any)[`${prefix}${name}`]
  }

  const getAll = (): CookiesType => {
    const pairs = document.cookie.split(';')
    const cookies = {} as any

    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=')
      const decodeValue = decodeURIComponent(pair[1])
      let parseValue = decodeValue.includes('{') ? JSON.parse(decodeValue) : decodeValue

      if (isPrimitive(parseValue)) {
        if (!isNaN(Number(parseValue))) {
          parseValue = Number(parseValue)
        } else if(parseValue === 'undefined') {
          parseValue = undefined
        } else if (parseValue === 'null') {
          parseValue = null
        }
      }

      cookies[(pair[0] + '').trim()] = parseValue
    }

    return cookies
  }

  const set = <K extends keyof T>(name: K, value: T[K], days = 30) => {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)

    document.cookie = [
      `${prefix}${name}=${isPrimitive(value) ? value : JSON.stringify(value)}`,
      `expires=${date.toUTCString()}`,
      'path=/'
    ].join('; ')
  }

  const getAllByString = () => {
    const allItems = getAll()
    return Object.keys(allItems)
      .map(key => `${key}=${(allItems as any)[key]}`)
      .join('; ')
  }

  return {
    getAllByString,
    get,
    getAll,
    set
  }
}
