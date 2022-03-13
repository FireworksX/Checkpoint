import { createContext, FC } from 'react'
import { CookieManager } from 'src/interfaces/CookieManager'
import { CookieKey } from 'src/hooks/useCookies'

interface Props {
  cookieManager: CookieManager
}

export const CookieContext = createContext<CookieManager<CookieKey> | undefined>(undefined)

export const CookieProvider: FC<Props> = ({ children, cookieManager }) => {
  return <CookieContext.Provider value={cookieManager}>{children}</CookieContext.Provider>
}
