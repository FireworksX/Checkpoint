import styled from 'styled-components'
import Page from '../../widgets/Page/Page'
import UserHeader from '../../components/UserHeader/UserHeader'
import Touchable from '../../components/Touchable/Touchable'
import Button from '../../components/Button/Button'
import Post from "../../widgets/Post/Post";

export const Root = styled(Page)``

export const Header = styled(UserHeader)`
  margin-bottom: 15px;
  padding-top: 15px;
`

export const Metrics = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const Metric = styled(Touchable)`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 30px;

  &:last-child {
    margin-right: 30px;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textColorDark};
    margin-right: 3px;
  }
`

export const Actions = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  width: 100%;
`

export const Action = styled(Button)`
  margin-right: 10px;
`

export const PostWrapper = styled(Post)`
    margin-bottom: 15px;
`
