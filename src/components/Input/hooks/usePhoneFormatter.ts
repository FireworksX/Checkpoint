import {useEffect, useMemo, useState } from 'react'
import {CountryCode, countryPhoneCodes} from "../../../data/countryPhoneCodes";

export const usePhoneFormatter = (initialState = '', countryCode?: CountryCode) => {
  const [value, setValue] = useState(initialState)

  useEffect(() => {
    setValue(initialState)
  }, [initialState])


  const formatValue = useMemo(() => {
    const countryPrefix = countryCode ? `${countryPhoneCodes[countryCode]} ` : ''

    const newValue = value.replace(/ /gm, '').replace(/\D/g, "").slice(0, 10)
    return `${countryPrefix}${newValue.substring(0, 3)} ${newValue.substring(3, 6)} ${newValue.substring(6, newValue.length)}`.trim()
  }, [value, countryCode])

  return {
    formatValue,
    value: value.replace(/ /gm, ''),
    setValue
  }
}
