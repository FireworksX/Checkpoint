import {atom, noWait} from 'recoil'
import { AuthUser } from 'src/interfaces/User'
import { STORE_NAMES } from 'src/router/constants'
import { authUserSelector } from 'src/store/userStore/selectors/authUserSelector'
import isBrowser from "../../../utils/isBrowser";

type Props = AuthUser

export const authUserAtom = atom<Props>({
  key: STORE_NAMES.authUserAtom,
  default: isBrowser ? noWait(authUserSelector) : authUserSelector
})
