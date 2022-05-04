import { useContext } from 'react'
import {CookieManager, CookiesType} from 'src/interfaces/CookieManager'
import { CookieContext } from 'src/services/cookie/CookieProvider'

type GetterAlias<T extends keyof CookiesType> = CookiesType[T]
type SetterAlias<T extends keyof CookiesType> = (value: CookiesType[T]) => void

export default function useCookies<T extends keyof CookiesType>(name: T): [GetterAlias<T>, SetterAlias<T>] {
  const manager = useContext<CookieManager | undefined>(CookieContext)

  if (!manager) {
    throw new Error('Missing <CookiesProvider>')
  }

  return [manager.get(name), (value) => manager.set(name, value)]
}
