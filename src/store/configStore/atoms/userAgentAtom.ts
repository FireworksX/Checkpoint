import { atom } from 'recoil'
import { Request } from 'express'
import { STORE_NAMES } from 'src/router/constants'

export const userAgentAtom = atom<Partial<Request['useragent']>>({
  key: STORE_NAMES.userAgentAtom,
  default: {}
})
