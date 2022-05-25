import { Request, Response } from 'express'

export type CookiesType = Partial<{
  selfLocation: {
    lat: number
    lng: number
  }
  userPhone: string
  accessToken: string
  refreshToken: string
}>

export interface CookieManager<T extends CookiesType = CookiesType> {
  get<K extends keyof T>(name: K): T[K]
  getAll(): CookiesType
  getAllByString(): string
  set<K extends keyof T>(name: K, value: T[K], days?: number): void
}

export type ClientCookieManager = <T extends CookiesType = CookiesType>(prefix?: string) => CookieManager<T>

export type ServerCookieManager = <T extends CookiesType = CookiesType>(
  req: Request,
  res: Response,
  prefix: string
) => CookieManager<T>
