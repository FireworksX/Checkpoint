import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import {Description, FollowButton} from './styles'

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <PageHeaderButtonBack />
        <Styled.HeaderTitle>@fireworksx</Styled.HeaderTitle>
      </Styled.Header>
      <Styled.Avatar src='https://avatars.githubusercontent.com/u/22668125?v=4' />
      <Styled.Name>Arthur Abeltinsh</Styled.Name>
      <Styled.Description>I love traveling and i do enjoy taking photos of tourist attractions.</Styled.Description>
      <Styled.Row>
        <Styled.Group>
          <Styled.GroupTitle>Followers</Styled.GroupTitle>
          <Styled.GroupValue>48k</Styled.GroupValue>
        </Styled.Group>
        <Styled.Group>
          <Styled.GroupTitle>Following</Styled.GroupTitle>
          <Styled.GroupValue>311</Styled.GroupValue>
        </Styled.Group>
      </Styled.Row>
      <Styled.Row>
        <Styled.Group>
          <Styled.GroupTitle>Total maps</Styled.GroupTitle>
          <Styled.GroupValue>314</Styled.GroupValue>
        </Styled.Group>
        <Styled.Group>
          <Styled.GroupTitle>Total stories</Styled.GroupTitle>
          <Styled.GroupValue>1.2k</Styled.GroupValue>
        </Styled.Group>
        <Styled.Group>
          <Styled.GroupTitle>Total likes</Styled.GroupTitle>
          <Styled.GroupValue>560k</Styled.GroupValue>
        </Styled.Group>
      </Styled.Row>
      <Styled.FollowButton>Follow</Styled.FollowButton>
    </Styled.Root>
  )
}

export default route(ProfileRoute, ROUTE_NAMES.profile)
