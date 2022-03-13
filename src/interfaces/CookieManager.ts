import { Request, Response } from 'express'

export interface CookieManager<T extends string = string> {
  get(name: T): string
  getAll(): Record<T, string>
  set(name: T, value: string, days?: number): void
}

export type ClientCookieManager = <T extends string = string>(prefix?: string) => CookieManager<T>

export type ServerCookieManager = <T extends string = string>(
  req: Request,
  res: Response,
  prefix: string
) => CookieManager<T>
