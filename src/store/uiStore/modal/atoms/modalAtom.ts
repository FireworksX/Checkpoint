import { atom } from 'nanostores'
import { ModalName } from 'src/router/constants'

export const modalAtom = atom<ModalName | undefined>(undefined)
