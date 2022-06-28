import { useState } from 'react'
import { useLocationField } from '../useLocationField'

interface Props {
  isEdit: boolean
  initialText?: string
}

const DEFAULT_TEXT = ''

export const useLocationTitleField = ({ isEdit, initialText }: Props) => {
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
