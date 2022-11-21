import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useUserRoute } from './hooks/useUserRoute'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Placeholder from 'src/components/Placeholder/Placeholder'
import { staticImagesMap } from 'src/data/staticImagesMap'
import Username from 'src/components/Username/Username'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import SubscribeButton from 'src/widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton'
import { DEFAULT_ALL_CATEGORY } from '../ProfileRoute/hooks/useProfileRoute'
import Link from 'src/widgets/Link/Link'
import { useRouter } from 'src/hooks/useRouter'
import Spinner from 'src/components/Spinner/Spinner'
import UserHeader from '../../widgets/UserHeader/UserHeader'
import {HeaderActions} from "./styles";

interface UserRouteProps {
  className?: string
}

const UserRoute: FC<UserRouteProps> = ({ className }) => {
  const { citySlug } = useRouter()
  const {
    user,
    categories,
    locations,
    locationsFetching,
    userFetching,
    counters,
    userSlug,
    selectedCategory,
    setSelectedCategory
  } = useUserRoute()

  return (
    <Styled.Root className={className} fetching={userFetching}>
      <Styled.Header left={<PageHeaderButtonBack />} description='Profile'>
        <Username>nwyoy</Username>
      </Styled.Header>

      <UserHeader
        username={user?.username}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        mail={user?.mail}
        actions={
          <Styled.HeaderActions>
            <Button size='l' mode='secondary' stretched>Follow</Button>
            <Button size='l' mode='secondary' stretched>Message</Button>
          </Styled.HeaderActions>
        }
      />

      <Styled.SubscribeContainer>
        <SubscribeContainer targetId={user?._id}>
          {({ isFollowing, onClick }) => (
            <SubscribeButton size='xl' icon='lightning' stretched labels={['Connecting', 'Connect']} isFollowing={isFollowing} onClick={onClick} />
          )}
        </SubscribeContainer>
      </Styled.SubscribeContainer>
    </Styled.Root>
  )
}

export default route(UserRoute, ROUTE_NAMES.userReview)
