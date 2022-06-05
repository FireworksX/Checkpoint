import { useRecoilState } from 'recoil'
import { modalAtom } from 'src/store/uiStore'
import { useCallback } from 'react'
import { ModalName } from 'src/router/constants'

export const useModal = <T extends ModalName>(modalName: T) => {
  const [currentModal, setCurrentModal] = useRecoilState(modalAtom)
  const isOpen = currentModal === modalName

  const open = useCallback(() => {
    if (!isOpen) {
      setCurrentModal(modalName)
    }
  }, [setCurrentModal, isOpen, modalName])

  const close = useCallback(() => {
    if (isOpen) {
      setCurrentModal(undefined)
    }
  }, [setCurrentModal, isOpen])

  return {
    isOpen,
    open,
    close
  }
}
