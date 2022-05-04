import { atom } from 'recoil'
import { Request } from 'express'

export const userAgentAtom = atom<Partial<Request['useragent']>>({
  key: 'userAgentAtom',
  default: {}
})
