import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Counter from './components/Counter/Counter'
import NotificationsCell from './components/NotificationsCell/NotificationsCell'
import Page from 'src/widgets/Page/Page'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'

export const Root = styled(Page)``

export const Header = styled(PageHeader)`
  margin-bottom: 20px;
`

export const Group = styled(GroupWrapper)``

export const AccentCounter = styled(Counter)`
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primary};
`

export const Cell = styled(NotificationsCell)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`
