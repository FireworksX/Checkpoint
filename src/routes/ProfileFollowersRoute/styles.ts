import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Container from 'src/components/Container/Container'
import UserRowCard from 'src/components/UserRowCard/UserRowCard'

export const Root = styled.div``

export const Header = styled(PageHeader)``

export const Wrapper = styled(Container)`
  padding-top: 15px;
`

export const UserCard = styled(UserRowCard)`
  margin-bottom: 10px;
`
