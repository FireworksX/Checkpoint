import { labels } from './i18n/labels'

export const validationRules = {
  maxLength: (length: number) => ({
    value: length,
    message: labels.validationMaxLength(length)
  }),
  minLength: (length: number) => ({
    value: length,
    message: labels.validationMinLength(length)
  }),
  required: () => ({
    value: true,
    message: labels.validationRequired
  }),
  emailPattern: () => ({
    value: /\S+@\S+\.\S+/,
    message: labels.validationEmail
  })
}
