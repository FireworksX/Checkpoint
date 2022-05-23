import { selector } from 'recoil'
import { authUserAtom } from '../atoms/authUserAtom'

export const authUserIsAuthSelector = selector({
  key: 'authUserIsAuthSelector',
  get: ({ get }) => {
    const { id } = get(authUserAtom)

    return id.length > 0
  }
})
