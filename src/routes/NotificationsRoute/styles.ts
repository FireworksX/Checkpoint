import styled from 'styled-components'
import Counter from './components/Counter/Counter'
import NotificationsCell from './components/NotificationsCell/NotificationsCell'
import Page from 'src/widgets/Page/Page'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'
import Container from '../../components/Container/Container'

export const Root = styled(Page)``

export const Body = styled(Container)`
  padding-top: 20px;
`

export const Group = styled(GroupWrapper)``

export const AccentCounter = styled(Counter)``

export const Cell = styled(NotificationsCell)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`
