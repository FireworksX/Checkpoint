import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocationControl } from 'src/hooks/data/location/useLocationControl'
import { FieldsSchemeName } from 'src/hooks/data/location/useLocationField'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { LocationFieldsModalContext } from 'src/modals/LocationFieldsModal/LocationFieldsModal'
import { useMutation } from '../../../hooks/useMutation'
import { apiEndpoints } from '../../../data/apiEndpoints'
import { useCurrentUser } from '../../../hooks/data/useCurrentUser'
import { ChooseCategoryModalContext } from '../../../modals/ChooseCategoryModal/ChooseCategoryModal'
import { CreateLocation, Location } from '../../../interfaces/Location'
import { useCityInfo } from '../../CityInfoRoute/hooks/useCityInfo'
import { useRecoilValue } from 'recoil'
import { mapSaveCenterAtom } from '../../../store/mapStore'
import { SuccessCreateModalContext } from '../../../modals/SuccessCreateLocationModal/SuccessCreateLocationModal'

export const useLocationCreate = () => {
  const {
    open: openFieldModal,
    updateContext,
    close
  } = useModal<LocationFieldsModalContext>(MODAL_NAMES.locationFields)

  const { open: openChooseCategoryInner, close: closeChooseCategory } = useModal<ChooseCategoryModalContext>(
    MODAL_NAMES.chooseProfileCategory
  )

  const { open: openSuccess } = useModal<SuccessCreateModalContext>(MODAL_NAMES.successCreateLocation)

  const { execute } = useMutation<Location, CreateLocation>(apiEndpoints.LOCATIONS_CREATE)

  const [categorySlug, setCategorySlug] = useState<string | undefined>()
  const { toggleIsEdit, isEdit, fields, values, selectedFields, availableFields, setSelectedFields } =
    useLocationControl({ initialIsEdit: true })
  const { user } = useCurrentUser()
  const { city } = useCityInfo()
  const saveCenter = useRecoilValue(mapSaveCenterAtom)

  const userCategories = useMemo(() => user?.categories || [], [user])

  const category = userCategories.find(({ slug }) => slug === categorySlug)

  const isExists = useCallback((fieldName: FieldsSchemeName) => selectedFields.includes(fieldName), [selectedFields])

  const openModal = useCallback(
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

  useEffect(() => {
    updateContext({
      selected: selectedFields
    })
  }, [selectedFields, updateContext])

  const canCreate = isExists('title') && fields.titleField.value.length > 0

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

  const handleSubmit = useCallback(async () => {
    if (typeof categorySlug === 'undefined') {
      openChooseCategory()
      return
    }

    const response = await execute({
      category: category?._id || '',
      city: city?._id || '',
      coords: saveCenter,
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
      openSuccess({
        locationSlug: response.data?.slug || ''
      })
    }
  }, [openChooseCategory, categorySlug, values, saveCenter, city, category, execute, openSuccess])

  return {
    fields,
    isEdit,
    isExists,
    availableFields,
    toggleIsEdit,
    openModal,
    canCreate,
    category,
    handleSubmit,
    openChooseCategory
  }
}
