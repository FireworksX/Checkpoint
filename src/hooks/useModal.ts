import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { modalAtom, modalContextAtom } from 'src/store/uiStore'
import { ModalName } from 'src/router/constants'
import { promiseWaiter } from 'src/utils/promiseWaiter'

export const useModal = <CTX = any>(modalName: ModalName) => {
  const [currentModal, setCurrentModal] = useRecoilState(modalAtom)
  const [modalContext, setModalContext] = useRecoilState<CTX | undefined>(modalContextAtom)
  const isOpen = currentModal === modalName

  const close = useCallback(async () => {
    setCurrentModal(undefined)
    await promiseWaiter()
    setModalContext(undefined)
  }, [setCurrentModal, setModalContext])

  const open = useCallback(
    async (context?: CTX) => {
      if (currentModal) {
        await close()
      }

      setCurrentModal(modalName)
      setModalContext(context)
      await promiseWaiter()
    },
    [setCurrentModal, modalName, setModalContext, close, currentModal]
  )

  const updateContext = useCallback(
    (fields: Partial<CTX>) => {
      if (isOpen) {
        setModalContext(curValue => ({ ...curValue, ...fields } as CTX))
      }
    },
    [setModalContext, isOpen]
  )

  return {
    isOpen,
    open,
    close,
    context: modalContext,
    updateContext
  }
}
