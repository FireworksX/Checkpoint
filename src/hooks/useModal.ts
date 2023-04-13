import { useCallback } from 'react'
import { modalAtom, modalContextAtom } from 'src/store/uiStore'
import { MODAL_NAMES, ModalName } from 'src/router/constants'
import { promiseWaiter } from 'src/utils/promiseWaiter'
import { CreatePostsModalContext } from '../modals/CreatePostModal/CreatePostModal'
import { PostPreviewModalContext } from '../modals/PostPreviewModal/PostPreviewModal'
import { GeoLocationRestrictedContext } from '../modals/GeoLocationRestricted/GeoLocationRestricted'
import { PlacePreviewModalContext } from '../modals/PlacePreviewModal/PlacePreviewModal'
import { useStore } from '@nanostores/react'
import {PostActionsContext} from "../modals/PostActions/PostActions";

export type ModalsCtx = Partial<{
  [MODAL_NAMES.postCreate]: CreatePostsModalContext
  [MODAL_NAMES.postPreview]: PostPreviewModalContext
  [MODAL_NAMES.geoLocationRestricted]: GeoLocationRestrictedContext
  [MODAL_NAMES.placePreview]: PlacePreviewModalContext
  [MODAL_NAMES.postActions]: PostActionsContext
}>

export const useModal = () => {
  const currentModal = useStore(modalAtom)
  const modalContext = useStore(modalContextAtom)

  const hide = useCallback(async () => {
    modalAtom.set(undefined)
    await promiseWaiter(600)
  }, [])

  const close = useCallback(
    async (resetCtx = false) => {
      await hide()
      if (resetCtx && currentModal) {
        modalContextAtom.set({ ...modalContextAtom.get(), [currentModal]: undefined })
      }
    },
    [hide, currentModal]
  )

  const open = useCallback(
    async <T extends ModalName>(name: T, context?: ModalsCtx[T]) => {
      if (currentModal) {
        await hide()
      }

      modalAtom.set(name)
      modalContextAtom.set({ ...modalContextAtom.get(), [name]: context })

      await promiseWaiter()
    },
    [currentModal, hide]
  )

  const updateContext = useCallback(<T extends ModalName>(name: T, fields: Partial<ModalsCtx[T]>) => {
    // if (isOpen) {
    modalContextAtom.set({ ...modalContextAtom.get(), [name]: { ...modalContextAtom.get()[name], ...fields } })
    // }
  }, [])

  // useEffect(() => {
  //   setModalHistory(history => {
  //     if (!modalName) {
  //       return []
  //     }
  //
  //     return [...history, modalName]
  //   })
  // }, [modalName])

  return {
    open,
    close,
    modalContext,
    updateContext,
    currentModal,
  }
}
