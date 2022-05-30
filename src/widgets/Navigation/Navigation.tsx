import React from 'react'
import * as Styled from './styles'
import { useRouter } from 'src/hooks/useRouter'
import { useRecoilValue } from 'recoil'
import { hasNavigationMapHelpersAtom } from 'src/store/uiStore'

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { citySlug } = useRouter()
  const hasMapHelpers = useRecoilValue(hasNavigationMapHelpersAtom)

  return (
    <Styled.Root className={className}>
      {hasMapHelpers && (
        <Styled.MapHelpers>
          <Styled.SearchInput />
          <Styled.MapFilter>
            <Styled.Icon name='group' />
          </Styled.MapFilter>
        </Styled.MapHelpers>
      )}

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
