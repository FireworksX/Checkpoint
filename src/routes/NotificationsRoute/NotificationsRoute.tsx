import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import NotificationsGroup from './components/NotificationsGroup/NotificationsGroup'

interface NotificationsRouteProps {
  className?: string
}

const NotificationsRoute: FC<NotificationsRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <PageHeaderButtonBack />
        <Styled.HeaderTitle>Notifications</Styled.HeaderTitle>
      </Styled.Header>
      <NotificationsGroup title='New' counter={<Styled.AccentCounter>3</Styled.AccentCounter>}></NotificationsGroup>
    </Styled.Root>
  )
}

export default route(NotificationsRoute, ROUTE_NAMES.notifications)
