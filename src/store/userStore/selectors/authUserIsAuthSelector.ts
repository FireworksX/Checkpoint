import { selector } from 'recoil'
import { authUserAtom } from '../atoms/authUserAtom'
import { STORE_NAMES } from 'src/router/constants'

export const authUserIsAuthSelector = selector({
  key: STORE_NAMES.authUserIsAuthSelector,
  get: ({ get }) => {
    const user = get(authUserAtom)

    return user && user?.id?.length > 0
  }
})
