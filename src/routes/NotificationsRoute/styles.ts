import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Counter from './components/Counter/Counter'
import NotificationsCell from './components/NotificationsCell/NotificationsCell'
import NotificationsGroup from './components/NotificationsGroup/NotificationsGroup'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 50px 1fr 50px;
  margin-bottom: 20px;
`

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Group = styled(NotificationsGroup)`
  margin-bottom: 20px;
`

export const AccentCounter = styled(Counter)`
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primary};
`

export const Cell = styled(NotificationsCell)`
  padding: 10px 0;
`
