import { createApiClients } from 'src/utils/createApiClients'

const { apiClient } = createApiClients()

export const useApiClient = () => {
  return apiClient
}
