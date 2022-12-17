import React from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.NavigationWrapper>
        <Styled.Item type='map'>
          <Styled.Icon name='compass' />
        </Styled.Item>
        <Styled.Item type='cityMap'>
          <Styled.Icon name='search' />
        </Styled.Item>
        <Styled.Item type='notifications'>
          <Styled.Icon name='bell' />
        </Styled.Item>
        <Styled.Item type='profile' partialActive={ROUTE_NAMES.profile}>
          <Styled.Icon name='user-circle' />
        </Styled.Item>
      </Styled.NavigationWrapper>
    </Styled.Root>
  )
}

export default Navigation
