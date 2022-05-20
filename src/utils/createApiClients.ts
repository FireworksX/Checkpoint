import axios from 'axios'

export const createApiClients = () => {
  const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_PATH}/api/v1`
  })

  return { apiClient }
}
