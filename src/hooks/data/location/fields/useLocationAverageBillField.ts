import { useState } from 'react'
import { useLocationField } from '../useLocationField'

export interface LocationAverageBillFieldProps {
  isEdit: boolean
  initialValue?: [number, number]
}

export const useLocationAverageBillField = ({ isEdit, initialValue }: LocationAverageBillFieldProps) => {
  const [values, setValues] = useState<[number, number]>(initialValue || [10, 30])

  const Component = useLocationField({
    fieldName: 'averageBill',
    isEdit,
    viewProps: {
      values
    },
    editProps: {
      values,
      onChange: setValues
    }
  })

  return {
    fieldName: 'averageBill',
    Component,
    values
  }
}
