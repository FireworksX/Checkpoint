import { useState } from 'react'
import { useLocationField } from '../useLocationField'

export interface LocationDescriptionFieldProps {
  isEdit: boolean
  initialText?: string
}

const DEFAULT_TEXT = ''

export const useLocationDescriptionField = ({ isEdit, initialText }: LocationDescriptionFieldProps) => {
  const [value, setValue] = useState(initialText || DEFAULT_TEXT)

  const Component = useLocationField({
    fieldName: 'description',
    isEdit,
    viewProps: {
      children: value
    },
    editProps: {
      value: value,
      onChange: e => setValue(e?.target.value)
    }
  })

  return {
    fieldName: 'description',
    Component,
    value
  }
}
