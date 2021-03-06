import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Input from 'src/components/Input/Input'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Container from 'src/components/Container/Container'

export const Root = styled.div``

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_32_38}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  font-weight: 500;
  margin-top: 100px;
  margin-bottom: 15px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
  text-align: center;
  padding: 0 15%;
`

export const CountrySection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const CountrySector = styled(Container)`
  height: 50px;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typography.text_16_20};
`

export const CountryFlag = styled(CommonLogo)`
  margin-right: 15px;
`

export const PhoneSection = styled.form`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const PhoneCode = styled(Input).attrs({ inputClassName: 'input' })`
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  width: 20%;

  .input {
    border-radius: 0;
    height: 50px;
    padding: 10px;
    text-align: center;
    border: none;
    ${({ theme }) => theme.typography.text_16_20};
  }
`

export const PhoneNumber = styled(Input).attrs({ inputClassName: 'input' })`
  .input {
    border-radius: 0;
    height: 50px;
    padding: 10px 15px;
    border: none;
    ${({ theme }) => theme.typography.text_16_20};
  }
`

export const ButtonWrapper = styled(Container)`
  margin-top: 20px;
`
