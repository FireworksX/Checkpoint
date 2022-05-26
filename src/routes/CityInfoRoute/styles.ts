import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
`


