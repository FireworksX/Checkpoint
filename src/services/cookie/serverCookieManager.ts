import { Request, Response } from 'express'
import { CookieManager, CookiesType } from 'src/interfaces/CookieManager'

export const serverCookieManager = <T extends CookiesType = CookiesType>(
  req: Request,
  res: Response,
  prefix = ''
): CookieManager<T> => {
  const get = (name: keyof T) => {
    let result = req.cookies[`${prefix}${name}`]

    try {
      result = JSON.parse(result)
    } catch (e) {
      return result
    }

    return result
  }

  const getAll = () => {
    return req.cookies
  }

  const set = <K extends keyof T>(name: K, value: T[K], days = 30) => {
    const maxAge = days * 24 * 60 * 60 * 1000

    res.cookie(`${prefix}${name}`, value, { maxAge })
  }

  const getAllByString = () => {
    const allItems = getAll()
    return Object.keys(allItems)
      .map(key => `${key}=${allItems[key]}`)
      .join('; ')
  }

  return {
    get,
    getAll,
    getAllByString,
    set
  }
}

































