import { Request, Response } from 'express'
import { DeepPartial } from './utils'

export type CookiesType = DeepPartial<{
  selfLocation: {
    lat: number
    lng: number
    zoom: number
  }
  userMail: string
  accessToken: string
  refreshToken: string
  citySlug: string
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
