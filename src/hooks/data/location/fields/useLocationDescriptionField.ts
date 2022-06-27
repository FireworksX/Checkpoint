import { useState } from 'react'
import { useLocationField } from '../useLocationField'

interface Props {
  isEdit: boolean
  initialText?: string
}

const DEFAULT_TEXT = ''

export const useLocationDescriptionField = ({ isEdit, initialText }: Props) => {
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
    Component,
    value
  }
}
