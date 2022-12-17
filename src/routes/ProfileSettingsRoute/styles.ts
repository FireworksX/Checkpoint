import styled from 'styled-components'
import Button from '../../components/Button/Button'
import Page from '../../widgets/Page/Page'
import Container from "../../components/Container/Container";

export const Root = styled(Page)``

export const Wrapper = styled(Container)`
  padding-top: 25px;
`

export const Logout = styled(Button)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.accentRed};
`
