import styled from 'styled-components'
import Container from 'src/components/Container/Container'

export const Root = styled(Container)``

export const FieldWrapper = styled.div`
  margin-bottom: 10px;
`

export const FieldDescription = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  text-align: right;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.secondary};
`
