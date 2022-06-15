import { useRecoilState } from 'recoil'
import { modalAtom } from 'src/store/uiStore'
import { useCallback } from 'react'
import { ModalName } from 'src/router/constants'

const modalPromiseWaiter = () => new Promise(resolve => setTimeout(resolve, 300))

export const useModal = <T extends ModalName>(modalName: T) => {
  const [currentModal, setCurrentModal] = useRecoilState(modalAtom)
  const isOpen = currentModal === modalName

  const open = useCallback(async () => {
    if (!isOpen) {
      setCurrentModal(modalName)
      await modalPromiseWaiter()
    }
  }, [setCurrentModal, isOpen, modalName])

  const close = useCallback(async () => {
    if (isOpen) {
      setCurrentModal(undefined)
      await modalPromiseWaiter()
    }
  }, [setCurrentModal, isOpen])

  return {
    isOpen,
    open,
    close
  }
}
