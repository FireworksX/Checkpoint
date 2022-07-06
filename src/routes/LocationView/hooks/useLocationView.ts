import { useCallback, useMemo } from 'react'
import { useLocationControl } from 'src/hooks/data/location/useLocationControl'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { LocationDetail, RemoveLocation } from 'src/interfaces/Location'
import { useModal } from 'src/hooks/useModal'
import { LocationViewOptionsModalContext } from 'src/modals/LocationViewOptionsModal/LocationViewOptionsModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { PreRemoveLocationModalContext } from 'src/modals/PreRemoveLocationModal/PreRemoveLocationModal'
import { useMutation } from 'src/hooks/useMutation'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'

export const useLocationView = () => {
  const { user } = useCurrentUser()
  const { locationSlug, citySlug, backSafe } = useRouter()
  const { data } = useRequest<LocationDetail>(`${apiEndpoints.LOCATIONS_DETAIL}/${locationSlug}`)
  const afterRemoveLink = useLinkConfig('cityMap', { citySlug })

  const { execute: handleRemove } = useMutation<boolean, RemoveLocation>(apiEndpoints.LOCATIONS_REMOVE)

  const initialData = useMemo(
    () => ({
      gallery: {
        initialMediaFiles: data?.data?.fields.gallery
      },
      title: {
        initialText: data?.data?.fields?.title
      },
      description: {
        initialText: data?.data?.fields?.description
      },
      kitchen: {
        initialKitchen: data?.data?.fields?.kitchen
      },
      tags: {
        initialTags: (data?.data?.fields?.tags || []).map(tag => ({ value: tag, label: tag }))
      },
      wifi: {
        initialValue: data?.data?.fields?.wifispeed
      },
      averageBill: {
        initialValue: data?.data?.fields?.averageBill
      }
    }),
    [data]
  )

  const { fields } = useLocationControl(false, initialData)

  const { open: openOptionsModal, close: closeOptionsModal } = useModal<LocationViewOptionsModalContext>(
    MODAL_NAMES.locationViewOptions
  )
  const { open: openPreRemoveModal, close: closeClosePreRemoveModal } = useModal<PreRemoveLocationModalContext>(
    MODAL_NAMES.preRemoveLocation
  )

  const removeLocation = useCallback(async () => {
    await closeClosePreRemoveModal()
    const removeResult = await handleRemove({
      slug: locationSlug
    })

    if (removeResult?.success && removeResult.data) {
      backSafe(afterRemoveLink.link.name, afterRemoveLink.routeParams)
    }
  }, [closeClosePreRemoveModal, locationSlug, handleRemove, afterRemoveLink, backSafe])

  const openOptions = useCallback(() => {
    const actions = [{ label: 'Пожаловаться', onClick: closeOptionsModal }]

    if (user?._id === data?.data?.author?._id) {
      actions.push(
        {
          label: 'Отправить на модерацию',
          onClick: closeOptionsModal
        },
        {
          label: 'Удалить',
          mode: 'destructive',
          onClick: async () => {
            await closeOptionsModal()
            openPreRemoveModal({
              onRemove: removeLocation
            })
          }
        }
      )
    }

    openOptionsModal({
      actions
    })
  }, [user, data, openOptionsModal, closeOptionsModal, removeLocation, openPreRemoveModal])

  return {
    author: data?.data?.author,
    city: data?.data?.city,
    category: data?.data?.category,
    fields,
    openOptions
  }
}
