import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { ROUTE_NAMES } from '../../router/constants'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'

interface PostConnectionsRouteProps {
  className?: string
}

const PostConnectionsRoute: FC<PostConnectionsRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className} title='Connections' headerLeft={<PageHeaderButtonBack />}>
      <Styled.Wrapper>
        <Styled.Search icon='search' placeholder='Search'/>
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(PostConnectionsRoute, ROUTE_NAMES.postConnections)
