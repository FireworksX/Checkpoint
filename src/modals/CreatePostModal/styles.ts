import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import UserHeader from '../../components/UserHeader/UserHeader'
import Input from '../../components/Input/Input'
import Separator from '../../components/Separator/Separator'
import Button from "../../components/Button/Button";
import DisplayText from "../../widgets/DisplayText/DisplayText";

export const Root = styled(Container)`
  padding-top: 10px;
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

export const Delim = styled(Separator)`
  margin-bottom: 15px;
`

export const Area = styled(Input).attrs({ textarea: true })`
  margin-bottom: 15px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const CancelButton = styled(Button)`
  margin-right: 15px;
  padding: 15px;
`
