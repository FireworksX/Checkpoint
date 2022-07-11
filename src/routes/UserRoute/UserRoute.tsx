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
import Username from 'src/components/Username/Username'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import SubscribeButton from 'src/widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton'
import { DEFAULT_ALL_CATEGORY } from '../ProfileRoute/hooks/useProfileRoute'
import Link from '../../widgets/Link/Link'
import { useRouter } from '../../hooks/useRouter'

interface UserRouteProps {
  className?: string
}

const UserRoute: FC<UserRouteProps> = ({ className }) => {
  const { citySlug } = useRouter()
  const { user, categories, locations, locationsFetching, counters, userSlug, selectedCategory, setSelectedCategory } =
    useUserRoute()

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

      <UserHeader
        username={user?.username}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        phone={user?.phone}
      />

      <Styled.SubscribeContainer>
        <SubscribeContainer targetId={user?._id}>
          {({ isFollowing, onClick }) => <SubscribeButton isFollowing={isFollowing} onClick={onClick} />}
        </SubscribeContainer>
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
          <Link
            type='cityMap'
            citySlug={citySlug}
            mapAuthor={user?.username}
            mapCategory={selectedCategory === DEFAULT_ALL_CATEGORY.slug ? undefined : selectedCategory}
          >
            <Button stretched size='l'>
              Показать на карте
            </Button>
          </Link>
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
