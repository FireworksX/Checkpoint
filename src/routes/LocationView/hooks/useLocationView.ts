import { useLocationControl } from 'src/hooks/data/location/useLocationControl'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { LocationDetail } from 'src/interfaces/Location'
import { useModal } from 'src/hooks/useModal'
import { LocationViewOptionsModalContext } from 'src/modals/LocationViewOptionsModal/LocationViewOptionsModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useCurrentUser } from '../../../hooks/data/useCurrentUser'
import { useCallback, useMemo } from 'react'

export const useLocationView = () => {
  const { user } = useCurrentUser()
  const { locationSlug } = useRouter()
  const { data } = useRequest<LocationDetail>(`${apiEndpoints.LOCATIONS_DETAIL}/${locationSlug}`)

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
          onClick: closeOptionsModal
        }
      )
    }

    openOptionsModal({
      actions
    })
  }, [user, data, openOptionsModal])

  return {
    author: data?.data?.author,
    city: data?.data?.city,
    category: data?.data?.category,
    fields,
    openOptions
  }
}
