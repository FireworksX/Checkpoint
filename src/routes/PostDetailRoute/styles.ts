import styled from 'styled-components'
import Page from '../../widgets/Page/Page'
import UserHeader from '../../components/UserHeader/UserHeader'
import Touchable from '../../components/Touchable/Touchable'
import Button from '../../components/Button/Button'
import CommentCard from '../../components/CommentCard/CommentCard'
import DisplayText from "../../widgets/DisplayText/DisplayText";

export const Root = styled(Page)``

export const ConnectedSection = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding: 15px 10px;
  margin-left: 22px;
  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.typography.text_14_20}
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

export const Comment = styled(CommentCard)`
  margin-bottom: 15px;
`
