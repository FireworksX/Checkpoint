import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { modalAtom, modalContextAtom } from 'src/store/uiStore'
import { MODAL_NAMES, ModalName } from 'src/router/constants'
import { promiseWaiter } from 'src/utils/promiseWaiter'
import { modalClosingAtom } from '../store/uiStore/atoms/modalClosingAtom'
import { CreatePostsModalContext } from '../modals/CreatePostModal/CreatePostModal'
import { PostPreviewModalContext } from '../modals/PostPreviewModal/PostPreviewModal'
import { GeoLocationRestrictedContext } from '../modals/GeoLocationRestricted/GeoLocationRestricted'
import {PlacePreviewModalContext} from "../modals/PlacePreviewModal/PlacePreviewModal";

export type ModalsCtx = Partial<{
  [MODAL_NAMES.postCreate]: CreatePostsModalContext
  [MODAL_NAMES.postPreview]: PostPreviewModalContext
  [MODAL_NAMES.geoLocationRestricted]: GeoLocationRestrictedContext
  [MODAL_NAMES.placePreview]: PlacePreviewModalContext
}>

export const useModal = <T extends ModalName, CTX extends ModalsCtx[T]>(modalName: T) => {
  const [modalClosing, setModalClosing] = useRecoilState(modalClosingAtom)
  const [currentModal, setCurrentModal] = useRecoilState(modalAtom)
  const [modalContext, setModalContext] = useRecoilState(modalContextAtom)
  const isOpen = currentModal === modalName

  const close = useCallback(
    async (resetCtx = false) => {
      setModalClosing(true)
      setCurrentModal(undefined)
      await promiseWaiter(600)
      setModalClosing(false)
      if (resetCtx) {
        setModalContext(data => ({ ...data, [modalName]: undefined }))
      }
    },
    [setCurrentModal, setModalContext, setModalClosing, modalName]
  )

  const open = useCallback(
    async (context?: CTX) => {
      if (currentModal) {
        await close()
      }

      setCurrentModal(modalName)
      setModalContext(data => ({ ...data, [modalName]: context }))
      await promiseWaiter()
    },
    [setCurrentModal, modalName, setModalContext, close, currentModal]
  )

  const updateContext = useCallback(
    (fields: Partial<CTX>) => {
      if (isOpen) {
        setModalContext(data => ({ ...data, [modalName]: { ...data[modalName], ...fields } }))
      }
    },
    [setModalContext, isOpen, modalName]
  )

  return {
    isOpen,
    open,
    close,
    context: modalContext[modalName],
    updateContext,
    modalClosing
  }
}
