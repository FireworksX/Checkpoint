import { FC } from 'react'
import * as Styled from './styles'
import { useMapNearSearch } from './hooks/useMapNearSearch'

interface MapNearSearchProps {
  className?: string
}

const MapNearSearch: FC<MapNearSearchProps> = ({ className }) => {
  const { isSearching, fetching, stopSearching, startSearching } = useMapNearSearch()

  return (
    <Styled.Root className={className}>
      <Styled.Create
        loading={fetching}
        isActive={isSearching}
        onClick={isSearching ? stopSearching : startSearching}
      />
    </Styled.Root>
  )
}

export default MapNearSearch
