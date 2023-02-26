import { atom } from 'nanostores'
import { ModalName } from 'src/router/constants'

export const modalHistoryAtom = atom<ModalName[]>([])
