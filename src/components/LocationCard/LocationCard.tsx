import { FC } from 'react'
import * as Styled from './styles'

interface LocationCardProps {
  name: string
  cover?: string
  description?: string
  className?: string
}

const LocationCard: FC<LocationCardProps> = ({ className, cover, name, description }) => {
  return (
    <Styled.Root className={className}>
      {cover && <Styled.Cover src={cover} />}
      <div>
        <Styled.Title>{name}</Styled.Title>
        {description && <Styled.Description>{description}</Styled.Description>}
      </div>
    </Styled.Root>
  )
}

export default LocationCard
