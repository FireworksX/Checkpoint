import isBrowser from './isBrowser'

const PREFIX = 'cp-'

export const cacheService = () => {
  const localStorage = isBrowser && window.localStorage

  const addItem = (key: string, value: any) => {
    if (localStorage) {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value))
    }
  }

  const getItem = (key: string) => {
    if (localStorage) {
      const value = localStorage.getItem(`${PREFIX}${key}`)
      return value ? JSON.parse(value) : value
    }
  }

  return {
    addItem,
    getItem
  }
}
