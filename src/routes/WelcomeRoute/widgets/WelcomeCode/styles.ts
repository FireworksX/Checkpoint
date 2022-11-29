import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Input from 'src/components/Input/Input'
import BaseImage from '../../../../components/BaseImage/BaseImage'
import Page from "../../../../widgets/Page/Page";

export const Root = styled(Page)``

export const CoverWrapper = styled.div`
  text-align: center;
  padding-top: 100px;
  margin-bottom: 40px;
`

export const Cover = styled(BaseImage)`
  width: 150px;
`

export const Value = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-top: 10px;
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
