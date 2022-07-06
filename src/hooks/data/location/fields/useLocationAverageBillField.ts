import { useEffect, useState } from 'react'
import { useLocationField } from '../useLocationField'

export interface LocationAverageBillFieldProps {
  isEdit: boolean
  initialValue?: [number, number]
}

const DEFAULT = [0, 0] as [number, number]

export const useLocationAverageBillField = ({ isEdit, initialValue }: LocationAverageBillFieldProps) => {
  const [values, setValues] = useState<[number, number]>(initialValue || DEFAULT)

  useEffect(() => {
    setValues(initialValue || DEFAULT)
  }, [initialValue])

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
    values,
    isEmpty: values[0] === 0 && values[1] === 0
  }
}
