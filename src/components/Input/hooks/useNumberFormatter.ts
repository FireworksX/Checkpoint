import { useState } from 'react'

export const useNumberFormatter = (initialState = '', charLimit = 4) => {
  const [value, setValue] = useState(initialState)

  return {
    formatValue: value.replace(/\D/g, '').slice(0, charLimit),
    value,
    setValue
  }
}
