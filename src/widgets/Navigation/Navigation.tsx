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
      <Styled.MapHelpers>
        <Styled.SearchInput />
        <Styled.MapFilter>
          <Styled.Icon name='group' />
        </Styled.MapFilter>
      </Styled.MapHelpers>

      <Styled.NavigationWrapper>
        <Styled.Item type='cityInfo' citySlug={citySlug}>
          <Styled.Icon name='home' />
        </Styled.Item>
        <Styled.Item type='cityMap' citySlug={citySlug}>
          <Styled.Icon name='location' />
        </Styled.Item>
        <Styled.Item type='profile'>
          <Styled.Icon name='user-area' />
        </Styled.Item>
      </Styled.NavigationWrapper>
    </Styled.Root>
  )
}

export default Navigation
