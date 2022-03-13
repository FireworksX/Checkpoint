import Container from 'src/components/Container/Container'
import styled from 'styled-components'
import Input from 'src/components/Input/Input'

export const Root = styled(Container)`
  min-height: 70vh;
  padding-bottom: 20px;
`

export const Title = styled.h2`
  ${({ theme }) => theme.typography.text_18_22}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`

export const Field = styled(Input)`
  margin-bottom: 10px;
`
