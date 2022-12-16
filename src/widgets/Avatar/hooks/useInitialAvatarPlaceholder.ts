import { BaseUser } from 'src/interfaces/User'

type Options = Pick<BaseUser, 'userName' | 'firstName' | 'lastName'>

const LIMIT = 2

export const useInitialAvatarPlaceholder = (options?: Options, limit = LIMIT) => {
  const { userName, firstName, lastName } = options || {}

  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`
  }

  if (firstName) {
    return firstName.slice(0, limit)
  }

  if (lastName) {
    return lastName.slice(0, limit)
  }

  if (userName && typeof userName === 'string') {
    return userName.slice(0, limit)
  }

  return ''
}
