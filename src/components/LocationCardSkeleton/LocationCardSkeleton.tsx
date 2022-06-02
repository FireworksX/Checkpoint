import { FC } from 'react'
import * as Styled from './styles'

interface LocationCardSkeletonProps {
  className?: string
}

const LocationCardSkeleton: FC<LocationCardSkeletonProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Cover />
      <Styled.Wrapper>
        <Styled.Title />
        <Styled.Description />
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default LocationCardSkeleton
