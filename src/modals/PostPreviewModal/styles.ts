import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import UserHeader from '../../components/UserHeader/UserHeader'
import PostAction from '../../widgets/Post/components/PostAction/PostAction'
import DisplayText from "../../widgets/DisplayText/DisplayText";

export const Root = styled(Container)`
  padding-top: 30px;
  padding-bottom: 50px;
`

export const Header = styled(UserHeader)`
  margin-bottom: 15px;
`

export const Text = styled(DisplayText)`
  ${({ theme }) => theme.typography.text_20_24}
  margin-bottom: 5px;
`
export const Date = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 15px;
`

export const Target = styled.div`
  margin-bottom: 15px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const Action = styled(PostAction)`
  margin-right: 15px;
`
