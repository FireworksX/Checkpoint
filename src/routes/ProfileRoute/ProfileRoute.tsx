import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useProfileRoute } from './hooks/useProfileRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import { times } from 'src/utils/times'

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, fullName, categories, locations, setSelectedCategory, locationsFetching, followers, subscribers } =
    useProfileRoute()

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
        <Styled.HeaderTitle>@{user?.username}</Styled.HeaderTitle>
      </Styled.Header>
      <Styled.Head>
        <Styled.Avatar src='https://avatars.githubusercontent.com/u/22668125?v=4' />
        <Styled.NameWrapper>
          <Styled.Name>
            {fullName}
            <Styled.VerifyIcon />
          </Styled.Name>
          <Styled.Description>{user?.bio}</Styled.Description>
        </Styled.NameWrapper>
      </Styled.Head>

      <Button stretched size='l' mode='tertiary'>
        Подписаться
      </Button>

      <Styled.Metrics>
        <Styled.MetricCell>
          <Styled.MetricValue>83</Styled.MetricValue>
          <Styled.MetricLabel>публикаций</Styled.MetricLabel>
        </Styled.MetricCell>
        <Styled.MetricCell>
          <Styled.MetricValue>{followers.length}</Styled.MetricValue>
          <Styled.MetricLabel>подписчиков</Styled.MetricLabel>
        </Styled.MetricCell>
        <Styled.MetricCell>
          <Styled.MetricValue>{subscribers.length}</Styled.MetricValue>
          <Styled.MetricLabel>подписок</Styled.MetricLabel>
        </Styled.MetricCell>
      </Styled.Metrics>

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

      <Container>
        <Button stretched size='l'>
          Показать на карте
        </Button>
      </Container>

      <Styled.LocationsWrapper>
        {locationsFetching
          ? times(3).map(index => <Styled.LocationCellSkeleton key={index} />)
          : locations?.map(location => (
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

export default route(withValidateUser(ProfileRoute), ROUTE_NAMES.profile)
