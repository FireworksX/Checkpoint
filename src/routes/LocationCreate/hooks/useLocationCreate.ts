import { useCallback, useEffect, useState } from 'react'
import { useLocationControl } from 'src/hooks/data/location/useLocationControl'
import { FieldsSchemeName } from 'src/hooks/data/location/useLocationField'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { LocationFieldsModalContext } from 'src/modals/LocationFieldsModal/LocationFieldsModal'

export const useLocationCreate = () => {
  const {
    open: openFieldModal,
    updateContext,
    close
  } = useModal<LocationFieldsModalContext>(MODAL_NAMES.locationFields)
  const [availableFields, setAvailableFields] = useState<FieldsSchemeName[]>(['title'])

  const {
    titleField,
    descriptionField,
    wifispeedField,
    averageBillField,
    kitchenField,
    tagsField,
    poolsField,
    toggleIsEdit,
    isEdit
  } = useLocationControl(true)

  const resultFields = [
    titleField,
    descriptionField,
    kitchenField,
    wifispeedField,
    averageBillField,
    tagsField,
    poolsField
  ].filter(({ fieldName }) => availableFields.includes(fieldName as FieldsSchemeName))

  const isExists = useCallback((fieldName: FieldsSchemeName) => availableFields.includes(fieldName), [availableFields])

  const openModal = useCallback(
    () =>
      openFieldModal({
        selected: availableFields,
        onSelect(fieldName: FieldsSchemeName) {
          setAvailableFields(val => [...val, fieldName])
          close()
        }
      }),
    [availableFields, setAvailableFields, openFieldModal, close]
  )

  useEffect(() => {
    updateContext({
      selected: availableFields
    })
  }, [availableFields, updateContext])

  return {
    fields: {
      titleField,
      descriptionField,
      wifispeedField,
      averageBillField,
      kitchenField,
      tagsField,
      poolsField
    },
    isEdit,
    isExists,
    resultFields,
    toggleIsEdit,
    openModal
  }
}
