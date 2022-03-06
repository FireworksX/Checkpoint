const localStorage = window.localStorage
const PREFIX = 'placesato'

export const cacheService = () => {
  const addItem = (key: string, value: any) => {
    localStorage.setItem(`${PREFIX}-${key}`, JSON.stringify(value))
  }

  const getItem = (key: string) => {
    const value = localStorage.getItem(`${PREFIX}-${key}`)

    return value ? JSON.parse(value) : value
  }

  return {
    addItem,
    getItem
  }
}
