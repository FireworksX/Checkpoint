import styled from 'styled-components'
import Input from 'src/components/Input/Input'
import BaseImage from '../../../../components/BaseImage/BaseImage'
import Page from '../../../../widgets/Page/Page'

export const Root = styled(Page)``

export const CoverWrapper = styled.div`
  text-align: center;
  padding-top: 100px;
  margin-bottom: 40px;
`

export const Cover = styled(BaseImage)`
  width: 150px;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.textColorDark};
  margin-bottom: 30px;
  text-align: center;
  padding: 0 15%;
`

export const DescriptionMail = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

export const Resend = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.textColorDark};
  margin-top: 20px;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin: 0 3px;
  }
`

export const CodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CodeInput = styled(Input).attrs({
  inputClassName: 'input'
})`
  .input {
    ${({ theme }) => theme.typography.text_32_38};
    font-weight: bold;
    text-align: center;
    padding: 10px;
    letter-spacing: 15px;
    border: 3px solid ${({ theme }) => theme.colors.primaryDisabled};
  }
`
