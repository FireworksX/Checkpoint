import styled from 'styled-components'
import Input from 'src/components/Input/Input'

export const Root = styled.div`
  padding: 7px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
`

export const Target = styled(Input).attrs({ inputClassName: 'input' })`
  .input {
    padding-top: 8px;
    padding-bottom: 8px;
    background: ${({ theme }) => theme.colors.secondaryLightBg};
  }
`
