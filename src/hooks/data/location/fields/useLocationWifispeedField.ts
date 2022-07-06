import { useEffect, useState } from 'react'
import { useLocationField } from '../useLocationField'

export interface LocationWifispeedFieldProps {
  isEdit: boolean
  initialValue?: number
}

export const useLocationWifispeedField = ({ isEdit, initialValue = 0 }: LocationWifispeedFieldProps) => {
  const [value, setValue] = useState(initialValue || 0)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

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
    value,
    isEmpty: value === 0
  }
}
