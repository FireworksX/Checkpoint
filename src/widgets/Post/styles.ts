import styled from 'styled-components'
import Avatar from '../Avatar/Avatar'
import PostAction from './components/PostAction/PostAction'
import UserHeader from '../../components/UserHeader/UserHeader'
import DisplayText from '../DisplayText/DisplayText'

interface Props {
  hasRefer?: boolean
}

export const Root = styled.div<Props>`
  position: relative;
  ${({ hasRefer }) => hasRefer && 'padding-top: 44px;'}
`

export const Body = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  position: relative;
`

export const Connected = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.primaryDisabled};
  height: 100%;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  display: flex;
  padding: 12px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  ${({ theme }) => theme.typography.text_14_20};
`

export const ConnectedAvatar = styled(Avatar)`
  margin-right: 10px;
`

export const Header = styled(UserHeader)`
  margin-bottom: 15px;
`

export const UserAvatar = styled(Avatar)`
  margin-right: 10px;
`

export const UserName = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  font-weight: bold;
`

export const Date = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Text = styled(DisplayText)`
  ${({ theme }) => theme.typography.text_16_20};
  margin-bottom: 15px;
`

export const Target = styled.div`
  margin-bottom: 15px;
`

export const Actions = styled.div`
  display: flex;
`

export const Action = styled(PostAction)`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`
