import { createContext, FC } from 'react'
import { CookieManager } from 'src/interfaces/CookieManager'

interface Props {
  cookieManager: CookieManager
}

export const CookieContext = createContext<CookieManager | undefined>(undefined)

export const CookieProvider: FC<Props> = ({ children, cookieManager }) => {
  return <CookieContext.Provider value={cookieManager}>{children}</CookieContext.Provider>
}
