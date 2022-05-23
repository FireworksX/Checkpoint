import { atom } from 'recoil'
import { AuthUser } from 'src/interfaces/User'
import { STORE_NAMES } from 'src/router/constants'

type Props = AuthUser

export const authUserAtom = atom<Props>({
  key: STORE_NAMES.authUserAtom,
  default: {
    id: ''
  }
})
