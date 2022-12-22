import styled from 'styled-components'
import Page from '../../widgets/Page/Page'
import Container from '../../components/Container/Container'
import Input from '../../components/Input/Input'
import HashtagCell from '../../components/HashtagCell/HashtagCell'
import UserVerticalCard from '../../components/UserVerticalCard/UserVerticalCard'

export const Root = styled(Page)``

export const Body = styled(Container)`
  padding-top: 15px;
`

export const Search = styled(Input)`
  margin-bottom: 30px;
`

export const Hashtag = styled(HashtagCell)`
  margin-right: 10px;
  margin-bottom: 10px;
`

export const UserCard = styled(UserVerticalCard)`
  width: 150px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`
