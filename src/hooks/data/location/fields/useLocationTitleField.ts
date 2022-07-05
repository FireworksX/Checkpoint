import { useState } from 'react'
import { useLocationField } from '../useLocationField'

export interface LocationTitleFieldProps {
  isEdit: boolean
  initialText?: string
}

const DEFAULT_TEXT = ''

export const useLocationTitleField = ({ isEdit, initialText }: LocationTitleFieldProps) => {
  const [value, setValue] = useState(initialText || DEFAULT_TEXT)

  const Component = useLocationField({
    fieldName: 'title',
    isEdit,
    viewProps: {
      value
    },
    editProps: {
      value,
      onChange: e => setValue(e?.target.value)
    }
  })

  return {
    fieldName: 'title',
    Component,
    value
  }
}
