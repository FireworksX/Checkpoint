import { useMemo, useState } from 'react'

export const usePhoneFormatter = (initialState = '') => {
  const [value, setValue] = useState(initialState)

  const formatValue = useMemo(() => {
    const newValue = value.replace(/ /gm, '').replace(/\D/g, "").slice(0, 10)
    return `${newValue.substring(0, 3)} ${newValue.substring(3, 6)} ${newValue.substring(6, newValue.length)}`.trim()
  }, [value])

  return {
    formatValue,
    value: value.replace(/ /gm, ''),
    setValue
  }
}
