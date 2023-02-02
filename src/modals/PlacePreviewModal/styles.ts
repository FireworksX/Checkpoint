import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import UserHeader from '../../components/UserHeader/UserHeader'
import Button from "../../components/Button/Button";

export const Root = styled(Container)`
  padding-top: 15px;
  padding-bottom: 30px;
`

export const Header = styled(UserHeader)`
  margin-bottom: 15px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const Action = styled(Button)`
  margin-right: 15px;
  width: 100%;
`
