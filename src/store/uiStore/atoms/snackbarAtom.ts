import { atom } from 'nanostores'
import { SnackbarOptions } from 'src/hooks/useSnackbar'

interface Options {
  isOpen: boolean
  options?: SnackbarOptions
}

export const snackbarAtom = atom<Options>({
  isOpen: false,
  options: undefined
})
