import { useMemo, useState } from 'react'

export const usePhoneFormatter = <T extends string>(initialState = '') => {
  const [value, setValue] = useState(initialState)

  const formatValue = useMemo(() => {
    const newValue = value.replace(/ /gm, '').replace(/\D/g, "")
    return `${newValue.substring(0, 3)} ${newValue.substring(3, 6)} ${newValue.substring(6, newValue.length)}`.trim()
  }, [value])

  return {
    formatValue,
    value,
    setValue
  }
}
