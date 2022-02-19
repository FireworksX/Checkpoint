import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Counter from "./components/Counter/Counter";

export const Root = styled.div``

export const Header = styled(PageHeader)`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 50px 1fr 50px;
`

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const AccentCounter = styled(Counter)`
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primary};
`
