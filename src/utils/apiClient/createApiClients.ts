import axios, { AxiosRequestConfig } from 'axios'
import { SSRData } from '@urql/core/dist/types/exchanges/ssr'
import { createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'
import { CookieManager } from 'src/interfaces/CookieManager'
import isBrowser from 'src/utils/isBrowser'
import { urqlCacheExchange } from './urqlCacheExchange'
import { serviceContainer } from '../../services/ioc/serviceContainer'
import initUrqlMutations from 'src/graphql/mutations'

export interface ApiClientOptions {
  baseURL?: string
  cookieManager?: CookieManager
  ssrCache?: AnyObject<SSRData>
  fetcher?: typeof fetch
  ip?: string | null
}

export interface ApiClient {
  get<T>(path: string, config?: AxiosRequestConfig): Promise<T>
  post<T, D = any>(path: string, data?: D, config?: AxiosRequestConfig): Promise<T>
}

const DEFAULT_OPTIONS: ApiClientOptions = {
  baseURL: ''
}

const createRestClient = ({ cookieManager, baseURL } = DEFAULT_OPTIONS): ApiClient => {
  const restClient = axios.create({
    baseURL
  })

  restClient.interceptors.request.use(req => {
    const accessToken = cookieManager?.get('accessToken')

    if (req.headers && accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    return req
  })

  restClient.interceptors.response.use(
    config => {
      return config
    },
    async error => {
      // const config = error?.config

      // if (error?.response?.status === 401 && !config?.refresh) {
      //   config.refresh = true
      //
      //   const result = await refreshToken({ apiClient, cookieManager })
      //
      //   const accessToken = result?.data?.token.accessToken
      //
      //   if (accessToken) {
      //     config.headers = {
      //       ...config.headers,
      //       Authorization: `Bearer ${accessToken}`
      //     }
      //   }
      //
      //   return apiClient(config)
      // }
      return Promise.reject(error)
    }
  )

  return restClient
}

const createGqlClient = ({ ssrCache, fetcher = fetch }: ApiClientOptions) => {
  const ssrCacheStore = ssrExchange({
    initialState: ssrCache
  })

  const urqlCacheNotify = serviceContainer().getService('urqlCacheNotify')

  const urqlClient = createClient({
    url: `${import.meta.env.VITE_CURRENT_DOMAIN}/graphql`,
    fetch: fetcher,
    suspense: !isBrowser,
    exchanges: [
      dedupExchange,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      urqlCacheExchange(urqlCacheNotify),
      ssrCacheStore,
      fetchExchange
    ]
  })

  initUrqlMutations()

  return {
    client: urqlClient,
    ssrCacheStore
  }
}

export const createApiClients = ({ cookieManager, ssrCache, fetcher, ip } = DEFAULT_OPTIONS) => {
  const defaults: Omit<RequestInit, 'headers'> & { headers: Record<string, string> } = {
    credentials: 'include',
    headers: {}
  }

  if (ip) {
    defaults.headers['x-user-ip'] = ip
  }

  const wrappedFetch: typeof fetch = (input, init) => {
    if (!fetcher) throw new Error('fetch wrapper required')

    const accessToken = cookieManager?.get('accessToken')
    if (accessToken) {
      defaults.headers.Authorization = `Bearer ${accessToken}`
    }

    return fetcher(input, {
      ...defaults,
      ...init,
      headers: { ...defaults.headers, ...init?.headers }
    })
  }

  const apiClient = createRestClient({ cookieManager, baseURL: `${import.meta.env.VITE_CURRENT_DOMAIN}/api` })
  const { client: gqlClient, ssrCacheStore } = createGqlClient({ ssrCache, fetcher: wrappedFetch })

  return { apiClient, gqlClient, ssrCacheStore }
}
