import { useRef } from 'react'
import { serviceContainer } from '../services/ioc/serviceContainer'

export const useApiClient = () => {
  const apiClient = serviceContainer().getService('apiClient')

  return apiClient
}
