import { useState } from 'react'

export const useUsernameFormatter = (initialState = '') => {
  const [value, setValue] = useState(initialState)

  return {
    formatValue: value ? `@${value.slice(1)}` : value,
    value,
    setValue
  }
}
