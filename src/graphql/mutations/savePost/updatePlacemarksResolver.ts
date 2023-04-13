import { UpdateResolver } from '@urql/exchange-graphcache/dist/types/types'
import { PlacemarksDocument } from '../../../hooks/data/usePlacemarks/PlacemarksQuery'

export const updatePlacemarksResolver: UpdateResolver = ({ savePost }, args, cache) => {
  const newPlacemark = {
    __typename: 'Placemark',
    geometry: savePost.place.geometry,
    post: savePost
  }

  cache.updateQuery(
    {
      query: PlacemarksDocument,
      variables: {
        token: args.input.token
      }
    },
    data => {
      data.getPlacemarks.push(newPlacemark)

      return data
    }
  )
  // cache
  // .inspectFields('Query')
  // .filter(field => FIELDS.includes(field.fieldName))
  // .forEach(field => {
  //   cache.invalidate('Query', field.fieldName, field.arguments)
  // })
}
