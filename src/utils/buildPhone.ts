import { countryPhoneCodes, CountryCode} from '../data/countryPhoneCodes'

export const buildPhone = (phone: string, countryCode: CountryCode) => {
  const formattedPhone = phone.replace(/ /g, '')

  return `${countryPhoneCodes[countryCode]}${formattedPhone}`
}
