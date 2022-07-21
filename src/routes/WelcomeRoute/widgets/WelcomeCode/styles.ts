import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Input from 'src/components/Input/Input'

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
    letter-spacing: 15px;
  }
`

export const CodePlaceholder = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.accentAmberBg};
  text-align: center;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const CodeValue = styled.div`
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
  margin-top: 10px;
`
