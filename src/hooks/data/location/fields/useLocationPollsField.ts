import { useState } from 'react'
import { useLocationField } from '../useLocationField'

interface Props {
  isEdit: boolean
}

export const useLocationPollsField = ({ isEdit }: Props) => {
  // const [value, setValue] = useState(initialValue || 25)

  const Component = useLocationField({
    fieldName: 'polls',
    isEdit,
    viewProps: {},
    editProps: {}
  })

  return {
    fieldName: 'wifi',
    Component,
    isEmpty: true
  }
}
