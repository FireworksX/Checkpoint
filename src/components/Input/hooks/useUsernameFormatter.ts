import { useMemo, useState } from 'react'

export const useUsernameFormatter = <T extends string>(initialState = '') => {
  const [value, setValue] = useState(initialState)

  return {
    formatValue: value ? `@${value.slice(1)}` : value,
    value,
    setValue
  }
}
