import styled from 'styled-components'
import Input from 'src/components/Input/Input'

export const Root = styled.div``

export const InputField = styled(Input).attrs({ inputClassName: 'input' })`
  .input {
    ${({ theme }) => theme.typography.text_32_38};
    font-weight: 900;
  }
`
