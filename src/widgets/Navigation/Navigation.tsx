import React from 'react'
import * as Styled from './styles'
import { useRouter } from 'src/hooks/useRouter'

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Item type='home'>
        <Styled.Icon name='faults' />
        <Styled.Name>Map</Styled.Name>
      </Styled.Item>
      <Styled.Item type='trends'>
        <Styled.Icon name='fire' />
        <Styled.Name>Trends</Styled.Name>
      </Styled.Item>
      <Styled.Item type='notifications'>
        <Styled.Icon name='bell' />
        <Styled.Name>Notification</Styled.Name>
      </Styled.Item>
      <Styled.Item type='profile'>
        <Styled.Icon name='profile-avatar' />
        <Styled.Name>Profile</Styled.Name>
      </Styled.Item>
    </Styled.Root>
  )
}

export default Navigation
