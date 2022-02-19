import { createClient, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'

export const createApiClients = (apiHost: string) => {
  const GRAPHQL_URL = `${apiHost}/graphql`

  const urqlClient = createClient({
    url: GRAPHQL_URL,
    fetchOptions: {
      headers: {
        'X-User-Cache': 'W2ZO6w9f6OdiBrEL9DMG',
        'x-ssr-ip': '109.124.91.130',
        'x-user-ip': '109.124.91.130',
        'X-Country': 'RU'
      },
      credentials: 'include'
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          Match: () => null,
          Card: () => null,
          League: () => null,
          Team: () => null,
          Status: () => null,
          Score: () => null,
          Country: () => null,
          LeagueList: () => null,
          LeagueListItem: () => null,
          SportPredictionList: () => null,
          CachedPrediction: () => null,
          LeaguePredictionList: () => null
        }
      }),
      fetchExchange
    ]
  })

  return { urqlClient }
}
