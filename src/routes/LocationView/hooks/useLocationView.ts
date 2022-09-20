import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocationControl } from 'src/hooks/data/location/useLocationControl'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { CreateLocation, Location, LocationDetail, RemoveLocation, UpdateLocation } from 'src/interfaces/Location'
import { useModal } from 'src/hooks/useModal'
import { LocationViewOptionsModalContext } from 'src/modals/LocationViewOptionsModal/LocationViewOptionsModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { PreRemoveLocationModalContext } from 'src/modals/PreRemoveLocationModal/PreRemoveLocationModal'
import { useMutation } from 'src/hooks/useMutation'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { FieldsSchemeName } from '../../../hooks/data/location/useLocationField'
import { LocationFieldsModalContext } from '../../../modals/LocationFieldsModal/LocationFieldsModal'
import { ChooseCategoryModalContext } from '../../../modals/ChooseCategoryModal/ChooseCategoryModal'

export const useLocationView = () => {
  const { user } = useCurrentUser()
  const { locationSlug, citySlug, backSafe } = useRouter()
  const { data, fetching, isValidating, mutate } = useRequest<LocationDetail>(
    `${apiEndpoints.LOCATIONS_DETAIL}/${locationSlug}`
  )
  const afterRemoveLink = useLinkConfig('cityMap', { citySlug })

  const { execute: handleRemove } = useMutation<boolean, RemoveLocation>(apiEndpoints.LOCATIONS_REMOVE)
  const { execute: updateLocation, fetching: fetchingUpdateLocation } = useMutation<Location, UpdateLocation>(
    apiEndpoints.LOCATIONS_UPDATE
  )

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

  const [categorySlug, setCategorySlug] = useState<string | undefined>()
  const userCategories = useMemo(() => user?.categories || [], [user])

  const { fields, toggleIsEdit, isEdit, values, selectedFields, setSelectedFields } = useLocationControl({
    initialIsEdit: false,
    initialData
  })

  const { open: openOptionsModal, close: closeOptionsModal } = useModal<LocationViewOptionsModalContext>(
    MODAL_NAMES.locationViewOptions
  )
  const { open: openPreRemoveModal, close: closeClosePreRemoveModal } = useModal<PreRemoveLocationModalContext>(
    MODAL_NAMES.preRemoveLocation
  )
  const { open: openChooseCategoryInner, close: closeChooseCategory } = useModal<ChooseCategoryModalContext>(
    MODAL_NAMES.chooseProfileCategory
  )

  const {
    open: openFieldModal,
    close,
    updateContext: fieldsUpdateContext
  } = useModal<LocationFieldsModalContext>(MODAL_NAMES.locationFields)

  const openLocationFieldsModal = useCallback(
    () =>
      openFieldModal({
        selected: selectedFields,
        onSelect(fieldName: FieldsSchemeName) {
          setSelectedFields(val => [...val, fieldName])
          close()
        }
      }),
    [selectedFields, setSelectedFields, openFieldModal, close]
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

  const openChooseCategory = useCallback(
    () =>
      openChooseCategoryInner({
        list: userCategories,
        onSelect(category) {
          closeChooseCategory()
          setCategorySlug(category.slug)
        }
      }),
    [openChooseCategoryInner, userCategories, closeChooseCategory, setCategorySlug]
  )

  useEffect(() => {
    fieldsUpdateContext({
      selected: selectedFields
    })
  }, [selectedFields, fieldsUpdateContext])

  const isExists = useCallback(
    (fieldName: Omit<FieldsSchemeName, 'title' | 'gallery'>) => {
      if (isEdit) {
        return selectedFields.includes(fieldName)
      }

      let findFieldKey
      Object.entries(fields).forEach(([key, value]) => {
        if (value.fieldName === fieldName) {
          findFieldKey = key
        }
      })

      return findFieldKey in fields ? !fields[findFieldKey].isEmpty : false
    },
    [selectedFields, fields, isEdit]
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

  const handleSubmit = useCallback(async () => {
    const response = await updateLocation({
      findSlug: data?.data?.slug || '',
      fields: {
        gallery: values.galleryField.files.map(({ _id }) => _id),
        title: values.titleField.value,
        description: values.descriptionField.value,
        kitchen: values.kitchenField.list,
        wifispeed: values.wifispeedField.value,
        averageBill: values.averageBillField.values,
        tags: values.tagsField.tags.map(({ value }) => value.toString())
      }
    })

    if (response.success) {
      toggleIsEdit()
      mutate()
    }
  }, [values, updateLocation, data, toggleIsEdit, mutate])

  const isSelfLocation = data?.data?.author?._id === user?._id

  return {
    isSelfLocation,
    author: data?.data?.author,
    city: data?.data?.city,
    category: data?.data?.category,
    location: data?.data,
    fields,
    openOptions,
    fetching: fetching || fetchingUpdateLocation,
    isValidating,
    toggleIsEdit,
    isEdit,
    isExists,
    openLocationFieldsModal,
    openChooseCategory,
    handleSubmit
  }
}
