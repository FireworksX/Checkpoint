import { useToggle } from 'react-use'
import { LocationDescriptionFieldProps, useLocationDescriptionField } from './fields/useLocationDescriptionField'
import { LocationTitleFieldProps, useLocationTitleField } from './fields/useLocationTitleField'
import { LocationKitchenTypeFieldProps, useLocationKitchenTypeField } from './fields/useLocationKitchenTypeField'
import { LocationWifispeedFieldProps, useLocationWifispeedField } from './fields/useLocationWifispeedField'
import { LocationAverageBillFieldProps, useLocationAverageBillField } from './fields/useLocationAverageBillField'
import { LocationTagsFieldProps, useLocationTagsField } from './fields/useLocationTagsField'
import { LocationGalleryFieldProps, useLocationGalleryField } from './fields/useLocationGalleryField'
import { omit } from 'src/utils/omit'
import { useEffect, useMemo, useState } from 'react'
import { FieldsSchemeName } from './useLocationField'

type WrapField<T> = Omit<T, 'isEdit'>

type InitialData = Partial<{
  title: WrapField<LocationTitleFieldProps>
  description: WrapField<LocationDescriptionFieldProps>
  kitchen: WrapField<LocationKitchenTypeFieldProps>
  wifi: WrapField<LocationWifispeedFieldProps>
  averageBill: WrapField<LocationAverageBillFieldProps>
  tags: WrapField<LocationTagsFieldProps>
  gallery: WrapField<LocationGalleryFieldProps>
}>

interface Options {
  initialIsEdit?: boolean
  initialData?: InitialData
}

export const useLocationControl = ({ initialIsEdit = false, initialData = {} }: Options) => {
  const [isEdit, toggleIsEdit] = useToggle(initialIsEdit)
  const [selectedFields, setSelectedFields] = useState<FieldsSchemeName[]>(['gallery', 'title'])

  const titleField = useLocationTitleField({ isEdit, ...initialData?.title })

  const descriptionField = useLocationDescriptionField({
    isEdit,
    ...initialData?.description
  })
  const kitchenField = useLocationKitchenTypeField({
    isEdit,
    ...initialData?.kitchen
  })
  const wifispeedField = useLocationWifispeedField({
    isEdit,
    ...initialData?.wifi
  })
  const averageBillField = useLocationAverageBillField({
    isEdit,
    ...initialData?.averageBill
  })
  const tagsField = useLocationTagsField({
    isEdit,
    ...initialData?.tags
  })
  // const poolsField = useLocationPollsField({
  //   isEdit
  // })
  const galleryField = useLocationGalleryField({
    isEdit,
    ...initialData?.gallery
  })

  const fields = useMemo(
    () => ({
      galleryField,
      titleField,
      descriptionField,
      kitchenField,
      wifispeedField,
      averageBillField,
      tagsField
      // poolsField
    }),
    [galleryField, titleField, descriptionField, kitchenField, wifispeedField, averageBillField, tagsField]
  )

  const availableFields = useMemo(
    () => Object.values(fields).filter(({ fieldName }) => selectedFields.includes(fieldName as FieldsSchemeName)),
    [fields, selectedFields]
  )

  const values: { [P in keyof typeof fields]: Omit<typeof fields[P], 'Component' | 'fieldName'> } = Object.entries(
    fields
  ).reduce((acc, [key, value]) => {
    acc[key] = omit(value, 'Component', 'fieldName')

    return acc
  }, {} as any)

  return {
    isEdit,
    toggleIsEdit,
    fields,
    values,
    availableFields,
    setSelectedFields,
    selectedFields
  }
}
