import { useContext } from 'react'
import { CookieManager } from 'src/interfaces/CookieManager'
import { CookieContext } from 'src/services/cookie/CookieProvider'

type GetterAlias = string
type SetterAlias = (value: string) => void

export type CookieKey = 'profile'

export default function useCookies(name: CookieKey): [GetterAlias, SetterAlias] {
  const manager = useContext<CookieManager<CookieKey> | undefined>(CookieContext)

  if (!manager) {
    throw new Error('Missing <CookiesProvider>')
  }

  return [manager.get(name), (value: string) => manager.set(name, value)]
}
