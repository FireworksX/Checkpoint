import styled from 'styled-components'
import Input from 'src/components/Input/Input'

export const Root = styled.div``

export const InputField = styled(Input).attrs({ inputClassName: 'input', textarea: true })`
  .input {
    ${({ theme }) => theme.typography.text_14_24};
  }
`
