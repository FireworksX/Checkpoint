import { ClientCookieManager, CookieManager } from 'src/interfaces/CookieManager'

export const clientCookieManager = <T extends string = string>(prefix = ''): CookieManager<T> => {
  const get = (name: T): string => {
    const cookies = getAll()

    return cookies[`${prefix}${name}`]
  }

  const getAll = () => {
    const pairs = document.cookie.split(';')
    const cookies: Record<string, string> = {}

    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=')
      cookies[(pair[0] + '').trim()] = decodeURIComponent(pair[1])
    }

    return cookies
  }

  const set = (name: T, value = '', days = 30) => {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)

    document.cookie = [`${prefix}${name}=${value}`, `expires=${date.toUTCString()}`, 'path=/'].join('; ')
  }

  const getAllByString = () => {
    const allItems = getAll()
    return Object.keys(allItems).map((key) => `${key}=${allItems[key]}`).join('; ')
  }

  return {
    getAllByString,
    get,
    getAll,
    set
  }
}
