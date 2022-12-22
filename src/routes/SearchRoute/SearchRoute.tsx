import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { ROUTE_NAMES } from '../../router/constants'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'
import Container from '../../components/Container/Container'
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll'

interface SearchRouteProps {
  className?: string
}

const tags = ['breakfast', 'mielbali', '2010s', 'NYC', 'StarbucksHolidayCups', 'Sun', 'Thailand']

const users = [
  { userName: 'mingomatic', firstName: 'Kevin Dukkov', lastName: '', verify: false },
  { userName: 'nwyork', firstName: 'New York City', lastName: '', verify: true },
  { userName: 'nwyork', firstName: 'New York City', lastName: '', verify: true },
  { userName: 'mingomatic', firstName: 'Kevin Dukkov', lastName: '', verify: false },

]

const SearchRoute: FC<SearchRouteProps> = ({ className }) => {
  return (
    <Styled.Root title='Explore' className={className}>
      <Styled.Body>
        <Styled.Search icon='search' placeholder='Search' />

        <GroupWrapper title='Trends for you'>
          {tags.map(tag => (
            <Styled.Hashtag>{tag}</Styled.Hashtag>
          ))}
        </GroupWrapper>

        <GroupWrapper title='Popular accounts'>
          <Container reversed>
            <HorizontalScroll>
              {users.map((user) => <Styled.UserCard {...user} />)}
            </HorizontalScroll>
          </Container>
        </GroupWrapper>
      </Styled.Body>
    </Styled.Root>
  )
}

export default route(SearchRoute, ROUTE_NAMES.search)
