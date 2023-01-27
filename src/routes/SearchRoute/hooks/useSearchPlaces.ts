import { useMemo, useState } from 'react'
import { useSearchPlacesQuery } from '../queries/SearchPlaces'

export const useSearchPlaces = () => {
  const [term, setTerm] = useState('')

  const [{ data }] = useSearchPlacesQuery({
    variables: {
      term
    }
  })

  const results = useMemo(() => data?.searchPlace || [], [data])

  return {
    results,
    term,
    setTerm
  }
}
