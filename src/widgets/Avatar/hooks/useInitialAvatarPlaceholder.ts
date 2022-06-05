import { BaseUser } from 'src/interfaces/User'

type Options = Pick<BaseUser, 'username' | 'firstName' | 'lastName'>

const LIMIT = 2

export const useInitialAvatarPlaceholder = (options?: Options, limit = LIMIT) => {
  const { username, firstName, lastName } = options || {}

  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`
  }

  if (firstName) {
    return firstName.slice(0, limit)
  }

  if (lastName) {
    return lastName.slice(0, limit)
  }

  if (username && typeof username === 'string') {
    return username.slice(0, limit)
  }

  return ''
}
