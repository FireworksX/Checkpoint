import styled from 'styled-components'
import Container from 'src/components/Container/Container'
import UserHeader from '../../components/UserHeader/UserHeader'
import Input from '../../components/Input/Input'
import Separator from '../../components/Separator/Separator'
import Button from '../../components/Button/Button'
import DisplayText from '../../widgets/DisplayText/DisplayText'
import TextEditor from '../../widgets/TextEditor/TextEditor'

interface Props {
  hasParent?: boolean
}

export const Root = styled(Container)<Props>`
  padding-bottom: 30px;
  ${({ hasParent, theme }) => !hasParent && `padding-top: ${theme.baseStyles.paddings.gutterMobile}`};
`

export const ConnectedSection = styled(DisplayText)`
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  padding: 15px 10px;
  margin-left: 22px;
  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.typography.text_14_20}
`

export const Header = styled(UserHeader)`
  margin-bottom: 15px;
`

export const Editor = styled(TextEditor)`
  margin-bottom: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
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
