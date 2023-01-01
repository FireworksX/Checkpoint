import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from '../../router/constants'
import { route } from '../../hoc/route'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'

interface PostLikesRouteProps {
  className?: string
}

const PostLikesRoute: FC<PostLikesRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className} title='Likes' headerLeft={<PageHeaderButtonBack />}>
      <Styled.Wrapper>
        <Styled.Search icon='search' placeholder='Search' />
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(PostLikesRoute, ROUTE_NAMES.postLikes)
