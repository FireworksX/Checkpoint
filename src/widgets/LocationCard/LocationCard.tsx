import { FC } from 'react'
import * as Styled from './styles'
import Avatar from '../Avatar/Avatar'

interface LocationCardProps {
  className?: string
}

const LocationCard: FC<LocationCardProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Avatar size={44} />
      <div>
        <Styled.Name>miel.bali</Styled.Name>
        <Styled.Destination>Indonesia, Bali</Styled.Destination>
      </div>
    </Styled.Root>
  )
}

export default LocationCard
