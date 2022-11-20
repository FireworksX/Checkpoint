import React from 'react'
import * as Styled from './styles'
import { useRouter } from 'src/hooks/useRouter'

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { citySlug } = useRouter()

  return (
    <Styled.Root className={className}>
      <Styled.NavigationWrapper>
        <Styled.Item type='cityInfo' citySlug={citySlug}>
          <Styled.Icon name='compass' />
        </Styled.Item>
        <Styled.Item type='cityMap' citySlug={citySlug}>
          <Styled.Icon name='search' />
        </Styled.Item>
        <Styled.Item type='profile'>
          <Styled.Icon name='bell' />
        </Styled.Item>
        <Styled.Item type='profile'>
          <Styled.Icon name='user-circle' />
        </Styled.Item>
      </Styled.NavigationWrapper>
    </Styled.Root>
  )
}

export default Navigation
