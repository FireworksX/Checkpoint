import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Container from 'src/components/Container/Container'
import UserRowCard from 'src/components/UserRowCard/UserRowCard'
import Page from "../../widgets/Page/Page";

export const Root = styled(Page)``

export const Wrapper = styled(Container)`
  padding-top: 15px;
`

export const UserCard = styled(UserRowCard)`
  margin-bottom: 10px;
`
