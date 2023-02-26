import { atom } from 'nanostores'

interface Props {
  lat?: number
  lng?: number
}

export const userLocationAtom = atom<Props>({})
