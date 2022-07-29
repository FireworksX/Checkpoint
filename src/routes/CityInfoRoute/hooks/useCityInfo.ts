import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { City } from 'src/interfaces/City'
import { useRouter } from 'src/hooks/useRouter'
import { useMemo } from 'react'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'

export const useCityInfo = () => {
  const { citySlug } = useRouter()
  const { data, fetching } = useRequest<City>(`${apiEndpoints.CITY_DETAIL}/${citySlug}`, {
    pause: !citySlug
  })

  const categories = useMemo(
    () =>
      (data?.data?.owner?.categories || []).map(category => ({
        ...category,
        icon: category.icon ? staticImagesMapKebab[category.icon] : undefined
      })),
    [data]
  )

  return {
    city: data?.data,
    facts: data?.data?.facts || [],
    rates: data?.data?.rates || [],
    categories,
    ambassadors: data?.data?.owner?.subscribers || [],
    fetching
  }
}
