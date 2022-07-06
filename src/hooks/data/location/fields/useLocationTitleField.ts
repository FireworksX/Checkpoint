import { useEffect, useState } from 'react'
import { useLocationField } from '../useLocationField'

export interface LocationTitleFieldProps {
  isEdit: boolean
  initialText?: string
}

const DEFAULT_TEXT = ''

export const useLocationTitleField = ({ isEdit, initialText = DEFAULT_TEXT }: LocationTitleFieldProps) => {
  const [value, setValue] = useState(initialText)

  useEffect(() => {
    setValue(initialText)
  }, [initialText])

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
    value,
    isEmpty: value === ''
  }
}
