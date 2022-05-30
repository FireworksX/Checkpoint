import { useRecoilValue } from 'recoil'
import { authUserAtom } from 'src/store/userStore/atoms/authUserAtom'

export const useProfileRoute = () => {
  const currentUser = useRecoilValue(authUserAtom)

  return {
    currentUser
  }
}
