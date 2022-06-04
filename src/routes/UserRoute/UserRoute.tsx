import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useUserRoute } from './hooks/useUserRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Placeholder from 'src/components/Placeholder/Placeholder'
import { staticImagesMap } from 'src/data/staticImagesMap'
import UserHeader from 'src/components/UserHeader/UserHeader'
import UserMetrics from 'src/components/UserMetrics/UserMetrics'
import Username from '../../components/Username/Username'
import { SubscribeButton, SubscribeContainer } from './styles'

interface UserRouteProps {
  className?: string
}

const UserRoute: FC<UserRouteProps> = ({ className }) => {
  const {
    user,
    fullName,
    categories,
    locations,
    locationsFetching,
    counters,
    userSlug,
    following,
    setSelectedCategory
  } = useUserRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        left={<PageHeaderButtonBack />}
        right={
          <Styled.HeaderButton>
            <Icon name='ellipsis' />
          </Styled.HeaderButton>
        }
      >
        <Styled.HeaderTitle>
          <Username>{user?.username}</Username>
        </Styled.HeaderTitle>
      </Styled.Header>

      <UserHeader name={fullName} bio={user?.bio} />

      <Styled.SubscribeContainer>
        <Styled.SubscribeButton  onClick={following.isFollowing ? following.onUnsubscribe : following.onSubscribe}>
          {following.isFollowing ? 'Отписаться' : 'Подписаться'}
        </Styled.SubscribeButton>
      </Styled.SubscribeContainer>

      <UserMetrics
        locations={{ count: counters?.locations }}
        followers={{ count: counters?.followers, appLinkProps: { type: 'userFollowers', userSlug } }}
        subscribers={{ count: counters?.subscribers, appLinkProps: { type: 'userSubscribers', userSlug } }}
      />

      <Styled.CompilationWrapper>
        {categories.map((el, index) => (
          <Styled.Compilation
            key={`${el.slug}_${index}`}
            title={el.name}
            image={el.icon}
            description={el.description}
            isActive={el.isActive}
            onClick={() => setSelectedCategory(el.slug)}
          />
        ))}
      </Styled.CompilationWrapper>

      {(locations?.length || 0) > 0 && (
        <Container>
          <Button stretched size='l'>
            Показать на карте
          </Button>
        </Container>
      )}

      {(locations?.length || 0) === 0 && !locationsFetching && (
        <Placeholder header='Пока ничего нет' icon={<Styled.PlaceholderImage src={staticImagesMap.dottedLineFace} />}>
          В этой категории пока ничего нет, пустота...
        </Placeholder>
      )}
      <Styled.LocationsWrapper>
        {locations?.map(location => (
          <Styled.LocationCell
            key={location._id}
            name={location.title}
            cover={'https://image.bugsm.co.kr/album/images/500/204702/20470222.jpg'}
            description={location.description}
          />
        ))}
      </Styled.LocationsWrapper>
    </Styled.Root>
  )
}

export default route(withValidateUser(UserRoute), ROUTE_NAMES.userReview)
