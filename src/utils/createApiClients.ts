import axios from 'axios'

interface ApiClientOptions {
  accessToken?: string
}

const DEFAULT_OPTIONS: ApiClientOptions = {}

export const createApiClients = ({ accessToken } = DEFAULT_OPTIONS) => {
  const apiClient = axios.create({
    baseURL: '/api',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return { apiClient }
}
