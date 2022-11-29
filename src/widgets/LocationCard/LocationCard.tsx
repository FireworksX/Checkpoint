import { FC } from 'react'
import * as Styled from './styles'

interface LocationCardProps {
  name: string
  location: string
  avatar?: string
  className?: string
}

const LocationCard: FC<LocationCardProps> = ({ className, location, name, avatar }) => {
  return (
    <Styled.Root className={className}>
      {avatar && <Styled.Logo size={44} src={avatar} />}
      <div>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Destination>{location}</Styled.Destination>
      </div>
    </Styled.Root>
  )
}

export default LocationCard
