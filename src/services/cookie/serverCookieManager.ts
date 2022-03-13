import { Request, Response } from 'express'
import { CookieManager } from 'src/interfaces/CookieManager'

export const serverCookieManager = <T extends string = string>(
  req: Request,
  res: Response,
  prefix = ''
): CookieManager<T> => {
  const get = (name: string) => {
    return req.cookies[`${prefix}${name}`]
  }

  const getAll = () => {
    return req.cookies
  }

  const set = (name: string, value: string, days = 30) => {
    const maxAge = days * 24 * 60 * 60 * 1000

    res.cookie(`${prefix}${name}`, value, { maxAge })
  }

  return {
    get,
    getAll,
    set
  }
}
