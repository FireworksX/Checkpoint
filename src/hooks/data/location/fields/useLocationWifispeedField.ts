import { useState } from 'react'
import { useLocationField } from '../useLocationField'

interface Props {
  isEdit: boolean
  initialValue?: number
}

export const useLocationWifispeedField = ({ isEdit, initialValue }: Props) => {
  const [value, setValue] = useState(initialValue || 25)

  const Component = useLocationField({
    fieldName: 'wifi',
    isEdit,
    viewProps: {
      value
    },
    editProps: {
      value,
      onChange: setValue
    }
  })

  return {
    fieldName: 'wifi',
    Component,
    value
  }
}
