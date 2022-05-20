import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Touchable from 'src/components/Touchable/Touchable'
import Input from '../../../../components/Input/Input'
import CommonLogo from '../../../../components/CommonLogo/CommonLogo'
import Container from '../../../../components/Container/Container'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  margin-bottom: 100px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_32_38}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  font-weight: 500;
  margin-bottom: 15px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
  text-align: center;
  padding: 0 15%;
`

export const CodeInput = styled(Input).attrs({
  inputClassName: 'input'
})`
  .input {
    ${({ theme }) => theme.typography.text_16_20};
    text-align: center;
    padding: 10px;
  }
`
