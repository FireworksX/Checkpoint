import styled from 'styled-components'
import Container from 'src/components/Container/Container'

export const Root = styled(Container)`
  padding-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 15px;
`

export const Counter = styled.div`
  margin-left: 10px;
`
