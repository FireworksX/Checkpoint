import { FC } from 'react'
import * as Styled from './styles'
import { useMapSearchLocations } from './hooks/useMapSearchLocations'

interface MapSearchLocationsProps {
  className?: string
}

const MapSearchLocations: FC<MapSearchLocationsProps> = ({ className }) => {
  const { list } = useMapSearchLocations()

  return (
    <Styled.Root className={className}>
      {list?.map(location => (
        <Styled.LocationCell
          _id={location._id}
          likes={location.likes}
          key={location._id}
          name={location.fields?.title}
          slug={location.slug}
          cover={'https://image.bugsm.co.kr/album/images/500/204702/20470222.jpg'}
          description={location.fields?.description}
        />
      ))}
    </Styled.Root>
  )
}

export default MapSearchLocations
