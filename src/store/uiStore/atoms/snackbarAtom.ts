import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'
import {SnackbarOptions} from "src/hooks/useSnackbar";

interface Options {
  isOpen: boolean
  options?: SnackbarOptions
}

export const snackbarAtom = atom<Options>({
  key: STORE_NAMES.snackbarAtom,
  default: {
    isOpen: false,
    options: undefined
  }
})
