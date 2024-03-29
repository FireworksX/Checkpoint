import { cacheExchange } from '@urql/exchange-graphcache'
import 'src/graphql/mutations'
import { buildCacheKey } from '../buildCacheKey'
import {UrqlCacheNotify} from "../../services/urqlCacheNotify";

export const urqlCacheExchange = (urqlCacheNotify: UrqlCacheNotify) => cacheExchange({
  keys: {
    User: user => buildCacheKey(user, 'userName'),
    Location: () => null,
    Coords: coords => buildCacheKey(coords, 'lat', 'lng'),
    Place: place => buildCacheKey(place, 'slug'),
    PlaceRating: placeRating => buildCacheKey(placeRating, 'value', 'count'),
    PlaceGeometry: () => null,
    PlaceViewport: placeViewpoint => buildCacheKey(placeViewpoint, 'northeast', 'southwest'),
    UserCounters: () => null,
    ConnectionFlag: () => null,
    Post: post => buildCacheKey(post, 'id'),
    Placemark: placemark => placemark?.post?.id || null,
  },
  resolvers: {
    Query: {
      me: (parent, args, cache) => {
        const [meField] = cache
          .inspectFields('Query')
          .filter(field => field.fieldName === 'getMe')
          .map(field => cache.resolve('Query', field.fieldKey))


        return meField
        // cache.keyOfEntity({__typename: 'User', userName: })
      }
    }
  },
  updates: {
    Mutation: {
      subscribe: urqlCacheNotify.mutation('subscribe'),
      unSubscribe: urqlCacheNotify.mutation('unSubscribe'),
      editUser: urqlCacheNotify.mutation('editUser'),
      savePost: urqlCacheNotify.mutation('savePost'),
    }
  }
})
