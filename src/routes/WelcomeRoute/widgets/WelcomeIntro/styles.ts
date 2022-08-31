import styled from 'styled-components'
import Input from 'src/components/Input/Input'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Container from 'src/components/Container/Container'
import BaseImage from 'src/components/BaseImage/BaseImage'

export const Root = styled.div``

export const CoverWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 40px;
`

export const Cover = styled(BaseImage)`
  width: 180px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_32_38}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 15px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 40px;
  text-align: center;
  padding: 0 15%;
`

export const MailSection = styled.form`
  display: flex;
  align-items: center;
`

export const MailNumber = styled(Input).attrs({ inputClassName: 'input' })`
  .input {
    height: 50px;
    padding: 10px 15px;
    ${({ theme }) => theme.typography.text_16_20};
  }
`

export const ButtonWrapper = styled(Container)`
  margin-top: 20px;
`
